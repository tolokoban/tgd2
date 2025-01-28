import { ArrayNumber4, WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdProgram } from "@tgd/program"

export type TgdMaterialHullOptions = Partial<{
    color: ArrayNumber4 | TgdVec4
    expansion: number
    attNormal: string
}>

const DEFAULT_COLOR: ArrayNumber4 = [0.111, 0.333, 0.999, 1]

export class TgdMaterialHull extends TgdMaterial {
    public color: TgdVec4
    public expansion = 0.02

    public readonly varyings: { [name: string]: WebglAttributeType }
    public readonly uniforms: { [name: string]: WebglUniformType } = {
        uniColor: "vec4",
        uniExpansion: "float",
    }
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc

    constructor(options: TgdMaterialHullOptions = {}) {
        super()
        this.color = new TgdVec4(options.color ?? DEFAULT_COLOR)
        this.expansion = options.expansion ?? 0.02
        this.fragmentShaderCode = [`return uniColor;`]
        this.vertexShaderCode = []
        this.varyings = {}
        this.vertexShaderCodeForGetPosition = [
            `return pos + uniExpansion * vec4(${
                options.attNormal ?? "NORMAL"
            }, 0.0);`,
        ]
    }

    setUniforms(program: TgdProgram): void {
        program.uniform4fv("uniColor", this.color)
        program.uniform1f("uniExpansion", this.expansion)
    }
}
