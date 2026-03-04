import { type TgdContext, tgdLoadImage, TgdPainterBackground, TgdTexture2D } from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "./helmet.webp"

function init(ctx: TgdContext, mode: "cover" | "contain") {
    // #begin
    const texture = new TgdTexture2D(ctx)
    tgdLoadImage(BackgroundURL).then((bmp) => {
        if (bmp) {
            texture.loadBitmap(bmp)
            ctx.paint()
        }
    })
    const background = new TgdPainterBackground(ctx, { texture, mode })
    ctx.add(background)
    ctx.paint()
    // #end
}

export default function Demo() {
    return (
        <div>
            <View onReady={(ctx: TgdContext) => init(ctx, "cover")} />
            <View onReady={(ctx: TgdContext) => init(ctx, "contain")} />
        </div>
    )
}
