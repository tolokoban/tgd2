import {
    TgdContext,
    TgdFilterBlur,
    tgdLoadImage,
    TgdPainterFilter,
    TgdTexture2D,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "../../../marylin.webp"

function init(context: TgdContext) {
    // #begin
    const texture = new TgdTexture2D(context).loadBitmap(
        tgdLoadImage(BackgroundURL)
    )
    const size = 16
    const horizontalBlurFilter = new TgdFilterBlur({
        size,
        direction: 0,
    })
    const verticalBlurFilter = new TgdFilterBlur({
        size,
        direction: 90,
    })
    const filter = new TgdPainterFilter(context, {
        texture,
        filters: [horizontalBlurFilter, verticalBlurFilter],
    })
    context.add(filter)
    context.paint()
    // #end
}

export default function Demo() {
    return <View onReady={init} width="512px" height="512px" />
}
