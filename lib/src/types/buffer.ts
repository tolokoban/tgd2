import {
    assertTgdTypeArrayForElements,
    TgdTypeArrayForElements,
} from "./elements"

export type TgdTypeArray = TgdTypeArrayForElements | Float32Array

export function assertTgdTypeArray(
    data: unknown
): asserts data is TgdTypeArrayForElements {
    if (data instanceof Float32Array) return
    assertTgdTypeArrayForElements(data)

    throw new Error(
        "Expected Float32Array, Uint8Array, Uint16Array or Uint32Array!"
    )
}

export type TgdTypeArrayOrBuffer = TgdTypeArray | ArrayBuffer
