import type { TgdCamera } from "@tgd/camera"
import { TgdLogic } from "@tgd/context"
import { type TgdGeometry, TgdGeometryBox } from "@tgd/geometry"
import type { TgdInterfaceTransformable } from "@tgd/interface"
import { type TgdMaterial, TgdMaterialNormals } from "@tgd/material"
import { TgdTransfo, type TgdTransfoOptions, TgdVec3 } from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment } from "@tgd/shader/fragment"
import { TgdShaderVertex } from "@tgd/shader/vertex"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainter } from "../../painter"

export interface TgdPainterMeshOptions {
    transfo?: Partial<TgdTransfoOptions> | TgdTransfo
    geometry?: TgdGeometry
    material?: TgdMaterial
    name?: string
}

/**
 */
export class TgdPainterMesh
    extends TgdPainter
    implements TgdInterfaceTransformable
{
    /**
     * the logic will be executed at the beginning of `paint()`.
     */
    public readonly logic = new TgdLogic()
    public readonly transfo = new TgdTransfo()
    public readonly material: TgdMaterial

    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly elementsType: number
    private readonly count: number
    private readonly geometry: TgdGeometry
    private readonly drawMode: number = 0
    private bboxMin: TgdVec3 | null = null
    private bboxMax: TgdVec3 | null = null

    constructor(
        protected readonly context: {
            gl: WebGL2RenderingContext
            camera: TgdCamera
            paint?: () => void
        },
        options: TgdPainterMeshOptions = {}
    ) {
        super()
        const {
            transfo,
            material = new TgdMaterialNormals(),
            geometry = new TgdGeometryBox(),
        } = options
        this.transfo = new TgdTransfo(transfo)
        this.material = material
        this.geometry = geometry
        this.drawMode =
            typeof geometry.drawMode === "number"
                ? geometry.drawMode
                : context.gl[geometry.drawMode]
        material.attPosition = geometry.attPosition
        material.attNormal = geometry.attNormal
        material.attUV = geometry.attUV
        const vert = new TgdShaderVertex({
            uniforms: {
                uniTransfoMatrix: "mat4",
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                ...material.uniforms,
            },
            attributes: {
                [geometry.attPosition]: "vec4",
                [geometry.attNormal]: "vec3",
                [geometry.attUV]: "vec2",
            },
            varying: material.varyings,
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
                `vec4 position = getPosition(${geometry.attPosition});`,
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * uniTransfoMatrix * position;",
                `applyMaterial(position.xyz, ${geometry.attNormal}.xyz, ${geometry.attUV}.xy);`,
            ],
        })
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
            mainCode: ["FragColor = applyMaterial();"],
        })
        if (material.debug) {
            vert.debug()
            frag.debug()
        }
        const prg = new TgdProgram(context.gl, {
            vert: vert.code,
            frag: frag.code,
        })
        this.program = prg
        this.vao = new TgdVertexArray(
            context.gl,
            prg,
            [geometry.dataset],
            geometry.elements
        )
        this.elementsType = geometry.elementsType
        this.count = geometry.count
        this.name = options.name ?? `Mesh/${this.name}`
    }

    debug(caption?: string) {
        this.program.debug(caption ?? this.name)
        this.geometry.debug(caption ?? this.name)
    }

    computeBoundingBox(): {
        min: Readonly<TgdVec3>
        max: Readonly<TgdVec3>
    } {
        if (this.bboxMin && this.bboxMax) {
            return {
                min: this.bboxMin,
                max: this.bboxMax,
            }
        }

        const { dataset } = this.geometry
        const { get } = dataset.getAttribAccessor("POSITION")
        const min = new TgdVec3(get(0, 0), get(0, 1), get(0, 2))
        const max = new TgdVec3(min)
        for (let index = 1; index < dataset.count; index++) {
            const x = get(index, 0)
            const y = get(index, 1)
            const z = get(index, 2)
            min.x = Math.min(min.x, x)
            max.x = Math.max(max.x, x)
            min.y = Math.min(min.y, y)
            max.y = Math.max(max.y, y)
            min.z = Math.min(min.z, z)
            max.z = Math.max(max.z, z)
        }
        this.bboxMin = min
        this.bboxMax = max
        return { min, max }
    }

    public readonly paint = (time: number, delay: number) => {
        const {
            context,
            program,
            geometry,
            material,
            drawMode,
            count,
            transfo,
        } = this
        const { gl, camera } = context
        this.logic.exec(time, delay)
        program.use()
        material.setUniforms?.({ camera, program, time, delay })
        program.uniformMatrix4fv("uniTransfoMatrix", transfo.matrix)
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        material.applyState(gl, () => {
            this.vao.bind()
            if (geometry.elements) {
                gl.drawElements(drawMode, count, this.elementsType, 0)
            } else {
                gl.drawArrays(drawMode, 0, count)
            }
            this.vao.unbind()
        })
    }

    delete(): void {
        this.vao.delete()
    }
}
