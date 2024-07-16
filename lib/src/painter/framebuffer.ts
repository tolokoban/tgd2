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
    private readonly framebuffer: WebGLFramebuffer
    private readonly depthBuffer: WebGLRenderbuffer | null = null
    private dirty = false
    private _width = 0
    private _height = 0

    constructor(
        private readonly context: TgdContext,
        private readonly options: Partial<TgdPainterFramebufferOptions>
    ) {
        super()
        this._width = options.width ?? 320
        this._height = options.height ?? 240
        this.name = options.name ?? `Framebuffer/${this.name}`
        this.texture = context.textures2D.create({
            width: this._width,
            height: this._height,
            generateMipMap: true,
        })
        this.framebuffer = context.createFramebuffer()
        const { gl } = context
        if (options.depthBuffer === true) {
            // Create a Depth Buffer, because the default
            // framebuffer has none.
            const depthBuffer = context.createRenderbuffer()
            this.depthBuffer = depthBuffer
            gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
            gl.renderbufferStorage(
                gl.RENDERBUFFER,
                gl.DEPTH_COMPONENT16,
                this._width,
                this._height
            )
            gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
            gl.framebufferRenderbuffer(
                gl.FRAMEBUFFER,
                gl.DEPTH_ATTACHMENT,
                gl.RENDERBUFFER,
                depthBuffer
            )
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer)
        console.log("Attach texture to Framebuffer:", this.texture.name)
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0,
            gl.TEXTURE_2D,
            this.texture.glTexture,
            0
        )
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        console.log("Framebuffer status:", context.lookupWebglConstant(status))
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
        const { context, texture, options, dirty } = this
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
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer)
        if (dirty) {
            texture.resize(this.width, this.height)
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer)
            console.log("Attach texture to Framebuffer:", texture.name)
            gl.framebufferTexture2D(
                gl.FRAMEBUFFER,
                gl.COLOR_ATTACHMENT0,
                gl.TEXTURE_2D,
                texture.glTexture,
                0
            )
            this.dirty = false
        }
        super.paint(time, delay)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }

    delete() {
        const { context, texture, framebuffer, depthBuffer } = this
        const { gl } = context
        context.textures2D.delete(texture)
        gl.deleteFramebuffer(framebuffer)
        if (depthBuffer) {
            gl.deleteRenderbuffer(depthBuffer)
        }
    }
}
