import {
    tgdCanvasCreatePalette,
    tgdCanvasCreateWithContext2D,
    TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdTexture2D,
    TgdVertexArray,
} from "@tolokoban/tgd"
import { caseNumberToColors, cubeVertices } from "./geometry"

export class PainterCorners extends TgdPainter {
    private readonly texture: TgdTexture2D
    private readonly dataset: TgdDataset
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private _caseNumber = -1

    constructor(private readonly context: TgdContext) {
        super()
        this.dataset = this.createDataset()
        this.program = this.createProgram()
        this.vao = new TgdVertexArray(context.gl, this.program, [this.dataset])
        this.texture = this.createTexture()
        this.caseNumber = 0
    }

    get caseNumber() {
        return this._caseNumber
    }
    set caseNumber(value: number) {
        if (value === this._caseNumber) return

        this._caseNumber = value
        const colors = caseNumberToColors(value)
        this.dataset.set("attColor", new Float32Array(colors))
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
        gl.drawArrays(gl.POINTS, 0, 8)
        vao.unbind()
    }

    private createDataset() {
        const dataset = new TgdDataset({
            attPoint: "vec3",
            attColor: "float",
        })
        dataset.set("attPoint", cubeVertices)
        dataset.set("attColor", new Float32Array(cubeVertices.length))
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
                attColor: "float",
            },
            varying: { varColor: "float" },
            mainCode: [
                "varColor = attColor;",
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
                "gl_PointSize = 0.2 * uniHalfScreenHeightInPixels / gl_Position.w;",
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            varying: { varColor: "float" },
            outputs: { FragColor: "vec4" },
            mainCode: [
                "vec2 pos = 2.0 * (gl_PointCoord.xy - vec2(.5));",
                "float radius = dot(pos, pos);",
                "if (radius > 1.0) discard;",
                "vec2 uv = vec2(varColor, .5);",
                "FragColor = texture(uniTexture, uv);",
            ],
        }).code
        const program = new TgdProgram(this.context.gl, { vert, frag })
        return program
    }

    createTexture(): TgdTexture2D {
        const texture = new TgdTexture2D(this.context)
        texture.setParams({
            magFilter: "NEAREST",
            minFilter: "NEAREST",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        })
        texture.loadBitmap(tgdCanvasCreatePalette(["#07f", "#f00"]))
        return texture
    }
}
