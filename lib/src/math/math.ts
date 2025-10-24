export function tgdCalcClamp(value: number, min: number, max: number): number {
    if (value < min) return min
    if (value > max) return max
    return value
}

export function tgdCalcMapRange(
    value: number,
    fromMin: number,
    fromMax: number,
    toMin: number,
    toMax: number,
    clamp = false
): number {
    const v = clamp ? tgdCalcClamp(value, fromMin, fromMax) : value
    if (fromMin === fromMax) return v

    const alpha = (v - fromMin) / (fromMax - fromMin)
    return toMin + alpha * (toMax - toMin)
}

export function tgdCalcMix(
    valueAtT0: number,
    valueAtT1: number,
    t: number
): number {
    return (1 - t) * valueAtT0 + t * valueAtT1
}

const DEG_PER_RAD = 180 / Math.PI
const RAD_PER_DEG = Math.PI / 180

export function tgdCalcDegToRad(deg: number) {
    return deg * RAD_PER_DEG
}

export function tgdCalcRadToDeg(rad: number) {
    return rad * DEG_PER_RAD
}

export function tgdCalcSmoothStep(
    boundFor0: number,
    boundFor1: number,
    value: number
): number {
    const t = tgdCalcClamp((value - boundFor0) / (boundFor1 - boundFor0), 0, 1)
    return t * t * (3 - 2 * t)
}

/**
 * Force `value` to be between `min` and `max` by shifting it
 * by `max - min` as many times as needed.
 * @example
 * ```ts
 * tgdCalcModulo(3, 10, 20) === 13
 * tgdCalcModulo(13, 10, 20) === 13
 * tgdCalcModulo(23, 10, 20) === 13
 * ```
 */
export function tgdCalcModulo(value: number, min: number, max: number) {
    const range = max - min
    if (range === 0) return min

    if (value < min) {
        const n = Math.ceil((min - value) / range)
        return value + n * range
    }

    if (value > max) {
        const n = Math.ceil((value - max) / range)
        return value - n * range
    }

    return value
}
