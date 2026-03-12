import { TgdContext } from "@tgd/context"
import { TgdPainterProgram } from "@tgd/painter/program"
import { TgdUniformBufferObject } from "@tgd/uniform"
import { RED, GREEN, BLUE } from "./consts"
import { ArrayNumber3 } from "@tgd/types"
import { TgdColor } from "@tgd/color"

interface PainterAxesOptions {
    uniformCamera: TgdUniformBufferObject
    red?: string
    green?: string
    blue?: string
}

export class PainterAxes extends TgdPainterProgram {
    constructor(context: TgdContext, { uniformCamera, red = RED, green = GREEN, blue = BLUE }: PainterAxesOptions) {
        const R = parseColor(red)
        const G = parseColor(green)
        const B = parseColor(blue)
        super(context, {
            drawMode: "LINES",
            uniforms: {
                uniformCamera,
            },
            varying: {
                varColor: "vec4",
            },
            dataset: [
                {
                    attribs: {
                        attPos: {
                            type: "vec3",
                            data: new Float32Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1]),
                        },
                        attCol: {
                            type: "vec3",
                            data: new Float32Array([...R, ...R, ...G, ...G, ...B, ...B]),
                        },
                    },
                },
            ],
            vert: {
                mainCode: [
                    "varColor = vec4(attCol, 1.0);",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(attPos, 1.0);",
                ],
            },
            frag: {
                mainCode: ["FragColor = varColor;"],
            },
            state: {
                depth: "less",
            },
        })
    }
}

function parseColor(colorCSS: string): ArrayNumber3 {
    const color = TgdColor.fromString(colorCSS)
    return [color.R, color.G, color.B]
}
