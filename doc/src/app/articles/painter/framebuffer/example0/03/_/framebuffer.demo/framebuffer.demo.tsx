import {
    TgdContext,
    TgdFilterChromaticAberration,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import TextureURL from "@/assets/image/whale-1024.webp"

function init(context: TgdContext, assets: Assets) {
    context.camera.transfo.distance = 5
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)
    const mesh = new TgdPainterMesh(context, {
        material: new TgdMaterialDiffuse({
            color: texture,
        }),
    })
    const meshPainter = new TgdPainterState(context, {
        depth: "less",
        children: [clear, mesh],
    })
    // #begin
    const filter = new TgdFilterChromaticAberration({
        strength: 10,
    })
    const filters = new TgdPainterFilter(context, {
        filters: [filter],
        texture,
    })
    context.add(
        meshPainter,
        filters,
        new TgdPainterLogic((time) => {
            filter.strength = Math.sin(time) * 10
        }),
    )
    // #end
    context.play()
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                image: {
                    texture: TextureURL,
                },
            }}
        />
    )
}
