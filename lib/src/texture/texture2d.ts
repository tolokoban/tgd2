import { TgdEvent } from "@tgd/event"
import { TgdProgram } from "@tgd/program"
import { isWebglImage, WebglImage, WebglTexParameter } from "@tgd/types"
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

    private readonly _texture: WebGLTexture | null = null
    private _width = 0
    private _height = 0
    private readonly storage: TgdTexture2DStorage

    private static counter = 0

    constructor(
        context: { gl: WebGL2RenderingContext },
        storage?: Partial<TgdTexture2DStorage>
    ) {
        const { gl } = context
        this.gl = gl
        this.name = `Texture2D/${TgdTexture2D.counter++}`
        const texture = gl.createTexture()
        if (!texture) throw Error("Unable to create a WebGLTexture!")

        this._texture = texture
        this.setParams({
            magFilter: "LINEAR",
            minFilter: "LINEAR",
            wrapS: "REPEAT",
            wrapT: "REPEAT",
            wrapR: "REPEAT",
        })
        this.storage = {
            width: 1,
            height: 1,
            internalFormat: "RGBA8",
            levels: 1,
            flipY: false,
            ...storage,
        }
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.storage.flipY)
        if (
            typeof storage?.width === "number" &&
            typeof storage?.height === "number"
        ) {
            this.resize(storage?.width, storage?.height)
        }
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    resize(width: number, height: number) {
        if (width === this.width && height === this.height) return

        const { gl, storage } = this
        this._width = storage.width = width
        this._height = storage.height = height
        const { internalFormat, levels } = this.storage
        if (internalFormat.startsWith("COMPRESSED_")) {
            // We need to load an extension for that.
            const ext = gl.getExtension("WEBGL_compressed_texture_etc")
            if (!ext)
                throw Error(
                    'Your browser does not support extension "WEBGL_compressed_texture_etc" on this device!'
                )
        }
        this.bind()
        gl.texStorage2D(
            gl.TEXTURE_2D,
            levels,
            (gl as unknown as Record<string, GLenum>)[internalFormat],
            width,
            height
        )
    }

    get glTexture(): WebGLTexture {
        if (this._texture) return this._texture

        throw Error(`Texture "${this.name}" has been deleted!`)
    }

    bind() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.glTexture)
    }

    loadBitmap(
        bmp: WebglImage | null | Promise<WebglImage | null>,
        options: {
            level?: number
        } = {}
    ) {
        if (!bmp) return

        if (!isWebglImage(bmp)) {
            bmp.then(data => this.loadBitmap(data)).catch(err =>
                console.error("Unable to load texture BMP:", err)
            )
            return
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
            // internalFormat,
            // format,
            // offset = 0,
        } = options
        const { gl } = this
        this.bind()
        gl.texImage2D(
            gl.TEXTURE_2D,
            level,
            gl.RGB, //gl[internalFormat],
            width,
            height,
            0,
            gl.RGB, // gl[format],
            gl.UNSIGNED_BYTE,
            data
            // offset
        )
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

    setParams(params: WebglTextureParameters) {
        this.bind()
        webglTextureParametersSet(this.gl, params)
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

    getParameter(param: WebglTexParameter): number | boolean | null {
        const { gl, glTexture } = this
        gl.bindTexture(gl.TEXTURE_2D, glTexture)
        const value = gl.getTexParameter(gl.TEXTURE_2D, gl[param]) as
            | number
            | boolean
            | null
        return value
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
    throw Error(
        `There is no compatible format for internalFormat "${internalFormat}" and type "UNSIGNED_BYTE"!`
    )
}
