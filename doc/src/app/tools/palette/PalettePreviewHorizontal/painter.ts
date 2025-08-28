import {
    ArrayNumber3,
    TgdContext,
    TgdPainterFragmentShader,
    TgdShaderFragment,
} from "@tolokoban/tgd"

export class PalettePreviewHorizontalPainter {
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
                        },
                        varying: {
                            varUV: "vec2",
                        },
                        outputs: {
                            FragColor: "vec4",
                        },
                        mainCode: [
                            "float t = varUV.x;",
                            "FragColor = vec4(",
                            [
                                `uniA + uniB*cos(${2 * Math.PI}*(uniC * t + uniD)),`,
                                "1",
                            ],
                            ");",
                        ],
                    }),
                    setUniforms: ({ program }) => {
                        program.uniform3f("uniA", ...this.a)
                        program.uniform3f("uniB", ...this.b)
                        program.uniform3f("uniC", ...this.c)
                        program.uniform3f("uniD", ...this.d)
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
