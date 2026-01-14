import {
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialFlat,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    tgdCalcRandom3,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"
import SuzaneURL from "@/assets/mesh/suzanne.glb"

function init(ctx: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    const material = new TgdMaterialFlat({
        color: [...tgdCalcRandom3(), 1],
    })
    const mesh = new TgdPainterMeshGltf(ctx, {
        asset: assets.glb.suzane,
        material,
    })
    // #end
    ctx.add(
        new TgdPainterClear(ctx, {
            color: [0.3, 0.3, 0.3, 1],
            depth: 1,
        }),
        new TgdPainterState(ctx, {
            depth: webglPresetDepth.less,
            children: [mesh],
        })
    )
    ctx.paint()
    new TgdControllerCameraOrbit(ctx, {
        inertiaOrbit: 2000,
    })
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: {
                    suzane: SuzaneURL,
                },
            }}
            gizmo
        />
    )
}
