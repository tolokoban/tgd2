import {
    TgdContext,
    TgdFilterBlur,
    tgdLoadImage,
    TgdPainterFilter,
    TgdPainterLogic,
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
    context.add(
        filter,
        new TgdPainterLogic(time => {
            const strength = (1 - Math.abs(Math.sin(time))) * 5
            horizontalBlurFilter.strength = strength
            verticalBlurFilter.strength = strength
        })
    )
    context.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} width="512px" height="512px" />
}
