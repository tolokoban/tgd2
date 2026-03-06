/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./framebuffer.demo"

const FOCUS = {"Detail #1":"    context.camera.transfo.distance = 5\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n    })\n    const mesh = new TgdPainterMesh(context)\n    const meshPainter = new TgdPainterState(context, {\n        depth: \"less\",\n        children: [clear, mesh],\n    })\n    context.add(\n        meshPainter,\n        new TgdPainterLogic((time, delta) => {\n            mesh.transfo.orbitAroundX(delta * Math.sin(time))\n            mesh.transfo.orbitAroundZ(delta * 1.341)\n        }),\n    )\n    context.play()"}
const FULL = "import { TgdContext, TgdPainterClear, TgdPainterLogic, TgdPainterMesh, TgdPainterState } from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    context.camera.transfo.distance = 5\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n    })\n    const mesh = new TgdPainterMesh(context)\n    const meshPainter = new TgdPainterState(context, {\n        depth: \"less\",\n        children: [clear, mesh],\n    })\n    context.add(\n        meshPainter,\n        new TgdPainterLogic((time, delta) => {\n            mesh.transfo.orbitAroundX(delta * Math.sin(time))\n            mesh.transfo.orbitAroundZ(delta * 1.341)\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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