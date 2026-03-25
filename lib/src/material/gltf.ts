import { WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec4 } from "@tgd/math"
import { TgdMaterial, TgdMaterialContext } from "./material"
import { TgdLight } from "@tgd/light"
import { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import { tgdCodeConstants } from "@tgd/code"

export type TgdMaterialGltfOptions = {
    textures: {
        normal: TgdTexture2D
        albedo: TgdTexture2D
        emission: TgdTexture2D
        occlusion?: TgdTexture2D
        metallicRoughness: TgdTexture2D
        skybox: TgdTextureCube
    }
}

export class TgdMaterialGltf extends TgdMaterial {
    public light = new TgdLight()
    public ambient = new TgdLight({ color: new TgdVec4(0.2, 0.1, 0, 0) })
    public specularExponent = 32
    public specularIntensity = 0.8

    private readonly textureNormal: TgdTexture2D
    private readonly textureAlbedo: TgdTexture2D
    private readonly textureEmission: TgdTexture2D
    private readonly textureOcclusion: TgdTexture2D | undefined
    private readonly textureMetallicRoughness: TgdTexture2D
    private readonly textureSkybox: TgdTextureCube

    constructor(options: Partial<TgdMaterialGltfOptions> & { textures: TgdMaterialGltfOptions["textures"] }) {
        const uniforms: { [name: string]: WebglUniformType } = {
            uniLight: "vec3",
            uniLightDir: "vec3",
            uniAmbient: "vec3",
            uniSpecularExponent: "float",
            uniSpecularIntensity: "float",
            uniModelViewMatrix: "mat4",
            uniCameraPosition: "vec3",
            texNormal: "sampler2D",
            texAlbedo: "sampler2D",
            texEmission: "sampler2D",
            texMetallicRoughness: "sampler2D",
            texSkybox: "samplerCube",
        }
        if (options.textures.occlusion) {
            uniforms["texOcclusion"] = "sampler2D"
        }
        const varyings: { [name: string]: WebglAttributeType } = {
            varPosition: "vec4",
            varNormal: "vec3",
            varUV: "vec2",
        }

        super({
            uniforms,
            varyings,
            vertexShaderCode: () => [
                `varUV = ${this.attUV};`,
                `varNormal = mat3(uniTransfoMatrix) * ${this.attNormal};`,
                `varPosition = uniTransfoMatrix * ${this.attPosition};`,
            ],
            extraFragmentShaderFunctions: {
                ...tgdCodeConstants("PI"),
                DistributionGGX: [
                    "float DistributionGGX(vec3 N, vec3 H, float roughness) {",
                    [
                        "float a = roughness * roughness;",
                        "float a2 = a * a;",
                        "float NdotH = max(dot(N, H), 0.0);",
                        "float NdotH2 = NdotH * NdotH;",
                        "float nom   = a2;",
                        "float denom = (NdotH2 * (a2 - 1.0) + 1.0);",
                        "denom = PI * denom * denom;",
                        "return nom / max(denom, 0.001);",
                    ],
                    "}",
                ],
                GeometrySchlickGGX: [
                    "float GeometrySchlickGGX(float NdotV, float roughness) {",
                    [
                        "float r = (roughness + 1.0);",
                        "float k = (r * r) / 8.0;",
                        "return NdotV / (NdotV * (1.0 - k) + k);",
                    ],
                    "}",
                ],
                GeometrySmith: [
                    "float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness) {",
                    [
                        "float NdotV = max(dot(N, V), 0.0);",
                        "float NdotL = max(dot(N, L), 0.0);",
                        "return GeometrySchlickGGX(NdotV, roughness) * GeometrySchlickGGX(NdotL, roughness);",
                    ],
                    "}",
                ],
                fresnelSchlick: [
                    "vec3 fresnelSchlick(float cosTheta, vec3 F0) {",
                    ["return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);"],
                    "}",
                ],
                fresnelSchlickRoughness: [
                    "// Roughness-dependent Fresnel for IBL",
                    "vec3 fresnelSchlickRoughness(float cosTheta, vec3 F0, float roughness) {",
                    ["return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);"],
                    "}",
                ],
                getNormalFromMap: [
                    "// --- TBN Generation (Screen-space derivatives) ---",
                    "vec3 getNormalFromMap() {",
                    [
                        "vec3 tangentNormal = texture(texNormal, varUV).xyz * 2.0 - 1.0;",
                        "",
                        "vec3 Q1  = dFdx(varPosition.xyz);",
                        "vec3 Q2  = dFdy(varPosition.xyz);",
                        "vec2 st1 = dFdx(varUV);",
                        "vec2 st2 = dFdy(varUV);",
                        "",
                        "vec3 N   = normalize(varNormal);",
                        "vec3 T   = normalize(Q1 * st2.t - Q2 * st1.t);",
                        "vec3 B   = -normalize(cross(N, T));",
                        "mat3 TBN = mat3(T, B, N);",
                        "",
                        "return normalize(TBN * tangentNormal);",
                    ],
                    "}",
                ],
            },
            fragmentShaderCode: [
                "// 1. Fetch Material Properties",
                "vec3 albedo     = texture(texAlbedo, varUV).rgb;",
                "albedo          = pow(albedo, vec3(2.2)); // Convert to Linear",
                "float roughness = texture(texMetallicRoughness, varUV).g;",
                "float metallic  = texture(texMetallicRoughness, varUV).b;",
                options.textures.occlusion
                    ? "float ao        = texture(texOcclusion, varUV).r;"
                    : "// No ambient occlusion texture",
                "vec3 emission   = texture(texEmission, varUV).rgb;",
                "",
                "// 2. Setup Vectors",
                "vec3 N = getNormalFromMap();",
                "vec3 V = normalize(uniCameraPosition - varPosition.xyz);",
                "vec3 R = reflect(-V, N); ",
                "",
                "// 3. Fresnel Reflectance at Zero Incidence (F0)",
                "vec3 F0 = vec3(0.04); ",
                "F0 = mix(F0, albedo, metallic);",
                "",
                "// 4. Lighting Calculation (Using Skybox as a Simple Light Source)",
                "// For a full PBR, you'd iterate over point lights here. ",
                "// Below is the Ambient/IBL contribution which defines the look.",
                "",
                "vec3 F = fresnelSchlickRoughness(max(dot(N, V), 0.0), F0, roughness);",
                "",
                "vec3 kS = F;",
                "vec3 kD = (1.0 - kS) * (1.0 - metallic);",
                "",
                "// Simple IBL Diffuse",
                "vec3 irradiance = texture(texSkybox, N).rgb;",
                "vec3 diffuse = irradiance * albedo;",
                "",
                "// Simple IBL Specular (Sampling skybox based on roughness)",
                "// Note: In a real engine, you'd use a pre-filtered mipmapped radiance map",
                "vec3 prefilteredColor = textureLod(texSkybox, R, roughness * 7.0).rgb; ",
                "vec3 specular = prefilteredColor * F;",
                "",
                "// 5. Combine and Apply AO/Emission",
                options.textures.occlusion
                    ? "vec3 ambient = (kD * diffuse + specular) * ao;"
                    : "vec3 ambient = (kD * diffuse + specular);",
                "vec3 color = ambient + emission;",
                "",
                "// 6. Tonemapping and Gamma Correction",
                "color = color / (color + vec3(1.0)); // Reinhard",
                "color = pow(color, vec3(1.0/2.2));",
                "",
                "return vec4(color, 1.0);",
            ],
            setUniforms: ({ program, context }: TgdMaterialContext) => {
                program.uniform3fv("uniCameraPosition", context.camera.transfo.actualPosition)

                const {
                    textureNormal,
                    textureAlbedo,
                    textureEmission,
                    textureOcclusion,
                    textureMetallicRoughness,
                    textureSkybox,
                } = this
                let unit = 0
                textureNormal.activate(unit++, program, "texNormal")
                textureAlbedo.activate(unit++, program, "texAlbedo")
                textureEmission.activate(unit++, program, "texEmission")
                if (textureOcclusion) textureOcclusion.activate(unit++, program, "texOcclusion")
                textureMetallicRoughness.activate(unit++, program, "texMetallicRoughness")
                textureSkybox.activate(unit++, program, "texSkybox")
            },
            delete: () => {
                this.textureNormal.delete()
                this.textureAlbedo.delete()
                this.textureEmission.delete()
                this.textureOcclusion?.delete()
                this.textureMetallicRoughness.delete()
                this.textureSkybox.delete()
            },
        })
        this.textureNormal = options.textures.normal
        this.textureAlbedo = options.textures.albedo
        this.textureEmission = options.textures.emission
        this.textureOcclusion = options.textures.occlusion
        this.textureMetallicRoughness = options.textures.metallicRoughness
        this.textureSkybox = options.textures.skybox
    }
}
