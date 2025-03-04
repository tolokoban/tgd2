/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./framebuffer.demo"

const FOCUS = {"Detail #1":"    context.camera = new TgdCameraPerspective({\n        distance: 3,\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n    })\n    const mesh = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox(),\n        material: new TgdMaterialNormals(),\n    })\n    const meshPainter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [clear, mesh],\n    })\n    context.add(meshPainter)\n    context.play()"}
const FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdGeometryBox,\n    TgdMaterialNormals,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport SuzanneURL from \"@/assets/mesh/logo.glb\"\nimport BackgroundURL from \"@/assets/image/dino.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera = new TgdCameraPerspective({\n        distance: 3,\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n    })\n    const mesh = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox(),\n        material: new TgdMaterialNormals(),\n    })\n    const meshPainter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [clear, mesh],\n    })\n    context.add(meshPainter)\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    mesh: SuzanneURL,\n                },\n                image: {\n                    background: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n"

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