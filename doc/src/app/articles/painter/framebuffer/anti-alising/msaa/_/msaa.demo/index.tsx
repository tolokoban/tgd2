/**
 * Warning! This code has been generated automatically.
 */
import React from "react";
import { ViewButton } from "@tolokoban/ui";
import CodeViewer from "@/components/demo/CodeViewer";
import Demo from "./msaa.demo";

const FOCUS = {
	"Detail #1":
		'    context.camera.fitSpaceAtTarget(1.5, 1.5)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0, 0, 0, 1],\n    })\n    const color = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const mesh = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ uvs: "3x2" }),\n        material: new TgdMaterialDiffuse({\n            color,\n            lockLightsToCamera: true,\n        }),\n    })\n    mesh.transfo.setEulerRotation(36, 60, 0)\n    const meshPainter = new TgdPainterState(context, {\n        depth: "less",\n        children: [clear, mesh],\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: true,\n        viewportMatchingScale: 1 / 8,\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                magFilter: "NEAREST",\n                minFilter: "NEAREST",\n            },\n        }),\n        children: [clear, meshPainter],\n    })\n    const filters = new TgdPainterFilter(context, {\n        texture: framebuffer.textureColor0,\n        filters: [],\n        flipY: true,\n    })\n    context.add(framebuffer, filters)\n    context.paint()\n    return ({ antiAliasing }: { antiAliasing: number }) => {\n        framebuffer.antiAliasing = antiAliasing === 1\n        context.paint()\n    }',
};
const FULL =
	'import {\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdGeometryBox,\n    TgdMaterialDiffuse,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport GridURL from "@/assets/image/uv-grid-3x2.webp"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.fitSpaceAtTarget(1.5, 1.5)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0, 0, 0, 1],\n    })\n    const color = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const mesh = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ uvs: "3x2" }),\n        material: new TgdMaterialDiffuse({\n            color,\n            lockLightsToCamera: true,\n        }),\n    })\n    mesh.transfo.setEulerRotation(36, 60, 0)\n    const meshPainter = new TgdPainterState(context, {\n        depth: "less",\n        children: [clear, mesh],\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: true,\n        viewportMatchingScale: 1 / 8,\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                magFilter: "NEAREST",\n                minFilter: "NEAREST",\n            },\n        }),\n        children: [clear, meshPainter],\n    })\n    const filters = new TgdPainterFilter(context, {\n        texture: framebuffer.textureColor0,\n        filters: [],\n        flipY: true,\n    })\n    context.add(framebuffer, filters)\n    context.paint()\n    return ({ antiAliasing }: { antiAliasing: number }) => {\n        framebuffer.antiAliasing = antiAliasing === 1\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{ inertiaOrbit: 1000 }}\n            assets={{\n                image: { grid: GridURL },\n            }}\n            settings={{\n                antiAliasing: {\n                    label: "antiAliasing",\n                    value: 0,\n                    step: ["false", "true"],\n                },\n            }}\n        />\n    )\n}\n';

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
