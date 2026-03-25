import { TgdColor } from "@tgd/color"
import type { TgdContext } from "@tgd/context"
import { tgdLoadCanvasFromSvg } from "@tgd/loader"
import { TgdTexture2D } from "@tgd/texture"
import { RED, GREEN, BLUE } from "./consts"

const SIZE = 128

interface TipsOptions {
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

export async function createTipsTexture(
    context: TgdContext,
    { size = SIZE, red = RED, green = GREEN, blue = BLUE }: Partial<TipsOptions> = {},
): Promise<TgdTexture2D> {
    const canvas = await tgdLoadCanvasFromSvg(makeTipsSVG(size, red, green, blue))
    const texture = new TgdTexture2D(context, {
        name: `Gizmo tip (${size})`,
        params: {
            magFilter: "LINEAR",
            minFilter: "LINEAR",
        },
        load: canvas,
    })
    return texture
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
    const back = TgdColor.fromString(color).alphaMul(0.25).toString()
    return `<circle fill="${color}" cx="${x}" cy="${y1}" r="${r1}" />
<text fill="#000" x="${x}" y="${y1}">${"XYZ".charAt(index)}</text>
<circle stroke="${color}" fill="${back}" stroke-width="${stroke}" cx="${x}" cy="${y2}" r="${r2}"/>`
})}
</svg>`
}
