import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Column from "@/components/Column"
import CodeViewer from "@/components/CodeViewer"
import Demo from "./main.demo"

const FOCUS = "function createScene(canvas: HTMLCanvasElement): TgdScene {\n    const scene = new TgdScene(canvas)\n    const clear = new TgdPainterClear(scene, { color: [0.5, 0.5, 0.5, 1] })\n    const logic = new TgdPainterLogic((_time, delay) => {\n        const speed = delay * 0.001\n        if (scene.inputs.key(\"r\")) {\n            clear.red = Math.max(0, clear.red - speed)\n        }\n        if (scene.inputs.key(\"g\")) {\n            clear.red = Math.max(0, clear.green - speed)\n        }\n        if (scene.inputs.key(\"b\")) {\n            clear.red = Math.max(0, clear.blue - speed)\n        }\n        if (scene.inputs.key(\"R\")) {\n            clear.red = Math.max(0, clear.red + speed)\n        }\n        if (scene.inputs.key(\"G\")) {\n            clear.red = Math.max(0, clear.green + speed)\n        }\n        if (scene.inputs.key(\"B\")) {\n            clear.red = Math.max(0, clear.blue + speed)\n        }\n    })\n    scene.addPainter(clear, logic)\n    scene.animate = true\n    return scene\n}"
const FULL = "import { TgdPainterClear, TgdPainterLogic, TgdScene } from \"@tolokoban/tgd\"\n\nfunction createScene(canvas: HTMLCanvasElement): TgdScene {\n    const scene = new TgdScene(canvas)\n    const clear = new TgdPainterClear(scene, { color: [0.5, 0.5, 0.5, 1] })\n    const logic = new TgdPainterLogic((_time, delay) => {\n        const speed = delay * 0.001\n        if (scene.inputs.key(\"r\")) {\n            clear.red = Math.max(0, clear.red - speed)\n        }\n        if (scene.inputs.key(\"g\")) {\n            clear.red = Math.max(0, clear.green - speed)\n        }\n        if (scene.inputs.key(\"b\")) {\n            clear.red = Math.max(0, clear.blue - speed)\n        }\n        if (scene.inputs.key(\"R\")) {\n            clear.red = Math.max(0, clear.red + speed)\n        }\n        if (scene.inputs.key(\"G\")) {\n            clear.red = Math.max(0, clear.green + speed)\n        }\n        if (scene.inputs.key(\"B\")) {\n            clear.red = Math.max(0, clear.blue + speed)\n        }\n    })\n    scene.addPainter(clear, logic)\n    scene.animate = true\n    return scene\n}\n\nexport default function Demo() {\n    const handleMount = (canvas: HTMLCanvasElement | null) => {\n        if (!canvas) return\n\n        const scene = createScene(canvas)\n        scene.canvas.addEventListener(\"dblclick\", () =>\n            scene.toggleFullscreen()\n        )\n    }\n    return (\n        <canvas\n            ref={handleMount}\n            style={{ width: \"100%\", height: \"50vh\" }}\n            title=\"Double-clic pour plein écran\"\n        ></canvas>\n    )\n}\n"

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
                    <input type="checkbox" checked={full} />
                    <label style={{ cursor: "pointer" }}>
                        Afficher le code complet
                    </label>
                </ViewPanel>
            </button>
            <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
        </Column>
    </>
}