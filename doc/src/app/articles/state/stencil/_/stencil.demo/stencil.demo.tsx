import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialSolid,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterDebugStencil,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdTexture2D,
    webglPresetCull,
    webglPresetDepth,
    webglPresetStencil,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import BackgroundURL from "@/assets/image/dino.webp"
import RingURL from "@/assets/mesh/ring.glb"
import SuzanneURL from "@/assets/mesh/suzanne.glb"

function init(ctx: TgdContext, assets: Assets) {
    // #begin
    const camera = new TgdCameraPerspective({
        transfo: { distance: 3 },
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
            color: false,
            depth: webglPresetDepth.off,
            cull: webglPresetCull.back,
            stencil: webglPresetStencil.write(1),
            children: [
                new TgdPainterMeshGltf(ctx, {
                    asset: assets.glb.ring,
                    materialFactory: () => new TgdMaterialSolid(),
                }),
            ],
        }),
        new TgdPainterState(ctx, {
            depth: webglPresetDepth.less,
            cull: webglPresetCull.back,
            stencil: webglPresetStencil.paintIfEqual(0),
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
                stencil: true,
                antialias: true,
            }}
            assets={{
                glb: {
                    suzanne: SuzanneURL,
                    ring: RingURL,
                },
            }}
        />
    )
}
