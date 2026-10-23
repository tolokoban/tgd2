import {
	type TgdContext,
	TgdMaterialGltf,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterSkybox,
	TgdPainterState,
	TgdTextureCube,
} from "@tolokoban/tgd";
import View, { type Assets } from "@/components/demo/Tgd";

import HelmetURL from "@/assets/mesh/helmet.glb";
import PosX from "@/assets/cubemap/1024/warehouse/posX.webp";
import PosY from "@/assets/cubemap/1024/warehouse/posY.webp";
import PosZ from "@/assets/cubemap/1024/warehouse/posZ.webp";
import NegX from "@/assets/cubemap/1024/warehouse/negX.webp";
import NegY from "@/assets/cubemap/1024/warehouse/negY.webp";
import NegZ from "@/assets/cubemap/1024/warehouse/negZ.webp";

function init(context: TgdContext, assets: Assets) {
	// #begin Initializing WebGL
	const skybox = TgdTextureCube.lazyLoad(context, {
		size: 1024,
		posX: PosX,
		posY: PosY,
		posZ: PosZ,
		negX: NegX,
		negY: NegY,
		negZ: NegZ,
	});
	const { helmet: asset } = assets.glb;
	const gltfMaterial = asset.getMaterial(0);
	const pbr = gltfMaterial.pbrMetallicRoughness;
	const material = new TgdMaterialGltf({
		textures: {
			albedo: asset.createTexture2D(context, pbr?.baseColorTexture?.index ?? 0),
			// glTF stores roughness in GREEN and metallic in BLUE.
			metallicRoughness: asset.createTexture2D(
				context,
				pbr?.metallicRoughnessTexture?.index ?? 0,
			),
			normal: asset.createTexture2D(context, gltfMaterial.normalTexture?.index ?? 0),
			occlusion: asset.createTexture2D(context, gltfMaterial.occlusionTexture?.index ?? 0),
			emission: asset.createTexture2D(context, gltfMaterial.emissiveTexture?.index ?? 0),
			skybox,
		},
	});
	const mesh = new TgdPainterMesh(context, {
		geometry: asset.makeGeometry(),
		transfo: asset.createTransfoFromNode(asset.getNode(0)),
		material,
	});
	// #end
	context.camera.fitSpaceAtTarget(2.2, 2.2);
	context.add(
		new TgdPainterClear(context, { depth: 1 }),
		new TgdPainterSkybox(context, {
			camera: context.camera,
			texture: skybox,
		}),
		new TgdPainterState(context, {
			depth: "less",
			cull: "back",
			children: [mesh],
		}),
	);
	context.paint();
}

export default function Demo() {
	return (
		<View
			onReady={init}
			assets={{ glb: { helmet: HelmetURL } }}
			options={{ alpha: false }}
			controller={{ inertiaOrbit: 1000 }}
			gizmo
		/>
	);
}
