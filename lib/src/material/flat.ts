import { ArrayNumber4 } from "@tgd/types"
import { TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"

export type TgdMaterialFlatOptions = Partial<{
    color: ArrayNumber4 | TgdVec4
}>

const DEFAULT_COLOR: ArrayNumber4 = [0, 0, 0, 1]

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
