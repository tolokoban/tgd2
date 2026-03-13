import { TgdVec4 } from "@tgd/math"
import type { ArrayNumber4 } from "@tgd/types"
import { TgdFilter } from "./filter"

/**
 * Paint the texture as it is, without any modification.
 */
export class TgdFilterMultiply extends TgdFilter {
    public readonly color = new TgdVec4(1, 1, 1, 1)

    constructor({ color }: { color?: TgdVec4 | ArrayNumber4 }) {
        super({
            name: `TgdFilterMultiply/${TgdFilter.id++}`,
            fragmentShaderCode: [
                "vec2 uv = varUV;",
                "vec4 color = texture(uniTexture, uv);",
                "FragColor = color * uniColor;",
            ],
            uniforms: {
                uniColor: "vec4",
            },
            setUniforms: (params) => {
                params.program.uniform4fv("uniColor", this.color)
            },
        })
        if (color) {
            const [r, g, b, a] = color
            this.color.reset(r, g, b, a)
        }
    }
}
