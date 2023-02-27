export interface OptionsTexture2D {
    image: HTMLImageElement | HTMLCanvasElement
    placeholder: [red: number, green: number, green: number, alpha: number]
}

export function bindTexture2D(
    gl: WebGL2RenderingContext,
    texture: WebGLTexture,
    {
        image,
        placeholder = [0, 0, 0, 1],
    }: Partial<OptionsTexture2D> & {
        image: HTMLImageElement | HTMLCanvasElement
    }
) {
    gl.bindTexture(gl.TEXTURE_2D, texture)
    const level = 0
    const internalFormat = gl.RGBA
    const width = 1
    const height = 1
    const border = 0
    const srcFormat = gl.RGBA
    const srcType = gl.UNSIGNED_BYTE
    const pixel = new Uint8Array(placeholder)
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
    const update = () => {
        gl.texImage2D(
            gl.TEXTURE_2D,
            level,
            internalFormat,
            srcFormat,
            srcType,
            image
        )
    }
    update()
    if (typeof image.addEventListener === "function") {
        image.addEventListener("load", update)
    }
}
