import { TgdTextureCubeOptions } from "@tgd/types"
import { TgdContext } from "@tgd/context"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"
import { TgdCameraPerspective } from "@tgd/camera"
import { TgdMat4, TgdTransfo, TgdTransfoOptions } from "@tgd/math"

import VERT from "./skybox.vert"
import FRAG from "./skybox.frag"
import { TgdProgram } from "@tgd/program"
import { TgdTextureCubeImpl } from "@tgd/texture"

export type TgdPainterSkyboxOptions = TgdTextureCubeOptions & {
    camera?: TgdCameraPerspective
    transfo?: Partial<TgdTransfoOptions> | TgdTransfo
}

export class TgdPainterSkybox extends TgdPainter {
    public readonly transfo: TgdTransfo
    public camera: TgdCameraPerspective

    private readonly texture: TgdTextureCubeImpl
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly matrix = new TgdMat4()
    private readonly tmpMat = new TgdMat4()

    constructor(
        private readonly context: TgdContext,
        options: TgdPainterSkyboxOptions
    ) {
        super()
        this.transfo = new TgdTransfo(options.transfo)
        // new TgdTransfo(options.transfo)
        this.camera = options.camera ?? new TgdCameraPerspective()
        this.texture = new TgdTextureCubeImpl(context, options)
        this.program = new TgdProgram(context.gl, {
            vert: VERT,
            frag: FRAG,
        })
        const dataset = new TgdDataset({
            attPoint: "vec2",
        })
        dataset.set(
            "attPoint",
            new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1])
        )
        this.vao = new TgdVertexArray(context.gl, this.program, [dataset])
    }

    delete(): void {
        const { vao } = this
        vao.delete()
    }

    paint(): void {
        const { context, vao, program, texture } = this
        const { gl } = context

        program.use()
        program.uniformMatrix4fv("uniTransform", this.transfo.matrix)
        program.uniformMatrix4fv("uniMatrix", this.matrix)
        texture.activate(0, program, "uniTexture")
        vao.bind()
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

        // Compute matrix for the next frame.
        const { camera, matrix, tmpMat } = this
        if (camera !== context.camera) {
            camera.transfo.orientation = context.camera.transfo.orientation
        }
        matrix.from(camera.matrixProjection)
        tmpMat.fromMat3(camera.matrixModelView)
        matrix.multiply(tmpMat).invert()
    }
}
