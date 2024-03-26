import {
    TgdContext,
    TgdFilterBlur,
    TgdPainterFilter,
    TgdVec2,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "../../../marylin.webp"

function init(context: TgdContext) {
    // #begin
    const texture = context.textures2D.create({
        image: BackgroundURL,
        width: 512,
        height: 512,
    })
    const size = 32
    const horizontalBlurFilter = new TgdFilterBlur({
        size,
        direction: new TgdVec2(1, 0),
    })
    const verticalBlurFilter = new TgdFilterBlur({
        size,
        direction: new TgdVec2(0, 1),
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
