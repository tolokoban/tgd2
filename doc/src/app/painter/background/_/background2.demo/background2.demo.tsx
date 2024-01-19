import {
    TdgTexture2D,
    TgdContext,
    TgdPainterBackground,
    TgdPainterLogic,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "./locomotive.webp"

function init(ctx: TgdContext) {
    // #begin
    const texture = new TdgTexture2D(ctx, {
        image: BackgroundURL,
    })
    const background = new TgdPainterBackground(ctx, texture)
    const logic = new TgdPainterLogic(time => {
        background.x = Math.cos(time * 0.000251)
        background.y = Math.cos(time * 0.000745)
        background.zoom = Math.sin(time * 0.0001) * 3
    })
    ctx.add(background, logic)
    ctx.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
