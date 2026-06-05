/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./_material.demo"

const FOCUS = {"Initializing WebGL":"\tconst meshes: TgdPainter[] = []\n\tconst count = 5\n\tfor (let i = 0; i < count; i++) {\n\t\tconst material = new TgdMaterialFlat({\n\t\t\tcolor: [...tgdCalcRandom3(), 1],\n\t\t})\n\t\tconst mesh = new TgdPainterMeshGltf(ctx, {\n\t\t\tasset: assets.glb.suzane,\n\t\t\tmaterial,\n\t\t})\n\t\tconst ang = (2 * Math.PI * i) / count\n\t\tconst r = 1\n\t\tconst x = r * Math.cos(ang)\n\t\tconst y = r * Math.sin(ang)\n\t\tmesh.transfo.setPosition(x, y, 0)\n\t\tconst quat = new TgdQuat(tgdCalcRandom4(-1, +1)).normalize()\n\t\tmesh.transfo.orientation = quat\n\t\tmeshes.push(mesh)\n\t}"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdMaterialFlat,\n\ttype TgdPainter,\n\tTgdPainterClear,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdQuat,\n\ttgdCalcRandom3,\n\ttgdCalcRandom4,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nfunction init(ctx: TgdContext, assets: Assets) {\n\tconst meshes: TgdPainter[] = []\n\tconst count = 5\n\tfor (let i = 0; i < count; i++) {\n\t\tconst material = new TgdMaterialFlat({\n\t\t\tcolor: [...tgdCalcRandom3(), 1],\n\t\t})\n\t\tconst mesh = new TgdPainterMeshGltf(ctx, {\n\t\t\tasset: assets.glb.suzane,\n\t\t\tmaterial,\n\t\t})\n\t\tconst ang = (2 * Math.PI * i) / count\n\t\tconst r = 1\n\t\tconst x = r * Math.cos(ang)\n\t\tconst y = r * Math.sin(ang)\n\t\tmesh.transfo.setPosition(x, y, 0)\n\t\tconst quat = new TgdQuat(tgdCalcRandom4(-1, +1)).normalize()\n\t\tmesh.transfo.orientation = quat\n\t\tmeshes.push(mesh)\n\t}\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, {\n\t\t\tcolor: [0.3, 0.3, 0.3, 1],\n\t\t\tdepth: 1,\n\t\t}),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tchildren: meshes,\n\t\t}),\n\t)\n\tctx.paint()\n\tnew TgdControllerCameraOrbit(ctx, {\n\t\tinertiaOrbit: 2000,\n\t})\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\tglb: {\n\t\t\t\t\tsuzane: SuzaneURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t\tgizmo\n\t\t/>\n\t)\n}\n"

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