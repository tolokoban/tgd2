import {
	type ArrayNumber3,
	type ArrayNumber4,
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdDataGlb,
	TgdMaterialGlobal,
	TgdPainterClear,
	TgdPainterLOD,
	TgdPainterLogic,
	TgdPainterMeshGltf,
	TgdPainterState,
	TgdTextureCube,
	tgdCalcMix,
	tgdCalcRandom3,
	tgdLoadGlb,
	webglPresetDepth,
} from "@tolokoban/tgd"

import NegX from "@/assets/cubemap/sky/negX.webp"
import NegY from "@/assets/cubemap/sky/negY.webp"
import NegZ from "@/assets/cubemap/sky/negZ.webp"
import PosX from "@/assets/cubemap/sky/posX.webp"
import PosY from "@/assets/cubemap/sky/posY.webp"
import PosZ from "@/assets/cubemap/sky/posZ.webp"
import View, { Assets } from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext, assets: Assets) {
	context.camera.transfo.distance = 14
	context.camera.near = 1e-2
	context.camera.far = 20
	const color: ArrayNumber4 = [0.9, 0.6, 0.1, 1]
	const skybox = new TgdTextureCube(context, {
		imagePosX: assets.image.posX,
		imagePosY: assets.image.posY,
		imagePosZ: assets.image.posZ,
		imageNegX: assets.image.negX,
		imageNegY: assets.image.negY,
		imageNegZ: assets.image.negZ,
	})
	const material = new TgdMaterialGlobal({
		color,
		ambientColor: skybox,
	})
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
				material,
			})
		},
		subdivisions: 3,
		surfaceThreshold: 0.8,
	})
	context.add(
		clear,
		new TgdPainterState(context, {
			children: [lod],
			depth: webglPresetDepth.less,
		}),
		new TgdPainterLogic((time) => {
			const { transfo } = context.camera
			transfo.setEulerRotation(
				Math.sin(time) * 30,
				Math.sin(time * 1.182) * 40,
				0,
			)
		}),
	)
	context.inputs.pointer.eventTap.addListener(() => {
		context.animSchedule({
			action(alpha) {
				context.camera.transfo.distance = tgdCalcMix(14, 4, alpha)
			},
			duration: 2,
		})
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
				minZoom: 1,
				maxZoom: 2.8,
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
