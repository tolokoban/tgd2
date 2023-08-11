import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Column from "@/components/Column"
import CodeViewer from "@/components/CodeViewer"
import Demo from "./main.demo"

const FOCUS = "function createScene(canvas: HTMLCanvasElement): TgdScene {\n    const TAU = 2 * Math.PI\n    const data: number[] = [0, 0]\n    console.log(intervals(0, 1, 100))\n    intervals(0.1 * TAU, 0.9 * TAU, 64).forEach(angle => {\n        data.push(1, angle)\n    })\n    const attributes = new TgdAttributes({\n        attPos: 2,\n    })\n    attributes.set(\"attPos\", new Float32Array(data))\n    const scene = new TgdScene(canvas)\n    const clear = new TgdPainterClear(scene, {\n        color: [0, 0.5, 0.8, 1],\n    })\n    const primitive = new TgdPainterPrimitive(scene, {\n        compute: VERT,\n        attributes,\n        mode: \"TRIANGLE_FAN\",\n        red: 1,\n        green: 0.7,\n        blue: 0,\n    })\n    primitive.updateAttributes(data.length / 2)\n    scene.addPainter(clear, primitive)\n    return scene\n}"
const FULL = "import VERT from \"./main.demo.vert\"\nimport {\n    intervals,\n    TgdAttributes,\n    TgdPainterClear,\n    TgdPainterPrimitive,\n    TgdScene,\n} from \"@tolokoban/tgd\"\n\nfunction createScene(canvas: HTMLCanvasElement): TgdScene {\n    const TAU = 2 * Math.PI\n    const data: number[] = [0, 0]\n    console.log(intervals(0, 1, 100))\n    intervals(0.1 * TAU, 0.9 * TAU, 64).forEach(angle => {\n        data.push(1, angle)\n    })\n    const attributes = new TgdAttributes({\n        attPos: 2,\n    })\n    attributes.set(\"attPos\", new Float32Array(data))\n    const scene = new TgdScene(canvas)\n    const clear = new TgdPainterClear(scene, {\n        color: [0, 0.5, 0.8, 1],\n    })\n    const primitive = new TgdPainterPrimitive(scene, {\n        compute: VERT,\n        attributes,\n        mode: \"TRIANGLE_FAN\",\n        red: 1,\n        green: 0.7,\n        blue: 0,\n    })\n    primitive.updateAttributes(data.length / 2)\n    scene.addPainter(clear, primitive)\n    return scene\n}\n\nexport default function Demo() {\n    const handleMount = (canvas: HTMLCanvasElement | null) => {\n        if (!canvas) return\n\n        const scene = createScene(canvas)\n        scene.canvas.addEventListener(\"dblclick\", () =>\n            scene.toggleFullscreen()\n        )\n    }\n    return (\n        <canvas\n            ref={handleMount}\n            style={{ width: \"100%\", height: \"50vh\" }}\n            title=\"Double-clic pour plein écran\"\n        ></canvas>\n    )\n}\n"

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