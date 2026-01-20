// import NegX from "@/assets/cubemap/sky/negX.webp"
// import NegY from "@/assets/cubemap/sky/negY.webp"
// import NegZ from "@/assets/cubemap/sky/negZ.webp"
// import PosX from "@/assets/cubemap/sky/posX.webp"
// import PosY from "@/assets/cubemap/sky/posY.webp"
// import PosZ from "@/assets/cubemap/sky/posZ.webp"
import View, { type Assets } from "@/components/demo/Tgd"
import {
	type ArrayNumber3,
	type ArrayNumber4,
	type TgdContext,
	type TgdDataGlb,
	TgdGeometrySphereIco,
	TgdMaterialDiffuse,
	TgdMaterialGlobal,
	TgdPainterClear,
	TgdPainterDebugPoint,
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
import { OctreeInfo } from "./info"

const MAX_ZOOM = 12

// #begin
function init(context: TgdContext, assets: Assets) {
	const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({
		steps: 6,
	}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)
	const materials = [0, 1, 2, 3, 4, 5].map(
		(level) =>
			new TgdMaterialDiffuse({
				color: COLORS[level],
				lockLightsToCamera: true,
			}),
	)
	const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })
	const { bbox } = OctreeInfo
	const vecMin = new TgdVec3(bbox.min)
	const vecMax = new TgdVec3(bbox.max)
	const vecDim = new TgdVec3(vecMax).subtract(vecMin)
	const radius = Math.max(vecDim.x, vecDim.y, vecDim.z)
	const center = new TgdVec3(vecMax).add(vecMin).scale(0.5)
	context.camera.transfo.position = center
	context.camera.transfo.setPosition(0, 0, 0)
	context.camera.transfo.distance = vecDim.z * 3
	context.camera.near = 1
	context.camera.far = vecDim.z * 6
	const availableFiles = new Set<string>(OctreeInfo.files.split(","))
	const lod = new TgdPainterLOD(context, {
		bbox,
		async factory(x: number, y: number, z: number, level: number) {
			const asset: TgdDataGlb | null = await loadGLB(
				x,
				y,
				z,
				level,
				availableFiles,
			)
			if (!asset) return null

			return new TgdPainterMeshGltf(context, {
				asset,
				material: materials[level],
			})
		},
		subdivisions: 4,
		surfaceThreshold: 1,
	})
	context.add(
		clear,
		new TgdPainterState(context, {
			children: [lod],
			depth: webglPresetDepth.less,
			cull: webglPresetCull.back,
		}),
	)
	context.paint()
	return (settings: { zoom: number }) => {
		const { camera } = context
		camera.transfo.distance = tgdCalcMapRange(
			settings.zoom,
			1,
			MAX_ZOOM,
			radius * 3,
			(radius * 3) / MAX_ZOOM,
		)
		camera.near = Math.max(1, camera.transfo.distance - radius)
		camera.far = camera.transfo.distance + radius
		console.log("🐞 [main.demo@126] camera =", camera.near, camera.far) // @FIXME: Remove this line written on 2026-01-20 at 21:43
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
					max: MAX_ZOOM,
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
	availableFiles: Set<string>,
): Promise<TgdDataGlb | null> {
	const id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`
	if (!availableFiles.has(id)) return null

	const url =
		level === 0
			? "./assets/neuron/Octree.glb"
			: `./assets/neuron/Octree${id}.glb`
	console.log("Loading LOD block:", url)
	const asset = await tgdLoadGlb(url)
	return asset
}
