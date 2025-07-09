import {
    TgdContext,
    TgdFilterBlur,
    TgdFilterChromaticAberration,
    tgdLoadImage,
    TgdPainterFilter,
    TgdPainterLogic,
    TgdTexture2D,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "./tgd.webp"

function init(context: TgdContext) {
    // #begin
    const texture = new TgdTexture2D(context).loadBitmap(
        tgdLoadImage(BackgroundURL)
    )
    const filter = new TgdFilterChromaticAberration({
        strength: 1,
    })

    const filters = new TgdPainterFilter(context, {
        texture,
        filters: [filter],
    })
    context.add(
        filters,
        new TgdPainterLogic(
            time => (filter.strength = 5 * Math.abs(Math.sin(time)))
        )
    )
    context.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} width="512px" height="512px" />
}
