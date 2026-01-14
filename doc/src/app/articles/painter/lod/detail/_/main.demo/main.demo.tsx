import {
	type ArrayNumber3,
	type ArrayNumber4,
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdGeometrySphereIco,
	TgdMaterialDiffuse,
	TgdPainterClear,
	TgdPainterLOD,
	TgdPainterMesh,
	TgdPainterNode,
	TgdPainterState,
	TgdTransfo,
	tgdColorMakeHueWheel,
	webglPresetDepth,
} from "@tolokoban/tgd"

import View, { Assets } from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext) {
	const clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })
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
		steps: 10,
	}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)
	const levels = [0, 1, 2, 3, 4, 5]
	const materials = levels.map(
		(i) =>
			new TgdMaterialDiffuse({
				lockLightsToCamera: true,
				color: COLORS[i],
			}),
	)
	const spheres = levels.map(
		(level) =>
			new TgdPainterMesh(context, {
				name: `Sphere(${level})`,
				geometry: new TgdGeometrySphereIco({
					subdivisions: level,
					radius: 0.5,
				}),
				material: materials[level],
			}),
	)
	const lod = new TgdPainterLOD(context, {
		cacheMeshes: true,
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
				children: [spheres[level]],
				transfo,
			})
			node.debug()
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
	return <View onReady={init} gizmo />
}
