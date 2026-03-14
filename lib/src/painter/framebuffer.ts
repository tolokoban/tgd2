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
    fixedSize?: boolean
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
    private _lastWidth = 0
    private _lastHeight = 0
    private _framebuffer: WebGLFramebuffer | null = null
    private _depthBuffer: WebGLRenderbuffer | null = null
    private _stencilBuffer: WebGLRenderbuffer | null = null
    private readonly drawBuffers: number[]
    private readonly isFixedSize: boolean

    constructor(
        public readonly context: TgdContext,
        private readonly options: Partial<TgdPainterFramebufferOptions>,
    ) {
        super({
            children: options.children,
        })
        if (options.name) this.name = options.name
        else this.name = `Framebuffer/${this.name}`
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
            const texture = this.textureColor0 ?? this.textureColor1 ?? this.textureColor2 ?? this.textureColor3
            if (!texture) throw new Error("[TgdPainterFramebuffer] Impossible error! Should be caugth before.")

            const { width, height } = texture
            if (width < 1 || height < 1) {
                throw new Error(
                    '[TgdPainterFramebuffer] If you chose "fixedSize", you must provide at least one texture with a size!',
                )
            }
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

    get textureWidth(): number {
        const texture = this.textureColor0 ?? this.textureColor1 ?? this.textureColor2 ?? this.textureColor3
        if (!texture)
            throw new Error(
                "[TgdPainterFramebuffer] You must provide at least one texture: textureColor0, textureColor1, textureColor2 or textureColor3!",
            )

        return texture.width
    }

    get textureHeight(): number {
        const texture = this.textureColor0 ?? this.textureColor1 ?? this.textureColor2 ?? this.textureColor3
        if (!texture)
            throw new Error(
                "[TgdPainterFramebuffer] You must provide at least one texture: textureColor0, textureColor1, textureColor2 or textureColor3!",
            )

        return texture.height
    }

    get width(): number {
        if (this.isFixedSize) return this.textureWidth

        const { context } = this
        const { viewportMatchingScale = 1 } = this.options
        return Math.round(context.width * viewportMatchingScale)
    }

    get height(): number {
        if (this.isFixedSize) return this.textureHeight

        const { context } = this
        const { viewportMatchingScale = 1 } = this.options
        return Math.round(context.height * viewportMatchingScale)
    }

    private updateTextureForColor(
        tgdTexture: TgdTexture2D | undefined,
        attachment: number,
        width: number,
        height: number,
    ) {
        if (!tgdTexture) return

        const { context } = this
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

    private updateTextureForDepth(gl: WebGL2RenderingContext, width: number, height: number) {
        if (this.options.depthBuffer === false) return

        // Create a Depth Buffer, because the default
        // framebuffer has none.
        const depthBuffer = gl.createRenderbuffer()
        if (!depthBuffer) throw new Error("Unable to create WebGLRenderBuffer for depth!")

        this._depthBuffer = depthBuffer
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT24, width, height)
        this.context.checkError("updateTextureForDepth")
        gl.bindRenderbuffer(gl.RENDERBUFFER, null)
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer)
    }

    private createStencilBuffer(gl: WebGL2RenderingContext, width: number, height: number) {
        if (!this.options.stencilBuffer) return

        const stencilBuffer = gl.createRenderbuffer()
        if (!stencilBuffer) throw new Error("Unable to create WebGLRenderBuffer for stencil!")

        this._stencilBuffer = stencilBuffer
        gl.bindRenderbuffer(gl.RENDERBUFFER, stencilBuffer)
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height)
        gl.bindRenderbuffer(gl.RENDERBUFFER, null)
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, stencilBuffer)
    }

    private createFramebufferIfNeeded(width: number, height: number) {
        if (width < 1 || height < 1) return

        if (!this.dirty || (width === this._lastWidth && height === this._lastHeight)) return

        const { context } = this
        this._lastWidth = width
        this._lastHeight = height
        this.delete()
        const { gl } = context
        this._framebuffer = webglCreateFramebuffer(gl)
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer)
        this.updateTextureForColor(this.textureColor0, 0, width, height)
        this.updateTextureForColor(this.textureColor1, 1, width, height)
        this.updateTextureForColor(this.textureColor2, 2, width, height)
        this.updateTextureForColor(this.textureColor3, 3, width, height)
        this.updateTextureForDepth(gl, width, height)
        this.createStencilBuffer(gl, width, height)
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            console.error(`[TgdPainterFramebuffer] Your Framebuffer is incomplete: ${webglLookup(status)}!`)
        }
        this.dirty = false
    }

    paint(time: number, delta: number): void {
        const { context, width, height } = this
        const { gl } = context
        const paint = () => {
            const currentFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING)
            this.createFramebufferIfNeeded(width, height)
            gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer)
            gl.drawBuffers(this.drawBuffers)
            super.paint(time, delta)
            gl.bindFramebuffer(gl.FRAMEBUFFER, currentFramebuffer)
        }
        context.paintInCustomSize(width, height, paint)
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
