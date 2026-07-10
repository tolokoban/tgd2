/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./bbox.demo"

const FOCUS = {"Initializing WebGL":"\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0, 0, 1],\n\t\tdepth: 1,\n\t})\n\tconst suzanne = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryGltf({\n\t\t\tdata: assets.glb.suzanne,\n\t\t}),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tchildren: [suzanne],\n\t\tdepth: \"less\",\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tstate,\n\t\tnew TgdPainterBBox(context, {\n\t\t\tbbox: suzanne.computeBoundingBox(),\n\t\t}),\n\t)\n\tcontext.paint()\n\tcontext.camera.fitSpaceAtTarget(6, 6)"}
const FULL = "import {\n\tTgdBoundingBox,\n\ttype TgdContext,\n\tTgdGeometryGltf,\n\tTgdPainterBBox,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n} from \"@tolokoban/tgd\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0, 0, 1],\n\t\tdepth: 1,\n\t})\n\tconst suzanne = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryGltf({\n\t\t\tdata: assets.glb.suzanne,\n\t\t}),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tchildren: [suzanne],\n\t\tdepth: \"less\",\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tstate,\n\t\tnew TgdPainterBBox(context, {\n\t\t\tbbox: suzanne.computeBoundingBox(),\n\t\t}),\n\t)\n\tcontext.paint()\n\tcontext.camera.fitSpaceAtTarget(6, 6)\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\tglb: {\n\t\t\t\t\tsuzanne: SuzanneURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t\tcontroller={{\n\t\t\t\tmaxZoom: 100,\n\t\t\t}}\n\t\t\tgizmo\n\t\t/>\n\t)\n}\n"

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