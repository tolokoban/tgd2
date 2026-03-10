/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n    const { camera } = context\n    if (camera instanceof TgdCameraPerspective) {\n        camera.near = 0.1\n        camera.far = 10\n    }\n    camera.fitSpaceAtTarget(2.2, 2.2)\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [new TgdPainterMesh(context)],\n        }),\n        new TgdPainterState(context, {\n            depth: \"off\",\n            blend: \"alpha\",\n            children: [new TgdPainterGizmo(context, { size: 256 })],\n        }),\n    )\n    context.paint()\n}"}
const FULL = "import {\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterGizmo,\n    TgdPainterMesh,\n    TgdPainterState,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const { camera } = context\n    if (camera instanceof TgdCameraPerspective) {\n        camera.near = 0.1\n        camera.far = 10\n    }\n    camera.fitSpaceAtTarget(2.2, 2.2)\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [new TgdPainterMesh(context)],\n        }),\n        new TgdPainterState(context, {\n            depth: \"off\",\n            blend: \"alpha\",\n            children: [new TgdPainterGizmo(context, { size: 256 })],\n        }),\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            disableDefaultDoubleTap\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n                alpha: false,\n                antialias: true,\n                premultipliedAlpha: false,\n            }}\n        />\n    )\n}\n"

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