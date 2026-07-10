import { type ArrayNumber3, type ArrayNumber4, TgdBoundingBox, TgdColor, type TgdContext, TgdPainterProgram, TgdUniformBufferObject, TgdUniformBufferObjectCamera, type TgdVec3, type TgdVec4 } from "@tgd/index"
import { TgdPainterGroup } from "../group"

export interface TgdPainterBBoxOptions {
    bbox: TgdBoundingBox | {
        min: Readonly<TgdVec3>
        max: Readonly<TgdVec3>
    }
    /**
     * Default: [0, .5, 1]
     */
    colorStroke?: string | TgdColor | ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4
    /**
     * Default: [1, .666, 0, .25]
     */
    colorFill?: string | TgdColor | ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4
    name?: string
}

export class TgdPainterBBox extends TgdPainterGroup {
    public bbox: TgdBoundingBox
    public readonly colorStoke: TgdColor
    public readonly colorFill: TgdColor

    constructor(public readonly context: TgdContext, options: TgdPainterBBoxOptions) {
        super({ name: options.name })
        const { bbox } = options
        this.bbox = bbox instanceof TgdBoundingBox ? bbox : new TgdBoundingBox(bbox.min, bbox.max)
        this.colorStoke = new TgdColor(options.colorStroke ?? [0, .5, 1])
        this.colorFill = new TgdColor(options.colorFill ?? [1, .666, 0, .5])
        // biome-ignore format: keep matrix-like alignment
        // prettier-ignore
        const attPos = new Float32Array([
            0, 0, 0,
            0, 0, 1,
            0, 1, 0,
            0, 1, 1,
            1, 0, 0,
            1, 0, 1,
            1, 1, 0,
            1, 1, 1,
        ])
        const uniforms = new TgdUniformBufferObject(context, {
            uniforms: {
                uniColorStroke: "vec4",
                uniColorFill: "vec4",
                uniMin: "vec3",
                uniMax: "vec3"
            }
        })
        const uniformsCamera = new TgdUniformBufferObjectCamera(context)
        const stroke = new TgdPainterProgram(context, {
            drawMode: "LINES",
            state: {
                depth: "less"
            },
            uniforms: { uniforms, uniformsCamera },
            // biome-ignore format: keep matrix-like alignment
            // prettier-ignore
            elements: new Uint8Array([
                0, 1, 0, 2, 0, 4,
                1, 3, 1, 5,
                2, 3, 2, 6,
                3, 7,
                4, 5, 4, 6,
                5, 7,
                6, 7
            ]),
            dataset: {
                attribs: {
                    attPos: {
                        type: "vec3",
                        data: attPos
                    }
                }
            },
            vert: {
                mainCode: [
                    "vec3 position = uniMin + (uniMax - uniMin) * attPos;",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(position, 1);",

                ]
            },
            frag: {
                mainCode: [
                    "FragColor = uniColorStroke;"
                ]
            },
            onEnter: () => {
                const { min, max } = this.bbox
                uniforms.values.uniMin = min
                uniforms.values.uniMax = max
                uniforms.values.uniColorStroke = this.colorStoke.toArayNumber4()
                uniforms.values.uniColorFill = this.colorFill.toArayNumber4()
            }
        })
        const fill = new TgdPainterProgram(context, {
            drawMode: "TRIANGLES",
            state: {
                depth: "less",
                blend: "alpha",
                cull: "back",
            },
            uniforms: { uniforms, uniformsCamera },
            // biome-ignore format: keep matrix-like alignment
            // prettier-ignore
            elements: new Uint8Array([
                1, 5, 7,
                1, 7, 3,
                0, 2, 6,
                0, 6, 4,
                0, 1, 3,
                0, 3, 2,
                4, 7, 5,
                4, 6, 7,
                2, 3, 7,
                2, 7, 6,
                0, 4, 5,
                0, 5, 1,
            ]),
            dataset: {
                attribs: {
                    attPos: {
                        type: "vec3",
                        data: attPos
                    }
                }
            },
            vert: {
                mainCode: [
                    "vec3 position = uniMin + (uniMax - uniMin) * attPos;",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(position, 1);",

                ]
            },
            frag: {
                mainCode: [
                    "FragColor = uniColorFill;"
                ]
            },
        })
        this.add(stroke, fill)
    }
}