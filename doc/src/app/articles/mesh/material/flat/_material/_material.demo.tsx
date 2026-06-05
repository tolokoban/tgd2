import {
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdMaterialFlat,
	type TgdPainter,
	TgdPainterClear,
	TgdPainterMeshGltf,
	TgdPainterState,
	TgdQuat,
	tgdCalcRandom3,
	tgdCalcRandom4,
	webglPresetDepth,
} from "@tolokoban/tgd"
import SuzaneURL from "@/assets/mesh/suzanne.glb"
import View, { type Assets } from "@/components/demo/Tgd"

function init(ctx: TgdContext, assets: Assets) {
	// #begin Initializing WebGL
	const meshes: TgdPainter[] = []
	const count = 5
	for (let i = 0; i < count; i++) {
		const material = new TgdMaterialFlat({
			color: [...tgdCalcRandom3(), 1],
		})
		const mesh = new TgdPainterMeshGltf(ctx, {
			asset: assets.glb.suzane,
			material,
		})
		const ang = (2 * Math.PI * i) / count
		const r = 1
		const x = r * Math.cos(ang)
		const y = r * Math.sin(ang)
		mesh.transfo.setPosition(x, y, 0)
		const quat = new TgdQuat(tgdCalcRandom4(-1, +1)).normalize()
		mesh.transfo.orientation = quat
		meshes.push(mesh)
	}
	// #end
	ctx.add(
		new TgdPainterClear(ctx, {
			color: [0.3, 0.3, 0.3, 1],
			depth: 1,
		}),
		new TgdPainterState(ctx, {
			depth: webglPresetDepth.less,
			children: meshes,
		}),
	)
	ctx.paint()
	new TgdControllerCameraOrbit(ctx, {
		inertiaOrbit: 2000,
	})
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
			gizmo
		/>
	)
}
