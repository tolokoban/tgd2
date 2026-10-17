import { TgdContext } from "@tgd/context"
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
import { TgdMeshTree, type TgdMeshTreeBatch } from "../mesh/tree"
import type { TgdMesh } from "../mesh/types"
import { TgdPainter } from "../painter"

export interface TgdPainterDeferredShadingOptions {
    /**
     * Meshes to paint. Their `material` is ignored.
     * `children` and `visible` work like in {@link TgdPainterMeshes}.
     */
    meshes?: TgdMesh[]
}

/**
 * Framebuffer that holds the surface normals and the depth of meshes
 * seen from the camera of the context, to be used for deferred shading.
 * The results are stored in {@link TgdPainterDeferredShading.textureNormals}
 * and {@link TgdPainterDeferredShading.textureDepth}.
 * The size of the textures follows the size of the context.
 *
 * A mesh can have `children`. Their `transfo` is relative to the parent's one.
 * If `visible` is false, neither the mesh nor its children are painted.
 * A mesh without `geometry` is not painted, but its children are.
 *
 * @example
 * ```ts
 * const deferred = new TgdPainterDeferredShading(context, { meshes: [suzanne] })
 * context.add(deferred, new TgdPainterProgram(context, {
 *     textures: {
 *         uniNormals: deferred.textureNormals,
 *         uniDepth: deferred.textureDepth,
 *     },
 *     ...
 * }))
 * ```
 *
 * @see {@link TgdPainterDeferredShadingOptions}
 */
export class TgdPainterDeferredShading extends TgdPainter {
    /**
     * Surface normals in the camera space (`RGB10_A2`).
     * The normal `N` is encoded as `N * 0.5 + 0.5` in the RGB channels,
     * so decode it with `texture(...).xyz * 2.0 - 1.0`.
     * The alpha channel is 1 where a mesh has been painted, and 0 elsewhere.
     *
     * Its size is the one of the context.
     */
    public readonly textureNormals: TgdTexture2D
    /**
     * Texture with a single 32 bits float channel (`R32F`) holding,
     * for each texel, the normalized distance of the nearest fragment
     * from the camera, measured along the -Z axis of the camera:
     * 0 on the near plane and 1 on the far plane.
     * Texels where nothing has been painted hold 1.
     *
     * Its size is the one of the context.
     * It uses `NEAREST` filtering, because linear filtering of 32 bits floats
     * is not available everywhere.
     */
    public readonly textureDepth: TgdTexture2D

    private readonly tree: TgdMeshTree
    private framebuffer: WebGLFramebuffer | null = null
    private depthBuffer: WebGLRenderbuffer | null = null
    private framebufferWidth = 0
    private framebufferHeight = 0
    /** Values used to clear the textures. */
    private readonly clearNormals = new Float32Array(4)
    private readonly clearDepthTexture = new Float32Array([1, 0, 0, 0])
    private readonly clearDepth = new Float32Array([1])

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterDeferredShadingOptions = {},
    ) {
        super()
        if (!context.extensions.EXT_color_buffer_float) {
            context.console.error(
                "[TgdPainterDeferredShading] Extension EXT_color_buffer_float is not available: the depth texture cannot be rendered!",
            )
        }
        this.textureNormals = new TgdTexture2D(context, {
            name: `${this.name}/textureNormals`,
            storage: {
                format: "RGB10_A2 / RGBA / UNSIGNED_INT_2_10_10_10_REV",
            },
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        this.textureDepth = new TgdTexture2D(context, {
            name: `${this.name}/textureDepth`,
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
        this.tree = new TgdMeshTree(context, {
            meshes: options.meshes,
            ignoreMaterials: true,
            // We only need a new program if the `attPosition` or `attNormal` names are different.
            programKey: (geometry) => `${geometry.attPosition}/${geometry.attNormal}`,
            createProgram: (geometry) => createProgram(context.gl, geometry.attPosition, geometry.attNormal),
        })
    }

    add(mesh: TgdMesh) {
        this.tree.add(mesh)
    }

    /**
     * The GPU resources of the mesh (and its children) will be released on next `paint()`.
     */
    remove(mesh: TgdMesh) {
        this.tree.remove(mesh)
    }

    paint(_time: number, _delta: number): void {
        this.tree.update()
        const { context } = this
        const { gl } = context
        const width = Math.max(1, Math.round(context.width))
        const height = Math.max(1, Math.round(context.height))
        const framebuffer = this.updateFramebuffer(width, height)
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
        context.paintInCustomSize(width, height, this.paintMeshes)
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
    }

    private readonly paintMeshes = () => {
        const { context, clearNormals, clearDepthTexture, clearDepth } = this
        const { gl } = context
        const previousDepth = webglDepthGet(context)
        const previousCull = webglCullGet(context)
        const previousBlend = webglBlendGet(context)
        webglDepthSet(context, webglPresetDepth.less)
        webglCullSet(context, webglPresetCull.back)
        // Blending is not possible on 32 bits float textures without EXT_float_blend.
        webglBlendSet(context, webglPresetBlend.off)
        gl.clearBufferfv(gl.COLOR, 0, clearNormals)
        gl.clearBufferfv(gl.COLOR, 1, clearDepthTexture)
        gl.clearBufferfv(gl.DEPTH, 0, clearDepth)
        this.tree.forEachBatch(this.handleBatch)
        webglDepthSet(context, previousDepth)
        webglCullSet(context, previousCull)
        webglBlendSet(context, previousBlend)
    }

    private readonly handleBatch = (batch: TgdMeshTreeBatch) => {
        const { camera } = this.context
        const { program } = batch
        program.use()
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        program.uniform1f("uniNear", camera.near)
        program.uniform1f("uniInvDepthRange", 1 / (camera.far - camera.near))
        batch.draw()
    }

    /**
     * (Re)create the framebuffer if the size has changed.
     */
    private updateFramebuffer(width: number, height: number): WebGLFramebuffer {
        const { framebuffer, framebufferWidth, framebufferHeight } = this
        if (framebuffer && width === framebufferWidth && height === framebufferHeight) return framebuffer

        this.deleteFramebuffer()
        const { context, textureNormals, textureDepth } = this
        const { gl } = context
        textureNormals.resize(width, height)
        textureDepth.resize(width, height)
        const newFramebuffer = webglCreateFramebuffer(gl)
        const depthBuffer = gl.createRenderbuffer()
        if (!depthBuffer) throw new Error("[TgdPainterDeferredShading] Unable to create WebGLRenderbuffer for depth!")

        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, newFramebuffer)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, textureNormals.glTexture, 0)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, textureDepth.glTexture, 0)
        // The draw buffers are part of the framebuffer state.
        gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1])
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT24, width, height)
        gl.bindRenderbuffer(gl.RENDERBUFFER, null)
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer)
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            context.console.error(`[TgdPainterDeferredShading] The framebuffer is incomplete: ${webglLookup(status)}!`)
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

    delete() {
        this.tree.delete()
        this.deleteFramebuffer()
        this.textureNormals.delete()
        this.textureDepth.delete()
    }
}

function createProgram(gl: WebGL2RenderingContext, attPosition: string, attNormal: string): TgdProgram {
    const vert = new TgdShaderVertex({
        uniforms: {
            uniTransfoMatrix: "mat4",
            uniModelViewMatrix: "mat4",
            uniProjectionMatrix: "mat4",
            uniNear: "float",
            uniInvDepthRange: "float",
        },
        attributes: {
            [attPosition]: "vec4",
            [attNormal]: "vec3",
        },
        varying: {
            varNormal: "vec3",
            varDepth: "float",
        },
        mainCode: [
            "mat4 modelView = uniModelViewMatrix * uniTransfoMatrix;",
            `vec4 position = modelView * ${attPosition};`,
            `varNormal = mat3(modelView) * ${attNormal};`,
            // The camera looks toward -Z.
            "varDepth = (-position.z - uniNear) * uniInvDepthRange;",
            "gl_Position = uniProjectionMatrix * position;",
        ],
    })
    const frag = new TgdShaderFragment({
        varying: {
            varNormal: "vec3",
            varDepth: "float",
        },
        outputs: {
            FragNormal: "vec4",
            FragDepth: "float",
        },
        mainCode: ["FragNormal = vec4(normalize(varNormal) * 0.5 + 0.5, 1.0);", "FragDepth = varDepth;"],
    })
    return new TgdProgram(gl, {
        vert: vert.code,
        frag: frag.code,
    })
}
