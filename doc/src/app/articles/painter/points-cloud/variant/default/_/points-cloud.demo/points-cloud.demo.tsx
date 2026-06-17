import {
	TgdBoundingBox,
	TgdCameraOrthographic,
	TgdColor,
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdDataGlb,
	TgdDataset,
	TgdGeometryBox,
	TgdMaterialFaceOrientation,
	TgdMaterialFlatTexture,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterMeshGltf,
	TgdPainterPointsCloud,
	TgdPainterPointsCloudMorphing,
	TgdPainterState,
	TgdTexture2D,
	tgdCanvasCreatePalette,
	webglPresetDepth,
} from "@tolokoban/tgd"
import TextureURL from "@/assets/image/suzanne-baked.webp"

import MonkeyHighURL from "@/assets/mesh/suzanne.glb"
import MonkeyLowURL from "@/assets/mesh/suzanne-low.glb"
import View, { Assets } from "@/components/demo/Tgd"

function init(context: TgdContext, assets: Assets) {
	console.log("🐞 [points-cloud.demo@27] assets =", assets) // @FIXME: Remove this line written on 2026-06-16 at 16:50
	// #begin
	context.camera = new TgdCameraOrthographic()
	context.execBeforeNextPaint(() => {
		const radius = 1.6
		context.camera.fitBoundingBox(
			new TgdBoundingBox().addSphere(0, 0, 0, radius),
		)
	})
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		maxZoom: 10,
		minZoom: 0.2,
		speedZoom: 1,
	})
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.2, 0.3, 1],
		depth: 1,
	})
	const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)
	const dataset = makeDataset(assets.glb.monkeyLow)
	const dataPoint = new Float32Array(dataset.data)
	const dataUV = new Float32Array(makeUV(assets.glb.monkeyLow).data)
	const cloud = new TgdPainterPointsCloud(context, {
		dataPoint,
		dataUV,
		texture,
	})
	const material = new TgdMaterialFlatTexture({
		texture,
	})
	const mesh = new TgdPainterMeshGltf(context, {
		asset: assets.glb.monkeyHigh,
		material,
	})

	const state = new TgdPainterState(context, {
		depth: webglPresetDepth.less,
		children: [mesh, cloud],
	})
	context.add(clear, state)
	context.paint()
	// #end
	return (settings: Record<string, number>) => {
		cloud.radiusMultiplier = settings.radiusMultiplier
		cloud.shadowIntensity = settings.shadowIntensity
		cloud.shadowThickness = settings.shadowThickness
		cloud.specularExponent = settings.specularExponent
		cloud.specularIntensity = settings.specularIntensity
		cloud.light = settings.light
		context.paint()
	}
}

export default function Demo() {
	return (
		<View
			onReady={init}
			gizmo
			assets={{
				glb: {
					monkeyHigh: MonkeyHighURL,
					monkeyLow: MonkeyLowURL,
				},
				image: {
					texture: TextureURL,
				},
			}}
			options={{
				preserveDrawingBuffer: true,
			}}
			settings={{
				radiusMultiplier: {
					label: "radiusMultiplier",
					value: 1,
					min: 0.5,
					max: 2,
				},
				shadowIntensity: {
					label: "shadowIntensity",
					value: 0.75,
				},
				shadowThickness: {
					label: "shadowThickness",
					value: 1.2,
					min: 0,
					max: 2,
				},
				specularExponent: {
					label: "specularExponent",
					value: 14,
					min: -10,
					max: 30,
				},
				specularIntensity: {
					label: "specularIntensity",
					value: 1,
				},
				light: {
					label: "light",
					value: 1,
					min: -1,
					max: +3,
				},
			}}
		/>
	)
}

function createPalette() {
	const colors: TgdColor[] = []
	const S = 0.5
	const L = 0.4
	for (const H of [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]) {
		colors.push(TgdColor.fromHSL(H, S, L))
	}
	return tgdCanvasCreatePalette(colors)
}

function makeDataset(glb: TgdDataGlb) {
	const dataset = new TgdDataset({
		POSITION: "vec4",
	})
	glb.setAttrib(dataset, "POSITION")
	const { set } = dataset.getAttribAccessor("POSITION")
	const count = dataset.count
	const radius = 0.05
	for (let i = 0; i < count; i++) {
		set(radius, i, 3)
	}
	return dataset
}

function makeUV(glb: TgdDataGlb) {
	const dataset = new TgdDataset({
		TEXCOORD_0: "vec2",
	})
	glb.setAttrib(dataset, "TEXCOORD_0")
	dataset.debug()
	return dataset
}
