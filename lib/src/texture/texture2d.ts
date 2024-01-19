import { TgdProgram } from "@/program"
import { TgdLoaderImage } from "@/loader"
import { TgdContext } from ".."
import { TgdEvent } from "@/event/event"

export type TdgTexture2DOptionWrap =
    | "REPEAT"
    | "CLAMP_TO_EDGE"
    | "MIRRORED_REPEAT"

export type TdgTexture2DOptionMinFilter =
    | "LINEAR"
    | "NEAREST"
    | "NEAREST_MIPMAP_NEAREST"
    | "LINEAR_MIPMAP_NEAREST"
    | "NEAREST_MIPMAP_LINEAR"
    | "LINEAR_MIPMAP_LINEAR"

export type TdgTexture2DOptionMagFilter = "LINEAR" | "NEAREST"

export interface TdgTexture2DOptions {
    wrapS: TdgTexture2DOptionWrap
    wrapT: TdgTexture2DOptionWrap
    wrapR: TdgTexture2DOptionWrap
    minFilter: TdgTexture2DOptionMinFilter
    magFilter: TdgTexture2DOptionMagFilter
    image?:
        | string
        | ImageData
        | HTMLImageElement
        | HTMLCanvasElement
        | HTMLVideoElement
        | ImageBitmap
}

export class TdgTexture2D {
    public readonly texture: WebGLTexture

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
        public readonly context: TgdContext,
        options: Partial<TdgTexture2DOptions> = {}
    ) {
        const { gl } = context
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

        // The texture doesn't wrap and it uses linear interpolation.
        const { wrapS, wrapT, wrapR, minFilter, magFilter } = this.options
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[wrapS])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[wrapT])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_R, gl[wrapR])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl[minFilter])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl[magFilter])
        if (options.image) this.loadImage(options.image)
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
        gl.bindTexture(gl.TEXTURE_2D, this.texture)
    }

    activate(program: TgdProgram, uniformName: string, slot = 0) {
        const { context, texture } = this
        const { gl } = context
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
                    if (img) this.loadImage(img)
                    else {
                        console.error(
                            "[TgdTexture2D]Unable to load image:",
                            image
                        )
                    }
                })
                .catch(console.error)
            return
        }

        const { context, texture } = this
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
        // Textures can be loaded lazily, so we want to
        // refresh the canvas when its done.
        this.context.paint()
    }
}
