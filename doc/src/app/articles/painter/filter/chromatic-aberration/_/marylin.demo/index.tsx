/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./marylin.demo"

const FOCUS = {"Detail #1":"    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdLoadImage(BackgroundURL)\n    )\n    const filter = new TgdFilterChromaticAberration({\n        strength: 1,\n    })\n\n    const filters = new TgdPainterFilter(context, {\n        texture,\n        filters: [filter],\n    })\n    context.add(\n        filters,\n        new TgdPainterLogic(\n            time => (filter.strength = 5 * Math.abs(Math.sin(time * 1e-3)))\n        )\n    )\n    context.play()"}
const FULL = "import {\n    TgdContext,\n    TgdFilterBlur,\n    TgdFilterChromaticAberration,\n    tgdLoadImage,\n    TgdPainterFilter,\n    TgdPainterLogic,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"./tgd.webp\"\n\nfunction init(context: TgdContext) {\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdLoadImage(BackgroundURL)\n    )\n    const filter = new TgdFilterChromaticAberration({\n        strength: 1,\n    })\n\n    const filters = new TgdPainterFilter(context, {\n        texture,\n        filters: [filter],\n    })\n    context.add(\n        filters,\n        new TgdPainterLogic(\n            time => (filter.strength = 5 * Math.abs(Math.sin(time * 1e-3)))\n        )\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} width=\"512px\" height=\"512px\" />\n}\n"

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