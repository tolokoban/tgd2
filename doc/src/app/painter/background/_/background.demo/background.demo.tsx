import { TdgTexture2D, TgdContext, TgdPainterBackground } from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "./helmet.webp"

function init(ctx: TgdContext) {
    // #begin
    const texture = new TdgTexture2D(ctx, {
        image: BackgroundURL,
    })
    const background = new TgdPainterBackground(ctx, texture)
    ctx.add(background)
    ctx.paint()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
