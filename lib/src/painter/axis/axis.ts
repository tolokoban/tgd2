import { TgdContext } from "@/context"
import { TgdProgram } from "@/types"
import { TgdPainter } from "@/painter/painter"
import { TgdDataset } from "@/dataset"
import { TgdVertexArray } from "@/vao"

import VERT from "./axis.vert"
import FRAG from "./axis.frag"

export class TgdPainterAxis extends TgdPainter {
    private readonly vao: TgdVertexArray
    private readonly prg: TgdProgram

    constructor(public readonly context: TgdContext) {
        super()
        const prg = context.programs.create({
            vert: VERT,
            frag: FRAG,
        })
        this.prg = prg
        const dataset = new TgdDataset({
            attPos: "vec3",
            attColor: "vec4",
        })
        // prettier-ignore
        dataset.set("attPos", new Float32Array([
            0, 0, 0, +1, +0, +0,
            0, 0, 0, +0, +1, +0,
            0, 0, 0, +0, +0, +1,
            0, 0, 0, -1, -0, -0,
            0, 0, 0, -0, -1, -0,
            0, 0, 0, -0, -0, -1,
        ]))
        const a = 1
        const b = 0.5
        // prettier-ignore
        dataset.set("attColor", new Float32Array([
            a, 0, 0, 1, a, 0, 0, 1,
            0, a, 0, 1, 0, a, 0, 1,
            0, 0, a, 1, 0, 0, a, 1,
            b, 0, 0, 1, b, 0, 0, 1,
            0, b, 0, 1, 0, b, 0, 1,
            0, 0, b, 1, 0, 0, b, 1,
        ]))
        this.vao = context.createVAO(prg, [dataset])
    }

    delete(): void {
        this.vao.delete()
    }

    paint(time: number, delay: number): void {
        const { context, prg, vao } = this
        const { gl, camera } = context
        prg.use()
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixViewModel)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawArrays(gl.LINES, 0, 12)
    }

    update(time: number, delay: number): void {}
}
