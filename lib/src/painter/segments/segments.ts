import { TgdDataset } from "@tgd/dataset"
import { TgdPainter } from "@tgd/painter/painter"
import { ArrayNumber2, ArrayNumber4 } from "@tgd/types"
import { TgdVertexArray } from "@tgd/vao"

import VERT from "./segments.vert"
import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"
import { tgdCanvasCreatePalette } from "@tgd/utils"
import { TgdCamera } from "@tgd/camera"
import { TgdVec3 } from "@tgd/math"
import { TgdGeometry } from "@tgd/geometry"
import { TgdPainterMesh } from "../mesh"
import { TgdMaterial, TgdMaterialFaceOrientation } from "@tgd/material"
import { makeCapsule } from "./capsule"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"

export type TgdPainterSegmentsOptions = {
    /**
     * Number of faces around the cylinder.
     * Min is 3.
     * Default to **3**.
     */
    roundness: number
    /**
     * With orthographic camera, this is a value in pixels.
     */
    minRadius: number
    /**
     * Material to apply to the resulting mesh.
     */
    material?: TgdMaterial
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
    public colorTexture: TgdTexture2D
    public minRadius: number = 1
    public radiusMultiplier = 1
    public radiusConstant = 1
    public radiusSwitch = 0

    private readonly vao: TgdVertexArray
    private readonly prg: TgdProgram
    private readonly vertexCount: number
    private readonly instanceCount: number
    private readonly material: TgdMaterial

    // private readonly painter: TgdPainter

    constructor(
        protected readonly context: {
            gl: WebGL2RenderingContext
            camera: TgdCamera
        },
        options: Partial<TgdPainterSegmentsOptions> & {
            makeDataset: () => InstanceDataset
        }
    ) {
        super()
        const { roundness = 3, minRadius = 1, makeDataset } = options
        const geometry = makeCapsule(roundness)
        const material = options.material ?? new TgdMaterialFaceOrientation()
        this.material = material
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
                attXYZR0: "vec4",
                attXYZR1: "vec4",
                attUV0: "vec2",
                attUV1: "vec2",
            },
            varying: material.varyings,
            functions: {
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
                `vec3 normal = NORMAL;`,
                `vec3 pos = POSITION;`,
                `vec4 xyzr = mix(attXYZR0, attXYZR1, attTip);`,
                `vec3 center = xyzr.xyz;`,
                `float radius = max(`,
                [
                    `xyzr.w,`,
                    `uniMinRadius * (uniProjectionMatrix * uniModelViewMatrix * vec4(center, 1)).w`,
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
                `gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(pos, 1);`,
                "applyMaterial();",
                "varNormal = normal;",
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: material.uniforms,
            outputs: { FragColor: "vec4" },
            varying: material.varyings,
            functions: {
                applyMaterial: [
                    "vec4 applyMaterial() {",
                    [material.fragmentShaderCode],
                    "}",
                ],
            },
            mainCode: [`FragColor = applyMaterial();`],
        }).code
        const prg = new TgdProgram(context.gl, {
            vert,
            frag,
        })
        prg.debug()
        this.prg = prg
        // this.painter = new TgdPainterMesh(context, {
        //     geometry,
        //     material: new TgdMaterialFaceOrientation(),
        // })
        const instance = makeDataset()
        this.vao = new TgdVertexArray(
            context.gl,
            prg,
            [geometry.dataset, instance],
            geometry.elements
        )
        this.vertexCount = geometry.elements?.length ?? 0
        this.instanceCount = instance.count
    }

    delete(): void {
        this.vao.delete()
        this.prg.delete()
        // this.painter.delete()
    }

    paint(time: number, delay: number): void {
        // this.painter.paint(_time, _delay)
        const { context, prg, vao, vertexCount, instanceCount, material } = this
        const { gl, camera } = context
        gl.disable(gl.DITHER)
        prg.use()
        this.material.setUniforms(prg, time, delay)
        prg.uniform1f(
            "uniMinRadius",
            (this.minRadius * 2) / gl.drawingBufferHeight
        )
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
        radiusMultiplierInfluence1 = 1
    ) {
        this.attXYZR0.push(...XYZR0)
        this.attUV0.push(...UV0)
        this.attInfluence0.push(radiusMultiplierInfluence0)
        this.attXYZR1.push(...XYZR1)
        this.attUV1.push(...UV1)
        this.attInfluence1.push(radiusMultiplierInfluence1)
        this._count++
    }

    readonly makeDataset = (): InstanceDataset => {
        const dataset = new TgdDataset(
            {
                attXYZR0: "vec4",
                attUV0: "vec2",
                attInfluence0: "float",
                attXYZR1: "vec4",
                attUV1: "vec2",
                attInfluence1: "float",
            },
            {
                divisor: 1,
            }
        )
        dataset.set("attXYZR0", new Float32Array(this.attXYZR0))
        dataset.set("attUV0", new Float32Array(this.attUV0))
        dataset.set("attInfluence0", new Float32Array(this.attInfluence0))
        dataset.set("attXYZR1", new Float32Array(this.attXYZR1))
        dataset.set("attUV1", new Float32Array(this.attUV1))
        dataset.set("attInfluence1", new Float32Array(this.attInfluence1))
        return dataset
    }
}
