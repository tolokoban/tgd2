import {
    tgdCanvasCreatePalette,
    TgdContext,
    TgdGeometryBox,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterOverlay,
    TgdPainterState,
    TgdTexture2D,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext) {
    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })
    const overlay = new TgdPainterOverlay(context, {
        margin: 16,
        width: 160,
        height: 120,
        alignX: +1,
        alignY: +1,
        texture: new TgdTexture2D(context, {
            load: tgdCanvasCreatePalette(["#f44b", "#4f4b", "#44fb", "#0000"], 2, 2),
            params: {
                minFilter: "NEAREST",
                magFilter: "NEAREST",
            },
            storage: { flipY: false },
        }),
    })
    const cube = new TgdPainterMesh(context)
    cube.transfo.orbitAroundX(Math.random())
    cube.transfo.orbitAroundY(Math.random())
    cube.transfo.orbitAroundZ(Math.random())
    context.add(
        clear,
        new TgdPainterState(context, {
            depth: "less",
            cull: "back",
            children: [cube],
        }),
        new TgdPainterState(context, {
            blend: "alpha",
            children: [overlay],
        }),
    )
    context.camera.fitSpaceAtTarget(1.2, 1.2)
    context.paint()
    overlay.eventPointerTap.addListener(({ x, y }) => {
        console.log("Tap:", x, y)
    })
    return ({ alignX, alignY, margin }: { alignX: number; alignY: number; margin: number }) => {
        overlay.alignX = alignX
        overlay.alignY = alignY
        overlay.margin = margin
        context.paint()
    }
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            controller={{
                inertiaOrbit: 1000,
            }}
            options={{
                preserveDrawingBuffer: true,
            }}
            settings={{
                alignX: {
                    label: "alignX",
                    value: 1,
                    min: -1,
                    max: +1,
                },
                alignY: {
                    label: "alignX",
                    value: 1,
                    min: -1,
                    max: +1,
                },
                margin: {
                    label: "margin",
                    value: 16,
                    min: 0,
                    max: 32,
                },
            }}
        />
    )
}
