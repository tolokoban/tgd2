import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Column from "@/components/Column"
import CodeViewer from "@/components/CodeViewer"
import Demo from "./main.demo"

const FOCUS = "function init(canvas: HTMLCanvasElement | null) {\n    if (!canvas) return\n\n    const scene = new TgdScene(canvas)\n    scene.addPainter(new TgdPainterClear(scene, { color: [1, 0.7, 0, 1] }))\n    canvas.addEventListener(\"dblclick\", () => scene.toggleFullscreen())\n}"
const FULL = "import { TgdPainterClear, TgdScene } from \"@tolokoban/tgd\"\n\nfunction init(canvas: HTMLCanvasElement | null) {\n    if (!canvas) return\n\n    const scene = new TgdScene(canvas)\n    scene.addPainter(new TgdPainterClear(scene, { color: [1, 0.7, 0, 1] }))\n    canvas.addEventListener(\"dblclick\", () => scene.toggleFullscreen())\n}\n\nexport default function Demo() {\n    return (\n        <canvas\n            ref={init}\n            style={{ width: \"100%\", height: \"50vh\" }}\n            title=\"Double-clic pour plein écran\"\n        ></canvas>\n    )\n}\n"

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