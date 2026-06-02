/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./chain.demo"

const FOCUS = {"Detail #1":"\tctx.camera.transfo.distance = 10;\n\tconst cube = new TgdPainterMesh(ctx, { transfo: { position: [-1, -1, 0] } });\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.lessOrEqual,\n\t\t\tchildren: [\n\t\t\t\tcube,\n\t\t\t\tnew TgdPainterMesh(ctx, {\n\t\t\t\t\tmaterial: new TgdMaterialFlat({\n\t\t\t\t\t\tcolor: [0.5, 0.5, 0.5, 1],\n\t\t\t\t\t}),\n\t\t\t\t\ttransfo: { position: [0, 0, -0.1] },\n\t\t\t\t}),\n\t\t\t],\n\t\t}),\n\t);\n\tconst anim1: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(-1, t * 2 - 1, 0);\n\t\t},\n\t};\n\tconst anim2: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(t * 2 - 1, 1, 0);\n\t\t},\n\t};\n\tconst anim3: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(+1, 1 - t * 2, 0);\n\t\t},\n\t};\n\tconst anim4: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(1 - t * 2, -1, 0);\n\t\t},\n\t};\n\tctx.animSchedule(\n\t\ttgdAnimChain([anim1, anim2, anim3, anim4], {\n\t\t\trepeat: Infinity,\n\t\t}),\n\t);\n\tctx.animSchedule(\n\t\ttgdAnimChain(\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tduration: 0.5,\n\t\t\t\t\taction(t) {\n\t\t\t\t\t\tcube.transfo.setScale(1 - t * 0.5);\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 0.5,\n\t\t\t\t\taction(t) {\n\t\t\t\t\t\tcube.transfo.setScale(1 - (1 - t) * 0.5);\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t],\n\t\t\t{ repeat: Infinity },\n\t\t),\n\t);\n\tctx.paint();"}
const FULL = "import {\n\ttype TgdAnimation,\n\ttgdAnimChain,\n\ttype TgdContext,\n\ttgdEasingFunctionInOutCubic,\n\tTgdMaterialFlat,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(ctx: TgdContext) {\n\tctx.camera.transfo.distance = 10;\n\tconst cube = new TgdPainterMesh(ctx, { transfo: { position: [-1, -1, 0] } });\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.lessOrEqual,\n\t\t\tchildren: [\n\t\t\t\tcube,\n\t\t\t\tnew TgdPainterMesh(ctx, {\n\t\t\t\t\tmaterial: new TgdMaterialFlat({\n\t\t\t\t\t\tcolor: [0.5, 0.5, 0.5, 1],\n\t\t\t\t\t}),\n\t\t\t\t\ttransfo: { position: [0, 0, -0.1] },\n\t\t\t\t}),\n\t\t\t],\n\t\t}),\n\t);\n\tconst anim1: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(-1, t * 2 - 1, 0);\n\t\t},\n\t};\n\tconst anim2: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(t * 2 - 1, 1, 0);\n\t\t},\n\t};\n\tconst anim3: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(+1, 1 - t * 2, 0);\n\t\t},\n\t};\n\tconst anim4: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(1 - t * 2, -1, 0);\n\t\t},\n\t};\n\tctx.animSchedule(\n\t\ttgdAnimChain([anim1, anim2, anim3, anim4], {\n\t\t\trepeat: Infinity,\n\t\t}),\n\t);\n\tctx.animSchedule(\n\t\ttgdAnimChain(\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tduration: 0.5,\n\t\t\t\t\taction(t) {\n\t\t\t\t\t\tcube.transfo.setScale(1 - t * 0.5);\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 0.5,\n\t\t\t\t\taction(t) {\n\t\t\t\t\t\tcube.transfo.setScale(1 - (1 - t) * 0.5);\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t],\n\t\t\t{ repeat: Infinity },\n\t\t),\n\t);\n\tctx.paint();\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} />;\n}\n"

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