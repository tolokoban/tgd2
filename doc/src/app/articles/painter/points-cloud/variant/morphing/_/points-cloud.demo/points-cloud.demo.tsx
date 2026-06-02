import {
	TgdBoundingBox,
	TgdCameraOrthographic,
	TgdColor,
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdDataset,
	TgdGeometryBox,
	TgdMaterialFaceOrientation,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterPointsCloud,
	TgdPainterState,
	TgdTexture2D,
	tgdCanvasCreatePalette,
	webglPresetDepth,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
	// #begin
	context.camera = new TgdCameraOrthographic()
	context.execBeforeNextPaint(() => {
		const radius = 2.5
		context.camera.fitBoundingBox(
			new TgdBoundingBox().addSphere(0, 0, 0, radius),
		)
		context.camera.debug()
	})
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		maxZoom: 5,
		minZoom: 0.25,
		speedZoom: 1,
	})
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.2, 0.3, 1],
		depth: 1,
	})
	const dataset = new TgdDataset({
		POSITION: "vec4",
	})
	const coords: number[] = []
	const uvs: number[] = []
	const colors: TgdColor[] = []
	const values = [-1, +1]
	const radius = 1
	let index = 0
	for (const x of values) {
		for (const y of values) {
			for (const z of values) {
				coords.push(x, y, z, radius)
				const u = index / 8
				uvs.push(u, u)
				colors.push(TgdColor.fromHSL(u, 1, 0.5))
				index++
			}
		}
	}
	dataset.set("POSITION", new Float32Array(coords))
	const texture = new TgdTexture2D(context, {
		params: {
			minFilter: "NEAREST",
			magFilter: "NEAREST",
		},
	}).loadBitmap(tgdCanvasCreatePalette(colors))
	const cloud = new TgdPainterPointsCloud(context, {
		dataPoint: new Float32Array(dataset.data),
		dataUV: new Float32Array(uvs),
		texture,
		minSizeInPixels: 32,
	})
	const cube = new TgdPainterMesh(context, {
		geometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),
		material: new TgdMaterialFaceOrientation(),
	})
	const state = new TgdPainterState(context, {
		depth: webglPresetDepth.less,
		children: [cube, cloud],
		// children: [cloud],
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
