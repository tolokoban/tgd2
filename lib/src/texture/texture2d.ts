import { TgdEvent } from "@tgd/event"
import { tgdLoadImage } from "@tgd/loader/image"
import { TgdProgram } from "@tgd/program"
import { isWebglImage, WebglImage, WebglTexParameter } from "@tgd/types"
import { webglLookup } from "@tgd/utils"
import {
    WebglTextureInternalFormat,
    WebglTextureParameters,
    webglTextureParametersSet,
} from "@tgd/webgl"

interface TgdTexture2DStorage {
    width: number
    height: number
    levels: number
    flipY: boolean
    /**
     * Do we want to use premultiplied alpha?
     * Default to `false`.
     */
    premultipliedAlpha: boolean
    internalFormat:
        | "R8"
        | "R16F"
        | "R32F"
        | "R8UI"
        | "RG8"
        | "RG16F"
        | "RG32F"
        | "RG8UI"
        | "RGB8"
        | "SRGB8"
        | "RGB565"
        | "R11F_G11F_B10F"
        | "RGB9_E5"
        | "RGB16F"
        | "RGB32F"
        | "RGB8UI"
        | "RGBA8"
        | "SRGB8_ALPHA8"
        | "RGB5_A1"
        | "RGBA4"
        | "RGBA16F"
        | "RGBA32F"
        | "RGBA8UI"
        | "COMPRESSED_R11_EAC"
        | "COMPRESSED_SIGNED_R11_EAC"
        | "COMPRESSED_RG11_EAC"
        | "COMPRESSED_SIGNED_RG11_EAC"
        | "COMPRESSED_RGB8_ETC2"
        | "COMPRESSED_RGBA8_ETC2_EAC"
        | "COMPRESSED_SRGB8_ETC2"
        | "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"
        | "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"
        | "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"
}

export class TgdTexture2D {
    public readonly name: string
    public readonly gl: WebGL2RenderingContext
    public readonly eventChange = new TgdEvent<TgdTexture2D>()

    private _texture: WebGLTexture | null = null
    private _width = -1
    private _height = -1
    private readonly storage: TgdTexture2DStorage
    private params: WebglTextureParameters = {
        magFilter: "LINEAR",
        minFilter: "LINEAR",
        wrapS: "REPEAT",
        wrapT: "REPEAT",
        wrapR: "REPEAT",
    }

    private static counter = 0

    constructor(
        private readonly context: {
            gl: WebGL2RenderingContext
            paint?: () => void
        },
        storage?: Partial<TgdTexture2DStorage>
    ) {
        const { gl } = context
        this.gl = gl
        this.name = `Texture2D/${TgdTexture2D.counter++}`
        this.storage = {
            width: 0,
            height: 0,
            internalFormat: "RGBA8",
            levels: 1,
            flipY: false,
            premultipliedAlpha: false,
            ...storage,
        }
        const width = storage?.width
        const height = storage?.height
        if (typeof width == "number" && typeof height === "number") {
            this.resize(width, height)
        } else {
            this.createTexture()
        }
    }

    delete() {
        if (this._texture) this.gl.deleteTexture(this._texture)
        this._texture = null
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    private createTexture() {
        this.delete()
        const texture = this.gl.createTexture()
        if (!texture) throw new Error("Unable to create a WebGLTexture!")

        const { gl } = this
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.storage.flipY)
        gl.pixelStorei(
            gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
            this.storage.premultipliedAlpha
        )
        this._texture = texture
        this.setParams(this.params)
    }

    resize(width: number, height: number) {
        if (width === this.width && height === this.height) return

        const { gl, storage } = this
        this.createTexture()
        this._width = width
        this._height = height
        storage.width = width
        storage.height = height
        this.bind()
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.storage.flipY)
        gl.pixelStorei(
            gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
            this.storage.premultipliedAlpha
        )
        const { internalFormat, levels } = this.storage
        if (internalFormat.startsWith("COMPRESSED_")) {
            // We need to load an extension for that.
            const extension = gl.getExtension("WEBGL_compressed_texture_etc")
            if (!extension)
                throw new Error(
                    'Your browser does not support extension "WEBGL_compressed_texture_etc" on this device!'
                )
        }
        gl.texStorage2D(
            gl.TEXTURE_2D,
            levels,
            (gl as unknown as Record<string, GLenum>)[internalFormat],
            width,
            height
        )
        this.checkError()
    }

    private checkError() {
        const { gl } = this
        const error = gl.getError()
        if (error !== gl.NO_ERROR) {
            console.error(
                `[TgdTexture2D::${this.name}] Error:`,
                webglLookup(error)
            )
        }
    }

    get glTexture(): WebGLTexture {
        if (this._texture) return this._texture

        throw new Error(`Texture "${this.name}" has been deleted!`)
    }

    bind() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.glTexture)
    }

    loadBitmap(
        bmp: string | WebglImage | null | Promise<WebglImage | null>,
        options: {
            level?: number
            generateMipmap?: boolean
            onLoad?: () => void
        } = {}
    ): this {
        if (!bmp) return this

        if (typeof bmp === "string") {
            return this.loadBitmap(tgdLoadImage(bmp), options)
        }

        if (!isWebglImage(bmp)) {
            bmp.then(data => this.loadBitmap(data)).catch(error =>
                console.error("Unable to load texture BMP:", error)
            )
            return this
        }

        const { storage, gl } = this
        const { level = 0 } = options
        this._width = bmp.width
        this._height = bmp.height
        this.bind()
        gl.texImage2D(
            gl.TEXTURE_2D,
            level,
            (gl as unknown as Record<string, GLenum>)[storage.internalFormat],
            gl[figureOutCompatibleFormat(storage.internalFormat)] as number,
            gl.UNSIGNED_BYTE,
            bmp
        )
        this.checkError()
        if (options.generateMipmap) {
            this.generateMipmap()
            this.checkError()
        }
        this.context.paint?.()
        options.onLoad?.()
        this.eventChange.dispatch(this)
        return this
    }

    loadData(
        data: Uint8Array | Uint8ClampedArray,
        options: {
            width: number
            height: number
            internalFormat: WebglTextureInternalFormat
            format:
                | "RED"
                | "RG"
                | "RGB"
                | "RGBA"
                | "RED_INTEGER"
                | "RG_INTEGER"
                | "RGB_INTEGER"
                | "RGBA_INTEGER"
            level?: number
            offset?: number
        }
    ) {
        const {
            level = 0,
            width,
            height,
            internalFormat = "RGB",
            format = "RGB",
            // offset = 0,
        } = options
        const { gl } = this
        this.bind()
        gl.texImage2D(
            gl.TEXTURE_2D,
            level,
            gl[internalFormat],
            width,
            height,
            0,
            gl[format],
            gl.UNSIGNED_BYTE,
            data
            // offset
        )
        this.checkError()
        this.eventChange.dispatch(this)
        return this
    }

    /**
     *
     * @param unit Unit to link the texture to
     * @param program The program that owns the uniform to update
     * @param uniformName The uniform that hold the texture
     */
    activate(unit: number, program?: TgdProgram, uniformName?: string) {
        const { gl } = this
        gl.activeTexture(gl.TEXTURE0 + unit)
        this.bind()
        if (program && uniformName) {
            program.uniform1i(uniformName, unit)
        }
        return this
    }

    generateMipmap() {
        const { gl } = this
        this.bind()
        gl.generateMipmap(gl.TEXTURE_2D)
        return this
    }

    setParams(parameters: WebglTextureParameters) {
        this.bind()
        webglTextureParametersSet(this.gl, parameters)
        this.params = {
            ...this.params,
            ...parameters,
        }
        return this
    }

    set textureBaseLevel(value: number) {
        const { gl } = this
        this.bind()
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_BASE_LEVEL, value)
    }

    get textureBaseLevel(): number {
        const { gl } = this
        this.bind()
        return gl.getTexParameter(
            gl.TEXTURE_2D,
            gl.TEXTURE_BASE_LEVEL
        ) as number
    }

    set textureMaxLevel(value: number) {
        const { gl } = this
        this.bind()
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAX_LEVEL, value)
    }

    get textureMaxLevel(): number {
        const { gl } = this
        this.bind()
        return gl.getTexParameter(gl.TEXTURE_2D, gl.TEXTURE_MAX_LEVEL) as number
    }

    getParameter(parameter: WebglTexParameter): number | boolean | null {
        const { gl, glTexture } = this
        gl.bindTexture(gl.TEXTURE_2D, glTexture)
        const value = gl.getTexParameter(gl.TEXTURE_2D, gl[parameter]) as
            | number
            | boolean
            | null
        return value
    }

    debug(title?: string) {
        console.log(
            title ?? this.name ?? "TgdTexture2D",
            "  ",
            this.width,
            "×",
            this.height
        )
        const parameters: WebglTexParameter[] = [
            "TEXTURE_MAG_FILTER",
            "TEXTURE_MIN_FILTER",
            "TEXTURE_WRAP_R",
            "TEXTURE_WRAP_S",
            "TEXTURE_WRAP_T",
            "TEXTURE_MAX_LEVEL",
            "TEXTURE_MAX_LOD",
            "TEXTURE_MIN_LOD",
            "TEXTURE_BASE_LEVEL",
            "TEXTURE_COMPARE_FUNC",
            "TEXTURE_COMPARE_MODE",
            "TEXTURE_IMMUTABLE_FORMAT",
            "TEXTURE_IMMUTABLE_LEVELS",
        ]
        for (const name of parameters) {
            const value = this.getParameter(name)
            console.log(
                ">",
                name,
                "=",
                value,
                typeof value === "number" ? `(${webglLookup(value)})` : " "
            )
        }
    }
}

const COMPATIBLE_FORMATS: Array<[keyof WebGL2RenderingContext, Set<string>]> = [
    [
        "RGB",
        new Set([
            "RGB",
            "RGB8",
            "RGB565",
            "SRGB8",
            "RGB8_SNORM",
            "RGB565",
            "R11F_G11F_B10F",
            "RGB9_E5",
            "RGB16F",
            "R11F_G11F_B10F",
            "RGB9_E5",
            "RGB32F",
            "RGB16F",
            "R11F_G11F_B10F",
            "RGB9_E5",
        ]),
    ],
    [
        "RGBA",
        new Set([
            "RGBA",
            "RGBA8",
            "RGB5_A1",
            "RGBA4",
            "SRGB8_ALPHA8",
            "RGBA8_SNORM",
            "RGBA4",
            "RGB5_A1",
            "RGB10_A2",
            "RGB5_A1",
            "RGBA16F",
            "RGBA32F",
            "RGBA16F",
        ]),
    ],
    ["RG", new Set(["RG8"])],
    ["RED", new Set(["R8"])],
]

function figureOutCompatibleFormat(
    internalFormat: string
): keyof WebGL2RenderingContext {
    for (const [format, internalFormats] of COMPATIBLE_FORMATS) {
        if (internalFormats.has(internalFormat)) return format
    }
    throw new Error(
        `There is no compatible format for internalFormat "${internalFormat}" and type "UNSIGNED_BYTE"!`
    )
}
