import type { TgdCamera } from "@tgd/camera"
import { TgdColor, type TgdColorType } from "@tgd/color"
import type { TgdContext } from "@tgd/context"
import { TgdLight } from "@tgd/light"
import type { TgdMaterialShadowOptions } from "@tgd/material"
import { TGD_SHADOW_DEFAULT_BIAS, TGD_SHADOW_DEFAULT_COLOR } from "@tgd/material/shadow-code"
import { TgdMat4, TgdTransfo } from "@tgd/math"
import type { TgdPainterAmbientOcclusionScreenSpace } from "@tgd/painter/ambient-occlusion-screen-space"
import type { TgdPainterDeferredShading } from "@tgd/painter/deferred-shading"
import { type TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import { tgdCanvasCreateFill } from "@tgd/utils"
import { TgdFilter } from "../filter"
import { AmbientOcclusion, ambientOcclusionEffect, ambientOcclusionSetUniforms } from "./effects/ao"
import { cavityEffect, cavitySetUniforms } from "./effects/cavity"
import { shadingEffect, shadingSetUniforms } from "./effects/shading"
import { shadowEffect, shadowSetUniforms } from "./effects/shadow"

export interface TgdFilterDeferredShadingOptions {
    /**
     * Normals in camera space, encoded in [0, 1].
     * The alpha channel is 0 where nothing has been painted.
     * Mandatory if `cavity` or `ambientOcclusion` is defined.
     *
     * Usually {@link TgdPainterDeferredShading.textureNormals}, whose
     * `textureAlbedo` must be the input texture of the {@link TgdPainterFilter}.
     *
     * If not defined, every pixel is considered painted, with a normal facing the camera.
     */
    textureNormals?: TgdTexture2D
    /**
     * Window depth (between 0 and 1).
     * Only used if `shading` is `true`, if `shadow` or `ambientOcclusion` is defined,
     * or if `cavity.outline` is `false`.
     * Mandatory if `ambientOcclusion` is defined.
     *
     * Usually {@link TgdPainterDeferredShading.textureDepth}.
     *
     * If not defined, the depth is **0.5** everywhere.
     */
    textureDepth?: TgdTexture2D
    /**
     * Metallic, roughness, specular and baked ambient occlusion in the RGBA channels.
     * Only used if `shading` is `true`.
     *
     * Usually {@link TgdPainterDeferredShading.textureMetallicRoughnessSpecularBakedAO}.
     *
     * If not defined, metallic is **0**, roughness is **0.5**, specular is **0.5**
     * and baked AO is **1** everywhere.
     */
    textureMetallicRoughnessSpecularBakedAO?: TgdTexture2D
    /**
     * If `false`, no lighting is computed: the albedo is used as is,
     * but `cavity` and `shadow` are still applied if they are defined.
     * In this case, the options about the skybox and the light are ignored.
     *
     * Default to **true**.
     */
    shading?: boolean
    /**
     * If defined, lighten the ridges and darken the valleys, like the screen space
     * cavity of Blender's viewport in "Solid" shading.
     * The curvature is computed from the normals of the 4 neighbour pixels.
     *
     * You can change `ridge` and `valley` at runtime through
     * {@link TgdFilterDeferredShading.cavityRidge} and {@link TgdFilterDeferredShading.cavityValley}.
     */
    cavity?: {
        /**
         * Strength of the lightening of the ridges. `0` disables it.
         *
         * Default to **1.0**
         */
        ridge?: number
        /**
         * Strength of the darkening of the valleys. `0` disables it.
         *
         * Default to **1.0**
         */
        valley?: number
        /**
         * The curvature sees a valley on each silhouette, because the normals of the object
         * and of what is behind it are very different.
         *
         * If `true`, this gives a dark contour around every object, in front of other
         * objects and in front of nothing: where nothing has been painted, the filter outputs a
         * transparent black that darkens what is behind it (use an alpha blending).
         * It costs 4 more texture reads on the pixels where nothing has been painted.
         *
         * If `false`, the silhouettes are ignored: no contour in front of nothing, and no
         * contour in front of other objects if `textureDepth` is defined (a gap of depth
         * between two neighbour pixels is considered as a silhouette).
         *
         * Default to **true**.
         */
        outline?: boolean
    }
    /**
     * If defined, darken the creases, the corners and the contact areas with a
     * Screen Space Ambient Occlusion (SSAO) computed from `textureNormals` and `textureDepth`.
     *
     * The occlusion is computed in a separate pass (see {@link TgdPainterAmbientOcclusionScreenSpace})
     * before the filter is painted, from the point of view of `context.camera`.
     * It needs the `EXT_color_buffer_float` extension.
     *
     * You can change `intensity` at runtime through {@link TgdFilterDeferredShading.ambientOcclusionIntensity}.
     */
    ambientOcclusion?: {
        /**
         * The occlusion factor (from 0 for occluded to 1 for open) is raised to this power.
         * `0` disables the effect, `1` keeps the raw factor, and greater values darken more.
         */
        intensity: number
        /**
         * If `true`, a depth and normal aware 5×5 blur removes the noise of the occlusion,
         * at the cost of one more pass.
         */
        blur: boolean
        /**
         * If `true`, the occlusion only darkens the ambient light coming from the skybox,
         * which is physically correct but subtle on lit surfaces.
         * If `false`, it darkens the final color, direct light included.
         *
         * Ignored if `shading` is `false`: the final color is darkened.
         */
        combineWithLight: boolean
    }
    /**
     * Environment used for the reflections on metallic surfaces and for
     * the global illumination.
     * If this is a color, a cube texture of 1×1 pixels filled with this color is created.
     *
     * Default to **"#888"**.
     */
    skyboxTexture?: TgdTextureCube | TgdColorType
    /**
     * Orientation of the skybox.
     * If not defined, a new identity transfo is created.
     * You can change it at runtime through {@link TgdFilterDeferredShading.skyboxTransfo}.
     */
    skyboxTransfo?: TgdTransfo
    /**
     * The light coming from the skybox is
     * `skyboxStrength * pow(skyboxTexture.rgb, skyboxExponent)`.
     *
     * Default to **1**.
     */
    skyboxStrength?: number
    /**
     * The light coming from the skybox is
     * `skyboxStrength * pow(skyboxTexture.rgb, skyboxExponent)`.
     * The default value converts a skybox in sRGB space into linear space.
     *
     * Default to **2.2**.
     */
    skyboxExponent?: number
    /**
     * Directional light. Its `direction` is in world space and points where the light goes.
     * The alpha channel of its `color` is the intensity.
     *
     * Default to a `new TgdLight()`.
     */
    light?: TgdLight
    /**
     * If defined, apply a shadow in the same way {@link TgdMaterialShadow} does,
     * but in screen space: the position of each pixel is computed from the depth texture.
     *
     * `accuracy` is ignored because the projection is always computed per pixel.
     */
    shadow?: Omit<TgdMaterialShadowOptions, "material" | "accuracy">
    name?: string
}

/**
 * Physically based lighting computed in screen space from the textures of a
 * {@link TgdPainterDeferredShading}: albedo, normals, depth, metallic, roughness, specular
 * and baked ambient occlusion.
 *
 * The lighting comes from a directional light (`light`) and from the skybox (`skyboxTexture`),
 * which gives reflections on metallic surfaces and the global illumination.
 *
 * The albedo is considered to be in sRGB space: it is converted in linear space for the lighting,
 * and the result is converted back in sRGB space.
 * Where nothing has been painted, the output is `(0, 0, 0, 0)`.
 * Use an alpha blending to see what is behind.
 *
 * If `shadow` is defined, the output color is modified where the pixels are hidden from the
 * shadow camera, exactly like {@link TgdMaterialShadow} does.
 *
 * If `cavity` is defined, the ridges are lightened and the valleys darkened.
 * With `cavity.outline` (the default), the objects also get a dark contour, and the pixels where
 * nothing has been painted next to an object output a transparent black.
 *
 * If `ambientOcclusion` is defined, the creases and the contact areas are darkened by a
 * Screen Space Ambient Occlusion, computed in extra passes before the filter is painted.
 *
 * If `shading` is `false`, the lighting is not computed, but `shadow`, `cavity` and `ambientOcclusion`
 * are still applied.
 *
 * Call `delete()` to release the resources this filter may own: a cube texture if `skyboxTexture`
 * is a color and `shading` is `true`, and the passes of `ambientOcclusion`.
 *
 * @example
 * ```ts
 * const deferred = new TgdPainterDeferredShadingTextures(context, { meshes })
 * const filter = new TgdFilterDeferredShading(context, {
 *     textureNormals: deferred.textureNormals,
 *     textureDepth: deferred.textureDepth,
 *     textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
 *     skyboxTexture: skybox,
 * })
 * context.add(
 *     deferred,
 *     new TgdPainterFilter(context, {
 *         texture: deferred.textureAlbedo,
 *         filters: [filter],
 *     }),
 * )
 * ```
 *
 * @see {@link TgdFilterDeferredShadingOptions}
 */
export class TgdFilterDeferredShading extends TgdFilter {
    /**
     * Orientation of the skybox. Can be changed at any time.
     */
    public skyboxTransfo: TgdTransfo
    /**
     * @see {@link TgdFilterDeferredShadingOptions.skyboxStrength}
     */
    public skyboxStrength: number
    /**
     * @see {@link TgdFilterDeferredShadingOptions.skyboxExponent}
     */
    public skyboxExponent: number
    /**
     * @see {@link TgdFilterDeferredShadingOptions.light}
     */
    public light: TgdLight
    /**
     * @see {@link TgdMaterialShadowOptions.camera}
     */
    public readonly shadowCamera: TgdCamera | null
    /**
     * @see {@link TgdMaterialShadowOptions.bias}
     */
    public shadowBias: number
    /**
     * @see {@link TgdMaterialShadowOptions.color}
     */
    public shadowColor: TgdColor
    /**
     * Only used if `cavity` has been defined in the constructor options.
     * @see {@link TgdFilterDeferredShadingOptions.cavity}
     */
    public cavityRidge: number
    /**
     * Only used if `cavity` has been defined in the constructor options.
     * @see {@link TgdFilterDeferredShadingOptions.cavity}
     */
    public cavityValley: number
    /**
     * Only used if `ambientOcclusion` has been defined in the constructor options.
     * @see {@link TgdFilterDeferredShadingOptions.ambientOcclusion}
     */
    public ambientOcclusionIntensity: number

    /** `null` if `shading` is `false`. */
    private readonly skybox: TgdTextureCube | null
    /** `true` if we created the skybox texture from a color. */
    private readonly skyboxMustBeDeleted: boolean
    private readonly matrixViewInverse = new TgdMat4()
    /** `null` if `ambientOcclusion` is not defined. */
    private readonly ambientOcclusion: AmbientOcclusion | null

    constructor(
        private readonly context: TgdContext,
        options: TgdFilterDeferredShadingOptions,
    ) {
        const {
            shadow,
            textureNormals,
            textureDepth,
            textureMetallicRoughnessSpecularBakedAO: textureMaterial,
        } = options
        if (options.cavity && !textureNormals) {
            console.error(
                "[TgdFilterDeferredShading] `cavity` needs the normals, but `textureNormals` is not defined: the cavity is disabled!",
            )
        }
        const cavity = textureNormals ? options.cavity : undefined
        if (options.ambientOcclusion && !(textureNormals && textureDepth)) {
            console.error(
                "[TgdFilterDeferredShading] `ambientOcclusion` needs the normals and the depth, but `textureNormals` or `textureDepth` is not defined: the ambient occlusion is disabled!",
            )
        }
        const ambientOcclusion =
            options.ambientOcclusion && textureNormals && textureDepth
                ? new AmbientOcclusion(context, {
                      textureNormals,
                      textureDepth,
                      blur: options.ambientOcclusion.blur,
                  })
                : null
        const shading = options.shading ?? true
        const cavityOutline = cavity?.outline ?? true
        // The position of the pixel is needed by the lighting, by the shadow
        // and by the cavity to find the silhouettes.
        const needsPosition = shading || Boolean(shadow) || Boolean(cavity && !cavityOutline && textureDepth)
        const skyboxMustBeDeleted = shading && !(options.skyboxTexture instanceof TgdTextureCube)
        const skybox = !shading
            ? null
            : options.skyboxTexture instanceof TgdTextureCube
              ? options.skyboxTexture
              : createSkyboxFromColor(context, options.skyboxTexture ?? "#888")
        const combineWithLight = Boolean(skybox && options.ambientOcclusion?.combineWithLight)
        const shadingPart = skybox ? shadingEffect(skybox, textureMaterial, combineWithLight) : null
        const cavityPart = cavity ? cavityEffect(cavityOutline, Boolean(textureDepth)) : null
        const aoPart = ambientOcclusion ? ambientOcclusionEffect(ambientOcclusion.texture, combineWithLight) : null
        const shadowPart = shadow ? shadowEffect(shadow) : null
        super({
            name: options.name ?? `TgdFilterDeferredShading/${TgdFilter.id++}`,
            textures: {
                ...(textureNormals ? { uniNormals: textureNormals } : {}),
                ...(needsPosition && textureDepth ? { uniDepth: textureDepth } : {}),
                ...shadingPart?.textures,
                ...cavityPart?.textures,
                ...aoPart?.textures,
                ...shadowPart?.textures,
            },
            uniforms: {
                ...(needsPosition ? { uniProjectionMatrixInverse: "mat4" } : {}),
                ...shadingPart?.uniforms,
                ...cavityPart?.uniforms,
                ...aoPart?.uniforms,
                ...shadowPart?.uniforms,
            },
            extraFunctions: {
                ...(needsPosition
                    ? {
                          viewPosition: [
                              "// The depth texture holds the window depth (between 0 and 1).",
                              "// Works for perspective and orthographic projections.",
                              "vec3 viewPosition(vec2 uv, float depth) {",
                              [
                                  "vec4 p = uniProjectionMatrixInverse * vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);",
                                  "return p.xyz / p.w;",
                              ],
                              "}",
                          ],
                      }
                    : {}),
                ...shadingPart?.functions,
                ...cavityPart?.functions,
                ...aoPart?.functions,
                ...shadowPart?.functions,
            },
            fragmentShaderCode: [
                textureNormals
                    ? "vec4 normal = texture(uniNormals, varUV);"
                    : "vec4 normal = vec4(0.5, 0.5, 1.0, 1.0);",
                "if (normal.a < 0.5) {",
                [
                    "// Nothing has been painted here.",
                    "FragColor = vec4(0.0);",
                    ...(cavityPart?.codeBackground ?? []),
                    "return;",
                ],
                "}",
                "vec4 albedo = texture(uniTexture, varUV);",
                "vec3 base = pow(albedo.rgb, vec3(2.2));",
                "// Everything is computed in camera space.",
                needsPosition
                    ? `vec3 P = viewPosition(varUV, ${textureDepth ? "texture(uniDepth, varUV).r" : "0.5"});`
                    : null,
                ...(aoPart?.code ?? []),
                ...(shadingPart?.code ?? ["vec3 color = base;"]),
                ...(cavityPart?.code ?? []),
                ...(aoPart?.codeAfterShading ?? []),
                "FragColor = vec4(pow(clamp(color, 0.0, 1.0), vec3(1.0 / 2.2)), albedo.a);",
                ...(shadowPart?.code ?? []),
            ],
            setUniforms: ({ program }) => {
                const { context, matrixViewInverse, shadowCamera } = this
                const { camera } = context
                matrixViewInverse.from(camera.matrixModelView).invert()
                if (needsPosition) {
                    program.uniformMatrix4fv("uniProjectionMatrixInverse", camera.matrixProjectionInverse)
                }
                if (skybox) shadingSetUniforms(program, this, skybox, camera, matrixViewInverse)
                if (shadowCamera) shadowSetUniforms(program, this, shadowCamera, matrixViewInverse)
                if (cavity) cavitySetUniforms(program, this)
                if (aoPart) ambientOcclusionSetUniforms(program, this)
            },
        })
        this.skybox = skybox
        this.skyboxMustBeDeleted = skyboxMustBeDeleted
        this.skyboxTransfo = options.skyboxTransfo ?? new TgdTransfo()
        this.skyboxStrength = options.skyboxStrength ?? 1
        this.skyboxExponent = options.skyboxExponent ?? 2.2
        this.light = options.light ?? new TgdLight()
        this.shadowCamera = shadow?.camera ?? null
        this.shadowBias = shadow?.bias ?? TGD_SHADOW_DEFAULT_BIAS
        this.shadowColor = new TgdColor(shadow?.color ?? TGD_SHADOW_DEFAULT_COLOR)
        this.cavityRidge = cavity?.ridge ?? 1
        this.cavityValley = cavity?.valley ?? 1
        this.ambientOcclusion = ambientOcclusion
        this.ambientOcclusionIntensity = options.ambientOcclusion?.intensity ?? 1
    }

    /**
     * Compute the ambient occlusion texture, if needed.
     */
    prepare(time: number, delta: number): void {
        this.ambientOcclusion?.paint(time, delta)
    }

    /**
     * Release the skybox texture if it has been created from a color,
     * and the passes of the ambient occlusion.
     */
    delete() {
        if (this.skyboxMustBeDeleted) this.skybox?.delete()
        this.ambientOcclusion?.delete()
    }
}

function createSkyboxFromColor(context: TgdContext, color: TgdColorType): TgdTextureCube {
    const canvas = tgdCanvasCreateFill(1, 1, color)
    return new TgdTextureCube(context, {
        name: "TgdFilterDeferredShading/skybox",
        imagePosX: canvas,
        imagePosY: canvas,
        imagePosZ: canvas,
        imageNegX: canvas,
        imageNegY: canvas,
        imageNegZ: canvas,
    })
}
