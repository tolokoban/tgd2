import {
	type ArrayNumber3,
	type ArrayNumber4,
	type TgdContext,
	type TgdDataGlb,
	TgdGeometrySphereIco,
	TgdMaterialDiffuse,
	TgdMaterialGlobal,
	TgdPainterClear,
	TgdPainterLOD,
	TgdPainterMesh,
	TgdPainterMeshGltf,
	TgdPainterState,
	TgdTextureCube,
	TgdVec3,
	tgdCalcMapRange,
	tgdColorMakeHueWheel,
	tgdLoadGlb,
	webglPresetCull,
	webglPresetDepth,
} from "@tolokoban/tgd"
// import NegX from "@/assets/cubemap/sky/negX.webp"
// import NegY from "@/assets/cubemap/sky/negY.webp"
// import NegZ from "@/assets/cubemap/sky/negZ.webp"
// import PosX from "@/assets/cubemap/sky/posX.webp"
// import PosY from "@/assets/cubemap/sky/posY.webp"
// import PosZ from "@/assets/cubemap/sky/posZ.webp"
import View, { type Assets } from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext, assets: Assets) {
	// const skybox = new TgdTextureCube(context, {
	// 	imagePosX: assets.image.posX,
	// 	imagePosY: assets.image.posY,
	// 	imagePosZ: assets.image.posZ,
	// 	imageNegX: assets.image.negX,
	// 	imageNegY: assets.image.negY,
	// 	imageNegZ: assets.image.negZ,
	// })
	const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({
		steps: 6,
	}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)
	const materials = [0, 1, 2, 3, 4, 5].map(
		(level) =>
			new TgdMaterialDiffuse({
				color: COLORS[level],
				lockLightsToCamera: true,
			}),
		// new TgdMaterialGlobal({
		// 	color: COLORS[level],
		// 	ambientColor: skybox,
		// }),
	)
	const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })
	const bbox: {
		min: Readonly<ArrayNumber3>
		max: Readonly<ArrayNumber3>
	} = {
		// min: [946129, 297586, 658353],
		// max: [1443983, 795439, 1156206],
		min: [1015737.875, 700261.5625, -795438.875],
		max: [1374369.125, 1114297.5, -297585.53125],
	}
	const vecMin = new TgdVec3(bbox.min)
	const vecMax = new TgdVec3(bbox.max)
	const vecDim = new TgdVec3(vecMax).subtract(vecMin)
	const radius = Math.max(vecDim.x, vecDim.y, vecDim.z)
	const center = new TgdVec3(vecMax).add(vecMin).scale(0.5)
	context.camera.transfo.position = center
	center.debug()
	context.camera.transfo.setPosition(1280000, 940000, -440000)
	context.camera.transfo.distance = vecDim.z * 3
	context.camera.near = 1
	context.camera.far = vecDim.z * 6

	const lod = new TgdPainterLOD(context, {
		bbox,
		async factory(x: number, y: number, z: number, level: number) {
			const asset: TgdDataGlb | null = await loadGLB(x, y, z, level)
			if (!asset) return null

			return new TgdPainterMeshGltf(context, {
				asset,
				material: materials[level],
			})
		},
		subdivisions: 3,
		surfaceThreshold: 0.8,
	})
	const sphere = new TgdPainterMesh(context, {
		geometry: new TgdGeometrySphereIco({
			radius: 1e4,
			subdivisions: 2,
		}),
	})
	sphere.transfo.position = context.camera.transfo.position
	context.add(
		clear,
		new TgdPainterState(context, {
			children: [lod],
			depth: webglPresetDepth.less,
			cull: webglPresetCull.back,
		}),
		// new TgdPainterLogic((time) => {
		// 	const { transfo } = context.camera
		// 	transfo.setEulerRotation(
		// 		Math.sin(time) * 30,
		// 		Math.sin(time * 1.182) * 40,
		// 		0,
		// 	)
		// }),
	)
	context.paint()
	return (settings: { zoom: number }) => {
		const { camera } = context
		camera.transfo.distance = tgdCalcMapRange(
			settings.zoom,
			1,
			10,
			radius * 3,
			radius * 0.3,
		)
		camera.near = camera.transfo.distance - radius
		camera.far = camera.transfo.distance + radius
	}
}
// #end

export default function Demo() {
	return (
		<View
			disableDefaultDoubleTap
			onReady={init}
			gizmo
			controller={{
				inertiaOrbit: 1000,
				inertiaZoom: 1000,
				speedZoom: 0,
			}}
			settings={{
				zoom: {
					label: "Zoom",
					value: 1,
					min: 1,
					max: 10,
				},
			}}
		/>
	)
}

function toBin(value: number, level: number): string {
	return value.toString(2).padStart(level, "0")
}

async function loadGLB(
	x: number,
	y: number,
	z: number,
	level: number,
): Promise<TgdDataGlb | null> {
	const url =
		level === 0
			? "./assets/neuron/Octree.glb"
			: `./assets/neuron/Octree${toBin(x, level)}${toBin(y, level)}${toBin(
					z,
					level,
				)}.glb`
	console.log("Loading LOD block:", url)
	const asset = await tgdLoadGlb(url)
	return asset
}
