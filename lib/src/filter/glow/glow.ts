import type { TgdContext } from "@tgd/context"
import type { TgdTexture2D } from "@tgd/texture"
import type { ArrayNumber3 } from "@tgd/types"
import { TgdFilter } from "../filter"
import { GlowPasses } from "./passes"

export interface TgdFilterGlowOptions {
    /**
     * The texture of what is glowing.
     * It is usually rendered by the same framebuffer as the input texture of the
     * {@link TgdPainterFilter}, in another color attachment.
     * Only the RGB channels are used.
     */
    textureEmission: TgdTexture2D
    /**
     * Approximate spread of the glow, as a fraction of the screen height.
     *
     * The samples of the blur are spaced by `radius × height of the smallest level` texels.
     * Above 2 texels, the sampling gets sparse and artifacts become visible:
     * add `levels` for wider glows.
     *
     * Default to **0.05**.
     */
    radius?: number
    /**
     * Multiplier of the glow before it is combined with the input color.
     *
     * Default to **1**.
     */
    strength?: number
    /**
     * Size of the first level, relative to the size of the context.
     * Smaller is faster and blurs wider, but small moving sources can flicker.
     *
     * Default to **0.5**.
     */
    scale?: number
    /**
     * Number of levels of the mip chain, each one being half the size of the previous one.
     * `1` means a single downscaled texture, slightly blurred.
     * More levels give a wider halo, for almost the same cost.
     * Clamped between 1 and 10.
     *
     * Default to **5**.
     */
    levels?: number
    /**
     * Weight ratio between level `n + 1` and level `n`: the levels are weighted by `1, f, f², f³…`.
     * `0` keeps only the first level (tight glow), `1` gives the same weight to every level
     * and greater values favour the wide halo.
     *
     * Default to **0.7**.
     */
    falloff?: number
    /**
     * Brightness (maximum of the RGB channels) below which the emission is ignored.
     * Useful when the emission texture also holds non emissive colors.
     *
     * Default to **0**.
     */
    threshold?: number
    /**
     * Softness of the threshold, as a fraction of it (between 0 and 1).
     * The cut is hard with `0`, and goes smoothly from `threshold × (1 - knee)`
     * to `threshold × (1 + knee)` otherwise.
     *
     * Default to **0.5**.
     */
    knee?: number
    /**
     * Color multiplier of the glow.
     *
     * Default to **[1, 1, 1]**.
     */
    tint?: ArrayNumber3
    /**
     * How the glow is combined with the input color:
     * - `"additive"`: `color + glow`. Can exceed 1, which is physically plausible with HDR.
     * - `"screen"`: `1 - (1 - color) × (1 - glow)`. Never exceeds 1, which suits 8 bits rendering.
     *
     * Default to **"additive"**.
     */
    blend?: "additive" | "screen"
    /**
     * If `true`, the intermediate textures are 16 bits floats (RGBA16F) instead of 8 bits (RGBA8),
     * so intense emissions don't saturate.
     * Needs the `EXT_color_buffer_float` extension: without it, 8 bits textures are used.
     *
     * Default to **false**.
     */
    hdr?: boolean
    /**
     * Filter used by the downsampling passes:
     * - `"default"`: the 5 samples kernel of the dual filtering. The fastest.
     * - `"13-tap"`: the 13 samples kernel of Call of Duty: Advanced Warfare, with a Karis average
     *   on the first pass. More stable with small, bright and moving sources.
     *
     * Default to **"default"**.
     */
    downsampleFilter?: "default" | "13-tap"
    name?: string
}

/**
 * Add a glow (also called bloom) around the emissive parts of the image.
 *
 * Before the filter is painted, `textureEmission` is reduced to `scale` times the size
 * of the context, then blurred with **Dual Filtering**: it is downsampled `levels - 1` more times,
 * each time by a factor 2, and upsampled back while the levels are mixed according to `falloff`.
 * This gives a tight bright core and a wide soft halo for a low cost.
 *
 * The result is multiplied by `strength` and `tint`, and combined with the input color
 * according to `blend`. The alpha of the output is the maximum of the input alpha and the
 * brightness of the glow, so the halo stays visible around objects drawn over a transparent background.
 *
 * `radius`, `strength`, `scale`, `falloff`, `threshold`, `knee`, `tint` and `blend` can be changed
 * at any time for free. Changing `levels`, `hdr`, `downsampleFilter` or `textureEmission` rebuilds
 * the passes before the next paint.
 *
 * `textureEmission` must have the same orientation as the input texture of the {@link TgdPainterFilter},
 * which is the case when both are rendered by framebuffers.
 *
 * Call `delete()` to release the textures and passes this filter owns.
 *
 * @example
 * ```ts
 * const textureColor = new TgdTexture2D(context)
 * const textureEmission = new TgdTexture2D(context)
 * const glow = new TgdFilterGlow(context, { textureEmission, strength: 1.5 })
 * context.add(
 *     new TgdPainterFramebuffer(context, {
 *         textureColor0: textureColor,
 *         textureColor1: textureEmission,
 *         children: [scene],
 *     }),
 *     new TgdPainterFilter(context, {
 *         texture: textureColor,
 *         filters: [glow],
 *     }),
 * )
 * ```
 *
 * @see {@link TgdFilterGlowOptions}
 */
export class TgdFilterGlow extends TgdFilter {
    /**
     * @see {@link TgdFilterGlowOptions.radius}
     */
    public radius: number
    /**
     * @see {@link TgdFilterGlowOptions.strength}
     */
    public strength: number
    /**
     * @see {@link TgdFilterGlowOptions.scale}
     */
    public scale: number
    /**
     * @see {@link TgdFilterGlowOptions.falloff}
     */
    public falloff: number
    /**
     * @see {@link TgdFilterGlowOptions.threshold}
     */
    public threshold: number
    /**
     * @see {@link TgdFilterGlowOptions.knee}
     */
    public knee: number
    /**
     * @see {@link TgdFilterGlowOptions.tint}
     */
    public tint: ArrayNumber3
    /**
     * @see {@link TgdFilterGlowOptions.blend}
     */
    public blend: "additive" | "screen"

    private passes: GlowPasses
    private dirty = false
    private _textureEmission: TgdTexture2D
    private _levels: number
    private _hdr: boolean
    private _downsampleFilter: "default" | "13-tap"

    constructor(
        private readonly context: TgdContext,
        options: TgdFilterGlowOptions,
    ) {
        const levels = clampLevels(options.levels ?? 5)
        const hdr = options.hdr ?? false
        const downsampleFilter = options.downsampleFilter ?? "default"
        const passes = new GlowPasses(context, {
            textureEmission: options.textureEmission,
            levels,
            hdr,
            downsampleFilter,
        })
        super({
            name: options.name ?? `TgdFilterGlow/${TgdFilter.id++}`,
            textures: { uniGlow: passes.texture },
            uniforms: {
                uniStrength: "float",
                uniTint: "vec3",
                uniBlend: "float",
            },
            extraFunctions: {
                glow: [
                    "// Last upsampling of the dual filtering, to the size of the input texture.",
                    "vec3 glow(vec2 uv) {",
                    [
                        "vec2 hp = 0.5 / vec2(textureSize(uniTexture, 0));",
                        "vec3 sum = texture(uniGlow, uv + vec2(-hp.x * 2.0, 0.0)).rgb;",
                        "sum += texture(uniGlow, uv + vec2(hp.x * 2.0, 0.0)).rgb;",
                        "sum += texture(uniGlow, uv + vec2(0.0, -hp.y * 2.0)).rgb;",
                        "sum += texture(uniGlow, uv + vec2(0.0, hp.y * 2.0)).rgb;",
                        "sum += texture(uniGlow, uv + vec2(-hp.x, hp.y)).rgb * 2.0;",
                        "sum += texture(uniGlow, uv + vec2(hp.x, hp.y)).rgb * 2.0;",
                        "sum += texture(uniGlow, uv + vec2(-hp.x, -hp.y)).rgb * 2.0;",
                        "sum += texture(uniGlow, uv + vec2(hp.x, -hp.y)).rgb * 2.0;",
                        "return sum / 12.0;",
                    ],
                    "}",
                ],
            },
            fragmentShaderCode: [
                "vec4 color = texture(uniTexture, varUV);",
                "vec3 light = uniStrength * uniTint * glow(varUV);",
                "vec3 rgb = uniBlend < 0.5",
                ["? color.rgb + light", ": 1.0 - (1.0 - clamp(color.rgb, 0.0, 1.0)) * (1.0 - clamp(light, 0.0, 1.0));"],
                "float alpha = max(color.a, clamp(max(light.r, max(light.g, light.b)), 0.0, 1.0));",
                "FragColor = vec4(rgb, alpha);",
            ],
            setUniforms: ({ program }) => {
                const [red, green, blue] = this.tint
                program.uniform1f("uniStrength", Math.max(0, this.strength))
                program.uniform3f("uniTint", red, green, blue)
                program.uniform1f("uniBlend", this.blend === "screen" ? 1 : 0)
            },
        })
        this.passes = passes
        this._textureEmission = options.textureEmission
        this._levels = levels
        this._hdr = hdr
        this._downsampleFilter = downsampleFilter
        this.radius = options.radius ?? 0.05
        this.strength = options.strength ?? 1
        this.scale = options.scale ?? 0.5
        this.falloff = options.falloff ?? 0.7
        this.threshold = options.threshold ?? 0
        this.knee = options.knee ?? 0.5
        this.tint = options.tint ?? [1, 1, 1]
        this.blend = options.blend ?? "additive"
    }

    /**
     * @see {@link TgdFilterGlowOptions.textureEmission}
     */
    get textureEmission(): TgdTexture2D {
        return this._textureEmission
    }
    set textureEmission(textureEmission: TgdTexture2D) {
        if (this._textureEmission === textureEmission) return

        this._textureEmission = textureEmission
        this.dirty = true
    }

    /**
     * @see {@link TgdFilterGlowOptions.levels}
     */
    get levels(): number {
        return this._levels
    }
    set levels(levels: number) {
        const value = clampLevels(levels)
        if (this._levels === value) return

        this._levels = value
        this.dirty = true
    }

    /**
     * @see {@link TgdFilterGlowOptions.hdr}
     */
    get hdr(): boolean {
        return this._hdr
    }
    set hdr(hdr: boolean) {
        if (this._hdr === hdr) return

        this._hdr = hdr
        this.dirty = true
    }

    /**
     * @see {@link TgdFilterGlowOptions.downsampleFilter}
     */
    get downsampleFilter(): "default" | "13-tap" {
        return this._downsampleFilter
    }
    set downsampleFilter(downsampleFilter: "default" | "13-tap") {
        if (this._downsampleFilter === downsampleFilter) return

        this._downsampleFilter = downsampleFilter
        this.dirty = true
    }

    /**
     * Blur the emission texture.
     */
    prepare(time: number, delta: number): void {
        if (this.dirty) this.rebuild()
        this.passes.paint(time, delta, this)
    }

    /**
     * Release the textures and the passes of the blur.
     */
    delete() {
        this.passes.delete()
    }

    private rebuild() {
        this.dirty = false
        this.passes.delete()
        this.passes = new GlowPasses(this.context, {
            textureEmission: this._textureEmission,
            levels: this._levels,
            hdr: this._hdr,
            downsampleFilter: this._downsampleFilter,
        })
        // TgdPainterFilter reads this record at each paint.
        this.textures.uniGlow = this.passes.texture
    }
}

function clampLevels(levels: number): number {
    return Math.max(1, Math.min(10, Math.round(levels)))
}
