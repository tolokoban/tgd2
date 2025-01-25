import { TgdPainterFunction } from "@tgd/types/painter"
import { TgdContext } from "../context"
import { TgdTexture2D, TgdTexture2DOptions } from "../types"
import { TgdPainterGroup } from "./group"
import { webglLookup } from "@tgd/utils"
import { TgdPainter } from "./painter"

type TextureInternalFormat =
    | "RGB8"
    | "RGBA8"
    | "R16F"
    | "RG16F"
    | "RGB16F"
    | "RGBA16F"

type DepthInternalFormat =
    | "DEPTH_COMPONENT16"
    | "DEPTH_COMPONENT24"
    | "DEPTH_COMPONENT32F"

export interface TgdPainterFramebufferOptions extends TgdTexture2DOptions {
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
    textureFormatColor0?: TextureInternalFormat
    textureFormatColor1?: TextureInternalFormat
    textureFormatColor2?: TextureInternalFormat
    textureFormatColor3?: TextureInternalFormat
    textureFormatDepth?: DepthInternalFormat
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
    private dirty = true
    private _width = 0
    private _height = 0
    private _textureColor0: TgdTexture2D | null = null
    private _textureColor1: TgdTexture2D | null = null
    private _textureColor2: TgdTexture2D | null = null
    private _textureColor3: TgdTexture2D | null = null
    private _textureDepth: TgdTexture2D | null = null
    private readonly textureFormatColor0: TextureInternalFormat
    private readonly textureFormatColor1?: TextureInternalFormat
    private readonly textureFormatColor2?: TextureInternalFormat
    private readonly textureFormatColor3?: TextureInternalFormat
    private readonly textureFormatDepth?: DepthInternalFormat
    private _framebuffer: WebGLFramebuffer | null = null
    private _depthBuffer: WebGLRenderbuffer | null = null
    private _stencilBuffer: WebGLRenderbuffer | null = null
    private readonly drawBuffers: number[] = [
        WebGL2RenderingContext.COLOR_ATTACHMENT0,
    ]

    constructor(
        private readonly context: TgdContext,
        private readonly options: Partial<TgdPainterFramebufferOptions> = {}
    ) {
        super(options.children)
        this._width = options.width ?? 0
        this._height = options.height ?? 0
        this.onEnter = options.onEnter
        this.onExit = options.onExit
        this.textureFormatColor0 = options.textureFormatColor0 ?? "RGBA8"
        this.textureFormatColor1 = options.textureFormatColor1
        this.textureFormatColor2 = options.textureFormatColor2
        this.textureFormatColor3 = options.textureFormatColor3
        this.textureFormatDepth = options.textureFormatDepth
        const { gl } = this.context
        if (this.textureFormatColor1)
            this.drawBuffers.push(gl.COLOR_ATTACHMENT1)
        if (this.textureFormatColor2)
            this.drawBuffers.push(gl.COLOR_ATTACHMENT2)
        if (this.textureFormatColor3)
            this.drawBuffers.push(gl.COLOR_ATTACHMENT3)
    }

    get textureColor0(): TgdTexture2D {
        if (!this._textureColor0) {
            this._textureColor0 = this.context.textures2D.getDefaultEmpty()
        }
        return this._textureColor0
    }

    get textureColor1(): TgdTexture2D {
        if (!this._textureColor1) {
            this._textureColor1 = this.context.textures2D.getDefaultEmpty()
        }
        return this._textureColor1
    }

    get textureColor2(): TgdTexture2D {
        if (!this._textureColor2) {
            this._textureColor2 = this.context.textures2D.getDefaultEmpty()
        }
        return this._textureColor2
    }

    get textureColor3(): TgdTexture2D {
        if (!this._textureColor3) {
            this._textureColor3 = this.context.textures2D.getDefaultEmpty()
        }
        return this._textureColor3
    }

    get textureDepth(): TgdTexture2D {
        if (!this._textureDepth) {
            this._textureDepth = this.context.textures2D.getDefaultEmpty()
        }
        return this._textureDepth
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

    /**
     * @experimental
     *
     */
    blitStencilBuffer() {
        const { gl, width, height } = this.context
        gl.bindFramebuffer(gl.READ_FRAMEBUFFER, this._framebuffer)
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null)
        gl.blitFramebuffer(
            0,
            0,
            width,
            height,
            0,
            0,
            gl.drawingBufferWidth,
            gl.drawingBufferHeight,
            gl.STENCIL_BUFFER_BIT,
            gl.NEAREST
        )
    }

    private createTextureForColor0() {
        const { context, width, height } = this
        const { gl } = context
        gl.activeTexture(gl.TEXTURE0)
        this._textureColor0 = context.textures2D.create({
            width: Math.max(width, 1),
            height: Math.max(height, 1),
            internalFormat: this.textureFormatColor0,
            generateMipMap: true,
            magFilter: "LINEAR",
            minFilter: "LINEAR_MIPMAP_LINEAR",
            wrapR: "MIRRORED_REPEAT",
            wrapS: "MIRRORED_REPEAT",
            wrapT: "MIRRORED_REPEAT",
        })
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0,
            gl.TEXTURE_2D,
            this._textureColor0.glTexture,
            0
        )
    }

    private createTextureForColor1() {
        if (this.textureFormatColor1) {
            const { context, width, height } = this
            const { gl } = context
            this._textureColor1 = context.textures2D.create({
                width: Math.max(width, 1),
                height: Math.max(height, 1),
                internalFormat: this.textureFormatColor1,
                generateMipMap: true,
                magFilter: "LINEAR",
                minFilter: "LINEAR_MIPMAP_LINEAR",
                wrapR: "MIRRORED_REPEAT",
                wrapS: "MIRRORED_REPEAT",
                wrapT: "MIRRORED_REPEAT",
                levels: 1,
            })
            gl.framebufferTexture2D(
                gl.FRAMEBUFFER,
                gl.COLOR_ATTACHMENT1,
                gl.TEXTURE_2D,
                this._textureColor1.glTexture,
                0
            )
        }
    }

    private createTextureForColor2() {
        if (this.textureFormatColor2) {
            const { context, width, height } = this
            const { gl } = context
            this._textureColor2 = context.textures2D.create({
                width: Math.max(width, 1),
                height: Math.max(height, 1),
                internalFormat: this.textureFormatColor2,
                generateMipMap: true,
                magFilter: "LINEAR",
                minFilter: "LINEAR_MIPMAP_LINEAR",
                wrapR: "MIRRORED_REPEAT",
                wrapS: "MIRRORED_REPEAT",
                wrapT: "MIRRORED_REPEAT",
                levels: 1,
            })
            gl.framebufferTexture2D(
                gl.FRAMEBUFFER,
                gl.COLOR_ATTACHMENT2,
                gl.TEXTURE_2D,
                this._textureColor2.glTexture,
                0
            )
        }
    }

    private createTextureForColor3() {
        if (this.textureFormatColor3) {
            const { context, width, height } = this
            const { gl } = context
            this._textureColor3 = context.textures2D.create({
                width: Math.max(width, 1),
                height: Math.max(height, 1),
                internalFormat: this.textureFormatColor3,
                generateMipMap: true,
                magFilter: "LINEAR",
                minFilter: "LINEAR_MIPMAP_LINEAR",
                wrapR: "MIRRORED_REPEAT",
                wrapS: "MIRRORED_REPEAT",
                wrapT: "MIRRORED_REPEAT",
                levels: 1,
            })
            gl.framebufferTexture2D(
                gl.FRAMEBUFFER,
                gl.COLOR_ATTACHMENT3,
                gl.TEXTURE_2D,
                this._textureColor3.glTexture,
                0
            )
        }
    }

    private createTextureForDepth() {
        if (this.textureFormatDepth) {
            const { context, width, height } = this
            const { gl } = context
            this._textureDepth = context.textures2D.create({
                width: Math.max(width, 1),
                height: Math.max(height, 1),
                internalFormat: this.textureFormatDepth,
                generateMipMap: true,
                magFilter: "LINEAR",
                minFilter: "LINEAR_MIPMAP_LINEAR",
                wrapR: "MIRRORED_REPEAT",
                wrapS: "MIRRORED_REPEAT",
                wrapT: "MIRRORED_REPEAT",
                levels: 1,
            })
            gl.framebufferTexture2D(
                gl.FRAMEBUFFER,
                gl.DEPTH_ATTACHMENT,
                gl.TEXTURE_2D,
                this._textureDepth.glTexture,
                0
            )
        }
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
        this.createTextureForColor0()
        this.createTextureForColor1()
        this.createTextureForColor2()
        this.createTextureForColor3()
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
        if (this._textureColor0) {
            gl.deleteTexture(this._textureColor0.glTexture)
            this._textureColor0 = null
        }
        if (this._textureColor1) {
            gl.deleteTexture(this._textureColor1.glTexture)
            this._textureColor1 = null
        }
        if (this._textureColor2) {
            gl.deleteTexture(this._textureColor2.glTexture)
            this._textureColor2 = null
        }
        if (this._textureColor3) {
            gl.deleteTexture(this._textureColor3.glTexture)
            this._textureColor3 = null
        }
        if (this._textureDepth) {
            gl.deleteTexture(this._textureDepth.glTexture)
            this._textureDepth = null
        }
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
