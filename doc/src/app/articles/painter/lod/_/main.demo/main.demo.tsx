import {
	type ArrayNumber3,
	type ArrayNumber4,
	TgdCameraPerspective,
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdGeometrySphereIco,
	TgdMaterialDiffuse,
	TgdPainterClear,
	TgdPainterLOD,
	TgdPainterMesh,
	TgdPainterMeshGltf,
	TgdPainterNode,
	TgdPainterState,
	TgdTransfo,
	tgdCalcDegToRad,
	tgdColorMakeHueWheel,
	webglPresetDepth,
} from "@tolokoban/tgd"

import View, { type Assets } from "@/components/demo/Tgd"

import BoxURL from "./box.glb"

// #begin
function init(context: TgdContext, assets: Assets) {
	const { camera } = context
	if (camera instanceof TgdCameraPerspective) {
		camera.fovy = tgdCalcDegToRad(60)
		camera.spaceHeightAtTarget = 6
	}
	camera.near = 1e-2
	camera.far = 1e2
	const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })
	const bbox: {
		min: Readonly<ArrayNumber3>
		max: Readonly<ArrayNumber3>
	} = {
		min: [-1, -1, -1],
		max: [+1, +1, +1],
	}
	const [minX, minY, minZ] = bbox.min
	const [maxX, maxY, maxZ] = bbox.max
	const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({
		steps: 8,
	}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)
	const levels = [0, 1, 2, 3, 4, 5]
	const materials = levels.map(
		(i) =>
			new TgdMaterialDiffuse({
				lockLightsToCamera: true,
				color: COLORS[i],
			}),
	)
	const boxes = [0, 1, 2, 3, 4, 5].map(
		(i) =>
			new TgdPainterMeshGltf(context, {
				asset: assets.glb.box,
				material: materials[i],
			}),
	)
	const lod = new TgdPainterLOD(context, {
		bbox,
		async factory(x: number, y: number, z: number, level: number) {
			const size = 2 ** -level
			const sizeX = size * (maxX - minX)
			const sizeY = size * (maxY - minY)
			const sizeZ = size * (maxZ - minZ)
			const center: ArrayNumber3 = [
				(x + 0.5) * sizeX + minX,
				(y + 0.5) * sizeY + minY,
				(z + 0.5) * sizeZ + minZ,
			]
			const transfo = new TgdTransfo()
			transfo.setPosition(center).setScale(sizeX, sizeY, sizeZ)
			const node = new TgdPainterNode({
				name: `(${x}, ${y}, ${z})/${level}`,
				children: [boxes[level]],
				transfo,
			})
			return node
		},
		subdivisions: 5,
	})
	context.add(
		clear,
		new TgdPainterState(context, {
			children: [lod],
			depth: webglPresetDepth.less,
		}),
	)
	context.paint()
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		inertiaZoom: 1000,
	})
}
// #end

export default function Demo() {
	return (
		<View
			onReady={init}
			gizmo
			assets={{
				glb: { box: BoxURL },
			}}
		/>
	)
}
