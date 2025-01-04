import { TgdEvent } from "@tgd/event/event"
import { tgdLoadImage } from "@tgd/loader"
import {
    TgdProgram,
    TgdTexture2D,
    TgdTexture2DArrayOptions,
    TgdContextInterface,
    WebglImage,
    WebglTexParameter,
    WebglPixelStorage2DArrayFormat,
    WebglType,
} from "@tgd/types"

export class TgdTexture2DArray {
    public readonly name: string
    public readonly eventImageUpdate = new TgdEvent<TgdTexture2D>()
    public readonly glTexture: WebGLTexture

    private readonly options: Required<TgdTexture2DArrayOptions>

    private static counter = 0

    constructor(
        public readonly context: TgdContextInterface,
        public readonly id: string,
        options: TgdTexture2DArrayOptions
    ) {
        const { gl } = context
        const name = options.name ?? `Texture2D/${TgdTexture2DArray.counter++}`
        this.options = {
            name,
            mipmapLevels: 1,
            generateMipMap: false,
            wrapS: "REPEAT",
            wrapT: "REPEAT",
            wrapR: "REPEAT",
            minFilter: "NEAREST_MIPMAP_LINEAR",
            magFilter: "LINEAR",
            internalFormat: "RGBA8",
            ...options,
        }
        this.name = this.options.name
        const texture = gl.createTexture()
        if (!texture) throw Error("Unable to create a WebGLTexture!")
        this.glTexture = texture
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texStorage3D(
            gl.TEXTURE_2D_ARRAY,
            this.options.mipmapLevels,
            gl[this.options.internalFormat],
            this.options.width,
            this.options.height,
            this.options.depth
        )
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

    /**
     *
     * @param params
     * - `dataOffsetX` and `dataOffsetY` are used to define the origin into the `data` image/array.
     * @returns
     */
    setData(params: {
        xoffset?: number
        yoffset?: number
        zoffset?: number
        mipmapLevel?: number
        dataOffsetX?: number
        dataOffsetY?: number
        width?: number
        height?: number
        depth?: number
        format?: WebglPixelStorage2DArrayFormat
        type?: WebglType
        data: string | WebglImage
    }) {
        const { data } = params
        if (typeof data === "string") {
            tgdLoadImage(data)
                .then(img => {
                    if (img) {
                        this.setData({
                            ...params,
                            data: img,
                        })
                    }
                })
                .catch(console.error)
            return
        }

        const {
            xoffset = 0,
            yoffset = 0,
            zoffset = 0,
            dataOffsetX = 0,
            dataOffsetY = 0,
            mipmapLevel = 1,
            format,
            type = "UNSIGNED_BYTE",
        } = params
        const { options } = this
        const { gl } = this.context
        const width = this.getWidth(params.width, data)
        const height = this.getHeight(params.height, data)
        const depth = params.width ?? 1
        if (width + xoffset > options.width)
            throw Error("Exceeding the width of the texture array!")
        if (height + yoffset > options.height)
            throw Error("Exceeding the height of the texture array!")
        if (depth + zoffset > options.depth)
            throw Error("Exceeding the depth of the texture array!")
        this.bind()
        gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, dataOffsetX)
        gl.pixelStorei(gl.UNPACK_SKIP_ROWS, dataOffsetY)
        gl.texSubImage3D(
            gl.TEXTURE_2D_ARRAY,
            mipmapLevel,
            xoffset,
            yoffset,
            zoffset,
            width ?? options.width,
            height ?? options.height,
            depth ?? 1,
            gl[format ?? "RGBA"],
            gl[type],
            data
        )
        gl.generateMipmap(gl.TEXTURE_2D_ARRAY)
    }

    private getWidth(width: number | undefined, data: WebglImage) {
        if (typeof width === "number") return width
        if (typeof data.width === "number") return data.width
        return this.options.width
    }

    private getHeight(height: number | undefined, data: WebglImage) {
        if (typeof height === "number") return height
        if (typeof data.height === "number") return data.height
        return this.options.height
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

    delete() {
        this.context.gl.deleteTexture(this.glTexture)
    }

    get width() {
        return this.options.width
    }

    get height() {
        return this.options.height
    }

    get depth() {
        return this.options.depth
    }

    bind() {
        const { gl } = this.context
        gl.bindTexture(gl.TEXTURE_2D_ARRAY, this.glTexture)
    }

    activate(program: TgdProgram, uniformName: string, slot = 0) {
        const { context } = this
        const { gl } = context
        gl.activeTexture(gl.TEXTURE0 + slot)
        this.bind()
        program.uniform1i(uniformName, slot)
    }

    private updateTexture() {
        const { options, context } = this
        const { gl } = context
        gl.texParameteri(
            gl.TEXTURE_2D_ARRAY,
            gl.TEXTURE_MIN_FILTER,
            gl[options.minFilter]
        )
        gl.texParameteri(
            gl.TEXTURE_2D_ARRAY,
            gl.TEXTURE_MAG_FILTER,
            gl[options.magFilter]
        )
        gl.texParameteri(
            gl.TEXTURE_2D_ARRAY,
            gl.TEXTURE_WRAP_S,
            gl[options.wrapS]
        )
        gl.texParameteri(
            gl.TEXTURE_2D_ARRAY,
            gl.TEXTURE_WRAP_T,
            gl[options.wrapT]
        )
        gl.texParameteri(
            gl.TEXTURE_2D_ARRAY,
            gl.TEXTURE_WRAP_R,
            gl[options.wrapR]
        )
    }
}
