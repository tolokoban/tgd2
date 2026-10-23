/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./multiply.demo"

const FOCUS = {"Detail #1":"\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.marylin)\n\tconst multiplyFilter = new TgdFilterMultiply({ color: [1, 1, 1, 1] })\n\tcontext.add(\n\t\tnew TgdPainterFilter(context, {\n\t\t\ttexture,\n\t\t\tfilters: [multiplyFilter],\n\t\t}),\n\t)\n\tcontext.paint()"}
const FULL = "import { type TgdContext, TgdFilterMultiply, TgdPainterFilter, TgdTexture2D } from \"@tolokoban/tgd\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport MarylinURL from \"../../../marylin.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.marylin)\n\tconst multiplyFilter = new TgdFilterMultiply({ color: [1, 1, 1, 1] })\n\tcontext.add(\n\t\tnew TgdPainterFilter(context, {\n\t\t\ttexture,\n\t\t\tfilters: [multiplyFilter],\n\t\t}),\n\t)\n\tcontext.paint()\n\treturn ({ red, green, blue }: { red: number; green: number; blue: number }) => {\n\t\tmultiplyFilter.color.reset(red, green, blue, 1)\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\twidth=\"512px\"\n\t\t\theight=\"512px\"\n\t\t\tassets={{ image: { marylin: MarylinURL } }}\n\t\t\tsettings={{\n\t\t\t\tred: { label: \"red\", value: 1, min: 0, max: 1 },\n\t\t\t\tgreen: { label: \"green\", value: 0.6, min: 0, max: 1 },\n\t\t\t\tblue: { label: \"blue\", value: 0.3, min: 0, max: 1 },\n\t\t\t}}\n\t\t/>\n\t)\n}\n"

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