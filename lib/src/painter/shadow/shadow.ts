import { TgdContext } from "@tgd/context"
import { TgdGeometry } from "@tgd/geometry"
import { TgdMat4, TgdTransfo } from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import {
    webglCullGet,
    webglCullSet,
    webglDepthGet,
    webglDepthSet,
    webglPresetCull,
    webglPresetDepth,
} from "@tgd/utils"
import { TgdVertexArray } from "@tgd/vao"
import { mat4 } from "gl-matrix"
import type { TgdMesh } from "../mesh/types"
import { TgdPainter } from "../painter"

export interface TgdPainterShadowOptions {
    /**
     * The light is an oriented area.
     * It works like a camera, -Z points to the target.
     * X is the width.
     * Y is the height.
     */
    light: {
        transfo: TgdTransfo
        width: number
        height: number
    }
    /**
     * Meshes casting shadows. Their `material` is ignored.
     * `children` and `visible` work like in {@link TgdPainterMeshes}.
     */
    meshes?: TgdMesh[]
}

interface ProgramCache {
    attPosition: string
    prg: TgdProgram
    /** Items drawn with this program. */
    items: Set<MeshItem>
}

interface MeshItem {
    cache: ProgramCache
    vao: TgdVertexArray
    geometry: TgdGeometry
    /** Last frame this mesh was found in the tree. */
    frame: number
}

/**
 * Framebuffer that holds the distance of a fragment from a light.
 *
 * A mesh can have `children`. Their `transfo` is relative to the parent's one.
 * If `visible` is false, neither the mesh nor its children are painted.
 * A mesh without `geometry` is not painted, but its children are.
 *
 * @see {@link TgdPainterShadowOptions}
 */
export class TgdPainterShadow extends TgdPainter {
    public readonly light: TgdPainterShadowOptions["light"]

    /** We only need a new program if the `attPosition` name is different. */
    private readonly programs = new Map<string, ProgramCache>()
    private readonly items = new Map<TgdMesh, MeshItem>()
    private readonly roots: TgdMesh[] = []
    private frame = 0
    /** World matrices, reused from frame to frame to avoid allocations. */
    private readonly matricesPool: TgdMat4[] = []
    /** Meshes to draw in this frame, in painting order. */
    private readonly drawItems: MeshItem[] = []
    private readonly drawMatrices: TgdMat4[] = []
    private drawCount = 0

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterShadowOptions,
    ) {
        super()
        this.light = options.light
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

    paint(_time: number, _delta: number): void {
        this.frame++
        this.drawCount = 0
        let poolIndex = 0
        for (const root of this.roots) {
            poolIndex = this.collect(root, undefined, poolIndex)
        }
        this.releaseUnusedItems()
        const { context, drawItems, drawMatrices, drawCount } = this
        const { gl, camera } = context
        const previousDepth = webglDepthGet(context)
        const previousCull = webglCullGet(context)
        webglDepthSet(context, webglPresetDepth.less)
        webglCullSet(context, webglPresetCull.back)
        let currentPrg: TgdProgram | undefined
        for (let index = 0; index < drawCount; index++) {
            const { cache, vao, geometry } = drawItems[index]
            const { prg } = cache
            if (prg !== currentPrg) {
                currentPrg = prg
                prg.use()
                prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
                prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
            }
            prg.uniformMatrix4fv("uniTransfoMatrix", drawMatrices[index])
            vao.bind()
            if (geometry.elements) {
                gl.drawElements(geometry.drawMode, geometry.count, geometry.elementsType, 0)
            } else {
                gl.drawArrays(geometry.drawMode, 0, geometry.count)
            }
            vao.unbind()
        }
        webglDepthSet(context, previousDepth)
        webglCullSet(context, previousCull)
    }

    delete() {
        for (const [mesh, item] of this.items) {
            this.releaseItem(mesh, item)
        }
        this.roots.splice(0)
    }

    /**
     * Compute the world matrix of `mesh` and of its children (depth first),
     * and push the ones to paint in `drawItems`.
     * Invisible meshes are skipped with all their children.
     * @returns The next free index in `matricesPool`.
     */
    private collect(mesh: TgdMesh, parentMatrix: TgdMat4 | undefined, poolIndex: number): number {
        if (!mesh.visible) {
            this.keepHidden(mesh)
            return poolIndex
        }

        const matrix = this.getPoolMatrix(poolIndex++)
        if (parentMatrix) mat4.multiply(matrix, parentMatrix, mesh.transfo.matrix)
        else matrix.from(mesh.transfo.matrix)
        const item = this.getItem(mesh)
        if (item) {
            this.drawItems[this.drawCount] = item
            this.drawMatrices[this.drawCount] = matrix
            this.drawCount++
        }
        for (const child of mesh.children ?? []) {
            poolIndex = this.collect(child, matrix, poolIndex)
        }
        return poolIndex
    }

    /**
     * Prevent the existing items of a hidden subtree from being released,
     * so that showing it again does not rebuild VAOs and programs.
     * No item is created here: that will happen when the mesh becomes visible.
     */
    private keepHidden(mesh: TgdMesh) {
        const item = this.items.get(mesh)
        if (item && item.geometry === mesh.geometry) item.frame = this.frame
        for (const child of mesh.children ?? []) {
            this.keepHidden(child)
        }
    }

    private getPoolMatrix(index: number): TgdMat4 {
        const { matricesPool } = this
        while (matricesPool.length <= index) matricesPool.push(new TgdMat4())
        return matricesPool[index]
    }

    /**
     * @returns `undefined` if the mesh cannot be painted (no geometry).
     */
    private getItem(mesh: TgdMesh): MeshItem | undefined {
        const { geometry } = mesh
        if (!geometry) return undefined

        let item = this.items.get(mesh)
        if (item && item.geometry !== geometry) {
            this.releaseItem(mesh, item)
            item = undefined
        }
        if (!item) {
            const cache = this.getProgram(geometry.attPosition)
            const vao = new TgdVertexArray(this.context.gl, cache.prg, [geometry.dataset], geometry.elements)
            item = { cache, vao, geometry, frame: this.frame }
            cache.items.add(item)
            this.items.set(mesh, item)
        }
        item.frame = this.frame
        return item
    }

    private releaseUnusedItems() {
        for (const [mesh, item] of this.items) {
            if (item.frame !== this.frame) this.releaseItem(mesh, item)
        }
    }

    private releaseItem(mesh: TgdMesh, item: MeshItem) {
        if (this.items.get(mesh) === item) this.items.delete(mesh)
        const { cache, vao } = item
        vao.delete()
        cache.items.delete(item)
        if (cache.items.size > 0) return

        cache.prg.delete()
        this.programs.delete(cache.attPosition)
    }

    private getProgram(attPosition: string): ProgramCache {
        const cache = this.programs.get(attPosition)
        if (cache) return cache

        const vert = new TgdShaderVertex({
            uniforms: {
                uniTransfoMatrix: "mat4",
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
            },
            attributes: {
                [attPosition]: "vec4",
            },
            mainCode: [
                `gl_Position = uniProjectionMatrix * uniModelViewMatrix * uniTransfoMatrix * ${attPosition};`,
            ],
        })
        const frag = new TgdShaderFragment({
            outputs: { FragColor: "vec4" },
            mainCode: ["FragColor = vec4(1.0, 0.7, 0.1, 1.0);"],
        })
        const prg = new TgdProgram(this.context.gl, {
            vert: vert.code,
            frag: frag.code,
        })
        const newCache: ProgramCache = { attPosition, prg, items: new Set<MeshItem>() }
        this.programs.set(attPosition, newCache)
        return newCache
    }
}
