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
	const { helmet: data } = assets.glb;
	// All the textures are read from the glTF material
	// of the first primitive of the first mesh.
	const material = TgdMaterialGltf.from(context, {
		data,
		meshIndexOrName: 0,
		primitiveIndex: 0,
		skybox,
	});
	const mesh = new TgdPainterMesh(context, {
		geometry: data.makeGeometry(),
		transfo: data.createTransfoFromNode(data.getNode(0)),
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
