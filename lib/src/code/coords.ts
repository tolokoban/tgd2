import { TgdCodeFunctions } from "@tgd/shader"

/**
 * Convert uv coords ([0.0, +1.0]) into xy coords ([-1.0, +1.0]).
 * Requires uniform `uniAspectRatio`.
 */
export function tgdCodeFunction_uv2xy(
    options: Partial<{ name: string; uniAspectRatio: string }> = {}
): TgdCodeFunctions {
    const { name = "uv2xy", uniAspectRatio = "uniAspectRatio" } = options
    return {
        [name]: `vec2 ${name}(vec2 uv) {
    return 2.0 * (uv - vec2(0.5)) * vec2(${uniAspectRatio}, 1.0);
}
`,
    }
}

/**
 * Convert xy coords ([-1.0, +1.0]) into uv coords ([0.0, +1.0]) .
 * Requires uniform `uniAspectRatioInverse`.
 */
export function tgdCodeFunction_xy2uv(
    options: Partial<{ name: string; uniAspectRatioInverse: string }> = {}
): TgdCodeFunctions {
    const { name = "xy2uv", uniAspectRatioInverse = "uniAspectRatioInverse" } =
        options
    return {
        [name]: `vec2 ${name}(vec2 xy) {
    return (0.5 * xy * vec2(${uniAspectRatioInverse}, 1.0)) + vec2(0.5);
}
`,
    }
}

/**
 * Convert othogonal coords into polar coords.
 * The function will return a vec2 with the length as first component,
 * and the angle as second.
 */
export function tgdCodeFunction_xy2polar(
    options: {
        name?: string
    } = {}
): TgdCodeFunctions {
    const { name = "xy2polar" } = options
    return {
        [name]: `vec2 ${name}(vec2 xy) {
    return vec2(
        length(xy),
        atan(xy.y, xy.x)
    );
}
`,
    }
}

/**
 * Reverse function of `xy2polar`.
 * @see tgdCodeFunction_xy2polar
 */
export function tgdCodeFunction_polar2xy(
    options: {
        name?: string
    } = {}
): TgdCodeFunctions {
    const { name = "polar2uv" } = options
    return {
        [name]: `vec2 ${name}(vec2 polar) {
    float r = polar.x;
    float a = polar.y;
    return vec2(
        r * cos(a),
        r * sin(a)
    );
}
`,
    }
}

/**
 * Reverse function of `xy2polar`.
 * Requires uniform `uniAspectRatioInverse`.
 * @see tgdCodeFunction_xy2polar
 */
export function tgdCodeFunction_polar2uv(
    options: Partial<{ name: string; uniAspectRatioInverse: string }> = {}
): TgdCodeFunctions {
    const {
        name = "polar2uv",
        uniAspectRatioInverse = "uniAspectRatioInverse",
    } = options
    return {
        [name]: `vec2 ${name}(vec2 polar) {
    float r = polar.x;
    float a = polar.y;
    vec2 xy = vec2(
        r * cos(a),
        r * sin(a)
    );
    return (0.5 * xy * vec2(${uniAspectRatioInverse}, 1.0)) + vec2(0.5);
}
`,
    }
}

export function tgdCodeFunction_uv2polar(
    options: Partial<{ name: string; uniAspectRatio: string }> = {}
): TgdCodeFunctions {
    const { name = "uv2polar", uniAspectRatio = "uniAspectRatio" } = options
    return {
        [name]: `vec2 ${name}(vec2 uv) {
    vec2 xy = 2.0 * (uv - vec2(0.5)) * vec2(${uniAspectRatio}, 1.0);
    return vec2(
        length(xy),
        atan(xy.y, xy.x)
    );
}
`,
    }
}
