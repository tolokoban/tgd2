import { WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdLight } from "@tgd/light"
import { TgdProgram } from "@tgd/program"

export type TgdMaterialFaceOrientationOptions = Partial<{
    light: TgdLight
    ambient: TgdLight
    specularExponent: number
    specularIntensity: number
}>

export class TgdMaterialFaceOrientation extends TgdMaterial {
    public light = new TgdLight({
        direction: new TgdVec3(0.1, 0.2, -1).normalize(),
    })
    public ambient = new TgdLight({ color: new TgdVec4(0.2, 0.1, 0, 0) })
    public specularExponent = 20
    public specularIntensity = 0.5

    public readonly varyings: { [name: string]: WebglAttributeType }
    public readonly uniforms: { [name: string]: WebglUniformType } = {
        uniLight: "vec3",
        uniLightDir: "vec3",
        uniAmbient: "vec3",
        uniSpecularExponent: "float",
        uniSpecularIntensity: "float",
        uniModelViewMatrix: "mat4",
    }
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc

    private readonly lightColor = new TgdVec3()
    private readonly ambientColor = new TgdVec3()

    constructor(options: TgdMaterialFaceOrientationOptions = {}) {
        super()
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
        this.fragmentShaderCode = [
            "vec3 normal = mat3(uniModelViewMatrix) * normalize(varNormal);",
            `float light = 1.0 - dot(normal, uniLightDir);`,
            `vec4 color = vec4(0.8 * (gl_FrontFacing ? vec3(0, .5, 1) : vec3(1, 0, 0)), 1.0);`,
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
    }

    setUniforms(program: TgdProgram): void {
        program.uniform3fv("uniLightDir", this.light.direction)
        this.lightColor.from(this.light.color).scale(this.light.color.w)
        program.uniform3fv("uniLight", this.lightColor)
        this.ambientColor.from(this.ambient.color).scale(this.ambient.color.w)
        program.uniform3fv("uniAmbient", this.ambientColor)
        program.uniform1f("uniSpecularExponent", this.specularExponent)
        program.uniform1f("uniSpecularIntensity", this.specularIntensity)
    }
}
