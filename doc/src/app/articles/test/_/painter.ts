import {
    TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdVertexArray,
} from "@tolokoban/tgd"

export default class Painter extends TgdPainter {
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(private readonly context: TgdContext) {
        super()
        this.program = new TgdProgram(context.gl, {
            vert: new TgdShaderVertex({
                varying: {
                    varRadius: "float",
                },
                attributes: {
                    attPos: "vec2",
                    attRadius: "float",
                },
                mainCode: [
                    "varRadius = attRadius;",
                    "gl_Position = vec4(attPos, 0.0, 1.0);",
                    "gl_PointSize = 256.0 * attRadius;",
                ],
            }).code,
            frag: new TgdShaderFragment({
                varying: {
                    varRadius: "float",
                },
                mainCode: [
                    "float r = 2.0 * length(gl_PointCoord - vec2(0.5));",
                    "if (r > 1.0) discard;",
                    "FragColor = vec4(varRadius, 0.667 * varRadius, 0, 1);",
                ],
            }).code,
        })
        const dataset = new TgdDataset({
            attPos: "vec2",
            attRadius: "float",
        })
        // prettier-ignore
        dataset.set("attPos", new Float32Array([
            -1, -1,
            -1, +1,
            +1, -1,
            +1, +1,
            +1, 0,
            -1, 0,
            0, +1,
            0, -1,
            0, 0,
        ]))
        // prettier-ignore
        dataset.set("attRadius", new Float32Array([
            .25, .25, .25, .25,
            .5, .5, .5, .5,
            1
        ]))
        this.vao = new TgdVertexArray(context.gl, this.program, [dataset])
    }

    delete(): void {
        this.program.delete()
        this.vao.delete()
    }

    paint(time: number, delay: number): void {
        const { vao, program } = this
        const { gl } = this.context
        program.use()
        gl.disable(gl.CULL_FACE)
        vao.bind()
        gl.drawArrays(gl.POINTS, 0, 9)
    }
}
