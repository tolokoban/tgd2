import { tgdCodeFunction_distributionGGX, tgdCodeFunction_getNormalFromMap } from "@tgd/code"
import type { TgdLight } from "@tgd/light"
import { TgdTransfo, TgdVec3, TgdVec4 } from "@tgd/math"
import type { TgdCodeBloc } from "@tgd/shader/code"
import { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import type { ArrayNumber3, ArrayNumber4, WebglAttributeType, WebglUniformType } from "@tgd/types"
import { tgdCanvasCreateFill } from "@tgd/utils"
import { TgdMaterial, type TgdMaterialContext } from "./material"

export type TgdMaterialGlassOptions = Partial<{
    /**
     * Base color of the glass, as a color or a texture.
     * Its alpha is the minimal opacity of the tint, where the glass faces the camera.
     * Default to `(0.4, 0.8, 1, 0.1)`.
     */
    color: TgdVec4 | ArrayNumber4 | TgdTexture2D
    /**
     * Directional lights that produce sharp highlights on the glass.
     * The intensity of a light is the alpha of its color.
     * The number of lights cannot change after the material is created.
     */
    lights: TgdLight[]
    /**
     * Environment reflected by the glass: a cube texture (usually the skybox)
     * or a uniform color.
     */
    ambientColor: TgdVec3 | ArrayNumber3 | TgdTextureCube
    /**
     * Transformation applied to the directions used to sample `ambientColor`,
     * when it is a cube texture. Only the rotation and the scale are used.
     * The instance is kept as is, so you can share it with a `TgdPainterSkybox`
     * (`skyboxTransfo: skybox.transfo`) to keep both in sync.
     */
    skyboxTransfo: TgdTransfo
    /**
     * The environment is raised to this power before being reflected.
     * Values above 1 keep only the brightest parts (like the sun) of an LDR skybox.
     * Default to `2.2`.
     */
    specularExponent: number
    /**
     * Multiplier of the reflected environment. Default to `2`.
     */
    specularIntensity: number
    /**
     * Index of refraction, used to compute the reflectivity when looking at the
     * glass straight on: `((ior - 1) / (ior + 1))²`, which is 4% for `1.5`.
     * Default to `1.5`.
     */
    ior: number
    /**
     * From 0 (polished) to 1 (frosted). It blurs the reflected environment
     * and widens the highlights of the lights. Default to `0.05`.
     */
    roughness: number
    /**
     * Maximal opacity of the tint. Light crosses more glass at grazing angles,
     * so the opacity grows from the alpha of `color` up to `opacityMax` near the silhouette.
     * Default to `0.6`.
     */
    opacityMax: number
    /**
     * Tangent space normal map.
     */
    normalMap: TgdTexture2D
}>

const DEFAULT_COLOR = new TgdVec4(0.4, 0.8, 1, 0.1)
const DEFAULT_AMBIENT = new TgdVec3(0.8, 0.8, 0.8)

/**
 * Thin glass material, rendered in a single pass with premultiplied alpha blending.
 *
 * The color of a fragment is:
 * `F * reflection + (1 - F) * (background * (1 - opacity) + tint * opacity)`,
 * where `F` is the Fresnel reflectance (Schlick): low when looking at the glass
 * straight on, and close to 1 at grazing angles.
 *
 * - The reflections of the environment and of the lights are not tinted by `color`,
 *   and they don't hide the background.
 * - The opacity of the tint grows near the silhouette, where light crosses more glass.
 *
 * The depth is tested but not written, so paint the glass after the opaque objects.
 */
export class TgdMaterialGlass extends TgdMaterial {
    public specularExponent = 2.2
    public specularIntensity = 2
    public ior = 1.5
    public roughness = 0.05
    public opacityMax = 0.6
    /**
     * Base color of the glass. Its alpha is the minimal opacity of the tint.
     * When `color` is a texture in the options, this one multiplies it
     * and defaults to `(1, 1, 1, 1)`.
     */
    public readonly color: TgdVec4
    /**
     * You can change the color and the direction of each light,
     * but not the number of lights.
     */
    public readonly lights: TgdLight[]
    /**
     * Transformation of the skybox (see `TgdMaterialGlassOptions.skyboxTransfo`).
     * Mutate it to rotate the reflected environment at runtime.
     */
    public readonly skyboxTransfo: TgdTransfo

    private textureColor: TgdTexture2D | null = null
    private mustDeleteTextureColor = false
    private textureAmbient: TgdTextureCube | null = null
    private mustDeleteTextureAmbient = false
    private readonly textureNormal: TgdTexture2D | null
    private readonly lightColor = new TgdVec3()

    constructor(private readonly options: TgdMaterialGlassOptions = {}) {
        const lights = options.lights ?? []
        const normalMap = options.normalMap ?? null
        const uniforms: { [name: string]: WebglUniformType } = {
            uniTransfoMatrix: "mat4",
            uniSkyboxMatrix: "mat4",
            uniSpecularExponent: "float",
            uniSpecularIntensity: "float",
            uniF0: "float",
            uniRoughness: "float",
            uniMaxLod: "float",
            uniOpacityMax: "float",
            uniColor: "vec4",
            texColor: "sampler2D",
            texAmbient: "samplerCube",
            uniCameraPosition: "vec3",
        }
        if (normalMap) uniforms.texNormal = "sampler2D"
        lights.forEach((_light, index) => {
            uniforms[`uniLightDir${index}`] = "vec3"
            uniforms[`uniLightColor${index}`] = "vec3"
        })
        const fragmentShaderCode: TgdCodeBloc = [
            `vec3 N = ${normalMap ? "getNormalFromMap()" : "normalize(varNormal)"};`,
            "if (!gl_FrontFacing) N = -N;",
            "vec3 V = normalize(uniCameraPosition - varPosition.xyz);",
            "float NdotV = max(dot(N, V), 0.0);",
            "// Fresnel (Schlick).",
            "float F = uniF0 + (1.0 - uniF0) * pow(1.0 - NdotV, 5.0);",
            "// Environment reflection, blurred by the roughness.",
            "vec3 R = reflect(-V, N);",
            "vec3 env = textureLod(texAmbient, mat3(uniSkyboxMatrix) * R, uniRoughness * uniMaxLod).rgb;",
            "env = pow(env, vec3(uniSpecularExponent)) * uniSpecularIntensity;",
            "// The light crosses more glass at grazing angles (Beer-Lambert).",
            "vec4 tint = texture(texColor, varUV) * uniColor;",
            "float opacity = 1.0 - pow(1.0 - tint.a, 1.0 / max(NdotV, 0.01));",
            "opacity = min(opacity, max(uniOpacityMax, tint.a));",
            "// Highlights of the lights (GGX).",
            "// Too sharp highlights flicker, because they are smaller than a pixel.",
            "float lightRoughness = max(uniRoughness, 0.1);",
            "vec3 spec = vec3(0.0);",
            ...lights.map(
                (_light, index): TgdCodeBloc => [
                    "{",
                    [
                        `vec3 L = -uniLightDir${index};`,
                        "vec3 H = normalize(L + V);",
                        "float NdotL = max(dot(N, L), 0.0);",
                        "float FH = uniF0 + (1.0 - uniF0) * pow(1.0 - max(dot(H, V), 0.0), 5.0);",
                        `spec += uniLightColor${index} * DistributionGGX(N, H, lightRoughness) * FH * NdotL;`,
                    ],
                    "}",
                ],
            ),
            "// Premultiplied alpha.",
            "vec3 color = F * env + (1.0 - F) * opacity * tint.rgb + spec;",
            "float alpha = 1.0 - (1.0 - F) * (1.0 - opacity);",
            "return vec4(color, alpha);",
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
            state: {
                blend: "premultipliedAlpha",
                depth: "lessReadOnly",
            },
            delete: () => {
                if (this.mustDeleteTextureAmbient) this.textureAmbient?.delete()
                if (this.mustDeleteTextureColor) this.textureColor?.delete()
            },
            uniforms,
            varyings,
            vertexShaderCode,
            fragmentShaderCode,
            extraFragmentShaderFunctions: {
                ...(lights.length > 0 ? tgdCodeFunction_distributionGGX() : {}),
                ...(normalMap ? tgdCodeFunction_getNormalFromMap() : {}),
            },
            setUniforms: ({ context, program }: TgdMaterialContext) => {
                if (!this.textureColor) {
                    // Lazy creation of a white texture: the color comes from `uniColor`.
                    this.textureColor = new TgdTexture2D(context)
                    this.textureColor.loadBitmap(tgdCanvasCreateFill(1, 1, "#fff"))
                    this.mustDeleteTextureColor = true
                }
                if (!this.textureAmbient) {
                    // Lazy creation of a texture from an unique color.
                    const color = this.options.ambientColor ?? DEFAULT_AMBIENT
                    const canvas = tgdCanvasCreateFill(1, 1, color instanceof TgdTextureCube ? DEFAULT_AMBIENT : color)
                    this.textureAmbient = new TgdTextureCube(context, {
                        imagePosX: canvas,
                        imagePosY: canvas,
                        imagePosZ: canvas,
                        imageNegX: canvas,
                        imageNegY: canvas,
                        imageNegZ: canvas,
                    })
                    this.mustDeleteTextureAmbient = true
                }
                this.textureColor.activate(0, program, "texColor")
                this.textureAmbient.activate(1, program, "texAmbient")
                if (this.textureNormal) this.textureNormal.activate(2, program, "texNormal")
                program.uniformMatrix4fv("uniSkyboxMatrix", this.skyboxTransfo.matrix)
                program.uniform3fv("uniCameraPosition", context.camera.transfo.actualPosition)
                program.uniform1f("uniSpecularExponent", this.specularExponent)
                program.uniform1f("uniSpecularIntensity", this.specularIntensity)
                const f0 = (this.ior - 1) / (this.ior + 1)
                program.uniform1f("uniF0", f0 * f0)
                program.uniform1f("uniRoughness", this.roughness)
                program.uniform1f("uniMaxLod", Math.log2(Math.max(1, this.textureAmbient.width)))
                program.uniform4fv("uniColor", this.color)
                program.uniform1f("uniOpacityMax", this.opacityMax)
                this.lights.forEach((light, index) => {
                    program.uniform3fv(`uniLightDir${index}`, light.direction)
                    this.lightColor.from(light.color).scale(light.color.w)
                    program.uniform3fv(`uniLightColor${index}`, this.lightColor)
                })
            },
        })

        this.lights = lights
        const { color } = options
        this.color = color instanceof TgdTexture2D ? new TgdVec4(1, 1, 1, 1) : new TgdVec4(color ?? DEFAULT_COLOR)
        this.skyboxTransfo = options.skyboxTransfo ?? new TgdTransfo()
        this.textureNormal = normalMap
        if (typeof options.specularExponent === "number") {
            this.specularExponent = options.specularExponent
        }
        if (typeof options.specularIntensity === "number") {
            this.specularIntensity = options.specularIntensity
        }
        if (options.color instanceof TgdTexture2D) {
            this.textureColor = options.color
        }
        if (options.ambientColor instanceof TgdTextureCube) {
            this.textureAmbient = options.ambientColor
        }
        this.ior = options.ior ?? 1.5
        this.roughness = options.roughness ?? 0.05
        this.opacityMax = options.opacityMax ?? 0.6
    }
}
