import { tgdColorMakeHueWheel } from "@tgd/color"
import type { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdProgram } from "@tgd/program"
import {
    type TgdCodeBloc,
    TgdShaderFragment,
    TgdShaderVertex,
} from "@tgd/shader"
import { TgdTexture2D } from "@tgd/texture"
import { tgdCanvasCreateGradientHorizontal } from "@tgd/utils"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainter } from "../painter"

interface TgdPainterPointsCloudMorphingData {
    /**
     * Flatten array of points:
     * `[ x1, y1, z1, radius1, x2, y2, z2, radius2, ... ]`
     */
    point: Float32Array
    /**
     * Flatten array of UVs:
     * `[ u1, v1, u2, v2, ... ]`
     */
    uv?: Float32Array
}

export interface TgdPainterPointsCloudMorphingOptions {
    name?: string
    data: [
        TgdPainterPointsCloudMorphingData,
        TgdPainterPointsCloudMorphingData,
    ][]
    /**
     * Mix between two point clouds.
     *
     * Default to `0.0`.
     */
    mix?: number
    /**
     * Multiply the radius of each point by this value.
     *
     * Default to 1.
     */
    radiusMultiplier?: number
    /**
     * Depending on the radius and the distance to the camera,
     * the point can be invisible.
     * This value is the minimum size of the point in pixels.
     *
     * Default to 0.
     */
    minSizeInPixels?: number
    texture?: TgdTexture2D
    /**
     * The content of a fragment shader function that takes
     * `vec4 color` as argument and must return a `vec4` color.
     *
     * The following uniforms are available:
     *
     * ```glsl
     * uniform float uniSpecularExponent;
     * uniform float uniSpecularIntensity;
     * uniform float uniShadowThickness;
     * uniform float uniShadowIntensity;
     * uniform float uniLight;
     * ```
     *
     * You can also use `TgdPainterPointsCloud.fragCode*()` static functions
     * to provide preset functions.
     */
    fragCode?: TgdCodeBloc
    /**
     * Default to 10
     */
    specularExponent?: number
    /**
     * Default to 0.33
     */
    specularIntensity?: number
    /**
     * Default to 0.5
     */
    shadowIntensity?: number
    /**
     * Default to 1
     */
    shadowThickness?: number
    /**
     * Default to 1
     */
    light?: number
}

export class TgdPainterPointsCloudMorphing extends TgdPainter {
    /**
     * Draw spheres with simple diffuse/specular material.
     */
    static fragCodeSphere(
        options: Partial<{
            specularExponent: number
            specularIntensity: number
            shadowThickness: number
            shadowIntensity: number
            light: number
        }> = {}
    ): TgdCodeBloc {
        const {
            specularExponent,
            specularIntensity,
            shadowThickness,
            shadowIntensity,
            light,
        } = options
        const SpE =
            typeof specularExponent === "number"
                ? specularExponent.toFixed(6)
                : "uniSpecularExponent"
        const SpI =
            typeof specularIntensity === "number"
                ? specularIntensity.toFixed(6)
                : "uniSpecularIntensity"
        const ShT =
            typeof shadowThickness === "number"
                ? shadowThickness.toFixed(6)
                : "uniShadowThickness"
        const ShI =
            typeof shadowIntensity === "number"
                ? shadowIntensity.toFixed(6)
                : "uniShadowIntensity"
        const L = typeof light === "number" ? light.toFixed(6) : "uniLight"
        return [
            "vec2 coords = 2.0 * (gl_PointCoord - vec2(.5));",
            "float len = 1.0 - dot(coords, coords);",
            "if (len < 0.0) discard;",
            "gl_FragDepth = gl_FragCoord.z - len * 1e-5;",
            `float light = smoothstep(0.0, ${ShT}, len) * ${ShI} + (1.0 - ${ShI});`,
            specularIntensity
                ? `float spec = pow(len, ${SpE}) * ${SpI};`
                : "// No specular.",
            `return color * vec4(vec3(light * ${L}), 1.0) + vec4(vec3(spec), 0.0);`,
        ]
    }

    /**
     * Mixing between two clouds: 0.0 (firts) and 1.0 (second).
     */
    public mix = 0
    public texture: TgdTexture2D
    public radiusMultiplier = 1
    public minSizeInPixels = 0

    public specularExponent = 10
    public specularIntensity = 0.33
    public shadowIntensity = 0.5
    public shadowThickness = 1
    public light = 1

    private readonly textureMustBeDeleted: boolean
    private readonly datasets: TgdDataset[] = []
    private readonly program: TgdProgram
    private readonly vaos: TgdVertexArray[]
    private readonly counts: number[]

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterPointsCloudMorphingOptions
    ) {
        super()
        this.name = options.name ?? this.name
        this.mix = options.mix ?? 0
        this.radiusMultiplier = options.radiusMultiplier ?? 1
        this.minSizeInPixels = options.minSizeInPixels ?? 0
        this.specularExponent = options.specularExponent ?? 10
        this.specularIntensity = options.specularIntensity ?? 0.33
        this.shadowIntensity = options.shadowIntensity ?? 0.5
        this.shadowThickness = options.shadowThickness ?? 1
        this.light = options.light ?? 1
        if (options.texture) {
            this.texture = options.texture
            this.textureMustBeDeleted = false
        } else {
            this.texture = new TgdTexture2D(context).loadBitmap(
                tgdCanvasCreateGradientHorizontal(
                    128,
                    tgdColorMakeHueWheel({ luminance: 0.2 })
                )
            )
            this.textureMustBeDeleted = true
        }
        if (options.data.length === 0) {
            throw new Error(
                "[TgdPainterPointsCloud] options.data must not be empty!"
            )
        }
        this.counts = options.data.map(([{ point }]) => point.length >> 2)
        this.program = this.createProgram(options.fragCode)
        this.vaos = options.data.map(([dataA, dataB]) => {
            const datasetA = this.createDataset(dataA, "A")
            const datasetB = this.createDataset(dataB, "B")
            this.datasets.push(datasetA, datasetB)
            return new TgdVertexArray(context.gl, this.program, [
                datasetA,
                datasetB,
            ])
        })
    }

    delete(): void {
        if (this.textureMustBeDeleted) this.texture.delete()
        this.program.delete()
        this.vao.delete()
    }

    paint(): void {
        const {
            context,
            program,
            vao,
            texture,
            count,
            radiusMultiplier,
            minSizeInPixels,
        } = this
        const { gl, camera } = context
        program.use()
        texture.activate(0, program, "uniTexture")
        program.uniform1f("uniMix", this.mix)
        program.uniform1f("uniRadiusMultiplier", radiusMultiplier)
        program.uniform1f("uniMinSizeInPixels", minSizeInPixels)
        program.uniform1f("uniScreenHeightInPixels", context.height)
        program.uniform1f("uniSpecularExponent", this.specularExponent)
        program.uniform1f("uniSpecularIntensity", this.specularIntensity)
        program.uniform1f("uniShadowIntensity", this.shadowIntensity)
        program.uniform1f("uniShadowThickness", this.shadowThickness)
        program.uniform1f("uniLight", this.light)
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawArrays(gl.POINTS, 0, count)
        vao.unbind()
    }

    private createDataset(
        data: TgdPainterPointsCloudMorphingData,
        suffix: string
    ) {
        const { point } = data
        if (point.length % 4 !== 0) {
            throw new Error(
                `[TgdPainterPointsCloud] point.length must be a multiple of 4! Current value: ${point.length}`
            )
        }
        const uv = data.uv ?? new Float32Array(point.length / 2)
        if (uv.length % 2 !== 0) {
            throw new Error(
                `[TgdPainterPointsCloud] uv.length must be a multiple of 2! Current value: ${uv.length}`
            )
        }
        if (point.length !== uv.length * 2) {
            throw new Error(
                `[TgdPainterPointsCloud] point.length must be twice the size of uv.length! point.length === ${point.length}, uv.length === ${uv.length}`
            )
        }
        const attPoint = `attPoint_${suffix}`
        const attUV = `attUV_${suffix}`
        const dataset = new TgdDataset({
            [attPoint]: "vec4",
            [attUV]: "vec2",
        })
        dataset.set(attPoint, point)
        dataset.set(attUV, uv)
        return dataset
    }

    get count() {
        const [count] = this.counts
        return count
    }

    private get vao() {
        const [vao] = this.vaos
        return vao
    }

    private createProgram(render?: TgdCodeBloc): TgdProgram {
        const vert = new TgdShaderVertex({
            uniforms: {
                uniMix: "float",
                uniMinSizeInPixels: "float",
                uniRadiusMultiplier: "float",
                uniScreenHeightInPixels: "float",
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
            },
            attributes: {
                attPoint_A: "vec4",
                attUV_A: "vec2",
                attPoint_B: "vec4",
                attUV_B: "vec2",
            },
            varying: {
                varUV: "vec2",
            },
            mainCode: [
                "vec4 attPoint = mix(attPoint_A, attPoint_B, uniMix);",
                "vec2 attUV = mix(attUV_A, attUV_B, uniMix);",
                "varUV = attUV;",
                "float radius = attPoint.w;",
                "vec4 point = uniModelViewMatrix * vec4(attPoint.xyz, 1.0);",
                "vec4 shift = point + vec4(0, uniRadiusMultiplier * radius, 0, 0);",
                "gl_Position = uniProjectionMatrix * point;",
                "vec4 screenShift = uniProjectionMatrix * shift;",
                "gl_PointSize = max(",
                "  uniMinSizeInPixels,",
                "  abs(screenShift.y - gl_Position.y) * uniScreenHeightInPixels / gl_Position.w",
                ");",
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
                uniSpecularExponent: "float",
                uniSpecularIntensity: "float",
                uniShadowIntensity: "float",
                uniShadowThickness: "float",
                uniLight: "float",
            },
            varying: {
                varUV: "vec2",
            },
            outputs: { FragColor: "vec4" },
            functions: {
                render: [
                    "vec4 render(vec4 color) {",
                    render ?? [
                        "vec2 coords = 2.0 * (gl_PointCoord - vec2(.5));",
                        "float len = 1.0 - dot(coords, coords);",
                        "if (len < 0.0) discard;",
                        "gl_FragDepth = gl_FragCoord.z - len * 1e-5;",
                        "float light = smoothstep(0.0, uniShadowThickness, len) * uniShadowIntensity + (1.0 - uniShadowIntensity);",
                        "float spec = pow(len, uniSpecularExponent) * uniSpecularIntensity;",
                        "return color * vec4(vec3(light * uniLight), 1.0) + vec4(vec3(spec), 0.0);",
                    ],
                    "}",
                ],
            },
            mainCode: [
                "vec4 color = texture(uniTexture, varUV);",
                "FragColor = render(color);",
            ],
        }).code
        const program = new TgdProgram(this.context.gl, { vert, frag })
        return program
    }
}
