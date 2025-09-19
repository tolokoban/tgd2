import { TgdCodeFunctions } from "@tgd/shader"

/**
 * Convert uv coords ([0.0, +1.0]) into xy coords ([-1.0, +1.0]).
 * Requires uniform `uniAspectRatio`.
 */
export function tgdCodeFunction_mapRange(
    options: Partial<{ name: string }> = {}
): TgdCodeFunctions {
    const { name = "mapRange" } = options
    return {
        [name]: `float ${name}(float value, float fromMin, float fromMax, float toMin, float toMax) {
    float t = (value - fromMin) / (fromMax - fromMin);
    return toMin + (toMax - toMin) * t;
}
`,
    }
}

export function tgdCodeFunction_mod289(
    options: Partial<{ name: string }> = {}
) {
    const { name = "mod289" } = options

    return {
        [name]: `float ${name}(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 ${name}(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 ${name}(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 ${name}(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }
`,
    }
}

export function tgdCodeFunction_permute(
    options: Partial<{ name: string }> = {}
) {
    const { name = "permute" } = options

    return {
        ...tgdCodeFunction_mod289(),
        [name]: `float ${name}(const in float v) { return mod289(((v * 34.0) + 1.0) * v); }
vec2 ${name}(const in vec2 v) { return mod289(((v * 34.0) + 1.0) * v); }
vec3 ${name}(const in vec3 v) { return mod289(((v * 34.0) + 1.0) * v); }
vec4 ${name}(const in vec4 v) { return mod289(((v * 34.0) + 1.0) * v); }`,
    }
}

/**
 * Taylor approximation of inverse square root.
 */
export function tgdCodeFunction_taylorInvSqrt(
    options: Partial<{ name: string }> = {}
) {
    const { name = "taylorInvSqrt" } = options

    return {
        [name]: `float ${name}(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 ${name}(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 ${name}(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec4 ${name}(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }`,
    }
}

/**
 * Quintic function.
 */
export function tgdCodeFunction_quintic(
    options: Partial<{ name: string }> = {}
) {
    const { name = "quintic" } = options

    return {
        [name]: `float ${name}(const in float v) { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec2  ${name}(const in vec2 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec3  ${name}(const in vec3 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec4  ${name}(const in vec4 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }`,
    }
}

export function tgdCodeFunction_float01ToVec3(
    options: Partial<{ name: string }> = {}
): TgdCodeFunctions {
    const { name = "float01ToVec3" } = options
    return {
        [name]: `vec3 ${name}(in float value) {
    int z = int(float(0xFFFFFF) * value);
    float r = float(z & 0xFF) / 255.0;
    z >>= 8;
    float g = float(z & 0xFF) / 255.0;
    z >>= 8;
    float b = float(z & 0xFF) / 255.0;
    return vec3(r, g, b);
}`,
    }
}

export function tgdCodeFunction_vec3ToFloat01(
    options: Partial<{ name: string }> = {}
): TgdCodeFunctions {
    const { name = "vec3ToFloat01" } = options
    return {
        [name]: `float ${name}(in vec3 value) {
    float r = value.r;
    float g = value.g;
    float b = value.b;
    return (b * 256.0 * 256.0 + g * 256.0 + r) * 0.000015199185323666652;
}`,
    }
}
