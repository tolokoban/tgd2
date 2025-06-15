/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./_material.demo"

const FOCUS = {"Initializing WebGL":"    const material = new TgdMaterialHull({\n        color: [1, 1, 1, 1],\n    })\n    const mesh = new TgdPainterMeshGltf(ctx, {\n        asset: assets.glb.suzane,\n        material,\n    })"}
const FULL = "import {\n    tgdCalcClamp,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialDiffuse,\n    TgdMaterialHull,\n    TgdMaterialToon,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(ctx: TgdContext, assets: Assets) {\n    const material2 = new TgdMaterialToon({\n        color: [1, 0.667, 0, 1],\n        specularSharpness: 1,\n    })\n    const mesh2 = new TgdPainterMeshGltf(ctx, {\n        asset: assets.glb.suzane,\n        material: material2,\n    })\n    const material = new TgdMaterialHull({\n        color: [1, 1, 1, 1],\n    })\n    const mesh = new TgdPainterMeshGltf(ctx, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    ctx.add(\n        new TgdPainterClear(ctx, {\n            color: [0.2, 0.3, 0.4, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            children: [mesh2, mesh],\n        }),\n        new TgdPainterLogic(time => {\n            material.zShift = tgdCalcClamp(\n                (1 + Math.sin(time * 0.5)) * 0.05,\n                0,\n                0.25\n            )\n        })\n    )\n    ctx.play()\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 10000,\n    })\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzane: SuzaneURL,\n                },\n            }}\n            gizmo\n        />\n    )\n}\n"

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