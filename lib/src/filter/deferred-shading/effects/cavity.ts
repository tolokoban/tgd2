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
 *
 * On a silhouette, the normals of the object and of what is behind it are very different, and the
 * curvature finds a valley there. With `outline`, this gives a dark contour everywhere:
 * a missing neighbour (nothing painted) gets a normal facing the camera, as if a plane was behind,
 * and the pixels where nothing has been painted output a transparent black that darkens what
 * is behind them.
 * Without `outline`, the pixels next to a silhouette are ignored: the ones with a neighbour that
 * has no normal, and, if the depth is known, the ones with a neighbour too far in depth.
 */
import type { TgdProgram } from "@tgd/program"
import type { DeferredShadingEffect } from "./types"

export interface CavityParameters {
    cavityRidge: number
    cavityValley: number
}

/**
 * Relative gap of depth (in camera space) between two neighbour pixels above which
 * they are considered to be on both sides of a silhouette.
 */
const DEPTH_GAP = 0.02

/**
 * Needs the `uniNormals` texture and `vec3 color` in linear space, which is modified.
 * If `outline` is `false` and `depth` is `true`, it also needs the `uniDepth` texture and the
 * `viewPosition()` function.
 *
 * `codeBackground` must be executed where nothing has been painted, before returning.
 */
export function cavityEffect(outline: boolean, depth: boolean): DeferredShadingEffect & { codeBackground: string[] } {
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
            ...(outline
                ? {
                      cavityNormal: [
                          "// Where nothing has been painted, the normal faces the camera.",
                          "vec4 cavityNormal(vec2 uv) {",
                          ["vec4 n = texture(uniNormals, uv);", "return n.a < 0.5 ? vec4(0.5, 0.5, 1.0, 1.0) : n;"],
                          "}",
                      ],
                  }
                : {}),
            ...(!outline && depth
                ? {
                      cavityDepth: [
                          "float cavityDepth(vec2 uv) {",
                          ["return viewPosition(uv, texture(uniDepth, uv).r).z;"],
                          "}",
                      ],
                  }
                : {}),
            cavityFactor: [
                "// Screen space curvature computed from the normals of the 4 neighbours.",
                "// Returns a factor greater than 1 on ridges and lesser than 1 in valleys.",
                "float cavityFactor(vec2 uv) {",
                [
                    "vec2 px = 1.0 / vec2(textureSize(uniNormals, 0));",
                    ...(outline
                        ? [
                              "vec4 nL = cavityNormal(uv - vec2(px.x, 0.0));",
                              "vec4 nR = cavityNormal(uv + vec2(px.x, 0.0));",
                              "vec4 nD = cavityNormal(uv - vec2(0.0, px.y));",
                              "vec4 nU = cavityNormal(uv + vec2(0.0, px.y));",
                          ]
                        : [
                              "vec4 nL = texture(uniNormals, uv - vec2(px.x, 0.0));",
                              "vec4 nR = texture(uniNormals, uv + vec2(px.x, 0.0));",
                              "vec4 nD = texture(uniNormals, uv - vec2(0.0, px.y));",
                              "vec4 nU = texture(uniNormals, uv + vec2(0.0, px.y));",
                              "// No cavity on the borders of the painted area.",
                              "if (min(min(nL.a, nR.a), min(nD.a, nU.a)) < 0.5) return 1.0;",
                          ]),
                    ...(!outline && depth
                        ? [
                              "// No cavity on the silhouettes in front of other objects.",
                              "float z = cavityDepth(uv);",
                              "float gap = max(",
                              [
                                  "max(abs(cavityDepth(uv - vec2(px.x, 0.0)) - z), abs(cavityDepth(uv + vec2(px.x, 0.0)) - z)),",
                                  "max(abs(cavityDepth(uv - vec2(0.0, px.y)) - z), abs(cavityDepth(uv + vec2(0.0, px.y)) - z))",
                              ],
                              ");",
                              `if (gap > ${DEPTH_GAP.toFixed(3)} * abs(z)) return 1.0;`,
                          ]
                        : []),
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
        codeBackground: outline
            ? [
                  "// The outer half of the contour darkens what is behind.",
                  "FragColor = vec4(0.0, 0.0, 0.0, clamp(1.0 - cavityFactor(varUV), 0.0, 1.0));",
              ]
            : [],
    }
}

export function cavitySetUniforms(program: TgdProgram, parameters: CavityParameters) {
    // Same conversion as Blender: the greater the factor, the stronger the effect.
    program.uniform1f("uniCavityRidge", 0.5 / Math.max(parameters.cavityRidge ** 2, 1e-4))
    program.uniform1f("uniCavityValley", 0.7 / Math.max(parameters.cavityValley ** 2, 1e-4))
}
