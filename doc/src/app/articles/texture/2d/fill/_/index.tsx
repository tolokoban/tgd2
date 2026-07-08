/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./texture2d-fill.demo"

const FOCUS = {"Detail #1":"\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tcull: \"back\",\n\t\tblend: \"alpha\",\n\t})\n\tcontext.add(clear, state)\n\tconst colors: Array<string | TgdColor | ArrayNumber4 | TgdVec4> = [\n\t\t\"#9cd\",\n\t\tTgdColor.fromString(\"#fa2\"),\n\t\t[0.5, 1, 0, 1],\n\t\tnew TgdVec4(1, 0, 1, 1),\n\t]\n\tlet colorIndex = 0\n\tfor (let row = -1; row <= +1; row += 2) {\n\t\tfor (let col = -1; col <= +1; col += 2) {\n\t\t\tconst color = colors[colorIndex++]\n\t\t\tconst texture = new TgdTexture2D(context).fill(color)\n\t\t\tconst geometry = new TgdGeometryBox({\n\t\t\t\tcenter: [col / 2, row / 2, 0],\n\t\t\t})\n\t\t\tconst material = new TgdMaterialDiffuse({\n\t\t\t\tcolor: texture,\n\t\t\t})\n\t\t\tconst mesh = new TgdPainterMesh(context, { geometry, material })\n\t\t\tstate.add(mesh)\n\t\t}\n\t}\n\tcontext.camera.fitSpaceAtTarget(2, 2)\n\tcontext.paint()"}
const FULL = "import {\n\ttype ArrayNumber4,\n\tTgdColor,\n\ttype TgdContext,\n\tTgdGeometryBox,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\tTgdVec4,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tcull: \"back\",\n\t\tblend: \"alpha\",\n\t})\n\tcontext.add(clear, state)\n\tconst colors: Array<string | TgdColor | ArrayNumber4 | TgdVec4> = [\n\t\t\"#9cd\",\n\t\tTgdColor.fromString(\"#fa2\"),\n\t\t[0.5, 1, 0, 1],\n\t\tnew TgdVec4(1, 0, 1, 1),\n\t]\n\tlet colorIndex = 0\n\tfor (let row = -1; row <= +1; row += 2) {\n\t\tfor (let col = -1; col <= +1; col += 2) {\n\t\t\tconst color = colors[colorIndex++]\n\t\t\tconst texture = new TgdTexture2D(context).fill(color)\n\t\t\tconst geometry = new TgdGeometryBox({\n\t\t\t\tcenter: [col / 2, row / 2, 0],\n\t\t\t})\n\t\t\tconst material = new TgdMaterialDiffuse({\n\t\t\t\tcolor: texture,\n\t\t\t})\n\t\t\tconst mesh = new TgdPainterMesh(context, { geometry, material })\n\t\t\tstate.add(mesh)\n\t\t}\n\t}\n\tcontext.camera.fitSpaceAtTarget(2, 2)\n\tcontext.paint()\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} />\n}\n"

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