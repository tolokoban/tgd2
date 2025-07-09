/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./segments.demo"

const FOCUS = {"Detail #1":"    new TgdControllerCameraOrbit(context, { inertiaOrbit: 1000 })\n    context.camera.transfo.distance = 50\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const data = new TgdPainterSegmentsData()\n    const radius = 10\n    const nodes: ArrayNumber4[] = []\n    const width = 50\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes.push([x, y, z, thickness])\n    }\n    for (let i = 1; i < nodes.length; i++) {\n        data.add(nodes[i - 1], nodes[i])\n    }\n    const segments = new TgdPainterSegments(context, {\n        makeDataset: data.makeDataset,\n        roundness: 6,\n        minRadius: 4,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(clear, state)\n    context.paint()"}
const FULL = "import {\n    ArrayNumber4,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdPainterClear,\n    TgdPainterSegments,\n    TgdPainterSegmentsData,\n    TgdPainterState,\n    TgdVec3,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    new TgdControllerCameraOrbit(context, { inertiaOrbit: 1000 })\n    context.camera.transfo.distance = 50\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const data = new TgdPainterSegmentsData()\n    const radius = 10\n    const nodes: ArrayNumber4[] = []\n    const width = 50\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes.push([x, y, z, thickness])\n    }\n    for (let i = 1; i < nodes.length; i++) {\n        data.add(nodes[i - 1], nodes[i])\n    }\n    const segments = new TgdPainterSegments(context, {\n        makeDataset: data.makeDataset,\n        roundness: 6,\n        minRadius: 4,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(clear, state)\n    context.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} gizmo />\n}\n"

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