import { tgdCanvasCreateWithContext2D } from "@tolokoban/tgd"

import { makeColors } from "./util"
import { RowGenerator } from "./row-generator"

export function makeCanvasTriangleSlow(size: number, modulo: number) {
    const colors = makeColors(modulo, 50)
    const { canvas, ctx } = tgdCanvasCreateWithContext2D(size, size)
    const generator = new RowGenerator()
    for (let row = 0; row < size; row++) {
        const line = generator.next()
        for (let col = 0; col <= row; col++) {
            const value = line[col] % modulo
            const color = colors[value]
            ctx.fillStyle = color
            ctx.fillRect(col, row, 1, 1)
        }
    }
    return canvas
}
