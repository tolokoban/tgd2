import { TgdTransfo, TgdTransfoOptions } from "@tgd/math"
import { tgdCalcMix } from "../../math/math"

export function tgdActionCreateTransfoInterpolation(
    transfo: TgdTransfo,
    transfoAtT0: Readonly<Partial<TgdTransfoOptions>> | Readonly<TgdTransfo>,
    transfoAtT1: Readonly<Partial<TgdTransfoOptions>> | Readonly<TgdTransfo>
) {
    const beginTransfo = transfo.clone().from(transfoAtT0)
    const distanceAt0 = beginTransfo.distance
    const positionAt0 = beginTransfo.position.clone()
    const scaleAt0 = beginTransfo.scale.clone()
    const orientationAt0 = beginTransfo.orientation.clone()

    const endTransfo = transfo.clone().from(transfoAtT1)
    const orientationAt1 = endTransfo.orientation.clone()
    const positionAt1 = endTransfo.position.clone()
    const scaleAt1 = endTransfo.scale.clone()
    const distanceAt1 = endTransfo.distance

    return (t: number) => {
        transfo.distance = tgdCalcMix(distanceAt0, distanceAt1, t)
        transfo.position.fromMix(positionAt0, positionAt1, t)
        transfo.scale.fromMix(scaleAt0, scaleAt1, t)
        transfo.orientation.fromSlerp(orientationAt0, orientationAt1, t)
        transfo.updateMatrix()
    }
}
