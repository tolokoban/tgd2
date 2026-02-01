import { TgdCodeFunctions } from "@tgd/shader"
import { ArrayNumber4 } from "@tgd/types"

/**
 * Fast hue shifting for colors.
 * Hue shift is expressed in __radians__.
 */
export function tgdCodeFunction_shiftHue({
    name = "shiftHue",
}: {
    name?: string
} = {}): TgdCodeFunctions {
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
    name?: string
} = {}): TgdCodeFunctions {
    return {
        [name]: `float ${name}(vec3 color) {
    return 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
}`,
    }
}

export function tgdCodeFunction_palette({
    name = "palette",
    a = [0.502, 0.502, 0.502, 1],
    b = [0.502, 0.502, 0.502, 1],
    c = [1, 1, 1, 1],
    d = [0, 0.102, 0.2, 1],
}: {
    name?: string
    a?: ArrayNumber4
    b?: ArrayNumber4
    c?: ArrayNumber4
    d?: ArrayNumber4
} = {}) {
    const A = a.map((v) => v.toFixed(5)).join(", ")
    const B = b.map((v) => v.toFixed(5)).join(", ")
    const C = c.map((v) => v.toFixed(5)).join(", ")
    const D = d.map((v) => v.toFixed(5)).join(", ")
    return {
        [name]: `vec4 ${name}(float t) {
    return vec4(${A})
        + vec4(${B}) * cos(
            6.283185307179586 * (
                t * vec4(${C})
                + vec4(${D})
            )
        );        
}`,
    }
}
