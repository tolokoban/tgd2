import { TgdContext, TgdTexture2D } from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"
import { Painter } from "./painter"

function init(ctx: TgdContext) {
    // #begin
    const r = 0x00
    const g = 0x99
    const b = 0xff
    const R = 0xff
    const G = 0x99
    const B = 0x00
    // prettier-ignore
    const data = new Uint8Array([
        r,g,b, r,g,b, r,g,b, r,g,b, r,g,b, /* padding -> */ 0,
        r,g,b, R,G,B, R,G,B, R,G,B, r,g,b, /* padding -> */ 0,
        r,g,b, r,g,b, R,G,B, r,g,b, r,g,b, /* padding -> */ 0,
        r,g,b, r,g,b, R,G,B, r,g,b, r,g,b, /* padding -> */ 0,
        r,g,b, r,g,b, r,g,b, r,g,b, r,g,b, /* padding -> */ 0,
    ])
    const texture = new TgdTexture2D(ctx, { flipY: true })
        .setParams({
            magFilter: "NEAREST",
        })
        .loadData(data, {
            width: 5,
            height: 5,
            internalFormat: "RGB8",
            format: "RGB",
        })
    const background = new Painter(ctx, texture)
    ctx.add(background)
    ctx.paint()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}

const COLORS: Record<string, [number, number, number]> = {
    "0": [0, 0.333, 1],
    "1": [1, 0.666, 0],
}

function makeRGB(...lines: string[]) {
    const code = lines.join("")
    const data: number[] = []
    for (const line of lines) {
        line.split("").map(digit => data.push(...(COLORS[digit] ?? [])))
        let size = line.length * "RGB".length
        while (size % 4 !== 0) {
            data.push(0)
            size++
        }
    }
    return new Uint8Array(data.map(v => Math.floor(255 * v)))
}
