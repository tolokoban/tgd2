/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./_material.demo"

const FOCUS = {"Initializing WebGL":"\tconst material = new TgdMaterialSolid({\n\t\tcolor: [...tgdCalcRandom3(), 1],\n\t})\n\tconst mesh = new TgdPainterMeshGltf(ctx, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial,\n\t})"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdMaterialSolid,\n\tTgdPainterClear,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\ttgdCalcRandom3,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nfunction init(ctx: TgdContext, assets: Assets) {\n\tconst material = new TgdMaterialSolid({\n\t\tcolor: [...tgdCalcRandom3(), 1],\n\t})\n\tconst mesh = new TgdPainterMeshGltf(ctx, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial,\n\t})\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, {\n\t\t\tcolor: [0.3, 0.3, 0.3, 1],\n\t\t\tdepth: 1,\n\t\t}),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tchildren: [mesh],\n\t\t}),\n\t)\n\tctx.paint()\n\tnew TgdControllerCameraOrbit(ctx, {\n\t\tinertiaOrbit: 2000,\n\t})\n\treturn (settings: Record<\"red\" | \"green\" | \"blue\", number>) => {\n\t\tmaterial.color.x = settings.red\n\t\tmaterial.color.y = settings.green\n\t\tmaterial.color.z = settings.blue\n\t\tctx.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\tglb: {\n\t\t\t\t\tsuzane: SuzaneURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tred: {\n\t\t\t\t\tlabel: \"Red\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 1,\n\t\t\t\t\tstep: 1 / 16,\n\t\t\t\t},\n\t\t\t\tgreen: {\n\t\t\t\t\tlabel: \"Green\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 1,\n\t\t\t\t\tstep: 1 / 16,\n\t\t\t\t},\n\t\t\t\tblue: {\n\t\t\t\t\tlabel: \"Blue\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 1,\n\t\t\t\t\tstep: 1 / 16,\n\t\t\t\t},\n\t\t\t}}\n\t\t\tgizmo\n\t\t/>\n\t)\n}\n"

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