import type { TgdContext } from "@tgd/context"
import type { TgdCodeBloc } from "@tgd/shader"
import { TgdTexture2D } from "@tgd/texture"
import { webglCreateFramebuffer, webglLookup } from "@tgd/utils"
import { TgdUniformBufferObject } from "../../uniform/uniform-buffer-object"
import { TgdPainter } from "../painter"
import { TgdPainterProgram } from "../program"

export interface TgdPainterAmbientOcclusionScreenSpaceOptions {
    /**
     * Surface normals in the camera space, encoded as `N * 0.5 + 0.5`,
     * with an alpha of 1 where a mesh has been painted, and 0 elsewhere.
     * Same structure as {@link TgdPainterDeferredShading.textureNormals}.
     */
    textureNormals: TgdTexture2D
    /**
     * Depth texture (`DEPTH_COMPONENT*`) holding the window depth,
     * between 0 (near plane) and 1 (far plane), as written by the depth test.
     * Same structure as {@link TgdPainterDeferredShading.textureDepth}.
     */
    textureDepth: TgdTexture2D
    /**
     * Number of samples per pixel: **8** for `"low"`, **16** for `"medium"`
     * and **32** for `"high"`.
     */
    quality: "low" | "medium" | "high"
    /**
     * Radius of the hemisphere where we look for occluders,
     * in the units of the camera space.
     * Default to **0.5**.
     */
    radius?: number
    /**
     * Small distance, in the units of the camera space, to avoid
     * a surface occluding itself because of the depth precision.
     * Default to **0.02**.
     */
    bias?: number
    /**
     * The framebuffer (and `textureAO`) automatically matches the
     * current viewport size multiplied by `viewportMatchingScale`.
     *
     * For instance, if `viewportMatchingScale === 0.5` and the viewport
     * is (640, 480), then the framebuffer will have a size of
     * (320, 240). A smaller texture is faster to compute.
     *
     * Default to `1`.
     */
    viewportMatchingScale?: number
}

const SAMPLES_PER_QUALITY: Record<TgdPainterAmbientOcclusionScreenSpaceOptions["quality"], number> = {
    low: 8,
    medium: 16,
    high: 32,
}

/**
 * Screen Space Ambient Occlusion (SSAO), computed from the normals and the depth
 * of a deferred shading pass, seen from the camera of the context.
 * The result is stored in {@link TgdPainterAmbientOcclusionScreenSpace.textureAO}.
 *
 * No blur is applied, so the result is noisy: each pixel rotates the samples
 * by a different angle.
 *
 * @example
 * ```ts
 * const deferred = new TgdPainterDeferredShading(context, { meshes })
 * const ao = new TgdPainterAmbientOcclusionScreenSpace(context, {
 *     textureNormals: deferred.textureNormals,
 *     textureDepth: deferred.textureDepth,
 *     quality: "medium",
 * })
 * context.add(deferred, ao)
 * ```
 *
 * @see {@link TgdPainterAmbientOcclusionScreenSpaceOptions}
 */
export class TgdPainterAmbientOcclusionScreenSpace extends TgdPainter {
    /**
     * Texture with a single 32 bits float channel (`R32F`) holding
     * the ambient light factor, from 0 (fully occluded) to 1 (not occluded).
     * Texels where nothing has been painted hold 1.
     *
     * Its size is the one of the context multiplied by `viewportMatchingScale`.
     * It uses `NEAREST` filtering, because linear filtering of 32 bits floats
     * is not available everywhere.
     */
    public readonly textureAO: TgdTexture2D
    /**
     * Radius of the hemisphere where we look for occluders,
     * in the units of the camera space.
     * Can be changed at any time.
     * @see {@link TgdPainterAmbientOcclusionScreenSpaceOptions.radius}
     */
    public radius: number
    /**
     * Small distance, in the units of the camera space, to avoid
     * a surface occluding itself because of the depth precision.
     * Can be changed at any time.
     * @see {@link TgdPainterAmbientOcclusionScreenSpaceOptions.bias}
     */
    public bias: number
    /**
     * Scale applied to the size of the context to get the size of
     * {@link TgdPainterAmbientOcclusionScreenSpace.textureAO}.
     * Can be changed at any time: the texture is resized on next `paint()`.
     * @see {@link TgdPainterAmbientOcclusionScreenSpaceOptions.viewportMatchingScale}
     */
    public viewportMatchingScale: number
    /**
     * Number of samples per pixel, computed from the `quality` option.
     */
    public readonly samples: number

    private readonly uniforms: TgdUniformBufferObject<
        "uniProjectionMatrix" | "uniProjectionMatrixInverse" | "uniRadius" | "uniBias",
        {
            uniProjectionMatrix: "mat4"
            uniProjectionMatrixInverse: "mat4"
            uniRadius: "float"
            uniBias: "float"
        }
    >
    private readonly program: TgdPainterProgram
    private framebuffer: WebGLFramebuffer | null = null
    private framebufferWidth = 0
    private framebufferHeight = 0
    private time = 0
    private delta = 0

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterAmbientOcclusionScreenSpaceOptions,
    ) {
        super()
        if (!context.extensions.EXT_color_buffer_float) {
            context.console.error(
                "[TgdPainterAmbientOcclusionScreenSpace] Extension EXT_color_buffer_float is not available: the AO texture cannot be rendered!",
            )
        }
        const samples = SAMPLES_PER_QUALITY[options.quality] ?? SAMPLES_PER_QUALITY.medium
        this.samples = samples
        this.radius = options.radius ?? 0.5
        this.bias = options.bias ?? 0.02
        this.viewportMatchingScale = options.viewportMatchingScale ?? 1
        this.textureAO = new TgdTexture2D(context, {
            name: `${this.name}/textureAO`,
            storage: {
                format: "R32F / RED / FLOAT",
            },
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        const uniforms = new TgdUniformBufferObject(context, {
            uniforms: {
                uniProjectionMatrix: "mat4",
                uniProjectionMatrixInverse: "mat4",
                uniRadius: "float",
                uniBias: "float",
            },
        })
        this.uniforms = uniforms
        this.program = new TgdPainterProgram(context, {
            drawMode: "TRIANGLE_STRIP",
            // Blending is not possible on 32 bits float textures without EXT_float_blend.
            state: { depth: "off", cull: "off", blend: "off" },
            uniforms: { uniforms },
            textures: {
                uniNormals: options.textureNormals,
                uniDepth: options.textureDepth,
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
            varying: { varUV: "vec2" },
            vert: {
                mainCode: ["varUV = attPoint * 0.5 + 0.5;", "gl_Position = vec4(attPoint, 0.0, 1.0);"],
            },
            frag: {
                precision: "highp",
                outputs: { FragColor: "float" },
                functions: [
                    ...codeKernel(samples),
                    "",
                    "// The depth texture holds the window depth (between 0 and 1).",
                    "// Works for perspective and orthographic projections.",
                    "vec3 viewPosition(vec2 uv, float depth) {",
                    [
                        "vec4 p = uniProjectionMatrixInverse * vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);",
                        "return p.xyz / p.w;",
                    ],
                    "}",
                    "",
                    "// Interleaved gradient noise.",
                    "float noise(vec2 pixel) {",
                    ["return fract(52.9829189 * fract(dot(pixel, vec2(0.06711056, 0.00583715))));"],
                    "}",
                ],
                mainCode: [
                    "vec4 normal = texture(uniNormals, varUV);",
                    "if (normal.a < 0.5) {",
                    ["// Nothing has been painted here.", "FragColor = 1.0;", "return;"],
                    "}",
                    "vec3 P = viewPosition(varUV, texture(uniDepth, varUV).r);",
                    "vec3 N = normalize(normal.xyz * 2.0 - 1.0);",
                    "// Random rotation of the kernel around the normal.",
                    "float angle = 6.283185307 * noise(gl_FragCoord.xy);",
                    "vec3 R = vec3(cos(angle), sin(angle), 0.0);",
                    "vec3 T = R - N * dot(R, N);",
                    "if (dot(T, T) < 1e-6) T = cross(N, vec3(0.0, 0.0, 1.0));",
                    "T = normalize(T);",
                    "mat3 TBN = mat3(T, cross(N, T), N);",
                    "float occlusion = 0.0;",
                    `for (int i = 0; i < ${samples}; i++) {`,
                    [
                        "vec3 S = P + TBN * KERNEL[i] * uniRadius;",
                        "vec4 clip = uniProjectionMatrix * vec4(S, 1.0);",
                        "vec2 uv = (clip.xy / clip.w) * 0.5 + 0.5;",
                        "if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) continue;",
                        "",
                        "float sceneZ = viewPosition(uv, texture(uniDepth, uv).r).z;",
                        "// Occluders far from P must not darken it.",
                        "float rangeCheck = smoothstep(0.0, 1.0, uniRadius / abs(P.z - sceneZ));",
                        "occlusion += step(S.z + uniBias, sceneZ) * rangeCheck;",
                    ],
                    "}",
                    `FragColor = 1.0 - occlusion / ${samples.toFixed(1)};`,
                ],
            },
            onEnter: () => {
                const { camera } = this.context
                uniforms.values.uniProjectionMatrix = camera.matrixProjection
                uniforms.values.uniProjectionMatrixInverse = camera.matrixProjectionInverse
                uniforms.values.uniRadius = this.radius
                uniforms.values.uniBias = this.bias
            },
        })
    }

    paint(time: number, delta: number): void {
        const { context, viewportMatchingScale } = this
        const { gl } = context
        const width = Math.max(1, Math.round(context.width * viewportMatchingScale))
        const height = Math.max(1, Math.round(context.height * viewportMatchingScale))
        const framebuffer = this.updateFramebuffer(width, height)
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
        this.time = time
        this.delta = delta
        context.paintInCustomSize(width, height, this.paintAO)
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
    }

    private readonly paintAO = () => {
        this.program.paint(this.time, this.delta)
    }

    /**
     * (Re)create the framebuffer if the size has changed.
     */
    private updateFramebuffer(width: number, height: number): WebGLFramebuffer {
        const { framebuffer, framebufferWidth, framebufferHeight } = this
        if (framebuffer && width === framebufferWidth && height === framebufferHeight) return framebuffer

        this.deleteFramebuffer()
        const { context, textureAO } = this
        const { gl } = context
        textureAO.resize(width, height)
        const newFramebuffer = webglCreateFramebuffer(gl)
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, newFramebuffer)
        textureAO.attachToFramebuffer(gl.COLOR_ATTACHMENT0)
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            context.console.error(
                `[TgdPainterAmbientOcclusionScreenSpace] The framebuffer is incomplete: ${webglLookup(status)}!`,
            )
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
        this.framebuffer = newFramebuffer
        this.framebufferWidth = width
        this.framebufferHeight = height
        return newFramebuffer
    }

    private deleteFramebuffer() {
        const { gl } = this.context
        if (this.framebuffer) gl.deleteFramebuffer(this.framebuffer)
        this.framebuffer = null
        this.framebufferWidth = 0
        this.framebufferHeight = 0
    }

    delete() {
        this.deleteFramebuffer()
        this.program.delete()
        this.uniforms.delete()
        this.textureAO.delete()
    }
}

/**
 * Constant array of `count` points in the unit hemisphere oriented toward +Z.
 * The directions follow a golden angle spiral with a cosine distribution,
 * and most of the points are close to the center, where occluders matter most.
 */
function codeKernel(count: number): TgdCodeBloc[] {
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))
    const points: string[] = []
    for (let i = 0; i < count; i++) {
        const r = Math.sqrt((i + 0.5) / count)
        const x = r * Math.cos(i * GOLDEN_ANGLE)
        const y = r * Math.sin(i * GOLDEN_ANGLE)
        const z = Math.sqrt(1 - r * r)
        // `count` is a power of 2, so this is a permutation of the indices.
        // It avoids having the short vectors near the normal and the long ones near the horizon.
        const k = ((i * 7) % count) + 1
        const t = k / count
        const scale = 0.1 + 0.9 * t * t
        const separator = i < count - 1 ? "," : ""
        points.push(`vec3(${(x * scale).toFixed(6)}, ${(y * scale).toFixed(6)}, ${(z * scale).toFixed(6)})${separator}`)
    }
    return [`const vec3 KERNEL[${count}] = vec3[${count}](`, points, ");"]
}
