import { TgdVec3, TgdVec4 } from "@tgd/math"
import { ArrayNumber3, ArrayNumber4 } from "@tgd/types"

export type Vec3 = ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4

export function subtract(a: Vec3, b: Vec3): Vec3 {
    const [xa, ya, za] = a
    const [xb, yb, zb] = b
    return [xa - xb, ya - yb, za - zb]
}

export function dot(a: Vec3, b: Vec3): number {
    const [xa, ya, za] = a
    const [xb, yb, zb] = b
    return xa * xb + ya * yb + za * zb
}

export function dot2(a: Vec3): number {
    return dot(a, a)
}

export function scale(a: Vec3, f: number): Vec3 {
    const [x, y, z] = a
    return [x * f, y * f, z * f]
}

export function sign(v: number) {
    if (v === 0) return 0
    return v < 0 ? -1 : +1
}
