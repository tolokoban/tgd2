import { TgdCamera, TgdCameraState } from "@tgd/camera"
import { TgdTransfo } from "@tgd/math"
import { tgdCalcMix } from "../math"
import { tgdActionCreateTransfoInterpolation } from "./transfo"

export function tgdActionCreateCameraInterpolation(
    camera: TgdCamera,
    destination: Partial<TgdCameraState>
) {
    const transfoDestination = new TgdTransfo(camera.transfo).from(destination)
    transfoDestination.debug()
    if (typeof destination.distance === "number")
        transfoDestination.distance = destination.distance
    const beginZoom = camera.zoom
    const endZoom = destination.zoom ?? beginZoom
    const action = tgdActionCreateTransfoInterpolation(
        camera.transfo,
        {},
        transfoDestination
    )
    const beginSpaceHeightAtTarget = camera.spaceHeightAtTarget
    const endSpaceHeightAtTarget =
        destination.spaceHeightAtTarget ?? camera.spaceHeightAtTarget

    return (t: number) => {
        action(t)
        if (typeof destination.spaceHeightAtTarget === "number") {
            camera.spaceHeightAtTarget = tgdCalcMix(
                beginSpaceHeightAtTarget,
                endSpaceHeightAtTarget,
                t
            )
        }
        camera.zoom = tgdCalcMix(beginZoom, endZoom, t)
    }
}
