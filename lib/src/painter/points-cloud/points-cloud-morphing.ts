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
import { fragCodeSphere, TgdPointsCloudFragCodeSphereOptions } from "./shaders/frag-sphere"
import { vertCode, vertInstancesCode } from "./shaders/vert"

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
    data: [TgdPainterPointsCloudMorphingData, TgdPainterPointsCloudMorphingData][]
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
     * Enable specularity for default material.
     * Default to `false`
     */
    enableSpecular?: boolean
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
        options: TgdPointsCloudFragCodeSphereOptions = {},
    ): TgdCodeBloc {
        return fragCodeSphere(options)
    }

    /**
     * Draw disk with uniform color.
     */
    static fragCodeFlat(): TgdCodeBloc {
        return TgdPainterPointsCloudMorphing.fragCodeFlat()
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
        private readonly options: TgdPainterPointsCloudMorphingOptions,
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
                    tgdColorMakeHueWheel({ luminance: 0.2 }),
                ),
            )
            this.textureMustBeDeleted = true
        }
        if (options.data.length === 0) {
            throw new Error("[TgdPainterPointsCloud] options.data must not be empty!")
        }
        this.counts = options.data.map(([{ point }]) => point.length >> 2)
        this.program = this.createProgram(options.fragCode)
        this.vaos = options.data.map(([dataA, dataB]) => {
            const datasetA = this.createDatasetForInstances(dataA, "A")
            const datasetB = this.createDatasetForInstances(dataB, "B")
            const billboard = this.createDatasetForBillboards()
            this.datasets.push(datasetA, datasetB)
            return new TgdVertexArray(context.gl, this.program, [datasetA, datasetB, billboard])
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
        program.uniform1f("uniSpecularExponent", this.specularExponent)
        program.uniform1f("uniSpecularIntensity", this.specularIntensity)
        program.uniform1f("uniShadowIntensity", this.shadowIntensity)
        program.uniform1f("uniShadowThickness", this.shadowThickness)
        program.uniform1f("uniLight", this.light)
        program.uniform2f("uniAspectRatio", context.aspectRatioInverse, 1)
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawArraysInstanced(gl.TRIANGLE_FAN, 0, 4, count)
        vao.unbind()
    }

    debug(caption?: string) {
        console.debug(`[${caption ?? this.name}] TgdPainterPointsCloudMorphing( options ):`, this.options)
        for (const vao of this.vaos) {
            vao.debug()
        }
    }

    private createDatasetForInstances(
        data: TgdPainterPointsCloudMorphingData,
        suffix: "A" | "B",
    ) {
        const { point } = data
        if (point.length % 4 !== 0) {
            throw new Error(
                `[TgdPainterPointsCloud] point.length must be a multiple of 4! Current value: ${point.length}`,
            )
        }
        const uv = data.uv ?? new Float32Array(point.length / 2)
        if (uv.length % 2 !== 0) {
            throw new Error(
                `[TgdPainterPointsCloud] uv.length must be a multiple of 2! Current value: ${uv.length}`,
            )
        }
        if (point.length !== uv.length * 2) {
            throw new Error(
                `[TgdPainterPointsCloud] point.length must be twice the size of uv.length! point.length === ${point.length}, uv.length === ${uv.length}`,
            )
        }
        const attPoint = `attPoint_${suffix}`
        const attUV = `attUV_${suffix}`
        const dataset = new TgdDataset({
            [attPoint]: "vec4",
            [attUV]: "vec2",
        }, { divisor: 1 })
        dataset.set(attPoint, point)
        dataset.set(attUV, uv)
        return dataset
    }

    private createDatasetForBillboards() {
        const dataset = new TgdDataset({
            attPointCoord: "vec2",
        })
        dataset.set(
            "attPointCoord",
            new Float32Array([-1, -1, +1, -1, +1, +1, -1, +1]),
        )
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
                uniTexture: "sampler2D",
                uniAspectRatio: "vec2",
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
                /**
                 * Between -1.0 and +1.0
                 */
                attPointCoord: "vec2",
            },
            varying: {
                varColor: "vec4",
                varPointCoord: "vec2",
                varDepth: "float",
            },
            mainCode: [
                "vec4 attPoint = mix(attPoint_A, attPoint_B, uniMix);",
                "vec2 attUV = mix(attUV_A, attUV_B, uniMix);",
                ...vertInstancesCode(),
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: {
                uniSpecularExponent: "float",
                uniSpecularIntensity: "float",
                uniShadowIntensity: "float",
                uniShadowThickness: "float",
                uniLight: "float",
            },
            varying: {
                varColor: "vec4",
                varPointCoord: "vec2",
                varDepth: "float",
            },
            outputs: { FragColor: "vec4" },
            functions: {
                render: [
                    "vec4 render(vec4 color) {",
                    render ??
                    fragCodeSphere({
                        ...this.options,
                        enableSpecular: this.options.enableSpecular ?? true,
                    }),
                    "}",
                ],
            },
            mainCode: ["vec4 color = varColor;", "FragColor = render(color);"],
        }).code
        const program = new TgdProgram(this.context.gl, { vert, frag })
        return program
    }
}
