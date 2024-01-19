import { TgdLoaderImage } from "../../../src/loader"

export interface OptionsTexture2D {
    image: HTMLImageElement | HTMLCanvasElement | string
    placeholder: [red: number, green: number, green: number, alpha: number]
    unit: number
    minFilter: "LINEAR" | "NEAREST"
    magFilter: "LINEAR" | "NEAREST"
    wrapS: "REPEAT" | "CLAMP_TO_EDGE" | "MIRRORED_REPEAT"
    wrapT: "REPEAT" | "CLAMP_TO_EDGE" | "MIRRORED_REPEAT"
}

export default class TextureHelper {
    constructor(private readonly gl: WebGL2RenderingContext) {}

    bindTexture2D(
        texture: WebGLTexture,
        {
            image,
            placeholder = [0, 1, 0, 1],
            unit = 0,
            minFilter = "LINEAR",
            magFilter = "LINEAR",
            wrapS = "REPEAT",
            wrapT = "REPEAT",
        }: Partial<OptionsTexture2D> & {
            image: HTMLImageElement | HTMLCanvasElement | string
        }
    ) {
        if (image instanceof HTMLImageElement || image instanceof Image) {
            if (!image.complete) {
                throw Error(
                    "The image argument of bindTexture2D is not loaded yet!\n\nIf you want to use asynchronous loading, please pass the URL in the image attribute."
                )
            }
        }
        const { gl } = this
        gl.activeTexture(gl.TEXTURE0 + unit)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl[minFilter])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl[magFilter])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[wrapS])
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[wrapT])
        if (typeof image !== "string") {
            console.log("Send textuxe in unit", unit)
            gl.texImage2D(
                gl.TEXTURE_2D,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                image
            )
        }
        if (typeof image === "string") {
            const level = 0
            const internalFormat = gl.RGBA
            const width = 1
            const height = 1
            const border = 0
            const srcFormat = gl.RGBA
            const srcType = gl.UNSIGNED_BYTE
            const pixel = new Uint8ClampedArray(
                placeholder.map(value => 255 * value)
            )
            gl.texImage2D(
                gl.TEXTURE_2D,
                level,
                internalFormat,
                width,
                height,
                border,
                srcFormat,
                srcType,
                pixel
            )
            TgdLoaderImage.canvas(image).then(canvas => {
                gl.activeTexture(gl.TEXTURE0 + unit)
                gl.bindTexture(gl.TEXTURE_2D, texture)
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
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[wrapS])
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[wrapT])
                if (canvas) {
                    gl.texImage2D(
                        gl.TEXTURE_2D,
                        0,
                        gl.RGBA,
                        canvas.width,
                        canvas.height,
                        0,
                        gl.RGBA,
                        gl.UNSIGNED_BYTE,
                        canvas
                    )
                }
            })
            return
        }
    }
}
