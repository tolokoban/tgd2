import { tgdCodeConstants } from "@tgd/code"
import type { TgdColorType } from "@tgd/color"
import type { TgdContext } from "@tgd/context"
import { TgdLight } from "@tgd/light"
import { TgdMat4, TgdTransfo } from "@tgd/math"
import type { TgdPainterDeferredShadingTextures } from "@tgd/painter/deferred-shading"
import { type TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import { tgdCanvasCreateFill } from "@tgd/utils"
import { TgdFilter } from "./filter"

export interface TgdFilterDeferredShadingOptions {
    /**
     * The painter that produces the normals, the depth and the material parameters.
     * Its `textureAlbedo` must be the input texture of the {@link TgdPainterFilter}.
     */
    deferredShading: {
        textureNormals: TgdTexture2D
        textureDepth: TgdTexture2D
        textureMetallicRoughnessSpecularBakedAO: TgdTexture2D
    }
    /**
     * Environment used for the reflections on metallic surfaces and for
     * the global illumination.
     * If this is a color, a cube texture of 1×1 pixels filled with this color is created.
     *
     * Default to **"#888"**.
     */
    skyboxTexture?: TgdTextureCube | TgdColorType
    /**
     * Orientation of the skybox.
     * If not defined, a new identity transfo is created.
     * You can change it at runtime through {@link TgdFilterDeferredShading.skyboxTransfo}.
     */
    skyboxTransfo?: TgdTransfo
    /**
     * The light coming from the skybox is
     * `skyboxStrength * pow(skyboxTexture.rgb, skyboxExponent)`.
     *
     * Default to **1**.
     */
    skyboxStrength?: number
    /**
     * The light coming from the skybox is
     * `skyboxStrength * pow(skyboxTexture.rgb, skyboxExponent)`.
     * The default value converts a skybox in sRGB space into linear space.
     *
     * Default to **2.2**.
     */
    skyboxExponent?: number
    /**
     * Directional light. Its `direction` is in world space and points where the light goes.
     * The alpha channel of its `color` is the intensity.
     *
     * Default to a `new TgdLight()`.
     */
    light?: TgdLight
    name?: string
}

/**
 * Physically based lighting computed in screen space from the textures of a
 * {@link TgdPainterDeferredShadingTextures}: albedo, normals, depth, metallic, roughness, specular
 * and baked ambient occlusion.
 *
 * The lighting comes from a directional light (`light`) and from the skybox (`skyboxTexture`),
 * which gives reflections on metallic surfaces and the global illumination.
 *
 * The albedo is considered to be in sRGB space: it is converted in linear space for the lighting,
 * and the result is converted back in sRGB space.
 * Where nothing has been painted, the output is `(0, 0, 0, 0)`.
 * Use an alpha blending to see what is behind.
 *
 * If `skyboxTexture` is a color, this filter owns a cube texture: call `delete()` to release it.
 *
 * @example
 * ```ts
 * const deferred = new TgdPainterDeferredShadingTextures(context, { meshes })
 * const filter = new TgdFilterDeferredShading(context, {
 *     deferredShading: deferred,
 *     skyboxTexture: skybox,
 * })
 * context.add(
 *     deferred,
 *     new TgdPainterFilter(context, {
 *         texture: deferred.textureAlbedo,
 *         filters: [filter],
 *         flipY: true,
 *     }),
 * )
 * ```
 *
 * @see {@link TgdFilterDeferredShadingOptions}
 */
export class TgdFilterDeferredShading extends TgdFilter {
    /**
     * Orientation of the skybox. Can be changed at any time.
     */
    public skyboxTransfo: TgdTransfo
    /**
     * @see {@link TgdFilterDeferredShadingOptions.skyboxStrength}
     */
    public skyboxStrength: number
    /**
     * @see {@link TgdFilterDeferredShadingOptions.skyboxExponent}
     */
    public skyboxExponent: number
    /**
     * @see {@link TgdFilterDeferredShadingOptions.light}
     */
    public light: TgdLight

    private readonly skybox: TgdTextureCube
    /** `true` if we created the skybox texture from a color. */
    private readonly skyboxMustBeDeleted: boolean
    private readonly matrixViewInverse = new TgdMat4()
    private readonly matrixSkybox = new TgdMat4()

    constructor(
        private readonly context: TgdContext,
        options: TgdFilterDeferredShadingOptions,
    ) {
        const { deferredShading } = options
        const skyboxMustBeDeleted = !(options.skyboxTexture instanceof TgdTextureCube)
        const skybox =
            options.skyboxTexture instanceof TgdTextureCube
                ? options.skyboxTexture
                : createSkyboxFromColor(context, options.skyboxTexture ?? "#888")
        super({
            name: options.name ?? `TgdFilterDeferredShading/${TgdFilter.id++}`,
            textures: {
                uniNormals: deferredShading.textureNormals,
                uniDepth: deferredShading.textureDepth,
                uniMaterial: deferredShading.textureMetallicRoughnessSpecularBakedAO,
                uniSkybox: skybox,
            },
            uniforms: {
                uniProjectionMatrixInverse: "mat4",
                uniModelViewMatrix: "mat4",
                uniSkyboxMatrix: "mat4",
                uniSkyboxStrength: "float",
                uniSkyboxExponent: "float",
                uniSkyboxMaxLod: "float",
                uniLightDirection: "vec3",
                uniLightColor: "vec3",
            },
            extraFunctions: {
                ...tgdCodeConstants("PI"),
                viewPosition: [
                    "// The depth texture holds the window depth (between 0 and 1).",
                    "// Works for perspective and orthographic projections.",
                    "vec3 viewPosition(vec2 uv, float depth) {",
                    [
                        "vec4 p = uniProjectionMatrixInverse * vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);",
                        "return p.xyz / p.w;",
                    ],
                    "}",
                ],
                skyboxLight: [
                    "// `direction` is in camera space.",
                    "vec3 skyboxLight(vec3 direction, float lod) {",
                    [
                        "vec3 dir = mat3(uniSkyboxMatrix) * direction;",
                        "vec3 color = textureLod(uniSkybox, dir, lod).rgb;",
                        "return uniSkyboxStrength * pow(color, vec3(uniSkyboxExponent));",
                    ],
                    "}",
                ],
                distributionGGX: [
                    "float distributionGGX(float NdotH, float roughness) {",
                    [
                        "float a = roughness * roughness;",
                        "float a2 = a * a;",
                        "float denom = NdotH * NdotH * (a2 - 1.0) + 1.0;",
                        "return a2 / max(PI * denom * denom, 1e-4);",
                    ],
                    "}",
                ],
                geometrySmith: [
                    "float geometrySmith(float NdotV, float NdotL, float roughness) {",
                    [
                        "float r = roughness + 1.0;",
                        "float k = (r * r) / 8.0;",
                        "float gv = NdotV / (NdotV * (1.0 - k) + k);",
                        "float gl = NdotL / (NdotL * (1.0 - k) + k);",
                        "return gv * gl;",
                    ],
                    "}",
                ],
                fresnelSchlick: [
                    "vec3 fresnelSchlick(float cosTheta, vec3 F0) {",
                    ["return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);"],
                    "}",
                ],
                envBRDFApprox: [
                    "// Analytic approximation of the split-sum BRDF lookup table (Karis, Lazarov).",
                    "vec3 envBRDFApprox(vec3 F0, float roughness, float NdotV) {",
                    [
                        "const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);",
                        "const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);",
                        "vec4 r = roughness * c0 + c1;",
                        "float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;",
                        "vec2 AB = vec2(-1.04, 1.04) * a004 + r.zw;",
                        "return F0 * AB.x + AB.y;",
                    ],
                    "}",
                ],
            },
            fragmentShaderCode: [
                "vec4 normal = texture(uniNormals, varUV);",
                "if (normal.a < 0.5) {",
                ["// Nothing has been painted here.", "FragColor = vec4(0.0);", "return;"],
                "}",
                "vec4 albedo = texture(uniTexture, varUV);",
                "vec3 base = pow(albedo.rgb, vec3(2.2));",
                "vec4 material = texture(uniMaterial, varUV);",
                "float metallic = material.r;",
                "float roughness = material.g;",
                "float specular = material.b;",
                "float bakedAO = material.a;",
                "// Everything is computed in camera space.",
                "vec3 P = viewPosition(varUV, texture(uniDepth, varUV).r);",
                "// Going through the near plane works for orthographic cameras too.",
                "vec3 V = normalize(viewPosition(varUV, 0.0) - P);",
                "vec3 N = normalize(normal.xyz * 2.0 - 1.0);",
                "float NdotV = max(dot(N, V), 1e-4);",
                "// A specular of 0.5 gives the usual 4% reflectance of dielectrics.",
                "vec3 F0 = mix(vec3(0.08 * specular), base, metallic);",
                "// Directional light (Cook-Torrance).",
                "vec3 L = -normalize(mat3(uniModelViewMatrix) * uniLightDirection);",
                "vec3 H = normalize(V + L);",
                "float NdotL = max(dot(N, L), 0.0);",
                "vec3 F = fresnelSchlick(max(dot(H, V), 0.0), F0);",
                "float D = distributionGGX(max(dot(N, H), 0.0), roughness);",
                "float G = geometrySmith(NdotV, NdotL, roughness);",
                "vec3 specularDirect = D * G * F / max(4.0 * NdotV * NdotL, 1e-4);",
                "vec3 kD = (1.0 - F) * (1.0 - metallic);",
                "// A white surface facing a light of intensity 1 gets a color of 1.",
                "vec3 direct = (kD * base + PI * specularDirect) * uniLightColor * NdotL;",
                "// Image based lighting from the skybox.",
                "vec3 F_ambient = envBRDFApprox(F0, roughness, NdotV);",
                "vec3 kD_ambient = (1.0 - F_ambient) * (1.0 - metallic);",
                "vec3 irradiance = skyboxLight(N, uniSkyboxMaxLod);",
                "vec3 reflection = skyboxLight(reflect(-V, N), roughness * uniSkyboxMaxLod);",
                "vec3 ambient = (kD_ambient * base * irradiance + F_ambient * reflection) * bakedAO;",
                "vec3 color = direct + ambient;",
                "FragColor = vec4(pow(clamp(color, 0.0, 1.0), vec3(1.0 / 2.2)), albedo.a);",
            ],
            setUniforms: ({ program }) => {
                const { context, matrixViewInverse, matrixSkybox, light } = this
                const { camera } = context
                matrixViewInverse.from(camera.matrixModelView).invert()
                // Camera space -> world space -> skybox space.
                matrixSkybox.fromMat3(this.skyboxTransfo.matrix).multiply(matrixViewInverse)
                program.uniformMatrix4fv("uniProjectionMatrixInverse", camera.matrixProjectionInverse)
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
                program.uniformMatrix4fv("uniSkyboxMatrix", matrixSkybox)
                program.uniform1f("uniSkyboxStrength", this.skyboxStrength)
                program.uniform1f("uniSkyboxExponent", this.skyboxExponent)
                program.uniform1f("uniSkyboxMaxLod", Math.log2(Math.max(1, skybox.width)))
                program.uniform3fv("uniLightDirection", light.direction)
                const [r, g, b, intensity] = light.color
                program.uniform3f("uniLightColor", r * intensity, g * intensity, b * intensity)
            },
        })
        this.skybox = skybox
        this.skyboxMustBeDeleted = skyboxMustBeDeleted
        this.skyboxTransfo = options.skyboxTransfo ?? new TgdTransfo()
        this.skyboxStrength = options.skyboxStrength ?? 1
        this.skyboxExponent = options.skyboxExponent ?? 2.2
        this.light = options.light ?? new TgdLight()
    }

    /**
     * Release the skybox texture if it has been created from a color.
     */
    delete() {
        if (this.skyboxMustBeDeleted) this.skybox.delete()
    }
}

function createSkyboxFromColor(context: TgdContext, color: TgdColorType): TgdTextureCube {
    const canvas = tgdCanvasCreateFill(1, 1, color)
    return new TgdTextureCube(context, {
        name: "TgdFilterDeferredShading/skybox",
        imagePosX: canvas,
        imagePosY: canvas,
        imagePosZ: canvas,
        imageNegX: canvas,
        imageNegY: canvas,
        imageNegZ: canvas,
    })
}
