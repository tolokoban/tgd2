export function tgdCalcClamp(value: number, min: number, max: number): number {
    if (value < min) return min
    if (value > max) return max
    return value
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
