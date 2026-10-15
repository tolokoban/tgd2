import { type TgdContext, TgdLogic } from "@tgd/context"
import { type TgdGeometry, TgdGeometryBox } from "@tgd/geometry"
import type { TgdInterfaceTransformable } from "@tgd/interface"
import { type TgdMaterial, TgdMaterialNormals } from "@tgd/material"
import { TgdTransfo, type TgdTransfoOptions, TgdVec3 } from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import type { TgdUniformBufferObjectCamera } from "@tgd/uniform"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainter } from "../../painter"
import { tgdMaterialApplyUniforms, tgdMaterialCreateProgram } from "../material-program"

export interface TgdPainterMeshOptions {
    uniformCamera?: TgdUniformBufferObjectCamera
    transfo?: Partial<TgdTransfoOptions> | TgdTransfo
    geometry?: TgdGeometry
    material?: TgdMaterial
    name?: string
}

/**
 */
export class TgdPainterMesh
    extends TgdPainter
    implements TgdInterfaceTransformable {
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
    private readonly uniformCamera?: TgdUniformBufferObjectCamera

    constructor(
        protected readonly context: TgdContext,
        options: TgdPainterMeshOptions = {},
    ) {
        super()
        const {
            uniformCamera,
            transfo,
            material = new TgdMaterialNormals(),
            geometry = new TgdGeometryBox(),
        } = options
        this.uniformCamera = uniformCamera
        this.transfo = new TgdTransfo(transfo)
        this.material = material
        this.geometry = geometry
        this.drawMode =
            typeof geometry.drawMode === "number"
                ? geometry.drawMode
                : context.gl[geometry.drawMode]
        const prg = tgdMaterialCreateProgram(context.gl, material, geometry, uniformCamera)
        this.program = prg
        this.vao = new TgdVertexArray(
            context.gl,
            prg,
            [geometry.dataset],
            geometry.elements,
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
        const { get } = dataset.getAttribAccessor(this.geometry.attPosition)
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

    public readonly paint = (time: number, delta: number) => {
        const {
            context,
            program,
            geometry,
            material,
            drawMode,
            count,
            transfo,
            uniformCamera,
        } = this
        const { gl, camera } = context
        this.logic.exec(time, delta)
        program.use()
        tgdMaterialApplyUniforms(material, context, program, time, delta)
        program.uniformMatrix4fv("uniTransfoMatrix", transfo.matrix)
        if (!uniformCamera) {
            program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
            program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        }
        material.applyState(this.context, () => {
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
        this.program.delete()
    }
}
