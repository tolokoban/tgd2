import { TgdPainterFunction } from "@tgd/types/painter"
import { TgdContext } from "../context"
import { TgdPainterGroup } from "./group"
import {
    webglCreateFramebuffer,
    webglLookup,
    webglRenderbufferStorageMultisample,
} from "@tgd/utils"
import { TgdPainter } from "./painter"
import { TgdTexture2D } from "@tgd/texture"

export interface TgdPainterFramebufferWithAntiAliasingOptions {
    /**
     * Default to 4.
     */
    samples?: number
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

export class TgdPainterFramebufferWithAntiAliasing extends TgdPainterGroup {
    public readonly samples: number
    public readonly textureColor0: TgdTexture2D | undefined
    public readonly textureColor1: TgdTexture2D | undefined
    public readonly textureColor2: TgdTexture2D | undefined
    public readonly textureColor3: TgdTexture2D | undefined
    public readonly textureDepth: TgdTexture2D | undefined

    private colorRenderbuffersMSAA: (WebGLRenderbuffer | undefined)[] = []
    private _depthBufferMSAA: WebGLRenderbuffer | null = null
    private _framebufferMSAA: WebGLFramebuffer | null = null

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

    constructor(
        private readonly context: {
            gl: WebGL2RenderingContext
            width: Readonly<number>
            height: Readonly<number>
        },
        private readonly options: Partial<TgdPainterFramebufferWithAntiAliasingOptions>
    ) {
        super(options.children)
        const { textureColor0, textureColor1, textureColor2, textureColor3 } =
            options
        if (
            !(textureColor0 || textureColor1 || textureColor2 || textureColor3)
        ) {
            console.error(
                "[TgdPainterFramebuffer] You gave no color texture in the constructor: nothing will be rendered!",
                options
            )
        }
        this.textureColor0 = nameTexture(textureColor0, "textureColor0")
        this.textureColor1 = nameTexture(textureColor1, "textureColor1")
        this.textureColor2 = nameTexture(textureColor2, "textureColor2")
        this.textureColor3 = nameTexture(textureColor3, "textureColor3")
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
        this.samples = Math.min(
            options.samples ?? 4,
            gl.getParameter(gl.MAX_SAMPLES)
        )
    }

    get width(): number {
        return this._width
    }
    private set width(v: number) {
        if (this._width === v) return

        this._width = v
        this.dirty = true
    }

    get height(): number {
        return this._height
    }
    private set height(v: number) {
        if (this._height === v) return

        this._height = v
        this.dirty = true
    }

    private updateTextureForColor(
        tgdTexture: TgdTexture2D | undefined,
        attachment: number
    ) {
        if (!tgdTexture) return

        const { context, width, height } = this
        const { gl } = context
        tgdTexture.resize(width, height)
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0 + attachment,
            gl.TEXTURE_2D,
            tgdTexture.glTexture,
            0
        )
    }

    private createDepthBufferMSAA(gl: WebGL2RenderingContext) {
        if (this.options.depthBuffer === false) return

        const { width, height } = this
        // Create a Depth Buffer, because the default
        // framebuffer has none.
        const depthBuffer = gl.createRenderbuffer()
        if (!depthBuffer)
            throw new Error("Unable to create WebGLRenderBuffer for depth!")

        this._depthBufferMSAA = depthBuffer
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer)
        webglRenderbufferStorageMultisample(
            gl,
            this.samples,
            gl.DEPTH_COMPONENT24,
            width,
            height
        )
        gl.bindRenderbuffer(gl.RENDERBUFFER, null)
    }

    private createStencilBuffer(gl: WebGL2RenderingContext) {
        if (this.options.stencilBuffer !== false) {
            const { width, height } = this
            const stencilBuffer = gl.createRenderbuffer()
            if (!stencilBuffer)
                throw new Error(
                    "Unable to create WebGLRenderBuffer for stencil!"
                )

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

    private createFramebufferMSAA() {
        const { context } = this
        const { gl } = context
        this.createRenderbuffersMSAA()
        this.createDepthBufferMSAA(gl)
        this._framebufferMSAA = webglCreateFramebuffer(gl)
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebufferMSAA)
        this.colorRenderbuffersMSAA.map((renderbuffer, index) => {
            if (renderbuffer) {
                gl.framebufferRenderbuffer(
                    gl.FRAMEBUFFER,
                    gl.COLOR_ATTACHMENT0 + index,
                    gl.RENDERBUFFER,
                    renderbuffer
                )
            }
        })
        if (this._depthBufferMSAA) {
            gl.framebufferRenderbuffer(
                gl.FRAMEBUFFER,
                gl.DEPTH_ATTACHMENT,
                gl.RENDERBUFFER,
                this._depthBufferMSAA
            )
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }

    private createFramebufferIfNeeded() {
        if (!this.dirty) return

        const { context, width, height } = this
        if (width < 1 || height < 1) return

        this.delete()
        const { gl } = context
        this.createFramebufferMSAA()

        this._framebuffer = webglCreateFramebuffer(gl)
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer)
        this.updateTextureForColor(this.textureColor0, 0)
        this.updateTextureForColor(this.textureColor1, 1)
        this.updateTextureForColor(this.textureColor2, 2)
        this.updateTextureForColor(this.textureColor3, 3)
        this.createStencilBuffer(gl)
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            console.error(
                `Your Framebuffer is incomplete: ${webglLookup(status)}!`
            )
        }
        this.dirty = false
    }

    private blitFramebuffers() {
        const { context, width, height } = this
        const { gl } = context
        gl.bindFramebuffer(gl.READ_FRAMEBUFFER, this._framebufferMSAA)
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, this._framebuffer)
        this.colorRenderbuffersMSAA.map((_rd, index) => {
            gl.readBuffer(gl.COLOR_ATTACHMENT0 + index)
            const buffers: GLenum[] = [gl.NONE, gl.NONE, gl.NONE, gl.NONE]
            buffers[index] = gl.COLOR_ATTACHMENT0 + index
            gl.drawBuffers(buffers)
            gl.blitFramebuffer(
                0,
                0,
                width,
                height,
                0,
                0,
                width,
                height,
                gl.COLOR_BUFFER_BIT,
                gl.NEAREST
            )
        })
        gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null)
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null)
    }

    paint(time: number, delay: number): void {
        const { context, options } = this
        const { gl } = context
        const { viewportMatchingScale = 1 } = options
        this.width = Math.round(context.width * viewportMatchingScale)
        this.height = Math.round(context.height * viewportMatchingScale)
        this.createFramebufferIfNeeded()
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebufferMSAA)
        gl.viewport(0, 0, this.width, this.height)
        gl.drawBuffers(this.drawBuffers)
        super.paint(time, delay)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        this.blitFramebuffers()
        gl.viewport(0, 0, context.width, context.height)
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
        if (this._depthBufferMSAA) gl.deleteRenderbuffer(this._depthBufferMSAA)
        if (this._framebufferMSAA) gl.deleteFramebuffer(this._framebufferMSAA)
        this.deleteRenderbuffersMSAA()
    }

    private deleteRenderbuffersMSAA() {
        const { gl } = this.context
        for (const colorRenderbuffer of this.colorRenderbuffersMSAA) {
            if (colorRenderbuffer) gl.deleteRenderbuffer(colorRenderbuffer)
        }
    }

    private createRenderbuffersMSAA() {
        const {
            context,
            textureColor0,
            textureColor1,
            textureColor2,
            textureColor3,
            width,
            height,
        } = this
        const { gl } = context
        this.deleteRenderbuffersMSAA()
        this.colorRenderbuffersMSAA = [
            textureColor0,
            textureColor1,
            textureColor2,
            textureColor3,
        ].map((texture) => {
            if (!texture) return

            const colorRenderBuffer = gl.createRenderbuffer()
            if (!colorRenderBuffer)
                throw new Error("Unable to create RenderBuffer!")

            gl.bindRenderbuffer(gl.RENDERBUFFER, colorRenderBuffer)
            webglRenderbufferStorageMultisample(
                gl,
                this.samples,
                gl.RGBA8,
                width,
                height
            )
            gl.bindRenderbuffer(gl.RENDERBUFFER, null)
            return colorRenderBuffer
        })
    }
}

function nameTexture(
    texture: TgdTexture2D | undefined,
    name: string
): TgdTexture2D | undefined {
    if (texture) {
        texture.name += `/${name}`
    }
    return texture
}
