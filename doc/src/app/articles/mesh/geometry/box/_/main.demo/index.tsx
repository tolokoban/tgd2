/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })\n\tconst material = new TgdMaterialFaceOrientation()\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({\n\t\t\tcenter: [-0.5, 0, 0],\n\t\t\tsizeX: 3,\n\t\t\tsizeY: 2,\n\t\t\tsizeZ: 1,\n\t\t}),\n\t\tmaterial,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [mesh],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t}),\n\t)\n\tcontext.paint()\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t})\n}"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometryBox,\n\tTgdMaterialFaceOrientation,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })\n\tconst material = new TgdMaterialFaceOrientation()\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({\n\t\t\tcenter: [-0.5, 0, 0],\n\t\t\tsizeX: 3,\n\t\t\tsizeY: 2,\n\t\t\tsizeZ: 1,\n\t\t}),\n\t\tmaterial,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [mesh],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t}),\n\t)\n\tcontext.paint()\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t})\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} gizmo />\n}\n"

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