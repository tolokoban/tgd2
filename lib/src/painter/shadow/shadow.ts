import type { TgdCamera } from "@tgd/camera"
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

export interface TgdPainterShadowOptions<C extends TgdCamera = TgdCamera> {
    /**
     * Camera looking from the light, -Z points to the target.
     * Use a {@link TgdCameraOrthographic} for a directional light (like the sun),
     * or a {@link TgdCameraPerspective} for a spot light.
     *
     * The aspect ratio of the texture is the one of the camera
     * (`screenWidth / screenHeight`).
     */
    camera: C
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
export class TgdPainterShadow<C extends TgdCamera = TgdCamera> extends TgdPainter {
    /**
     * Camera looking from the light.
     * Its type is the one given in the options.
     */
    public readonly camera: C
    /**
     * Texture with a single 32 bits float channel (`R32F`) holding,
     * for each texel, the distance from the light of the nearest fragment,
     * measured along the -Z axis of the camera.
     * Texels where nothing has been painted hold `camera.far`.
     *
     * Its size is computed from `resolution` and from the aspect ratio of the camera.
     * It uses `NEAREST` filtering, because linear filtering of 32 bits floats
     * is not available everywhere.
     */
    public readonly texture: TgdTexture2D
    /**
     * Size in pixels of the largest side of {@link TgdPainterShadow.texture}.
     */
    public resolution: number

    private readonly tree: TgdMeshTree
    private framebuffer: WebGLFramebuffer | null = null
    private depthBuffer: WebGLRenderbuffer | null = null
    private framebufferWidth = 0
    private framebufferHeight = 0
    /** Value used to clear the texture. */
    private readonly clearColor = new Float32Array(4)
    private readonly clearDepth = new Float32Array([1])

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterShadowOptions<C>,
    ) {
        super()
        if (!context.extensions.EXT_color_buffer_float) {
            context.console.error(
                "[TgdPainterShadow] Extension EXT_color_buffer_float is not available: the shadow texture cannot be rendered!",
            )
        }
        this.camera = options.camera
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
        this.tree = new TgdMeshTree(context, {
            meshes: options.meshes,
            ignoreMaterials: true,
            // We only need a new program if the `attPosition` name is different.
            programKey: (geometry) => geometry.attPosition,
            createProgram: (geometry) => createProgram(context.gl, geometry.attPosition),
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
        const { camera } = this
        const [width, height] = this.computeSize()
        const framebuffer = this.updateFramebuffer(width, height)
        const { context } = this
        const { gl } = context
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
        context.paintInCustomSize(width, height, () => this.paintMeshes(camera))
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
    }

    private paintMeshes(camera: TgdCamera) {
        const { context, clearColor, clearDepth } = this
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
        this.tree.forEachBatch(this.handleBatch)
        webglDepthSet(context, previousDepth)
        webglCullSet(context, previousCull)
        webglBlendSet(context, previousBlend)
    }

    private readonly handleBatch = (batch: TgdMeshTreeBatch) => {
        const { camera } = this
        const { program } = batch
        program.use()
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        batch.draw()
    }

    /**
     * Size of the texture: `resolution` on the largest side,
     * and the other side follows the aspect ratio of the camera.
     */
    private computeSize(): [width: number, height: number] {
        const { resolution, camera } = this
        const size = Math.max(1, Math.round(resolution))
        const { screenWidth, screenHeight } = camera
        if (screenWidth >= screenHeight) {
            return [size, Math.max(1, Math.round((size * screenHeight) / screenWidth))]
        }
        return [Math.max(1, Math.round((size * screenWidth) / screenHeight)), size]
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

    delete() {
        this.tree.delete()
        this.deleteFramebuffer()
        this.texture.delete()
    }
}

function createProgram(gl: WebGL2RenderingContext, attPosition: string): TgdProgram {
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
    return new TgdProgram(gl, {
        vert: vert.code,
        frag: frag.code,
    })
}
