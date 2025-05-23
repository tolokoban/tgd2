import { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdPainter } from "@tgd/painter/painter"
import { tgdCanvasCreateWithContext2D } from "@tgd/utils"
import { TgdVertexArray } from "@tgd/vao"
import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"

import FRAG from "./shader.frag"
import VERT from "./shader.vert"

export class TipsPainter extends TgdPainter {
    private readonly texture: TgdTexture2D
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(private readonly context: TgdContext) {
        super()
        this.texture = new TgdTexture2D(context)
            .loadBitmap(createTipsCanvas())
            .setParams({
                minFilter: "LINEAR",
                magFilter: "LINEAR",
            })
            .generateMipmap()
        const data = new TgdDataset({
            attPos: "vec3",
            attUV: "vec2",
        })
        // prettier-ignore
        data.set("attPos", new Float32Array([
             1,  0,  0,
             0,  1,  0,
             0,  0,  1,
            -1,  0,  0,
             0, -1,  0,
             0,  0, -1,
        ]))
        const X = 1 / 3
        const Y = 1 / 2
        // prettier-ignore
        data.set("attUV", new Float32Array([
              0, 0,
              X, 0,
            2*X, 0,
              0, Y,
              X, Y,
            2*X, Y,
        ]))
        const prg = new TgdProgram(context.gl, { vert: VERT, frag: FRAG })
        const vao = new TgdVertexArray(context.gl, prg, [data])
        this.prg = prg
        this.vao = vao
    }

    delete(): void {
        this.vao.delete()
    }

    paint(): void {
        const { context, prg, vao } = this
        const { gl, camera } = context
        prg.use()
        this.texture.activate(0)
        prg.uniform1i("uniTexture", 0)
        prg.uniform1f("uniScreenHeight", context.height)
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawArrays(gl.POINTS, 0, 6)
    }
}

function createTipsCanvas() {
    const SIZE = 256
    const { canvas, ctx } = tgdCanvasCreateWithContext2D(SIZE * 3, SIZE * 2)
    paintDisk(ctx, 0, 0, SIZE, "X", "#f00", "#fff")
    paintDisk(ctx, 1, 0, SIZE, "Y", "#0f0", "#000")
    paintDisk(ctx, 2, 0, SIZE, "Z", "#00f", "#fff")
    paintDisk(ctx, 0, 1, SIZE, "", "#f00", "#500")
    paintDisk(ctx, 1, 1, SIZE, "", "#0f0", "#050")
    paintDisk(ctx, 2, 1, SIZE, "", "#00f", "#005")
    return canvas
}

function paintDisk(
    context: CanvasRenderingContext2D,
    col: number,
    row: number,
    size: number,
    text: string,
    colorBack: string,
    colorText = "#fff"
) {
    const x = (col + 0.5) * size
    const y = (row + 0.5) * size
    const r = size * 0.45
    context.fillStyle = colorBack
    context.beginPath()
    context.ellipse(x, y, r, r, 0, 0, 2 * Math.PI)
    context.fill()
    if (text) {
        context.font = `bold ${size * 0.5}px sans-serif`
        context.fillStyle = colorText
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.fillText(text, x, y)
    } else {
        context.fillStyle = colorText
        context.beginPath()
        context.ellipse(x, y, r * 0.8, r * 0.8, 0, 0, 2 * Math.PI)
        context.fill()
    }
}
