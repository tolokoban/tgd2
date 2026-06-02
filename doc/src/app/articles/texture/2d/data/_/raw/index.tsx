/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./texture2d-from-data.demo"

const FOCUS = {"Detail #1":"\tconst r = 0x00;\n\tconst g = 0x99;\n\tconst b = 0xff;\n\tconst R = 0xff;\n\tconst G = 0x99;\n\tconst B = 0x00;\n\t// prettier-ignore\n\tconst data = new Uint8Array([\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t]);\n\tconst texture = new TgdTexture2D(ctx, {\n\t\tstorage: { flipY: true, format: \"RGB8 / RGB / UNSIGNED_BYTE\" },\n\t\tparams: {\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadData(data, {\n\t\twidth: 5,\n\t\theight: 5,\n\t});\n\tconst background = new Painter(ctx, texture);\n\tctx.add(background);\n\tctx.paint();"}
const FULL = "import View from \"@/components/demo/Tgd\";\nimport { type TgdContext, TgdTexture2D } from \"@tolokoban/tgd\";\nimport { Painter } from \"./painter\";\n\nfunction init(ctx: TgdContext) {\n\tconst r = 0x00;\n\tconst g = 0x99;\n\tconst b = 0xff;\n\tconst R = 0xff;\n\tconst G = 0x99;\n\tconst B = 0x00;\n\t// prettier-ignore\n\tconst data = new Uint8Array([\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t]);\n\tconst texture = new TgdTexture2D(ctx, {\n\t\tstorage: { flipY: true, format: \"RGB8 / RGB / UNSIGNED_BYTE\" },\n\t\tparams: {\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadData(data, {\n\t\twidth: 5,\n\t\theight: 5,\n\t});\n\tconst background = new Painter(ctx, texture);\n\tctx.add(background);\n\tctx.paint();\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} />;\n}\n"

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