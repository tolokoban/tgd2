/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./background2.demo"

const FOCUS = {"Detail #1":"    const texture = new TgdTexture2D(ctx)\n    texture.loadBitmap(tgdLoadImage(BackgroundURL))\n    const background = new TgdPainterBackground(ctx, texture)\n    const logic = new TgdPainterLogic(time => {\n        background.x = Math.cos(time * 0.251)\n        background.y = Math.cos(time * 0.745)\n        background.zoom = Math.sin(time * 0.1) * 3\n    })\n    ctx.add(background, logic)\n    ctx.play()"}
const FULL = "import {\n    TgdContext,\n    tgdLoadImage,\n    TgdPainterBackground,\n    TgdPainterLogic,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"./locomotive.webp\"\n\nfunction init(ctx: TgdContext) {\n    const texture = new TgdTexture2D(ctx)\n    texture.loadBitmap(tgdLoadImage(BackgroundURL))\n    const background = new TgdPainterBackground(ctx, texture)\n    const logic = new TgdPainterLogic(time => {\n        background.x = Math.cos(time * 0.251)\n        background.y = Math.cos(time * 0.745)\n        background.zoom = Math.sin(time * 0.1) * 3\n    })\n    ctx.add(background, logic)\n    ctx.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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