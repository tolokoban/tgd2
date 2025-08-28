import {
    ArrayNumber3,
    tgdCodeFunction_uv2polar,
    TgdContext,
    TgdPainterFragmentShader,
    TgdShaderFragment,
} from "@tolokoban/tgd"

export class PalettePreviewDiskPainter {
    public a: ArrayNumber3 = [0.5, 0.5, 0.5]
    public b: ArrayNumber3 = [0.5, 0.5, 0.5]
    public c: ArrayNumber3 = [0.5, 0.5, 0.5]
    public d: ArrayNumber3 = [0.5, 0.5, 0.5]

    private context: TgdContext | null = null

    readonly setCanvas = (canvas: HTMLCanvasElement | null) => {
        if (this.context) {
            this.context.delete()
            this.context = null
        }
        if (canvas) {
            const context = new TgdContext(canvas, { antialias: false })
            context.add(
                new TgdPainterFragmentShader(context, {
                    shader: new TgdShaderFragment({
                        uniforms: {
                            uniA: "vec3",
                            uniB: "vec3",
                            uniC: "vec3",
                            uniD: "vec3",
                            uniAspectRatio: "float",
                        },
                        varying: {
                            varUV: "vec2",
                        },
                        outputs: {
                            FragColor: "vec4",
                        },
                        functions: {
                            ...tgdCodeFunction_uv2polar(),
                        },
                        mainCode: [
                            "vec2 polar = uv2polar(varUV);",
                            "float r = polar.x;",
                            `float t = fract(1.0 + (polar.y + ${Math.PI / 2}) * ${0.5 / Math.PI});`,
                            "float light = 1.0 - smoothstep(0.4, 0.42, abs(r - 0.5));",
                            "FragColor = vec4(",
                            [
                                `light * (uniA + uniB*cos(${2 * Math.PI}*(uniC * t + uniD))),`,
                                "1",
                            ],
                            ");",
                            "if (t < 0.0) FragColor = vec4(1);",
                        ],
                    }),
                    setUniforms: ({ program, context }) => {
                        program.uniform3f("uniA", ...this.a)
                        program.uniform3f("uniB", ...this.b)
                        program.uniform3f("uniC", ...this.c)
                        program.uniform3f("uniD", ...this.d)
                        program.uniform1f("uniAspectRatio", context.aspectRatio)
                    },
                })
            )
            context.paint()
            this.context = context
        }
    }

    paint() {
        const { context } = this
        if (!context) return

        context.paint()
    }
}
