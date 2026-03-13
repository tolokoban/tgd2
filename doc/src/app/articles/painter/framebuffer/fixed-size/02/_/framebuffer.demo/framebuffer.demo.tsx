import {
    tgdCanvasCreate,
    TgdContext,
    TgdLight,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterFramebuffer,
    TgdPainterGroup,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import ImageURL from "@/assets/image/uv-grid-2x2.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)
    const cubeInside = new CubePainter(context, texture, 1)
    const textureColor0 = new TgdTexture2D(context).loadBitmap(tgdCanvasCreate(512, 512))
    const framebuffer = new TgdPainterFramebuffer(context, {
        fixedSize: true,
        depthBuffer: true,
        textureColor0,
        children: [cubeInside],
    })
    const cubeOutside = new CubePainter(context, textureColor0, 0.2)
    context.camera.fitSpaceAtTarget(1.8, 1.8)
    context.add(framebuffer, cubeOutside)
    context.play()
    // #end
}

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
                lockLightsToCamera: true,
            }),
        })
        const state = new TgdPainterState(context, {
            depth: "less",
            cull: "off",
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
