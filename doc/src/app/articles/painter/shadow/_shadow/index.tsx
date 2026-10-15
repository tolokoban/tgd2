/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./shadow.demo"

const FOCUS = {"Initializing WebGL":"    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const shadow = new TgdPainterShadow(context, {\n        light: {\n            transfo: new TgdTransfo({\n                position: [-3, 1, 2],\n            }).lookAt([0, 0, 0]),\n            width: 8,\n            height: 4,\n        },\n        meshes: [\n            {\n                geometry: new TgdGeometryBox(),\n                transfo: new TgdTransfo({ position: [-2, 0, 0] }),\n                visible: true,\n            },\n            {\n                geometry: new TgdGeometrySphereIco(),\n                transfo: new TgdTransfo({ position: [+2, 0, 0] }),\n                visible: true,\n            },\n        ],\n    })\n    context.add(clear, shadow)\n    context.camera.spaceWidthAtTarget = 6\n    context.paint()"}
const FULL = "import {\n    type TgdContext,\n    TgdGeometryBox,\n    TgdGeometrySphereIco,\n    TgdPainterClear,\n    TgdPainterShadow,\n    TgdTransfo,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const shadow = new TgdPainterShadow(context, {\n        light: {\n            transfo: new TgdTransfo({\n                position: [-3, 1, 2],\n            }).lookAt([0, 0, 0]),\n            width: 8,\n            height: 4,\n        },\n        meshes: [\n            {\n                geometry: new TgdGeometryBox(),\n                transfo: new TgdTransfo({ position: [-2, 0, 0] }),\n                visible: true,\n            },\n            {\n                geometry: new TgdGeometrySphereIco(),\n                transfo: new TgdTransfo({ position: [+2, 0, 0] }),\n                visible: true,\n            },\n        ],\n    })\n    context.add(clear, shadow)\n    context.camera.spaceWidthAtTarget = 6\n    context.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} controller={{ inertiaOrbit: 1000 }} gizmo />\n}\n"

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