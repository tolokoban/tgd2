import {
	type TgdContext,
	TgdControllerCameraOrbit,
	type TgdDataGlb,
	TgdDataset,
	TgdPainterClear,
	TgdPainterPointsCloud,
	TgdPainterState,
	TgdTexture2D,
	tgdCanvasCreatePalette,
	webglPresetDepth,
} from "@tolokoban/tgd";
import MonkeyURL from "@/assets/mesh/high-res-monkey.glb";
import View, { type Assets } from "@/components/demo/Tgd";

function makeDataset(glb: TgdDataGlb) {
	const dataset = new TgdDataset({
		POSITION: "vec4",
	});
	glb.setAttrib(dataset, "POSITION");
	const { set } = dataset.getAttribAccessor("POSITION");
	const count = dataset.count;
	const radius = 0.01;
	for (let i = 0; i < count; i++) {
		set(radius, i, 3);
	}
	return dataset;
}

function init(context: TgdContext, assets: Assets) {
	// #begin
	context.camera.transfo.distance = 5;
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		maxZoom: 5,
		minZoom: 0.5,
		speedZoom: 1,
	});
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.2, 0.3, 1],
		depth: 1,
	});
	const texture = new TgdTexture2D(context, {
		params: {
			minFilter: "LINEAR",
			magFilter: "LINEAR",
			wrapS: "CLAMP_TO_EDGE",
			wrapT: "CLAMP_TO_EDGE",
		},
	}).loadBitmap(tgdCanvasCreatePalette(["#f74", "#ff0", "#59f"]));
	const dataset = makeDataset(assets.glb.monkey);
	console.log("🐞 [points-cloud.demo@52] dataset.count =", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07
	const cloud = new TgdPainterPointsCloud(context, {
		dataPoint: new Float32Array(dataset.data),
		texture,
	});
	const state = new TgdPainterState(context, {
		depth: webglPresetDepth.less,
		children: [cloud],
	});
	context.add(clear, state);
	context.paint();
	// #end
}

export default function Demo() {
	return (
		<View
			onReady={init}
			gizmo
			options={{
				preserveDrawingBuffer: true,
			}}
			assets={{
				glb: { monkey: MonkeyURL },
			}}
		/>
	);
}

function makeUV(count: number, value: number) {
	const data = new Float32Array(count * 2);
	for (let i = 0; i < data.length; i++) {
		data[i] = value;
	}
	return data;
}
