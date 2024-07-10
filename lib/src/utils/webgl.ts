/**
 * drawElements() can be used with 8, 16 or 32 unsinged ints arrays.
 * But the function does not know what type was passed as argument.
 * You need to specify the type: UNSIGNED_BYTE, UNSIGNED_SHORT or
 * UNSIGNED_INT.
 *
 * This helper function gives you the type of the array passed as argument.
 */
export function webglElementTypeFromTypedArray(typedArray: {
    buffer: ArrayBuffer
}): 5121 | 5123 | 5125 {
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
