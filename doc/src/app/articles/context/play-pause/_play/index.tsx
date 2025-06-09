/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./play.demo"

const FOCUS = {"Initializing WebGL":"    ctx.play()\n    ctx.inputs.pointer.eventTap.addListener(() => {\n        if (ctx.playing) ctx.pause()\n        else ctx.play()\n    })"}
const FULL = "import {\n    tgdCalcDegToRad,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(ctx: TgdContext) {\n    const clear = new TgdPainterClear(ctx, {\n        color: [0.6, 0.6, 0.7, 1],\n        depth: 1,\n    })\n    const cube = new TgdPainterMesh(ctx)\n    const logic = new TgdPainterLogic((time, delay) => {\n        cube.transfo.orbitAroundY(delay)\n        cube.transfo.orbitAroundX(delay * 0.39409)\n        cube.transfo.setPosition(Math.sin(time) * 2, 0, Math.cos(time) * 3)\n    })\n    const state = new TgdPainterState(ctx, {\n        depth: webglPresetDepth.less,\n        children: [cube],\n    })\n    ctx.add(clear, state, logic)\n    ctx.play()\n    ctx.inputs.pointer.eventTap.addListener(() => {\n        if (ctx.playing) ctx.pause()\n        else ctx.play()\n    })\n    new TgdControllerCameraOrbit(ctx, {\n        geo: {\n            maxLng: 0,\n            minLng: 0,\n            minLat: tgdCalcDegToRad(-60),\n            maxLat: tgdCalcDegToRad(+60),\n        },\n        inertiaOrbit: 1000,\n    })\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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