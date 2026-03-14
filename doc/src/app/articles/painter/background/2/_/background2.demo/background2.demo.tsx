import {
    type TgdContext,
    TgdFilterHueRotation,
    tgdLoadImage,
    TgdPainterBackground,
    TgdPainterLogic,
    TgdTexture2D,
} from "@tolokoban/tgd"
import View, { type Assets } from "@/components/demo/Tgd"

import BackgroundURL from "./locomotive.webp"

function init(ctx: TgdContext, assets: Assets) {
    // #begin
    const texture = new TgdTexture2D(ctx)
    texture.loadBitmap(assets.image.background)
    const filter = new TgdFilterHueRotation({ hueShiftInDegrees: 180 })
    // texture.applyFilter(filter)
    const background = new TgdPainterBackground(ctx, { texture })
    const logic = new TgdPainterLogic((time, delta) => {
        background.x = Math.cos(time * 0.251)
        background.y = Math.cos(time * 0.745)
        background.zoom = Math.sin(time * 0.1) * 3
    })
    ctx.add(background, logic)
    ctx.play()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                image: {
                    background: BackgroundURL,
                },
            }}
        />
    )
}
