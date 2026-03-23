import { WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdLight } from "@tgd/light"
import { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"
import { TgdCodeBloc } from "@tgd/shader"

export type TgdMaterialGltfOptions = {
    textures: {
        abedo: TgdTexture2D
        emission?: TgdTexture2D
        occlusion?: TgdTexture2D
        skybox?: TgdTextureCube
    }
    cleanupTexturesOnDelete?: boolean
    light: TgdLight
    ambient: TgdLight
    specularExponent: number
    specularIntensity: number
}

const DEFAULT_COLOR = new TgdVec4(0.8, 0.6, 0.1, 1)

export class TgdMaterialGltf extends TgdMaterial {
    public light = new TgdLight()
    public ambient = new TgdLight({ color: new TgdVec4(0.2, 0.1, 0, 0) })
    public specularExponent = 32
    public specularIntensity = 0.8

    private readonly textureAbedo: TgdTexture2D | undefined
    private readonly textureEmission: TgdTexture2D | undefined
    private readonly textureOcclusion: TgdTexture2D | undefined
    private readonly lightColor = new TgdVec3()
    private readonly ambientColor = new TgdVec3()

    constructor(options: Partial<TgdMaterialGltfOptions> = {}) {
        const vertexShaderCode: TgdCodeBloc = ["varNormal = mat3(uniTransfoMatrix) * NORMAL;", "varUV = TEXCOORD_0;"]
        const uniforms: { [name: string]: WebglUniformType } = {
            uniLight: "vec3",
            uniLightDir: "vec3",
            uniAmbient: "vec3",
            uniSpecularExponent: "float",
            uniSpecularIntensity: "float",
            uniModelViewMatrix: "mat4",
            texAbedo: "sampler2D",
            texEmission: "sampler2D",
            texOcclusion: "sampler2D",
            texSkybox: "samplerCube",
        }
        const varyings: { [name: string]: WebglAttributeType } = {
            varNormal: "vec3",
            varUV: "vec2",
        }

        super({
            uniforms,
            varyings,
            vertexShaderCode,
            fragmentShaderCode: [
                "vec3 N = normalize(varNormal);",
                "vec3 normal = mat3(uniModelViewMatrix) * N;",
                "vec3 L = normalize(varPosition.xyz - uniCameraPosition);",
                "vec3 R = reflect(L, N);",
                "vec3 skybox = texture(texSkybox, R).rgb;",
                "float light = 1.0 - dot(normal, uniLightDir);",
                "vec4 abedo = texture(texAbedo, varUV);",
                "float spec = max(0.0, reflect(uniLightDir, normal).z);",
                "spec = pow(spec, uniSpecularExponent) * uniSpecularIntensity;",
                "abedo = vec4(",
                "  abedo.rgb * (",
                "    uniAmbient + uniLight * light",
                "  ) + vec3(spec),",
                "  1.0",
                ");",
                "vec4 occlusion = texture(texOcclusion, varUV);",
                "vec4 emission = texture(texEmission, varUV);",
                "vec4 frag = abedo + emission;",
                "return vec4(frag.rgb * occlusion.r, frag.a);",
            ],
            setUniforms: ({ program }: { program: TgdProgram }) => {
                program.uniform3fv("uniLightDir", this.light.direction)
                this.lightColor.from(this.light.color).scale(this.light.color.w)
                program.uniform3fv("uniLight", this.lightColor)
                this.ambientColor.from(this.ambient.color).scale(this.ambient.color.w)
                program.uniform3fv("uniAmbient", this.ambientColor)
                program.uniform1f("uniSpecularExponent", this.specularExponent)
                program.uniform1f("uniSpecularIntensity", this.specularIntensity)

                const { textureAbedo, textureEmission, textureOcclusion } = this
                if (textureAbedo) textureAbedo.activate(0, program, "texAbedo")
                if (textureEmission) textureEmission.activate(1, program, "texEmission")
                if (textureOcclusion) textureOcclusion.activate(2, program, "texOcclusion")
            },
            delete: () => {
                this.textureAbedo?.delete()
                this.textureEmission?.delete()
                this.textureOcclusion?.delete()
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
        this.textureAbedo = options.textures?.abedo
        this.textureEmission = options.textures?.emission
        this.textureOcclusion = options.textures?.occlusion
    }
}
