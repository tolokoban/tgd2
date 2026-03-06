import { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdPainterState } from "@tgd/painter/state"
import { TgdProgram } from "@tgd/program"
import { TgdShaderVertex, TgdShaderFragment } from "@tgd/shader"
import { TgdTexture2D } from "@tgd/texture"
import { TgdVertexArray } from "@tgd/vao"

interface PainterTipsNormalOptions {
    texture: TgdTexture2D
}

export class PainterTipsNormal extends TgdPainter {
    private readonly texture: TgdTexture2D
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(
        private readonly context: TgdContext,
        options: PainterTipsNormalOptions,
    ) {
        super()
        this.texture = options.texture
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
                    attUV: "vec2",
                    attIndex: "float",
                },
                varying: {
                    varUV: "vec2",
                    varLight: "float",
                },
                mainCode: [
                    "varUV = attUV;",
                    "varLight = (attIndex == uniIndex) ? 0.5 : 0.0;",
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
                    `vec4 color = texture(uniTexture, varUV + gl_PointCoord * vec2(${1 / 3}, 0.5));`,
                    `if (color.a < ${1 / 0xff}) discard;`,
                    "color.xyz *= 1.0 - varLight;",
                    "color.xyz += vec3(varLight);",
                    "FragColor = color;",
                ],
            }),
        })
        this.prg = prg
        const dataset = new TgdDataset({
            attPoint: "vec3",
            attUV: "vec2",
            attIndex: "float",
        })
        const U = 1 / 3
        const V = 1 / 2
        // prettier-ignore
        dataset.set("attPoint", new Float32Array([
            +1, 0, 0,
            0, +1, 0,
            0, 0, +1,
            -1, 0, 0,
            0, -1, 0,
            0, 0, -1,
        ]))
        // prettier-ignore
        dataset.set("attUV", new Float32Array([
            0, 0,
            U, 0,
            2* U, 0,
            0, V,
            U, V,
            2*U, V,
        ]))
        dataset.set("attIndex", new Float32Array([0, 1, 2, 3, 4, 5]))
        const vao = new TgdVertexArray(context.gl, prg, [dataset], new Uint8Array([0, 1, 2, 3, 4, 5]))
        this.vao = vao
    }

    delete(): void {
        this.texture.delete()
        this.prg.delete()
        this.vao.delete()
    }

    paint(time: number, delta: number): void {
        const { context, prg, vao, texture } = this
        const { gl, camera } = context
        prg.use()
        prg.uniform1f("uniRadius", 0.17)
        prg.uniform1f("uniScreenHeightInPixels", context.height)
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        texture.activate(0, prg, "uniTexture")
        vao.bind()
        TgdPainterState.do(context, {
            depth: "less",
            blend: "alpha",
            action: () => gl.drawElements(gl.POINTS, 6, gl.UNSIGNED_BYTE, 0),
        })
        vao.unbind()
    }
}
