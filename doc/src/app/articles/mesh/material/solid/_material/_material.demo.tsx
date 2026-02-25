import {
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdMaterialSolid,
	TgdPainterClear,
	TgdPainterMeshGltf,
	TgdPainterState,
	tgdCalcRandom3,
	webglPresetDepth,
} from "@tolokoban/tgd"
import SuzaneURL from "@/assets/mesh/suzanne.glb"
import View, { type Assets } from "@/components/demo/Tgd"

function init(ctx: TgdContext, assets: Assets) {
	// #begin Initializing WebGL
	const material = new TgdMaterialSolid({
		color: [...tgdCalcRandom3(), 1],
	})
	const mesh = new TgdPainterMeshGltf(ctx, {
		asset: assets.glb.suzane,
		material,
	})
	// #end
	ctx.add(
		new TgdPainterClear(ctx, {
			color: [0.3, 0.3, 0.3, 1],
			depth: 1,
		}),
		new TgdPainterState(ctx, {
			depth: webglPresetDepth.less,
			children: [mesh],
		}),
	)
	ctx.paint()
	new TgdControllerCameraOrbit(ctx, {
		inertiaOrbit: 2000,
	})
	return (settings: Record<"red" | "green" | "blue", number>) => {
		material.color.x = settings.red
		material.color.y = settings.green
		material.color.z = settings.blue
		ctx.paint()
	}
}

export default function Demo() {
	return (
		<View
			onReady={init}
			assets={{
				glb: {
					suzane: SuzaneURL,
				},
			}}
			settings={{
				red: {
					label: "Red",
					value: 1,
					min: 0,
					max: 1,
					step: 1 / 16,
				},
				green: {
					label: "Green",
					value: 1,
					min: 0,
					max: 1,
					step: 1 / 16,
				},
				blue: {
					label: "Blue",
					value: 1,
					min: 0,
					max: 1,
					step: 1 / 16,
				},
			}}
			gizmo
		/>
	)
}
