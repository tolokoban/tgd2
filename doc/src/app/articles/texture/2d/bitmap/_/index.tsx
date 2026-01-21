/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./texture2d-from-bitmap.demo"

const FOCUS = {"Detail #1":"\tconst canvas = makeCanvas()\n\tconst texture = new TgdTexture2D(context, {\n\t\tstorage: { flipY: true },\n\t}).loadBitmap(canvas)\n\trefUpdate.current = (params: WebglTextureParameters) => {\n\t\ttexture.setParams(params)\n\t\tcontext.paint()\n\t}\n\tconst painter = new Painter(context, texture)\n\tcontext.add(painter)\n\tcontext.paint()"}
const FULL = "import View from \"@/components/demo/Tgd\"\nimport {\n\tTgdContext,\n\tTgdTexture2D,\n\tWebglTextureParameters,\n\ttgdCanvasCreateWithContext2D,\n} from \"@tolokoban/tgd\"\nimport { ViewOptions, ViewPanel } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport { Painter } from \"./painter\"\n\nfunction init(\n\tcontext: TgdContext,\n\trefUpdate: { current: ((params: WebglTextureParameters) => void) | null },\n) {\n\tconst canvas = makeCanvas()\n\tconst texture = new TgdTexture2D(context, {\n\t\tstorage: { flipY: true },\n\t}).loadBitmap(canvas)\n\trefUpdate.current = (params: WebglTextureParameters) => {\n\t\ttexture.setParams(params)\n\t\tcontext.paint()\n\t}\n\tconst painter = new Painter(context, texture)\n\tcontext.add(painter)\n\tcontext.paint()\n}\n\nexport default function Demo() {\n\tconst refUpdate = React.useRef<\n\t\t((params: WebglTextureParameters) => void) | null\n\t>(null)\n\tconst update = (params: WebglTextureParameters) => {\n\t\tconst f = refUpdate.current\n\t\tif (!f) return\n\n\t\tf(params)\n\t}\n\tconst [wrapS, setWrapS] =\n\t\tReact.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\")\n\tconst [wrapT, setWrapT] =\n\t\tReact.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\")\n\treturn (\n\t\t<View onReady={(context: TgdContext) => init(context, refUpdate)}>\n\t\t\t<ViewPanel\n\t\t\t\tdisplay=\"flex\"\n\t\t\t\tjustifyContent=\"space-around\"\n\t\t\t\talignItems=\"center\"\n\t\t\t\tflexWrap=\"wrap\"\n\t\t\t>\n\t\t\t\t<ViewOptions\n\t\t\t\t\tlabel=\"Wrap S\"\n\t\t\t\t\tvalue={wrapS}\n\t\t\t\t\tonChange={(wrapS) => {\n\t\t\t\t\t\tsetWrapS(wrapS)\n\t\t\t\t\t\tupdate({ wrapS })\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t<div key=\"REPEAT\">REPEAT</div>\n\t\t\t\t\t<div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n\t\t\t\t\t<div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n\t\t\t\t</ViewOptions>\n\t\t\t\t<ViewOptions\n\t\t\t\t\tlabel=\"Wrap T\"\n\t\t\t\t\tvalue={wrapT}\n\t\t\t\t\tonChange={(wrapT) => {\n\t\t\t\t\t\tsetWrapT(wrapT)\n\t\t\t\t\t\tupdate({ wrapT })\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t<div key=\"REPEAT\">REPEAT</div>\n\t\t\t\t\t<div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n\t\t\t\t\t<div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n\t\t\t\t</ViewOptions>\n\t\t\t</ViewPanel>\n\t\t</View>\n\t)\n}\n\nfunction makeCanvas() {\n\tconst w = 256\n\tconst h = 256\n\tconst { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h)\n\tctx.fillStyle = \"#09f\"\n\tctx.fillRect(0, 0, w, h)\n\tctx.fillStyle = \"#f90\"\n\tctx.font = `${h / 2}px serif`\n\tctx.textAlign = \"center\"\n\tctx.textBaseline = \"middle\"\n\tctx.fillText(\"TGD\", w / 2, h / 2)\n\treturn canvas\n}\n"

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