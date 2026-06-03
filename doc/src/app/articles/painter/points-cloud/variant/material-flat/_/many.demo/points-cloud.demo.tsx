import {
	TgdColor,
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
	}).loadBitmap(createPalette());
	const dataset = makeDataset(assets.glb.monkey);
	console.log("🐞 [points-cloud.demo@52] dataset.count =", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07
	const cloud = new TgdPainterPointsCloud(context, {
		dataPoint: new Float32Array(dataset.data),
		dataUV: new Float32Array(makeUV(assets.glb.monkey)),
		texture,
		fragCode: TgdPainterPointsCloud.fragCodeFlat(),
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

function makeDataset(glb: TgdDataGlb) {
	const dataset = new TgdDataset({
		POSITION: "vec4",
	});
	glb.setAttrib(dataset, "POSITION");
	const { set } = dataset.getAttribAccessor("POSITION");
	const count = dataset.count;
	const radius = 0.02;
	for (let i = 0; i < count; i++) {
		set(radius, i, 3);
	}
	return dataset;
}

function makeUV(glb: TgdDataGlb) {
	const uvs: number[] = [];
	const dataset = new TgdDataset({
		NORMAL: "vec4",
	});
	glb.setAttrib(dataset, "NORMAL");
	const { get } = dataset.getAttribAccessor("NORMAL");
	const count = dataset.count;
	for (let i = 0; i < count; i++) {
		const nx = get(i, 0);
		const ny = get(i, 1);
		// const nz = get(i, 2);
		const u = 0.5 * (1 + nx);
		const v = 0.5 * (1 + ny);
		uvs.push(u, v);
	}
	return uvs;
}

function createPalette() {
	const colors: TgdColor[] = [];
	const S = 1;
	for (const L of [0.1, 0.5, 0.9]) {
		for (const H of [0, 0.2, 0.4, 0.6, 0.8, 1]) {
			colors.push(TgdColor.fromHSL(H, S, L));
		}
	}
	return tgdCanvasCreatePalette(colors, 6);
}
