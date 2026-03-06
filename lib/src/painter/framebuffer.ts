import type { TgdTexture2D, TgdTextureDepth } from "@tgd/texture"
import type { TgdPainterFunction } from "@tgd/types/painter"
import { webglCreateFramebuffer, webglLookup } from "@tgd/utils"
import { TgdPainterGroup } from "./group"
import type { TgdPainter } from "./painter"
import { TgdContext } from "@tgd/context"

export interface TgdPainterFramebufferOptions {
    name?: string
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
    /**
     * If the size is defined, it takes precedence over `viewportMatchingScale`.
     * In this case, the output textures will have this fixed size.
     */
    fixedSize?: [width: number, height: number]
    textureColor0?: TgdTexture2D
    textureColor1?: TgdTexture2D
    textureColor2?: TgdTexture2D
    textureColor3?: TgdTexture2D
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
    public readonly textureDepth: TgdTextureDepth | undefined

    private _textureColor0: TgdTexture2D | undefined
    private _textureColor1: TgdTexture2D | undefined
    private _textureColor2: TgdTexture2D | undefined
    private _textureColor3: TgdTexture2D | undefined
    /**
     * The framebuffer becomes dirty as soon as the width or height changes.
     */
    private dirty = true
    private _width = 0
    private _height = 0
    private _framebuffer: WebGLFramebuffer | null = null
    private _depthBuffer: WebGLRenderbuffer | null = null
    private _stencilBuffer: WebGLRenderbuffer | null = null
    private readonly drawBuffers: number[]
    private readonly isFixedSize: boolean

    constructor(
        private readonly context: TgdContext,
        private readonly options: Partial<TgdPainterFramebufferOptions>,
    ) {
        super({
            children: options.children,
        })
        if (options.name) this.name = options.name
        else this.name = `FramebufferMSAA/${this.name}`
        const { textureColor0, textureColor1, textureColor2, textureColor3 } = options
        if (!(textureColor0 || textureColor1 || textureColor2 || textureColor3)) {
            console.warn(
                "[TgdPainterFramebuffer] You gave no color texture in the constructor: nothing will be rendered!",
                options,
            )
            this.debugHierarchy()
        }
        this.textureColor0 = nameTexture(textureColor0, "textureColor0")
        this.textureColor1 = nameTexture(textureColor1, "textureColor1")
        this.textureColor2 = nameTexture(textureColor2, "textureColor2")
        this.textureColor3 = nameTexture(textureColor3, "textureColor3")
        this.onEnter = options.onEnter
        this.onExit = options.onExit
        const { gl } = this.context
        this.drawBuffers = [
            this.textureColor0 ? gl.COLOR_ATTACHMENT0 : gl.NONE,
            this.textureColor1 ? gl.COLOR_ATTACHMENT1 : gl.NONE,
            this.textureColor2 ? gl.COLOR_ATTACHMENT2 : gl.NONE,
            this.textureColor3 ? gl.COLOR_ATTACHMENT3 : gl.NONE,
        ]
        this.isFixedSize = !!options.fixedSize
        if (options.fixedSize) {
            const [width, height] = options.fixedSize
            this.width = width
            this.height = height
        }
    }

    get textureColor0() {
        return this._textureColor0
    }
    set textureColor0(textureColor0: TgdTexture2D | undefined) {
        if (this._textureColor0 === textureColor0) return

        this._textureColor0 = textureColor0
        this.dirty = true
    }

    get textureColor1() {
        return this._textureColor1
    }
    set textureColor1(textureColor1: TgdTexture2D | undefined) {
        if (this._textureColor1 === textureColor1) return

        this._textureColor1 = textureColor1
        this.dirty = true
    }

    get textureColor2() {
        return this._textureColor2
    }
    set textureColor2(textureColor2: TgdTexture2D | undefined) {
        if (this._textureColor2 === textureColor2) return

        this._textureColor2 = textureColor2
        this.dirty = true
    }

    get textureColor3() {
        return this._textureColor3
    }
    set textureColor3(textureColor3: TgdTexture2D | undefined) {
        if (this._textureColor3 === textureColor3) return

        this._textureColor3 = textureColor3
        this.dirty = true
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

    private updateTextureForColor(tgdTexture: TgdTexture2D | undefined, attachment: number) {
        if (!tgdTexture) return

        const { context, width, height } = this
        const { gl } = context
        tgdTexture.resize(width, height)
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0 + attachment,
            gl.TEXTURE_2D,
            tgdTexture.glTexture,
            0,
        )
    }

    private updateTextureForDepth(gl: WebGL2RenderingContext) {
        if (this.options.depthBuffer === false) return

        const { width, height } = this
        // Create a Depth Buffer, because the default
        // framebuffer has none.
        const depthBuffer = gl.createRenderbuffer()
        if (!depthBuffer) throw new Error("Unable to create WebGLRenderBuffer for depth!")

        this._depthBuffer = depthBuffer
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT24, width, height)
        gl.bindRenderbuffer(gl.RENDERBUFFER, null)
    }

    private createStencilBuffer(gl: WebGL2RenderingContext) {
        if (this.options.stencilBuffer) {
            const { width, height } = this
            const stencilBuffer = gl.createRenderbuffer()
            if (!stencilBuffer) throw new Error("Unable to create WebGLRenderBuffer for stencil!")

            this._stencilBuffer = stencilBuffer
            gl.bindRenderbuffer(gl.RENDERBUFFER, stencilBuffer)
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height)
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, stencilBuffer)
        }
    }

    private createFramebufferIfNeeded() {
        if (!this.dirty) return

        const { context, width, height } = this
        if (width < 1 || height < 1) return

        this.delete()
        const { gl } = context
        this._framebuffer = webglCreateFramebuffer(gl)
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer)
        this.updateTextureForColor(this.textureColor0, 0)
        this.updateTextureForColor(this.textureColor1, 1)
        this.updateTextureForColor(this.textureColor2, 2)
        this.updateTextureForColor(this.textureColor3, 3)
        this.updateTextureForDepth(gl)
        this.createStencilBuffer(gl)
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            console.error(`Your Framebuffer is incomplete: ${webglLookup(status)}!`)
        }
        this.dirty = false
    }

    paint(time: number, delta: number): void {
        const { context, options } = this
        const { aspectRatio } = context
        const { gl } = context
        if (!this.isFixedSize) {
            const { viewportMatchingScale = 1 } = options
            this.width = Math.round(context.width * viewportMatchingScale)
            this.height = Math.round(context.height * viewportMatchingScale)
        }
        context.aspectRatio = this.width / this.height
        this.createFramebufferIfNeeded()
        // const currentFB = gl.getParameter(gl.FRAMEBUFFER_BINDING)
        // gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer)
        // const viewport: Int32Array = gl.getParameter(gl.VIEWPORT)
        // gl.viewport(0, 0, this.width, this.height)
        // gl.drawBuffers(this.drawBuffers)
        // super.paint(time, delta)
        // gl.bindFramebuffer(gl.FRAMEBUFFER, currentFB)
        // const [x, y, w, h] = viewport
        // gl.viewport(x, y, w, h)
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer)
        const viewport = context.webglParams.viewport
        gl.viewport(0, 0, this.width, this.height)
        gl.drawBuffers(this.drawBuffers)
        super.paint(time, delta)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        // this.blitFramebuffers()
        context.webglParams.viewport = viewport
        context.aspectRatio = aspectRatio
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

function nameTexture(texture: TgdTexture2D | undefined, name: string): TgdTexture2D | undefined {
    if (texture) {
        texture.name += `/${name}`
    }
    return texture
}
