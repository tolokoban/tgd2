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
}>

const DEFAULT_COLOR = new TgdVec4(0.8, 0.8, 0.8, 1)

export class TgdMaterialDiffuse extends TgdMaterial {
    public light = new TgdLight()
    public ambient = new TgdLight({ color: new TgdVec4(0.8, 0.8, 0.8, 0) })
    public specularExponent = 20
    public specularIntensity = 1

    public readonly varyings: { [name: string]: WebglAttributeType }
    public readonly uniforms: { [name: string]: WebglUniformType } = {
        uniLight: "vec3",
        uniLightDir: "vec3",
        uniAmbient: "vec3",
        uniSpecularExponent: "float",
        uniSpecularIntensity: "float",
    }
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc

    private readonly texture: TgdTexture2D | null
    private readonly lightColor = new TgdVec3()
    private readonly ambientColor = new TgdVec3()

    constructor(options: TgdMaterialDiffuseOptions = {}) {
        super()
        const color =
            options.color instanceof TgdTexture2D
                ? options.color
                : new TgdVec4(options.color ?? DEFAULT_COLOR)
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
        const hasTexture = !(color instanceof TgdVec4)
        this.texture = hasTexture ? color : null
        this.fragmentShaderCode = [
            "vec3 normal = normalize(varNormal);",
            `float light = -dot(normal, uniLightDir);`,
            hasTexture
                ? `vec4 color = texture(texDiffuse, varUV);`
                : `vec4 color = vec4(${color.join(", ")});`,
            `float spec = max(0.0, reflect(uniLightDir, normal).z);`,
            `spec = pow(spec, uniSpecularExponent) * uniSpecularIntensity;`,
            `color = vec4(`,
            `  color.rgb * (`,
            `    uniAmbient + uniLight * light`,
            `  ) + vec3(spec),`,
            `  1.0`,
            `);`,
            `return color;`,
        ]
        this.vertexShaderCode = ["varNormal = mat3(uniTransfoMatrix) * NORMAL;"]
        this.varyings = {
            varNormal: "vec3",
        }
        if (hasTexture) {
            this.vertexShaderCode.push("varUV = TEXCOORD_0;")
            this.varyings.varUV = "vec2"
            this.uniforms.texDiffuse = "sampler2D"
        }
    }

    setUniforms(program: TgdProgram): void {
        program.uniform3fv("uniLightDir", this.light.direction)
        this.lightColor.from(this.light.color).scale(this.light.color.w)
        program.uniform3fv("uniLight", this.lightColor)
        this.ambientColor.from(this.ambient.color).scale(this.ambient.color.w)
        program.uniform3fv("uniAmbient", this.ambientColor)
        program.uniform1f("uniSpecularExponent", this.specularExponent)
        program.uniform1f("uniSpecularIntensity", this.specularIntensity)

        const { texture } = this
        if (texture) texture.activate(0, program, "texDiffuse")
    }
}
