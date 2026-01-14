import {
    type TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdTexture2D,
    TgdVertexArray,
    tgdCanvasCreateWithContext2D,
} from "@tolokoban/tgd"
import { caseNumberToColors, cubeEdges, cubeMidPoints } from "./geometry"

export class PainterMidPoints extends TgdPainter {
    private readonly texture: TgdTexture2D
    private readonly dataset: TgdDataset
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private _caseNumber = 0

    constructor(private readonly context: TgdContext) {
        super()
        this.dataset = this.createDataset()
        this.program = this.createProgram()
        this.vao = new TgdVertexArray(context.gl, this.program, [this.dataset])
        this.texture = this.createTexture()
    }

    get caseNumber() {
        return this._caseNumber
    }
    set caseNumber(value: number) {
        if (value === this._caseNumber) return

        this._caseNumber = value
        const corners = caseNumberToColors(value)
        const visibles: number[] = []
        for (let i = 0; i < 12; i++) {
            const a = corners[cubeEdges[i * 2]]
            const b = corners[cubeEdges[i * 2 + 1]]
            visibles.push(a === b ? 0 : 1)
        }
        this.dataset.set("attVisible", new Float32Array(visibles))
        this.vao.updateDataset(this.dataset)
        this.context.paint()
    }

    delete(): void {
        this.texture.delete()
        this.program.delete()
        this.vao.delete()
    }

    paint(): void {
        const { context, program, vao, texture } = this
        const { gl, camera } = context
        program.use()
        texture.activate(0, program, "uniTexture")
        program.uniform1f("uniHalfScreenHeightInPixels", context.height * 0.5)
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawArrays(gl.POINTS, 0, 12)
        vao.unbind()
    }

    private createDataset() {
        const dataset = new TgdDataset({
            attPoint: "vec3",
            attVisible: "float",
        })
        dataset.set("attPoint", cubeMidPoints)
        return dataset
    }

    private createProgram(): TgdProgram {
        const vert = new TgdShaderVertex({
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniHalfScreenHeightInPixels: "float",
            },
            attributes: {
                attPoint: "vec4",
                attVisible: "float",
            },
            varying: { varU: "float" },
            mainCode: [
                "varU = float(gl_VertexID) / 12.0;",
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
                "gl_PointSize = 0.2 * uniHalfScreenHeightInPixels / gl_Position.w;",
                "gl_PointSize *= attVisible;",
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            varying: { varU: "float" },
            outputs: { FragColor: "vec4" },
            mainCode: [
                "vec2 uv = vec2(varU, 0.0) + gl_PointCoord.xy * vec2(1.0 / 12.0, 1.0);",
                "FragColor = texture(uniTexture, uv);",
                "if (FragColor.a < .1) discard;",
            ],
        }).code
        const program = new TgdProgram(this.context.gl, { vert, frag })
        return program
    }

    createTexture(): TgdTexture2D {
        const texture = new TgdTexture2D(this.context)
        texture.setParams({
            magFilter: "LINEAR",
            minFilter: "LINEAR",
        })
        const letters = "ABCDEFGHIJKL"
        const count = letters.length
        const size = 64
        const width = size * count
        const height = size
        const { ctx, canvas } = tgdCanvasCreateWithContext2D(width, height)
        ctx.font = `bold ${size}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = "#0f0"
        for (let i = 0; i < count; i++) {
            const letter = letters.charAt(i)
            const x = (i + 0.5) / count
            const y = 0.5
            ctx.fillText(letter, x * width, y * height)
        }
        texture.loadBitmap(canvas)
        return texture
    }
}
