import { WebglAttributeType, WebglUniformType } from "@tgd/types"
import { tgdCalcRandom, TgdVec4 } from "@tgd/math"
import { TgdMaterial, TgdMaterialContext } from "./material"
import { TgdLight } from "@tgd/light"
import { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import {
    tgdCodeFunction_distributionGGX,
    tgdCodeFunction_fresnelSchlick,
    tgdCodeFunction_fresnelSchlickRoughness,
    tgdCodeFunction_geometrySmith,
    tgdCodeFunction_getNormalFromMap,
} from "@tgd/code"
import type { TgdDataGlb } from "@tgd/parser"
import type { TgdContext } from "@tgd/context"
import { TgdColor } from "@tgd/color"
import type { ArrayNumber4, TgdFormatGltfMesh } from "@tgd/types"
import { tgdCanvasCreateFill } from "@tgd/utils"

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

    /**
     * Create a material from the GLTF material of a mesh primitive.
     *
     * Textures missing in the asset are replaced by 1x1 textures filled
     * with sensible default colors.
     *
     * @param context The context used to create the textures.
     * @param data The GLB asset.
     * @param meshIndexOrName The mesh, its index or its name.
     * @param primitiveIndex Index of the primitive in the mesh.
     * @param skybox Cube texture used for image based lighting.
     * If omitted, a random bluish one is created.
     * @throws If the mesh or the primitive does not exist.
     */
    public static from(
        context: TgdContext,
        { data, meshIndexOrName = 0, primitiveIndex = 0, skybox }: {
            data: TgdDataGlb,
            meshIndexOrName?: TgdFormatGltfMesh | number | string,
            primitiveIndex?: number,
            skybox?: TgdTextureCube,
        }
    ): TgdMaterialGltf {
        const mesh = data.getMesh(meshIndexOrName)
        if (!mesh) {
            throw new Error(
                `[TgdMaterialGltf.from] No mesh found with ${typeof meshIndexOrName === "number" ? "index" : "name"
                } ${JSON.stringify(meshIndexOrName)}!\n${describeMeshes(data)}`,
            )
        }
        const primitive = mesh.primitives[primitiveIndex]
        if (!primitive) {
            throw new Error(
                `[TgdMaterialGltf.from] No primitive #${primitiveIndex} in mesh ${JSON.stringify(
                    mesh.name,
                )}!\n${describeMeshes(data)}`,
            )
        }
        const material = typeof primitive.material === "number" ? data.getMaterial(primitive.material) : undefined
        const pbr = material?.pbrMetallicRoughness
        const makeTexture = (textureIndex: number | undefined, name: string): TgdTexture2D | undefined => {
            if (typeof textureIndex !== "number") return undefined

            const texture = data.createTexture2D(context, textureIndex)
            texture.name = name
            return texture
        }
        return new TgdMaterialGltf({
            textures: {
                normal: makeTexture(material?.normalTexture?.index, "Normal") ?? fill(context, [0.5, 0.5, 1, 1]),
                albedo:
                    makeTexture(pbr?.baseColorTexture?.index, "Albedo") ??
                    fill(context, pbr?.baseColorFactor ?? DEFAULT_COLOR),
                emission: makeTexture(material?.emissiveTexture?.index, "Emission") ?? fill(context, [0, 0, 0, 1]),
                occlusion: makeTexture(material?.occlusionTexture?.index, "Occlusion"),
                metallicRoughness:
                    makeTexture(pbr?.metallicRoughnessTexture?.index, "MetallicRoughness") ??
                    fill(context, [0, 0.5, 0.5, 1]),
                skybox: skybox ?? makeDefaultSkybox(context),
            },
        })
    }

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
                ...tgdCodeFunction_distributionGGX(),
                ...tgdCodeFunction_geometrySmith(),
                ...tgdCodeFunction_fresnelSchlick(),
                ...tgdCodeFunction_fresnelSchlickRoughness(),
                ...tgdCodeFunction_getNormalFromMap(),
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

const DEFAULT_COLOR: ArrayNumber4 = [0.9, 0.5, 0.1, 1]

function fill(context: TgdContext, [R, G, B, A]: ArrayNumber4): TgdTexture2D {
    return new TgdTexture2D(context).loadBitmap(tgdCanvasCreateFill(1, 1, new TgdColor(R, G, B, A).toString()))
}

/**
 * @returns A human readable list of the meshes of a GLB asset,
 * with their primitives and the materials they use.
 */
function describeMeshes(data: TgdDataGlb): string {
    const meshes = data.json.meshes ?? []
    if (meshes.length === 0) return "This asset has no mesh at all."

    const materials = data.json.materials ?? []
    const lines = meshes.map((mesh, meshIndex) => {
        const primitives = mesh.primitives.map((primitive, primitiveIndex) => {
            if (typeof primitive.material !== "number") return `    - primitive #${primitiveIndex} (no material)`

            const materialName = materials[primitive.material]?.name
            return `    - primitive #${primitiveIndex} (material #${primitive.material}${
                materialName ? ` ${JSON.stringify(materialName)}` : ""
            })`
        })
        return [`  - mesh #${meshIndex} ${JSON.stringify(mesh.name)}`, ...primitives].join("\n")
    })
    return `Available meshes and primitives are:\n${lines.join("\n")}`
}

function makeDefaultSkybox(context: TgdContext): TgdTextureCube {
    return new TgdTextureCube(context, {
        imageNegX: randomCanvas(),
        imageNegY: randomCanvas(),
        imageNegZ: randomCanvas(),
        imagePosX: randomCanvas(),
        imagePosY: randomCanvas(),
        imagePosZ: randomCanvas(),
    })
}

function randomCanvas() {
    return tgdCanvasCreateFill(
        1,
        1,
        new TgdColor(tgdCalcRandom(0, 0.2), tgdCalcRandom(0.5, 0.7), tgdCalcRandom(0.7, 1), 1),
    )
}
