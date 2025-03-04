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
    context.camera = new TgdCameraPerspective({
        distance: 3,
        far: 100,
        near: 0.01,
        fovy: Math.PI / 4,
        zoom: 1,
    })
    const clear = new TgdPainterClear(context, {
        color: [0.2, 0.2, 0.2, 1],
        depth: 1,
    })
    const mesh = new TgdPainterMesh(context, {
        geometry: new TgdGeometryBox(),
        material: new TgdMaterialNormals(),
    })
    let loop = 1
    const spin = new TgdPainterLogic((_time, delay) => {
        console.log("🚀 [framebuffer.demo] delay = ", delay) // @FIXME: Remove this line written on 2025-03-04 at 20:22
        mesh.transfo.orbitAroundZ(delay)
        // mesh.transfo.setPosition(Math.sin(time), Math.sin(time * 1.2763), 0)
        // if (loop > 3) context.pause()
    })
    const meshPainter = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [spin, mesh],
    })
    context.add(clear, meshPainter)
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
