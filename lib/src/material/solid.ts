import { TgdVec4 } from "@tgd/math"
import type { ArrayNumber4 } from "@tgd/types"
import { TgdMaterial } from "./material"

export type TgdMaterialSolidOptions = Partial<{
    color: ArrayNumber4 | TgdVec4
}>

const DEFAULT_COLOR: ArrayNumber4 = [1, 0.667, 0, 1]

/**
 * This material will paint a unique color for all fragments.
 * The result will look totally flat (hence the name).
 * 
 * If you don't need to change the color later on, consider using
 * `TgdMaterialFlat` which will be faster.
 */
export class TgdMaterialSolid extends TgdMaterial {
    public color: TgdVec4

    constructor(options: TgdMaterialSolidOptions = {}) {
        super({
            uniforms: {
                uniColor: "vec4",
            },
            fragmentShaderCode: ["return uniColor;"],
            setUniforms: ({ program }) => {
                program.uniform4fv("uniColor", this.color)
            },
        })

        this.color = new TgdVec4(options.color ?? DEFAULT_COLOR)
    }
}
