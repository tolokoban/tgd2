import {
    TgdContext,
    TgdPainter,
    TgdPainterProgram,
    TgdTexture2D,
    TgdUniformBufferObject,
    TgdVec2,
    TgdVec4,
} from "@tolokoban/tgd"

export class PainterImage extends TgdPainter {
    private readonly uniformBlock: TgdUniformBufferObject<"uniScale" | "uniGray">
    private readonly program: TgdPainterProgram
    private readonly texture: { width: number; height: number }
    private readonly uniScale = new TgdVec2(1, 1)
    private readonly uniGray = new TgdVec4(0, 0, 0, 0)
    private _mode: string = "rgba"

    constructor(
        public readonly context: TgdContext,
        { texture }: { texture: TgdTexture2D },
    ) {
        super()
        this.texture = texture
        const uniformBlock = (this.uniformBlock = new TgdUniformBufferObject(context, {
            uniforms: {
                uniScale: "vec2",
                uniGray: "vec4",
            },
        }))
        this.program = new TgdPainterProgram(context, {
            dataset: {
                attribs: {
                    attPoint: {
                        type: "vec2",
                        data: new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1]),
                    },
                    attUV: {
                        type: "vec2",
                        data: new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                    },
                },
            },
            uniforms: {
                uniformBlock,
            },
            varying: {
                varUV: "vec2",
            },
            textures: {
                texImage: texture,
            },
            state: {
                depth: "off",
                blend: "off",
                cull: "off",
            },
            drawMode: "TRIANGLE_STRIP",
            vert: {
                mainCode: [
                    "varUV = attUV;",
                    "float x = uniScale.x * attPoint.x;",
                    "float y = uniScale.y * attPoint.y;",
                    "gl_Position = vec4(x, y, 0.0, 1.0);",
                ],
            },
            frag: {
                mainCode: [
                    "vec4 rgba = texture(texImage, varUV);",
                    "if (dot(uniGray, uniGray) == 0.0) {",
                    ["FragColor = rgba;"],
                    "} else {",
                    ["float gray = dot(rgba, uniGray);", "FragColor = vec4(vec3(gray), 1.0);"],
                    "}",
                ],
            },
        })
    }

    get mode() {
        return this._mode
    }
    set mode(mode: string) {
        this._mode = mode
        const { uniGray, uniformBlock } = this
        switch (mode.toUpperCase()) {
            case "R":
                uniGray.reset(1, 0, 0, 0)
                break
            case "G":
                uniGray.reset(0, 1, 0, 0)
                break
            case "B":
                uniGray.reset(0, 0, 1, 0)
                break
            case "A":
                uniGray.reset(0, 0, 0, 1)
                break
            default:
                uniGray.reset(0, 0, 0, 0)
                break
        }
        uniformBlock.values.uniGray = uniGray
    }

    paint(time: number, delta: number): void {
        const { context, texture, uniScale, uniformBlock } = this
        const { width, height, aspectRatio } = context
        const aspectRatioTexture = texture.width / texture.height
        const sx = width / texture.width
        const sy = height / texture.height
        if (sx > sy) {
            // We took all vertical space and have void on right an left.
            uniScale.reset(aspectRatioTexture / aspectRatio, 1)
        } else {
            uniScale.reset(1, aspectRatio / aspectRatioTexture)
        }
        uniformBlock.values.uniScale = uniScale
        this.program.paint(time, delta)
    }

    delete() {
        this.program.delete()
    }
}
