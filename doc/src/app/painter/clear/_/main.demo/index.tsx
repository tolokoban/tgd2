import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Column from "@/components/Column"
import CodeViewer from "@/components/CodeViewer"
import Demo from "./main.demo"

const FOCUS = "function createScene(canvas: HTMLCanvasElement): TgdScene {\n    const scene = new TgdScene(canvas)\n    const clear = new TgdPainterClear(scene, { color: [1, 0.7, 0, 1] })\n    scene.addPainter(clear)\n    canvas.addEventListener(\"click\", () => {\n        clear.red = Math.random()\n        clear.green = Math.random()\n        clear.blue = Math.random()\n        scene.paint()\n    })\n    return scene\n}"
const FULL = "import { TgdPainterClear, TgdScene } from \"@tolokoban/tgd\"\n\nfunction createScene(canvas: HTMLCanvasElement): TgdScene {\n    const scene = new TgdScene(canvas)\n    const clear = new TgdPainterClear(scene, { color: [1, 0.7, 0, 1] })\n    scene.addPainter(clear)\n    canvas.addEventListener(\"click\", () => {\n        clear.red = Math.random()\n        clear.green = Math.random()\n        clear.blue = Math.random()\n        scene.paint()\n    })\n    return scene\n}\n\nexport default function Demo() {\n    const handleMount = (canvas: HTMLCanvasElement | null) => {\n        if (!canvas) return\n\n        const scene = createScene(canvas)\n        scene.canvas.addEventListener(\"dblclick\", () =>\n            scene.toggleFullscreen()\n        )\n    }\n    return (\n        <canvas\n            ref={handleMount}\n            style={{ width: \"100%\", height: \"50vh\" }}\n            title=\"Double-clic pour plein écran\"\n        ></canvas>\n    )\n}\n"

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