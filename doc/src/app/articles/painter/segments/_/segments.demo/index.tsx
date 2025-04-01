/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./segments.demo"

const FOCUS = {"Detail #1":"    new TgdControllerCameraOrbit(context, { inertiaOrbit: 1000 })\n    context.camera.transfo.distance = 50\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const data = new TgdPainterSegmentsData()\n    const r = 5\n    const p = new TgdVec3(0, 0, 0)\n    let first = true\n    for (let step = -50; step < 50; step++) {\n        const ang = step * 0.5\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = 1.0 - Math.abs(step) / 50\n        // const x = 0\n        // const y = step * 5\n        // const z = 0\n        // const thickness = 2\n        if (first) first = false\n        else\n            data.add(\n                [p.x, p.y, p.z, thickness],\n                [x, y, z, thickness],\n                [thickness, 0],\n                [thickness, 0]\n            )\n        p.x = x\n        p.y = y\n        p.z = z\n    }\n    const segments = new TgdPainterSegments(context, {\n        makeDataset: data.makeDataset,\n        roundness: 6,\n        minRadius: 4,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(clear, state)\n    context.paint()"}
const FULL = "import {\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdPainterClear,\n    TgdPainterSegments,\n    TgdPainterSegmentsData,\n    TgdPainterState,\n    TgdVec3,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    new TgdControllerCameraOrbit(context, { inertiaOrbit: 1000 })\n    context.camera.transfo.distance = 50\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const data = new TgdPainterSegmentsData()\n    const r = 5\n    const p = new TgdVec3(0, 0, 0)\n    let first = true\n    for (let step = -50; step < 50; step++) {\n        const ang = step * 0.5\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = 1.0 - Math.abs(step) / 50\n        // const x = 0\n        // const y = step * 5\n        // const z = 0\n        // const thickness = 2\n        if (first) first = false\n        else\n            data.add(\n                [p.x, p.y, p.z, thickness],\n                [x, y, z, thickness],\n                [thickness, 0],\n                [thickness, 0]\n            )\n        p.x = x\n        p.y = y\n        p.z = z\n    }\n    const segments = new TgdPainterSegments(context, {\n        makeDataset: data.makeDataset,\n        roundness: 6,\n        minRadius: 4,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(clear, state)\n    context.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} gizmo />\n}\n"

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