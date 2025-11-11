import { ArrayNumber4, WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdLight } from "@tgd/light"
import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"
import { TgdCodeBloc } from "@tgd/shader"

export type TgdMaterialCameraLightOptions = {
    color: TgdVec4 | ArrayNumber4 | TgdTexture2D
    light: TgdLight
    ambient: TgdLight
    specularExponent: number
    specularIntensity: number
}

const DEFAULT_COLOR = new TgdVec4(0.8, 0.6, 0.1, 1)

export class TgdMaterialCameraLight extends TgdMaterial {
    public light = new TgdLight()
    public ambient = new TgdLight({ color: new TgdVec4(0.2, 0.1, 0, 0) })
    public specularExponent = 32
    public specularIntensity = 0.8

    private readonly texture: TgdTexture2D | null
    private readonly lightColor = new TgdVec3()
    private readonly ambientColor = new TgdVec3()

    constructor(options: Partial<TgdMaterialCameraLightOptions> = {}) {
        const vertexShaderCode: TgdCodeBloc = [
            "varNormal = mat3(uniTransfoMatrix) * NORMAL;",
        ]
        const uniforms: { [name: string]: WebglUniformType } = {
            uniLight: "vec3",
            uniLightDir: "vec3",
            uniAmbient: "vec3",
            uniSpecularExponent: "float",
            uniSpecularIntensity: "float",
            uniModelViewMatrix: "mat4",
        }
        const varyings: { [name: string]: WebglAttributeType } = {
            varNormal: "vec3",
        }
        const color =
            options.color instanceof TgdTexture2D
                ? options.color
                : new TgdVec4(options.color ?? DEFAULT_COLOR)
        const hasTexture = !(color instanceof TgdVec4)
        if (hasTexture) {
            vertexShaderCode.push("varUV = TEXCOORD_0;")
            varyings.varUV = "vec2"
            uniforms.texDiffuse = "sampler2D"
        }

        super({
            uniforms,
            varyings,
            vertexShaderCode,
            fragmentShaderCode: [
                "vec3 normal = mat3(uniModelViewMatrix) * varNormal;",
                "float light = 1.0 - dot(normal, uniLightDir);",
                hasTexture
                    ? "vec4 color = texture(texDiffuse, varUV);"
                    : `vec4 color = vec4(${color.join(", ")});`,
                "float spec = max(0.0, reflect(uniLightDir, normal).z);",
                "spec = pow(spec, uniSpecularExponent) * uniSpecularIntensity;",
                "color = vec4(",
                "  color.rgb * (",
                "    uniAmbient + uniLight * light",
                "  ) + vec3(spec),",
                "  1.0",
                ");",
                "return color;",
            ],
            setUniforms: ({ program }: { program: TgdProgram }) => {
                program.uniform3fv("uniLightDir", this.light.direction)
                this.lightColor.from(this.light.color).scale(this.light.color.w)
                program.uniform3fv("uniLight", this.lightColor)
                this.ambientColor
                    .from(this.ambient.color)
                    .scale(this.ambient.color.w)
                program.uniform3fv("uniAmbient", this.ambientColor)
                program.uniform1f("uniSpecularExponent", this.specularExponent)
                program.uniform1f(
                    "uniSpecularIntensity",
                    this.specularIntensity
                )

                const { texture } = this
                if (texture) texture.activate(0, program, "texDiffuse")
            },
        })

        if (options.light) {
            this.light = options.light
        }
        if (options.ambient) {
            this.ambient = options.ambient
        }
        if (typeof options.specularExponent === "number") {
            this.specularExponent = options.specularExponent
        }
        if (typeof options.specularIntensity === "number") {
            this.specularIntensity = options.specularIntensity
        }
        this.texture = hasTexture ? color : null
    }
}
