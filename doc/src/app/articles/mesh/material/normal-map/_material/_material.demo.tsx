import {
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialNormalMap,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"
import SuzaneURL from "@/assets/mesh/suzanne.glb"

function init(ctx: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    const material = new TgdMaterialNormalMap()
    const mesh = new TgdPainterMeshGltf(ctx, {
        asset: assets.glb.suzane,
        material,
    })
    // #end
    ctx.add(
        new TgdPainterClear(ctx, {
            color: [0.5, 0.5, 1, 1],
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
    ctx.camera.transfo.distance = 5
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
