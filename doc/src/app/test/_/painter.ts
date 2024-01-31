import {
    TgdCameraPerspective,
    TgdContext,
    TgdPainter,
    TgdProgram,
    TgdVAO,
} from "@tolokoban/tgd"

import VERT from "./test.vert"
import FRAG from "./test.frag"
import { parse } from "./parser"

export default class Painter implements TgdPainter {
    private readonly program: TgdProgram
    private readonly vao: TgdVAO
    private readonly count: number
    private readonly camera = new TgdCameraPerspective()

    constructor(private readonly context: TgdContext, meshContent: string) {
        this.program = context.programs.create({
            vert: VERT,
            frag: FRAG,
        })
        const { dataset, elements } = parse(meshContent)
        console.log("🚀 [painter] elements = ", elements) // @FIXME: Remove this line written on 2024-01-31 at 16:39
        this.vao = context.createVAO(this.program, [dataset], elements)
        this.count = elements.length
    }

    delete(): void {}

    paint(time: number, delay: number): void {
        const { gl } = this.context
        const { vao, program, count, camera } = this
        camera.setTarget(
            Math.sin(time * 2.13e-3) * 2,
            Math.sin(time * 1.71e-3) * 2,
            0
        )
        camera.width = gl.drawingBufferWidth
        camera.height = gl.drawingBufferHeight
        program.use()
        program.uniformMatrix4fv("uniCameraViewModel", camera.matrixViewModel)
        program.uniformMatrix4fv("uniCameraProjection", camera.matrixProjection)
        gl.enable(gl.DEPTH_TEST)
        gl.clearDepth(1)
        gl.depthFunc(gl.LESS)
        gl.depthMask(true)
        gl.depthRange(0, 1)
        gl.clear(gl.DEPTH_BUFFER_BIT)
        vao.bind()
        gl.drawElements(gl.TRIANGLES, count, gl.UNSIGNED_INT, 0)
    }

    update(time: number, delay: number): void {}
}
