import {
	TgdBoundingBox,
	type TgdContext,
	TgdGeometryGltf,
	TgdPainterBBox,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterState,
} from "@tolokoban/tgd"
import SuzanneURL from "@/assets/mesh/suzanne.glb"
import View, { type Assets } from "@/components/demo/Tgd"

function init(context: TgdContext, assets: Assets) {
	// #begin Initializing WebGL
	const clear = new TgdPainterClear(context, {
		color: [0, 0, 0, 1],
		depth: 1,
	})
	const suzanne = new TgdPainterMesh(context, {
		geometry: new TgdGeometryGltf({
			data: assets.glb.suzanne,
		}),
	})
	const state = new TgdPainterState(context, {
		children: [suzanne],
		depth: "less",
	})
	context.add(
		clear,
		state,
		new TgdPainterBBox(context, {
			bbox: suzanne.computeBoundingBox(),
		}),
	)
	context.paint()
	context.camera.fitSpaceAtTarget(6, 6)
	// #end
}

export default function Demo() {
	return (
		<View
			onReady={init}
			assets={{
				glb: {
					suzanne: SuzanneURL,
				},
			}}
			controller={{
				maxZoom: 100,
			}}
			gizmo
		/>
	)
}
