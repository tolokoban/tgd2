import {
	TgdBoundingBox,
	TgdCameraOrthographic,
	TgdColor,
	type TgdContext,
	TgdDataset,
	TgdGeometryBox,
	TgdLight,
	TgdMaterialDiffuse,
	TgdMaterialFaceOrientation,
	TgdPainterClear,
	TgdPainterGroup,
	TgdPainterMesh,
	TgdPainterPointsCloud,
	TgdPainterState,
	type TgdPointsCloudFragCodeSphereOptions,
	TgdTexture2D,
	tgdCanvasCreatePalette,
	webglPresetDepth,
} from "@tolokoban/tgd"
import GridURL from "@/assets/image/uv-grid-2x2.webp"
import View, { Assets } from "@/components/demo/Tgd"

const DEPTH_PRECISION_ARRAY: TgdPointsCloudFragCodeSphereOptions["depthPrecision"][] =
	["none", "low", "high"]

function init(context: TgdContext, assets: Assets) {
	// #begin
	context.camera = new TgdCameraOrthographic()
	context.execBeforeNextPaint(() => {
		const radius = 3
		context.camera.fitBoundingBox(
			new TgdBoundingBox().addSphere(0, 0, 0, radius),
		)
	})
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.2, 0.3, 1],
		depth: 1,
	})
	const { texture, dataPoint, dataUV } = createData(context)
	const groups: Record<string, TgdPainterGroup> = {}
	const clouds: TgdPainterPointsCloud[] = []
	for (const depthPrecision of DEPTH_PRECISION_ARRAY) {
		if (!depthPrecision) continue

		const cloud = new TgdPainterPointsCloud(context, {
			dataPoint,
			dataUV,
			texture,
			radiusMultiplier: 1.5,
			minSizeInPixels: 32,
			fragCode: TgdPainterPointsCloud.fragCodeSphere({ depthPrecision }),
		})
		clouds.push(cloud)
		groups[depthPrecision] = new TgdPainterGroup([cloud], {
			active: depthPrecision === "low",
		})
	}
	const cube = new TgdPainterMesh(context, {
		geometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),
		material: new TgdMaterialDiffuse({
			color: new TgdTexture2D(context).loadBitmap(assets.image.grid),
			ambient: new TgdLight({
				color: [0.5, 0.5, 0.5, 1],
			}),
		}),
	})
	const state = new TgdPainterState(context, {
		depth: webglPresetDepth.less,
		children: [cube, ...Object.values(groups)],
	})
	context.add(clear, state)
	context.paint()
	// #end
	return (settings: Record<string, number>) => {
		for (const cloud of clouds) {
			cloud.radiusMultiplier = settings.radiusMultiplier
		}
		for (const depthPrecision of DEPTH_PRECISION_ARRAY) {
			if (!depthPrecision) continue

			const group = groups[depthPrecision]
			group.active =
				depthPrecision === DEPTH_PRECISION_ARRAY[settings.depthPrecision]
		}
		context.paint()
	}
}

export default function Demo() {
	return (
		<View
			onReady={init}
			gizmo
			assets={{
				image: {
					grid: GridURL,
				},
			}}
			controller={{
				inertiaOrbit: 2000,
				maxZoom: 5,
				minZoom: 0.25,
				speedZoom: 1,
			}}
			options={{
				preserveDrawingBuffer: true,
			}}
			settings={{
				depthPrecision: {
					label: "depthPrecision",
					value: 1,
					step: ["none", "low", "high"],
				},
				radiusMultiplier: {
					label: "radiusMultiplier",
					value: 1.5,
					min: 0.5,
					max: 2,
				},
			}}
		/>
	)
}

function createData(context: TgdContext) {
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
				const dist = 1.666
				coords.push(dist * x, dist * y, dist * z, radius / 2)
				uvs.push(u + 0.5, u + 0.5)
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
	return {
		texture,
		dataUV: new Float32Array(uvs),
		dataPoint: new Float32Array(dataset.data),
	}
}
