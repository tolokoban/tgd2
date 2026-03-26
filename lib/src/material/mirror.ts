import { TgdVec4 } from "@tgd/math"
import type { TgdCodeBloc } from "@tgd/shader/code"
import { TgdTextureCube } from "@tgd/texture"
import type { ArrayNumber4, WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdMaterial, type TgdMaterialContext } from "./material"
import { TgdColor } from "@tgd/color"

export type TgdMaterialMirrorOptions = {
    skybox: TgdTextureCube
    tint?: TgdVec4 | ArrayNumber4 | TgdColor | string
    roughness?: number
}

const DEFAULT_TINT: ArrayNumber4 = [0.8, 0.8, 0.8, 1]

export class TgdMaterialMirror extends TgdMaterial {
    public readonly skybox: TgdTextureCube
    public roughness = 0
    public readonly tint: TgdColor

    constructor(private readonly options: TgdMaterialMirrorOptions) {
        const uniforms: { [name: string]: WebglUniformType } = {
            uniTransfoMatrix: "mat4",
            texSkybox: "samplerCube",
            uniCameraPosition: "vec3",
            uniRoughness: "float",
            uniTint: "vec4",
        }
        const fragmentShaderCode: TgdCodeBloc = [
            "vec3 N = normalize(varNormal);",
            "vec3 L = normalize(varPosition.xyz - uniCameraPosition);",
            "vec3 R = reflect(L, N);",
            "vec3 color = textureLod(texSkybox, R, uniRoughness * 7.0).rgb;",
            "return vec4(color, 1) * uniTint;",
        ]
        const varyings: { [name: string]: WebglAttributeType } = {
            varUV: "vec2",
            varNormal: "vec3",
            varPosition: "vec4",
        }
        const vertexShaderCode = () => {
            const code: TgdCodeBloc = [
                `varUV = ${this.attUV};`,
                `varNormal = mat3(uniTransfoMatrix) * ${this.attNormal};`,
                `varPosition = uniTransfoMatrix * ${this.attPosition};`,
            ]
            return code
        }

        super({
            uniforms,
            varyings,
            extraFragmentShaderFunctions: {
                dot2: ["float dot2(vec3 v) {", ["return dot(v, v);"], "}"],
            },
            vertexShaderCode,
            fragmentShaderCode,
            setUniforms: ({ program, context }: TgdMaterialContext) => {
                this.skybox.activate(0, program, "texSkybox")
                program.uniform3fv("uniCameraPosition", context.camera.transfo.actualPosition)
                const { R, G, B, A } = this.tint
                program.uniform4f("uniTint", R, G, B, A)
                program.uniform1f("uniRoughness", this.roughness)
            },
        })
        this.skybox = options.skybox
        this.roughness = options.roughness ?? 0
        this.tint = new TgdColor(options.tint ?? DEFAULT_TINT)
    }
}
