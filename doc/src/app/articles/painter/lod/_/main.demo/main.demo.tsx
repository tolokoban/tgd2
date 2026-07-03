import {
	type ArrayNumber3,
	type ArrayNumber4,
	TgdCameraPerspective,
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdMaterialDiffuse,
	TgdPainterClear,
	TgdPainterGizmo,
	TgdPainterGroup,
	TgdPainterLOD,
	TgdPainterMeshGltf,
	TgdPainterNode,
	TgdPainterState,
	TgdTransfo,
	tgdCalcDegToRad,
	tgdColorMakeHueWheel,
	webglPresetDepth,
} from "@tolokoban/tgd"
import BevelURL from "@/assets/mesh/cube-bevel.glb"
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
	const bevels = [0, 1, 2, 3, 4, 5].map(
		(i) =>
			new TgdPainterMeshGltf(context, {
				asset: assets.glb.bevel,
				material: materials[i],
			}),
	)
	const lodXYZ = new TgdPainterLOD(context, {
		mode: "xyz",
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
	const lodXZ = new TgdPainterLOD(context, {
		mode: "xz",
		bbox,
		async factory(x: number, y: number, z: number, level: number) {
			const size = 2 ** -level
			const sizeX = size * (maxX - minX)
			const sizeY = (maxY - minY) * 2 ** -5
			const sizeZ = size * (maxZ - minZ)
			const center: ArrayNumber3 = [
				(x + 0.5) * sizeX + minX,
				y,
				(z + 0.5) * sizeZ + minZ,
			]
			console.log("🐞 [main.demo@105] x, y, z, level =", x, y, z, level) // @FIXME: Remove this line written on 2026-07-03 at 18:44
			console.log(
				"🐞 [main.demo@106] sizeX, sizeY, sizeZ =",
				sizeX,
				sizeY,
				sizeZ,
			) // @FIXME: Remove this line written on 2026-07-03 at 18:44
			console.log("🐞 [main.demo@112] center =", center) // @FIXME: Remove this line written on 2026-07-03 at 18:46
			const transfo = new TgdTransfo()
			transfo.setPosition(center).setScale(sizeX, sizeY, sizeZ)
			const node = new TgdPainterNode({
				name: `(${x}, ${y}, ${z})/${level}`,
				children: [bevels[level]],
				transfo,
			})
			return node
		},
		subdivisions: 5,
	})
	const groupXYZ = new TgdPainterGroup({
		children: [lodXYZ],
		active: true,
	})
	const groupXZ = new TgdPainterGroup({
		children: [lodXZ],
		active: false,
	})
	context.add(
		clear,
		new TgdPainterState(context, {
			children: [groupXYZ, groupXZ],
			depth: webglPresetDepth.less,
		}),
	)
	context.paint()
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		inertiaZoom: 1000,
	})
	return ({
		mode,
		surfaceThreshold,
	}: {
		mode: number
		surfaceThreshold: number
	}) => {
		groupXYZ.active = mode === 0
		groupXZ.active = mode === 1
		lodXYZ.surfaceThreshold = surfaceThreshold
		lodXZ.surfaceThreshold = surfaceThreshold
		context.paint()
	}
}
// #end

export default function Demo() {
	return (
		<View
			onReady={init}
			gizmo
			assets={{
				glb: { box: BoxURL, bevel: BevelURL },
			}}
			settings={{
				mode: {
					label: "mode",
					value: 0,
					step: ["xyz", "xz"],
				},
				surfaceThreshold: {
					label: "surfaceThreshold",
					value: 0.25,
					min: 0.1,
					max: 2,
					step: 0.05,
				},
			}}
		/>
	)
}
