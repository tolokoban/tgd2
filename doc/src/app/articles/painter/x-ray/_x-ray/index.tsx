/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./x-ray.demo"

const FOCUS = {"Initializing WebGL":"    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const brain = new TgdPainterXRay(context, {\n        geometry: new TgdGeometryGltf({ data: assets.glb.brain }),\n    })\n    const suzanne = new TgdPainterXRay(context, {\n        color: [1, 0.1, 0.1, 1],\n        exponent: 5,\n        intensity: 10,\n        geometry: new TgdGeometryGltf({\n            data: assets.glb.suzanne,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        children: [brain, suzanne],\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n    })\n    context.add(clear, state)\n    context.paint()\n    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 2000,\n    })"}
const FULL = "import {\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometryGltf,\n    TgdPainterXRay,\n    TgdPainterClear,\n    TgdPainterState,\n    webglPresetCull,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport BrainURL from \"@/assets/mesh/brain.glb\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const brain = new TgdPainterXRay(context, {\n        geometry: new TgdGeometryGltf({ data: assets.glb.brain }),\n    })\n    const suzanne = new TgdPainterXRay(context, {\n        color: [1, 0.1, 0.1, 1],\n        exponent: 5,\n        intensity: 10,\n        geometry: new TgdGeometryGltf({\n            data: assets.glb.suzanne,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        children: [brain, suzanne],\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n    })\n    context.add(clear, state)\n    context.paint()\n    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 2000,\n    })\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    brain: BrainURL,\n                    suzanne: SuzanneURL,\n                },\n            }}\n        />\n    )\n}\n"

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