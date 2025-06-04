import {
    TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdVertexArray,
} from "@tolokoban/tgd"
import {
    cubeEdges,
    cubeMidPoints,
    cubeVertices,
    trianglesStringToElements,
} from "./geometry"

export class PainterTriangles extends TgdPainter {
    private readonly dataset: TgdDataset
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private elementsCount = 0
    private _triangles = ""

    constructor(private readonly context: TgdContext) {
        super()
        this.dataset = this.createDataset()
        this.program = this.createProgram()
        const elements = new Uint8Array()
        this.vao = new TgdVertexArray(
            context.gl,
            this.program,
            [this.dataset],
            elements
        )
    }

    set triangles(value: string) {
        const elements = trianglesStringToElements(value)
        this.vao.updateElements(elements)
        this.elementsCount = elements.length
        this.context.paint()
    }

    delete(): void {
        this.program.delete()
        this.vao.delete()
    }

    paint(): void {
        const { context, program, vao, elementsCount } = this
        const { gl, camera } = context
        program.use()
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawElements(gl.TRIANGLES, elementsCount, gl.UNSIGNED_BYTE, 0)
        vao.unbind()
    }

    private createDataset() {
        const dataset = new TgdDataset({
            attPoint: "vec3",
        })
        dataset.set("attPoint", cubeMidPoints)
        return dataset
    }

    private createProgram(): TgdProgram {
        const vert = new TgdShaderVertex({
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniLight: "float",
            },
            attributes: {
                attPoint: "vec4",
            },
            mainCode: [
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            outputs: { FragColor: "vec4" },
            mainCode: [
                "float a = 1.0;",
                "FragColor = vec4(",
                "  .8 * (gl_FrontFacing ? vec3(0, .5, 1) : vec3(1, 0, 0)),",
                "  a",
                ");",
            ],
        }).code
        const program = new TgdProgram(this.context.gl, { vert, frag })
        return program
    }
}
