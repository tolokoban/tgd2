/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./basic.demo"

const FOCUS = {"Detail #1":"    const clear = new TgdPainterClear(ctx, { color: [0.5, 0.5, 0.5, 1] })\n    ctx.add(clear)\n    ctx.paint()\n    ctx.inputs.pointer.eventTap.addListener(() => {\n        const { red, green, blue } = clear\n        const R = Math.random()\n        const G = Math.random()\n        const B = Math.random()\n        ctx.animSchedule({\n            duration: 1,\n            action(t) {\n                clear.red = tgdCalcMix(red, R, t)\n                clear.green = tgdCalcMix(green, G, t)\n                clear.blue = tgdCalcMix(blue, B, t)\n            },\n        })\n    })"}
const FULL = "import {\n    tgdCalcMix,\n    TgdContext,\n    TgdPainterClear,\n    TgdVec4,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(ctx: TgdContext) {\n    const clear = new TgdPainterClear(ctx, { color: [0.5, 0.5, 0.5, 1] })\n    ctx.add(clear)\n    ctx.paint()\n    ctx.inputs.pointer.eventTap.addListener(() => {\n        const { red, green, blue } = clear\n        const R = Math.random()\n        const G = Math.random()\n        const B = Math.random()\n        ctx.animSchedule({\n            duration: 1,\n            action(t) {\n                clear.red = tgdCalcMix(red, R, t)\n                clear.green = tgdCalcMix(green, G, t)\n                clear.blue = tgdCalcMix(blue, B, t)\n            },\n        })\n    })\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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