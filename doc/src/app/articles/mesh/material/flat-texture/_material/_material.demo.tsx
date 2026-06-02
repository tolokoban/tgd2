import {
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdMaterialFlat,
	TgdMaterialFlatTexture,
	TgdPainterClear,
	TgdPainterMeshGltf,
	TgdPainterState,
	TgdTexture2D,
	tgdCalcRandom3,
	webglPresetDepth,
} from "@tolokoban/tgd";
import View, { type Assets } from "@/components/demo/Tgd";
import SuzaneURL from "@/assets/mesh/suzanne.glb";
import Image1URL from "@/assets/image/suzanne-baked.webp";
import Image2URL from "@/assets/image/uv-grid.webp";

function init(context: TgdContext, assets: Assets) {
	// #begin Initializing WebGL
	const texture1 = new TgdTexture2D(context).loadBitmap(assets.image.image1);
	const texture2 = new TgdTexture2D(context).loadBitmap(assets.image.image2);
	const textures = [texture1, texture2];
	const material = new TgdMaterialFlatTexture({
		texture: texture1,
	});
	const mesh = new TgdPainterMeshGltf(context, {
		asset: assets.glb.suzane,
		material,
	});
	// #end
	context.add(
		new TgdPainterClear(context, {
			color: [0.3, 0.3, 0.3, 1],
			depth: 1,
		}),
		new TgdPainterState(context, {
			depth: webglPresetDepth.less,
			children: [mesh],
		}),
	);
	context.paint();
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 2000,
	});
	return ({ texture }: { texture: number }) => {
		material.texture = textures[texture];
		context.paint();
	};
}

export default function Demo() {
	return (
		<View
			onReady={init}
			assets={{
				glb: {
					suzane: SuzaneURL,
				},
				image: {
					image1: Image1URL,
					image2: Image2URL,
				},
			}}
			settings={{
				texture: {
					label: "texture",
					value: 0,
					step: ["Baked", "UV Grid"],
				},
			}}
			gizmo
		/>
	);
}
