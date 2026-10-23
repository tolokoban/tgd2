import { type TgdContext, TgdFilterZoom, TgdPainterFilter, TgdTexture2D } from "@tolokoban/tgd"
import View, { type Assets } from "@/components/demo/Tgd"
import MarylinURL from "../../../marylin.webp"

function init(context: TgdContext, assets: Assets) {
	// #begin
	const texture = new TgdTexture2D(context, {
		params: {
			wrapS: "MIRRORED_REPEAT",
			wrapT: "MIRRORED_REPEAT",
		},
	}).loadBitmap(assets.image.marylin)
	const zoomFilter = new TgdFilterZoom({ zoom: 1 })
	context.add(
		new TgdPainterFilter(context, {
			texture,
			filters: [zoomFilter],
		}),
	)
	context.paint()
	// #end
	return ({ zoom, x, y }: { zoom: number; x: number; y: number }) => {
		zoomFilter.zoom = zoom
		zoomFilter.translation.reset(x, y)
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
				zoom: { label: "zoom", value: 1, min: 0.25, max: 4 },
				x: { label: "translation X", value: 0, min: -1, max: 1 },
				y: { label: "translation Y", value: 0, min: -1, max: 1 },
			}}
		/>
	)
}
