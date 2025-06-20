import { WebglMagFilter, WebglMinFilter, WebglWrap } from "@tgd/types"
import {
    WebglTextureFormat,
    WebglTextureInternalFormat,
    WebglTextureType,
} from "./types"

export interface WebglTextureParameters {
    wrapS?: WebglWrap
    wrapT?: WebglWrap
    wrapR?: WebglWrap
    minFilter?: WebglMinFilter
    magFilter?: WebglMagFilter
}

export interface WebglTexture2DCreateFromArrayOptions
    extends WebglTextureParameters {
    width: number
    height: number
    /** Mipmap level */
    level?: number
    /** Offset to apply on the `data` to skip the beginning */
    offset?: number
    /** /what unit to store the texture in */
    unit?: number
    /**
     * Should we flip the texture vertically when storing it?
     *
     * By default the UV coordinates are (0,0) at the bottom/left
     * and (1,1) at the top/right.
     */
    flipY?: boolean
    /** Format into which WebGL will convert the texture */
    internalFormat?: WebglTextureInternalFormat
    /** Format of the source  */
    format?: WebglTextureFormat
    type?: WebglTextureType
}

export function webglTextureCreate(gl: WebGL2RenderingContext): WebGLTexture {
    const tex = gl.createTexture()
    if (!tex) throw new Error("Unable to create a WebGL Texture!")

    return tex
}

/**
 * This is applied to the last binded texture.
 */
export function webglTextureParametersSet(
    gl: WebGL2RenderingContext,
    { wrapS, wrapT, wrapR, minFilter, magFilter }: WebglTextureParameters
) {
    if (wrapS) gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[wrapS])
    if (wrapT) gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[wrapT])
    if (wrapR) gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_R, gl[wrapR])
    if (minFilter)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl[minFilter])
    if (magFilter)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl[magFilter])
}

export function webglTextureCreate2DFromArray(
    gl: WebGL2RenderingContext,
    data:
        | Int8Array
        | Uint8Array
        | Uint8ClampedArray
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Float32Array,
    options: WebglTexture2DCreateFromArrayOptions
) {
    const texture = webglTextureCreate(gl)
    gl.activeTexture(gl.TEXTURE0 + (options.unit ?? 0))
    gl.bindTexture(gl.TEXTURE_2D, texture)
    webglTextureParametersSet(gl, options)
    const {
        level = 0,
        internalFormat = "RGBA8",
        width,
        height,
        format = "RGBA",
        type = "UNSIGNED_BYTE",
        offset = 0,
    } = options
    if (options.flipY) gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, options.flipY)
    gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        gl[internalFormat],
        width,
        height,
        0,
        gl[format],
        gl[type],
        data,
        offset
    )
    return texture
}

// @TODO: webglTextureCreateFromImage and webglTextureCreateFomBuffer
