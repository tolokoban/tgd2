import {
    type TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdVertexArray,
} from "@tolokoban/tgd"
import { cubeMidPoints, trianglesStringToElements } from "./geometry"

export class PainterWireframe extends TgdPainter {
    private readonly dataset: TgdDataset
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private elementsCount = 0

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
        const wireframe: number[] = []
        for (let i = 0; i < elements.length; i += 3) {
            const a = elements[i]
            const b = elements[i + 1]
            const c = elements[i + 2]
            wireframe.push(a, b, c, a)
        }
        this.vao.updateElements(wireframe)
        this.elementsCount = wireframe.length
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
        gl.drawElements(gl.LINES, elementsCount, gl.UNSIGNED_BYTE, 0)
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
                "gl_Position = uniProjectionMatrix * ",
                "  (uniModelViewMatrix * attPoint + vec4(0, 0, 0.02, 0));",
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            outputs: { FragColor: "vec4" },
            mainCode: ["FragColor = vec4(0,0,0,1);"],
        }).code
        const program = new TgdProgram(this.context.gl, { vert, frag })
        return program
    }
}
