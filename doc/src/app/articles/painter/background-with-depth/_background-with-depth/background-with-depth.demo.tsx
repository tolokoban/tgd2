import React from "react";
import { useDebouncedEffect, ViewInputNumber } from "@tolokoban/ui";
import {
	tgdCalcModulo,
	TgdContext,
	tgdMakeMeshGlbPainter,
	TgdMaterialDepth,
	TgdPainterBackgroundWithDepth,
	TgdPainterLogic,
	TgdPainterMesh,
	TgdPainterState,
	TgdTexture2D,
	webglPresetCull,
	webglPresetDepth,
} from "@tolokoban/tgd";

import View, { Assets } from "@/components/demo/Tgd";

import BackgroundIMG from "./background.webp";
import BackgroundGLB from "./background.glb";

function init(context: TgdContext, assets: Assets) {
	// #begin Initializing WebGL
	context.camera = assets.glb.background.createCameraByName("Camera");
	context.camera.far = 100;
	const depthMaker = new TgdPainterState(context, {
		cull: webglPresetCull.back,
		children: [
			tgdMakeMeshGlbPainter({
				context,
				data: assets.glb.background,
				node: "Building",
				overrideMaterial: () => () => new TgdMaterialDepth(),
			}).painter,
		],
	});
	const background = new TgdPainterBackgroundWithDepth(context, {
		background: new TgdTexture2D(context).loadBitmap(assets.image.background),
		children: [depthMaker],
	});
	const cube1 = new TgdPainterMesh(context);
	cube1.transfo.setPosition(11.02, 0, -8.75).setScale(4);
	const cube2 = new TgdPainterMesh(context);
	cube2.transfo.setPosition(0.02, 0, -4).setScale(4);
	context.add(
		background,
		new TgdPainterState(context, {
			depth: webglPresetDepth.less,
			children: [cube1, cube2],
		}),
		new TgdPainterLogic((time) => {
			const mod = tgdCalcModulo(time * 0.1, 0, 2);
			let y1 = 0;
			if (mod < 1) y1 = mod * 25;
			else y1 = 25 * (2 - mod);
			const { x: x1, z: z1 } = cube1.transfo.position;
			cube1.transfo.setPosition(x1, y1, z1);
			cube1.transfo.setEulerRotation(time, time * 47, -time * 120);
			let y2 = 0;
			if (mod < 1) y2 = mod * 30;
			else y2 = 30 * (2 - mod);
			const { x: x2, z: z2 } = cube2.transfo.position;
			cube2.transfo.setPosition(x2, y2, z2);
			cube2.transfo.setEulerRotation(time, time * 57, -time * 103);
		}),
	);
	context.play();
	// #end
	return background;
}

export default function Demo() {
	//   const [material, setMaterial] = useMaterial();
	//   const [min, setMin] = React.useState(material.min);
	//   const [max, setMax] = React.useState(material.max);
	//   useDebouncedEffect(
	//     () => {
	//       material.min = min;
	//       material.max = max;
	//     },
	//     [min, max],
	//     400
	//   );
	return (
		<View
			onReady={(context, assets) => {
				init(context, assets);
				// setMaterial(init(context, assets));
			}}
			options={{
				antialias: false,
			}}
			assets={{
				glb: { background: BackgroundGLB },
				image: { background: BackgroundIMG },
			}}
		></View>
	);
}

function useMaterial(): [
	{ min: number; max: number },
	(mat: { min: number; max: number }) => void,
] {
	const refMaterial = React.useRef<{ min: number; max: number } | null>(null);
	if (!refMaterial.current) refMaterial.current = { min: 0.992, max: 1 };

	return [
		refMaterial.current,
		(mat: { min: number; max: number }) => (refMaterial.current = mat),
	];
}
