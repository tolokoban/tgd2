import { WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"

export type TgdMaterialFlatTextureOptions = {
    texture: TgdTexture2D
}

export class TgdMaterialFlatTexture extends TgdMaterial {
    public readonly texture: TgdTexture2D | null

    constructor(options: TgdMaterialFlatTextureOptions) {
        const uniforms: { [name: string]: WebglUniformType } = {
            uniTexture: "sampler2D",
        }
        const fragmentShaderCode: TgdCodeBloc = [
            "return texture(uniTexture, varUV);",
        ]
        const varyings: { [name: string]: WebglAttributeType } = {
            varUV: "vec2",
        }
        const vertexShaderCode = () => {
            const code: TgdCodeBloc = [`varUV = ${this.attUV};`]
            return code
        }

        super({
            uniforms,
            varyings,
            vertexShaderCode,
            fragmentShaderCode,
            setUniforms: ({ program }: { program: TgdProgram }): void => {
                options.texture.activate(0, program, "uniTexture")
            },
        })
        this.texture = options.texture
    }
}
