import {
	type TgdContext,
	TgdPainterClear,
	TgdPainterMeshGltf,
	TgdPainterSkybox,
	TgdPainterState,
	TgdTextureCube,
	webglPresetDepth,
} from "@tolokoban/tgd";
import View, { type Assets } from "@/components/demo/Tgd";

import SuzanneGlassURL from "@/assets/mesh/suzanne-glass.glb";
import PosX from "@/assets/cubemap/sky/contrast/posX.webp";
import PosY from "@/assets/cubemap/sky/contrast/posY.webp";
import PosZ from "@/assets/cubemap/sky/contrast/posZ.webp";
import NegX from "@/assets/cubemap/sky/contrast/negX.webp";
import NegY from "@/assets/cubemap/sky/contrast/negY.webp";
import NegZ from "@/assets/cubemap/sky/contrast/negZ.webp";

function init(context: TgdContext, assets: Assets) {
	context.camera.fitSpaceAtTarget(2.5, 2.5);
	// #begin Initializing WebGL
	const skybox = new TgdTextureCube(context, {
		imagePosX: assets.image.posX,
		imagePosY: assets.image.posY,
		imagePosZ: assets.image.posZ,
		imageNegX: assets.image.negX,
		imageNegY: assets.image.negY,
		imageNegZ: assets.image.negZ,
	});
	// The glTF material uses KHR_materials_transmission,
	// so the default material is a TgdMaterialGlass.
	const suzanne = new TgdPainterMeshGltf(context, {
		asset: assets.glb.suzanne,
		skybox,
	});
	// #end
	context.add(
		new TgdPainterClear(context, { depth: 1 }),
		new TgdPainterSkybox(context, {
			camera: context.camera,
			texture: skybox,
		}),
		new TgdPainterState(context, {
			depth: webglPresetDepth.less,
			children: [suzanne],
		}),
	);
	context.paint();
}

export default function Demo() {
	return (
		<View
			onReady={init}
			assets={{
				glb: { suzanne: SuzanneGlassURL },
				image: {
					posX: PosX,
					posY: PosY,
					posZ: PosZ,
					negX: NegX,
					negY: NegY,
					negZ: NegZ,
				},
			}}
			options={{ alpha: false }}
			controller={{ inertiaOrbit: 1000 }}
			gizmo
		/>
	);
}
