/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./webcam.demo"

const FOCUS = {}
const FULL = "import {\n    type TgdContext,\n    TgdGeometryBox,\n    tgdLoadCanvasFromCamera,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\nimport React from \"react\"\nimport { IconCamera, IconImage, IconSnapshot, ViewButton } from \"@tolokoban/ui\"\n\nfunction init(context: TgdContext, canvas: HTMLCanvasElement) {\n    context.camera.fitSpaceAtTarget(2, 2)\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.lessOrEqual,\n        children: [\n            new TgdPainterClear(context, {\n                color: [0.3, 0.2, 0.1, 1],\n                depth: 1,\n            }),\n            new TgdPainterLogic((time, delta) => {\n                mesh.transfo.orbitAroundX(delta * 0.573)\n                mesh.transfo.orbitAroundY(delta * 0.741)\n            }),\n        ],\n    })\n    context.add(state)\n    const texture = new TgdTexture2D(context).loadBitmap(canvas)\n    const geometry = new TgdGeometryBox()\n    const material = new TgdMaterialDiffuse({\n        color: texture,\n    })\n    const mesh = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    state.add(mesh)\n    context.play()\n    // #end\n}\n\nexport default function Demo() {\n    const [mode, setMode] = React.useState(\"init\")\n    const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null)\n    const [controller, setController] = React.useState<{\n        takeSnapshot(): HTMLCanvasElement | null\n        cancel(): void\n    } | null>(null)\n    const handleVideoMount = (video: HTMLVideoElement | null) => {\n        if (!video || controller) return\n\n        tgdLoadCanvasFromCamera(video).then(setController)\n    }\n    const takeSnapshot = () => {\n        if (!controller) return\n\n        setCanvas(controller.takeSnapshot())\n        setController(null)\n        setMode(\"3d\")\n    }\n    const back = () => {\n        setMode(\"webcam\")\n        setCanvas(null)\n    }\n\n    if (mode === \"init\") {\n        return (\n            <div>\n                <p>In this demo, we will take a picture from the webcam and use it as texture for a cube.</p>\n                <ViewButton icon={IconCamera} onClick={() => setMode(\"webcam\")}>\n                    Start WebCam\n                </ViewButton>\n            </div>\n        )\n    }\n\n    if (mode === \"webcam\") {\n        return (\n            <div>\n                <main>\n                    <video ref={handleVideoMount}></video>\n                    {canvas && <View onReady={(context: TgdContext) => init(context, canvas)} />}\n                </main>\n                <footer>\n                    {controller && (\n                        <ViewButton onClick={takeSnapshot} icon={IconSnapshot}>\n                            Take a Picture\n                        </ViewButton>\n                    )}\n                </footer>\n            </div>\n        )\n    }\n\n    return (\n        <div>\n            <main>{canvas && <View onReady={(context: TgdContext) => init(context, canvas)} />}</main>\n            <footer>\n                <ViewButton onClick={back} icon={IconImage}>\n                    Back to WebCam\n                </ViewButton>\n            </footer>\n        </div>\n    )\n}\n"

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