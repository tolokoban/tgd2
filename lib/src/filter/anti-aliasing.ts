import { TgdFilter } from "./filter"

export interface TgdFilterAntiAliasingOptions {
    /**
     * Mix between the input (0) and the anti-aliased image (1).
     *
     * Default to 1.
     */
    strength: number
    /**
     * Amount of smoothing of the details smaller than a pixel (thin lines, specular sparkles).
     * 0 keeps them sharp, 1 makes them softer.
     *
     * Default to 0.75.
     */
    subpixel: number
    /**
     * Minimal contrast, relative to the brightest neighbour, for a pixel to be on an edge.
     * Lower values smooth more edges, but cost more and can blur textures.
     *
     * Default to 0.166.
     */
    edgeThreshold: number
    /**
     * Contrast under which a pixel is never on an edge, whatever its brightness.
     * It prevents the processing of noise in dark areas.
     *
     * Default to 0.0833.
     */
    edgeThresholdMin: number
    /**
     * If `true`, the alpha channel is the transparency of the image: the colors are weighted by
     * their alpha, so the edges between opaque and transparent areas are smoothed too,
     * and the output alpha is anti-aliased.
     * Keep it `false` for opaque images, or if the alpha channel holds something else.
     *
     * Default to `false`.
     */
    alpha: boolean
}

/** Length of the steps of the search for the ends of an edge, in pixels. */
const EDGE_STEPS = [1, 1.5, 2, 2, 2, 2, 4, 8]

/**
 * Fast Approximate Anti-Aliasing (FXAA), as described by Timothy Lottes (NVIDIA).
 *
 * FXAA works on the final image only (no depth, no normals, no extra samples), in a single pass.
 * It follows the "quality" variant of FXAA 3.11. For each pixel:
 *
 * 1. **Edge detection**: the luminance of the pixel and of its 4 direct neighbours (N, S, E, W)
 *    is computed. If their contrast (max - min) is lower than `edgeThresholdMin`, or lower than
 *    `edgeThreshold` times the brightest luminance, the pixel is not on an edge and is left untouched.
 * 2. **Sub-pixel aliasing**: the 4 diagonal neighbours are read too. The difference between the
 *    pixel and the weighted average of its 8 neighbours, relative to the contrast, tells how much
 *    the pixel is an isolated detail (thin line, sparkle). This gives a first blend factor,
 *    scaled by `subpixel`.
 * 3. **Edge orientation**: the second derivatives of the luminance along X and Y (on the 3x3 block)
 *    tell if the edge is horizontal or vertical. The neighbour with the strongest gradient across
 *    the edge tells on which side of the pixel the edge lies.
 * 4. **End-of-edge search**: starting half a pixel towards that side (exactly on the edge),
 *    the shader walks along the edge in both directions, with increasing steps (`EDGE_STEPS`),
 *    until the luminance differs too much from the average of both sides of the edge.
 *    These are the two ends of the edge.
 * 5. **Edge blend**: aliased edges are staircases, and each step should be shaded like a
 *    sloped line from one end to the other. So the closer the pixel is to the nearest end,
 *    the more it is blended (up to 0.5) with its neighbour across the edge. It is blended only if
 *    the luminance at this end goes the opposite way to the pixel, otherwise it is on the
 *    right side of the slope.
 * 6. **Final read**: the input is read once more, shifted across the edge by the largest of both
 *    blend factors. The `LINEAR` filtering of the texture does the actual blending.
 *
 * With `alpha: true`, the colors are premultiplied by their alpha before all this,
 * and divided back at the end, so the edges between opaque and transparent areas are smoothed too.
 *
 * References:
 * - Timothy Lottes, "FXAA", NVIDIA white paper, 2011.
 *   https://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
 * - Timothy Lottes, "FXAA 3.11 in 15 Slides", in Jimenez et al.,
 *   "Filtering Approaches for Real-Time Anti-Aliasing", ACM SIGGRAPH 2011 Courses.
 *   https://www.iryoku.com/aacourse/
 *
 * It is a post-process, so it works with deferred shading where MSAA cannot be used.
 * Use it as the last filter of a {@link TgdPainterFilter}, after the lighting.
 * The input texture should use `LINEAR` filtering, which is the case of the intermediate
 * textures of {@link TgdPainterFilter}.
 *
 * @example
 * ```ts
 * new TgdPainterFilter(context, {
 *     texture: deferred.textureAlbedo,
 *     filters: [shading, new TgdFilterAntiAliasing({ alpha: true })],
 * })
 * ```
 */
export class TgdFilterAntiAliasing extends TgdFilter {
    /** @see {@link TgdFilterAntiAliasingOptions.strength} */
    public strength: number
    /** @see {@link TgdFilterAntiAliasingOptions.subpixel} */
    public subpixel: number
    /** @see {@link TgdFilterAntiAliasingOptions.edgeThreshold} */
    public edgeThreshold: number
    /** @see {@link TgdFilterAntiAliasingOptions.edgeThresholdMin} */
    public edgeThresholdMin: number
    /** @see {@link TgdFilterAntiAliasingOptions.alpha} */
    public alpha: boolean

    constructor(options: Partial<TgdFilterAntiAliasingOptions> = {}) {
        const {
            strength = 1,
            subpixel = 0.75,
            edgeThreshold = 0.166,
            edgeThresholdMin = 0.0833,
            alpha = false,
        } = options
        super({
            name: `TgdFilterAntiAliasing/${TgdFilter.id++}`,
            uniforms: {
                uniStrength: "float",
                uniSubpixel: "float",
                uniEdgeThreshold: "float",
                uniEdgeThresholdMin: "float",
                uniAlpha: "float",
            },
            extraFunctions: {
                FXAA_EDGE_STEPS: `const float FXAA_EDGE_STEPS[${EDGE_STEPS.length}] = float[](${EDGE_STEPS.map((step) => step.toFixed(1)).join(", ")});`,
                fxaaColor: [
                    "vec4 fxaaColor(vec2 uv) {",
                    [
                        "vec4 color = texture(uniTexture, uv);",
                        "return uniAlpha > 0.5 ? vec4(color.rgb * color.a, color.a) : color;",
                    ],
                    "}",
                ],
                fxaaLuma: [
                    "float fxaaLuma(vec2 uv) {",
                    ["return dot(fxaaColor(uv).rgb, vec3(0.299, 0.587, 0.114));"],
                    "}",
                ],
            },
            fragmentShaderCode: [
                "vec2 px = varPixel;",
                "vec4 colorM = fxaaColor(varUV);",
                "float lumaM = dot(colorM.rgb, vec3(0.299, 0.587, 0.114));",
                "float lumaN = fxaaLuma(varUV + vec2(0.0, px.y));",
                "float lumaS = fxaaLuma(varUV - vec2(0.0, px.y));",
                "float lumaE = fxaaLuma(varUV + vec2(px.x, 0.0));",
                "float lumaW = fxaaLuma(varUV - vec2(px.x, 0.0));",
                "float lumaMax = max(lumaM, max(max(lumaN, lumaS), max(lumaE, lumaW)));",
                "float lumaMin = min(lumaM, min(min(lumaN, lumaS), min(lumaE, lumaW)));",
                "float range = lumaMax - lumaMin;",
                "vec4 color = colorM;",
                "if (range >= max(uniEdgeThresholdMin, lumaMax * uniEdgeThreshold)) {",
                [
                    "float lumaNE = fxaaLuma(varUV + vec2(px.x, px.y));",
                    "float lumaNW = fxaaLuma(varUV + vec2(-px.x, px.y));",
                    "float lumaSE = fxaaLuma(varUV + vec2(px.x, -px.y));",
                    "float lumaSW = fxaaLuma(varUV + vec2(-px.x, -px.y));",
                    "// Blend factor for the details smaller than a pixel.",
                    "float average = (2.0 * (lumaN + lumaS + lumaE + lumaW) + lumaNE + lumaNW + lumaSE + lumaSW) / 12.0;",
                    "float subpixel = smoothstep(0.0, 1.0, clamp(abs(average - lumaM) / range, 0.0, 1.0));",
                    "float subpixelBlend = subpixel * subpixel * uniSubpixel;",
                    "// Is the edge horizontal or vertical?",
                    "float horizontal = 2.0 * abs(lumaN + lumaS - 2.0 * lumaM)",
                    "    + abs(lumaNE + lumaSE - 2.0 * lumaE)",
                    "    + abs(lumaNW + lumaSW - 2.0 * lumaW);",
                    "float vertical = 2.0 * abs(lumaE + lumaW - 2.0 * lumaM)",
                    "    + abs(lumaNE + lumaNW - 2.0 * lumaN)",
                    "    + abs(lumaSE + lumaSW - 2.0 * lumaS);",
                    "bool isHorizontal = horizontal >= vertical;",
                    "// On which side of the pixel is the edge?",
                    "float lumaP = isHorizontal ? lumaN : lumaE;",
                    "float lumaQ = isHorizontal ? lumaS : lumaW;",
                    "float gradientP = abs(lumaP - lumaM);",
                    "float gradientQ = abs(lumaQ - lumaM);",
                    "float stepLength = isHorizontal ? px.y : px.x;",
                    "float lumaOpposite = lumaP;",
                    "float gradient = gradientP;",
                    "if (gradientP < gradientQ) {",
                    ["stepLength = -stepLength;", "lumaOpposite = lumaQ;", "gradient = gradientQ;"],
                    "}",
                    "// Walk along the edge in both directions to find its ends.",
                    "vec2 uvEdge = varUV;",
                    "if (isHorizontal) uvEdge.y += stepLength * 0.5;",
                    "else uvEdge.x += stepLength * 0.5;",
                    "vec2 edgeStep = isHorizontal ? vec2(px.x, 0.0) : vec2(0.0, px.y);",
                    "float edgeLuma = (lumaM + lumaOpposite) * 0.5;",
                    "float gradientThreshold = gradient * 0.25;",
                    "vec2 uvP = uvEdge;",
                    "vec2 uvQ = uvEdge;",
                    "float deltaP = 0.0;",
                    "float deltaQ = 0.0;",
                    "bool endP = false;",
                    "bool endQ = false;",
                    `for (int i = 0; i < ${EDGE_STEPS.length}; i++) {`,
                    [
                        "float len = FXAA_EDGE_STEPS[i];",
                        "if (!endP) {",
                        [
                            "uvP += edgeStep * len;",
                            "deltaP = fxaaLuma(uvP) - edgeLuma;",
                            "endP = abs(deltaP) >= gradientThreshold;",
                        ],
                        "}",
                        "if (!endQ) {",
                        [
                            "uvQ -= edgeStep * len;",
                            "deltaQ = fxaaLuma(uvQ) - edgeLuma;",
                            "endQ = abs(deltaQ) >= gradientThreshold;",
                        ],
                        "}",
                        "if (endP && endQ) break;",
                    ],
                    "}",
                    "float distP = isHorizontal ? uvP.x - varUV.x : uvP.y - varUV.y;",
                    "float distQ = isHorizontal ? varUV.x - uvQ.x : varUV.y - uvQ.y;",
                    "bool closerToP = distP <= distQ;",
                    "float dist = min(distP, distQ);",
                    "float delta = closerToP ? deltaP : deltaQ;",
                    "// Blend only if the luma at the closest end goes the opposite way to the pixel.",
                    "float edgeBlend = ((delta >= 0.0) == (lumaM - edgeLuma >= 0.0))",
                    "    ? 0.0",
                    "    : 0.5 - dist / (distP + distQ);",
                    "float blend = max(subpixelBlend, edgeBlend);",
                    "vec2 uv = varUV;",
                    "if (isHorizontal) uv.y += stepLength * blend;",
                    "else uv.x += stepLength * blend;",
                    "color = mix(colorM, fxaaColor(uv), uniStrength);",
                ],
                "}",
                "if (uniAlpha > 0.5) {",
                ["color = color.a > 0.0 ? vec4(color.rgb / color.a, color.a) : vec4(0.0);"],
                "}",
                "FragColor = color;",
            ],
            setUniforms: ({ program }) => {
                program.uniform1f("uniStrength", this.strength)
                program.uniform1f("uniSubpixel", this.subpixel)
                program.uniform1f("uniEdgeThreshold", this.edgeThreshold)
                program.uniform1f("uniEdgeThresholdMin", this.edgeThresholdMin)
                program.uniform1f("uniAlpha", this.alpha ? 1 : 0)
            },
        })
        this.strength = strength
        this.subpixel = subpixel
        this.edgeThreshold = edgeThreshold
        this.edgeThresholdMin = edgeThresholdMin
        this.alpha = alpha
    }
}
