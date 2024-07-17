import { TgdContext } from "../context"
import { TgdTexture2D, TgdTexture2DOptions } from "../types"
import { TgdPainterGroup } from "./group"

export interface TgdPainterFramebufferOptions extends TgdTexture2DOptions {
    /**
     * Do we need a depth buffer?
     */
    depthBuffer: boolean
    /**
     * If defined, the framebuffer will automatically match the
     * current viewport size multiplied by `viewportMatchingScale`.
     *
     * for instance, if `viewportMatchingScale === 0.5` and the viewport
     * id (640, 480), then the framebuffer will have a size of
     * (320, 240).
     */
    viewportMatchingScale?: number
    name: string
}

export class TgdPainterFramebuffer extends TgdPainterGroup {
    public readonly texture: TgdTexture2D
    public readonly textureDepth: TgdTexture2D
    private readonly framebuffer: WebGLFramebuffer
    private readonly depthbuffer: WebGLRenderbuffer | null = null
    private dirty = false
    private _width = 0
    private _height = 0

    constructor(
        private readonly context: TgdContext,
        private readonly options: Partial<TgdPainterFramebufferOptions>
    ) {
        super()
        this._width = options.width ?? 640
        this._height = options.height ?? 480
        this.name = options.name ?? `Framebuffer/${this.name}`
        this.texture = context.textures2D.create({
            width: this._width,
            height: this._height,
            generateMipMap: true,
        })
        this.textureDepth = context.textures2D.create({
            width: this._width,
            height: this._height,
            generateMipMap: false,
            internalFormat: "DEPTH_COMPONENT24",
            format: "DEPTH_COMPONENT",
            type: "UNSIGNED_INT",
        })
        const { gl } = context
        this.framebuffer = context.createFramebuffer()
        if (options.depthBuffer === true) {
            // Create a Depth Buffer, because the default
            // framebuffer has none.
            createDepthBuffer(gl, this.width, this.height)
            // const depthBuffer = context.createRenderbuffer()
        }
    }

    get width(): number {
        return this._width
    }
    set width(v: number) {
        if (this._width === v) return

        this._width = v
        this.dirty = true
    }

    get height(): number {
        return this._height
    }
    set height(v: number) {
        if (this._height === v) return

        this._height = v
        this.dirty = true
    }

    paint(time: number, delay: number): void {
        const { context, texture, textureDepth, options, dirty, depthbuffer } =
            this
        const { gl } = context
        const { viewportMatchingScale } = options
        if (typeof viewportMatchingScale === "number") {
            this.width = Math.max(
                1,
                Math.round(context.width * viewportMatchingScale)
            )
            this.height = Math.max(
                1,
                Math.round(context.height * viewportMatchingScale)
            )
        }
        if (dirty) {
            texture.resize(this.width, this.height)
            // if (depthbuffer) {
            //     textureDepth.resize(this.width, this.height)
            //     gl.bindRenderbuffer(gl.RENDERBUFFER, depthbuffer)
            //     gl.framebufferTexture2D(
            //         gl.FRAMEBUFFER,
            //         gl.DEPTH_ATTACHMENT,
            //         gl.TEXTURE_2D,
            //         this.textureDepth.glTexture,
            //         0
            //     )
            // }
            this.dirty = false
        }

        const currentFramebuffer = gl.getParameter(
            gl.FRAMEBUFFER_BINDING
        ) as null | WebGLFramebuffer
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer)
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0,
            gl.TEXTURE_2D,
            texture.glTexture,
            0
        )
        const [x, y, w, h] = gl.getParameter(gl.VIEWPORT) as Int32Array
        gl.viewport(0, 0, this.width, this.height)
        super.paint(time, delay)
        gl.bindFramebuffer(gl.FRAMEBUFFER, currentFramebuffer)
        gl.viewport(x, y, w, h)
    }

    delete() {
        const {
            context,
            texture,
            textureDepth,
            framebuffer,
            depthbuffer: depthBuffer,
        } = this
        const { gl } = context
        context.textures2D.delete(texture)
        context.textures2D.delete(textureDepth)
        gl.deleteFramebuffer(framebuffer)
        if (depthBuffer) {
            gl.deleteRenderbuffer(depthBuffer)
        }
    }
}

function createDepthBuffer(
    gl: WebGL2RenderingContext,
    width: number,
    height: number
) {
    const depthTexture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, depthTexture)
    const level = 0
    const internalFormat = gl.DEPTH_COMPONENT24
    const border = 0
    const format = gl.DEPTH_COMPONENT
    const type = gl.UNSIGNED_INT
    const data = null
    gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        internalFormat,
        width,
        height,
        border,
        format,
        type,
        data
    )
    // set the filtering so we don't need mips
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    // attach the depth texture to the framebuffer
    gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.DEPTH_ATTACHMENT,
        gl.TEXTURE_2D,
        depthTexture,
        level
    )
    return depthTexture
}
