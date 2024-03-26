import { TgdVec2 } from "../math"
import { TgdFilter } from "./filter"

export interface TgdFilterBlurOptions {
    size: number
    direction: Readonly<TgdVec2>
}

const DEFAULT_DIRECTION: Readonly<TgdVec2> = new TgdVec2(1, 0)

export class TgdFilterBlur extends TgdFilter {
    constructor(options: Partial<TgdFilterBlurOptions> = {}) {
        const { size = 4, direction = DEFAULT_DIRECTION } = options
        const len = direction.size
        const invLen = len > 0 ? 1 / len : 1
        const sx = direction.x * invLen
        const sy = direction.y * invLen
        const lines: string[] = ["vec2 s;"]
        for (let s = 0; s < size; s += 2) {
            lines.push(
                `s = ${s + 1.5} * dir;`,
                `color += texture(texSource, varUV + s);`,
                `color += texture(texSource, varUV - s);`
            )
        }
        if (size & 1) {
            // Size is odd (not even).
            lines.push(
                `s = ${size + 0.5} * dir;`,
                `color += 0.5 * texture(texSource, varUV + s);`,
                `color += 0.5 * texture(texSource, varUV - s);`
            )
        }
        super({
            fragmentShaderCode: [
                "vec2 dir = vec2(",
                [
                    `uniInverseWidth * ${sx.toFixed(9)},`,
                    `uniInverseHeight * ${sy.toFixed(9)}`,
                ],
                ");",
                "vec4 color = texture(texSource, varUV);",
                ...lines,
                `FragColor = color * ${(1 / (size + 1)).toFixed(9)};`,
            ],
            uniforms: {
                uniHueShift: "float",
            },
        })
    }
}
