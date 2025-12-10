/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./texture2d-from-data.demo"

const FOCUS = {"Detail #1":"    const bg = [0x00, 0x99, 0xff]\n    const fg = [0xff, 0x99, 0x00]\n    // prettier-ignore\n    const pixels = [\n        \"     \",\n        \" ### \",\n        \"  #  \",\n        \"  #  \",\n        \"     \",\n    ]\n    const table = new TgdTableUint8(5, 5, 3)\n    pixels.forEach((line, row) => {\n        line.split(\"\").forEach((color, col) =>\n            table.setVec(color === \"#\" ? fg : bg, col, row)\n        )\n    })\n    const data = new Uint8Array(table.buffer)\n    const texture = new TgdTexture2D(ctx, { flipY: true })\n        .setParams({\n            magFilter: \"NEAREST\",\n        })\n        .loadData(data, {\n            width: 5,\n            height: 5,\n            internalFormat: \"RGB8\",\n            format: \"RGB\",\n        })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()"}
const FULL = "import { TgdContext, TgdTableUint8, TgdTexture2D } from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\nimport { Painter } from \"./painter\"\n\nfunction init(ctx: TgdContext) {\n    const bg = [0x00, 0x99, 0xff]\n    const fg = [0xff, 0x99, 0x00]\n    // prettier-ignore\n    const pixels = [\n        \"     \",\n        \" ### \",\n        \"  #  \",\n        \"  #  \",\n        \"     \",\n    ]\n    const table = new TgdTableUint8(5, 5, 3)\n    pixels.forEach((line, row) => {\n        line.split(\"\").forEach((color, col) =>\n            table.setVec(color === \"#\" ? fg : bg, col, row)\n        )\n    })\n    const data = new Uint8Array(table.buffer)\n    const texture = new TgdTexture2D(ctx, { flipY: true })\n        .setParams({\n            magFilter: \"NEAREST\",\n        })\n        .loadData(data, {\n            width: 5,\n            height: 5,\n            internalFormat: \"RGB8\",\n            format: \"RGB\",\n        })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n\nconst COLORS: Record<string, [number, number, number]> = {\n    \"0\": [0, 0.333, 1],\n    \"1\": [1, 0.666, 0],\n}\n\nfunction makeRGB(...lines: string[]) {\n    const code = lines.join(\"\")\n    const data: number[] = []\n    for (const line of lines) {\n        line.split(\"\").map((digit) => data.push(...(COLORS[digit] ?? [])))\n        let size = line.length * \"RGB\".length\n        while (size % 4 !== 0) {\n            data.push(0)\n            size++\n        }\n    }\n    return new Uint8Array(data.map((v) => Math.floor(255 * v)))\n}\n"

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