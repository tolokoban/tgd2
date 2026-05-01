import { tgdCalcDegToRad, TgdCameraPerspective } from "@tolokoban/tgd"

export function makeCameraPerspective(distance = 4) {
    const camera = new TgdCameraPerspective({
        far: 1e2,
        near: 1e-2,
        fovy: tgdCalcDegToRad(60),
        zoom: 1,
        transfo: {
            distance,
        },
    })
    camera.transfo.setEulerRotation(33, 22, 11)
    return camera
}
