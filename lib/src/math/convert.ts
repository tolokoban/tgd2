import { ArrayNumber3, ArrayNumber4 } from "@tgd/types"
import { tgdCalcClamp } from "./math"
import { TgdVec4 } from "./vec4"
import { TgdVec3 } from "./vec3"

export function tgdCalcIndexToRGB(index: number): ArrayNumber3 {
    index = tgdCalcClamp(Math.floor(index), 0, 0xffffff)
    const R = index & 0xff
    const G = (index >> 8) & 0xff
    const B = (index >> 16) & 0xff
    const a = 1 / 0xff
    return [R * a, G * a, B * a]
}

export function tgdCalcRGBToIndex(color: ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4): number {
    const [RR, GG, BB] = color
    const R = tgdCalcClamp(Math.floor(0xff * RR), 0, 0xff)
    const G = tgdCalcClamp(Math.floor(0xff * GG), 0, 0xff)
    const B = tgdCalcClamp(Math.floor(0xff * BB), 0, 0xff)
    return R + (G << 8) + (B << 16)
}