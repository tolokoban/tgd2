import {
	type ArrayNumber4,
	type TgdContext,
	TgdPainterClear,
	TgdPainterMeshGltf,
	TgdPainterState,
	tgdCalcRandom3,
	webglPresetDepth,
	TgdTextureCube,
	TgdPainterLogic,
	TgdPainterSkybox,
	TgdMaterialGlass,
	TgdColor,
	TgdLight,
	TgdPainterMesh,
	TgdGeometrySphereIco,
	TgdGeometryBox,
} from "@tolokoban/tgd";
import View, { type Assets } from "@/components/demo/Tgd";
import React from "react";
import { useFloat } from "@/utils/hooks/float";
import { ViewInputNumber, ViewOptions, ViewPanel } from "@tolokoban/ui";

import SpecimenURL from "@/assets/mesh/specimen.glb";
import SuzanneURL from "@/assets/mesh/suzanne.glb";
import PosX from "@/assets/cubemap/sky/contrast/posX.webp";
import PosY from "@/assets/cubemap/sky/contrast/posY.webp";
import PosZ from "@/assets/cubemap/sky/contrast/posZ.webp";
import NegX from "@/assets/cubemap/sky/contrast/negX.webp";
import NegY from "@/assets/cubemap/sky/contrast/negY.webp";
import NegZ from "@/assets/cubemap/sky/contrast/negZ.webp";

type Shape = "specimen" | "suzanne" | "sphere" | "cube";

function init(context: TgdContext, assets: Assets) {
	context.camera.fitSpaceAtTarget(13, 1.1);
	// #begin Initializing WebGL
	const color: ArrayNumber4 = [0.4, 0.8, 1, 0.1];
	const skybox = new TgdTextureCube(context, {
		imagePosX: assets.image.posX,
		imagePosY: assets.image.posY,
		imagePosZ: assets.image.posZ,
		imageNegX: assets.image.negX,
		imageNegY: assets.image.negY,
		imageNegZ: assets.image.negZ,
	});
	const material = new TgdMaterialGlass({
		color,
		ambientColor: skybox,
		lights: [
			new TgdLight({
				color: [1, 0.9, 0.7, 1],
				direction: [-1, -0.5, -1],
			}),
		],
	});
	const specimen = new TgdPainterMeshGltf(context, {
		asset: assets.glb.specimen,
		material,
	});
	const suzanne = new TgdPainterMeshGltf(context, {
		asset: assets.glb.suzanne,
		material,
	});
	const sphere = new TgdPainterMesh(context, {
		geometry: new TgdGeometrySphereIco({ subdivisions: 3 }),
		material,
	});
	const cube = new TgdPainterMesh(context, {
		geometry: new TgdGeometryBox(),
		material,
	});
	// #end
	const meshes: Record<Shape, TgdPainterMesh> = {
		specimen,
		suzanne,
		sphere,
		cube,
	};
	const size = computeSize(specimen);
	fitSize(suzanne, size);
	fitSize(sphere, size);
	fitSize(cube, size);
	activateMesh(meshes, "specimen");
	const clear = new TgdPainterClear(context, {
		color: [0.1, 0.2, 0.3, 1],
		depth: 1,
	});
	context.add(
		clear,
		new TgdPainterState(context, {
			depth: webglPresetDepth.less,
			children: [specimen, suzanne, sphere, cube],
		}),
		new TgdPainterLogic((time) => {
			for (const mesh of Object.values(meshes)) {
				mesh.transfo.setEulerRotation(0, Math.sin(time) * 20, 0);
			}
			const color = TgdColor.fromHSL(time * 0.1, 0.7, 0.1);
			clear.red = color.R;
			clear.green = color.G;
			clear.blue = color.B;
		}),
	);
	context.play();
	return {
		shape(value: Shape) {
			activateMesh(meshes, value);
			context.paint();
		},
		specularExponent(value: number) {
			material.specularExponent = value;
			context.paint();
		},
		specularIntensity(value: number) {
			material.specularIntensity = value;
			context.paint();
		},
		opacityMin(value: number) {
			material.color.w = value;
			context.paint();
		},
		opacityMax(value: number) {
			material.opacityMax = value;
			context.paint();
		},
		roughness(value: number) {
			material.roughness = value;
			context.paint();
		},
		ior(value: number) {
			material.ior = value;
			context.paint();
		},
	};
}

export default function Demo() {
	const ref = React.useRef<ReturnType<typeof init> | null>(null);
	const srv = ref.current;
	const [specularExponent, setSpecularExponent] = useFloat(
		2.2,
		srv?.specularExponent,
	);
	const [specularIntensity, setSpecularIntensity] = useFloat(
		2,
		srv?.specularIntensity,
	);
	const [opacityMin, setOpacityMin] = useFloat(0.1, srv?.opacityMin);
	const [opacityMax, setOpacityMax] = useFloat(0.6, srv?.opacityMax);
	const [roughness, setRoughness] = useFloat(0.05, srv?.roughness);
	const [ior, setIor] = useFloat(1.5, srv?.ior);
	const [shape, setShape] = React.useState<Shape>("specimen");
	const handleShapeChange = (value: Shape) => {
		setShape(value);
		ref.current?.shape(value);
	};
	return (
		<div>
			<View
				onReady={(scene: TgdContext, assets: Assets) => {
					ref.current = init(scene, assets);
				}}
				assets={{
					glb: {
						specimen: SpecimenURL,
						suzanne: SuzanneURL,
					},
					image: {
						posX: PosX,
						posY: PosY,
						posZ: PosZ,
						negX: NegX,
						negY: NegY,
						negZ: NegZ,
					},
				}}
				controller={{
					inertiaOrbit: 1000,
				}}
			>
				<ViewOptions value={shape} onChange={handleShapeChange}>
					<div key="specimen">specimen</div>
					<div key="suzanne">suzanne</div>
					<div key="sphere">sphere</div>
					<div key="cube">cube</div>
				</ViewOptions>
				<ViewPanel
					display="flex"
					flex-wrap="wrap"
					justifyContent="space-around"
					alignItems="center"
					gap="S"
					width="600px"
					maxWidth="600px"
				>
					<ViewInputNumber
						label="specularExponent"
						value={specularExponent}
						onChange={setSpecularExponent}
					/>
					<ViewInputNumber
						label="specularIntensity"
						value={specularIntensity}
						onChange={setSpecularIntensity}
					/>
				</ViewPanel>
				<ViewPanel
					display="flex"
					flex-wrap="wrap"
					justifyContent="space-around"
					alignItems="center"
					gap="S"
					width="600px"
					maxWidth="600px"
				>
					<ViewInputNumber
						label="color alpha"
						value={opacityMin}
						onChange={setOpacityMin}
					/>
					<ViewInputNumber
						label="opacityMax"
						value={opacityMax}
						onChange={setOpacityMax}
					/>
				</ViewPanel>
				<ViewPanel
					display="flex"
					flex-wrap="wrap"
					justifyContent="space-around"
					alignItems="center"
					gap="S"
					width="600px"
					maxWidth="600px"
				>
					<ViewInputNumber
						label="roughness"
						value={roughness}
						onChange={setRoughness}
					/>
					<ViewInputNumber label="ior" value={ior} onChange={setIor} />
				</ViewPanel>
			</View>
		</div>
	);
}

// #begin activateMesh()
function activateMesh(meshes: Record<Shape, TgdPainterMesh>, shape: Shape) {
	for (const key of Object.keys(meshes) as Shape[]) {
		meshes[key].active = key === shape;
	}
}
// #end

// #begin computeSize()
function computeSize(mesh: TgdPainterMesh): number {
	const { min, max } = mesh.computeBoundingBox();
	return Math.max(max.x - min.x, max.y - min.y, max.z - min.z);
}
// #end

// #begin fitSize()
/**
 * Scale the mesh to make its biggest dimension equal to `size`.
 */
function fitSize(mesh: TgdPainterMesh, size: number) {
	const scale = size / computeSize(mesh);
	mesh.transfo.setScale(scale, scale, scale);
}
// #end
