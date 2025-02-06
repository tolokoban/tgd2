import { TgdContext } from "@tgd/context"
import { TgdPainter } from "../../painter"
import { webglStencilGet, webglStencilSet } from "@tgd/utils"
import { TgdProgram } from "@tgd/program"
import { TgdVertexArray } from "@tgd/vao"
import { TgdDataset } from "@tgd/dataset"

import VERT from "./stencil.vert"
import FRAG from "./stencil.frag"

export class TgdPainterDebugStencil extends TgdPainter {
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(private readonly context: TgdContext) {
        super()

        this.program = new TgdProgram(context, {
            vert: VERT,
            frag: FRAG,
        })
        const dataset = new TgdDataset({
            attPoint: "vec2",
        })
        dataset.set(
            "attPoint",
            new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1])
        )
        this.vao = new TgdVertexArray(context.gl, this.program, [dataset])
    }

    paint(_time: number, _delay: number): void {
        const { context, program, vao } = this
        const { gl } = context
        const state = webglStencilGet(gl)
        gl.disable(gl.DEPTH_TEST)
        gl.disable(gl.CULL_FACE)
        const clear = (
            [r, g, b]: [r: number, g: number, b: number],
            value: number
        ) => {
            program.uniform4f("uniColor", r, g, b, 1)
            gl.stencilFunc(gl.EQUAL, value, 0xff)
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        }
        gl.disable(gl.STENCIL_TEST)
        gl.clearColor(0.5, 0.5, 0.5, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)

        program.use()
        vao.bind()
        gl.enable(gl.STENCIL_TEST)
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP)
        clear([0, 0, 0], 0)
        clear([1, 0, 0], 1)
        clear([0, 1, 0], 2)
        clear([0, 0, 1], 3)
        clear([0, 1, 1], 4)
        clear([1, 0, 1], 5)
        clear([1, 1, 0], 6)
        clear([1, 1, 1], 7)
        vao.unbind()
        webglStencilSet(gl, state)
    }

    delete(): void {}
}
