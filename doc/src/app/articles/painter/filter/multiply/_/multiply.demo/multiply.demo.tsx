import { type TgdContext, TgdFilterMultiply, TgdPainterFilter, TgdTexture2D } from "@tolokoban/tgd"
import View, { type Assets } from "@/components/demo/Tgd"
import MarylinURL from "../../../marylin.webp"

function init(context: TgdContext, assets: Assets) {
	// #begin
	const texture = new TgdTexture2D(context).loadBitmap(assets.image.marylin)
	const multiplyFilter = new TgdFilterMultiply({ color: [1, 1, 1, 1] })
	context.add(
		new TgdPainterFilter(context, {
			texture,
			filters: [multiplyFilter],
		}),
	)
	context.paint()
	// #end
	return ({ red, green, blue }: { red: number; green: number; blue: number }) => {
		multiplyFilter.color.reset(red, green, blue, 1)
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
				red: { label: "red", value: 1, min: 0, max: 1 },
				green: { label: "green", value: 0.6, min: 0, max: 1 },
				blue: { label: "blue", value: 0.3, min: 0, max: 1 },
			}}
		/>
	)
}
