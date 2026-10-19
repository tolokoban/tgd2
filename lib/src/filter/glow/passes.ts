/**
 * Blur of the emission texture with Dual Filtering
 * (Marius Bjørge, "Bandwidth-Efficient Rendering", SIGGRAPH 2015).
 *
 * ## Down chain
 *
 * `D[0]` is the emission texture reduced to `scale` times the size of the context.
 * Then each `D[i]` has half the size of `D[i - 1]`. Every downsampling pass blurs a little:
 *
 * - `"default"`: the dual filtering kernel, 4 times the center plus the 4 diagonal neighbours.
 * - `"13-tap"`: the kernel of Call of Duty: Advanced Warfare (Jorge Jimenez, SIGGRAPH 2014),
 *   which is much more stable when small and bright sources move. On the first pass, each of its
 *   5 boxes is weighted by `1 / (1 + luminance)` (Karis average) to avoid fireflies.
 *
 * The first pass also applies the threshold with its soft knee.
 *
 * ## Up chain
 *
 * Going back up, each `U[i]` mixes `D[i]` with the dual filtering upsampling of `U[i + 1]`
 * (the deepest level uses `D[levels - 1]` instead). With a falloff `f`, the levels are weighted by
 * `1, f, f², f³…`. To keep the values in [0, 1] for 8 bits textures, the weighted sum is computed
 * incrementally: `U[i] = a * D[i] + (1 - a) * up(U[i + 1])` with `a = 1 / (1 + f + f² + …)`.
 */
import { tgdCodeFunction_luminance } from "@tgd/code"
import type { TgdContext } from "@tgd/context"
import { TgdPainterFramebuffer } from "@tgd/painter/framebuffer"
import { TgdPainterProgram } from "@tgd/painter/program"
import type { TgdCodeBloc } from "@tgd/shader"
import { TgdTexture2D } from "@tgd/texture"
import { TgdUniformBufferObject } from "@tgd/uniform/uniform-buffer-object"

export interface GlowPassesOptions {
    textureEmission: TgdTexture2D
    levels: number
    hdr: boolean
    downsampleFilter: "default" | "13-tap"
}

export interface GlowParameters {
    radius: number
    scale: number
    falloff: number
    threshold: number
    knee: number
}

type UniformsDown = TgdUniformBufferObject<
    "uniHalfPixelX" | "uniHalfPixelY" | "uniOffset" | "uniThreshold" | "uniKnee",
    { uniHalfPixelX: "float"; uniHalfPixelY: "float"; uniOffset: "float"; uniThreshold: "float"; uniKnee: "float" }
>

type UniformsUp = TgdUniformBufferObject<
    "uniHalfPixelX" | "uniHalfPixelY" | "uniOffset" | "uniWeight",
    { uniHalfPixelX: "float"; uniHalfPixelY: "float"; uniOffset: "float"; uniWeight: "float" }
>

export class GlowPasses {
    /** The blurred emission, with the size of the first level. */
    public readonly texture: TgdTexture2D

    private readonly texturesDown: TgdTexture2D[] = []
    private readonly texturesUp: TgdTexture2D[] = []
    private readonly framebuffersDown: TgdPainterFramebuffer[] = []
    private readonly framebuffersUp: TgdPainterFramebuffer[] = []
    private readonly programs: TgdPainterProgram[] = []
    private readonly uniformsDown: UniformsDown
    private readonly uniformsUp: UniformsUp
    /** Weight of `D[i]` in the up pass of level `i`. */
    private readonly weights: number[] = []
    private offset = 1

    constructor(
        private readonly context: TgdContext,
        options: GlowPassesOptions,
    ) {
        const levels = options.levels
        let { hdr } = options
        if (hdr && !context.extensions.EXT_color_buffer_float) {
            context.console.warn(
                "[TgdFilterGlow] Extension EXT_color_buffer_float is not available: falling back to 8 bits textures!",
            )
            hdr = false
        }
        // The two blocks are shared by all the passes, to spare binding points.
        const uniformsDown: UniformsDown = new TgdUniformBufferObject(context, {
            uniforms: {
                uniHalfPixelX: "float",
                uniHalfPixelY: "float",
                uniOffset: "float",
                uniThreshold: "float",
                uniKnee: "float",
            },
        })
        const uniformsUp: UniformsUp = new TgdUniformBufferObject(context, {
            uniforms: {
                uniHalfPixelX: "float",
                uniHalfPixelY: "float",
                uniOffset: "float",
                uniWeight: "float",
            },
        })
        this.uniformsDown = uniformsDown
        this.uniformsUp = uniformsUp
        for (let level = 0; level < levels; level++) {
            const source = level === 0 ? options.textureEmission : this.texturesDown[level - 1]
            const target = createTexture(context, `TgdFilterGlow/down${level}`, hdr)
            const program = new TgdPainterProgram(context, {
                drawMode: "TRIANGLE_STRIP",
                state: { depth: "off", cull: "off", blend: "off" },
                uniforms: { uniformsDown },
                textures: { uniSource: source },
                dataset: DATASET,
                varying: { varUV: "vec2" },
                vert: VERT,
                frag: {
                    functions: {
                        ...tgdCodeFunction_luminance(),
                        ...(level === 0 ? FUNCTIONS_FETCH_FIRST : FUNCTIONS_FETCH),
                    },
                    mainCode: [
                        "vec2 hp = vec2(uniHalfPixelX, uniHalfPixelY) * uniOffset;",
                        ...(options.downsampleFilter === "13-tap"
                            ? level === 0
                                ? CODE_DOWN_13_TAP_KARIS
                                : CODE_DOWN_13_TAP
                            : CODE_DOWN_DUAL),
                    ],
                },
                onEnter: () => {
                    uniformsDown.values.uniHalfPixelX = 0.5 / target.width
                    uniformsDown.values.uniHalfPixelY = 0.5 / target.height
                    uniformsDown.values.uniOffset = this.offset
                },
            })
            this.texturesDown.push(target)
            this.programs.push(program)
            this.framebuffersDown.push(createFramebuffer(context, `TgdFilterGlow/down${level}`, target, program))
        }
        for (let level = 0; level < levels - 1; level++) {
            this.texturesUp.push(createTexture(context, `TgdFilterGlow/up${level}`, hdr))
            this.weights.push(1)
        }
        for (let level = levels - 2; level >= 0; level--) {
            const target = this.texturesUp[level]
            const lower = level + 1 === levels - 1 ? this.texturesDown[level + 1] : this.texturesUp[level + 1]
            const program = new TgdPainterProgram(context, {
                drawMode: "TRIANGLE_STRIP",
                state: { depth: "off", cull: "off", blend: "off" },
                uniforms: { uniformsUp },
                textures: { uniCurrent: this.texturesDown[level], uniLower: lower },
                dataset: DATASET,
                varying: { varUV: "vec2" },
                vert: VERT,
                frag: { mainCode: CODE_UP_DUAL },
                onEnter: () => {
                    uniformsUp.values.uniHalfPixelX = 0.5 / target.width
                    uniformsUp.values.uniHalfPixelY = 0.5 / target.height
                    uniformsUp.values.uniOffset = this.offset
                    uniformsUp.values.uniWeight = this.weights[level]
                },
            })
            this.programs.push(program)
            this.framebuffersUp.push(createFramebuffer(context, `TgdFilterGlow/up${level}`, target, program))
        }
        this.texture = this.texturesUp[0] ?? this.texturesDown[0]
    }

    paint(time: number, delta: number, parameters: GlowParameters) {
        const { context, texturesDown, texturesUp, weights, uniformsDown } = this
        const levels = texturesDown.length
        const scale = Math.max(1e-3, parameters.scale)
        let width = context.width * scale
        let height = context.height * scale
        for (let level = 0; level < levels; level++) {
            const w = Math.max(1, Math.round(width))
            const h = Math.max(1, Math.round(height))
            texturesDown[level].resize(w, h)
            texturesUp[level]?.resize(w, h)
            width *= 0.5
            height *= 0.5
        }
        // `height` is now the height of the level after the last one.
        this.offset = Math.max(0, parameters.radius * height * 2)
        const falloff = Math.max(0, parameters.falloff)
        // Sum of the weights of the levels from `level` to the deepest one, relative to `level`.
        let sum = 1
        for (let level = levels - 2; level >= 0; level--) {
            sum = 1 + falloff * sum
            weights[level] = 1 / sum
        }
        uniformsDown.values.uniThreshold = Math.max(0, parameters.threshold)
        uniformsDown.values.uniKnee = Math.max(0, Math.min(1, parameters.knee))
        for (const framebuffer of this.framebuffersDown) framebuffer.paint(time, delta)
        for (const framebuffer of this.framebuffersUp) framebuffer.paint(time, delta)
    }

    delete() {
        for (const framebuffer of this.framebuffersDown) framebuffer.delete()
        for (const framebuffer of this.framebuffersUp) framebuffer.delete()
        for (const program of this.programs) program.delete()
        for (const texture of this.texturesDown) texture.delete()
        for (const texture of this.texturesUp) texture.delete()
        this.uniformsDown.delete()
        this.uniformsUp.delete()
    }
}

const DATASET = {
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
} as const

const VERT = {
    mainCode: ["varUV = attPoint * 0.5 + 0.5;", "gl_Position = vec4(attPoint, 0.0, 1.0);"],
}

const FUNCTIONS_FETCH = {
    fetch: ["vec3 fetch(vec2 uv) {", ["return texture(uniSource, uv).rgb;"], "}"],
}

const FUNCTIONS_FETCH_FIRST = {
    fetch: [
        "// Threshold with a soft knee: the transition is quadratic",
        "// from (threshold - knee) to (threshold + knee).",
        "vec3 fetch(vec2 uv) {",
        [
            "vec3 color = texture(uniSource, uv).rgb;",
            "float brightness = max(color.r, max(color.g, color.b));",
            "float knee = uniThreshold * uniKnee;",
            "float soft = clamp(brightness - uniThreshold + knee, 0.0, 2.0 * knee);",
            "soft = soft * soft / (4.0 * knee + 1e-5);",
            "return color * max(soft, brightness - uniThreshold) / max(brightness, 1e-5);",
        ],
        "}",
    ],
}

const CODE_DOWN_DUAL: TgdCodeBloc[] = [
    "vec3 sum = fetch(varUV) * 4.0;",
    "sum += fetch(varUV - hp);",
    "sum += fetch(varUV + hp);",
    "sum += fetch(varUV + vec2(hp.x, -hp.y));",
    "sum += fetch(varUV - vec2(hp.x, -hp.y));",
    "FragColor = vec4(sum / 8.0, 1.0);",
]

const CODE_13_TAP_SAMPLES: TgdCodeBloc[] = [
    "vec3 a = fetch(varUV + hp * vec2(-2.0, +2.0));",
    "vec3 b = fetch(varUV + hp * vec2(+0.0, +2.0));",
    "vec3 c = fetch(varUV + hp * vec2(+2.0, +2.0));",
    "vec3 d = fetch(varUV + hp * vec2(-2.0, +0.0));",
    "vec3 e = fetch(varUV);",
    "vec3 f = fetch(varUV + hp * vec2(+2.0, +0.0));",
    "vec3 g = fetch(varUV + hp * vec2(-2.0, -2.0));",
    "vec3 h = fetch(varUV + hp * vec2(+0.0, -2.0));",
    "vec3 i = fetch(varUV + hp * vec2(+2.0, -2.0));",
    "vec3 j = fetch(varUV + hp * vec2(-1.0, +1.0));",
    "vec3 k = fetch(varUV + hp * vec2(+1.0, +1.0));",
    "vec3 l = fetch(varUV + hp * vec2(-1.0, -1.0));",
    "vec3 m = fetch(varUV + hp * vec2(+1.0, -1.0));",
]

const CODE_DOWN_13_TAP: TgdCodeBloc[] = [
    ...CODE_13_TAP_SAMPLES,
    "vec3 sum = e * 0.125;",
    "sum += (a + c + g + i) * 0.03125;",
    "sum += (b + d + f + h) * 0.0625;",
    "sum += (j + k + l + m) * 0.125;",
    "FragColor = vec4(sum, 1.0);",
]

const CODE_DOWN_13_TAP_KARIS: TgdCodeBloc[] = [
    ...CODE_13_TAP_SAMPLES,
    "// The same 13 samples seen as 5 overlapping boxes of 4 samples.",
    "vec3 box0 = (j + k + l + m) * 0.25;",
    "vec3 box1 = (a + b + d + e) * 0.25;",
    "vec3 box2 = (b + c + e + f) * 0.25;",
    "vec3 box3 = (d + e + g + h) * 0.25;",
    "vec3 box4 = (e + f + h + i) * 0.25;",
    "// Karis average: a very bright box can't dominate its neighbours.",
    "float w0 = 0.5 / (1.0 + luminance(box0));",
    "float w1 = 0.125 / (1.0 + luminance(box1));",
    "float w2 = 0.125 / (1.0 + luminance(box2));",
    "float w3 = 0.125 / (1.0 + luminance(box3));",
    "float w4 = 0.125 / (1.0 + luminance(box4));",
    "vec3 sum = box0 * w0 + box1 * w1 + box2 * w2 + box3 * w3 + box4 * w4;",
    "FragColor = vec4(sum / max(w0 + w1 + w2 + w3 + w4, 1e-5), 1.0);",
]

const CODE_UP_DUAL: TgdCodeBloc[] = [
    "vec3 current = texture(uniCurrent, varUV).rgb;",
    "if (uniWeight >= 1.0) {",
    ["FragColor = vec4(current, 1.0);", "return;"],
    "}",
    "vec2 hp = vec2(uniHalfPixelX, uniHalfPixelY) * uniOffset;",
    "vec3 sum = texture(uniLower, varUV + vec2(-hp.x * 2.0, 0.0)).rgb;",
    "sum += texture(uniLower, varUV + vec2(hp.x * 2.0, 0.0)).rgb;",
    "sum += texture(uniLower, varUV + vec2(0.0, -hp.y * 2.0)).rgb;",
    "sum += texture(uniLower, varUV + vec2(0.0, hp.y * 2.0)).rgb;",
    "sum += texture(uniLower, varUV + vec2(-hp.x, hp.y)).rgb * 2.0;",
    "sum += texture(uniLower, varUV + vec2(hp.x, hp.y)).rgb * 2.0;",
    "sum += texture(uniLower, varUV + vec2(-hp.x, -hp.y)).rgb * 2.0;",
    "sum += texture(uniLower, varUV + vec2(hp.x, -hp.y)).rgb * 2.0;",
    "FragColor = vec4(mix(sum / 12.0, current, uniWeight), 1.0);",
]

function createTexture(context: TgdContext, name: string, hdr: boolean): TgdTexture2D {
    const texture = new TgdTexture2D(context, {
        name,
        storage: {
            format: hdr ? "RGBA16F / RGBA / HALF_FLOAT" : "RGBA8 / RGBA / UNSIGNED_BYTE",
        },
        params: {
            magFilter: "LINEAR",
            minFilter: "LINEAR",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
            wrapR: "CLAMP_TO_EDGE",
        },
    })
    // A fixed size framebuffer needs a texture with a size.
    texture.resize(1, 1)
    return texture
}

function createFramebuffer(
    context: TgdContext,
    name: string,
    texture: TgdTexture2D,
    program: TgdPainterProgram,
): TgdPainterFramebuffer {
    // The size is fixed because `GlowPasses.paint()` resizes the textures itself.
    return new TgdPainterFramebuffer(context, {
        name,
        depthBuffer: false,
        stencilBuffer: false,
        fixedSize: true,
        textureColor0: texture,
        children: [program],
    })
}
