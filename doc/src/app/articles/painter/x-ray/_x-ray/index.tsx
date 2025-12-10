/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./x-ray.demo"

const FOCUS = {"Initializing WebGL":"    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const brain = new TgdPainterXRay(context, {\n        color: [0.1, 0.2, 1, 1],\n        exponent: 1.2,\n        intensity: 4,\n        geometry: new TgdGeometryGltf({ data: assets.glb.brain }),\n    })\n    const suzanne = new TgdPainterXRay(context, {\n        color: [1, 0.333, 0.1, 1],\n        exponent: 5,\n        intensity: 20,\n        geometry: new TgdGeometryGltf({\n            data: assets.glb.suzanne,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        children: [brain, suzanne],\n        depth: webglPresetDepth.less,\n    })\n    context.add(clear, state)\n    context.paint()\n    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 2000,\n    })"}
const FULL = "import {\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometryGltf,\n    TgdPainterXRay,\n    TgdPainterClear,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport BrainURL from \"@/assets/mesh/brain.glb\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const brain = new TgdPainterXRay(context, {\n        color: [0.1, 0.2, 1, 1],\n        exponent: 1.2,\n        intensity: 4,\n        geometry: new TgdGeometryGltf({ data: assets.glb.brain }),\n    })\n    const suzanne = new TgdPainterXRay(context, {\n        color: [1, 0.333, 0.1, 1],\n        exponent: 5,\n        intensity: 20,\n        geometry: new TgdGeometryGltf({\n            data: assets.glb.suzanne,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        children: [brain, suzanne],\n        depth: webglPresetDepth.less,\n    })\n    context.add(clear, state)\n    context.paint()\n    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 2000,\n    })\n    return (uniforms: Record<string, number>) => {\n        const exponent1 = uniforms.exponent1 ?? 1.2\n        const intensity1 = uniforms.intensity1 ?? 4\n        brain.exponent = exponent1\n        brain.intensity = intensity1\n        const exponent2 = uniforms.exponent2 ?? 5\n        const intensity2 = uniforms.intensity2 ?? 20\n        suzanne.exponent = exponent2\n        suzanne.intensity = intensity2\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    brain: BrainURL,\n                    suzanne: SuzanneURL,\n                },\n            }}\n            settings={{\n                exponent1: {\n                    label: \"exponent (brain)\",\n                    value: 1.2,\n                    min: -20,\n                    max: 20,\n                },\n                intensity1: {\n                    label: \"intentity (brain)\",\n                    value: 4,\n                    min: 0,\n                    max: 20,\n                },\n                exponent2: {\n                    label: \"exponent (monkey)\",\n                    value: 5,\n                    min: -20,\n                    max: 20,\n                },\n                intensity2: {\n                    label: \"intentity (monkey)\",\n                    value: 20,\n                    min: 0,\n                    max: 20,\n                },\n            }}\n        />\n    )\n}\n"

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