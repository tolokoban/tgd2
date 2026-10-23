import {
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdGeometryPlane,
	TgdMaterialDiffuse,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterState,
	TgdTexture2D,
} from "@tolokoban/tgd";

import View, { type Assets } from "@/components/demo/Tgd";
import UVGridURL from "@/assets/image/uv-grid.webp";

// #begin
function init(context: TgdContext, assets: Assets) {
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.1, 0.1, 1],
		depth: 1,
	});
	const texture = new TgdTexture2D(context, {
		load: assets.image.uvGrid,
	});
	const material = new TgdMaterialDiffuse({ color: texture });
	const plane1 = new TgdPainterMesh(context, {
		geometry: new TgdGeometryPlane({
			sizeX: 2,
			sizeY: 2,
		}),
		material,
	});
	plane1.transfo.setPosition(-1.2, 0, 0);
	const plane2 = new TgdPainterMesh(context, {
		geometry: new TgdGeometryPlane({
			sizeX: 2,
			sizeY: 2,
			vecX: [Math.SQRT1_2, 0, -Math.SQRT1_2],
			vecY: [0, 1, 0],
			uv0: [0.5, 0],
			uv1: [1, 0.5],
		}),
		material,
	});
	plane2.transfo.setPosition(1.2, 0, 0);
	context.add(
		clear,
		new TgdPainterState(context, {
			children: [plane1, plane2],
			depth: "less",
		}),
	);
	context.camera.fitSpaceAtTarget(5, 3);
	context.paint();
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		inertiaZoom: 1000,
	});
}
// #end

export default function Demo() {
	return (
		<View onReady={init} assets={{ image: { uvGrid: UVGridURL } }} gizmo />
	);
}
