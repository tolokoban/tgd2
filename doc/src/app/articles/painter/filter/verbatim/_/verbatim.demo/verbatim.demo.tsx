import { type TgdContext, TgdFilterVerbatim, TgdPainterFilter, TgdTexture2D } from "@tolokoban/tgd"
import View, { type Assets } from "@/components/demo/Tgd"
import MarylinURL from "../../../marylin.webp"

function init(context: TgdContext, assets: Assets) {
	// #begin
	const texture = new TgdTexture2D(context).loadBitmap(assets.image.marylin)
	const painter = new TgdPainterFilter(context, {
		texture,
		filters: [new TgdFilterVerbatim()],
	})
	context.add(painter)
	context.paint()
	// #end
	return ({ flipY }: { flipY: number }) => {
		painter.flipY = flipY === 1
		context.paint()
	}
}

export default function Demo() {
	return (
		<View
			onReady={init}
			width="512px"
			height="512px"
			assets={{ image: { marylin: MarylinURL } }}
			settings={{
				flipY: { label: "flipY", value: 0, step: ["false", "true"] },
			}}
		/>
	)
}
