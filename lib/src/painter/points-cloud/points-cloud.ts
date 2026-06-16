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
import { fragCodeFlat } from "./shaders/frag-flat"
import {
    fragCodeSphere,
    TgdPointsCloudFragCodeSphereOptions,
} from "./shaders/frag-sphere"
import { vertInstancesCode } from "./shaders/vert"

export { TgdPointsCloudFragCodeSphereOptions }

export interface TgdPainterPointsCloudOptions {
    name?: string
    /**
     * Flatten array of points:
     * `[ x1, y1, z1, radius1, x2, y2, z2, radius2, ... ]`
     */
    dataPoint: Float32Array
    /**
     * Flatten array of UVs:
     * `[ u1, v1, u2, v2, ... ]`
     */
    dataUV?: Float32Array
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

export class TgdPainterPointsCloud extends TgdPainter {
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
        return fragCodeFlat()
    }

    public readonly count: number
    public texture: TgdTexture2D
    public radiusMultiplier = 1
    public minSizeInPixels = 0

    public specularExponent = 14
    public specularIntensity = 1
    public shadowIntensity = 0.75
    public shadowThickness = 1.2
    public light = 1

    private readonly dataPoint: Float32Array
    private readonly dataUV: Float32Array
    private readonly textureMustBeDeleted: boolean
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(
        public readonly context: TgdContext,
        private readonly options: TgdPainterPointsCloudOptions,
    ) {
        super()
        this.name = options.name ?? this.name
        this.radiusMultiplier = options.radiusMultiplier ?? 1
        this.minSizeInPixels = options.minSizeInPixels ?? 0
        this.specularExponent = options.specularExponent ?? 10
        this.specularIntensity = options.specularIntensity ?? 0.33
        this.shadowIntensity = options.shadowIntensity ?? 0.5
        this.shadowThickness = options.shadowThickness ?? 1
        this.light = options.light ?? 1
        this.dataPoint = options.dataPoint
        if ((this.dataPoint.length & 3) !== 0) {
            throw new Error(
                `dataPoint must have a length that is an integral multiple of 4: [x, y, z, radius, ...]!\ndataPoint.length === ${this.dataPoint.length}`,
            )
        }
        this.dataUV = options.dataUV ?? new Float32Array(this.dataPoint.length >> 1)
        if (this.dataPoint.length !== this.dataUV.length * 2) {
            const message = `dataUV must be half of the size of dataPoint: [u, v, ...]!\ndataPoint.length === ${this.dataPoint.length}, \ndataUV.length === ${this.dataUV.length}`
            context.console.error("[TgdPainterPointsCloud]", message)
            context.console.error("[TgdPainterPointsCloud] options =", options)
            context.console.error(
                "[TgdPainterPointsCloud] this.dataPoint =",
                this.dataPoint,
            )
            context.console.error(
                "[TgdPainterPointsCloud] this.dataUV =",
                this.dataUV,
            )
            throw new Error(message)
        }
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
        this.count = this.dataUV.length >> 1
        const datasetInstances = this.createDatasetForInstances()
        const datasetBillboards = this.createDatasetForBillboards()
        this.program = this.createProgram(options.fragCode)
        this.vao = new TgdVertexArray(context.gl, this.program, [
            datasetInstances,
            datasetBillboards,
        ])
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
        program.uniform1f("uniRadiusMultiplier", radiusMultiplier)
        program.uniform1f("uniMinSizeInPixels", minSizeInPixels / context.height)
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

    private createDatasetForInstances() {
        const dataset = new TgdDataset(
            {
                attPoint: "vec4",
                attUV: "vec2",
            },
            {
                divisor: 1,
            },
        )
        dataset.set("attPoint", this.dataPoint)
        dataset.set("attUV", this.dataUV)
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

    private createProgram(render?: TgdCodeBloc): TgdProgram {
        const vert = new TgdShaderVertex({
            uniforms: {
                uniTexture: "sampler2D",
                uniAspectRatio: "vec2",
                uniMinSizeInPixels: "float",
                uniRadiusMultiplier: "float",
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
            },
            attributes: {
                attPoint: "vec4",
                attUV: "vec2",
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
            mainCode: vertInstancesCode(),
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
