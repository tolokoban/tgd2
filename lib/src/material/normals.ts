import { WebglAttributeType } from "@tgd/types"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdProgram } from "@tgd/program"

export class TgdMaterialNormals extends TgdMaterial {
    public readonly varyings: { [name: string]: WebglAttributeType }
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc

    constructor() {
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

    setUniforms(_program: TgdProgram): void {}
}
