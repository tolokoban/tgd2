import { TgdVec4 } from "@tgd/math"
import type { ArrayNumber4 } from "@tgd/types"
import { TgdMaterial } from "./material"

export type TgdMaterialFlatOptions = Partial<{
    color: ArrayNumber4 | TgdVec4
}>

const DEFAULT_COLOR: ArrayNumber4 = [1, 0, 1, 1]

/**
 * This material will paint a unique color for all fragments.
 * The result will look totally flat (hence the name).
 * 
 * This material render the same as `TgdMaterialSolid`, but it is faster
 * because you cannot change the color once created.
 */
export class TgdMaterialFlat extends TgdMaterial {
    constructor(options: TgdMaterialFlatOptions = {}) {
        const color = new TgdVec4(options.color ?? DEFAULT_COLOR)

        super({
            uniforms: {
                uniColor: "vec4",
            },
            fragmentShaderCode: [`return vec4(${color.join(", ")});`],
        })
    }
}
