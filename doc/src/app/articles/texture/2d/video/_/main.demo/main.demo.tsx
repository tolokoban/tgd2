import {
    TgdContext,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
    TgdMaterialDiffuse,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import VideoURL from "@/assets/movie/hologram.mp4"

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera.fitSpaceAtTarget(1.5, 1.5)
    const clear = new TgdPainterClear(context, {
        depth: 1,
        color: [0.2, 0.1, 0, 1],
    })
    const color = new TgdTexture2D(context).loadVideo(VideoURL)
    const mesh = new TgdPainterMesh(context, {
        material: new TgdMaterialDiffuse({
            color,
            lockLightsToCamera: true,
        }),
    })
    const meshPainter = new TgdPainterState(context, {
        depth: "less",
        children: [clear, mesh],
    })
    context.add(meshPainter, (time) => {
        mesh.transfo.setEulerRotation(time * 4.4885, time * 6.1403, 0)
    })
    context.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} controller={{ inertiaOrbit: 1000 }} />
}
