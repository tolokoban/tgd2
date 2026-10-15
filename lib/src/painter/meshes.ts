import type { TgdContext } from "@tgd/context"
import type { TgdGeometry } from "@tgd/geometry"
import type { TgdMaterial } from "@tgd/material"
import { TgdMat4 } from "@tgd/math"
import type { TgdProgram } from "@tgd/program"
import { TgdVertexArray } from "@tgd/vao"
import { mat4 } from "gl-matrix"
import { tgdMaterialApplyUniforms, tgdMaterialCreateProgram } from "./mesh/material-program"
import type { TgdMesh } from "./mesh/types"
import { TgdPainter } from "./painter"

export interface TgdPainterMeshesOptions {
    meshes?: TgdMesh[]
}

interface ProgramCache {
    key: string
    prg: TgdProgram
    material: TgdMaterial
    /** Items drawn with this program. */
    items: Set<MeshItem>
}

interface MeshItem {
    mesh: TgdMesh
    cache: ProgramCache
    vao: TgdVertexArray
    geometry: TgdGeometry
    material: TgdMaterial
    /** Last frame this mesh was found in the tree. */
    frame: number
}

/**
 * Paint a list of meshes, each with its own geometry, material and transfo.
 *
 * A mesh can have `children`. They are painted after their parent,
 * and their `transfo` is relative to the parent's one.
 * If `visible` is false, neither the mesh nor its children are painted.
 * A mesh without `material` uses the one of its closest ancestor that has one.
 * A mesh without `geometry` (or without any material) is not painted,
 * but its children are. That's useful for grouping meshes.
 *
 * Meshes sharing the same material (and the same attribute names) share the same program.
 * The WebGL state (depth, cull, blend…) is the one defined by each material.
 *
 * The tree is read on every frame, so you can add/remove children at runtime.
 * GPU resources of meshes that are no longer in the tree are released on the next `paint()`.
 *
 * @see {@link TgdPainterMeshesOptions}
 */
export class TgdPainterMeshes extends TgdPainter {
    /** A program depends on the material and on the attribute names of the geometry. */
    private readonly programs = new Map<TgdMaterial, Map<string, ProgramCache>>()
    /**
     * The same mesh can be in several places of the tree,
     * and inherit a different material in each of them.
     */
    private readonly items = new Map<TgdMesh, Map<TgdMaterial, MeshItem>>()
    private readonly roots: TgdMesh[] = []
    private frame = 0
    /** World matrices, reused from frame to frame to avoid allocations. */
    private readonly matricesPool: TgdMat4[] = []
    /** Meshes to draw in this frame, in painting order. */
    private readonly drawItems: MeshItem[] = []
    private readonly drawMatrices: TgdMat4[] = []
    private drawCount = 0
    private batchStart = 0
    private batchEnd = 0

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterMeshesOptions = {},
    ) {
        super()
        for (const mesh of options.meshes ?? []) {
            this.add(mesh)
        }
    }

    add(mesh: TgdMesh) {
        if (this.roots.includes(mesh)) return

        this.roots.push(mesh)
    }

    /**
     * The GPU resources of the mesh (and its children) will be released on next `paint()`.
     */
    remove(mesh: TgdMesh) {
        const index = this.roots.indexOf(mesh)
        if (index < 0) return

        this.roots.splice(index, 1)
    }

    paint(time: number, delta: number): void {
        this.frame++
        this.drawCount = 0
        let poolIndex = 0
        for (const root of this.roots) {
            poolIndex = this.collect(root, undefined, undefined, poolIndex)
        }
        this.releaseUnusedItems()
        const { context, drawItems, drawCount } = this
        const { camera } = context
        let start = 0
        while (start < drawCount) {
            const { cache } = drawItems[start]
            let end = start + 1
            while (end < drawCount && drawItems[end].cache === cache) end++
            const { prg, material } = cache
            prg.use()
            tgdMaterialApplyUniforms(material, context, prg, time, delta)
            prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
            prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
            this.batchStart = start
            this.batchEnd = end
            material.applyState(context, this.drawBatch)
            start = end
        }
    }

    delete() {
        for (const byMaterial of this.items.values()) {
            for (const item of byMaterial.values()) this.releaseItem(item)
        }
        this.roots.splice(0)
    }

    /** Draw the meshes from `batchStart` to `batchEnd` (excluded). They all share the same program. */
    private readonly drawBatch = () => {
        const { gl } = this.context
        const { drawItems, drawMatrices } = this
        for (let index = this.batchStart; index < this.batchEnd; index++) {
            const { cache, vao, geometry } = drawItems[index]
            cache.prg.uniformMatrix4fv("uniTransfoMatrix", drawMatrices[index])
            vao.bind()
            if (geometry.elements) {
                gl.drawElements(geometry.drawMode, geometry.count, geometry.elementsType, 0)
            } else {
                gl.drawArrays(geometry.drawMode, 0, geometry.count)
            }
            vao.unbind()
        }
    }

    /**
     * Compute the world matrix of `mesh` and of its children (depth first),
     * and push the ones to paint in `drawItems`.
     * Invisible meshes are skipped with all their children.
     * @param parentMaterial The material inherited from the closest ancestor that has one.
     * @returns The next free index in `matricesPool`.
     */
    private collect(
        mesh: TgdMesh,
        parentMatrix: TgdMat4 | undefined,
        parentMaterial: TgdMaterial | undefined,
        poolIndex: number,
    ): number {
        if (!mesh.visible) {
            this.keepHidden(mesh, parentMaterial)
            return poolIndex
        }

        const matrix = this.getPoolMatrix(poolIndex++)
        if (parentMatrix) mat4.multiply(matrix, parentMatrix, mesh.transfo.matrix)
        else matrix.from(mesh.transfo.matrix)
        const material = mesh.material ?? parentMaterial
        const item = this.getItem(mesh, material)
        if (item) {
            this.drawItems[this.drawCount] = item
            this.drawMatrices[this.drawCount] = matrix
            this.drawCount++
        }
        for (const child of mesh.children ?? []) {
            poolIndex = this.collect(child, matrix, material, poolIndex)
        }
        return poolIndex
    }

    /**
     * Prevent the existing items of a hidden subtree from being released,
     * so that showing it again does not rebuild VAOs and programs.
     * No item is created here: that will happen when the mesh becomes visible.
     */
    private keepHidden(mesh: TgdMesh, parentMaterial: TgdMaterial | undefined) {
        const material = mesh.material ?? parentMaterial
        if (material) {
            const item = this.items.get(mesh)?.get(material)
            if (item && item.geometry === mesh.geometry) item.frame = this.frame
        }
        for (const child of mesh.children ?? []) {
            this.keepHidden(child, material)
        }
    }

    private getPoolMatrix(index: number): TgdMat4 {
        const { matricesPool } = this
        while (matricesPool.length <= index) matricesPool.push(new TgdMat4())
        return matricesPool[index]
    }

    /**
     * @returns `undefined` if the mesh cannot be painted (no geometry or no material).
     */
    private getItem(mesh: TgdMesh, material: TgdMaterial | undefined): MeshItem | undefined {
        const { geometry } = mesh
        if (!geometry || !material) return undefined

        let byMaterial = this.items.get(mesh)
        if (!byMaterial) {
            byMaterial = new Map<TgdMaterial, MeshItem>()
            this.items.set(mesh, byMaterial)
        }
        let item = byMaterial.get(material)
        if (item && item.geometry !== geometry) {
            this.releaseItem(item)
            item = undefined
        }
        if (!item) {
            const cache = this.getProgram(geometry, material)
            const vao = new TgdVertexArray(this.context.gl, cache.prg, [geometry.dataset], geometry.elements)
            item = { mesh, cache, vao, geometry, material, frame: this.frame }
            cache.items.add(item)
            // `releaseItem()` may have removed `byMaterial` from `this.items`.
            this.items.set(mesh, byMaterial)
            byMaterial.set(material, item)
        }
        item.frame = this.frame
        return item
    }

    private releaseUnusedItems() {
        for (const byMaterial of this.items.values()) {
            for (const item of byMaterial.values()) {
                if (item.frame !== this.frame) this.releaseItem(item)
            }
        }
    }

    private releaseItem(item: MeshItem) {
        const { mesh, material, cache, vao } = item
        const byMaterial = this.items.get(mesh)
        if (byMaterial?.get(material) === item) {
            byMaterial.delete(material)
            if (byMaterial.size === 0) this.items.delete(mesh)
        }
        vao.delete()
        cache.items.delete(item)
        if (cache.items.size > 0) return

        cache.prg.delete()
        const byKey = this.programs.get(cache.material)
        if (!byKey) return

        byKey.delete(cache.key)
        if (byKey.size === 0) this.programs.delete(cache.material)
    }

    private getProgram(geometry: TgdGeometry, material: TgdMaterial): ProgramCache {
        const key = `${geometry.attPosition}/${geometry.attNormal}/${geometry.attTangent}/${geometry.attUV}`
        let byKey = this.programs.get(material)
        if (!byKey) {
            byKey = new Map<string, ProgramCache>()
            this.programs.set(material, byKey)
        }
        const cache = byKey.get(key)
        if (cache) return cache

        const prg = tgdMaterialCreateProgram(this.context.gl, material, geometry)
        const newCache: ProgramCache = { key, prg, material, items: new Set<MeshItem>() }
        byKey.set(key, newCache)
        return newCache
    }
}
