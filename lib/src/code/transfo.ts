import { TgdCodeFunctions } from "@tgd/shader"

/**
 * Rotate 2D coordinates.
 */
export function tgdCodeFunc_rotate2D(options: {
    name: string
}): TgdCodeFunctions {
    const { name = "rotate2D" } = options
    return {
        [name]: `vec2 ${name}(vec2 p, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    mat2 m = mat2(
        c, s,
        -s, c
    );
    return m * p;
}
`,
    }
}
