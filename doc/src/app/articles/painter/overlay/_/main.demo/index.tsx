/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0.3, 0.5, 1],\n\t\tdepth: 1,\n\t});\n\tconst canvas = tgdCanvasCreatePalette(\n\t\t[\"#f44b\", \"#4f4b\", \"#44fb\", \"#0000\"],\n\t\t2,\n\t\t2,\n\t);\n\tconst overlay = new TgdPainterOverlay(context, {\n\t\tmargin: 16,\n\t\twidth: 160,\n\t\theight: 120,\n\t\talignX: +1,\n\t\talignY: +1,\n\t\ttexture: new TgdTexture2D(context, {\n\t\t\tload: canvas,\n\t\t\tparams: {\n\t\t\t\tminFilter: \"NEAREST\",\n\t\t\t\tmagFilter: \"NEAREST\",\n\t\t\t},\n\t\t\tstorage: { flipY: false },\n\t\t}),\n\t});\n\tconst cube = new TgdPainterMesh(context);\n\tcube.transfo.orbitAroundX(Math.random());\n\tcube.transfo.orbitAroundY(Math.random());\n\tcube.transfo.orbitAroundZ(Math.random());\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: [cube],\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [overlay],\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(1.2, 1.2);\n\tcontext.paint();\n\toverlay.eventTap.addListener((evt) => {\n\t\tconst ctx = canvas.getContext(\"2d\");\n\t\tif (!ctx) return;\n\n\t\tconst x = ((1 + evt.x) * ctx.canvas.width) / 2;\n\t\tconst y = ((1 + evt.y) * ctx.canvas.height) / 2;\n\t\tctx.fillStyle = \"#ff0\";\n\t\tctx.beginPath();\n\t\tctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);\n\t\tctx.fill();\n\t});\n\treturn ({ alignX, alignY }: { alignX: number; alignY: number }) => {\n\t\toverlay.alignX = alignX;\n\t\toverlay.alignY = alignY;\n\t\tcontext.paint();\n\t};\n}"}
const FULL = "import {\n\ttgdCanvasCreatePalette,\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterOverlay,\n\tTgdPainterState,\n\tTgdTexture2D,\n} from \"@tolokoban/tgd\";\n\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0.3, 0.5, 1],\n\t\tdepth: 1,\n\t});\n\tconst canvas = tgdCanvasCreatePalette(\n\t\t[\"#f44b\", \"#4f4b\", \"#44fb\", \"#0000\"],\n\t\t2,\n\t\t2,\n\t);\n\tconst overlay = new TgdPainterOverlay(context, {\n\t\tmargin: 16,\n\t\twidth: 160,\n\t\theight: 120,\n\t\talignX: +1,\n\t\talignY: +1,\n\t\ttexture: new TgdTexture2D(context, {\n\t\t\tload: canvas,\n\t\t\tparams: {\n\t\t\t\tminFilter: \"NEAREST\",\n\t\t\t\tmagFilter: \"NEAREST\",\n\t\t\t},\n\t\t\tstorage: { flipY: false },\n\t\t}),\n\t});\n\tconst cube = new TgdPainterMesh(context);\n\tcube.transfo.orbitAroundX(Math.random());\n\tcube.transfo.orbitAroundY(Math.random());\n\tcube.transfo.orbitAroundZ(Math.random());\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: [cube],\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [overlay],\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(1.2, 1.2);\n\tcontext.paint();\n\toverlay.eventTap.addListener((evt) => {\n\t\tconst ctx = canvas.getContext(\"2d\");\n\t\tif (!ctx) return;\n\n\t\tconst x = ((1 + evt.x) * ctx.canvas.width) / 2;\n\t\tconst y = ((1 + evt.y) * ctx.canvas.height) / 2;\n\t\tctx.fillStyle = \"#ff0\";\n\t\tctx.beginPath();\n\t\tctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);\n\t\tctx.fill();\n\t});\n\treturn ({ alignX, alignY }: { alignX: number; alignY: number }) => {\n\t\toverlay.alignX = alignX;\n\t\toverlay.alignY = alignY;\n\t\tcontext.paint();\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\talignX: {\n\t\t\t\t\tlabel: \"alignX\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +1,\n\t\t\t\t},\n\t\t\t\talignY: {\n\t\t\t\t\tlabel: \"alignY\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +1,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n"

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