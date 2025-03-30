import { TgdTransfo, TgdTransfoOptions } from "@tgd/math"
import { tgdCalcMix } from "../math"

export function tgdActionCreateTransfoInterpolation(
    transfo: TgdTransfo,
    target: Readonly<Partial<TgdTransfoOptions>> | Readonly<TgdTransfo>
) {
    const distance = transfo.distance
    const position = transfo.position.clone()
    const scale = transfo.scale.clone()
    const orientation = transfo.orientation.clone()
    const endTransfo =
        target instanceof TgdTransfo
            ? target
            : new TgdTransfo({
                  distance,
                  position,
                  scale,
                  orientation,
                  ...target,
              })
    const endOrientation = endTransfo.orientation.clone()
    const endPosition = endTransfo.position.clone()
    const endScale = endTransfo.scale.clone()
    const endDistance = endTransfo.distance
    console.log("🚀 [transfo] target =", target) // @FIXME: Remove this line written on 2025-03-30 at 15:24

    return (t: number) => {
        transfo.distance = tgdCalcMix(distance, endDistance, t)
        transfo.position.fromMix(position, endPosition, t)
        transfo.scale.fromMix(scale, endScale, t)
        transfo.orientation.fromSlerp(orientation, endOrientation, t)
        transfo.position.debug()
    }
}
