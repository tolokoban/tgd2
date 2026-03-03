/* eslint-disable unicorn/prevent-abbreviations */
import { tgdCalcMapRange } from "@tgd/math"
import { TgdColor } from "./color"

export function tgdColorMakeHueWheel({
	steps = 128,
	fromDegree = 0,
	toDegree = 360,
	luminance = 0.5,
	saturation = 1,
}: Partial<{
	steps: number
	fromDegree: number
	toDegree: number
	saturation: number
	luminance: number
}>): TgdColor[] {
	if (steps < 2)
		return [
			TgdColor.fromHSL(
				tgdCalcMapRange(fromDegree, 0, 360, 0, 1, true),
				saturation,
				luminance,
			),
		]

	const colors: TgdColor[] = []
	const factor = Math.abs(toDegree - fromDegree) / (360 * steps - 1)
	const shift = fromDegree / 360
	for (let i = 0; i < steps; i++) {
		const hue = shift + i * factor
		const color = TgdColor.fromHSL(hue, saturation, luminance)
		colors.push(color)
	}
	return colors
}

/**
 * This function can be useful in `Array.map()` functions.
 */
export function tgdColorToString(color: TgdColor): string {
	return color.toString()
}
