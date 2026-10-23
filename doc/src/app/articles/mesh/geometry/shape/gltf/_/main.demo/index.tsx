/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryGltf({\n\t\t\tdata: assets.glb.suzanne,\n\t\t}),\n\t\tmaterial: new TgdMaterialDiffuse(),\n\t});\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [mesh],\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(3, 3);\n\tcontext.paint();\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t});\n}"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometryGltf,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n} from \"@tolokoban/tgd\";\n\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryGltf({\n\t\t\tdata: assets.glb.suzanne,\n\t\t}),\n\t\tmaterial: new TgdMaterialDiffuse(),\n\t});\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [mesh],\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(3, 3);\n\tcontext.paint();\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t});\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View onReady={init} assets={{ glb: { suzanne: SuzanneURL } }} gizmo />\n\t);\n}\n"

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