import { TgdTransfo } from "@tgd/math"
import { tgdCalcMix } from "../math"

export function tgdActionCreateTransfoInterpolation(
    transfo: TgdTransfo,
    target: Readonly<TgdTransfo>
) {
    const beginOrientation = transfo.orientation.clone()
    const beginPosition = transfo.position.clone()
    const beginScale = transfo.scale.clone()
    const beginDistance = transfo.distance
    const endOrientation = target.orientation.clone()
    const endPosition = target.position.clone()
    const endScale = target.scale.clone()
    const endDistance = target.distance

    return (t: number) => {
        transfo.distance = tgdCalcMix(beginDistance, endDistance, t)
        transfo.position.fromMix(beginPosition, endPosition, t)
        transfo.scale.fromMix(beginScale, endScale, t)
        transfo.orientation.fromSlerp(beginOrientation, endOrientation, t)
    }
}
