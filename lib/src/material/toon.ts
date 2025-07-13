import { ArrayNumber4, WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdLight } from "@tgd/light"
import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"

export type TgdMaterialToonOptions = Partial<{
    color: TgdVec4 | ArrayNumber4 | TgdTexture2D
    light: TgdLight
    ambient: TgdLight
    specularSharpness: number
    specularSize: number
    specularIntensity: number
}>

const DEFAULT_COLOR = new TgdVec4(0.8, 0.6, 0.1, 1)

export type TgdMaterialToonShades = number

export class TgdMaterialToon extends TgdMaterial {
    public light = new TgdLight({
        direction: new TgdVec3(0.2, -0.3, -0.6).normalize(),
    })
    public ambient = new TgdLight({ color: new TgdVec4(0.2, 0.1, 0, 0) })
    public specularSharpness = 0.9
    public specularSize = 0.1
    public specularIntensity = 0.5

    public readonly varyings: { [name: string]: WebglAttributeType }
    public readonly uniforms: { [name: string]: WebglUniformType } = {
        uniLight: "vec3",
        uniLightDir: "vec3",
        uniAmbient: "vec3",
        uniSpecularSharpness: "float",
        uniSpecularSize: "float",
        uniSpecularIntensity: "float",
        uniModelViewMatrix: "mat4",
    }
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc

    private readonly texture: TgdTexture2D | null
    private readonly lightColor = new TgdVec3()
    private readonly ambientColor = new TgdVec3()

    private _shades: TgdMaterialToonShades = 3

    constructor(options: TgdMaterialToonOptions = {}) {
        super()
        const color =
            options.color instanceof TgdTexture2D
                ? options.color
                : new TgdVec4(options.color ?? DEFAULT_COLOR)
        if (options.light) {
            this.light = options.light
        }
        this.ambient =
            options.ambient ??
            new TgdLight({
                color: new TgdVec4(1, 1, 1, 1),
            })
        if (typeof options.specularSharpness === "number") {
            this.specularSharpness = options.specularSharpness
        }
        if (typeof options.specularSize === "number") {
            this.specularSize = options.specularSize
        }
        if (typeof options.specularIntensity === "number") {
            this.specularIntensity = options.specularIntensity
        }
        const hasTexture = !(color instanceof TgdVec4)
        this.texture = hasTexture ? color : null

        this.fragmentShaderCode = [
            "vec3 normal = normalize(varNormal);",
            `float light = .2 + .4 * (1.0 - dot(normal, uniLightDir));`,
            `light *= 3.0;`,
            `light -= fract(light);`,
            `light /= 3.0;`,
            hasTexture
                ? `vec4 color = texture(texDiffuse, varUV);`
                : `vec4 color = vec4(${color.join(", ")});`,
            `vec3 normal2 = mat3(uniModelViewMatrix) * normal;`,
            `float spec = max(0.0, reflect(uniLightDir, normal2).z);`,
            `float a = 1.0 - uniSpecularSize;`,
            `float b = a + (1.0 - a) * (1.0 * uniSpecularSharpness);`,
            `spec = smoothstep(a, b, spec) * uniSpecularIntensity;`,
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
        program.uniform1f("uniSpecularSharpness", this.specularSharpness)
        program.uniform1f("uniSpecularSize", this.specularSize)
        program.uniform1f("uniSpecularIntensity", this.specularIntensity)

        const { texture } = this
        if (texture) texture.activate(0, program, "texDiffuse")
    }
}
