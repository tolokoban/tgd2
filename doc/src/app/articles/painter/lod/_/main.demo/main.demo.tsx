import {
	type ArrayNumber3,
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdGeometryBox,
	TgdMaterialDiffuse,
	TgdPainterClear,
	TgdPainterLOD,
	TgdPainterState,
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
	const material = new TgdMaterialDiffuse({
		lockLightsToCamera: true,
	})
	const lod = new TgdPainterLOD(context, {
		bbox,
		async factory(x: number, y: number, z: number, level: number) {
			const size = 2 ** -level
			const sizeX = size * (maxX - minX)
			const sizeY = size * (maxY - minY)
			const sizeZ = size * (maxZ - minZ)
			return {
				geometry: new TgdGeometryBox({
					sizeX: sizeX * 0.9,
					sizeY: sizeY * 0.9,
					sizeZ: sizeZ * 0.9,
					center: [
						(x + 0.5) * sizeX + minX,
						(y + 0.5) * sizeY + minY,
						(z + 0.5) * sizeZ + minZ,
					],
				}),
				material,
			}
		},
		subdivisions: 1,
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
