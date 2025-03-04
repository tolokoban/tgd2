import {
    TgdCameraPerspective,
    TgdContext,
    TgdGeometryBox,
    TgdMaterialNormals,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import SuzanneURL from "@/assets/mesh/logo.glb"
import BackgroundURL from "@/assets/image/dino.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera = new TgdCameraPerspective({
        distance: 3,
        far: 100,
        near: 0.01,
        fovy: Math.PI / 4,
        zoom: 1,
    })
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
    })
    const mesh = new TgdPainterMesh(context, {
        geometry: new TgdGeometryBox(),
        material: new TgdMaterialNormals(),
    })
    const meshPainter = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [clear, mesh],
    })
    context.add(meshPainter)
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
