import type { TgdCodeBloc } from "@tgd/shader"
import type { ArrayNumber4 } from "@tgd/types"

export const TGD_SHADOW_DEFAULT_COLOR: ArrayNumber4 = [0.5, 0.5, 0.5, 1]
export const TGD_SHADOW_DEFAULT_BIAS = 0.01

/**
 * Names of the GLSL variables available to a shadow shader.
 */
export interface TgdShadowShaderVars {
    /** The `vec4` color to modify. */
    color: string
    /** The `sampler2D` holding the distances from the light. */
    uniTexture: string
    /** The `vec4` tint of the shadow. */
    uniColor: string
    /** The `float` bias. */
    uniBias: string
    /** The `float` distance of the current fragment from the light. */
    varDistance: string
    /** A `vec2` expression for the width and height of the screen, in pixels. */
    screenSize: string
}

export type TgdShadowShader = (vars: TgdShadowShaderVars) => TgdCodeBloc[]

export const TGD_SHADOW_SHADERS = {
    multiply: (vars: TgdShadowShaderVars) => [`return ${vars.color} * ${vars.uniColor};`],
    color: (vars: TgdShadowShaderVars) => [`return ${vars.uniColor};`],
    add: (vars: TgdShadowShaderVars) => [`return ${vars.color} + ${vars.uniColor};`],
    halftone: (vars: TgdShadowShaderVars) => tgdShadowShaderHalftone(vars, "0.01", "0.4", "0.2"),
    discard: (_vars: TgdShadowShaderVars) => [`discard;`],
} satisfies Record<string, TgdShadowShader>

export type TgdShadowShaderName = keyof typeof TGD_SHADOW_SHADERS

/**
 * @param size Size of a cell, relative to the smallest side of the screen.
 * @param radius Radius of a dot, relative to the size of a cell.
 * @param blur 0.0 is very sharp, 1.0 very soft.
 */
export function tgdShadowShaderHalftone(
    vars: TgdShadowShaderVars,
    size: string,
    radius: string,
    blur: string,
): TgdCodeBloc[] {
    return [
        `float size = ${size};`,
        `float radius = ${radius};`,
        `float blur = ${blur};`,
        `float step = size * min(${vars.screenSize}.x, ${vars.screenSize}.y);`,
        "float halftoneRadius = radius * step;",
        "vec2 halftoneCell = mod(gl_FragCoord.xy, step) - vec2(0.5 * step);",
        // smoothstep() is undefined when edge0 >= edge1, hence the `max()`.
        "float halftoneBlur = max(blur, 0.001);",
        // 1.0 up to `(1.0 - blur) * halftoneRadius`, 0.0 from `(1.0 + blur) * halftoneRadius`.
        "float alpha = 1.0 - smoothstep((1.0 - halftoneBlur) * halftoneRadius, (1.0 + halftoneBlur) * halftoneRadius, length(halftoneCell));",
        `return mix(${vars.color}, ${vars.color} * ${vars.uniColor}, alpha);`,
    ]
}

/**
 * Body of a GLSL function returning a `vec4`.
 * It expects these local variables to be defined:
 * - `vec4 color`: the color to modify.
 * - `vec2 uv`: the coordinates of the fragment in the shadow texture.
 */
export function tgdShadowFragmentCode(
    vars: Omit<TgdShadowShaderVars, "color">,
    inverted: boolean,
    shader: TgdShadowShaderName | TgdShadowShader = "multiply",
): TgdCodeBloc {
    const { uniTexture, uniBias, varDistance } = vars
    const factory = (typeof shader === "string" ? TGD_SHADOW_SHADERS[shader] : shader) ?? TGD_SHADOW_SHADERS.multiply
    return [
        // Outside of the light's frustum, there is no shadow.
        "if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return color;",
        `float distanceFromLight = texture(${uniTexture}, uv).r;`,
        inverted
            ? `bool isInShadow = distanceFromLight + ${uniBias} > ${varDistance};`
            : `bool isInShadow = distanceFromLight + ${uniBias} < ${varDistance};`,
        "if (isInShadow) {",
        factory({ ...vars, color: "color" }),
        "}",
        "return color;",
    ]
}
