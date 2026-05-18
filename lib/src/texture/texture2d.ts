import { TgdColor } from "@tgd/color"
import { TgdContext } from "@tgd/context"
import { TgdEvent } from "@tgd/event"
import type { TgdFilter } from "@tgd/filter"
import { tgdLoadImage } from "@tgd/loader/image"
import { TgdVec4 } from "@tgd/math"
import { TgdPainterFilter, TgdPainterFramebuffer, TgdPainterLogic } from "@tgd/painter"
import { TgdProgram } from "@tgd/program"
import { ArrayNumber4, isWebglImage, type WebglImage, type WebglTexParameter } from "@tgd/types"
import { isString } from "@tgd/types/guards"
import { ensureArrayNumber4, resolveErrorMessage, tgdCanvasCreate, webglLookup } from "@tgd/utils"
import { type WebglTextureParameters, webglTextureParametersSet } from "@tgd/webgl"
import { isLoadBmpOptions, type LoadBmpOptions } from "./types"

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
    format:
        | "R8 / RED / UNSIGNED_BYTE"
        | "R8_SNORM / RED / BYTE"
        | "R16F / RED / HALF_FLOAT"
        | "R16F / RED / FLOAT"
        | "R32F / RED / FLOAT"
        | "R8UI / RED_INTEGER / UNSIGNED_BYTE"
        | "R8I / RED_INTEGER / BYTE"
        | "R16UI / RED_INTEGER / UNSIGNED_SHORT"
        | "R16I / RED_INTEGER / SHORT"
        | "R32UI / RED_INTEGER / UNSIGNED_INT"
        | "R32I / RED_INTEGER / INT"
        | "RG8 / RG / UNSIGNED_BYTE"
        | "RG8_SNORM / RG / BYTE"
        | "RG16F / RG / HALF_FLOAT"
        | "RG16F / RG / FLOAT"
        | "RG32F / RG / FLOAT"
        | "RG8UI / RG_INTEGER / UNSIGNED_BYTE"
        | "RG8I / RG_INTEGER / BYTE"
        | "RG16UI / RG_INTEGER / UNSIGNED_SHORT"
        | "RG16I / RG_INTEGER / SHORT"
        | "RG32UI / RG_INTEGER / UNSIGNED_INT"
        | "RG32I / RG_INTEGER / INT"
        | "RGB8 / RGB / UNSIGNED_BYTE"
        | "SRGB8 / RGB / UNSIGNED_BYTE"
        | "RGB565 / RGB / UNSIGNED_BYTE"
        | "RGB565 / RGB / UNSIGNED_SHORT_5_6_5"
        | "RGB8_SNORM / RGB / BYTE"
        | "R11F_G11F_B10F / RGB / UNSIGNED_INT_10F_11F_11F_REV"
        | "R11F_G11F_B10F / RGB / HALF_FLOAT"
        | "R11F_G11F_B10F / RGB / FLOAT"
        | "RGB9_E5 / RGB / UNSIGNED_INT_5_9_9_9_REV"
        | "RGB9_E5 / RGB / HALF_FLOAT"
        | "RGB9_E5 / RGB / FLOAT"
        | "RGB16F / RGB / HALF_FLOAT"
        | "RGB16F / RGB / FLOAT"
        | "RGB32F / RGB / FLOAT"
        | "RGB8UI / RGB_INTEGER / UNSIGNED_BYTE"
        | "RGB8I / RGB_INTEGER / BYTE"
        | "RGB16UI / RGB_INTEGER / UNSIGNED_SHORT"
        | "RGB16I / RGB_INTEGER / SHORT"
        | "RGB32UI / RGB_INTEGER / UNSIGNED_INT"
        | "RGB32I / RGB_INTEGER / INT"
        | "RGBA8 / RGBA / UNSIGNED_BYTE"
        | "SRGB8_ALPHA8 / RGBA / UNSIGNED_BYTE"
        | "RGBA8_SNORM / RGBA / BYTE"
        | "RGB5_A1 / RGBA / UNSIGNED_BYTE"
        | "RGB5_A1 / RGBA / UNSIGNED_SHORT_5_5_5_1"
        | "RGB5_A1 / RGBA / UNSIGNED_INT_2_10_10_10_REV"
        | "RGBA4 / RGBA / UNSIGNED_BYTE"
        | "RGBA4 / RGBA / UNSIGNED_SHORT_4_4_4_4"
        | "RGB10_A2 / RGBA / UNSIGNED_INT_2_10_10_10_REV"
        | "RGBA16F / RGBA / HALF_FLOAT"
        | "RGBA16F / RGBA / FLOAT"
        | "RGBA32F / RGBA / FLOAT"
        | "RGBA8UI / RGBA_INTEGER / UNSIGNED_BYTE"
        | "RGBA8I / RGBA_INTEGER / BYTE"
        | "RGBA16UI / RGBA_INTEGER / UNSIGNED_SHORT"
        | "RGBA16I / RGBA_INTEGER / SHORT"
        | "RGBA32UI / RGBA_INTEGER / UNSIGNED_INT"
        | "RGBA32I / RGBA_INTEGER / INT"
        | "DEPTH_COMPONENT16 / DEPTH_COMPONENT / UNSIGNED_SHORT"
        | "DEPTH_COMPONENT16 / DEPTH_COMPONENT / UNSIGNED_INT"
        | "DEPTH_COMPONENT24 / DEPTH_COMPONENT / UNSIGNED_INT"
        | "DEPTH_COMPONENT32F / DEPTH_COMPONENT / FLOAT"
        | "DEPTH24_STENCIL8 / DEPTH_STENCIL / UNSIGNED_INT_24_8"
        | "DEPTH32F_STENCIL8 / DEPTH_STENCIL / FLOAT_32_UNSIGNED_INT_24_8_REV"
}

export interface TgdTexture2DOptions {
    name?: string
    storage?: Partial<TgdTexture2DStorage>
    params?: WebglTextureParameters
    load?: WebglImage | string | LoadBmpOptions
    filter?: TgdFilter
    /**
     * The texture starts as a 1x1 black transparent pixel.
     * You can specify another color with this.
     */
    color?: ArrayNumber4 | TgdVec4 | TgdColor
}

export class TgdTexture2D {
    public name: string
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
    private videoUpdater: TgdPainterLogic | null = null
    private static counter = 0

    constructor(
        public readonly context: TgdContext,
        private readonly options: TgdTexture2DOptions = {},
    ) {
        const { storage, params, load } = options
        const { gl } = context
        this.gl = gl
        this.name = options.name ?? `Texture2D/${TgdTexture2D.counter++}`
        this.storage = {
            width: 0,
            height: 0,
            format: storage?.format ?? "RGBA8 / RGBA / UNSIGNED_BYTE",
            levels: 1,
            flipY: false,
            premultipliedAlpha: false,
            ...storage,
        }
        const width = storage?.width
        const height = storage?.height
        this.createTexture(options.color)
        if (typeof width === "number" && typeof height === "number") {
            this.resize(width, height)
        }
        if (params) this.setParams(params)
        if (isWebglImage(load) || isString(load)) {
            this.loadBitmap(load)
        } else if (isLoadBmpOptions(load)) {
            this.loadBitmap(load.bmp, load)
        }
    }

    clone(name?: string): TgdTexture2D {
        return new TgdTexture2D(
            this.context,
            structuredClone({
                ...this.options,
                name: name ?? this.options.name,
            }),
        ).loadBitmap(tgdCanvasCreate(this.width, this.height))
    }

    get format() {
        return this.storage.format
    }
    private set format(format: TgdTexture2DStorage["format"]) {
        this.storage.format = format
    }

    get internalFormat(): number {
        const [internalFormat] = this.splitFormat(this.context.gl)
        return internalFormat
    }

    get sourceFormat(): number {
        const [, sourceFormat] = this.splitFormat(this.context.gl)
        return sourceFormat
    }

    get sourceType(): number {
        const [, , sourceType] = this.splitFormat(this.context.gl)
        return sourceType
    }

    delete() {
        const { videoUpdater } = this
        if (videoUpdater) this.context.remove(videoUpdater)
        if (this._texture) this.gl.deleteTexture(this._texture)
        this._texture = null
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    private createTexture(color?: ArrayNumber4 | TgdVec4 | TgdColor) {
        this.delete()
        const { gl } = this
        const texture = gl.createTexture()
        if (!texture) throw new Error("Unable to create a WebGLTexture!")

        this._texture = texture
        this.bind()
        this.setParams(this.params)
        const color4 = ensureArrayNumber4(color, [1, 0, 0.667, 1])
        const [internalFormat, sourceFormat, sourceType] = this.splitFormat(gl)
        gl.texImage2D(
            gl.TEXTURE_2D, // target
            0, // level of detail
            internalFormat, // internal format
            1, // width
            1, // height
            0, // border
            sourceFormat, // source format
            sourceType, // source type
            sourceType === gl.FLOAT ? new Float32Array(color4) : new Uint8Array(color4),
        )
        this._width = 1
        this._height = 1
    }

    private splitFormat(
        gl: WebGL2RenderingContext,
    ): [internalFormat: number, sourceFormat: number, sourceType: number] {
        const [internalFormat, sourceFormat, sourceType] = this.storage.format.split(" / ") as [
            keyof WebGL2RenderingContext,
            keyof WebGL2RenderingContext,
            keyof WebGL2RenderingContext,
        ]
        return [gl[internalFormat] as number, gl[sourceFormat] as number, gl[sourceType] as number]
    }

    resize(w: number, h: number) {
        const width = Math.ceil(w)
        const height = Math.ceil(h)
        if (width === this.width && height === this.height) return

        this.loadBitmap(tgdCanvasCreate(width, height))
    }

    private checkError(caption: string, action?: () => void) {
        const { gl } = this
        const error = gl.getError()
        if (error !== gl.NO_ERROR) {
            this.context.console.error(`[TgdTexture2D::${this.name}] Error in ${caption}:`, webglLookup(error), this)
            action?.()
        }
    }

    get glTexture(): WebGLTexture {
        if (this._texture) return this._texture

        const error = `[TgdTexture2D] Texture "${this.name}" has been deleted!`
        this.context.console.error(error)
        throw new Error(error)
    }

    bind() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.glTexture)
    }

    unbind() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, null)
    }

    loadVideo(
        url: string,
        options: {
            onLoad?: () => void
        } = {},
    ): this {
        let playing = false
        let timeupdate = false
        const video = document.createElement("video")
        let initialized = false
        const checkReady = () => {
            if (!playing || !timeupdate || initialized) return

            initialized = true
            this.loadBitmap(video, options)
            const videoUpdater = new TgdPainterLogic(() => {
                if (!video.paused && !video.ended) {
                    this.loadBitmap(video)
                }
            })
            if (this.videoUpdater) this.context.remove(this.videoUpdater)
            this.context.add(videoUpdater)
            this.videoUpdater = videoUpdater
        }
        video.playsInline = true
        video.muted = true
        video.loop = true
        video.addEventListener("playing", () => {
            playing = true
            checkReady()
        })
        video.addEventListener("timeupdate", () => {
            timeupdate = true
            checkReady()
        })
        video.src = url
        video.play().catch(() => {
            // We want to prevent this error:
            // The fetching process for the media resource was aborted by the user agent at the user's request.
        })
        return this
    }

    loadBitmap(
        bmp: string | WebglImage | null | Promise<WebglImage | null> | undefined,
        options: {
            level?: number
            generateMipmap?: boolean
            onLoad?: () => void
        } = {},
    ): this {
        if (!bmp) return this

        if (typeof bmp === "string") {
            if (isImageURL(bmp)) return this.loadBitmap(tgdLoadImage(bmp), options)
            return this.loadVideo(bmp, options)
        }

        if (!isWebglImage(bmp)) {
            // This is a Promise
            bmp.then((data) => {
                this.loadBitmap(data)
            }).catch((error) => this.context.console.error("Unable to load texture BMP:", error))
            return this
        }

        if (bmp instanceof HTMLImageElement) {
            if (!bmp.complete) {
                bmp.addEventListener("load", () => this.loadBitmap(bmp, options))
                return this
            }
        } else if (bmp instanceof HTMLCanvasElement) {
            if (bmp.width <= 0 || bmp.height <= 0) {
                return this
            }
        }
        const { storage, gl } = this
        const { level = 0 } = options
        this._width = bmp.width
        this._height = bmp.height
        this.bind()
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.storage.flipY)
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.storage.premultipliedAlpha)
        const [internalFormat, sourceFormat, sourceType] = this.splitFormat(gl)
        gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, sourceFormat, sourceType, bmp)
        this.checkError(
            `loadBitmap(${JSON.stringify({
                width: bmp.width,
                height: bmp.height,
            })})\ngl.texImage2D(gl.TEXTURE_2D, ${level}, gl.${
                "RGBA" // storage.internalFormat
            }, gl.${"RGBA"}, gl.UNSIGNED_BYTE, bmp)`,
            () => {
                this.context.console.log("bmp =", bmp) // @FIXME: Remove this line written on 2026-03-24 at 09:58
                this.context.console.log("storage.flipY =", this.storage.flipY)
                this.context.console.log("storage.premultipliedAlpha =", this.storage.premultipliedAlpha)
            },
        )
        if (options.generateMipmap) {
            this.generateMipmap()
            const { context } = this
            this.checkError(
                `loadBitmap(${JSON.stringify({
                    width: bmp.width,
                    height: bmp.height,
                })})\ngl.texImage2D(gl.TEXTURE_2D, ${level}, gl.${context.lookupWebglConstant(
                    internalFormat,
                )}, gl.${context.lookupWebglConstant(sourceFormat)}, gl.${context.lookupWebglConstant(
                    sourceType,
                )}, bmp)\ngenerateMipmap()`,
            )
        }
        const { filter } = this.options
        if (filter) this.applyFilter(filter)
        this.unbind()
        options.onLoad?.()
        this.eventChange.dispatch(this)
        return this
    }

    applyFilter(filter: TgdFilter) {
        if (this.width < 1 || this.height < 1) {
            throw new Error(
                `[TgdTexture2D.applyFilter] Current size is invalie (${this.width}, ${this.height})! Maybe the texture is not loaded yet.`,
            )
        }
        const output = new TgdTexture2D(this.context, {
            params: { ...this.params },
            storage: {
                ...this.storage,
                width: this.width,
                height: this.height,
            },
        })
        const painter = new TgdPainterFilter(this.context, {
            filters: [filter],
            flipY: true,
            texture: this,
        })
        const framebuffer = new TgdPainterFramebuffer(this.context, {
            textureColor0: output,
            depthBuffer: false,
            children: [painter],
            fixedSize: true,
        })
        framebuffer.paint(0, 0)
        this.gl.deleteTexture(this._texture)
        this._texture = output.glTexture
        this.bind()
        this.setParams(this.params)
        return this
    }

    loadData(
        data: Uint8Array | Uint8ClampedArray | Float32Array,
        options: {
            width: number
            height: number
            level?: number
            offset?: number
            format?: TgdTexture2DStorage["format"]
        },
    ) {
        try {
            const {
                level = 0,
                width,
                height,
                format,
                // offset = 0,
            } = options
            const { gl, context } = this
            if (format) {
                this.format = format
            }
            checkIfDataHasMinimalRequestedSize(data, this.format, width, height)
            this._width = width
            this._height = height
            this.bind()
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.storage.flipY)
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.storage.premultipliedAlpha)
            const [internalFormat, sourceFormat, sourceType] = this.splitFormat(gl)
            if (sourceType === gl.FLOAT && !(data instanceof Float32Array)) {
                throw new Error(`You must pass a Float32Array with this format: ${this.format}!`)
            }
            gl.texImage2D(
                gl.TEXTURE_2D,
                level,
                internalFormat,
                width,
                height,
                0,
                sourceFormat,
                sourceType,
                data,
                // offset
            )
            this.checkError(`loadData(${printArray(data)}, ${JSON.stringify(options)})
internalFormat: ${context.lookupWebglConstant(internalFormat)}
sourceFormat: ${context.lookupWebglConstant(sourceFormat)}
sourceType: ${context.lookupWebglConstant(sourceType)}
`)
            this.unbind()
            this.eventChange.dispatch(this)
            return this
        } catch (error) {
            throw new Error(`[${this.name}::loadData()] ${resolveErrorMessage(error)}`)
        }
    }

    /**
     *
     * @param unit Unit to link the texture to
     * @param program The program or uniform block object that owns the uniform to update
     * @param uniformName The uniform that holds the texture
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
        const value = gl.getTexParameter(gl.TEXTURE_2D, gl.TEXTURE_BASE_LEVEL) as number
        return value
    }

    set textureMaxLevel(value: number) {
        const { gl } = this
        this.bind()
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAX_LEVEL, value)
    }

    get textureMaxLevel(): number {
        const { gl } = this
        this.bind()
        const value = gl.getTexParameter(gl.TEXTURE_2D, gl.TEXTURE_MAX_LEVEL) as number
        return value
    }

    getParameter(parameter: WebglTexParameter): number | boolean | null {
        const { gl } = this
        this.bind()
        const value = gl.getTexParameter(gl.TEXTURE_2D, gl[parameter]) as number | boolean | null
        return value
    }

    debug(title?: string) {
        console.debug(title ?? this.name ?? "TgdTexture2D", "  ", this.width, "×", this.height)
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
            console.debug(">", name, "=", value, typeof value === "number" ? `(${webglLookup(value)})` : " ")
        }
    }
}

function printArray(data: Uint8Array<ArrayBufferLike> | Uint8ClampedArray<ArrayBufferLike> | Float32Array) {
    if (data.length > 10) {
        return `[${data.slice(0, 10).join(", ")}, ...] (${data.length} elements)`
    }
    return JSON.stringify(data)
}

function isImageURL(url: string) {
    const extensions = [".webp", ".jpg", ".jpeg", ".png", ".avif", ".gif"]
    const urlLowercase = url.toLowerCase().trim()
    for (const ext of extensions) {
        if (urlLowercase.endsWith(ext)) return true
    }
    return false
}

function computeDataSizePerRow(format: TgdTexture2DStorage["format"], width: number): number {
    const [, sourceFormat, sourceType] = format.split(" / ")
    const componentCount: Record<string, number> = {
        RED: 1,
        RED_INTEGER: 1,
        RG: 2,
        RG_INTEGER: 2,
        RGB: 3,
        RGB_INTEGER: 3,
        RGBA: 4,
        RGBA_INTEGER: 4,
        DEPTH_COMPONENT: 1,
        DEPTH_STENCIL: 1,
    }
    const typeBytes: Record<string, number> = {
        UNSIGNED_BYTE: 1,
        BYTE: 1,
        UNSIGNED_SHORT: 2,
        SHORT: 2,
        HALF_FLOAT: 2,
        UNSIGNED_INT: 4,
        INT: 4,
        FLOAT: 4,
        UNSIGNED_SHORT_5_6_5: 2,
        UNSIGNED_SHORT_5_5_5_1: 2,
        UNSIGNED_SHORT_4_4_4_4: 2,
        UNSIGNED_INT_2_10_10_10_REV: 4,
        UNSIGNED_INT_10F_11F_11F_REV: 4,
        UNSIGNED_INT_5_9_9_9_REV: 4,
        UNSIGNED_INT_24_8: 4,
        FLOAT_32_UNSIGNED_INT_24_8_REV: 8,
    }
    const packed =
        typeBytes[sourceType] !== undefined &&
        sourceType !== "UNSIGNED_BYTE" &&
        sourceType !== "BYTE" &&
        sourceType !== "UNSIGNED_SHORT" &&
        sourceType !== "SHORT" &&
        sourceType !== "UNSIGNED_INT" &&
        sourceType !== "INT" &&
        sourceType !== "HALF_FLOAT" &&
        sourceType !== "FLOAT"
    const bytesPerPixel = packed
        ? typeBytes[sourceType]
        : (componentCount[sourceFormat] ?? 4) * (typeBytes[sourceType] ?? 1)
    const rowBytes = width * bytesPerPixel
    return Math.ceil(rowBytes / 4) * 4
}

function checkIfDataHasMinimalRequestedSize(
    data: Uint8Array<ArrayBufferLike> | Uint8ClampedArray<ArrayBufferLike> | Float32Array<ArrayBufferLike>,
    format: TgdTexture2DStorage["format"],
    width: number,
    height: number,
) {
    const expectedSizePerRow = computeDataSizePerRow(format, width)
    const expectedSize = expectedSizePerRow * height
    if (data.byteLength < expectedSize) {
        throw new Error(`For a texture of ${width}×${height} with format "${format}", you need a storage of ${expectedSizePerRow}×${height} = ${expectedSize}.
But your data has only ${data.byteLength} bytes.
Did you specify the right format?`)
    }
}
