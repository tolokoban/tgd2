import { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/program"
import { TgdVertexArray } from "@tgd/vao"

import FRAG from "./shader.frag"
import VERT from "./shader.vert"
import { webglElementTypeFromTypedArray } from "@tgd/utils"
import { TgdGeometry } from "@tgd/geometry"

/**
 * Render a totaly opaque black and white mesh
 * with ghost material.
 */
export class TgdPainterMeshNormals extends TgdPainter {
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly elementsType: number
    private readonly elementsCount: number

    constructor(private readonly context: TgdContext, geometry: TgdGeometry) {
        super()
        const { dataset, count, attPosition, attNormal, elements } = geometry
        if (!attNormal) {
            throw Error("This mesh has no normal!")
        }

        const prg = new TgdProgram(context.gl, {
            vert: VERT,
            frag: FRAG,
        })
        this.prg = prg
        this.vao = new TgdVertexArray(context.gl, prg, [dataset], elements)
        this.elementsType = elements
            ? webglElementTypeFromTypedArray(elements)
            : -1
        this.elementsCount = count
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
