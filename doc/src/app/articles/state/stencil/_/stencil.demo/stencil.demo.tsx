import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    tgdLoadAssets,
    tgdLoadGlb,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    webglPresetDepth,
    webglPresetStencil,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "@/gfx/image/dino.webp"

function init(ctx: TgdContext) {
    // #begin
    const camera = new TgdCameraPerspective({
        distance: 3,
        far: 100,
        near: 0.01,
        fovy: Math.PI / 4,
        zoom: 1,
    })
    ctx.camera = camera
    const controller = new TgdControllerCameraOrbit(ctx, {
        speedPanning: 0,
        inertiaOrbit: 1000,
    })
    const clear = new TgdPainterClear(ctx, {
        depth: 1,
        stencil: 0,
    })
    const texture = ctx.textures2D.create({
        image: BackgroundURL,
    })
    const background = new TgdPainterBackground(ctx, texture)
    const statePaint = new TgdPainterState(ctx, {
        depth: webglPresetDepth.less,
        // stencil: webglPresetStencil.paintIf0,
    })
    ctx.add(clear, background, statePaint)
    ctx.paint()

    tgdLoadAssets({
        glb: {
            suzanne: "/mesh/suzanne.glb",
            ring: "/mesh/ring.glb",
        },
    })
        .then(({ glb }) => {
            const { ring, suzanne } = glb

            if (ring) {
                const ringPainter = new TgdPainterMeshGltf(ctx, {
                    asset: ring,
                })
                statePaint.add(ringPainter)
            }
            if (suzanne) {
                const suzannePainter = new TgdPainterMeshGltf(ctx, {
                    asset: suzanne,
                })
                statePaint.add(suzannePainter)
            }
            ctx.paint()
        })
        .catch(console.error)
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
        />
    )
}
