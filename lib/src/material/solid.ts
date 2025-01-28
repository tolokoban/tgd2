import { ArrayNumber4, WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdProgram } from "@tgd/program"

export type TgdMaterialSolidOptions = Partial<{
    color: ArrayNumber4 | TgdVec4
}>

const DEFAULT_COLOR: ArrayNumber4 = [0.111, 0.333, 0.999, 1]

export class TgdMaterialSolid extends TgdMaterial {
    public color: TgdVec4

    public readonly varyings: { [name: string]: WebglAttributeType }
    public readonly uniforms: { [name: string]: WebglUniformType } = {
        uniColor: "vec4",
    }
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc

    constructor(options: TgdMaterialSolidOptions = {}) {
        super()
        this.color = new TgdVec4(options.color ?? DEFAULT_COLOR)
        this.fragmentShaderCode = [`return uniColor;`]
        this.vertexShaderCode = []
        this.varyings = {}
    }

    setUniforms(program: TgdProgram): void {
        program.uniform4fv("uniColor", this.color)
    }
}
