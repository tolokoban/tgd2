import { TgdTextureCubeOptions } from "@tgd/types"
import { TgdContext } from "@tgd/context"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"
import { TgdCamera } from "@tgd/camera"
import { TgdMat4, TgdTransfo, TgdTransfoOptions } from "@tgd/math"

import VERT from "./skybox.vert"
import FRAG from "./skybox.frag"
import { TgdProgram } from "@tgd/program"
import { TgdTextureCube } from "@tgd/texture"
import { webglCullExec, webglPresetCull } from "@tgd/utils"

export type TgdPainterSkyboxOptions = TgdTextureCubeOptions & {
    camera: TgdCamera
    transfo?: Partial<TgdTransfoOptions> | TgdTransfo
    z?: number
}

export class TgdPainterSkybox extends TgdPainter {
    public readonly transfo: TgdTransfo
    public camera: TgdCamera
    public z = 1

    private readonly texture: TgdTextureCube
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly matrix = new TgdMat4()
    private readonly tmpMat = new TgdMat4()

    constructor(
        private readonly context: TgdContext,
        options: TgdPainterSkyboxOptions
    ) {
        super()
        this.name = "TgdPainterSkybox"
        this.z = options.z ?? 1
        this.transfo = new TgdTransfo(options.transfo)
        this.camera = options.camera
        this.texture = new TgdTextureCube(context, options)
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
        const { context, vao, program, texture, z } = this
        const { gl } = context

        // Compute matrix from current camera.
        const { camera, matrix, tmpMat } = this
        webglCullExec(gl, webglPresetCull.off, () => {
            camera.screenWidth = context.width
            camera.screenHeight = context.height
            matrix.from(camera.matrixProjection)
            tmpMat
                .fromMat3(this.transfo.matrix)
                .multiply(camera.matrixModelView)
            tmpMat.m03 = 0
            tmpMat.m13 = 0
            tmpMat.m23 = 0
            matrix.multiply(tmpMat).invert()

            program.use()
            program.uniformMatrix4fv("uniMatrix", matrix)
            program.uniform1f("uniZ", z)
            texture.activate(0, program, "uniTexture")
            vao.bind()
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
            vao.unbind()
        })
    }
}
