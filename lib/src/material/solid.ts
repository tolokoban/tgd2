import {
    TgdProgram,
    TgdTexture2D,
    WebglAttributeType,
    WebglUniformType,
} from "@tgd/types"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { CodeBloc } from "@tgd/shader/code"
import { TgdLight } from "@tgd/light"

export type TgdMaterialSolidOptions = Partial<{
    color: TgdVec4
}>

const DEFAULT_COLOR = new TgdVec4(0.111, 0.333, 0.999, 1)

export class TgdMaterialSolid extends TgdMaterial {
    public color: TgdVec4

    public readonly varyings: { [name: string]: WebglAttributeType }
    public readonly uniforms: { [name: string]: WebglUniformType } = {
        uniColor: "vec4",
    }
    public readonly fragmentShaderCode: CodeBloc
    public readonly vertexShaderCode: CodeBloc

    constructor(options: TgdMaterialSolidOptions = {}) {
        super()
        this.color = options.color ?? DEFAULT_COLOR
        this.fragmentShaderCode = [`return uniColor;`]
        this.vertexShaderCode = []
        this.varyings = {}
    }

    setUniforms(program: TgdProgram): void {
        program.uniform4fv("uniColor", this.color)
    }
}
