import { tgdCalcDegToRad } from "@tgd/utils"
import { TgdVec2 } from "../math"
import { TgdFilter } from "./filter"

export interface TgdFilterBlurOptions {
    size: number
    /**
     * Can be an angle expressed in degrees.
     *  * __0__: horizontal blur.
     *  * __90__: vertical blur.
     */
    direction: Readonly<TgdVec2> | number
    strength: number
}

const DEFAULT_DIRECTION: Readonly<TgdVec2> = new TgdVec2(1, 0)

export class TgdFilterBlur extends TgdFilter {
    public strength: number

    constructor(options: Partial<TgdFilterBlurOptions> = {}) {
        const { size = 4, strength = 1 } = options
        const direction: TgdVec2 = figureOutDirection(options.direction)
        const length = direction.size
        const invLength = length > 0 ? 1 / length : 1
        const sx = direction.x * invLength
        const sy = direction.y * invLength
        const lines: string[] = ["vec2 s;", "float f;"]
        let total = 0
        for (let s = 0; s < size - 1; s += 2) {
            const weight = size - s
            total += weight
            lines.push(
                `s = ${s + 1.4} * dir;`,
                `f = ${weight.toFixed(1)};`,
                `color += f * texture(uniTexture, varUV + s);`,
                `color += f * texture(uniTexture, varUV - s);`
            )
        }
        if (size & 1) {
            // Size is odd (not even).
            lines.push(
                `s = ${size} * dir;`,
                `color += texture(uniTexture, varUV + s);`,
                `color += texture(uniTexture, varUV - s);`
            )
            total++
        }
        total = total + total + size + 1
        super({
            fragmentShaderCode: [
                "vec2 dir = uniStrength * vec2(",
                [
                    `uniInverseWidth * ${sx.toFixed(9)},`,
                    `uniInverseHeight * ${sy.toFixed(9)}`,
                ],
                ");",
                `vec4 color = ${(size + 1).toFixed(
                    1
                )} * texture(uniTexture, varUV);`,
                ...lines,
                `FragColor = color * ${(1 / total).toFixed(9)};`,
            ],
            uniforms: {
                uniStrength: "float",
                uniInverseWidth: "float",
                uniInverseHeight: "float",
            },
            setUniforms: ({ program }) => {
                program.uniform1f(
                    "uniInverseWidth",
                    1 / program.gl.drawingBufferWidth
                )
                program.uniform1f(
                    "uniInverseHeight",
                    1 / program.gl.drawingBufferHeight
                )
                program.uniform1f("uniStrength", this.strength)
            },
        })
        this.strength = strength
    }
}

function figureOutDirection(
    direction: number | Readonly<TgdVec2> | undefined
): TgdVec2 {
    if (direction === undefined) return DEFAULT_DIRECTION

    if (typeof direction === "number") {
        const ang = tgdCalcDegToRad(direction)
        return new TgdVec2(Math.cos(ang), Math.sin(ang))
    }

    return direction
}
