import {
    TgdContext,
    TgdGeometry,
    TgdPainter,
    TgdParserMeshWavefront,
    TgdProgram,
    TgdTexture2D,
    TgdVec3,
    TgdVertexArray,
    webglElementTypeFromTypedArray,
} from "@tolokoban/tgd"

import FRAG from "./test.frag"
import VERT from "./test.vert"

export default class Painter extends TgdPainter {
    public texture: TgdTexture2D

    private readonly axisZ = new TgdVec3()
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly count: number
    private readonly type: number

    constructor(
        private readonly context: TgdContext,
        meshContent: string,
        texture: TgdTexture2D
    ) {
        super()
        this.texture = texture
        this.program = new TgdProgram(context.gl, {
            vert: VERT,
            frag: FRAG,
        })
        const geometry: TgdGeometry = new TgdParserMeshWavefront(
            meshContent
        ).makeGeometry({ computeNormals: true })
        const { dataset, elements } = geometry
        if (!elements) throw Error("Missing elements!")

        this.type = webglElementTypeFromTypedArray(elements)
        this.vao = new TgdVertexArray(
            context.gl,
            this.program,
            [dataset],
            elements
        )
        this.count = dataset.count
    }

    delete(): void {
        this.program.delete()
    }

    paint(time: number, delay: number): void {
        const { context, texture, vao, program, type, count, axisZ } = this
        const { gl } = this.context
        const { camera } = context
        program.use()
        texture.activate(0, program, "uniTexture")
        program.uniform3fv("uniAxisZ", axisZ)
        program.uniformMatrix4fv("uniCameraModelView", camera.matrixModelView)
        program.uniformMatrix4fv("uniCameraProjection", camera.matrixProjection)
        gl.disable(gl.CULL_FACE)
        // gl.cullFace(gl.BACK)
        vao.bind()
        gl.drawElements(gl.TRIANGLES, count, type, 0)
    }
}
