import { TgdTypeArrayForElements } from "@tgd/types"

/**
 * drawElements() can be used with 8, 16 or 32 unsinged ints arrays.
 * But the function does not know what type was passed as argument.
 * You need to specify the type: UNSIGNED_BYTE, UNSIGNED_SHORT or
 * UNSIGNED_INT.
 *
 * This helper function gives you the type of the array passed as argument.
 */
export function webglElementTypeFromTypedArray(
    typedArray: TgdTypeArrayForElements
): 5121 | 5123 | 5125 {
    if (typedArray instanceof Uint8Array)
        return WebGL2RenderingContext.UNSIGNED_BYTE
    if (typedArray instanceof Uint16Array)
        return WebGL2RenderingContext.UNSIGNED_SHORT
    if (typedArray instanceof Uint32Array)
        return WebGL2RenderingContext.UNSIGNED_INT

    throw Error(
        "[webglElementTypeFromDataView] drawElements() and drawElementsInstanced() can only be fed with Uint8Array, Uint16Array or Uint32Array!"
    )
}

export function webglTypedArrayFromBufferSource(
    bufferSource: BufferSource,
    type: number
) {
    const buffer =
        bufferSource instanceof ArrayBuffer ? bufferSource : bufferSource.buffer
    switch (type) {
        case 5120: // BYTE
            return new Int8Array(buffer)
        case 5121: // UNSIGNED_BYTE
            return new Uint8Array(buffer)
        case 5122: // SHORT
            return new Int16Array(buffer)
        case 5123: // UNSIGNED_SHORT
            return new Uint16Array(buffer)
        case 5125: // UNSIGNED_INT
            return new Uint32Array(buffer)
        case 5126: // FLOAT
            return new Float32Array(buffer)
        default:
            throw Error(
                `Don't know how to create a TypedArray for type "${webglLookup(
                    type
                )}"!`
            )
    }
}

export function webglLookup(type: number) {
    if (gl) {
        for (const key in gl) {
            const val = gl[key as keyof WebGL2RenderingContext]
            if (val === type) return key
        }
    }
    return `${type}`
}

const canvas = document.createElement("canvas")
const gl = canvas.getContext("webgl2")
