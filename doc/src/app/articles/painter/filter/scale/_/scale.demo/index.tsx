/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./scale.demo"

const FOCUS = {"Detail #1":"    const texture = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const scaleFilter = new TgdFilterScale({ mode: \"cover\", scale: 1 })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [scaleFilter, new TgdFilterChromaticAberration()],\n        }),\n    )\n    context.paint()"}
const FULL = "import {\n    type TgdContext,\n    TgdFilterChromaticAberration,\n    TgdFilterScale,\n    TgdPainterFilter,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport GridURL from \"@/assets/image/uv-grid-3x2.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const scaleFilter = new TgdFilterScale({ mode: \"cover\", scale: 1 })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [scaleFilter, new TgdFilterChromaticAberration()],\n        }),\n    )\n    context.paint()\n    return ({ mode, scaleX, scaleY }: { mode: number; scaleX: number; scaleY: number }) => {\n        scaleFilter.mode = mode === 0 ? \"cover\" : \"contain\"\n        scaleFilter.scale = [scaleX, scaleY]\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            width=\"480px\"\n            height=\"480px\"\n            assets={{ image: { grid: GridURL } }}\n            settings={{\n                mode: { label: \"mode\", value: 0, step: [\"cover\", \"contain\"] },\n                scaleX: { label: \"scale X\", value: 1, min: 0.25, max: 2 },\n                scaleY: { label: \"scale Y\", value: 1, min: 0.25, max: 2 },\n            }}\n        />\n    )\n}\n"

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