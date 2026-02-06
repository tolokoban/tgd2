import { TgdDataset } from "@tgd/dataset"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdVertexArray } from "@tgd/vao"
import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"
import { tgdCanvasCreatePalette } from "@tgd/utils"
import { TgdCamera } from "@tgd/camera"
import { TgdMaterial, TgdMaterialFaceOrientation } from "@tgd/material"
import { makeCapsule } from "./capsule"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import { TgdTransfo } from "@tgd/math"
import {
    TgdBuffer,
    TgdBufferOptionTarget,
    TgdBufferOptionUsage,
} from "@tgd/buffer"

type DatasetOption = TgdDataset | (() => TgdDataset)

export type TgdPainterSegmentsMorphingOptions = {
    /**
     * Number of faces around the cylinder.
     * Min is 3.
     * Default to **3**.
     */
    roundness?: number
    /**
     * With orthographic camera, this is a value in pixels.
     */
    minRadius?: number
    /**
     * Material to apply to the resulting mesh.
     */
    material?: TgdMaterial
    /**
     * If a `TgdPainterSegments` is given, then the
     * data will be shared between the painters.
     */
    datasetsPairs: [DatasetOption, DatasetOption][]
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
export class TgdPainterSegmentsMorphing extends TgdPainter {
    public readonly transfo = new TgdTransfo()
    public colorTexture: TgdTexture2D
    public minRadius: number = 1
    public radiusMultiplier = 1
    public radiusConstant = 1
    public radiusSwitch = 0
    public instanceCount = 0
    /**
     * Mix between two datasets of a pair.
     * 0.0 for the first one, 1.0 for the second one.
     */
    public mix = 0

    private readonly vaos: TgdVertexArray[]
    private readonly prg: TgdProgram
    private readonly vertexCount: number
    private readonly material: TgdMaterial

    // private readonly painter: TgdPainter

    constructor(
        protected readonly context: {
            gl: WebGL2RenderingContext
            camera: TgdCamera
        },
        options: TgdPainterSegmentsMorphingOptions
    ) {
        super()
        this.name = `TgdPainterSegments#${this.id}`
        const { roundness = 3, minRadius = 1, datasetsPairs } = options
        if (datasetsPairs.length === 0) {
            throw new Error(
                '[TgdPainterSegmentsMorphing] "datasetsPairs" must contain at least one pair of datasets!'
            )
        }
        const geometry = makeCapsule(roundness)
        const material = options.material ?? new TgdMaterialFaceOrientation()
        this.material = material
        material.attPosition = geometry.attPosition
        material.attNormal = geometry.attNormal
        material.attUV =
            "((mix(attUV0_A, attUV0_B, uniMix) + mix(attUV1_A, attUV1_B, uniMix)) * .5)"
        this.minRadius = minRadius
        if (roundness > 127) {
            throw new Error("[TgdPainterSegments] Max roundness is 127!")
        }
        if (roundness < 0) {
            throw new Error("[TgdPainterSegments] Min roundness is 0!")
        }
        this.colorTexture = new TgdTexture2D(context)
            .setParams({
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapR: "CLAMP_TO_EDGE",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
            })
            .loadBitmap(
                tgdCanvasCreatePalette(["#f44", "#ff4", "#4f4", "#4ff", "#44f"])
            )
        const vert = new TgdShaderVertex({
            uniforms: {
                uniMix: "float",
                uniTransfoMatrix: "mat4",
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniMinRadius: "float",
                ...material.uniforms,
            },
            attributes: {
                [geometry.attPosition]: "vec3",
                [geometry.attNormal]: "vec3",
                attTip: "float",
                attXYZR0_A: "vec4",
                attXYZR0_B: "vec4",
                attXYZR1_A: "vec4",
                attXYZR1_B: "vec4",
                attUV0_A: "vec2",
                attUV0_B: "vec2",
                attUV1_A: "vec2",
                attUV1_B: "vec2",
            },
            varying: {
                ...material.varyings,
                varNormal: "vec3",
            },
            functions: {
                ...material.extraVertexShaderFunctions,
                applyMaterial: [
                    "void applyMaterial() {",
                    [material.vertexShaderCode],
                    "}",
                ],
                getPosition: [
                    "vec4 getPosition(vec4 pos) {",
                    [material.vertexShaderCodeForGetPosition ?? "return pos;"],
                    "}",
                ],
            },
            mainCode: [
                "vec4 attXYZR0 = mix(attXYZR0_A, attXYZR0_B, uniMix);",
                "vec4 attXYZR1 = mix(attXYZR1_A, attXYZR1_B, uniMix);",
                "vec2 attUV0 = mix(attUV0_A, attUV0_B, uniMix);",
                "vec2 attUV1 = mix(attUV1_A, attUV1_B, uniMix);",
                `vec3 normal = NORMAL;`,
                `vec3 pos = POSITION;`,
                `vec4 xyzr = mix(attXYZR0, attXYZR1, attTip);`,
                `vec3 center = xyzr.xyz;`,
                `float radius = max(`,
                [
                    `xyzr.w,`,
                    `uniMinRadius * (uniProjectionMatrix * uniModelViewMatrix * uniTransfoMatrix * vec4(center, 1)).w`,
                ],
                `);`,
                `vec3 dir = attXYZR1.xyz - attXYZR0.xyz;`,
                `float len = length(dir);`,
                `if (len == 0.0) {`,
                [`// Just a sphere`, `pos *= radius;`, `pos += center.xyz;`],
                `} else {`,
                [
                    `// Full capsule`,
                    `vec3 Z = dir / len;`,
                    `vec3 v = abs(Z.z) > 0.7 ? vec3(1,0,0) : vec3(0,0,1);`,
                    `vec3 Y = cross(v, Z);`,
                    `vec3 X = cross(Y, Z);`,
                    `mat3 mat = mat3(X, Y, Z);`,
                    `pos *= radius;`,
                    `pos = mat * pos + center.xyz;`,
                    `normal = mat * normal;`,
                ],
                `}`,
                `gl_Position = uniProjectionMatrix * uniModelViewMatrix * uniTransfoMatrix * vec4(pos, 1);`,
                "applyMaterial();",
                "varNormal = normal;",
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: material.uniforms,
            outputs: { FragColor: "vec4" },
            varying: material.varyings,
            functions: {
                ...material.extraFragmentShaderFunctions,
                applyMaterial: [
                    "vec4 applyMaterial() {",
                    [material.fragmentShaderCode],
                    "}",
                ],
            },
            mainCode: [`FragColor = applyMaterial();`],
        }).code
        const prg = new TgdProgram(context.gl, {
            name: `TgdPainterSegments/TgdProgram#${this.id}`,
            vert,
            frag,
        })
        this.prg = prg
        this.vaos = datasetsPairs.map(([A, B]) => {
            const datasetA = extract(A).renameAttributes([
                "attXYZR0_A",
                "attUV0_A",
                "attInfluence0_A",
                "attXYZR1_A",
                "attUV1_A",
                "attInfluence1_A",
            ])
            const datasetB = extract(B).renameAttributes([
                "attXYZR0_B",
                "attUV0_B",
                "attInfluence0_B",
                "attXYZR1_B",
                "attUV1_B",
                "attInfluence1_B",
            ])
            if (datasetA.count !== datasetB.count) {
                throw new Error(
                    `[TgdPainterSegmentsMorphing] Datasets of a pair must have the same count, but we got ${datasetA.count} ≠ ${datasetB.count}!`
                )
            }
            const vao = new TgdVertexArray(
                context.gl,
                prg,
                [geometry.dataset, datasetA, datasetB],
                geometry.elements
            )
            this.instanceCount = datasetA.count
            return vao
        })
        this.vertexCount = geometry.elements?.length ?? 0
    }

    delete(): void {
        for (const vao of this.vaos) vao.delete()
        this.prg.delete()
    }

    paint(time: number, delay: number): void {
        const { context, prg, vao, vertexCount, instanceCount, material } = this
        const { gl, camera } = context
        gl.disable(gl.DITHER)
        prg.use()
        this.material.setUniforms?.({ program: prg, camera, time, delay })
        prg.uniform1f("uniMix", this.mix)
        prg.uniform1f(
            "uniMinRadius",
            (this.minRadius * 2) / gl.drawingBufferHeight
        )
        prg.uniformMatrix4fv("uniTransfoMatrix", this.transfo.matrix)
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        material.applyState(gl, () => {
            vao.bind()
            gl.drawElementsInstanced(
                gl.TRIANGLES,
                vertexCount,
                gl.UNSIGNED_SHORT,
                0,
                instanceCount
            )
            vao.unbind()
        })
    }

    private get vao() {
        return this.vaos[0] as TgdVertexArray
    }
}

function extract<T>(arg: T | (() => T)): T {
    if (typeof arg === "function") return (arg as () => T)()
    return arg
}
