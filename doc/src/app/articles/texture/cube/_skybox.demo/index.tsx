/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./_skybox.demo"

const FOCUS = "    const { camera } = context\n    camera.face(\"+X+Z-Y\")\n    const skybox = new TgdPainterSkybox(context, {\n        imagePosX,\n        imagePosY,\n        imagePosZ,\n        imageNegX,\n        imageNegY,\n        imageNegZ,\n    })\n    const node2 = new TgdPainterNode({\n        children: [new TgdCameraNode(camera)],\n    })\n    const node1 = new TgdPainterNode({ children: [node2] })\n    const turn = new TgdQuat()\n    context.add(\n        skybox,\n        node1,\n        new TgdPainterLogic((time: number, delay: number) => {\n            turn.rotateAroundZ(delay * 0.0002704)\n            node1.transfo.orientation = turn\n            const quat = new TgdQuat().face(\"+X+Z-Y\")\n            quat.rotateAroundX(0.5 * Math.sin(time * 0.0003721) + 0.25)\n            node2.transfo.orientation = quat\n        })\n    )\n    context.play()"
const FULL = "import {\n    TgdCamera,\n    TgdCameraNode,\n    TgdCameraPerspective,\n    TgdContext,\n    TgdPainterAxis,\n    TgdPainterBackground,\n    TgdPainterLogic,\n    TgdPainterNode,\n    TgdPainterSkybox,\n    TgdQuat,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport imagePosX from \"./1.webp\"\nimport imagePosY from \"./2.webp\"\nimport imagePosZ from \"./3.webp\"\nimport imageNegX from \"./4.webp\"\nimport imageNegY from \"./5.webp\"\nimport imageNegZ from \"./6.webp\"\n\nfunction init(context: TgdContext) {\n    const { camera } = context\n    camera.face(\"+X+Z-Y\")\n    const skybox = new TgdPainterSkybox(context, {\n        imagePosX,\n        imagePosY,\n        imagePosZ,\n        imageNegX,\n        imageNegY,\n        imageNegZ,\n    })\n    const node2 = new TgdPainterNode({\n        children: [new TgdCameraNode(camera)],\n    })\n    const node1 = new TgdPainterNode({ children: [node2] })\n    const turn = new TgdQuat()\n    context.add(\n        skybox,\n        node1,\n        new TgdPainterLogic((time: number, delay: number) => {\n            turn.rotateAroundZ(delay * 0.0002704)\n            node1.transfo.orientation = turn\n            const quat = new TgdQuat().face(\"+X+Z-Y\")\n            quat.rotateAroundX(0.5 * Math.sin(time * 0.0003721) + 0.25)\n            node2.transfo.orientation = quat\n        })\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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