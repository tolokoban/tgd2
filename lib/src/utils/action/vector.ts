import { TgdVec2, TgdVec3, TgdVec4 } from "../../math"
import { ArrayNumber2, ArrayNumber3, ArrayNumber4 } from "../../types"
import { mix } from "../math"

/**
 * Create an action that will interpolate from one vector to another.
 */
export function tgdActionCreateVec2Interpolation({
    from,
    to,
    action,
}: {
    from: ArrayNumber2 | TgdVec2
    to: ArrayNumber2 | TgdVec2
    action: (vec: Readonly<ArrayNumber2>) => void
}) {
    const [fromX, fromY] = from
    const [toX, toY] = to
    const vec: ArrayNumber2 = [0, 0]
    return (alpha: number) => {
        vec[0] = mix(fromX, toX, alpha)
        vec[1] = mix(fromY, toY, alpha)
        action(vec)
    }
}

/**
 * Create an action that will interpolate from one vector to another.
 */
export function tgdActionCreateVec3Interpolation({
    from,
    to,
    action,
}: {
    from: ArrayNumber3 | TgdVec3
    to: ArrayNumber3 | TgdVec3
    action: (vec: Readonly<ArrayNumber3>) => void
}) {
    const [fromX, fromY, fromZ] = from
    const [toX, toY, toZ] = to
    const vec: ArrayNumber3 = [0, 0, 0]
    return (alpha: number) => {
        vec[0] = mix(fromX, toX, alpha)
        vec[1] = mix(fromY, toY, alpha)
        vec[2] = mix(fromZ, toZ, alpha)
        action(vec)
    }
}

/**
 * Create an action that will interpolate from one vector to another.
 */
export function tgdActionCreateVec4Interpolation({
    from,
    to,
    action,
}: {
    from: ArrayNumber4 | TgdVec4
    to: ArrayNumber4 | TgdVec4
    action: (vec: Readonly<ArrayNumber4>) => void
}) {
    const [fromX, fromY, fromZ, fromW] = from
    const [toX, toY, toZ, toW] = to
    const vec: ArrayNumber4 = [0, 0, 0, 0]
    return (alpha: number) => {
        vec[0] = mix(fromX, toX, alpha)
        vec[1] = mix(fromY, toY, alpha)
        vec[2] = mix(fromZ, toZ, alpha)
        vec[3] = mix(fromW, toW, alpha)
        action(vec)
    }
}
