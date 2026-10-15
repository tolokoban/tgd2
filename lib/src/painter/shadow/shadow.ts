import { TgdCameraOrthographic } from "@tgd/camera"
import { TgdContext } from "@tgd/context"
import { TgdGeometry } from "@tgd/geometry"
import { TgdMat4, TgdTransfo } from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import { TgdTexture2D } from "@tgd/texture"
import {
    webglBlendGet,
    webglBlendSet,
    webglCreateFramebuffer,
    webglCullGet,
    webglCullSet,
    webglDepthGet,
    webglDepthSet,
    webglLookup,
    webglPresetBlend,
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
     * The size in pixel of the texture in the largest side.
     * Defaults to 1024.
     */
    resolution?: number
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
 * The result is stored in {@link TgdPainterShadow.texture}.
 *
 * A mesh can have `children`. Their `transfo` is relative to the parent's one.
 * If `visible` is false, neither the mesh nor its children are painted.
 * A mesh without `geometry` is not painted, but its children are.
 *
 * @see {@link TgdPainterShadowOptions}
 */
export class TgdPainterShadow extends TgdPainter {
    public readonly light: TgdPainterShadowOptions["light"]
    /**
     * Orthographic camera looking from the light.
     * Its transfo and size are synchronized with `light` at each `paint()`,
     * but you can tweak its `near` and `far` planes.
     */
    public readonly camera = new TgdCameraOrthographic()
    /**
     * Texture with a single 32 bits float channel (`R32F`) holding,
     * for each texel, the distance from the light of the nearest fragment.
     * Texels where nothing has been painted hold `camera.far`.
     *
     * Its size is computed from `resolution` and from the aspect ratio of the light.
     * It uses `NEAREST` filtering, because linear filtering of 32 bits floats
     * is not available everywhere.
     */
    public readonly texture: TgdTexture2D
    /**
     * Size in pixels of the largest side of {@link TgdPainterShadow.texture}.
     */
    public resolution: number

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
    private framebuffer: WebGLFramebuffer | null = null
    private depthBuffer: WebGLRenderbuffer | null = null
    private framebufferWidth = 0
    private framebufferHeight = 0
    /** Value used to clear the texture. */
    private readonly clearColor = new Float32Array(4)
    private readonly clearDepth = new Float32Array([1])

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterShadowOptions,
    ) {
        super()
        if (!context.extensions.EXT_color_buffer_float) {
            context.console.error(
                "[TgdPainterShadow] Extension EXT_color_buffer_float is not available: the shadow texture cannot be rendered!",
            )
        }
        this.light = options.light
        this.resolution = options.resolution ?? 1024
        this.texture = new TgdTexture2D(context, {
            name: `${this.name}/texture`,
            storage: {
                format: "R32F / RED / FLOAT",
            },
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
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
        const camera = this.updateCamera()
        const [width, height] = this.computeSize()
        const framebuffer = this.updateFramebuffer(width, height)
        const { context } = this
        const { gl } = context
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
        context.paintInCustomSize(width, height, () => this.paintMeshes(camera))
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
    }

    private paintMeshes(camera: TgdCameraOrthographic) {
        const { context, drawItems, drawMatrices, drawCount, clearColor, clearDepth } = this
        const { gl } = context
        const previousDepth = webglDepthGet(context)
        const previousCull = webglCullGet(context)
        const previousBlend = webglBlendGet(context)
        webglDepthSet(context, webglPresetDepth.less)
        webglCullSet(context, webglPresetCull.back)
        // Blending is not possible on 32 bits float textures without EXT_float_blend.
        webglBlendSet(context, webglPresetBlend.off)
        // Nothing can be farther than the far plane.
        clearColor[0] = camera.far
        gl.clearBufferfv(gl.COLOR, 0, clearColor)
        gl.clearBufferfv(gl.DEPTH, 0, clearDepth)
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
        webglBlendSet(context, previousBlend)
    }

    /**
     * Size of the texture: `resolution` on the largest side,
     * and the other side follows the aspect ratio of the light.
     */
    private computeSize(): [width: number, height: number] {
        const { resolution, light } = this
        const size = Math.max(1, Math.round(resolution))
        if (light.width >= light.height) {
            return [size, Math.max(1, Math.round((size * light.height) / light.width))]
        }
        return [Math.max(1, Math.round((size * light.width) / light.height)), size]
    }

    /**
     * (Re)create the framebuffer if the size has changed.
     */
    private updateFramebuffer(width: number, height: number): WebGLFramebuffer {
        const { framebuffer, framebufferWidth, framebufferHeight } = this
        if (framebuffer && width === framebufferWidth && height === framebufferHeight) return framebuffer

        this.deleteFramebuffer()
        const { context, texture } = this
        const { gl } = context
        texture.resize(width, height)
        const newFramebuffer = webglCreateFramebuffer(gl)
        const depthBuffer = gl.createRenderbuffer()
        if (!depthBuffer) throw new Error("[TgdPainterShadow] Unable to create WebGLRenderbuffer for depth!")

        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, newFramebuffer)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture.glTexture, 0)
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT24, width, height)
        gl.bindRenderbuffer(gl.RENDERBUFFER, null)
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer)
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            context.console.error(`[TgdPainterShadow] The framebuffer is incomplete: ${webglLookup(status)}!`)
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
        this.framebuffer = newFramebuffer
        this.depthBuffer = depthBuffer
        this.framebufferWidth = width
        this.framebufferHeight = height
        return newFramebuffer
    }

    private deleteFramebuffer() {
        const { gl } = this.context
        if (this.framebuffer) gl.deleteFramebuffer(this.framebuffer)
        if (this.depthBuffer) gl.deleteRenderbuffer(this.depthBuffer)
        this.framebuffer = null
        this.depthBuffer = null
        this.framebufferWidth = 0
        this.framebufferHeight = 0
    }

    /**
     * Synchronize the camera with the light.
     */
    private updateCamera(): TgdCameraOrthographic {
        const { camera, light } = this
        camera.transfo.from(light.transfo)
        camera.screenWidth = light.width
        camera.screenHeight = light.height
        // The orthographic projection goes from -spaceHeight to +spaceHeight.
        camera.spaceHeight = light.height * 0.5
        return camera
    }

    delete() {
        for (const [mesh, item] of this.items) {
            this.releaseItem(mesh, item)
        }
        this.roots.splice(0)
        this.deleteFramebuffer()
        this.texture.delete()
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
            varying: {
                varDistanceFromSun: "float",
            },
            mainCode: [
                `vec4 position = uniModelViewMatrix * uniTransfoMatrix * ${attPosition};`,
                // The light looks toward -Z.
                "varDistanceFromSun = -position.z;",
                "gl_Position = uniProjectionMatrix * position;",
            ],
        })
        const frag = new TgdShaderFragment({
            varying: {
                varDistanceFromSun: "float",
            },
            outputs: { FragColor: "float" },
            mainCode: ["FragColor = varDistanceFromSun;"],
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
