import {
    TgdContext,
    TgdLight,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterGroup,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import ImageURL from "@/assets/image/uv-grid-2x2.webp"

function init(context: TgdContext, assets: Assets) {
    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)
    const cube = new CubePainter(context, texture)
    context.camera.fitSpaceAtTarget(2, 2)
    context.add(cube)
    context.play()
}

// #begin
class CubePainter extends TgdPainterGroup {
    constructor(context: TgdContext, texture: TgdTexture2D, rotationSpeed = 1) {
        const clear = new TgdPainterClear(context, {
            color: [0.3, 0.2, 0.1, 1],
            depth: 1,
        })
        const cube = new TgdPainterMesh(context, {
            material: new TgdMaterialDiffuse({
                color: texture,
                light: new TgdLight({
                    direction: [-2, 1, -5],
                }),
            }),
        })
        const state = new TgdPainterState(context, {
            depth: "less",
            children: [
                cube,
                (time) => {
                    cube.transfo.setEulerRotation(time * rotationSpeed * 71.54, time * rotationSpeed * 47.51, 0)
                },
            ],
        })
        super([clear, state])
    }
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            gizmo={false}
            controller={{
                inertiaOrbit: 1000,
            }}
            assets={{
                image: { texture: ImageURL },
            }}
        />
    )
}
