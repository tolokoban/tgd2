import {
    TgdContext,
    TgdFilterBlur,
    TgdFilterChromaticAberration,
    TgdPainterFilter,
    TgdPainterLogic,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "./tgd.webp"

function init(context: TgdContext) {
    // #begin
    const texture = context.textures2D.create({
        image: BackgroundURL,
        width: 512,
        height: 512,
    })
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
            time => (filter.strength = 5 * Math.abs(Math.sin(time * 1e-3)))
        )
    )
    context.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} width="512px" height="512px" />
}
