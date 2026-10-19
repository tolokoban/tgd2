/**
 * Physically based lighting (PBR) in screen space.
 *
 * Every pixel is lit from the textures written by the geometry pass (albedo, normal, depth,
 * metallic, roughness, specular, baked AO). Everything is computed in camera space.
 *
 * The light reaching the eye is the sum of two terms:
 *
 * 1. **Direct light** from a directional light, with the **Cook-Torrance** microfacet BRDF:
 *
 *    ```
 *    f = kD * albedo / PI  +  D * G * F / (4 * (N.V) * (N.L))
 *    ```
 *
 *    - `D`: **GGX / Trowbridge-Reitz** normal distribution. Proportion of microfacets oriented
 *      along the half vector `H = normalize(V + L)`. The rougher the surface, the wider the highlight.
 *    - `G`: **Smith** geometry term with the **Schlick-GGX** approximation
 *      (`k = (roughness + 1)² / 8` for direct lighting, as in Unreal Engine 4).
 *      Microfacets hiding each other, from the light (shadowing) and from the eye (masking).
 *    - `F`: **Fresnel-Schlick** approximation. Reflectance grows toward 1 at grazing angles.
 *      `F0` is the reflectance at normal incidence: about 4% for dielectrics
 *      (`0.08 * specular`, with `specular = 0.5`), the albedo for metals.
 *    - `kD = (1 - F) * (1 - metallic)`: energy that is not reflected is diffused,
 *      and metals don't diffuse at all.
 *
 *    The `1 / PI` of the Lambert term is compensated by the light intensity, so that a white
 *    surface facing a light of intensity 1 gets a color of 1.
 *
 * 2. **Image based lighting** (IBL) from the skybox, with the **split-sum approximation**
 *    (Karis, "Real Shading in Unreal Engine 4", 2013):
 *
 *    - Diffuse: the irradiance is read in the skybox along `N` at the coarsest mipmap level,
 *      which is a cheap average of the whole hemisphere.
 *    - Specular: the skybox is read along the reflected view vector, with a mipmap level
 *      proportional to the roughness (blurrier reflections on rough surfaces).
 *      This radiance is multiplied by the scale and bias of the BRDF integration, given by an
 *      analytic fit of the usual lookup table (Lazarov, "Getting More Physical in Call of Duty:
 *      Black Ops II", 2013), so no LUT texture is needed.
 *    - The result is multiplied by the baked ambient occlusion, and by the screen space
 *      ambient occlusion (`float ssao`) if `ambientOcclusion` is `true` (see `ao.ts`).
 */
import type { TgdCamera } from "@tgd/camera"
import { tgdCodeConstants } from "@tgd/code"
import type { TgdLight } from "@tgd/light"
import { TgdMat4, type TgdTransfo } from "@tgd/math"
import type { TgdProgram } from "@tgd/program"
import type { TgdCodeFunctions } from "@tgd/shader/code"
import type { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import type { DeferredShadingEffect } from "./types"

export interface ShadingParameters {
    skyboxTransfo: TgdTransfo
    skyboxStrength: number
    skyboxExponent: number
    light: TgdLight
}

/**
 * Needs `vec4 normal`, `vec3 base` (albedo in linear space), `vec3 P` (position in camera space)
 * and the `viewPosition()` function.
 * If `ambientOcclusion` is `true`, it also needs `float ssao`, which multiplies the ambient light.
 * Defines `vec3 color` in linear space.
 */
export function shadingEffect(
    skybox: TgdTextureCube,
    textureMaterial: TgdTexture2D | undefined,
    ambientOcclusion: boolean,
): DeferredShadingEffect {
    return {
        textures: {
            uniSkybox: skybox,
            ...(textureMaterial ? { uniMaterial: textureMaterial } : {}),
        },
        uniforms: {
            uniModelViewMatrix: "mat4",
            uniSkyboxMatrix: "mat4",
            uniSkyboxStrength: "float",
            uniSkyboxExponent: "float",
            uniSkyboxMaxLod: "float",
            uniLightDirection: "vec3",
            uniLightColor: "vec3",
        },
        functions: SHADING_FUNCTIONS,
        code: [
            textureMaterial
                ? "vec4 material = texture(uniMaterial, varUV);"
                : "vec4 material = vec4(0.0, 0.5, 0.5, 1.0);",
            ...SHADING_CODE,
            `vec3 ambient = (kD_ambient * base * irradiance + F_ambient * reflection) * bakedAO${
                ambientOcclusion ? " * ssao" : ""
            };`,
            "vec3 color = direct + ambient;",
        ],
    }
}

const matrixSkybox = new TgdMat4()

export function shadingSetUniforms(
    program: TgdProgram,
    parameters: ShadingParameters,
    skybox: TgdTextureCube,
    camera: TgdCamera,
    matrixViewInverse: TgdMat4,
) {
    const { light } = parameters
    // Camera space -> world space -> skybox space.
    matrixSkybox.fromMat3(parameters.skyboxTransfo.matrix).multiply(matrixViewInverse)
    program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
    program.uniformMatrix4fv("uniSkyboxMatrix", matrixSkybox)
    program.uniform1f("uniSkyboxStrength", parameters.skyboxStrength)
    program.uniform1f("uniSkyboxExponent", parameters.skyboxExponent)
    program.uniform1f("uniSkyboxMaxLod", Math.log2(Math.max(1, skybox.width)))
    program.uniform3fv("uniLightDirection", light.direction)
    const [r, g, b, intensity] = light.color
    program.uniform3f("uniLightColor", r * intensity, g * intensity, b * intensity)
}

const SHADING_FUNCTIONS: TgdCodeFunctions = {
    ...tgdCodeConstants("PI"),
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
        "// GGX / Trowbridge-Reitz normal distribution function.",
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
        "// Smith shadowing-masking with the Schlick-GGX approximation.",
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
}

const SHADING_CODE: string[] = [
    "float metallic = material.r;",
    "float roughness = material.g;",
    "float specular = material.b;",
    "float bakedAO = material.a;",
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
]
