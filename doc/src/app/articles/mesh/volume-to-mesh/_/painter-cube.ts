import {
    TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdVertexArray,
} from "@tolokoban/tgd"

export class PainterCube extends TgdPainter {
    private readonly dataset: TgdDataset
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(private readonly context: TgdContext) {
        super()
        this.dataset = this.createDataset()
        this.program = this.createProgram()
        // prettier-ignore
        const elements = new Uint8Array([
            0, 1, 0, 2, 0, 4,
            1, 3, 1, 5,
            2, 3, 2, 6,
            3, 7,
            4, 5, 4, 6,
            5, 7,
            6, 7
        ])
        this.vao = new TgdVertexArray(
            context.gl,
            this.program,
            [this.dataset],
            elements
        )
    }

    delete(): void {
        this.program.delete()
        this.vao.delete()
    }

    paint(): void {
        const { context, program, vao } = this
        const { gl, camera } = context
        program.use()
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawElements(gl.LINES, 24, gl.UNSIGNED_BYTE, 0)
        vao.unbind()
    }

    private createDataset() {
        const dataset = new TgdDataset({
            attPoint: "vec3",
        })
        const P = +1
        const N = -1
        // prettier-ignore
        dataset.set("attPoint", new Float32Array([
            N, N, N, // 0
            N, N, P, // 1
            N, P, N, // 2
            N, P, P, // 3
            P, N, N, // 4
            P, N, P, // 5
            P, P, N, // 6
            P, P, P, // 7
        ]))
        return dataset
    }

    private createProgram(): TgdProgram {
        const vert = new TgdShaderVertex({
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
            },
            attributes: {
                attPoint: "vec4",
            },
            varying: {
                varColor: "vec3",
            },
            mainCode: [
                "varColor = abs(attPoint.xyz);",
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            varying: {
                varColor: "vec3",
            },
            outputs: { FragColor: "vec4" },
            mainCode: ["FragColor = vec4(varColor, 1.0);"],
        }).code
        const program = new TgdProgram(this.context.gl, { vert, frag })
        return program
    }
}
