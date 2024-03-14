import { TgdProgram } from "@tgd/types"
import { TgdMaterial } from "./material"
import { CodeBloc } from "@tgd/shader/code"

export type TgdMaterialNormalsOptions = Partial<{}>

export class TgdMaterialNormals extends TgdMaterial {
    public readonly varyings: { [name: string]: string }
    public readonly fragmentShaderCode: CodeBloc
    public readonly vertexShaderCode: CodeBloc

    constructor(options: TgdMaterialNormalsOptions = {}) {
        super()
        this.fragmentShaderCode = [
            `vec3 color = vec3(1.0) + normalize(varNormal);`,
            `color *= 0.5;`,
            `return vec4(color, 1.0);`,
        ]
        this.vertexShaderCode = ["varNormal = NORMAL;"]
        this.varyings = {
            varNormal: "vec3",
        }
    }

    setUniforms(program: TgdProgram): void {}
}
