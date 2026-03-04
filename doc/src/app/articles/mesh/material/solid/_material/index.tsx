/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./_material.demo"

const FOCUS = {"Initializing WebGL":"    const material = new TgdMaterialSolid({\n        color: [...tgdCalcRandom3(), 1],\n    })\n    const mesh = new TgdPainterMeshGltf(ctx, {\n        asset: assets.glb.suzane,\n        material,\n    })"}
const FULL = "import {\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialSolid,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    tgdCalcRandom3,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nfunction init(ctx: TgdContext, assets: Assets) {\n    const material = new TgdMaterialSolid({\n        color: [...tgdCalcRandom3(), 1],\n    })\n    const mesh = new TgdPainterMeshGltf(ctx, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    ctx.add(\n        new TgdPainterClear(ctx, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            children: [mesh],\n        }),\n    )\n    ctx.paint()\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 2000,\n    })\n    return (settings: Record<\"red\" | \"green\" | \"blue\", number>) => {\n        material.color.x = settings.red\n        material.color.y = settings.green\n        material.color.z = settings.blue\n        ctx.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzane: SuzaneURL,\n                },\n            }}\n            settings={{\n                red: {\n                    label: \"Red\",\n                    value: 1,\n                    min: 0,\n                    max: 1,\n                    step: 1 / 16,\n                },\n                green: {\n                    label: \"Green\",\n                    value: 1,\n                    min: 0,\n                    max: 1,\n                    step: 1 / 16,\n                },\n                blue: {\n                    label: \"Blue\",\n                    value: 1,\n                    min: 0,\n                    max: 1,\n                    step: 1 / 16,\n                },\n            }}\n            gizmo\n        />\n    )\n}\n"

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