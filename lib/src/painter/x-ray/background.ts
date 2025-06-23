import { TgdPainter } from "../painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"

import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"

import VERT from "./background.vert"
import FRAG from "./background.frag"

export interface TgdPainterBackgroundOptions {
    texture: TgdTexture2D
}

export class TgdPainterBackground extends TgdPainter {
    public texture: TgdTexture2D | undefined

    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(
        private readonly context: { gl: WebGL2RenderingContext },
        { texture }: Partial<TgdPainterBackgroundOptions> = {}
    ) {
        super()
        this.texture = texture
        this.program = new TgdProgram(context.gl, {
            vert: VERT,
            frag: FRAG,
        })
        const dataset = new TgdDataset({
            attPoint: "vec2",
            attUV: "vec2",
        })
        dataset.set(
            "attPoint",
            new Float32Array([-1, -1, +1, -1, -1, +1, +1, +1])
        )
        dataset.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
        this.vao = new TgdVertexArray(context.gl, this.program, [dataset])
    }

    delete(): void {
        const { program, vao } = this
        program.delete()
        vao.delete()
    }

    paint(): void {
        const { gl } = this.context
        const { vao, program, texture } = this
        program.use()
        texture?.activate(0, program, "uniTexture")
        gl.disable(gl.CULL_FACE)
        vao.bind()
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
}
