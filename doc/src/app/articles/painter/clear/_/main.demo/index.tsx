import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Column from "@/components/demo/Column"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = "function init(canvas: HTMLCanvasElement): TgdContext {\n    console.log(\"TR\", 1)\n    const ctx = new TgdContext(canvas)\n    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })\n    ctx.add(clear)\n    canvas.addEventListener(\"click\", () => {\n        clear.red = Math.random()\n        clear.green = Math.random()\n        clear.blue = Math.random()\n        ctx.paint()\n    })\n    ctx.paint()\n    return ctx\n}"
const FULL = "import { TgdContext, TgdPainterClear } from \"@tolokoban/tgd\"\n\nfunction init(canvas: HTMLCanvasElement): TgdContext {\n    console.log(\"TR\", 1)\n    const ctx = new TgdContext(canvas)\n    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })\n    ctx.add(clear)\n    canvas.addEventListener(\"click\", () => {\n        clear.red = Math.random()\n        clear.green = Math.random()\n        clear.blue = Math.random()\n        ctx.paint()\n    })\n    ctx.paint()\n    return ctx\n}\n\nexport default function Demo() {\n    const handleMount = (canvas: HTMLCanvasElement | null) => {\n        if (canvas) init(canvas)\n    }\n    return (\n        <canvas\n            ref={handleMount}\n            style={{\n                width: \"100%\",\n                height: \"128px\",\n                background: \"#000\",\n            }}\n        ></canvas>\n    )\n}\n"

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return <>
        <Column align="halfLeft"><Demo /></Column>
        <Column align="halfRight">
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
        </Column>
    </>
}