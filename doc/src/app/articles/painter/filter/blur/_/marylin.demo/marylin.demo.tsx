import { type TgdContext, TgdFilterBlur, TgdPainterFilter, TgdTexture2D } from "@tolokoban/tgd"
import View, { type Assets } from "@/components/demo/Tgd"
import BackgroundURL from "../../../marylin.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const texture = new TgdTexture2D(context).loadBitmap(assets.image.image)
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
    return ({ strength }: { strength: number }) => {
        horizontalBlurFilter.strength = strength
        verticalBlurFilter.strength = strength
        context.paint()
    }
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            width="512px"
            height="512px"
            settings={{
                strength: {
                    label: "strength",
                    min: 0,
                    max: 2,
                    value: 1,
                    step: 0.1,
                },
            }}
            assets={{
                image: {
                    image: BackgroundURL,
                },
            }}
        />
    )
}
