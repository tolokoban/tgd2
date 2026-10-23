import type { TgdGeometry } from "@tgd/geometry"
import type { TgdMaterial } from "@tgd/material"
import { TgdMat4 } from "@tgd/math"
import type { TgdProgram } from "@tgd/program"
import { TgdVertexArray } from "@tgd/vao"
import { mat4 } from "gl-matrix"
import type { TgdMesh } from "./types"

export interface TgdMeshTreeOptions {
    meshes?: TgdMesh[]
    /**
     * If `true`, the materials of the meshes are ignored:
     * every mesh with a geometry is painted, and the `material`
     * given to `createProgram()` and to the batches is always `undefined`.
     *
     * If `false`, a mesh without `material` uses the one of its closest ancestor,
     * and it is not painted if there is none.
     *
     * Default to **false**.
     */
    ignoreMaterials?: boolean
    /**
     * Two geometries with the same key (and the same material) share the same program.
     * The key must change as soon as the program would be different,
     * for instance if it depends on the attribute names of the geometry.
     *
     * The key can also depend on `mesh`, if the program does.
     * When the key of a mesh changes, a new program is used for it.
     *
     * Default to the concatenation of `attPosition`, `attNormal`, `attTangent` and `attUV`.
     */
    programKey?(geometry: TgdGeometry, mesh: TgdMesh): string
    /**
     * Create the program used to paint `geometry` with `material`.
     * The vertex shader must declare the `mat4 uniTransfoMatrix` uniform:
     * it receives the world matrix of each mesh.
     *
     * `mesh` is the first mesh that needs this program.
     * If the program depends on it, `programKey()` must depend on it too.
     *
     * The program is deleted by the tree when no mesh uses it anymore.
     */
    createProgram(geometry: TgdGeometry, material: TgdMaterial | undefined, mesh: TgdMesh): TgdProgram
    /**
     * Called just before drawing each mesh, with the program already in use
     * and `uniTransfoMatrix` already set.
     * Use it to set uniforms or textures that depend on the mesh.
     */
    beforeDraw?(mesh: TgdMesh, program: TgdProgram): void
    /**
     * If defined, a mesh is painted only if `filter(mesh)` returns `true`.
     * Its children are still visited, even if it is filtered out.
     * The filter is evaluated on every `update()`.
     */
    filter?(mesh: TgdMesh): boolean
}

/**
 * Consecutive meshes sharing the same program and the same material.
 */
export interface TgdMeshTreeBatch {
    readonly program: TgdProgram
    readonly material: TgdMaterial | undefined
    /**
     * Draw all the meshes of the batch.
     * The program must already be in use.
     * `uniTransfoMatrix` is set for each mesh.
     */
    readonly draw: () => void
}

interface ProgramCache {
    key: string
    prg: TgdProgram
    material: TgdMaterial | undefined
    /** Items drawn with this program. */
    items: Set<MeshItem>
}

interface MeshItem {
    mesh: TgdMesh
    cache: ProgramCache
    vao: TgdVertexArray
    geometry: TgdGeometry
    material: TgdMaterial | undefined
    /** Last frame this mesh was found in the tree. */
    frame: number
}

/**
 * When materials are ignored, this is the key used in the maps.
 */
const NO_MATERIAL = null

/**
 * Manage the GPU resources (programs and VAOs) needed to paint a tree of {@link TgdMesh},
 * and compute the world matrix of each mesh.
 * This is the building block of {@link TgdPainterMeshes}, {@link TgdPainterShadow}
 * and {@link TgdPainterDeferredShading}.
 *
 * A mesh can have `children`. Their `transfo` is relative to the parent's one.
 * If `visible` is false, neither the mesh nor its children are painted.
 * A mesh without `geometry` is not painted, but its children are.
 *
 * The tree is read on every `update()`, so you can add/remove children at runtime.
 * GPU resources of meshes that are no longer in the tree are released on the next `update()`.
 * The resources of hidden meshes are kept.
 *
 * @example
 * ```ts
 * const tree = new TgdMeshTree(context, {
 *     meshes: [suzanne],
 *     ignoreMaterials: true,
 *     createProgram: (geometry) => makeMyProgram(geometry),
 * })
 * // In paint():
 * tree.update()
 * tree.forEachBatch((batch) => {
 *     batch.program.use()
 *     batch.program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
 *     batch.program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
 *     batch.draw()
 * })
 * // In delete():
 * tree.delete()
 * ```
 *
 * @see {@link TgdMeshTreeOptions}
 */
export class TgdMeshTree {
    /** A program depends on the material and on the key of the geometry. */
    private readonly programs = new Map<TgdMaterial | null, Map<string, ProgramCache>>()
    /**
     * The same mesh can be in several places of the tree,
     * and inherit a different material in each of them.
     */
    private readonly items = new Map<TgdMesh, Map<TgdMaterial | null, MeshItem>>()
    private readonly roots: TgdMesh[] = []
    private readonly ignoreMaterials: boolean
    private readonly programKey: (geometry: TgdGeometry, mesh: TgdMesh) => string
    private readonly createProgram: (
        geometry: TgdGeometry,
        material: TgdMaterial | undefined,
        mesh: TgdMesh,
    ) => TgdProgram
    private readonly beforeDraw: ((mesh: TgdMesh, program: TgdProgram) => void) | undefined
    private readonly filter: ((mesh: TgdMesh) => boolean) | undefined
    private frame = 0
    /** World matrices, reused from frame to frame to avoid allocations. */
    private readonly matricesPool: TgdMat4[] = []
    /** Meshes to draw in this frame, in painting order. */
    private readonly drawItems: MeshItem[] = []
    private readonly drawMatrices: TgdMat4[] = []
    private drawCount = 0
    /** Reused for every batch to avoid allocations. */
    private readonly batch: {
        program: TgdProgram | undefined
        material: TgdMaterial | undefined
        start: number
        end: number
        draw: () => void
    }

    constructor(
        private readonly context: { gl: WebGL2RenderingContext },
        options: TgdMeshTreeOptions,
    ) {
        this.ignoreMaterials = options.ignoreMaterials ?? false
        this.programKey = options.programKey ?? defaultProgramKey
        this.createProgram = options.createProgram
        this.beforeDraw = options.beforeDraw
        this.filter = options.filter
        this.batch = {
            program: undefined,
            material: undefined,
            start: 0,
            end: 0,
            draw: this.drawBatch,
        }
        for (const mesh of options.meshes ?? []) {
            this.add(mesh)
        }
    }

    /**
     * Number of meshes to paint in the current frame, as computed by the last `update()`.
     */
    get count() {
        return this.drawCount
    }

    add(mesh: TgdMesh) {
        if (this.roots.includes(mesh)) return

        this.roots.push(mesh)
    }

    /**
     * The GPU resources of the mesh (and its children) will be released on next `update()`.
     */
    remove(mesh: TgdMesh) {
        const index = this.roots.indexOf(mesh)
        if (index < 0) return

        this.roots.splice(index, 1)
    }

    /**
     * Read the tree, compute the world matrices,
     * create the missing GPU resources and release the unused ones.
     * Call it once per frame, before `forEachBatch()`.
     */
    update() {
        this.frame++
        this.drawCount = 0
        let poolIndex = 0
        for (const root of this.roots) {
            poolIndex = this.collect(root, undefined, undefined, poolIndex)
        }
        this.releaseUnusedItems()
    }

    /**
     * Call `callback` for each group of consecutive meshes sharing the same program,
     * in painting order.
     * The batch object is reused between calls: don't keep a reference to it.
     */
    forEachBatch(callback: (batch: TgdMeshTreeBatch) => void) {
        const { drawItems, drawCount, batch } = this
        let start = 0
        while (start < drawCount) {
            const { cache } = drawItems[start]
            let end = start + 1
            while (end < drawCount && drawItems[end].cache === cache) end++
            batch.program = cache.prg
            batch.material = cache.material
            batch.start = start
            batch.end = end
            callback(batch as TgdMeshTreeBatch)
            start = end
        }
    }

    /**
     * Release all the GPU resources and forget all the meshes.
     */
    delete() {
        for (const byMaterial of this.items.values()) {
            for (const item of byMaterial.values()) this.releaseItem(item)
        }
        this.roots.splice(0)
    }

    /** Draw the meshes from `batch.start` to `batch.end` (excluded). They all share the same program. */
    private readonly drawBatch = () => {
        const { gl } = this.context
        const { drawItems, drawMatrices, batch } = this
        for (let index = batch.start; index < batch.end; index++) {
            const { mesh, cache, vao, geometry } = drawItems[index]
            cache.prg.uniformMatrix4fv("uniTransfoMatrix", drawMatrices[index])
            this.beforeDraw?.(mesh, cache.prg)
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
        const material = this.resolveMaterial(mesh, parentMaterial)
        const item = !this.filter || this.filter(mesh) ? this.getItem(mesh, material) : undefined
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
        const material = this.resolveMaterial(mesh, parentMaterial)
        const item = this.items.get(mesh)?.get(material ?? NO_MATERIAL)
        if (item && item.geometry === mesh.geometry) item.frame = this.frame
        for (const child of mesh.children ?? []) {
            this.keepHidden(child, material)
        }
    }

    private resolveMaterial(mesh: TgdMesh, parentMaterial: TgdMaterial | undefined): TgdMaterial | undefined {
        if (this.ignoreMaterials) return undefined

        return mesh.material ?? parentMaterial
    }

    private getPoolMatrix(index: number): TgdMat4 {
        const { matricesPool } = this
        while (matricesPool.length <= index) matricesPool.push(new TgdMat4())
        return matricesPool[index]
    }

    /**
     * @returns `undefined` if the mesh cannot be painted (no geometry, or no material when they are not ignored).
     */
    private getItem(mesh: TgdMesh, material: TgdMaterial | undefined): MeshItem | undefined {
        const { geometry } = mesh
        if (!geometry) return undefined
        if (!material && !this.ignoreMaterials) return undefined

        const materialKey = material ?? NO_MATERIAL
        let byMaterial = this.items.get(mesh)
        if (!byMaterial) {
            byMaterial = new Map<TgdMaterial | null, MeshItem>()
            this.items.set(mesh, byMaterial)
        }
        const key = this.programKey(geometry, mesh)
        let item = byMaterial.get(materialKey)
        if (item && (item.geometry !== geometry || item.cache.key !== key)) {
            this.releaseItem(item)
            item = undefined
        }
        if (!item) {
            const cache = this.getProgram(key, geometry, material, mesh)
            const vao = new TgdVertexArray(this.context.gl, cache.prg, [geometry.dataset], geometry.elements)
            item = { mesh, cache, vao, geometry, material, frame: this.frame }
            cache.items.add(item)
            // `releaseItem()` may have removed `byMaterial` from `this.items`.
            this.items.set(mesh, byMaterial)
            byMaterial.set(materialKey, item)
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
        const { mesh, cache, vao } = item
        const materialKey = item.material ?? NO_MATERIAL
        const byMaterial = this.items.get(mesh)
        if (byMaterial?.get(materialKey) === item) {
            byMaterial.delete(materialKey)
            if (byMaterial.size === 0) this.items.delete(mesh)
        }
        vao.delete()
        cache.items.delete(item)
        if (cache.items.size > 0) return

        cache.prg.delete()
        const cacheMaterialKey = cache.material ?? NO_MATERIAL
        const byKey = this.programs.get(cacheMaterialKey)
        if (!byKey) return

        byKey.delete(cache.key)
        if (byKey.size === 0) this.programs.delete(cacheMaterialKey)
    }

    private getProgram(
        key: string,
        geometry: TgdGeometry,
        material: TgdMaterial | undefined,
        mesh: TgdMesh,
    ): ProgramCache {
        const materialKey = material ?? NO_MATERIAL
        let byKey = this.programs.get(materialKey)
        if (!byKey) {
            byKey = new Map<string, ProgramCache>()
            this.programs.set(materialKey, byKey)
        }
        const cache = byKey.get(key)
        if (cache) return cache

        const prg = this.createProgram(geometry, material, mesh)
        const newCache: ProgramCache = { key, prg, material, items: new Set<MeshItem>() }
        byKey.set(key, newCache)
        return newCache
    }
}

function defaultProgramKey(geometry: TgdGeometry): string {
    return `${geometry.attPosition}/${geometry.attNormal}/${geometry.attTangent}/${geometry.attUV}`
}
