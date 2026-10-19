/**
 * Screen Space Ambient Occlusion (SSAO).
 *
 * ## What is ambient occlusion?
 *
 * The ambient light comes from every direction of the sky at once. A point on a flat, open
 * surface receives it from its whole hemisphere, but a point at the bottom of a crease, in a
 * corner or under an object only sees a part of the sky: the rest is hidden by the surrounding
 * geometry. The proportion of the hemisphere that is **not** hidden is the ambient occlusion
 * factor, from 0 (fully occluded) to 1 (fully open). Multiplying the ambient light by this factor
 * gives the soft contact shadows that make objects feel grounded.
 *
 * Computing it exactly needs ray tracing against the whole scene. SSAO approximates it with
 * the only geometry available after the geometry pass: the depth and the normal of each pixel.
 *
 * ## Pass 1: occlusion estimate ({@link TgdPainterAmbientOcclusionScreenSpace})
 *
 * For each pixel:
 *
 * 1. **Position reconstruction.** The window depth `d` (between 0 and 1) and the UV give a point
 *    in normalized device coordinates `(2u - 1, 2v - 1, 2d - 1)`. The inverse projection matrix
 *    brings it back to camera space: `P = (M⁻¹ · ndc).xyz / w`. This works for perspective and
 *    orthographic cameras.
 * 2. **Hemisphere kernel.** A constant set of points is distributed in the unit hemisphere
 *    oriented toward +Z, along a golden angle spiral with a cosine distribution. Most of them are
 *    close to the origin, because near occluders matter more than far ones.
 * 3. **Orientation.** A tangent frame `TBN` is built around the normal `N`. Its tangent is
 *    rotated by a random angle per pixel (interleaved gradient noise), so that neighbour pixels
 *    use different sample directions. This turns banding artifacts into high frequency noise.
 * 4. **Sampling.** Each kernel point becomes `S = P + TBN · k · radius`. `S` is projected on the
 *    screen, and the depth texture tells us the depth `sceneZ` of the visible surface at this place.
 *    If this surface is in front of `S` (`S.z + bias < sceneZ`, the camera looks toward -Z),
 *    something hides `S` from the camera: the sample is occluded.
 * 5. **Range check.** A wall far behind (or in front of) `P` can be in front of `S` on the screen
 *    without touching `P`. Its contribution is attenuated by `smoothstep(0, 1, radius / |P.z - sceneZ|)`,
 *    which avoids dark halos around silhouettes.
 * 6. The result is `1 - occludedSamples / samplesCount`.
 *
 * ## Pass 2 (optional): bilateral blur
 *
 * With 16 samples per pixel, the per pixel rotation gives a noisy result. Averaging the 5×5
 * neighbourhood hides the noise, because interleaved gradient noise spreads the rotations evenly
 * over small blocks of pixels. But a plain box blur would bleed the darkening of an object onto
 * the background behind it. So the blur is **bilateral**: each neighbour is weighted by
 *
 * - its **depth similarity**: `1 - smoothstep(0, 5%, |zNeighbour - zCenter| / |zCenter|)`.
 *   A relative difference makes the tolerance independent of the distance to the camera.
 * - its **normal similarity**: `max(0, Nneighbour · Ncenter)⁸`, so the two faces of an edge don't mix.
 *
 * The blurred factor is stored in an 8 bits texture with linear filtering, which is precise
 * enough for a value between 0 and 1.
 *
 * ## Pass 3: combination, in {@link TgdFilterDeferredShading}
 *
 * The factor is shaped with `ao = pow(factor, intensity)`: `0` disables the effect, `1` keeps the
 * raw estimate and values above `1` make it darker and wider. Then:
 *
 * - `combineWithLight === true`: physically, only the ambient light is occluded, because a
 *   directional light comes from a single direction, which the shadow map already handles. So `ao`
 *   multiplies the image based lighting term, together with the baked ambient occlusion.
 *   The effect is subtle on surfaces facing the light.
 * - `combineWithLight === false`: `ao` multiplies the final color, direct light included.
 *   This is not physically correct, but it is much more visible and gives a stylized look.
 *   This is also what happens when the lighting is disabled (`shading === false`).
 */
import type { TgdContext } from "@tgd/context"
import { TgdPainterAmbientOcclusionScreenSpace } from "@tgd/painter/ambient-occlusion-screen-space"
import { TgdPainterFramebuffer } from "@tgd/painter/framebuffer"
import { TgdPainterProgram } from "@tgd/painter/program"
import type { TgdProgram } from "@tgd/program"
import { TgdTexture2D } from "@tgd/texture"
import { TgdUniformBufferObject } from "@tgd/uniform/uniform-buffer-object"
import type { DeferredShadingEffect } from "./types"

export interface AmbientOcclusionParameters {
    ambientOcclusionIntensity: number
}

export interface AmbientOcclusionOptions {
    textureNormals: TgdTexture2D
    textureDepth: TgdTexture2D
    blur: boolean
}

/**
 * Owns the passes that compute the ambient occlusion factor in {@link AmbientOcclusion.texture}.
 * They must be painted before the filter that uses this texture.
 */
export class AmbientOcclusion {
    /** Single channel texture with the ambient occlusion factor, from 0 (occluded) to 1 (open). */
    public readonly texture: TgdTexture2D

    private readonly painterAO: TgdPainterAmbientOcclusionScreenSpace
    private readonly blur: AmbientOcclusionBlur | null

    constructor(context: TgdContext, options: AmbientOcclusionOptions) {
        const { textureNormals, textureDepth } = options
        this.painterAO = new TgdPainterAmbientOcclusionScreenSpace(context, {
            textureNormals,
            textureDepth,
            quality: "medium",
        })
        this.blur = options.blur
            ? new AmbientOcclusionBlur(context, this.painterAO.textureAO, textureNormals, textureDepth)
            : null
        this.texture = this.blur?.texture ?? this.painterAO.textureAO
    }

    paint(time: number, delta: number) {
        this.painterAO.paint(time, delta)
        this.blur?.paint(time, delta)
    }

    delete() {
        this.painterAO.delete()
        this.blur?.delete()
    }
}

/**
 * Depth and normal aware 5×5 blur of the raw ambient occlusion factor.
 */
class AmbientOcclusionBlur {
    public readonly texture: TgdTexture2D

    private readonly uniforms: TgdUniformBufferObject<
        "uniProjectionMatrixInverse",
        { uniProjectionMatrixInverse: "mat4" }
    >
    private readonly program: TgdPainterProgram
    private readonly framebuffer: TgdPainterFramebuffer

    constructor(
        private readonly context: TgdContext,
        textureAO: TgdTexture2D,
        textureNormals: TgdTexture2D,
        textureDepth: TgdTexture2D,
    ) {
        this.texture = new TgdTexture2D(context, {
            name: "TgdFilterDeferredShading/textureAmbientOcclusionBlurred",
            storage: {
                format: "R8 / RED / UNSIGNED_BYTE",
            },
            params: {
                magFilter: "LINEAR",
                minFilter: "LINEAR",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        const uniforms = new TgdUniformBufferObject(context, {
            uniforms: { uniProjectionMatrixInverse: "mat4" },
        })
        this.uniforms = uniforms
        this.program = new TgdPainterProgram(context, {
            drawMode: "TRIANGLE_STRIP",
            state: { depth: "off", cull: "off", blend: "off" },
            uniforms: { uniforms },
            textures: {
                uniAO: textureAO,
                uniNormals: textureNormals,
                uniDepth: textureDepth,
            },
            dataset: {
                attribs: {
                    // biome-ignore format: keep matrix-like alignment
                    // prettier-ignore
                    attPoint: {
                        type: "vec2", data: new Float32Array([
                            -1, -1,
                            +1, -1,
                            -1, +1,
                            +1, +1,
                        ])
                    },
                },
            },
            vert: {
                mainCode: ["gl_Position = vec4(attPoint, 0.0, 1.0);"],
            },
            frag: {
                precision: "highp",
                outputs: { FragColor: "float" },
                functions: [
                    "// Z coordinate in camera space (negative in front of the camera).",
                    "float viewZ(vec2 uv) {",
                    [
                        "float depth = texture(uniDepth, uv).r;",
                        "vec4 p = uniProjectionMatrixInverse * vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);",
                        "return p.z / p.w;",
                    ],
                    "}",
                ],
                mainCode: [
                    "ivec2 size = textureSize(uniAO, 0);",
                    "ivec2 pixel = ivec2(gl_FragCoord.xy);",
                    "vec2 uv = (vec2(pixel) + 0.5) / vec2(size);",
                    "vec4 normal = texture(uniNormals, uv);",
                    "if (normal.a < 0.5) {",
                    ["// Nothing has been painted here.", "FragColor = 1.0;", "return;"],
                    "}",
                    "vec3 N = normal.xyz * 2.0 - 1.0;",
                    "float z = viewZ(uv);",
                    "float sum = 0.0;",
                    "float weights = 0.0;",
                    "for (int dy = -2; dy <= 2; dy++) {",
                    [
                        "for (int dx = -2; dx <= 2; dx++) {",
                        [
                            "ivec2 neighbour = clamp(pixel + ivec2(dx, dy), ivec2(0), size - 1);",
                            "vec2 uvNeighbour = (vec2(neighbour) + 0.5) / vec2(size);",
                            "vec4 normalNeighbour = texture(uniNormals, uvNeighbour);",
                            "if (normalNeighbour.a < 0.5) continue;",
                            "",
                            "// Relative difference: the tolerance doesn't depend on the distance.",
                            "float depthDiff = abs(viewZ(uvNeighbour) - z) / max(abs(z), 1e-3);",
                            "float weightDepth = 1.0 - smoothstep(0.0, 0.05, depthDiff);",
                            "float weightNormal = pow(max(dot(normalNeighbour.xyz * 2.0 - 1.0, N), 0.0), 8.0);",
                            "float weight = weightDepth * weightNormal;",
                            "sum += weight * texelFetch(uniAO, neighbour, 0).r;",
                            "weights += weight;",
                        ],
                        "}",
                    ],
                    "}",
                    "// The center pixel always has a weight of about 1.",
                    "FragColor = weights > 0.0 ? sum / weights : texelFetch(uniAO, pixel, 0).r;",
                ],
            },
            onEnter: () => {
                uniforms.values.uniProjectionMatrixInverse = this.context.camera.matrixProjectionInverse
            },
        })
        this.framebuffer = new TgdPainterFramebuffer(context, {
            name: "TgdFilterDeferredShading/framebufferAmbientOcclusionBlur",
            depthBuffer: false,
            stencilBuffer: false,
            textureColor0: this.texture,
            children: [this.program],
        })
    }

    paint(time: number, delta: number) {
        this.framebuffer.paint(time, delta)
    }

    delete() {
        this.framebuffer.delete()
        this.program.delete()
        this.uniforms.delete()
        this.texture.delete()
    }
}

/**
 * Defines `float ssao`, the shaped ambient occlusion factor, in the main function.
 * It must be inserted before the shading code, which can use it.
 *
 * If `combineWithLight` is `false`, `codeAfterShading` multiplies `vec3 color` by `ssao`.
 * Otherwise, the shading must multiply its ambient term by `ssao`
 * (see `shadingEffect()`).
 */
export function ambientOcclusionEffect(
    texture: TgdTexture2D,
    combineWithLight: boolean,
): DeferredShadingEffect & { codeAfterShading: string[] } {
    return {
        textures: { uniAmbientOcclusion: texture },
        uniforms: { uniAmbientOcclusionIntensity: "float" },
        functions: {},
        code: ["float ssao = pow(texture(uniAmbientOcclusion, varUV).r, uniAmbientOcclusionIntensity);"],
        codeAfterShading: combineWithLight ? [] : ["color *= ssao;"],
    }
}

export function ambientOcclusionSetUniforms(program: TgdProgram, parameters: AmbientOcclusionParameters) {
    program.uniform1f("uniAmbientOcclusionIntensity", Math.max(0, parameters.ambientOcclusionIntensity))
}
