import {
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdGeometryGltf,
	TgdMaterialDiffuse,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterState,
} from "@tolokoban/tgd";

import View, { type Assets } from "@/components/demo/Tgd";
import SuzanneURL from "@/assets/mesh/suzanne.glb";

// #begin
function init(context: TgdContext, assets: Assets) {
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.1, 0.1, 1],
		depth: 1,
	});
	const mesh = new TgdPainterMesh(context, {
		geometry: new TgdGeometryGltf({
			data: assets.glb.suzanne,
		}),
		material: new TgdMaterialDiffuse(),
	});
	context.add(
		clear,
		new TgdPainterState(context, {
			children: [mesh],
			depth: "less",
			cull: "back",
		}),
	);
	context.camera.fitSpaceAtTarget(3, 3);
	context.paint();
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		inertiaZoom: 1000,
	});
}
// #end

export default function Demo() {
	return (
		<View onReady={init} assets={{ glb: { suzanne: SuzanneURL } }} gizmo />
	);
}
