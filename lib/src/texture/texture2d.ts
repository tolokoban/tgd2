import { TgdEvent } from "@tgd/event/event"
import { tgdLoadImage } from "@tgd/loader"
import {
    TgdProgram,
    TgdTexture2D,
    TgdTexture2DOptions,
    TgdContextInterface,
    WebglImage,
    WebglTexParameter,
    WebglEnumTex2DInternalFormat,
} from "@tgd/types"
import { tgdCanvasCreateWithContext2D } from "@tgd/utils"

export class TgdTexture2DImpl implements TgdTexture2D {
    public readonly name: string
    public readonly eventImageUpdate = new TgdEvent<TgdTexture2D>()
    public readonly glTexture: WebGLTexture

    private readonly options: TgdTexture2DOptions & {
        width: number
        height: number
    }
    private _width = 0
    private _height = 0
    private _image: null | WebglImage = null

    private static counter = 0

    constructor(
        public readonly context: TgdContextInterface,
        public readonly id: string,
        options: Partial<TgdTexture2DOptions> = {}
    ) {
        const { gl } = context
        this.options = {
            wrapS: "REPEAT",
            wrapT: "REPEAT",
            wrapR: "REPEAT",
            minFilter: "NEAREST_MIPMAP_LINEAR",
            magFilter: "LINEAR",
            width: 1,
            height: 1,
            internalFormat: "RGBA",
            levels: 1,
            ...options,
        }
        this.name = options.name ?? `Texture2D/${TgdTexture2DImpl.counter++}`
        this._width = this.options.width
        this._height = this.options.height
        const texture = gl.createTexture()
        if (!texture) throw Error("Unable to create a WebGLTexture!")
        this.glTexture = texture
        this.updateTexture = (): WebGLTexture => {
            const {
                wrapS = "CLAMP_TO_EDGE",
                wrapT = "CLAMP_TO_EDGE",
                wrapR = "CLAMP_TO_EDGE",
                minFilter = "LINEAR",
                magFilter = "LINEAR",
                generateMipMap = false,
                width = 1,
                height = 1,
                internalFormat = "RGBA",
                data,
                type = "UNSIGNED_BYTE",
            } = this.options
            const format = this.options.format ?? internalFormat
            gl.bindTexture(gl.TEXTURE_2D, texture)
            const levels = options.levels ?? 1
            if (data) {
                gl.texImage2D(
                    gl.TEXTURE_2D,
                    levels,
                    gl[internalFormat],
                    width,
                    height,
                    0,
                    gl[format],
                    gl[type],
                    data
                )
            } else {
                gl.texStorage2D(
                    gl.TEXTURE_2D,
                    levels,
                    gl[internalFormat],
                    width,
                    height
                )
            }
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[wrapS])
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[wrapT])
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_R, gl[wrapR])
            gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_MIN_FILTER,
                gl[minFilter]
            )
            gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_MAG_FILTER,
                gl[magFilter]
            )
            if (options.image) this.loadImage(options.image)
            else if (generateMipMap) gl.generateMipmap(gl.TEXTURE_2D)
            return texture
        }
        this.updateTexture()
    }

    set textureBaseLevel(value: number) {
        const { gl } = this.context
        this.bind()
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_BASE_LEVEL, value)
    }

    get textureBaseLevel(): number {
        const { gl } = this.context
        this.bind()
        return gl.getTexParameter(
            gl.TEXTURE_2D,
            gl.TEXTURE_BASE_LEVEL
        ) as number
    }

    set textureMaxLevel(value: number) {
        const { gl } = this.context
        this.bind()
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAX_LEVEL, value)
    }

    get textureMaxLevel(): number {
        const { gl } = this.context
        this.bind()
        return gl.getTexParameter(gl.TEXTURE_2D, gl.TEXTURE_MAX_LEVEL) as number
    }

    copyTexImage2D(
        level = 1,
        internalFormat: WebglEnumTex2DInternalFormat = WebglEnumTex2DInternalFormat.RGBA,
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        border = 0
    ) {
        const { gl } = this.context
        this.bind()
        gl.copyTexImage2D(
            gl.TEXTURE_2D,
            level,
            internalFormat,
            x,
            y,
            width > 0 ? width : gl.drawingBufferWidth,
            height > 0 ? height : gl.drawingBufferHeight,
            border
        )
    }

    resize(width: number, height: number): void {
        console.log("Resize texture:", width, height)
        this._width = Math.max(Math.round(width), 1)
        this._height = Math.max(Math.round(height), 1)
        this.updateTexture()
    }

    getParameter(param: WebglTexParameter): number | boolean | null {
        const { context, glTexture: glTexture } = this
        const { gl } = context
        gl.bindTexture(gl.TEXTURE_2D, glTexture)
        const value = gl.getTexParameter(gl.TEXTURE_2D, gl[param]) as
            | number
            | boolean
            | null
        return value
    }

    makePalette(colors: string[], colums = 0) {
        const width = colums > 0 ? colums : colors.length
        const height = Math.ceil(colors.length / width)
        const { canvas, ctx } = tgdCanvasCreateWithContext2D(width, height)
        let i = 0
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                ctx.fillStyle = colors[i++]
                ctx.fillRect(x, y, 1, 1)
            }
        }
        this.loadImage(canvas)
    }

    fillHorizontalGradient(size: number, ...colors: string[]): void {
        this.fillGradient(size, 1, 1, 0, ...colors)
    }

    fillverticalGradient(size: number, ...colors: string[]): void {
        this.fillGradient(1, size, 0, 1, ...colors)
    }

    delete() {
        this.context.gl.deleteTexture(this.glTexture)
    }

    get image() {
        return this._image
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    bind() {
        const { gl } = this.context
        gl.bindTexture(gl.TEXTURE_2D, this.glTexture)
    }

    activate(program: TgdProgram, uniformName: string, slot = 0) {
        const { context } = this
        const { gl } = context
        gl.activeTexture(gl.TEXTURE0 + slot)
        this.bind()
        program.uniform1i(uniformName, slot)
    }

    loadImage(
        image:
            | string
            | ImageData
            | HTMLImageElement
            | HTMLCanvasElement
            | HTMLVideoElement
            | ImageBitmap
    ) {
        if (typeof image === "string") {
            tgdLoadImage(image)
                .then(img => {
                    if (img) {
                        this.loadImage(img)
                        this.context.paint()
                    } else {
                        console.error(
                            "[TgdTexture2D] Unable to load image:",
                            image
                        )
                    }
                })
                .catch(console.error)
            return
        }

        const { context, glTexture: texture } = this
        const { gl } = context
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            image
        )
        gl.generateMipmap(gl.TEXTURE_2D)
        this._width = image.width
        this._height = image.height
        this._image = image
        this.eventImageUpdate.dispatch(this)
    }

    private fillGradient(
        width: number,
        height: number,
        dirX: number,
        dirY: number,
        ...colors: string[]
    ) {
        const { canvas, ctx } = tgdCanvasCreateWithContext2D(width, height)
        const gradient = ctx.createLinearGradient(
            0,
            0,
            width * dirX,
            height * dirY
        )
        for (let i = 0; i < colors.length; i++) {
            gradient.addColorStop(i / (colors.length - 1), colors[i])
        }
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
        this.loadImage(canvas)

        canvas.style.position = "fixed"
    }

    private readonly updateTexture: () => WebGLTexture
}
