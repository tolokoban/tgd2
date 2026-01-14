import {
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialFaceOrientation,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"
import SuzaneURL from "@/assets/mesh/suzanne-with-hole.glb"

function init(ctx: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    const material = new TgdMaterialFaceOrientation()
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
        inertiaOrbit: 5000,
    })
    ctx.camera.transfo.distance = 4
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
