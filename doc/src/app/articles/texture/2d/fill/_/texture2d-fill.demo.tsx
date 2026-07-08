import {
	type ArrayNumber4,
	TgdColor,
	type TgdContext,
	TgdGeometryBox,
	TgdMaterialDiffuse,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterState,
	TgdTexture2D,
	TgdVec4,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
	// #begin
	const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })
	const state = new TgdPainterState(context, {
		depth: "less",
		cull: "back",
		blend: "alpha",
	})
	context.add(clear, state)
	const colors: Array<string | TgdColor | ArrayNumber4 | TgdVec4> = [
		"#9cd",
		TgdColor.fromString("#fa2"),
		[0.5, 1, 0, 1],
		new TgdVec4(1, 0, 1, 1),
	]
	let colorIndex = 0
	for (let row = -1; row <= +1; row += 2) {
		for (let col = -1; col <= +1; col += 2) {
			const color = colors[colorIndex++]
			const texture = new TgdTexture2D(context).fill(color)
			const geometry = new TgdGeometryBox({
				center: [col / 2, row / 2, 0],
			})
			const material = new TgdMaterialDiffuse({
				color: texture,
			})
			const mesh = new TgdPainterMesh(context, { geometry, material })
			state.add(mesh)
		}
	}
	context.camera.fitSpaceAtTarget(2, 2)
	context.paint()
	// #end
}

export default function Demo() {
	return <View onReady={init} />
}
