import {
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdGeometry,
	TgdGeometryBox,
	TgdGeometrySphereIco,
	TgdMaterialFaceOrientation,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterState,
	webglPresetDepth,
} from "@tolokoban/tgd";

import View from "@/components/demo/Tgd";

// #begin
function init(context: TgdContext) {
	const clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] });
	const material = new TgdMaterialFaceOrientation();
	const geometries = [
		new TgdGeometrySphereIco({
			center: [+0.5, 0, 0],
		}),
		new TgdGeometryBox({
			center: [-0.51, 1, 0],
		}),
		new TgdGeometrySphereIco({
			center: [-0.5, 0, 0],
		}),
		new TgdGeometryBox({
			center: [+0.51, 1, 0],
		}),
	];
	const geometry = TgdGeometry.join(geometries);
	const mesh = new TgdPainterMesh(context, {
		geometry,
		material,
	});
	context.add(
		clear,
		new TgdPainterState(context, {
			children: [mesh],
			depth: webglPresetDepth.less,
		}),
	);
	context.paint();
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		inertiaPanning: 1000,
		inertiaZoom: 1000,
	});
}
// #end

export default function Demo() {
	return <View onReady={init} gizmo />;
}
