/**
 * Warning! This code has been generated automatically.
 */
import React from "react";
import { ViewButton } from "@tolokoban/ui";
import CodeViewer from "@/components/demo/CodeViewer";
import Demo from "./background-with-depth.demo";

const FOCUS = {
	"Initializing WebGL":
		'    context.camera = assets.glb.background.createCameraByName("Camera")\n    context.camera.far = 100\n    const depthMaker = new TgdPainterState(context, {\n        cull: webglPresetCull.back,\n        children: [\n            tgdMakeMeshGlbPainter({\n                context,\n                data: assets.glb.background,\n                node: "Building",\n                overrideMaterial: () => () => new TgdMaterialDepth(),\n            }).painter,\n        ],\n    })\n    const background = new TgdPainterBackgroundWithDepth(context, {\n        background: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        children: [depthMaker],\n    })\n    const cube1 = new TgdPainterMesh(context)\n    cube1.transfo.setPosition(11.02, 0, -8.75).setScale(4)\n    const cube2 = new TgdPainterMesh(context)\n    cube2.transfo.setPosition(0.02, 0, -4).setScale(4)\n    context.add(\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [cube1, cube2],\n        }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2)\n            let y1 = 0\n            if (mod < 1) y1 = mod * 25\n            else y1 = 25 * (2 - mod)\n            const { x: x1, z: z1 } = cube1.transfo.position\n            cube1.transfo.setPosition(x1, y1, z1)\n            cube1.transfo.setEulerRotation(time, time * 47, -time * 120)\n            let y2 = 0\n            if (mod < 1) y2 = mod * 30\n            else y2 = 30 * (2 - mod)\n            const { x: x2, z: z2 } = cube2.transfo.position\n            cube2.transfo.setPosition(x2, y2, z2)\n            cube2.transfo.setEulerRotation(time, time * 57, -time * 103)\n        }),\n    )\n    context.play()',
};
const FULL =
	'import React from "react"\nimport { useDebouncedEffect, ViewInputNumber } from "@tolokoban/ui"\nimport {\n    tgdCalcModulo,\n    type TgdContext,\n    tgdMakeMeshGlbPainter,\n    TgdMaterialDepth,\n    TgdPainterBackgroundWithDepth,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetCull,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BackgroundIMG from "./background.webp"\nimport BackgroundGLB from "./background.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera = assets.glb.background.createCameraByName("Camera")\n    context.camera.far = 100\n    const depthMaker = new TgdPainterState(context, {\n        cull: webglPresetCull.back,\n        children: [\n            tgdMakeMeshGlbPainter({\n                context,\n                data: assets.glb.background,\n                node: "Building",\n                overrideMaterial: () => () => new TgdMaterialDepth(),\n            }).painter,\n        ],\n    })\n    const background = new TgdPainterBackgroundWithDepth(context, {\n        background: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        children: [depthMaker],\n    })\n    const cube1 = new TgdPainterMesh(context)\n    cube1.transfo.setPosition(11.02, 0, -8.75).setScale(4)\n    const cube2 = new TgdPainterMesh(context)\n    cube2.transfo.setPosition(0.02, 0, -4).setScale(4)\n    context.add(\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [cube1, cube2],\n        }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2)\n            let y1 = 0\n            if (mod < 1) y1 = mod * 25\n            else y1 = 25 * (2 - mod)\n            const { x: x1, z: z1 } = cube1.transfo.position\n            cube1.transfo.setPosition(x1, y1, z1)\n            cube1.transfo.setEulerRotation(time, time * 47, -time * 120)\n            let y2 = 0\n            if (mod < 1) y2 = mod * 30\n            else y2 = 30 * (2 - mod)\n            const { x: x2, z: z2 } = cube2.transfo.position\n            cube2.transfo.setPosition(x2, y2, z2)\n            cube2.transfo.setEulerRotation(time, time * 57, -time * 103)\n        }),\n    )\n    context.play()\n    return background\n}\n\nexport default function Demo() {\n    //   const [material, setMaterial] = useMaterial();\n    //   const [min, setMin] = React.useState(material.min);\n    //   const [max, setMax] = React.useState(material.max);\n    //   useDebouncedEffect(\n    //     () => {\n    //       material.min = min;\n    //       material.max = max;\n    //     },\n    //     [min, max],\n    //     400\n    //   );\n    return (\n        <View\n            onReady={(context, assets) => {\n                init(context, assets)\n                // setMaterial(init(context, assets));\n            }}\n            options={{\n                antialias: false,\n            }}\n            assets={{\n                glb: { background: BackgroundGLB },\n                image: { background: BackgroundIMG },\n            }}></View>\n    )\n}\n\nfunction useMaterial(): [{ min: number; max: number }, (mat: { min: number; max: number }) => void] {\n    const refMaterial = React.useRef<{ min: number; max: number } | null>(null)\n    if (!refMaterial.current) refMaterial.current = { min: 0.992, max: 1 }\n\n    return [refMaterial.current, (mat: { min: number; max: number }) => (refMaterial.current = mat)]\n}\n';

export default function DemoContainer() {
	const [full, setFull] = React.useState(false);
	return (
		<>
			<div className="half-left">
				<Demo />
			</div>
			<div className="half-right">
				<div>
					<ViewButton variant="elevated" onClick={() => setFull(!full)}>
						{full ? "Show code details" : "Show full code"}
					</ViewButton>
				</div>
				<CodeViewer language="tsx" value={full ? FULL : FOCUS} />
			</div>
		</>
	);
}
