import { TgdCodeFunctions } from "@tgd/shader"

/**
 * Fast hue shifting for colors.
 * Hue shift is expressed in __radians__.
 */
export function tgdCodeFunction_shiftHue({
    name = "shiftHue",
}: {
    name: string
}): TgdCodeFunctions {
    return {
        [name]: `vec3 ${name}(vec3 color, float hue) {
    const vec3 k = vec3(0.5773502691896258);
    float cosAngle = cos(hue);
    return vec3(
        color * cosAngle 
        + cross(k, color) * sin(hue) 
        + k * dot(k, color) * (1.0 - cosAngle)
    );
}
`,
    }
}

export function tgdCodeFunction_luminance({
    name = "luminance",
}: {
    name: string
}): TgdCodeFunctions {
    return {
        [name]: `float ${name}(vec3 color) {
    return 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
}`,
    }
}
