import {
    TgdContext,
    TgdFilterHueRotation,
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
    const hueFilter = new TgdFilterHueRotation()
    const filter = new TgdPainterFilter(context, {
        texture,
        filters: [hueFilter],
    })
    context.add(
        filter,
        new TgdPainterLogic(time => (hueFilter.hueShiftInDegrees = time * 0.1))
    )
    context.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} width="512px" height="512px" />
}
