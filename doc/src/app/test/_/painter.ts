import {
    TgdCameraPerspective,
    TgdContext,
    TgdPainter,
    TgdProgram,
    TgdQuat,
    TgdVAO,
    TdgInputKeyboard,
    TgdVec3,
    TdgTexture2D,
    TgdControllerCameraOrbit,
} from "@tolokoban/tgd"

import VERT from "./test.vert"
import FRAG from "./test.frag"
import { parse } from "./parser"

export default class Painter implements TgdPainter {
    public texture: TdgTexture2D

    private readonly orbitControl: TgdControllerCameraOrbit
    private readonly axisZ = new TgdVec3()
    private readonly program: TgdProgram
    private readonly vao: TgdVAO
    private readonly count: number
    private readonly target = new TgdVec3()
    private readonly camera = new TgdCameraPerspective()
    private readonly cameraL = new TgdCameraPerspective()
    private readonly cameraR = new TgdCameraPerspective()
    private readonly keyboard = new TdgInputKeyboard()
    private readonly type: "UNSIGNED_BYTE" | "UNSIGNED_SHORT" | "UNSIGNED_INT"
    private radius = 0

    constructor(
        private readonly context: TgdContext,
        meshContent: string,
        texture: TdgTexture2D
    ) {
        this.texture = texture
        this.program = context.programs.create({
            vert: VERT,
            frag: FRAG,
        })
        const { dataset, elements, type } = parse(meshContent)
        this.type = type
        this.vao = context.createVAO(this.program, [dataset], elements)
        this.count = elements.length
        this.camera.distance = 3
        this.orbitControl = new TgdControllerCameraOrbit(this.camera)
        this.orbitControl.attach(context.canvas)
    }

    delete(): void {
        this.keyboard.detach()
    }

    paint(time: number, delay: number): void {
        const { gl } = this.context
        const { texture, vao, program, type, count, cameraL, cameraR, axisZ } =
            this
        cameraL.width = gl.drawingBufferWidth
        cameraL.height = gl.drawingBufferHeight
        cameraR.width = gl.drawingBufferWidth
        cameraR.height = gl.drawingBufferHeight
        program.use()
        texture.activate(program, "uniTexture")
        program.uniform3fv("uniAxisZ", axisZ)
        program.uniformMatrix4fv("uniCameraViewModelL", cameraL.matrixViewModel)
        program.uniformMatrix4fv("uniCameraViewModelR", cameraR.matrixViewModel)
        program.uniformMatrix4fv(
            "uniCameraProjection",
            cameraL.matrixProjection
        )
        gl.disable(gl.CULL_FACE)
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
        const { keyboard, camera, cameraL, cameraR, axisZ } = this
        camera.toAxisZ(axisZ)
        const camSpeed = 1e-3
        if (keyboard.isPressed("ArrowRight")) {
            camera.orbitAroundY(delay * camSpeed)
        } else if (keyboard.isPressed("ArrowLeft")) {
            camera.orbitAroundY(-delay * camSpeed)
        }
        if (keyboard.isPressed("ArrowUp")) {
            camera.orbitAroundX(delay * camSpeed)
        } else if (keyboard.isPressed("ArrowDown")) {
            camera.orbitAroundX(-delay * camSpeed)
        }
        if (keyboard.isPressed("0")) {
            camera.setOrientation(new TgdQuat())
        }
        const speedRadius = 1e-3
        if (keyboard.isPressed("+")) {
            this.radius = Math.min(
                Math.PI * 0.5,
                this.radius + delay * speedRadius
            )
        }
        if (keyboard.isPressed("-")) {
            this.radius = Math.max(0, this.radius - delay * speedRadius)
        }
        if (keyboard.isPressed("Space")) this.radius = 0
        const { radius } = this
        cameraL.from(camera)
        cameraR.from(camera)
        cameraL.orbitAroundY(+radius)
        cameraR.orbitAroundY(-radius)
    }
}
