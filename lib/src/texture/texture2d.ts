import { TgdLoaderImage } from "@/loader"
import { TgdEvent } from "@/event/event"
import { TgdProgram, TdgTexture2D, TdgTexture2DOptions } from "@/types"

const DEFAULT_DATA = new Uint8Array([200, 200, 200, 255])

export class TdgTexture2DImpl implements TdgTexture2D {
    public readonly texture: WebGLTexture
    public readonly eventImageUpdate = new TgdEvent<TdgTexture2D>()

    private readonly options: TdgTexture2DOptions
    private _width = 0
    private _height = 0
    private _image:
        | null
        | ImageData
        | HTMLImageElement
        | HTMLCanvasElement
        | HTMLVideoElement
        | ImageBitmap = null

    constructor(
        public readonly gl: WebGL2RenderingContext,
        private readonly refresh: () => void,
        options: Partial<TdgTexture2DOptions> = {}
    ) {
        this.options = {
            wrapS: "REPEAT",
            wrapT: "REPEAT",
            wrapR: "REPEAT",
            minFilter: "NEAREST_MIPMAP_LINEAR",
            magFilter: "LINEAR",
            ...options,
        }
        const texture = gl.createTexture()
        if (!texture) throw Error("Unable to create a WebGLTexture!")

        this.texture = texture
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            1,
            1,
            0,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            DEFAULT_DATA
        )

        // The texture doesn't wrap and it uses linear interpolation.
        const { wrapS, wrapT, wrapR, minFilter, magFilter } = this.options
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[wrapS])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[wrapT])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_R, gl[wrapR])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl[minFilter])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl[magFilter])
        if (options.image) this.loadImage(options.image)
    }

    fillHorizontalGradient(size: number, ...colors: string[]): void {
        this.fillGradient(size, 1, 1, 0, ...colors)
    }

    fillverticalGradient(size: number, ...colors: string[]): void {
        this.fillGradient(1, size, 0, 1, ...colors)
    }

    private fillGradient(
        width: number,
        height: number,
        dirX: number,
        dirY: number,
        ...colors: string[]
    ) {
        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext("2d")
        if (!ctx) throw Error("Unable to create a 2D context!")

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

        document.body.appendChild(canvas)
        canvas.style.position = "fixed"
    }

    delete() {
        this.gl.deleteTexture(this.texture)
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
        const { gl } = this
        gl.bindTexture(gl.TEXTURE_2D, this.texture)
    }

    activate(program: TgdProgram, uniformName: string, slot = 0) {
        const { gl, texture } = this
        gl.activeTexture(gl.TEXTURE0 + slot)
        gl.bindTexture(gl.TEXTURE_2D, texture)
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
            TgdLoaderImage.image(image)
                .then(img => {
                    if (img) {
                        this.loadImage(img)
                        this.refresh()
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

        const { gl, texture } = this
        gl.bindTexture(gl.TEXTURE_2D, texture)
        if (image instanceof Image) {
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
        }
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
}
