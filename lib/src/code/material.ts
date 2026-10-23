import type { TgdCodeFunctions } from "@tgd/shader"
import { tgdCodeConstants } from "./consts"

/**
 * GGX / Trowbridge-Reitz Normal Distribution Function (the `D` term of the Cook-Torrance specular BRDF).
 *
 * ```ts
 * float DistributionGGX(vec3 N, vec3 H, float roughness);
 * ```
 *
 * It returns the statistical concentration of microfacets whose normal is aligned with
 * the half vector `H` (halfway between the light and view directions), given the surface normal `N`.
 * A low roughness gives a narrow and bright specular highlight, a high roughness a wide and dim one.
 *
 * The perceptual `roughness` is squared to get `alpha` (Disney/Epic remapping), then:
 * `D = alpha² / (PI * ((N.H)² * (alpha² - 1) + 1)²)`.
 * The denominator is clamped to avoid a division by zero when `roughness` is 0 and `N.H` is 1.
 *
 * Requires the `PI` constant, which is added automatically.
 *
 * @see https://learnopengl.com/PBR/Theory
 */
export function tgdCodeFunction_distributionGGX({
    name = "DistributionGGX",
}: {
    name?: string
} = {}): TgdCodeFunctions {
    return {
        ...tgdCodeConstants("PI"),
        [name]: `float ${name}(vec3 N, vec3 H, float roughness) {
    float a = roughness * roughness;
    float a2 = a * a;
    float NdotH = max(dot(N, H), 0.0);
    float NdotH2 = NdotH * NdotH;
    float nom   = a2;
    float denom = (NdotH2 * (a2 - 1.0) + 1.0);
    denom = PI * denom * denom;
    return nom / max(denom, 0.001);
}`,
    }
}

/**
 * Schlick-GGX geometry function for a single direction.
 *
 * ```ts
 * float GeometrySchlickGGX(float NdotV, float roughness);
 * ```
 *
 * It approximates the ratio of microfacets that are visible (not self-shadowed or masked
 * by neighbouring microfacets) from a direction making an angle `acos(NdotV)` with the normal.
 * It is the building block of `GeometrySmith()`.
 *
 * Formula: `G1 = NdotV / (NdotV * (1 - k) + k)`, with `k = (roughness + 1)² / 8`.
 * This remapping of `k` is the one proposed by Epic Games (UE4) for **direct lighting**.
 * Adding 1 to the roughness reduces the "hotness" of very smooth surfaces.
 *
 * @see https://learnopengl.com/PBR/Theory
 */
export function tgdCodeFunction_geometrySchlickGGX({
    name = "GeometrySchlickGGX",
}: {
    name?: string
} = {}): TgdCodeFunctions {
    return {
        [name]: `float ${name}(float NdotV, float roughness) {
    float r = (roughness + 1.0);
    float k = (r * r) / 8.0;
    return NdotV / (NdotV * (1.0 - k) + k);
}`,
    }
}

/**
 * Smith geometry function (the `G` term of the Cook-Torrance specular BRDF).
 *
 * ```ts
 * float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness);
 * ```
 *
 * It estimates how much light is lost because of microfacet self-shadowing.
 * Light can be blocked twice: on its way in from the light (shadowing, direction `L`)
 * and on its way out to the viewer (masking, direction `V`).
 * Smith's method treats both events as independent and multiplies
 * the Schlick-GGX term of each direction: `G = G1(N.V) * G1(N.L)`.
 *
 * Requires `GeometrySchlickGGX()`, which is added automatically.
 *
 * @see https://learnopengl.com/PBR/Theory
 */
export function tgdCodeFunction_geometrySmith({
    name = "GeometrySmith",
}: {
    name?: string
} = {}): TgdCodeFunctions {
    return {
        ...tgdCodeFunction_geometrySchlickGGX(),
        [name]: `float ${name}(vec3 N, vec3 V, vec3 L, float roughness) {
    float NdotV = max(dot(N, V), 0.0);
    float NdotL = max(dot(N, L), 0.0);
    return GeometrySchlickGGX(NdotV, roughness) * GeometrySchlickGGX(NdotL, roughness);
}`,
    }
}

/**
 * Fresnel-Schlick approximation (the `F` term of the Cook-Torrance specular BRDF).
 *
 * ```ts
 * vec3 fresnelSchlick(float cosTheta, vec3 F0);
 * ```
 *
 * It returns the ratio of light that is reflected (instead of refracted) by a surface,
 * depending on the angle between the view direction and the normal (or the half vector).
 * Surfaces reflect more and more light as you look at them at grazing angles.
 *
 * `F0` is the base reflectivity at normal incidence: around `vec3(0.04)` for dielectrics,
 * and the albedo color for metals.
 * Schlick's formula interpolates from `F0` to 1 with a fifth power:
 * `F = F0 + (1 - F0) * (1 - cosTheta)^5`.
 *
 * @see https://en.wikipedia.org/wiki/Schlick%27s_approximation
 */
export function tgdCodeFunction_fresnelSchlick({
    name = "fresnelSchlick",
}: {
    name?: string
} = {}): TgdCodeFunctions {
    return {
        [name]: `vec3 ${name}(float cosTheta, vec3 F0) {
    return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}`,
    }
}

/**
 * Roughness-aware Fresnel-Schlick approximation, meant for Image Based Lighting (IBL).
 *
 * ```ts
 * vec3 fresnelSchlickRoughness(float cosTheta, vec3 F0, float roughness);
 * ```
 *
 * With ambient lighting coming from an environment map, there is no single half vector
 * and the classic Fresnel term over-brightens rough surfaces at grazing angles.
 * This variant (proposed by Sébastien Lagarde) replaces the upper bound `1` of
 * `fresnelSchlick()` by `max(1 - roughness, F0)`:
 * `F = F0 + (max(1 - roughness, F0) - F0) * (1 - cosTheta)^5`.
 * So the rougher the surface, the weaker the grazing reflection.
 *
 * `cosTheta` is usually `max(dot(N, V), 0.0)`.
 *
 * @see https://seblagarde.wordpress.com/2011/08/17/hello-world/
 */
export function tgdCodeFunction_fresnelSchlickRoughness({
    name = "fresnelSchlickRoughness",
}: {
    name?: string
} = {}): TgdCodeFunctions {
    return {
        [name]: `vec3 ${name}(float cosTheta, vec3 F0, float roughness) {
    return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}`,
    }
}

/**
 * Perturb the interpolated normal with a tangent space normal map,
 * without needing precomputed tangents in the vertex attributes.
 *
 * ```ts
 * vec3 getNormalFromMap();
 * ```
 *
 * The normal map texel is unpacked from `[0, 1]` to `[-1, +1]`. It is expressed in tangent space,
 * so we need a TBN matrix (Tangent, Bitangent, Normal) to bring it in the space of `varPosition`.
 *
 * The tangent is computed per pixel from screen-space derivatives (`dFdx()` / `dFdy()`):
 * the variations of the position (`Q1`, `Q2`) and of the UV coordinates (`st1`, `st2`)
 * between neighbouring pixels tell in which direction the `u` coordinate grows on the surface.
 * The bitangent is the cross product of the normal and the tangent.
 * This is cheap and convenient, but can produce faceted artifacts on low-poly meshes,
 * because the derivatives are constant over each triangle.
 *
 * @param options
 * - `texNormal`: name of the normal map sampler (default to "texNormal").
 * - `varUV`: name of the `vec2` varying with the texture coordinates (default to "varUV").
 * - `varPosition`: name of the `vec4` varying with the position (default to "varPosition").
 * - `varNormal`: name of the `vec3` varying with the interpolated normal (default to "varNormal").
 *
 * @see http://www.thetenthplanet.de/archives/1180
 */
export function tgdCodeFunction_getNormalFromMap({
    name = "getNormalFromMap",
    texNormal = "texNormal",
    varUV = "varUV",
    varPosition = "varPosition",
    varNormal = "varNormal",
}: {
    name?: string
    texNormal?: string
    varUV?: string
    varPosition?: string
    varNormal?: string
} = {}): TgdCodeFunctions {
    return {
        [name]: `vec3 ${name}() {
    vec3 tangentNormal = texture(${texNormal}, ${varUV}).xyz * 2.0 - 1.0;

    vec3 Q1  = dFdx(${varPosition}.xyz);
    vec3 Q2  = dFdy(${varPosition}.xyz);
    vec2 st1 = dFdx(${varUV});
    vec2 st2 = dFdy(${varUV});

    vec3 N   = normalize(${varNormal});
    vec3 T   = normalize(Q1 * st2.t - Q2 * st1.t);
    vec3 B   = -normalize(cross(N, T));
    mat3 TBN = mat3(T, B, N);

    return normalize(TBN * tangentNormal);
}`,
    }
}
