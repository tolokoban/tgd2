import { TgdPainterFunction } from "@tgd/types/painter"
import { TgdContext } from "../context"
import { TgdPainterGroup } from "./group"
import { webglLookup } from "@tgd/utils"
import { TgdPainter } from "./painter"
import { TgdTexture2D } from "@tgd/texture"

export interface TgdPainterFramebufferOptions {
    /**
     * Do we need a depth buffer?
     * Default to `true`.
     */
    depthBuffer: boolean
    /**
     * Do we need a stencil buffer?
     * Default to `true`.
     */
    stencilBuffer: boolean
    /**
     * If defined, the framebuffer will automatically match the
     * current viewport size multiplied by `viewportMatchingScale`.
     *
     * for instance, if `viewportMatchingScale === 0.5` and the viewport
     * id (640, 480), then the framebuffer will have a size of
     * (320, 240).
     *
     * Default to `1`.
     */
    viewportMatchingScale?: number
    textureColor0?: TgdTexture2D
    textureColor1?: TgdTexture2D
    textureColor2?: TgdTexture2D
    textureColor3?: TgdTexture2D
    textureDepth?: TgdTexture2D
    /**
     * Function to execute before painting.
     */
    onEnter?: TgdPainterFunction
    /**
     * Function to execute after painting.
     */
    onExit?: TgdPainterFunction
    children?: TgdPainter[]
}

export class TgdPainterFramebuffer extends TgdPainterGroup {
    public readonly textureColor0: TgdTexture2D | undefined
    public readonly textureColor1: TgdTexture2D | undefined
    public readonly textureColor2: TgdTexture2D | undefined
    public readonly textureColor3: TgdTexture2D | undefined
    public readonly textureDepth: TgdTexture2D | undefined

    private dirty = true
    private _width = 0
    private _height = 0
    private _framebuffer: WebGLFramebuffer | null = null
    private _depthBuffer: WebGLRenderbuffer | null = null
    private _stencilBuffer: WebGLRenderbuffer | null = null
    private readonly drawBuffers: number[]

    constructor(
        private readonly context: TgdContext,
        private readonly options: Partial<TgdPainterFramebufferOptions> = {}
    ) {
        super(options.children)
        this.textureColor0 = options.textureColor0
        this.textureColor1 = options.textureColor1
        this.textureColor2 = options.textureColor2
        this.textureColor3 = options.textureColor3
        this.textureDepth = options.textureDepth
        this.onEnter = options.onEnter
        this.onExit = options.onExit
        const { gl } = this.context
        this.drawBuffers = [
            this.textureColor0 ? gl.COLOR_ATTACHMENT0 : gl.NONE,
            this.textureColor1 ? gl.COLOR_ATTACHMENT1 : gl.NONE,
            this.textureColor2 ? gl.COLOR_ATTACHMENT2 : gl.NONE,
            this.textureColor3 ? gl.COLOR_ATTACHMENT3 : gl.NONE,
        ]
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

    private updateTextureForColor(
        texture: TgdTexture2D | undefined,
        attachment: number
    ) {
        if (!texture) return

        const { context, width, height } = this
        const { gl } = context
        texture.resize(width, height)
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0 + attachment,
            gl.TEXTURE_2D,
            texture,
            0
        )
    }

    private createTextureForDepth() {
        const texture = this.textureDepth
        if (!texture) return

        const { context, width, height } = this
        const { gl } = context
        texture.resize(width, height)
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.DEPTH_ATTACHMENT,
            gl.TEXTURE_2D,
            texture,
            0
        )
    }

    private createDepthBuffer(gl: WebGL2RenderingContext) {
        if (this.options.depthBuffer !== false) {
            const { width, height } = this
            // Create a Depth Buffer, because the default
            // framebuffer has none.
            const depthBuffer = gl.createRenderbuffer()
            if (!depthBuffer)
                throw Error("Unable to create WebGLRenderBuffer for depth!")

            this._depthBuffer = depthBuffer
            gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
            gl.renderbufferStorage(
                gl.RENDERBUFFER,
                gl.DEPTH_COMPONENT16,
                width,
                height
            )
            gl.framebufferRenderbuffer(
                gl.FRAMEBUFFER,
                gl.DEPTH_ATTACHMENT,
                gl.RENDERBUFFER,
                depthBuffer
            )
        }
    }

    private createStencilBuffer(gl: WebGL2RenderingContext) {
        if (this.options.stencilBuffer !== false) {
            const { width, height } = this
            const stencilBuffer = gl.createRenderbuffer()
            if (!stencilBuffer)
                throw Error("Unable to create WebGLRenderBuffer for stencil!")

            this._stencilBuffer = stencilBuffer
            gl.bindRenderbuffer(gl.RENDERBUFFER, stencilBuffer)
            gl.renderbufferStorage(
                gl.RENDERBUFFER,
                gl.DEPTH_STENCIL,
                width,
                height
            )
            gl.framebufferRenderbuffer(
                gl.FRAMEBUFFER,
                gl.DEPTH_STENCIL_ATTACHMENT,
                gl.RENDERBUFFER,
                stencilBuffer
            )
        }
    }

    private createFramebufferIfNeeded() {
        if (!this.dirty) return

        const { context } = this
        const { gl } = context
        this.delete()
        this._framebuffer = context.createFramebuffer()
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer)
        this.updateTextureForColor(this.textureColor0, 0)
        this.updateTextureForColor(this.textureColor1, 1)
        this.updateTextureForColor(this.textureColor2, 2)
        this.updateTextureForColor(this.textureColor3, 3)
        this.createTextureForDepth()
        this.createDepthBuffer(gl)
        this.createStencilBuffer(gl)
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            console.error(
                `Your Framebuffer is incomplete: ${webglLookup(status)}!`
            )
        }
        this.dirty = false
    }

    paint(time: number, delay: number): void {
        const { context, options } = this
        const { gl } = context
        const { viewportMatchingScale = 1 } = options
        this.width = Math.round(context.width * viewportMatchingScale)
        this.height = Math.round(context.height * viewportMatchingScale)
        this.createFramebufferIfNeeded()
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer)
        gl.drawBuffers(this.drawBuffers)
        super.paint(time, delay)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }

    delete() {
        const { context, _framebuffer, _depthBuffer, _stencilBuffer } = this
        const { gl } = context
        if (_framebuffer) {
            gl.deleteFramebuffer(_framebuffer)
            this._framebuffer = null
        }
        if (_depthBuffer) {
            gl.deleteRenderbuffer(_depthBuffer)
            this._depthBuffer = null
        }
        if (_stencilBuffer) {
            gl.deleteRenderbuffer(_stencilBuffer)
            this._stencilBuffer = null
        }
    }
}
