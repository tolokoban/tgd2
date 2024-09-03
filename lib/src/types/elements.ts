export type TgdTypeArrayForElements = Uint8Array | Uint16Array | Uint32Array

export function assertTgdTypeArrayForElements(
    data: unknown
): asserts data is TgdTypeArrayForElements {
    if (data instanceof Uint8Array) return
    if (data instanceof Uint16Array) return
    if (data instanceof Uint32Array) return

    throw Error(
        "Only Uint8Array, Uint16Array or Uint32Array are allowed for elements!"
    )
}
