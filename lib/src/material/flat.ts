import { ArrayNumber4, WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdProgram } from "@tgd/program"

export type TgdMaterialFlatOptions = Partial<{
    color: ArrayNumber4 | TgdVec4
}>

const DEFAULT_COLOR: ArrayNumber4 = [0, 0, 0, 1]

export class TgdMaterialFlat extends TgdMaterial {
    public readonly varyings: { [name: string]: WebglAttributeType }
    public readonly uniforms: { [name: string]: WebglUniformType } = {
        uniColor: "vec4",
    }
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc

    constructor(options: TgdMaterialFlatOptions = {}) {
        super()
        const color = new TgdVec4(options.color ?? DEFAULT_COLOR)
        this.fragmentShaderCode = [`return vec4(${color.join(", ")});`]
        this.vertexShaderCode = []
        this.varyings = {}
    }

    setUniforms(): void {}
}
