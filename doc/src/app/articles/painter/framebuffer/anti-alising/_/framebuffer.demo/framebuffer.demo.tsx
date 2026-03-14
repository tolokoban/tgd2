import {
    TgdContext,
    TgdPainterBackground,
    TgdFilterAntiAliasing,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
    TgdGeometryBox,
    TgdMaterialDiffuse,
    tgdCalcModuloDiscrete,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import GridURL from "@/assets/image/uv-grid-3x2.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera.fitSpaceAtTarget(1.5, 1.5)
    const clear = new TgdPainterClear(context, {
        depth: 1,
        color: [0, 0, 0, 1],
    })
    const color = new TgdTexture2D(context).loadBitmap(assets.image.grid)
    const mesh = new TgdPainterMesh(context, {
        geometry: new TgdGeometryBox({ uvs: "3x2" }),
        material: new TgdMaterialDiffuse({
            color,
            lockLightsToCamera: true,
        }),
    })
    mesh.transfo.setEulerRotation(36, 60, 0)
    const meshPainter = new TgdPainterState(context, {
        depth: "less",
        children: [clear, mesh],
    })
    const framebuffer = new TgdPainterFramebuffer(context, {
        viewportMatchingScale: 1 / 8,
        textureColor0: new TgdTexture2D(context, {
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
            },
            storage: {
                width: 8,
                height: 8,
            },
        }),
        children: [clear, meshPainter],
    })
    const filterAA = new TgdFilterAntiAliasing()
    const filters = new TgdPainterFilter(context, {
        texture: framebuffer.textureColor0,
        filters: [filterAA],
        flipY: true,
    })
    const background = new TgdPainterBackground(context, {
        texture: framebuffer.textureColor0,
        scaleY: -1,
    })
    context.add(
        framebuffer,
        // filters,
        background,
        (time) => {
            filterAA.strength = tgdCalcModuloDiscrete(time, 4, 2)
        },
    )
    context.play()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            controller={{ inertiaOrbit: 1000 }}
            assets={{
                image: { grid: GridURL },
            }}
        />
    )
}
