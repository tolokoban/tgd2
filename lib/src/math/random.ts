import { ArrayNumber2, ArrayNumber3, ArrayNumber4 } from "@tgd/types"

/**
 * @return Random float between 0 and 1
 */
export function tgdRandom(): number
/**
 * @return Random float between 0 and `max`
 */
export function tgdRandom(max: number): number
/**
 * @return Random float between `min` and `max`
 */
export function tgdRandom(min: number, max: number): number
export function tgdRandom(a?: number, b?: number): number {
    if (typeof a !== "number") return Math.random()

    const min = typeof b === "number" ? a : 0
    const max = typeof b === "number" ? b : a
    return min + Math.random() * (max - min)
}

/**
 * @return Random vector of 3 floats between 0 and 1
 */
export function tgdRandom2(): ArrayNumber2
/**
 * @return Random vector of 3 floats between 0 and `max`
 */
export function tgdRandom2(max: number): ArrayNumber2
/**
 * @return Random vector of 3 floats between `min` and `max`
 */
export function tgdRandom2(min: number, max: number): ArrayNumber2
export function tgdRandom2(a?: number, b?: number): ArrayNumber2 {
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
export function tgdRandom3(): ArrayNumber3
/**
 * @return Random vector of 2 floats between 0 and `max`
 */
export function tgdRandom3(max: number): ArrayNumber3
/**
 * @return Random vector of 2 floats between `min` and `max`
 */
export function tgdRandom3(min: number, max: number): ArrayNumber3
export function tgdRandom3(a?: number, b?: number): ArrayNumber3 {
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
export function tgdRandom4(): ArrayNumber4
/**
 * @return Random vector of 4 floats between 0 and `max`
 */
export function tgdRandom4(max: number): ArrayNumber4
/**
 * @return Random vector of 4 floats between `min` and `max`
 */
export function tgdRandom4(min: number, max: number): ArrayNumber4
export function tgdRandom4(a?: number, b?: number): ArrayNumber4 {
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
