/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"    const clearColor = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.3, 0.2, 0.1, 1],\n    })\n    const clearDepth = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    const state = new TgdPainterState(context, {\n        depth: \"less\",\n        cull: \"back\",\n        children: [mesh],\n    })\n    const group = new TgdPainterGroup([/*clearDepth,*/ state])\n    context.add(\n        clearColor,\n        clearDepth,\n        (time: number, delta: number) => {\n            // mesh.transfo.setEulerRotation(0, time * 60, 0)\n            const { width, height } = context\n            context.viewportExec(\n                () => {\n                    console.log(\"viewportExec\")\n                },\n                { width: width / 2 },\n            )\n        },\n        // (time: number, delta: number) => {\n        //     const { width, height } = context\n        //     context.viewportExec(\n        //         () => {\n        //             group.paint(time, delta)\n        //         },\n        //         { width: width / 2, height: height / 2 },\n        //     )\n        //     context.viewportExec(\n        //         () => {\n        //             group.paint(time, delta)\n        //         },\n        //         { width: width / 2, height: height / 2, y: height / 16 },\n        //     )\n        //     context.viewportExec(\n        //         () => {\n        //             group.paint(time, delta)\n        //         },\n        //         { x: width / 2, width: width / 2 },\n        //     )\n        // },\n        group,\n    )\n    context.paint()"}
const FULL = "import { TgdContext, TgdPainterClear, TgdPainterGroup, TgdPainterMeshGltf, TgdPainterState } from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clearColor = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.3, 0.2, 0.1, 1],\n    })\n    const clearDepth = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    const state = new TgdPainterState(context, {\n        depth: \"less\",\n        cull: \"back\",\n        children: [mesh],\n    })\n    const group = new TgdPainterGroup([/*clearDepth,*/ state])\n    context.add(\n        clearColor,\n        clearDepth,\n        (time: number, delta: number) => {\n            // mesh.transfo.setEulerRotation(0, time * 60, 0)\n            const { width, height } = context\n            context.viewportExec(\n                () => {\n                    console.log(\"viewportExec\")\n                },\n                { width: width / 2 },\n            )\n        },\n        // (time: number, delta: number) => {\n        //     const { width, height } = context\n        //     context.viewportExec(\n        //         () => {\n        //             group.paint(time, delta)\n        //         },\n        //         { width: width / 2, height: height / 2 },\n        //     )\n        //     context.viewportExec(\n        //         () => {\n        //             group.paint(time, delta)\n        //         },\n        //         { width: width / 2, height: height / 2, y: height / 16 },\n        //     )\n        //     context.viewportExec(\n        //         () => {\n        //             group.paint(time, delta)\n        //         },\n        //         { x: width / 2, width: width / 2 },\n        //     )\n        // },\n        group,\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n            }}></View>\n    )\n}\n"

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