import {
    TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdTexture2D,
    TgdVertexArray,
} from "@tolokoban/tgd"

export class Painter extends TgdPainter {
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(
        private readonly context: TgdContext,
        private readonly texture: TgdTexture2D
    ) {
        super()
        this.prg = new TgdProgram(context.gl, {
            vert: [
                "#version 300 es",
                "in vec2 attPoint;",
                "out vec2 varUV;",
                "void main() {",
                [
                    "varUV = attPoint + vec2(0.5);",
                    "gl_Position = vec4(attPoint, 0.0, 1.0);",
                ],
                "}",
            ],
            frag: [
                "#version 300 es",
                "precision mediump float;",
                "uniform sampler2D uniTexture;",
                "in vec2 varUV;",
                "out vec4 FragColor;",
                "void main() {",
                ["FragColor = texture(uniTexture, varUV);"],
                "}",
            ],
        })
        const ds = new TgdDataset({
            attPoint: "vec2",
        })
        // prettier-ignore
        ds.set("attPoint", new Float32Array([
            -1, +1,
            +1, +1,
            -1, -1,
            +1, -1
        ]))
        this.vao = new TgdVertexArray(context.gl, this.prg, [ds])
    }

    delete(): void {
        this.vao.delete()
        this.prg.delete()
    }

    paint(time: number, delay: number): void {
        const { context, prg, vao, texture } = this
        const { gl } = context
        prg.use()
        texture.activate(0, prg, "uniTexture")
        vao.bind()
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        vao.unbind()
    }
}
