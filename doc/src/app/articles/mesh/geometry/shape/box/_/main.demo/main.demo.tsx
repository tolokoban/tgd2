import {
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdGeometryBox,
	type TgdGeometryBoxOptions,
	type TgdMaterial,
	TgdMaterialDiffuse,
	TgdMaterialFaceOrientation,
	TgdMaterialNormals,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterState,
	TgdTexture2D,
	webglPresetDepth,
} from "@tolokoban/tgd";

import View, { type Assets } from "@/components/demo/Tgd";
import UVGrid3x2URL from "@/assets/image/uv-grid-3x2.webp";

const UVS: Array<TgdGeometryBoxOptions["uvs"]> = ["sameOnEachFace", "3x2"];
const KEEP = ["both", "bevel", "face"] as const;

type Settings = Record<
	| "sizeX"
	| "sizeY"
	| "sizeZ"
	| "centerX"
	| "centerY"
	| "centerZ"
	| "uvs"
	| "bevel"
	| "width"
	| "segments"
	| "profileShape"
	| "keep"
	| "material",
	number
>;

function init(context: TgdContext, assets: Assets) {
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.1, 0.1, 1],
		depth: 1,
	});
	const texture = new TgdTexture2D(context).loadBitmap(assets.image.uvGrid);
	const materials: TgdMaterial[] = [
		new TgdMaterialDiffuse({ color: texture, lockLightsToCamera: true }),
		new TgdMaterialNormals(),
		new TgdMaterialFaceOrientation(),
	];
	const state = new TgdPainterState(context, {
		depth: webglPresetDepth.less,
	});
	context.add(clear, state);
	context.camera.fitSpaceAtTarget(4, 4);
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		inertiaZoom: 1000,
	});
	return (settings: Settings) => {
		state.removeAll();
		state.add(createMesh(context, materials[settings.material], settings));
		context.paint();
	};
}

export default function Demo() {
	return (
		<View
			onReady={init}
			gizmo
			assets={{ image: { uvGrid: UVGrid3x2URL } }}
			settings={{
				sizeX: { label: "sizeX", value: 3, min: 0.1, max: 4 },
				sizeY: { label: "sizeY", value: 2, min: 0.1, max: 4 },
				sizeZ: { label: "sizeZ", value: 1, min: 0.1, max: 4 },
				centerX: { label: "center X", value: -0.5, min: -2, max: 2 },
				centerY: { label: "center Y", value: 0, min: -2, max: 2 },
				centerZ: { label: "center Z", value: 0, min: -2, max: 2 },
				uvs: { label: "uvs", value: 1, step: ["sameOnEachFace", "3x2"] },
				bevel: { label: "bevel", value: 1, step: ["Off", "On"] },
				width: { label: "bevel.width", value: 0.3, min: 0, max: 1 },
				segments: {
					label: "bevel.segments",
					value: 4,
					min: 1,
					max: 16,
					step: 1,
				},
				profileShape: {
					label: "bevel.profileShape",
					value: 0.5,
					min: 0,
					max: 1,
				},
				keep: {
					label: "bevel.keep",
					value: 0,
					step: ["both", "bevel", "face"],
				},
				material: {
					label: "material",
					value: 0,
					step: ["Diffuse", "Normals", "Face orientation"],
				},
			}}
		/>
	);
}

// #begin createMesh()
function createMesh(
	context: TgdContext,
	material: TgdMaterial,
	settings: Settings,
): TgdPainterMesh {
	const geometry = new TgdGeometryBox({
		sizeX: settings.sizeX,
		sizeY: settings.sizeY,
		sizeZ: settings.sizeZ,
		center: [settings.centerX, settings.centerY, settings.centerZ],
		uvs: UVS[settings.uvs],
		bevel:
			settings.bevel === 1
				? {
						width: settings.width,
						segments: settings.segments,
						profileShape: settings.profileShape,
						keep: KEEP[settings.keep],
					}
				: undefined,
	});
	return new TgdPainterMesh(context, { geometry, material });
}
// #end
