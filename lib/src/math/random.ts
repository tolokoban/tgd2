import { ArrayNumber2, ArrayNumber3, ArrayNumber4 } from "@tgd/types"

/**
 * @return Random float between 0 and 1
 */
export function tgdCalcRandom(): number
/**
 * @return Random float between 0 and `max`
 */
export function tgdCalcRandom(max: number): number
/**
 * @return Random float between `min` and `max`
 */
export function tgdCalcRandom(min: number, max: number): number
export function tgdCalcRandom(a?: number, b?: number): number {
    if (typeof a !== "number") return Math.random()

    const min = typeof b === "number" ? a : 0
    const max = typeof b === "number" ? b : a
    return min + Math.random() * (max - min)
}

/**
 * @return Random vector of 3 floats between 0 and 1
 */
export function tgdCalcRandom2(): ArrayNumber2
/**
 * @return Random vector of 3 floats between 0 and `max`
 */
export function tgdCalcRandom2(max: number): ArrayNumber2
/**
 * @return Random vector of 3 floats between `min` and `max`
 */
export function tgdCalcRandom2(min: number, max: number): ArrayNumber2
export function tgdCalcRandom2(a?: number, b?: number): ArrayNumber2 {
    if (typeof a !== "number") return [Math.random(), Math.random()]

    const min = typeof b === "number" ? a : 0
    const max = typeof b === "number" ? b : a
    return [
        min + Math.random() * (max - min),
        min + Math.random() * (max - min),
    ]
}

/**
 * @return Random vector of 2 floats between 0 and 1
 */
export function tgdCalcRandom3(): ArrayNumber3
/**
 * @return Random vector of 2 floats between 0 and `max`
 */
export function tgdCalcRandom3(max: number): ArrayNumber3
/**
 * @return Random vector of 2 floats between `min` and `max`
 */
export function tgdCalcRandom3(min: number, max: number): ArrayNumber3
export function tgdCalcRandom3(a?: number, b?: number): ArrayNumber3 {
    if (typeof a !== "number")
        return [Math.random(), Math.random(), Math.random()]

    const min = typeof b === "number" ? a : 0
    const max = typeof b === "number" ? b : a
    return [
        min + Math.random() * (max - min),
        min + Math.random() * (max - min),
        min + Math.random() * (max - min),
    ]
}

/**
 * @return Random vector of 4 floats between 0 and 1
 */
export function tgdCalcRandom4(): ArrayNumber4
/**
 * @return Random vector of 4 floats between 0 and `max`
 */
export function tgdCalcRandom4(max: number): ArrayNumber4
/**
 * @return Random vector of 4 floats between `min` and `max`
 */
export function tgdCalcRandom4(min: number, max: number): ArrayNumber4
export function tgdCalcRandom4(a?: number, b?: number): ArrayNumber4 {
    if (typeof a !== "number")
        return [Math.random(), Math.random(), Math.random(), Math.random()]

    const min = typeof b === "number" ? a : 0
    const max = typeof b === "number" ? b : a
    return [
        min + Math.random() * (max - min),
        min + Math.random() * (max - min),
        min + Math.random() * (max - min),
        min + Math.random() * (max - min),
    ]
}
