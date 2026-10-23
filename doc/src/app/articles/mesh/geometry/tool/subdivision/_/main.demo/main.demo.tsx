import {
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdGeometryBox,
	type TgdGeometrySubdivisionOptions,
	TgdMaterial,
	TgdMaterialDiffuse,
	TgdMaterialNormals,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterState,
	TgdTexture2D,
	tgdGeometrySubdivision,
	webglPresetDepth,
} from "@tolokoban/tgd";

import View, { type Assets } from "@/components/demo/Tgd";
import UVGridURL from "@/assets/image/uv-grid.webp";

const MODES: Array<TgdGeometrySubdivisionOptions["mode"]> = [
	"catmull-clark",
	"simple",
];

type Settings = Record<"mode" | "material", number>;

function init(context: TgdContext, assets: Assets) {
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.1, 0.1, 1],
		depth: 1,
	});
	const texture = new TgdTexture2D(context).loadBitmap(assets.image.uvGrid);
	const materials: TgdMaterial[] = [
		new TgdMaterialDiffuse({ color: texture, lockLightsToCamera: true }),
		new TgdMaterialNormals(),
		createMaterialTangents(),
	];
	const state = new TgdPainterState(context, {
		depth: webglPresetDepth.less,
	});
	context.add(clear, state);
	context.camera.fitSpaceAtTarget(4, 2);
	new TgdControllerCameraOrbit(context, {
		inertiaOrbit: 1000,
		inertiaZoom: 1000,
	});
	return (settings: Settings) => {
		state.removeAll();
		const material = materials[settings.material];
		for (const levels of [0, 1, 2]) {
			state.add(
				createMesh(context, material, MODES[settings.mode], levels),
			);
		}
		context.paint();
	};
}

export default function Demo() {
	return (
		<View
			onReady={init}
			gizmo
			assets={{ image: { uvGrid: UVGridURL } }}
			settings={{
				mode: {
					label: "mode",
					value: 0,
					step: ["catmull-clark", "simple"],
				},
				material: {
					label: "material",
					value: 0,
					step: ["Diffuse", "Normals", "Tangents"],
				},
			}}
		/>
	);
}

// #begin createMesh()
function createMesh(
	context: TgdContext,
	material: TgdMaterial,
	mode: TgdGeometrySubdivisionOptions["mode"],
	levels: number,
): TgdPainterMesh {
	const box = new TgdGeometryBox({
		center: [(levels - 1) * 1.5, 0, 0],
	}).computeTangents();
	const geometry =
		levels > 0 ? tgdGeometrySubdivision(box, { mode, levels }) : box;
	return new TgdPainterMesh(context, { geometry, material });
}
// #end

// #begin createMaterialTangents()
/**
 * Show the tangents (attribute CUSTOM_ATTRIBUTE_3) as colors.
 */
function createMaterialTangents(): TgdMaterial {
	return new TgdMaterial({
		varyings: { varTangent: "vec3" },
		vertexShaderCode: ["varTangent = CUSTOM_ATTRIBUTE_3.xyz;"],
		fragmentShaderCode: [
			"return vec4(0.5 * (vec3(1.0) + normalize(varTangent)), 1.0);",
		],
	});
}
// #end
