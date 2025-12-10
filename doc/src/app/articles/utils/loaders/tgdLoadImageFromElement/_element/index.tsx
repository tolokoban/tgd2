/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./element.demo"

const FOCUS = {"Loading element into texture":"    const loadImage = () => {\n        const elem = document.body.querySelector(\"details > div > pre\")\n        if (!elem || elem.scrollWidth < 1) {\n            setTimeout(loadImage, 500)\n            return\n        }\n        console.log(elem.innerHTML)\n        tgdLoadImageFromElement(elem).then((img) => {\n            document.body.appendChild(img)\n            texture.loadBitmap(img)\n        })\n    }\n    loadImage()"}
const FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdGeometryBox,\n    tgdLoadImageFromElement,\n    TgdMaterialDiffuse,\n    TgdMaterialNormals,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    context.camera = new TgdCameraPerspective({\n        transfo: {\n            distance: 1.2,\n            position: [0, 0, 0],\n        },\n        far: 100,\n        near: 0.1,\n        fovy: Math.PI / 4,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.lessOrEqual,\n        children: [\n            new TgdPainterClear(context, {\n                color: [0.3, 0.2, 0.1, 1],\n                depth: 1,\n            }),\n            new TgdPainterLogic((time, delta) => {\n                mesh.transfo.orbitAroundX(delta * 0.573)\n                mesh.transfo.orbitAroundY(delta * 0.741)\n            }),\n        ],\n    })\n    context.add(state)\n    const texture = new TgdTexture2D(context)\n    const geometry = new TgdGeometryBox()\n    const material = new TgdMaterialDiffuse({\n        color: texture,\n    })\n    const mesh = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    state.add(mesh)\n    context.play()\n\n    const loadImage = () => {\n        const elem = document.body.querySelector(\"details > div > pre\")\n        if (!elem || elem.scrollWidth < 1) {\n            setTimeout(loadImage, 500)\n            return\n        }\n        console.log(elem.innerHTML)\n        tgdLoadImageFromElement(elem).then((img) => {\n            document.body.appendChild(img)\n            texture.loadBitmap(img)\n        })\n    }\n    loadImage()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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