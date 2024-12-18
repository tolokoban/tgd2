import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialHull,
    TgdMaterialSolid,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    webglPresetCull,
    webglPresetDepth,
    webglPresetStencil,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import BackgroundURL from "@/gfx/image/dino.webp"

function init(ctx: TgdContext, assets: Assets) {
    // #begin
    const camera = new TgdCameraPerspective({
        distance: 3,
        far: 100,
        near: 0.01,
        fovy: Math.PI / 4,
        zoom: 1,
    })
    ctx.camera = camera
    new TgdControllerCameraOrbit(ctx, {
        speedPanning: 0,
        inertiaOrbit: 1000,
    })
    ctx.add(
        new TgdPainterClear(ctx, {
            depth: 1,
            stencil: 0,
        }),
        new TgdPainterBackground(
            ctx,
            ctx.textures2D.create({
                image: BackgroundURL,
            })
        ),
        new TgdPainterState(ctx, {
            depth: webglPresetDepth.less,
            cull: webglPresetCull.front,
            children: [
                new TgdPainterMeshGltf(ctx, {
                    asset: assets.glb.suzanne,
                    materialFactory: () =>
                        new TgdMaterialHull({
                            color: [0, 0, 0, 1],
                            expansion: 0.05,
                        }),
                }),
            ],
        }),
        new TgdPainterState(ctx, {
            depth: webglPresetDepth.less,
            cull: webglPresetCull.back,
            children: [
                new TgdPainterMeshGltf(ctx, {
                    asset: assets.glb.suzanne,
                }),
            ],
        })
    )
    ctx.paint()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            options={{
                depth: true,
                antialias: true,
            }}
            assets={{
                glb: {
                    suzanne: "/mesh/suzanne.glb",
                },
            }}
        />
    )
}
