import {
	TgdContext,
	TgdPainterClear,
	TgdPainterMeshGltf,
	TgdPainterState,
	tgdLoadGlb,
	webglPresetDepth,
} from "@tolokoban/tgd"

import SuzanneURL from "@/assets/mesh/suzanne.glb"

function init(context: TgdContext) {
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.2, 0.3, 1],
		depth: 1,
	})
	const state = new TgdPainterState(context, {
		depth: webglPresetDepth.less,
	})
	context.add(clear, state)
	context.play()
	// Loading asset
	tgdLoadGlb(SuzanneURL).then((asset) => {
		if (!asset) return

		const mesh = new TgdPainterMeshGltf(context, {
			asset,
		})
		mesh.logic.add((time) => {
			mesh.transfo.setEulerRotation(100 * time, -37 * time, 0)
		})
		state.add(mesh)
	})
}

function createContext(canvas: HTMLCanvasElement | null) {
	if (!canvas) return

	const context = new TgdContext(canvas)
	init(context)

	// Return a cleanup function
	return () => context.delete()
}

export default function () {
	return <canvas ref={createContext} width={300} height={300} />
}
