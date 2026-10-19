/**
 * Screen space cavity, like the one of Blender's viewport in "Solid" shading
 * (`curvature_soft_clamp()` of the Workbench engine).
 *
 * The curvature is estimated from the normals of the 4 neighbour pixels.
 * The normals are in camera space, so on a convex surface (a ridge) the X component grows
 * from left to right and the Y component grows from bottom to top: the divergence of the
 * normal field `dNx/dx + dNy/dy` is positive. It is negative in a concave area (a valley).
 * Because it is measured per pixel, this curvature doesn't depend on the distance to the camera:
 * thin details stay visible at any zoom level.
 *
 * The raw divergence is then smoothly clamped by `x * (1 - x * c)` (a parabola that
 * reaches its maximum `0.25 / c` at `x = 0.5 / c`), so that strong edges don't saturate.
 * `c` comes from the user `ridge` and `valley` strengths: `c = 0.5 / ridge²` and
 * `c = 0.7 / valley²`, the same conversion as Blender.
 *
 * The color is finally multiplied by `1 + curvature`: lighter on ridges, darker in valleys.
 * Pixels on the border of the painted area are ignored because one of their neighbours
 * has no normal.
 */
import type { TgdProgram } from "@tgd/program"
import type { DeferredShadingEffect } from "./types"

export interface CavityParameters {
    cavityRidge: number
    cavityValley: number
}

/**
 * Needs the `uniNormals` texture and `vec3 color` in linear space, which is modified.
 */
export function cavityEffect(): DeferredShadingEffect {
    return {
        textures: {},
        uniforms: {
            uniCavityRidge: "float",
            uniCavityValley: "float",
        },
        functions: {
            cavitySoftClamp: [
                "float cavitySoftClamp(float curvature, float control) {",
                [
                    "if (curvature < 0.5 / control) return curvature * (1.0 - curvature * control);",
                    "return 0.25 / control;",
                ],
                "}",
            ],
            cavityFactor: [
                "// Screen space curvature computed from the normals of the 4 neighbours.",
                "// Returns a factor greater than 1 on ridges and lesser than 1 in valleys.",
                "float cavityFactor(vec2 uv) {",
                [
                    "vec2 px = 1.0 / vec2(textureSize(uniNormals, 0));",
                    "vec4 nL = texture(uniNormals, uv - vec2(px.x, 0.0));",
                    "vec4 nR = texture(uniNormals, uv + vec2(px.x, 0.0));",
                    "vec4 nD = texture(uniNormals, uv - vec2(0.0, px.y));",
                    "vec4 nU = texture(uniNormals, uv + vec2(0.0, px.y));",
                    "// No cavity on the borders of the painted area.",
                    "if (min(min(nL.a, nR.a), min(nD.a, nU.a)) < 0.5) return 1.0;",
                    "// The normals are encoded in [0, 1], hence the factor 2.",
                    "float diff = 2.0 * ((nR.x - nL.x) + (nU.y - nD.y));",
                    "float curvature = diff < 0.0",
                    [
                        "? -2.0 * cavitySoftClamp(-diff, uniCavityValley)",
                        ": 2.0 * cavitySoftClamp(diff, uniCavityRidge);",
                    ],
                    "return clamp(curvature + 1.0, 0.0, 4.0);",
                ],
                "}",
            ],
        },
        code: ["color *= cavityFactor(varUV);"],
    }
}

export function cavitySetUniforms(program: TgdProgram, parameters: CavityParameters) {
    // Same conversion as Blender: the greater the factor, the stronger the effect.
    program.uniform1f("uniCavityRidge", 0.5 / Math.max(parameters.cavityRidge ** 2, 1e-4))
    program.uniform1f("uniCavityValley", 0.7 / Math.max(parameters.cavityValley ** 2, 1e-4))
}
