import {
	type ArrayNumber3,
	type ArrayNumber4,
	type TgdContext,
	type TgdDataGlb,
	TgdMaterialGlobal,
	TgdPainterClear,
	TgdPainterDebugPoint,
	TgdPainterGroup,
	TgdPainterLOD,
	TgdPainterLogic,
	TgdPainterMeshGltf,
	TgdPainterState,
	TgdTextureCube,
	tgdCalcMix,
	tgdColorMakeHueWheel,
	tgdLoadGlb,
	webglPresetCull,
	webglPresetDepth,
} from "@tolokoban/tgd"

import NegX from "@/assets/cubemap/sky/negX.webp"
import NegY from "@/assets/cubemap/sky/negY.webp"
import NegZ from "@/assets/cubemap/sky/negZ.webp"
import PosX from "@/assets/cubemap/sky/posX.webp"
import PosY from "@/assets/cubemap/sky/posY.webp"
import PosZ from "@/assets/cubemap/sky/posZ.webp"
import View, { type Assets } from "@/components/demo/Tgd"
import { WireCube } from "./wire-cube"

// #begin
function init(context: TgdContext, assets: Assets) {
	context.camera.transfo.distance = 14
	context.camera.near = 1e-2
	context.camera.far = 20
	const color: ArrayNumber4 = [0.9, 0.5, 0.1, 1]
	const skybox = new TgdTextureCube(context, {
		imagePosX: assets.image.posX,
		imagePosY: assets.image.posY,
		imagePosZ: assets.image.posZ,
		imageNegX: assets.image.negX,
		imageNegY: assets.image.negY,
		imageNegZ: assets.image.negZ,
	})
	const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({
		steps: 8,
	}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)
	const materials = [0, 1, 2, 3, 4, 5].map(
		(level) =>
			new TgdMaterialGlobal({
				color: COLORS[level],
				ambientColor: skybox,
			}),
	)
	const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })
	const bbox: {
		min: Readonly<ArrayNumber3>
		max: Readonly<ArrayNumber3>
	} = {
		min: [-1.31195, -1.39747, -1.06093],
		max: [1.312, 1.2265, 1.563],
	}
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
		subdivisions: 1,
		// subdivisions: 3,
		// surfaceThreshold: 0.8,
	})
	const points = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
		const point = new TgdPainterDebugPoint(context)
		const [R, G, B, A] = COLORS[i]
		point.color.x = R
		point.color.y = G
		point.color.z = B
		point.color.w = A
		return point
	})
	const group = new TgdPainterGroup(points)
	const wireCube = new WireCube(context)
	group.add(wireCube)
	context.add(
		clear,
		new TgdPainterState(context, {
			children: [lod, group],
			depth: webglPresetDepth.less,
			cull: webglPresetCull.back,
		}),
		new TgdPainterLogic((time) => {
			// const { transfo } = context.camera
			// transfo.setEulerRotation(
			// 	Math.sin(time) * 30,
			// 	Math.sin(time * 1.182) * 40,
			// 	0,
			// )
			const bbox = {
				min: [0.000025000000000052758, -1.39747, 0.251035],
				max: [1.312, -0.08548500000000003, 1.563],
			}
			const [x0, y0, z0] = bbox.min
			const [x1, y1, z1] = bbox.max
			const corners: ArrayNumber3[] = [
				[x0, y0, z0],
				[x0, y1, z0],
				[x1, y0, z0],
				[x1, y1, z0],
				[x0, y0, z1],
				[x0, y1, z1],
				[x1, y0, z1],
				[x1, y1, z1],
			]
			let ptr = 0
			for (let i = 0; i < 8; i++) {
				const [x, y, z, w] = context.camera.apply(corners[i])
				const painter = points[i]
				painter.x = x
				painter.y = y
				painter.z = z
				painter.w = w
				const { data } = wireCube
				data[ptr++] = x
				data[ptr++] = y
				data[ptr++] = z
				data[ptr++] = w
			}
		}),
	)
	context.inputs.keyboard.eventKeyPress.addListener((evt) => {
		if (evt.key === "d") {
			lod.debug()
		}
	})
	context.paint()
}
// #end

export default function Demo() {
	return (
		<View
			onReady={init}
			assets={{
				image: {
					posX: PosX,
					posY: PosY,
					posZ: PosZ,
					negX: NegX,
					negY: NegY,
					negZ: NegZ,
				},
			}}
			gizmo
			controller={{
				inertiaOrbit: 1000,
				inertiaZoom: 1000,
				speedZoom: 0.8,
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
			? "./assets/lod/Octree.glb"
			: `./assets/lod/Octree${toBin(x, level)}${toBin(y, level)}${toBin(
					z,
					level,
				)}.glb`
	console.log("Loading LOD block:", url)
	const asset = await tgdLoadGlb(url)
	return asset
}
