import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./logic.demo"

const FOCUS = "    const clear = new TgdPainterClear(ctx, { color: [0, 0, 0, 1] })\n    const logic = new TgdPainterLogic(time => {\n        const a = Math.abs(Math.sin(time * 0.001))\n        clear.red = a\n        clear.green = a * 0.677\n    })\n    ctx.add(clear, logic)\n    ctx.play()"
const FULL = "import { TgdContext, TgdPainterClear, TgdPainterLogic } from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(ctx: TgdContext) {\n    const clear = new TgdPainterClear(ctx, { color: [0, 0, 0, 1] })\n    const logic = new TgdPainterLogic(time => {\n        const a = Math.abs(Math.sin(time * 0.001))\n        clear.red = a\n        clear.green = a * 0.677\n    })\n    ctx.add(clear, logic)\n    ctx.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return <>
        <div className="half-left"><Demo /></div>
        <div className="half-right">
            <button
                style={{ all: "inherit", display: "contents" }}
                onClick={() => setFull(!full)}
            >
                <ViewPanel display="flex" gap={".5em"}>
                    <input type="checkbox" checked={full} onChange={() => setFull(!full)}/>
                    <label style={{ cursor: "pointer" }}>
                        Afficher le code complet
                    </label>
                </ViewPanel>
            </button>
            <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
        </div>
    </>
}