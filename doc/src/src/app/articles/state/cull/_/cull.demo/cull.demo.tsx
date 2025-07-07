import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialHull,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdTexture2D,
    webglPresetCull,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import BackgroundURL from "@/assets/image/dino.webp"
import SuzanneURL from "@/assets/mesh/suzanne.glb"

function init(ctx: TgdContext, assets: Assets) {
    // #begin
    const camera = new TgdCameraPerspective({
        transfo: { distance: 5 },
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
        new TgdPainterBackground(ctx, {
            texture: new TgdTexture2D(ctx).loadBitmap(BackgroundURL),
        }),
        new TgdPainterState(ctx, {
            depth: webglPresetDepth.less,
            cull: webglPresetCull.front,
            children: [
                new TgdPainterMeshGltf(ctx, {
                    asset: assets.glb.suzanne,
                    material: () =>
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
                    suzanne: SuzanneURL,
                },
            }}
        />
    )
}
