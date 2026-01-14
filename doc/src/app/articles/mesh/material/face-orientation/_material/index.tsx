/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./_material.demo"

const FOCUS = {"Initializing WebGL":"    const material = new TgdMaterialFaceOrientation()\n    const mesh = new TgdPainterMeshGltf(ctx, {\n        asset: assets.glb.suzane,\n        material,\n    })"}
const FULL = "import {\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialFaceOrientation,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne-with-hole.glb\"\n\nfunction init(ctx: TgdContext, assets: Assets) {\n    const material = new TgdMaterialFaceOrientation()\n    const mesh = new TgdPainterMeshGltf(ctx, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    ctx.add(\n        new TgdPainterClear(ctx, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            children: [mesh],\n        })\n    )\n    ctx.paint()\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 5000,\n    })\n    ctx.camera.transfo.distance = 4\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzane: SuzaneURL,\n                },\n            }}\n            gizmo\n        />\n    )\n}\n"

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