/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./verbatim.demo"

const FOCUS = {"Detail #1":"\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.marylin)\n\tconst painter = new TgdPainterFilter(context, {\n\t\ttexture,\n\t\tfilters: [new TgdFilterVerbatim()],\n\t})\n\tcontext.add(painter)\n\tcontext.paint()"}
const FULL = "import { type TgdContext, TgdFilterVerbatim, TgdPainterFilter, TgdTexture2D } from \"@tolokoban/tgd\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport MarylinURL from \"../../../marylin.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.marylin)\n\tconst painter = new TgdPainterFilter(context, {\n\t\ttexture,\n\t\tfilters: [new TgdFilterVerbatim()],\n\t})\n\tcontext.add(painter)\n\tcontext.paint()\n\treturn ({ flipY }: { flipY: number }) => {\n\t\tpainter.flipY = flipY === 1\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\twidth=\"512px\"\n\t\t\theight=\"512px\"\n\t\t\tassets={{ image: { marylin: MarylinURL } }}\n\t\t\tsettings={{\n\t\t\t\tflipY: { label: \"flipY\", value: 0, step: [\"false\", \"true\"] },\n\t\t\t}}\n\t\t/>\n\t)\n}\n"

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