/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./marylin.demo"

const FOCUS = {"Detail #1":"\tconst texture = new TgdTexture2D(context).loadBitmap(\n\t\ttgdLoadImage(BackgroundURL),\n\t);\n\tconst hueFilter = new TgdFilterHueRotation();\n\tconst filter = new TgdPainterFilter(context, {\n\t\ttexture,\n\t\tfilters: [hueFilter],\n\t});\n\tcontext.add(\n\t\tfilter,\n\t\tnew TgdPainterLogic((time) => {\n\t\t\thueFilter.hueShiftInDegrees = time * 90;\n\t\t}),\n\t);\n\tcontext.play();"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdFilterHueRotation,\n\ttgdLoadImage,\n\tTgdPainterFilter,\n\tTgdPainterLogic,\n\tTgdTexture2D,\n} from \"@tolokoban/tgd\";\nimport View from \"@/components/demo/Tgd\";\n\nimport BackgroundURL from \"../../../marylin.webp\";\n\nfunction init(context: TgdContext) {\n\tconst texture = new TgdTexture2D(context).loadBitmap(\n\t\ttgdLoadImage(BackgroundURL),\n\t);\n\tconst hueFilter = new TgdFilterHueRotation();\n\tconst filter = new TgdPainterFilter(context, {\n\t\ttexture,\n\t\tfilters: [hueFilter],\n\t});\n\tcontext.add(\n\t\tfilter,\n\t\tnew TgdPainterLogic((time) => {\n\t\t\thueFilter.hueShiftInDegrees = time * 90;\n\t\t}),\n\t);\n\tcontext.play();\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} width=\"512px\" height=\"512px\" />;\n}\n"

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