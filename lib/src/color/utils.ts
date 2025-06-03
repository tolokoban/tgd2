/* eslint-disable unicorn/prevent-abbreviations */
import { TgdColor } from "./color"

export function tgdColorMakeHueWheel({
    steps = 128,
    shift = 0,
    luminance = 0.5,
    saturation = 1,
}: Partial<{
    steps: number
    shift: number
    saturation: number
    luminance: number
}>): TgdColor[] {
    if (steps < 2) return [TgdColor.fromHSL(shift, saturation, luminance)]

    const colors: TgdColor[] = []
    const factor = 1 / steps - 1
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
