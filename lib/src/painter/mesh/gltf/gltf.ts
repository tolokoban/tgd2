import { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/types"
import { TgdVertexArray } from "@tgd/vao"

import FRAG from "./shader.frag"
import VERT from "./shader.vert"
import { TgdParserGLTransfertFormatBinary } from "@tgd/parser"
import { TgdVec3 } from "@tgd/math"

export interface TgdPainterMeshGltfOptions {
    asset: TgdParserGLTransfertFormatBinary
    meshIndex: number
    primitiveIndex?: number
}

/**
 */
export class TgdPainterMeshGltf extends TgdPainter {
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly elementsType: number
    private readonly elementsCount: number
    private readonly dataset: TgdDataset
    private bboxMin: TgdVec3 | null = null
    private bboxMax: TgdVec3 | null = null

    constructor(
        private readonly context: TgdContext,
        options: TgdPainterMeshGltfOptions
    ) {
        super()
        const prg = context.programs.create({
            vert: VERT,
            frag: FRAG,
        })
        const dataset = new TgdDataset({
            POSITION: "vec3",
            NORMAL: "vec3",
        })
        this.dataset = dataset
        const { asset, meshIndex, primitiveIndex = 0 } = options
        asset.setAttrib(dataset, "POSITION", meshIndex, primitiveIndex)
        asset.setAttrib(dataset, "NORMAL", meshIndex, primitiveIndex)
        const { elemType, elemData, elemCount } = asset.getMeshPrimitiveIndices(
            meshIndex,
            primitiveIndex
        )
        this.prg = prg
        this.vao = context.createVAO(prg, [dataset], elemData)
        this.elementsType = elemType
        this.elementsCount = elemCount
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

        const { dataset } = this
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

    public readonly paint = () => {
        const { context, prg } = this
        const { gl, camera } = context
        gl.enable(gl.CULL_FACE)
        gl.cullFace(gl.BACK)
        prg.use()
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        this.vao.bind()
        gl.drawElements(gl.TRIANGLES, this.elementsCount, this.elementsType, 0)
        this.vao.unbind()
    }

    delete(): void {
        this.vao.delete()
    }
}
