import {
    tgdAnimChainTransfoInterpolations,
    TgdContext,
    TgdControllerCameraOrbit,
    tgdEasingFunctionInOutQuint,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdTransfo,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import MeshURL from "@/assets/mesh/suzanne.glb"

function init(ctx: TgdContext, assets: Assets) {
    // #begin
    new TgdControllerCameraOrbit(ctx, { debug: true })
    ctx.camera.transfo.distance = 10
    const mesh = new TgdPainterMeshGltf(ctx, {
        asset: assets.glb.mesh,
    })
    ctx.add(
        new TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),
        new TgdPainterState(ctx, {
            depth: webglPresetDepth.lessOrEqual,
            children: [mesh],
        })
    )
    ctx.paint()
    ctx.animSchedule(
        tgdAnimChainTransfoInterpolations(
            ctx.camera.transfo,
            [
                {
                    duration: 1,
                    transfo: {
                        distance: 2.9,
                        position: [
                            -0.39898496866226196, 0.22825193405151367, 0,
                        ],
                        orientation: [0, 0, 0, 1],
                        scale: [1, 1, 1],
                    },
                },
                {
                    duration: 1,
                    transfo: {
                        distance: 5.1,
                        position: [
                            -0.9985308647155762, 0.7087523341178894,
                            0.3115437924861908,
                        ],
                        orientation: [
                            0.09696336090564728, -0.6652175784111023,
                            -0.48327139019966125, 0.5608319044113159,
                        ],
                        scale: [1, 1, 1],
                    },
                },
                {
                    duration: 2,
                    transfo: new TgdTransfo(ctx.camera.transfo),
                    easingFunction: tgdEasingFunctionInOutQuint,
                },
            ],
            { repeat: Infinity }
        )
    )
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: { mesh: MeshURL },
            }}
        />
    )
}
