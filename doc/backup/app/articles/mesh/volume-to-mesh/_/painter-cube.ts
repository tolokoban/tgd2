import {
    TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdVertexArray,
} from "@tolokoban/tgd"
import { cubeEdges, cubeVertices } from "./geometry"

export class PainterCube extends TgdPainter {
    private readonly dataset: TgdDataset
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(private readonly context: TgdContext) {
        super()
        this.dataset = this.createDataset()
        this.program = this.createProgram()
        // prettier-ignore
        const elements = cubeEdges
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
        dataset.set("attPoint", cubeVertices)
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
