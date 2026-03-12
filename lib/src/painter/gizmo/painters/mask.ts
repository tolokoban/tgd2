import { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdPainterState } from "@tgd/painter/state"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import { TgdVertexArray } from "@tgd/vao"

export class PainterTipsMask extends TgdPainter {
    public size: number

    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(
        private readonly context: TgdContext,
        options: { size: number },
    ) {
        super()
        this.size = options.size
        const prg = new TgdProgram(context.gl, {
            vert: new TgdShaderVertex({
                uniforms: {
                    uniIndex: "float",
                    uniTransfoMatrix: "mat4",
                    uniModelViewMatrix: "mat4",
                    uniProjectionMatrix: "mat4",
                    uniRadius: "float",
                    uniScreenHeightInPixels: "float",
                },
                attributes: {
                    attPoint: "vec3",
                    attIndex: "float",
                },
                varying: {
                    varIndex: "float",
                },
                mainCode: [
                    "varIndex = attIndex;",
                    "vec4 point = uniModelViewMatrix * vec4(attPoint.xyz, 1.0);",
                    "vec4 shift = point + vec4(0, uniRadius, 0, 0);",
                    "gl_Position = uniProjectionMatrix * point;",
                    "vec4 screenShift = uniProjectionMatrix * shift;",
                    "gl_PointSize = max(",
                    ["8.0,", "abs(screenShift.y - gl_Position.y) * uniScreenHeightInPixels / gl_Position.w"],
                    ");",
                ],
            }),
            frag: new TgdShaderFragment({
                uniforms: {
                    uniTexture: "sampler2D",
                },
                outputs: {
                    FragColor: "vec4",
                },
                mainCode: [
                    "vec2 v = 2.0 * (gl_PointCoord - vec2(.5));",
                    "float d = dot(v, v);",
                    "if (d > 1.0) discard;",
                    `FragColor = vec4(vec3(varIndex), 1.0);`,
                ],
            }),
        })
        this.prg = prg
        const dataset = new TgdDataset({
            attPoint: "vec3",
            attIndex: "float",
        })
        // prettier-ignore
        dataset.set(
			"attPoint",
			new Float32Array([
				+1, 0, 0, 0, +1, 0, 0, 0, +1, -1, 0, 0, 0, -1, 0, 0, 0, -1,
			]),
		)
        // prettier-ignore
        dataset.set(
			"attIndex",
			new Float32Array([1 / 8, 2 / 8, 3 / 8, 4 / 8, 5 / 8, 6 / 8]),
		)
        const vao = new TgdVertexArray(context.gl, prg, [dataset])
        this.vao = vao
    }

    delete(): void {
        this.prg.delete()
        this.vao.delete()
    }

    paint(time: number, delta: number): void {
        const { context, prg, vao } = this
        const { gl, camera } = context
        prg.use()
        prg.uniform1f("uniRadius", 0.333)
        prg.uniform1f("uniScreenHeightInPixels", this.size)
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        TgdPainterState.do(context, {
            depth: "less",
            blend: "off",
            action: () => gl.drawArrays(gl.POINTS, 0, 6),
        })
        vao.unbind()
    }
}
