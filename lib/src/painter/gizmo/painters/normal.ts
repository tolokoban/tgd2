import { TgdContext } from "@tgd/context"
import { TgdTexture2D } from "@tgd/texture"
import { createTipsTexture } from "./tips"
import { TgdPainterProgram } from "@tgd/painter/program"
import { TgdUniformBufferObject } from "@tgd/uniform"

interface PainterTipsNormalOptions {
    texture: TgdTexture2D
    size: number
    uniformCamera: TgdUniformBufferObject
}

export class PainterTipsNormal extends TgdPainterProgram {
    public static async create(context: TgdContext, options: Omit<PainterTipsNormalOptions, "texture">) {
        const texture = await createTipsTexture(context)
        return new PainterTipsNormal(context, { texture, ...options })
    }

    public index = -1
    public size: number

    private constructor(context: TgdContext, { uniformCamera, size, texture }: PainterTipsNormalOptions) {
        const uniformPainter = new TgdUniformBufferObject(context, {
            uniforms: {
                uniIndex: "float",
                uniRadius: "float",
                uniScreenHeightInPixels: "float",
            },
            values: {
                uniRadius: 0.333,
            },
        })
        const U = 1 / 3
        const V = 1 / 2
        super(context, {
            drawMode: "POINTS",
            textures: {
                uniTexture: texture,
            },
            uniforms: {
                uniformCamera,
                uniformPainter,
            },
            dataset: {
                attribs: {
                    attPoint: {
                        type: "vec3",
                        data: new Float32Array([+1, 0, 0, 0, +1, 0, 0, 0, +1, -1, 0, 0, 0, -1, 0, 0, 0, -1]),
                    },
                    attUV: { type: "vec2", data: new Float32Array([0, 0, U, 0, 2 * U, 0, 0, V, U, V, 2 * U, V]) },
                    attIndex: { type: "float", data: new Float32Array([0, 1, 2, 3, 4, 5]) },
                },
            },
            varying: {
                varUV: "vec2",
                varLight: "float",
            },
            vert: {
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
            },
            frag: {
                mainCode: [
                    `vec4 color = texture(uniTexture, varUV + gl_PointCoord * vec2(${1 / 3}, 0.5));`,
                    `if (color.a < ${1 / 0xff}) discard;`,
                    "color.xyz *= 1.0 - varLight;",
                    "color.xyz += vec3(varLight);",
                    "FragColor = color;",
                ],
            },
            state: {
                depth: "less",
                blend: "alpha",
            },
            onEnter: () => {
                uniformPainter.values.uniIndex = this.index
                uniformPainter.values.uniScreenHeightInPixels = this.size
            },
            onDelete: () => {
                texture.delete()
                uniformPainter.delete()
            },
        })
        this.size = size
    }
}
