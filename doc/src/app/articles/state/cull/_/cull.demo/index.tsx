/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./cull.demo"

const FOCUS = {"Detail #1":"    const camera = new TgdCameraPerspective({\n        transfo: { distance: 5 },\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    ctx.camera = camera\n    new TgdControllerCameraOrbit(ctx, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n    })\n    ctx.add(\n        new TgdPainterClear(ctx, {\n            depth: 1,\n            stencil: 0,\n        }),\n        new TgdPainterBackground(ctx, {\n            texture: new TgdTexture2D(ctx).loadBitmap(BackgroundURL),\n        }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.front,\n            children: [\n                new TgdPainterMeshGltf(ctx, {\n                    asset: assets.glb.suzanne,\n                    materialFactory: () =>\n                        new TgdMaterialHull({\n                            color: [0, 0, 0, 1],\n                            expansion: 0.05,\n                        }),\n                }),\n            ],\n        }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n            children: [\n                new TgdPainterMeshGltf(ctx, {\n                    asset: assets.glb.suzanne,\n                }),\n            ],\n        })\n    )\n    ctx.paint()"}
const FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialHull,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetCull,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"@/assets/image/dino.webp\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(ctx: TgdContext, assets: Assets) {\n    const camera = new TgdCameraPerspective({\n        transfo: { distance: 5 },\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    ctx.camera = camera\n    new TgdControllerCameraOrbit(ctx, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n    })\n    ctx.add(\n        new TgdPainterClear(ctx, {\n            depth: 1,\n            stencil: 0,\n        }),\n        new TgdPainterBackground(ctx, {\n            texture: new TgdTexture2D(ctx).loadBitmap(BackgroundURL),\n        }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.front,\n            children: [\n                new TgdPainterMeshGltf(ctx, {\n                    asset: assets.glb.suzanne,\n                    materialFactory: () =>\n                        new TgdMaterialHull({\n                            color: [0, 0, 0, 1],\n                            expansion: 0.05,\n                        }),\n                }),\n            ],\n        }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n            children: [\n                new TgdPainterMeshGltf(ctx, {\n                    asset: assets.glb.suzanne,\n                }),\n            ],\n        })\n    )\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            options={{\n                depth: true,\n                antialias: true,\n            }}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n            }}\n        />\n    )\n}\n"

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return <>
        <div className="half-left"><Demo /></div>
        <div className="half-right">
            <div>
                <ViewButton variant="elevated" onClick={() => setFull(!full)}>
                    {full ? "Show code details" : "Show full code"}
                </ViewButton>
            </div>
            <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
        </div>
    </>
}