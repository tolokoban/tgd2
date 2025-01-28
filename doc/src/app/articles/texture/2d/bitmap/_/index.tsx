/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./texture2d-from-bitmap.demo"

const FOCUS = {"Detail #1":"    const { gl } = context\n    const canvas = makeCanvas()\n    const texture = new TgdTexture2D(context, { flipY: true }).loadBitmap(\n        canvas\n    )\n    refUpdate.current = (params: WebglTextureParameters) => {\n        texture.setParams(params)\n        context.paint()\n    }\n    const painter = new Painter(context, texture)\n    context.add(painter)\n    context.paint()"}
const FULL = "import {\n    TgdContext,\n    TgdTexture2D,\n    WebglTextureParameters,\n    tgdCanvasCreateWithContext2D,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\nimport { Painter } from \"./painter\"\nimport React from \"react\"\nimport { ViewButton, ViewOptions, ViewPanel } from \"@tolokoban/ui\"\n\nfunction init(\n    context: TgdContext,\n    refUpdate: { current: ((params: WebglTextureParameters) => void) | null }\n) {\n    const { gl } = context\n    const canvas = makeCanvas()\n    const texture = new TgdTexture2D(context, { flipY: true }).loadBitmap(\n        canvas\n    )\n    refUpdate.current = (params: WebglTextureParameters) => {\n        texture.setParams(params)\n        context.paint()\n    }\n    const painter = new Painter(context, texture)\n    context.add(painter)\n    context.paint()\n}\n\nexport default function Demo() {\n    const refUpdate = React.useRef<\n        ((params: WebglTextureParameters) => void) | null\n    >(null)\n    const update = (params: WebglTextureParameters) => {\n        const f = refUpdate.current\n        if (!f) return\n\n        f(params)\n    }\n    const [wrapS, setWrapS] =\n        React.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\")\n    const [wrapT, setWrapT] =\n        React.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\")\n    return (\n        <View onReady={(context: TgdContext) => init(context, refUpdate)}>\n            <ViewPanel\n                display=\"flex\"\n                justifyContent=\"space-around\"\n                alignItems=\"center\"\n                flexWrap=\"wrap\"\n            >\n                <ViewOptions\n                    label=\"Wrap S\"\n                    value={wrapS}\n                    onChange={wrapS => {\n                        setWrapS(wrapS)\n                        update({ wrapS })\n                    }}\n                >\n                    <div key=\"REPEAT\">REPEAT</div>\n                    <div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n                    <div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n                </ViewOptions>\n                <ViewOptions\n                    label=\"Wrap T\"\n                    value={wrapT}\n                    onChange={wrapT => {\n                        setWrapT(wrapT)\n                        update({ wrapT })\n                    }}\n                >\n                    <div key=\"REPEAT\">REPEAT</div>\n                    <div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n                    <div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n                </ViewOptions>\n            </ViewPanel>\n        </View>\n    )\n}\n\nfunction makeCanvas() {\n    const w = 256\n    const h = 256\n    const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h)\n    ctx.fillStyle = \"#09f\"\n    ctx.fillRect(0, 0, w, h)\n    ctx.fillStyle = \"#f90\"\n    ctx.font = `${h / 2}px serif`\n    ctx.textAlign = \"center\"\n    ctx.textBaseline = \"middle\"\n    ctx.fillText(\"TGD\", w / 2, h / 2)\n    return canvas\n}\n"

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