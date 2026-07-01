import type { TgdTypeArrayForElements } from "@tgd/types"

/**
 * Transforms an array in the best suitable typed array that can hold the values in a minimum space.
 */
export function tgdTypeArrayForElements(
	arr: number[] | TgdTypeArrayForElements,
): TgdTypeArrayForElements {
	let max = 0
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i]
		if (value < 0) {
			throw new Error(
				`[tgdTypeArrayForElements] Index for elements cannot be negative. But arr[${i}] === ${value}!`,
			)
		}

		max = Math.max(max, value)
	}

	if (max < 256) return new Uint8Array(arr)
	if (max < 65536) return new Uint16Array(arr)
	return new Uint32Array(arr)
}
