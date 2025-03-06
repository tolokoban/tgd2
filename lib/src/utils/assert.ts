export function assertElementsTypedArray(
    data: unknown
): asserts data is Uint8Array | Uint16Array | Uint32Array {
    if (data instanceof Uint8Array) return
    if (data instanceof Uint16Array) return
    if (data instanceof Uint32Array) return

    throw new Error(
        "Elements can only be Uint8Array, Uint16Array or Uint32Array!"
    )
}
