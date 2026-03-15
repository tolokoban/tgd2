/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"    context.camera.fitSpaceAtTarget(1.5, 1.5)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.2, 0.1, 0, 1],\n    })\n    const color = new TgdTexture2D(context).loadVideo(VideoURL)\n    const mesh = new TgdPainterMesh(context, {\n        material: new TgdMaterialDiffuse({\n            color,\n            lockLightsToCamera: true,\n        }),\n    })\n    const meshPainter = new TgdPainterState(context, {\n        depth: \"less\",\n        children: [clear, mesh],\n    })\n    context.add(meshPainter, (time) => {\n        mesh.transfo.setEulerRotation(time * 47.4885, time * 60.1403, 0)\n    })\n    context.play()"}
const FULL = "import {\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdMaterialDiffuse,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport VideoURL from \"@/assets/movie/video.mp4\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.fitSpaceAtTarget(1.5, 1.5)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.2, 0.1, 0, 1],\n    })\n    const color = new TgdTexture2D(context).loadVideo(VideoURL)\n    const mesh = new TgdPainterMesh(context, {\n        material: new TgdMaterialDiffuse({\n            color,\n            lockLightsToCamera: true,\n        }),\n    })\n    const meshPainter = new TgdPainterState(context, {\n        depth: \"less\",\n        children: [clear, mesh],\n    })\n    context.add(meshPainter, (time) => {\n        mesh.transfo.setEulerRotation(time * 47.4885, time * 60.1403, 0)\n    })\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} controller={{ inertiaOrbit: 1000 }} />\n}\n"

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