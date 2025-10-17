import { ArrayNumber4, WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdLight } from "@tgd/light"
import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"

export type TgdMaterialDiffuseOptions = Partial<{
    color: TgdVec4 | ArrayNumber4 | TgdTexture2D
    light: TgdLight
    ambient: TgdLight
    specularExponent: number
    specularIntensity: number
    lockLightsToCamera: boolean
}>

const DEFAULT_COLOR = new TgdVec4(0.8, 0.6, 0.1, 1)

export class TgdMaterialDiffuse extends TgdMaterial {
    public light = new TgdLight()
    public ambient = new TgdLight({ color: new TgdVec4(0.2, 0.1, 0, 0) })
    public specularExponent = 20
    public specularIntensity = 1

    private readonly texture: TgdTexture2D | null
    private readonly lightColor = new TgdVec3()
    private readonly ambientColor = new TgdVec3()

    constructor(options: TgdMaterialDiffuseOptions = {}) {
        const color =
            options.color instanceof TgdTexture2D
                ? options.color
                : new TgdVec4(options.color ?? DEFAULT_COLOR)
        const hasTexture = !(color instanceof TgdVec4)
        const uniforms: { [name: string]: WebglUniformType } = {
            uniLight: "vec3",
            uniLightDir: "vec3",
            uniAmbient: "vec3",
            uniSpecularExponent: "float",
            uniSpecularIntensity: "float",
            uniModelViewMatrix: "mat4",
        }
        const fragmentShaderCode: TgdCodeBloc = [
            `vec3 normal = ${options.lockLightsToCamera ? "mat3(uniModelViewMatrix) * " : ""}normalize(varNormal);`,
            `float light = 1.0 - dot(normal, uniLightDir);`,
            options.lockLightsToCamera
                ? "light = max(0.0, light - 1.0);"
                : "light *= .5;",
            hasTexture
                ? `vec4 color = texture(texDiffuse, varUV);`
                : `vec4 color = vec4(${color.join(", ")});`,
            `vec3 reflection = ${options.lockLightsToCamera ? "" : "mat3(uniModelViewMatrix) * "}reflect(uniLightDir, normal);`,
            `float spec = max(0.0, reflection.z);`,
            `spec = pow(spec, uniSpecularExponent) * uniSpecularIntensity;`,
            `color = vec4(`,
            `  color.rgb * (`,
            `    uniAmbient + uniLight * light`,
            `  ) + vec3(spec),`,
            `  1.0`,
            `);`,
            `return color;`,
        ]
        const varyings: { [name: string]: WebglAttributeType } = {
            varNormal: "vec3",
        }
        if (hasTexture) {
            varyings.varUV = "vec2"
            uniforms.texDiffuse = "sampler2D"
        }
        const vertexShaderCode = () => {
            const code: TgdCodeBloc = [
                `varNormal = mat3(uniTransfoMatrix) * ${this.attNormal};`,
            ]
            if (hasTexture) {
                code.push(`varUV = ${this.attUV};`)
            }
            return code
        }

        super({
            uniforms,
            varyings,
            vertexShaderCode,
            fragmentShaderCode,
            setUniforms: (program: TgdProgram): void => {
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

        this.texture = hasTexture ? color : null
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
    }
}
