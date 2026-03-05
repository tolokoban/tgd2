import { TgdTexture2D } from "@tgd/texture"
import { tgdCanvasCreateWithContext2D } from "@tgd/utils"
import { TgdPainterSprites, TgdPainterSpritesAtlas } from "../sprites"
import { TgdContext } from "@tgd/context"
import { tgdLoadCanvasFromSvg } from "@tgd/loader"
import { TgdColor } from "@tgd/color"

const SIZE = 256
const R = "#F63652FF"
const G = "#70A41CFF"
const B = "#2F84E3FF"

interface SpritesOptions {
    /**
     * Resulting image will be 3*size × 2*size.
     */
    size: number
    /**
     * Tips' scale
     */
    scale: number
    red: string
    green: string
    blue: string
}

export async function createSprites(
    context: TgdContext,
    { size = 128, scale = 0.5, red = R, green = G, blue = B }: Partial<SpritesOptions> = {},
): Promise<{ tips: TgdPainterSprites }> {
    const width = 1 / 3
    const height = 1 / 2
    const canvas = await tgdLoadCanvasFromSvg(makeTipsSVG(size, red, green, blue))
    const texture = new TgdTexture2D(context, {
        params: {
            magFilter: "LINEAR",
            minFilter: "LINEAR",
        },
        load: canvas,
    })
    const tips = new TgdPainterSprites(context, {
        atlas: [
            { x: 0, y: 0, width, height },
            { x: width, y: 0, width, height },
            { x: 2 * width, y: 0, width, height },
            { x: 0, y: height, width, height },
            { x: width, y: height, width, height },
            { x: 2 * width, y: height, width, height },
        ],
        texture,
        atlasUnit: scale,
        faceCamera: true,
    })
    tips.add({ index: 0, x: +1, y: 0, z: 0 })
    tips.add({ index: 1, x: 0, y: +1, z: 0 })
    tips.add({ index: 2, x: 0, y: 0, z: +1 })
    tips.add({ index: 3, x: -1, y: 0, z: 0 })
    tips.add({ index: 4, x: 0, y: -1, z: 0 })
    tips.add({ index: 5, x: 0, y: 0, z: -1 })
    return {
        tips,
    }
}

function makeTipsSVG(size: number, red: string, green: string, blue: string) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${3 * size}" height="${
        2 * size
    }" viewBox="0 0 ${3 * size} ${2 * size}">
<style>
text {
    font: bold ${(80 * size) / 128}px sans-serif;
    dominant-baseline: middle;
    text-anchor: middle;
    transform: translateY(${(8 * size) / 128}px);
}
</style>
${[red, green, blue].map((color, index) => {
    const x = (0.5 + index) * size
    const y1 = size * 0.5
    const y2 = y1 + size
    const r1 = (55 * size) / 128
    const r2 = (50 * size) / 128
    const stroke = (8 * size) / 128
    const back = TgdColor.fromString(color).luminanceMul(0.25).toString()
    return `<circle fill="${color}" cx="${x}" cy="${y1}" r="${r1}" />
<text fill="#000" x="${x}" y="${y1}">${"XYZ".charAt(index)}</text>
<circle stroke="${color}" fill="${back}" stroke-width="${stroke}" cx="${x}" cy="${y2}" r="${r2}"/>`
})}
</svg>`
}
