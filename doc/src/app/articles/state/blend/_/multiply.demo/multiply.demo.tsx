import {
    TgdCameraPerspective,
    TgdContext,
    TgdGeometryPlane,
    TgdMaterialFlat,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import BackgroundURL from "@/assets/image/dino.webp"
import SuzanneURL from "@/assets/mesh/suzanne.glb"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const camera = new TgdCameraPerspective()
    camera.spaceHeightAtTarget = 2
    context.camera = camera
    const planes = [
        [1, 0.5, 0.5],
        [0.5, 1, 0.5],
        [0.5, 0.5, 1],
        [0.5, 0.5, 0.5],
    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))
    const state = new TgdPainterState(context, {
        blend: "multiply",
        children: planes,
    })
    context.add(
        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),
        new TgdPainterBackground(context, {
            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),
        }),
        state,
    )
    context.paint()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            options={{
                depth: true,
                alpha: false,
                antialias: true,
            }}
            assets={{
                glb: {
                    suzanne: SuzanneURL,
                },
                image: {
                    background: BackgroundURL,
                },
            }}
        />
    )
}

function makePlane(context: TgdContext, R: number, G: number, B: number, index: number) {
    const angle = index * 0.5 * Math.PI
    const radius = 0.6
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)
    console.log("🐞 [blend.demo@68] x, y =", x, y) // @FIXME: Remove this line written on 2026-03-20 at 18:38
    return new TgdPainterMesh(context, {
        transfo: {
            position: [x, y, 0],
        },
        geometry: new TgdGeometryPlane(),
        material: new TgdMaterialFlat({
            color: [R, G, B, 0.6],
        }),
    })
}
