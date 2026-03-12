import {
    tgdCanvasCreateFill,
    TgdContext,
    tgdLoadImage,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterOverlay,
    TgdPainterState,
    TgdTexture2D,
} from "@tolokoban/tgd"

import View, { Assets } from "@/components/demo/Tgd"

import ImageURL from "@/assets/image/dino.webp"

// #begin
function init(context: TgdContext, assets: Assets) {
    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })
    const canvas = tgdCanvasCreateFill(320, 180, "#f90")
    const texture = new TgdTexture2D(context, {
        load: canvas,
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST",
        },
        storage: { flipY: false },
    })
    const overlay = new TgdPainterOverlay(context, {
        margin: [8, 64],
        // width: canvas.width,
        height: canvas.height,
        alignX: -1,
        alignY: +1,
        texture,
    })
    overlay.eventResize.addListener(({ width, height }) => {
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const img = assets.image.image
        const scaleX = width / img.width
        const scaleY = height / img.height
        const scale = Math.max(scaleX, scaleY)
        const w = scale * img.width
        const h = scale * img.height
        const x = (width - w) / 2
        const y = (height - h) / 2
        ctx.drawImage(img, x, y, w, h)
        texture.loadBitmap(canvas)
        context.paint()
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
    overlay.eventPointerTap.addListener((evt) => {
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const x = ((1 + evt.x) * ctx.canvas.width) / 2
        const y = ((1 - evt.y) * ctx.canvas.height) / 2
        ctx.fillStyle = "#ff0"
        ctx.beginPath()
        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2)
        ctx.fill()
        texture.loadBitmap(canvas)
        context.paint()
    })
    return ({
        alignX,
        alignY,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
    }: {
        alignX: number
        alignY: number
        marginTop: number
        marginRight: number
        marginBottom: number
        marginLeft: number
    }) => {
        overlay.alignX = alignX
        overlay.alignY = alignY
        overlay.marginTop = marginTop
        overlay.marginRight = marginRight
        overlay.marginBottom = marginBottom
        overlay.marginLeft = marginLeft
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
                alpha: false,
            }}
            assets={{
                image: {
                    image: ImageURL,
                },
            }}
            settings={{
                alignX: {
                    label: "alignX",
                    value: -1,
                    min: -1,
                    max: +1,
                },
                alignY: {
                    label: "alignY",
                    value: 1,
                    min: -1,
                    max: +1,
                },
                marginTop: {
                    label: "marginTop",
                    value: 8,
                    min: 0,
                    max: 64,
                },
                marginRight: {
                    label: "marginRight",
                    value: 64,
                    min: 0,
                    max: 64,
                },
                marginBottom: {
                    label: "marginBottom",
                    value: 8,
                    min: 0,
                    max: 64,
                },
                marginLeft: {
                    label: "marginLeft",
                    value: 64,
                    min: 0,
                    max: 64,
                },
            }}
        />
    )
}
