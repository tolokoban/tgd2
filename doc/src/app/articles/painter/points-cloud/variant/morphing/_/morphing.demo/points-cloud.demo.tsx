import {
	TgdColor,
	type TgdContext,
	type TgdDataGlb,
	TgdDataset,
	TgdPainterClear,
	TgdPainterPointsCloud,
	TgdPainterPointsCloudMorphing,
	TgdPainterState,
	TgdTexture2D,
	tgdCalcRandom,
	tgdCanvasCreatePalette,
	webglPresetDepth,
} from "@tolokoban/tgd"
import Monkey1URL from "@/assets/mesh/high-res-monkey.glb"
import Monkey2URL from "@/assets/mesh/high-res-monkey-deformed.glb"
import View, { type Assets } from "@/components/demo/Tgd"

function init(context: TgdContext, assets: Assets) {
	// #begin
	context.camera.fitSpaceAtTarget(3, 2.5)
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.2, 0.3, 1],
		depth: 1,
	})
	const texture = new TgdTexture2D(context, {
		params: {
			minFilter: "LINEAR",
			magFilter: "LINEAR",
			wrapS: "CLAMP_TO_EDGE",
			wrapT: "CLAMP_TO_EDGE",
		},
	}).loadBitmap(createPalette())
	const { monkey1, monkey2 } = assets.glb
	const point1 = makePoint(monkey1)
	const uv1 = makeUV(monkey1)
	const point2 = makePoint(monkey2)
	const uv2 = makeUV(monkey2)
	const cloudMix = new TgdPainterPointsCloudMorphing(context, {
		mix: 0,
		data: [
			[
				{
					point: point1,
					uv: uv1,
				},
				{
					point: point2,
					uv: uv2,
				},
			],
		],
		texture,
		fragCode: TgdPainterPointsCloudMorphing.fragCodeSphere({
			depthPrecision: "low",
		}),
	})
	cloudMix.debug()
	const state = new TgdPainterState(context, {
		depth: webglPresetDepth.less,
		children: [cloudMix],
	})
	context.add(clear, state)
	context.paint()
	// #end
	return (settings: Record<string, number>) => {
		cloudMix.mix = settings.mix
		context.paint()
	}
}

export default function Demo() {
	return (
		<View
			onReady={init}
			// gizmo
			controller={{
				inertiaOrbit: 2000,
				maxZoom: 10,
				minZoom: 0.25,
				speedZoom: 1,
			}}
			options={{
				preserveDrawingBuffer: true,
			}}
			assets={{
				glb: { monkey1: Monkey1URL, monkey2: Monkey2URL },
			}}
			settings={{
				mix: {
					label: "mix",
					value: 0,
					min: -2,
					max: 3,
				},
			}}
		/>
	)
}

function makePoint(glb: TgdDataGlb) {
	const dataset = new TgdDataset({
		POSITION: "vec4",
	})
	glb.setAttrib(dataset, "POSITION")
	const { set } = dataset.getAttribAccessor("POSITION")
	const count = dataset.count
	for (let i = 0; i < count; i++) {
		set(0.01, i, 3)
	}
	return new Float32Array(dataset.data)
}

function makeUV(glb: TgdDataGlb) {
	const uvs: number[] = []
	const dataset = new TgdDataset({
		NORMAL: "vec4",
	})
	glb.setAttrib(dataset, "NORMAL")
	const { get } = dataset.getAttribAccessor("NORMAL")
	const count = dataset.count
	for (let i = 0; i < count; i++) {
		// const nx = get(i, 0)
		const ny = get(i, 1)
		const nz = get(i, 2)
		const u = 0.5 * (1 + nz)
		const v = 0.5 * (1 + ny)
		uvs.push(u, v)
	}
	return new Float32Array(uvs)
}

function createPalette() {
	const colors: TgdColor[] = []
	const S = 1
	for (const L of [0.1, 0.5, 0.9]) {
		for (const H of [0, 0.2, 0.4, 0.6, 0.8, 1]) {
			colors.push(TgdColor.fromHSL(H, S, L))
		}
	}
	return tgdCanvasCreatePalette(colors, 6)
}
