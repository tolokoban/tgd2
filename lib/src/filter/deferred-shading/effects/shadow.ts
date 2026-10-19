/**
 * Shadow mapping in screen space.
 *
 * Classic shadow mapping needs the world position of each fragment, which a filter doesn't have.
 * It is rebuilt from the depth texture instead (see `viewPosition()`): the window depth and the
 * UV give a point in normalized device coordinates, and the inverse projection matrix brings
 * it back to camera space.
 *
 * This position `P` is then expressed in the space of the shadow camera
 * (camera space -> world space -> light space) and projected with its projection matrix.
 * This gives the UV where to read the shadow map, and the distance of `P` to the light.
 * If the shadow map holds a smaller distance (plus a bias to avoid shadow acne), something
 * stands between the light and `P`: the pixel is in the shadow.
 *
 * The comparison and the shadow color are the same as {@link TgdMaterialShadow}
 * (see `tgdShadowFragmentCode()`), so a deferred and a forward rendering give the same shadows.
 * Since the position is computed per pixel, there is no `accuracy` option.
 */
import type { TgdCamera } from "@tgd/camera"
import type { TgdColor } from "@tgd/color"
import type { TgdMaterialShadowOptions } from "@tgd/material"
import { tgdShadowFragmentCode } from "@tgd/material/shadow-code"
import { TgdMat4 } from "@tgd/math"
import type { TgdProgram } from "@tgd/program"
import type { DeferredShadingEffect } from "./types"

export interface ShadowParameters {
    shadowBias: number
    shadowColor: TgdColor
}

/**
 * Needs `vec3 P` (position in camera space) and modifies `FragColor`.
 */
export function shadowEffect(shadow: Omit<TgdMaterialShadowOptions, "material" | "accuracy">): DeferredShadingEffect {
    return {
        textures: { uniShadowTexture: shadow.texture },
        uniforms: {
            uniShadowModelViewMatrix: "mat4",
            uniShadowProjectionMatrix: "mat4",
            uniShadowColor: "vec4",
            uniShadowBias: "float",
        },
        functions: {
            applyShadow: [
                "// `P` is in camera space.",
                "vec4 applyShadow(vec4 color, vec3 P) {",
                [
                    "vec4 shadowPosition = uniShadowModelViewMatrix * vec4(P, 1.0);",
                    "// The light looks toward -Z.",
                    "float shadowDistance = -shadowPosition.z;",
                    "vec4 shadowScreen = uniShadowProjectionMatrix * shadowPosition;",
                    "vec2 uv = 0.5 * (vec2(1.0) + shadowScreen.xy / shadowScreen.w);",
                    tgdShadowFragmentCode(
                        {
                            uniTexture: "uniShadowTexture",
                            uniColor: "uniShadowColor",
                            uniBias: "uniShadowBias",
                            varDistance: "shadowDistance",
                            screenSize: "vec2(textureSize(uniTexture, 0))",
                        },
                        shadow.inverted ?? false,
                        shadow.shader,
                    ),
                ],
                "}",
            ],
        },
        code: ["FragColor = applyShadow(FragColor, P);"],
    }
}

const matrixShadow = new TgdMat4()

export function shadowSetUniforms(
    program: TgdProgram,
    parameters: ShadowParameters,
    shadowCamera: TgdCamera,
    matrixViewInverse: TgdMat4,
) {
    // Camera space -> world space -> light space.
    matrixShadow.from(shadowCamera.matrixModelView).multiply(matrixViewInverse)
    program.uniformMatrix4fv("uniShadowModelViewMatrix", matrixShadow)
    program.uniformMatrix4fv("uniShadowProjectionMatrix", shadowCamera.matrixProjection)
    const { R, G, B, A } = parameters.shadowColor
    program.uniform4f("uniShadowColor", R, G, B, A)
    program.uniform1f("uniShadowBias", parameters.shadowBias)
}
