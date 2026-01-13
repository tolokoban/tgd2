/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })\n\tconst bbox: {\n\t\tmin: Readonly<ArrayNumber3>\n\t\tmax: Readonly<ArrayNumber3>\n\t} = {\n\t\tmin: [-1, -1, -1],\n\t\tmax: [+1, +1, +1],\n\t}\n\tconst [minX, minY, minZ] = bbox.min\n\tconst [maxX, maxY, maxZ] = bbox.max\n\tconst material = new TgdMaterialDiffuse({\n\t\tlockLightsToCamera: true,\n\t})\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst size = 2 ** -level\n\t\t\tconst sizeX = size * (maxX - minX)\n\t\t\tconst sizeY = size * (maxY - minY)\n\t\t\tconst sizeZ = size * (maxZ - minZ)\n\t\t\treturn {\n\t\t\t\tgeometry: new TgdGeometryBox({\n\t\t\t\t\tsizeX: sizeX * 0.9,\n\t\t\t\t\tsizeY: sizeY * 0.9,\n\t\t\t\t\tsizeZ: sizeZ * 0.9,\n\t\t\t\t\tcenter: [\n\t\t\t\t\t\t(x + 0.5) * sizeX + minX,\n\t\t\t\t\t\t(y + 0.5) * sizeY + minY,\n\t\t\t\t\t\t(z + 0.5) * sizeZ + minZ,\n\t\t\t\t\t],\n\t\t\t\t}),\n\t\t\t\tmaterial,\n\t\t\t}\n\t\t},\n\t\tsubdivisions: 1,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t}),\n\t)\n\tcontext.paint()\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t})\n}"}
const FULL = "import {\n\ttype ArrayNumber3,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometryBox,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterLOD,\n\tTgdPainterState,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })\n\tconst bbox: {\n\t\tmin: Readonly<ArrayNumber3>\n\t\tmax: Readonly<ArrayNumber3>\n\t} = {\n\t\tmin: [-1, -1, -1],\n\t\tmax: [+1, +1, +1],\n\t}\n\tconst [minX, minY, minZ] = bbox.min\n\tconst [maxX, maxY, maxZ] = bbox.max\n\tconst material = new TgdMaterialDiffuse({\n\t\tlockLightsToCamera: true,\n\t})\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst size = 2 ** -level\n\t\t\tconst sizeX = size * (maxX - minX)\n\t\t\tconst sizeY = size * (maxY - minY)\n\t\t\tconst sizeZ = size * (maxZ - minZ)\n\t\t\treturn {\n\t\t\t\tgeometry: new TgdGeometryBox({\n\t\t\t\t\tsizeX: sizeX * 0.9,\n\t\t\t\t\tsizeY: sizeY * 0.9,\n\t\t\t\t\tsizeZ: sizeZ * 0.9,\n\t\t\t\t\tcenter: [\n\t\t\t\t\t\t(x + 0.5) * sizeX + minX,\n\t\t\t\t\t\t(y + 0.5) * sizeY + minY,\n\t\t\t\t\t\t(z + 0.5) * sizeZ + minZ,\n\t\t\t\t\t],\n\t\t\t\t}),\n\t\t\t\tmaterial,\n\t\t\t}\n\t\t},\n\t\tsubdivisions: 1,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t}),\n\t)\n\tcontext.paint()\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t})\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} gizmo />\n}\n"

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