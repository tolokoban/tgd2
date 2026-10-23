import {
    type TgdContext,
    TgdFilterChromaticAberration,
    TgdFilterScale,
    TgdPainterFilter,
    TgdTexture2D,
} from "@tolokoban/tgd"
import View, { type Assets } from "@/components/demo/Tgd"
import GridURL from "@/assets/image/uv-grid-3x2.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const texture = new TgdTexture2D(context).loadBitmap(assets.image.grid)
    const scaleFilter = new TgdFilterScale({ mode: "cover", scale: 1 })
    context.add(
        new TgdPainterFilter(context, {
            texture,
            filters: [scaleFilter, new TgdFilterChromaticAberration()],
        }),
    )
    context.paint()
    // #end
    return ({ mode, scaleX, scaleY }: { mode: number; scaleX: number; scaleY: number }) => {
        scaleFilter.mode = mode === 0 ? "cover" : "contain"
        scaleFilter.scale = [scaleX, scaleY]
        context.paint()
    }
}

export default function Demo() {
    return (
        <View
            onReady={init}
            width="480px"
            height="480px"
            assets={{ image: { grid: GridURL } }}
            settings={{
                mode: { label: "mode", value: 0, step: ["cover", "contain"] },
                scaleX: { label: "scale X", value: 1, min: 0.25, max: 2 },
                scaleY: { label: "scale Y", value: 1, min: 0.25, max: 2 },
            }}
        />
    )
}
