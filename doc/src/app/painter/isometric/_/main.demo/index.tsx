import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Column from "@/components/Column"
import CodeViewer from "@/components/CodeViewer"
import Demo from "./main.demo"

const FOCUS = "async function createScene(canvas: HTMLCanvasElement): Promise<TgdScene> {\n    const image = await TgdLoadImage.load(AtlasUrl)\n    if (!image) throw Error(`Unable to load image: \"${AtlasUrl}\"!`)\n\n    const scene = new TgdScene(canvas)\n    const clear = new TgdPainterClear(scene, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const background = new TgdPainterBackground(scene, {\n        image,\n    })\n    const atlas = createAtlas()\n    const isometic = new TgdPainterIsometric(scene, {\n        image,\n        atlas,\n        cells: [\n            [\"grass\", 1, 1],\n            [\"dirt\", 0, 0],\n        ],\n    })\n    const logic = new TgdPainterLogic((_time, delay) => {\n        const speed = delay * 0.001\n        if (scene.inputs.key(\"9\")) isometic.centerX += speed\n        if (scene.inputs.key(\"1\")) isometic.centerX -= speed\n        if (scene.inputs.key(\"7\")) isometic.centerY += speed\n        if (scene.inputs.key(\"3\")) isometic.centerY -= speed\n    })\n    scene.addPainter(clear, background, isometic, logic)\n    return scene\n}\n\nfunction createAtlas(): TgdAtlasGrid {\n    const atlas = new TgdAtlasGrid({\n        cols: 1, //8,\n        rows: 1, //7,\n        items: {\n            grass: [0, 0],\n            dirt: [3, 0],\n            roc: [2, 0],\n        },\n    })\n    return atlas\n}"
const FULL = "import VERT from \"./main.demo.vert\"\nimport {\n    TgdAtlasGrid,\n    TgdLoadImage,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterIsometric,\n    TgdPainterLogic,\n    TgdScene,\n} from \"@tolokoban/tgd\"\nimport AtlasUrl from \"./isometric-atlas.png\"\n\nasync function createScene(canvas: HTMLCanvasElement): Promise<TgdScene> {\n    const image = await TgdLoadImage.load(AtlasUrl)\n    if (!image) throw Error(`Unable to load image: \"${AtlasUrl}\"!`)\n\n    const scene = new TgdScene(canvas)\n    const clear = new TgdPainterClear(scene, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const background = new TgdPainterBackground(scene, {\n        image,\n    })\n    const atlas = createAtlas()\n    const isometic = new TgdPainterIsometric(scene, {\n        image,\n        atlas,\n        cells: [\n            [\"grass\", 1, 1],\n            [\"dirt\", 0, 0],\n        ],\n    })\n    const logic = new TgdPainterLogic((_time, delay) => {\n        const speed = delay * 0.001\n        if (scene.inputs.key(\"9\")) isometic.centerX += speed\n        if (scene.inputs.key(\"1\")) isometic.centerX -= speed\n        if (scene.inputs.key(\"7\")) isometic.centerY += speed\n        if (scene.inputs.key(\"3\")) isometic.centerY -= speed\n    })\n    scene.addPainter(clear, background, isometic, logic)\n    return scene\n}\n\nfunction createAtlas(): TgdAtlasGrid {\n    const atlas = new TgdAtlasGrid({\n        cols: 1, //8,\n        rows: 1, //7,\n        items: {\n            grass: [0, 0],\n            dirt: [3, 0],\n            roc: [2, 0],\n        },\n    })\n    return atlas\n}\n\nexport default function Demo() {\n    const handleMount = (canvas: HTMLCanvasElement | null) => {\n        if (!canvas) return\n\n        createScene(canvas).then(scene => {\n            scene.canvas.addEventListener(\"dblclick\", () =>\n                scene.toggleFullscreen()\n            )\n            scene.animate = true\n        })\n    }\n    return (\n        <canvas\n            ref={handleMount}\n            style={{ width: \"100%\", height: \"50vh\" }}\n            title=\"Double-clic pour plein écran\"\n        ></canvas>\n    )\n}\n"

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