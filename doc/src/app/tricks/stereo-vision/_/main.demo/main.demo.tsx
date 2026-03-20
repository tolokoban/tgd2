import {
    TgdCameraPerspective,
    TgdContext,
    TgdPainterClear,
    TgdPainterGroup,
    TgdPainterGroupCamera,
    TgdPainterMeshGltf,
    TgdPainterState,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import SuzanneURL from "@/assets/mesh/suzanne.glb"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const camera = new TgdCameraPerspective()
    camera.spaceWidthAtTarget = 16
    context.camera = camera
    const clearColor = new TgdPainterClear(context, {
        depth: 1,
        color: [0.1, 0.2, 0.3, 1],
    })
    const clearDepth = new TgdPainterClear(context, {
        depth: 1,
    })
    const mesh = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzanne,
    })
    const state = new TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [mesh],
    })
    const group = new TgdPainterGroup([clearDepth, state])
    const angle = Math.atan(1 / camera.transfo.distance)
    const leftCamera = camera.clone()
    leftCamera.transfo.orbitAroundY(angle)
    const leftEye = new TgdPainterGroupCamera(context, {
        camera: leftCamera,
        children: [group],
    })
    const rightCamera = camera.clone()
    rightCamera.transfo.orbitAroundY(-angle)
    const rightEye = new TgdPainterGroupCamera(context, {
        camera: rightCamera,
        children: [group],
    })
    context.add(
        clearColor,
        (time: number, delta: number) => {
            mesh.transfo.setEulerRotation(0, time * 60, 0)
        },
        (time: number, delta: number) => {
            const { width } = context
            const center = width / 2
            const size = width / 4
            context.viewportExec(
                () => {
                    leftEye.paint(time, delta)
                },
                { x: center - size, width: 200 },
            )
            context.viewportExec(
                () => {
                    rightEye.paint(time, delta)
                },
                { x: center, width: 200 },
            )
        },
    )
    context.play()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: {
                    suzanne: SuzanneURL,
                },
            }}></View>
    )
}
