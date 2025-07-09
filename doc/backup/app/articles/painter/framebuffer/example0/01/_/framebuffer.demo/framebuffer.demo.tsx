import {
    TgdCameraPerspective,
    TgdContext,
    TgdGeometryBox,
    TgdMaterialNormals,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import SuzanneURL from "@/assets/mesh/logo.glb"
import BackgroundURL from "@/assets/image/dino.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera.transfo.distance = 5
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
    })
    const mesh = new TgdPainterMesh(context)
    const meshPainter = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [clear, mesh],
    })
    context.add(
        meshPainter,
        new TgdPainterLogic((time, delay) => {
            mesh.transfo.orbitAroundX(delay * Math.sin(time))
            mesh.transfo.orbitAroundZ(delay * 1.341)
        })
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
                    mesh: SuzanneURL,
                },
                image: {
                    background: BackgroundURL,
                },
            }}
        />
    )
}
