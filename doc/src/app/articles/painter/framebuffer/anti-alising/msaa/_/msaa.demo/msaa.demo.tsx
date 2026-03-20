import {
    TgdContext,
    TgdFilterAntiAliasing,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
    TgdGeometryBox,
    TgdMaterialDiffuse,
    tgdCanvasCreateFill,
    TgdPainterOverlay,
    TgdPainterFramebufferWithAntiAliasing,
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
        antiAliasing: true,
        viewportMatchingScale: 1 / 8,
        textureColor0: new TgdTexture2D(context, {
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
            },
        }),
        children: [clear, meshPainter],
    })
    const filters = new TgdPainterFilter(context, {
        texture: framebuffer.textureColor0,
        filters: [],
        flipY: true,
    })
    const red = new TgdTexture2D(context).loadBitmap(tgdCanvasCreateFill(1, 1, "#f00"))
    const green = new TgdTexture2D(context).loadBitmap(tgdCanvasCreateFill(1, 1, "#0f0"))
    const overlay = new TgdPainterOverlay(context, {
        alignX: +1,
        alignY: +1,
        width: 32,
        height: 32,
        margin: 8,
        texture: green,
    })
    context.add(framebuffer, filters, overlay)
    context.paint()
    overlay.eventTap.addListener(() => {
        if (framebuffer.antiAliasing) {
            framebuffer.antiAliasing = false
            overlay.texture = red
        } else {
            framebuffer.antiAliasing = true
            overlay.texture = green
        }
        context.paint()
    })
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
