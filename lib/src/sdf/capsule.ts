import { dot, dot2, scale, sign, subtract, Vec3 } from "./_common"

export function tgdSdfCapsule(
    p: Vec3,
    a: Vec3,
    b: Vec3,
    r1: number,
    r2: number
) {
    // sampling independent computations (only depend on shape)
    const ba = subtract(b, a)
    const l2 = dot(ba, ba)
    const rr = r1 - r2
    const a2 = l2 - rr * rr
    const il2 = 1 / l2

    // sampling dependant computations
    const pa = subtract(p, a)
    const y = dot(pa, ba)
    const z = y - l2
    const x2 = dot2(subtract(scale(pa, l2), scale(ba, y)))
    const y2 = y * y * l2
    const z2 = z * z * l2

    // single square root!
    const k = sign(rr) * rr * rr * x2
    if (sign(z) * a2 * z2 > k) return Math.sqrt(x2 + z2) * il2 - r2
    if (sign(y) * a2 * y2 < k) return Math.sqrt(x2 + y2) * il2 - r1
    return (Math.sqrt(x2 * a2 * il2) + y * rr) * il2 - r1
}
