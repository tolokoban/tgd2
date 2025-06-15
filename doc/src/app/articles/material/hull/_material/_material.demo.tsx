import {
    tgdCalcClamp,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialDiffuse,
    TgdMaterialHull,
    TgdMaterialToon,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMeshGltf,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"
import SuzaneURL from "@/assets/mesh/suzanne.glb"

function init(ctx: TgdContext, assets: Assets) {
    const material2 = new TgdMaterialToon({
        color: [1, 0.667, 0, 1],
        specularSharpness: 1,
    })
    const mesh2 = new TgdPainterMeshGltf(ctx, {
        asset: assets.glb.suzane,
        material: material2,
    })
    // #begin Initializing WebGL
    const material = new TgdMaterialHull({
        color: [1, 1, 1, 1],
    })
    const mesh = new TgdPainterMeshGltf(ctx, {
        asset: assets.glb.suzane,
        material,
    })
    // #end
    ctx.add(
        new TgdPainterClear(ctx, {
            color: [0.2, 0.3, 0.4, 1],
            depth: 1,
        }),
        new TgdPainterState(ctx, {
            depth: webglPresetDepth.less,
            children: [mesh2, mesh],
        }),
        new TgdPainterLogic(time => {
            material.zShift = tgdCalcClamp(
                (1 + Math.sin(time * 0.5)) * 0.05,
                0,
                0.25
            )
        })
    )
    ctx.play()
    new TgdControllerCameraOrbit(ctx, {
        inertiaOrbit: 10000,
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
