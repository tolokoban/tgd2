/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./transfo.demo"

const FOCUS = {"Detail #1":"\tnew TgdControllerCameraOrbit(ctx, { debug: true });\n\tctx.camera.transfo.distance = 10;\n\tconst mesh = new TgdPainterMeshGltf(ctx, {\n\t\tasset: assets.glb.mesh,\n\t});\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.lessOrEqual,\n\t\t\tchildren: [mesh],\n\t\t}),\n\t);\n\tctx.paint();\n\tctx.animSchedule(\n\t\ttgdAnimChainTransfoInterpolations(\n\t\t\tctx.camera.transfo,\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tduration: 1,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tdistance: 2.9,\n\t\t\t\t\t\tposition: [-0.39898496866226196, 0.22825193405151367, 0],\n\t\t\t\t\t\torientation: [0, 0, 0, 1],\n\t\t\t\t\t\tscale: [1, 1, 1],\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 1,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tdistance: 5.1,\n\t\t\t\t\t\tposition: [\n\t\t\t\t\t\t\t-0.9985308647155762, 0.7087523341178894, 0.3115437924861908,\n\t\t\t\t\t\t],\n\t\t\t\t\t\torientation: [\n\t\t\t\t\t\t\t0.09696336090564728, -0.6652175784111023, -0.48327139019966125,\n\t\t\t\t\t\t\t0.5608319044113159,\n\t\t\t\t\t\t],\n\t\t\t\t\t\tscale: [1, 1, 1],\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 2,\n\t\t\t\t\ttransfo: new TgdTransfo(ctx.camera.transfo),\n\t\t\t\t\teasingFunction: tgdEasingFunctionInOutQuint,\n\t\t\t\t},\n\t\t\t],\n\t\t\t{ repeat: Infinity },\n\t\t),\n\t);"}
const FULL = "import {\n\ttgdAnimChainTransfoInterpolations,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\ttgdEasingFunctionInOutQuint,\n\tTgdPainterClear,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdTransfo,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport MeshURL from \"@/assets/mesh/suzanne.glb\";\n\nfunction init(ctx: TgdContext, assets: Assets) {\n\tnew TgdControllerCameraOrbit(ctx, { debug: true });\n\tctx.camera.transfo.distance = 10;\n\tconst mesh = new TgdPainterMeshGltf(ctx, {\n\t\tasset: assets.glb.mesh,\n\t});\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.lessOrEqual,\n\t\t\tchildren: [mesh],\n\t\t}),\n\t);\n\tctx.paint();\n\tctx.animSchedule(\n\t\ttgdAnimChainTransfoInterpolations(\n\t\t\tctx.camera.transfo,\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tduration: 1,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tdistance: 2.9,\n\t\t\t\t\t\tposition: [-0.39898496866226196, 0.22825193405151367, 0],\n\t\t\t\t\t\torientation: [0, 0, 0, 1],\n\t\t\t\t\t\tscale: [1, 1, 1],\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 1,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tdistance: 5.1,\n\t\t\t\t\t\tposition: [\n\t\t\t\t\t\t\t-0.9985308647155762, 0.7087523341178894, 0.3115437924861908,\n\t\t\t\t\t\t],\n\t\t\t\t\t\torientation: [\n\t\t\t\t\t\t\t0.09696336090564728, -0.6652175784111023, -0.48327139019966125,\n\t\t\t\t\t\t\t0.5608319044113159,\n\t\t\t\t\t\t],\n\t\t\t\t\t\tscale: [1, 1, 1],\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 2,\n\t\t\t\t\ttransfo: new TgdTransfo(ctx.camera.transfo),\n\t\t\t\t\teasingFunction: tgdEasingFunctionInOutQuint,\n\t\t\t\t},\n\t\t\t],\n\t\t\t{ repeat: Infinity },\n\t\t),\n\t);\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\tglb: { mesh: MeshURL },\n\t\t\t}}\n\t\t/>\n\t);\n}\n"

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