import { TgdContext } from "@tgd/context"
import { TgdPainterProgram } from "@tgd/painter/program"
import { TgdUniformBufferObject } from "@tgd/uniform"
import { RED, GREEN, BLUE } from "./consts"
import { ArrayNumber3 } from "@tgd/types"
import { TgdColor } from "@tgd/color"
import { TgdVec2 } from "@tgd/math"

interface PainterAxesOptions {
    uniformCamera: TgdUniformBufferObject
    size: number
    red?: string
    green?: string
    blue?: string
}

export class PainterAxes extends TgdPainterProgram {
    public size: number

    constructor(
        context: TgdContext,
        { uniformCamera, size, red = RED, green = GREEN, blue = BLUE }: PainterAxesOptions,
    ) {
        const R = parseColor(red)
        const G = parseColor(green)
        const B = parseColor(blue)
        const uniformPixels = new TgdUniformBufferObject(context, {
            uniforms: {
                uniPixels: "vec2",
            },
        })
        const uniPixels = new TgdVec2()
        super(context, {
            drawMode: "TRIANGLE_STRIP",
            uniforms: {
                uniformCamera,
                uniformPixels,
            },
            varying: {
                varColor: "vec4",
            },
            dataset: [
                {
                    attribs: {
                        attPos: {
                            type: "vec2",
                            data: new Float32Array([+1, 0, +1, +1, -1, 0, -1, +1]),
                        },
                    },
                },
                {
                    divisor: 1,
                    attribs: {
                        attVec: {
                            type: "vec3",
                            data: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
                        },
                        attCol: {
                            type: "vec3",
                            data: new Float32Array([...R, ...G, ...B]),
                        },
                    },
                },
            ],
            vert: {
                mainCode: [
                    "varColor = vec4(attCol, 1.0);",
                    "vec4 point = uniProjectionMatrix * uniModelViewMatrix * vec4(attVec, 1.0);",
                    "vec2 radial = normalize(vec2(-point.y, point.x)) * uniPixels * point.w;",
                    "point.xy *= attPos.y;",
                    "point.xy += radial * attPos.x;",
                    "gl_Position = point;",
                ],
            },
            frag: {
                mainCode: ["FragColor = varColor;"],
            },
            state: {
                depth: "off",
                blend: "off",
                cull: "off",
            },
            onEnter: () => {
                const thickness = this.size / 64
                uniPixels.x = thickness / this.size
                uniPixels.y = uniPixels.x
                uniformPixels.values.uniPixels = uniPixels
            },
        })
        this.size = size
    }
}

function parseColor(colorCSS: string): ArrayNumber3 {
    const color = TgdColor.fromString(colorCSS)
    return [color.R, color.G, color.B]
}
