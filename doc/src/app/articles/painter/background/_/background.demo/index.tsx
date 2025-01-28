/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./background.demo"

const FOCUS = {"Detail #1":"    const texture = new TgdTexture2D(ctx)\n    tgdLoadImage(BackgroundURL).then(bmp => {\n        if (bmp) {\n            texture.loadBitmap(bmp)\n            ctx.paint()\n        }\n    })\n    const background = new TgdPainterBackground(ctx, texture)\n    ctx.add(background)\n    ctx.paint()"}
const FULL = "import {\n    TgdContext,\n    tgdLoadImage,\n    TgdPainterBackground,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"./helmet.webp\"\n\nfunction init(ctx: TgdContext) {\n    const texture = new TgdTexture2D(ctx)\n    tgdLoadImage(BackgroundURL).then(bmp => {\n        if (bmp) {\n            texture.loadBitmap(bmp)\n            ctx.paint()\n        }\n    })\n    const background = new TgdPainterBackground(ctx, texture)\n    ctx.add(background)\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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