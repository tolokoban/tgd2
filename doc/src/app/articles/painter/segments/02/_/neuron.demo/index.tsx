/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./neuron.demo"

const FOCUS = {"Detail #1":"        const { data, center, bbox } = makeSegmentsData(assets.text.swc);\n        context.camera.transfo.position = center;\n        context.camera.transfo.distance = Math.max(bbox.x, bbox.y, bbox.z);\n        context.camera.far = 10 * context.camera.transfo.distance;\n        context.camera.near = 1e-3;\n        new TgdControllerCameraOrbit(context, {\n            inertiaOrbit: 1000,\n            speedZoom: context.camera.transfo.distance * 1e-3,\n            geo: {\n                minLat: tgdCalcDegToRad(-60),\n                maxLat: tgdCalcDegToRad(60),\n            },\n        });\n        const clear = new TgdPainterClear(context, {\n            color: [0.3, 0.35, 0.4, 1],\n            depth: 1,\n        });\n        const segments = new TgdPainterSegments(context, {\n            dataset: data.makeDataset,\n            roundness: 6,\n            minRadius: .2,\n            material: new TgdMaterialDiffuse(),\n        });\n        const state = new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [clear, segments],\n        });\n        context.add(clear, state);\n        context.paint();"}
const FULL = "import {\n    tgdCalcDegToRad,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterSegments,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View, { Assets } from \"@/components/demo/Tgd\";\n\nimport NeuronURL from \"./AA0622.swc\";\nimport { makeSegmentsData } from \"./swc\";\n\nfunction init(context: TgdContext, assets: Assets) {\n    try {\n        const { data, center, bbox } = makeSegmentsData(assets.text.swc);\n        context.camera.transfo.position = center;\n        context.camera.transfo.distance = Math.max(bbox.x, bbox.y, bbox.z);\n        context.camera.far = 10 * context.camera.transfo.distance;\n        context.camera.near = 1e-3;\n        new TgdControllerCameraOrbit(context, {\n            inertiaOrbit: 1000,\n            speedZoom: context.camera.transfo.distance * 1e-3,\n            geo: {\n                minLat: tgdCalcDegToRad(-60),\n                maxLat: tgdCalcDegToRad(60),\n            },\n        });\n        const clear = new TgdPainterClear(context, {\n            color: [0.3, 0.35, 0.4, 1],\n            depth: 1,\n        });\n        const segments = new TgdPainterSegments(context, {\n            dataset: data.makeDataset,\n            roundness: 6,\n            minRadius: .2,\n            material: new TgdMaterialDiffuse(),\n        });\n        const state = new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [clear, segments],\n        });\n        context.add(clear, state);\n        context.paint();\n    } catch (ex) {\n        console.error(\"Error in neuron demo!\", ex);\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            gizmo\n            onReady={init}\n            assets={{\n                text: {\n                    swc: NeuronURL,\n                },\n            }}\n        />\n    );\n}\n"

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