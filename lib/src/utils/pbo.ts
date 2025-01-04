import { tgdCanvasCreateWithContext2D } from "./canvas"

/**
 * Creating a Pixel Buffer Object is usefull to store big images into the GPU.
 *
 * @param gl
 * @param source
 * @returns Handle of the created PBO.
 */
export function tgdPixelBufferObjectCreate(
    gl: WebGL2RenderingContext,
    source: HTMLImageElement | HTMLCanvasElement | Uint8ClampedArray,
    width?: number,
    height?: number
) {
    const { data, width: w, height: h } = getData(source, width, height)
    const buffer = gl.createBuffer()
    if (!buffer) throw Error("Unable to create a WebGL2 pixel buffer buffer!")

    gl.bindBuffer(gl.PIXEL_UNPACK_BUFFER, buffer)
    gl.bufferData(gl.PIXEL_UNPACK_BUFFER, data, gl.STATIC_DRAW)
    gl.pixelStorei(gl.UNPACK_ROW_LENGTH, w)
    gl.pixelStorei(gl.UNPACK_IMAGE_HEIGHT, h)
    return buffer
}

function getData(
    source: HTMLImageElement | HTMLCanvasElement | Uint8ClampedArray,
    width?: number,
    height?: number
): { data: Uint8ClampedArray; width: number; height: number } {
    if (source instanceof Uint8ClampedArray) {
        if (typeof width === "number" && typeof height === "number") {
            return { data: source, width, height }
        }
        throw Error(
            "If you give a Uint8Array to tgdPixelBufferObjectCreate(), you must specify both width and height arguments!"
        )
    }

    const { width: w, height: h } = source
    const { ctx } = tgdCanvasCreateWithContext2D(w, h)
    ctx.drawImage(source, 0, 0)
    return { data: ctx.getImageData(0, 0, w, h).data, width: w, height: h }
}
