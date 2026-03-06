import type { TgdBuffer, TgdBufferOptionTarget, TgdBufferOptionUsage } from "@tgd/buffer"
import type { TgdCamera } from "@tgd/camera"
import type { WebglParams } from "@tgd/context/webgl-params"
import { TgdDataset } from "@tgd/dataset"
import { type TgdMaterial, TgdMaterialFaceOrientation } from "@tgd/material"
import { TgdTransfo } from "@tgd/math"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import type { ArrayNumber2, ArrayNumber4 } from "@tgd/types"
import { TgdVertexArray } from "@tgd/vao"
import { makeCapsule } from "./capsule"
import { TgdContext } from "@tgd/context"

type DatasetOption = TgdPainterSegments | InstanceDataset | (() => InstanceDataset)

export type TgdPainterSegmentsOptions = {
    /**
     * Number of faces around the cylinder.
     * Min is 3.
     *
     * Default to **3**.
     */
    roundness?: number
    /**
     * With orthographic camera, this is a value in pixels.
     */
    minRadius?: number
    /**
     * Multiply all the radii by this value.
     *
     * Default to `1`.
     */
    radiusMultiplier?: number
    /**
     * Material to apply to the resulting mesh.
     */
    material?: TgdMaterial
    /**
     * If a `TgdPainterSegments` is given, then the
     * data will be shared between the painters.
     */
    dataset: DatasetOption
}

/**
 * @example
 * ```
 * const factory = new TgdPainterSegmentsData()
 * factory.add(
 *   [0, 0, 0, .2],
 *   [1, 0, 0, .1],
 * )
 * factory.add(
 *   [0, 0, 0, .2],
 *   [0, 1, 0, .1],
 * )
 * factory.add(
 *   [0, 0, 0, .2],
 *   [0, 0, 1, .1],
 * )
 * const segments = new TgdPainterSegments(
 *   segment, factory
 * )
 * ```
 */
export class TgdPainterSegments extends TgdPainter {
    static createDataset({
        attXYZR0 = "attXYZR0",
        attUV0 = "attUV0",
        attInfluence0 = "attInfluence0",
        attXYZR1 = "attXYZR1",
        attUV1 = "attUV1",
        attInfluence1 = "attInfluence1",
        buffer,
        usage,
        target,
    }: Partial<{
        attXYZR0: string
        attUV0: string
        attInfluence0: string
        attXYZR1: string
        attUV1: string
        attInfluence1: string
        buffer: TgdBuffer
        target: TgdBufferOptionTarget
        usage: TgdBufferOptionUsage
    }> = {}) {
        const dataset = new TgdDataset(
            {
                [attXYZR0]: "vec4",
                [attUV0]: "vec2",
                [attInfluence0]: "float",
                [attXYZR1]: "vec4",
                [attUV1]: "vec2",
                [attInfluence1]: "float",
            },
            {
                divisor: 1,
                buffer,
                usage,
                target,
            },
        )
        return dataset
    }

    public readonly transfo = new TgdTransfo()
    public minRadius = 1
    public radiusMultiplier = 1
    public radiusConstant = 1
    public radiusSwitch = 0
    public instanceCount = 0

    private readonly vao: TgdVertexArray
    private readonly prg: TgdProgram
    private readonly vertexCount: number
    private readonly material: TgdMaterial

    constructor(
        protected readonly context: TgdContext,
        options: TgdPainterSegmentsOptions,
    ) {
        super()
        this.name = `TgdPainterSegments#${this.id}`
        this.radiusMultiplier = options.radiusMultiplier ?? 1
        const { roundness = 3, minRadius = 1, dataset } = options
        const geometry = makeCapsule(roundness)
        const material = options.material ?? new TgdMaterialFaceOrientation()
        this.material = material
        material.attPosition = geometry.attPosition
        material.attNormal = "normal" // geometry.attNormal
        material.attUV = "((attUV0 + attUV1) * .5)"
        this.minRadius = minRadius
        if (roundness > 127) {
            throw new Error("[TgdPainterSegments] Max roundness is 127!")
        }
        if (roundness < 0) {
            throw new Error("[TgdPainterSegments] Min roundness is 0!")
        }
        const vert = new TgdShaderVertex({
            uniforms: {
                uniTransfoMatrix: "mat4",
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniPixelPerScreenUnit: "float",
                uniMinRadiusInPixel: "float",
                uniRadiusMultiplier: "float",
                ...material.uniforms,
            },
            attributes: {
                [geometry.attPosition]: "vec4",
                [geometry.attNormal]: "vec3",
                attTip: "float",
                attXYZR0: "vec4",
                attXYZR1: "vec4",
                attUV0: "vec2",
                attUV1: "vec2",
            },
            varying: {
                ...material.varyings,
            },
            functions: {
                ...material.extraVertexShaderFunctions,
                getPosition: [
                    "vec4 getPosition(vec4 pos) {",
                    [material.vertexShaderCodeForGetPosition ?? "return pos;"],
                    "}",
                ],
                applyMaterial: [
                    "void applyMaterial(vec3 position, vec3 normal, vec2 uv) {",
                    [material.vertexShaderCode],
                    "}",
                ],
            },
            mainCode: [
                `vec3 normal = ${geometry.attNormal};`,
                `vec3 pos = getPosition(${geometry.attPosition}).xyz;`,
                "vec4 xyzr = mix(attXYZR0, attXYZR1, attTip);",
                "vec3 center = xyzr.xyz;",
                "vec4 centerInCameraSpace = uniModelViewMatrix * uniTransfoMatrix * vec4(center, 1);",
                "vec4 centerInScreenSpace = uniProjectionMatrix * centerInCameraSpace;",
                "float screenUnitPerCameraUnit = (uniProjectionMatrix * vec4(0, 1, centerInCameraSpace.z, 1)).y / centerInScreenSpace.w;",
                "float minRadiusInCameraUnit = uniMinRadiusInPixel / (uniPixelPerScreenUnit * screenUnitPerCameraUnit);",
                "float radius = max(",
                ["xyzr.w * uniRadiusMultiplier,", "minRadiusInCameraUnit"],
                ");",
                "vec3 dir = attXYZR1.xyz - attXYZR0.xyz;",
                "float len = length(dir);",
                "if (len == 0.0) {",
                ["// Just a sphere", "pos *= radius;", "pos += center.xyz;"],
                "} else {",
                [
                    "// Full capsule",
                    "vec3 Z = dir / len;",
                    "bool yUp = abs(Z.y) < 0.9;",
                    "vec3 fakeY = yUp ? vec3(0,1,0) : vec3(0,0,1);",
                    "vec3 X = cross(fakeY, Z);",
                    "vec3 Y = cross(Z, X);",
                    "mat3 mat = mat3(X, Y, Z);",
                    "pos *= radius;",
                    "pos = mat * pos + center.xyz;",
                    "normal = mat * normal;",
                ],
                "}",
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * uniTransfoMatrix * vec4(pos, 1);",
                `applyMaterial(pos, normal, ${material.attUV}.xy);`,
            ],
        }).code
        const frag = new TgdShaderFragment({
            header: material.fragmentShaderHeader,
            uniforms: material.uniforms,
            outputs: { FragColor: "vec4" },
            varying: { ...material.varyings },
            functions: {
                ...material.extraFragmentShaderFunctions,
                applyMaterial: ["vec4 applyMaterial() {", [material.fragmentShaderCode], "}"],
            },
            mainCode: ["FragColor = applyMaterial();"],
        }).code
        const prg = new TgdProgram(context.gl, {
            name: `TgdPainterSegments/TgdProgram#${this.id}`,
            vert,
            frag,
        })
        this.prg = prg
        if (dataset instanceof TgdPainterSegments) {
            if (dataset.vao.gl !== context.gl) {
                throw new Error("[TgdPainterSegments] You cannot share a VAO accross different contexts!")
            }
            this.vao = dataset.vao
            this.vao.share()
            this.instanceCount = dataset.instanceCount
        } else if (dataset) {
            const instance = extract(dataset)
            instance.addAttributes({
                attXYZR0: "vec4",
                attUV0: "vec2",
                attInfluence0: "float",
                attXYZR1: "vec4",
                attUV1: "vec2",
                attInfluence1: "float",
            })
            this.vao = new TgdVertexArray(context.gl, prg, [geometry.dataset, instance], geometry.elements)
            this.instanceCount = instance.count
        } else {
            console.error("[TgdPainterSegments] options =", options) // @FIXME: Remove this line written on 2026-02-04 at 19:53
            throw new Error("option `dataset` of TgdPainterSegments is undefined!")
        }
        this.vertexCount = geometry.elements?.length ?? 0
    }

    debug(caption?: string) {
        this.prg.debug(caption ?? this.name)
    }

    getBuffer() {
        return this.vao.getBuffer(1)
    }

    delete(): void {
        this.vao.delete()
        this.prg.delete()
    }

    paint(time: number, delta: number): void {
        const { context, prg, vao, vertexCount, instanceCount, material } = this
        const { gl, camera } = context
        gl.disable(gl.DITHER)
        prg.use()
        this.material.setUniforms?.({ program: prg, context, time, delta })
        prg.uniform1f("uniPixelPerScreenUnit", gl.drawingBufferHeight)
        prg.uniform1f("uniMinRadiusInPixel", this.minRadius)
        prg.uniform1f("uniRadiusMultiplier", this.radiusMultiplier)
        prg.uniformMatrix4fv("uniTransfoMatrix", this.transfo.matrix)
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        material.applyState(this.context, () => {
            vao.bind()
            gl.drawElementsInstanced(gl.TRIANGLES, vertexCount, gl.UNSIGNED_SHORT, 0, instanceCount)
            vao.unbind()
        })
    }
}

type InstanceDataset = TgdDataset

export class TgdPainterSegmentsData {
    private _count = 0
    private readonly attXYZR0: number[] = []
    private readonly attUV0: number[] = []
    private readonly attInfluence0: number[] = []
    private readonly attXYZR1: number[] = []
    private readonly attUV1: number[] = []
    private readonly attInfluence1: number[] = []

    get count() {
        return this._count
    }

    getXYZR0(index: number): ArrayNumber4 {
        const arr = this.attXYZR0
        const offset = index * 4
        return [arr[offset + 0] ?? 0, arr[offset + 1] ?? 0, arr[offset + 2] ?? 0, arr[offset + 3] ?? 0]
    }

    getXYZR1(index: number): ArrayNumber4 {
        const arr = this.attXYZR1
        const offset = index * 4
        return [arr[offset + 0] ?? 0, arr[offset + 1] ?? 0, arr[offset + 2] ?? 0, arr[offset + 3] ?? 0]
    }

    /**
     * @param XYZR0 (x,y,z) and radius of point A.
     * @param XYZR1 (x,y,z) and radius of point B.
     * @param UV0 Texture coordinates for point A.
     * @param UV1 Texture coordinates for point B.
     * @param radiusMultiplierInfluence0 If you put 0, the radius won't change regardless to the currently applied radius multiplicator.
     * @param radiusMultiplierInfluence1
     */
    add(
        XYZR0: ArrayNumber4,
        XYZR1: ArrayNumber4,
        UV0: ArrayNumber2 = [0, 0],
        UV1: ArrayNumber2 = [0, 0],
        radiusMultiplierInfluence0 = 1,
        radiusMultiplierInfluence1 = 1,
    ) {
        this.attXYZR0.push(...XYZR0)
        this.attUV0.push(...UV0)
        this.attInfluence0.push(radiusMultiplierInfluence0)
        this.attXYZR1.push(...XYZR1)
        this.attUV1.push(...UV1)
        this.attInfluence1.push(radiusMultiplierInfluence1)
        this._count++
    }

    /**
     * You can rename the attributes if you need to use
     * them in another Painter.
     */
    readonly makeDataset = (
        args: Partial<{
            attXYZR0: string
            attUV0: string
            attInfluence0: string
            attXYZR1: string
            attUV1: string
            attInfluence1: string
            buffer: TgdBuffer
            target: TgdBufferOptionTarget
            usage: TgdBufferOptionUsage
        }> = {},
    ): InstanceDataset => {
        const dataset = TgdPainterSegments.createDataset(args)
        const {
            attXYZR0 = "attXYZR0",
            attUV0 = "attUV0",
            attInfluence0 = "attInfluence0",
            attXYZR1 = "attXYZR1",
            attUV1 = "attUV1",
            attInfluence1 = "attInfluence1",
        } = args
        dataset.set(attXYZR0, new Float32Array(this.attXYZR0))
        dataset.set(attUV0, new Float32Array(this.attUV0))
        dataset.set(attInfluence0, new Float32Array(this.attInfluence0))
        dataset.set(attXYZR1, new Float32Array(this.attXYZR1))
        dataset.set(attUV1, new Float32Array(this.attUV1))
        dataset.set(attInfluence1, new Float32Array(this.attInfluence1))
        return dataset
    }
}

function extract<T>(arg: T | (() => T)): T {
    if (typeof arg === "function") return (arg as () => T)()
    return arg
}
