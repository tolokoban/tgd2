/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tload: assets.image.uvGrid,\n\t});\n\tconst material = new TgdMaterialDiffuse({ color: texture });\n\tconst plane1 = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryPlane({\n\t\t\tsizeX: 2,\n\t\t\tsizeY: 2,\n\t\t}),\n\t\tmaterial,\n\t});\n\tplane1.transfo.setPosition(-1.2, 0, 0);\n\tconst plane2 = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryPlane({\n\t\t\tsizeX: 2,\n\t\t\tsizeY: 2,\n\t\t\tvecX: [Math.SQRT1_2, 0, -Math.SQRT1_2],\n\t\t\tvecY: [0, 1, 0],\n\t\t\tuv0: [0.5, 0],\n\t\t\tuv1: [1, 0.5],\n\t\t}),\n\t\tmaterial,\n\t});\n\tplane2.transfo.setPosition(1.2, 0, 0);\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [plane1, plane2],\n\t\t\tdepth: \"less\",\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(5, 3);\n\tcontext.paint();\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t});\n}"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometryPlane,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n} from \"@tolokoban/tgd\";\n\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport UVGridURL from \"@/assets/image/uv-grid.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tload: assets.image.uvGrid,\n\t});\n\tconst material = new TgdMaterialDiffuse({ color: texture });\n\tconst plane1 = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryPlane({\n\t\t\tsizeX: 2,\n\t\t\tsizeY: 2,\n\t\t}),\n\t\tmaterial,\n\t});\n\tplane1.transfo.setPosition(-1.2, 0, 0);\n\tconst plane2 = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryPlane({\n\t\t\tsizeX: 2,\n\t\t\tsizeY: 2,\n\t\t\tvecX: [Math.SQRT1_2, 0, -Math.SQRT1_2],\n\t\t\tvecY: [0, 1, 0],\n\t\t\tuv0: [0.5, 0],\n\t\t\tuv1: [1, 0.5],\n\t\t}),\n\t\tmaterial,\n\t});\n\tplane2.transfo.setPosition(1.2, 0, 0);\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [plane1, plane2],\n\t\t\tdepth: \"less\",\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(5, 3);\n\tcontext.paint();\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t});\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View onReady={init} assets={{ image: { uvGrid: UVGridURL } }} gizmo />\n\t);\n}\n"

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