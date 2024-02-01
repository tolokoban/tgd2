import {
    TgdCameraPerspective,
    TgdContext,
    TgdPainter,
    TgdProgram,
    TgdQuat,
    TgdVAO,
    TdgInputKeyboard,
    TgdVec3,
} from "@tolokoban/tgd"

import VERT from "./test.vert"
import FRAG from "./test.frag"
import { parse } from "./parser"

export default class Painter implements TgdPainter {
    private readonly axisZ = new TgdVec3()
    private readonly program: TgdProgram
    private readonly vao: TgdVAO
    private readonly count: number
    private readonly orientation = new TgdQuat()
    private readonly target = new TgdVec3()
    private readonly cameraL = new TgdCameraPerspective()
    private readonly cameraR = new TgdCameraPerspective()
    private readonly keyboard = new TdgInputKeyboard()
    private readonly type: "UNSIGNED_BYTE" | "UNSIGNED_SHORT" | "UNSIGNED_INT"
    private radius = 0

    constructor(private readonly context: TgdContext, meshContent: string) {
        this.program = context.programs.create({
            vert: VERT,
            frag: FRAG,
        })
        const { dataset, elements, type } = parse(meshContent)
        this.type = type
        console.log("🚀 [painter] type, elements = ", type, elements) // @FIXME: Remove this line written on 2024-01-31 at 16:39
        this.vao = context.createVAO(this.program, [dataset], elements)
        this.count = elements.length
        this.orientation.rotateAroundX(-Math.PI / 8)
    }

    delete(): void {
        this.keyboard.detach()
    }

    paint(time: number, delay: number): void {
        const { gl } = this.context
        const { vao, program, type, count, cameraL, cameraR, axisZ } = this
        cameraL.width = gl.drawingBufferWidth
        cameraL.height = gl.drawingBufferHeight
        cameraR.width = gl.drawingBufferWidth
        cameraR.height = gl.drawingBufferHeight
        program.use()
        program.uniform3fv("uniAxisZ", axisZ)
        program.uniformMatrix4fv("uniCameraViewModelL", cameraL.matrixViewModel)
        program.uniformMatrix4fv("uniCameraViewModelR", cameraR.matrixViewModel)
        program.uniformMatrix4fv(
            "uniCameraProjection",
            cameraL.matrixProjection
        )
        gl.enable(gl.CULL_FACE)
        gl.cullFace(gl.BACK)
        gl.enable(gl.DEPTH_TEST)
        gl.clearDepth(1)
        gl.depthFunc(gl.LESS)
        gl.depthMask(true)
        gl.depthRange(0, 1)
        gl.clear(gl.DEPTH_BUFFER_BIT)
        vao.bind()
        gl.drawElements(gl.TRIANGLES, count, gl[type], 0)
    }

    update(time: number, delay: number): void {
        const { orientation, keyboard, target, cameraL, cameraR, axisZ } = this
        orientation.rotateAroundY(delay * 1e-3)
        const camSpeed = 5e-3
        if (keyboard.isPressed("ArrowRight")) {
            target.x += delay * camSpeed
            console.log("🚀 [painter] target = ", target) // @FIXME: Remove this line written on 2024-01-31 at 22:02
        }
        if (keyboard.isPressed("ArrowLeft")) {
            target.x -= delay * camSpeed
        }
        if (keyboard.isPressed("ArrowUp")) {
            target.y += delay * camSpeed
        }
        if (keyboard.isPressed("ArrowDown")) {
            target.y -= delay * camSpeed
        }
        if (keyboard.isPressed("0")) {
            target.x = 0
            target.y = 0
        }
        const speedRadius = 1e-3
        if (keyboard.isPressed("+")) {
            this.radius = Math.min(10, this.radius + delay * speedRadius)
            this.orientation.rotateAroundY(delay * speedRadius)
        }
        if (keyboard.isPressed("-")) {
            this.radius = Math.max(0, this.radius - delay * speedRadius)
            this.orientation.rotateAroundY(-delay * speedRadius)
        }
        if (keyboard.isPressed("Space")) this.radius = 0
        cameraL.target = target
        cameraL.orientation = orientation
        cameraL.orientation.rotateAroundY(this.radius)
        cameraR.target = target
        cameraR.orientation = orientation
        cameraR.orientation.rotateAroundY(-this.radius)
        orientation.toAxisZ(axisZ)
    }
}
