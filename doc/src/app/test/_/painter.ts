import {
    TgdCameraOrthographic,
    TgdContext,
    TgdPainter,
    TgdProgram,
    TdgTexture2D,
    TgdQuat,
    TgdVertexArray,
    TgdVec3,
    TgdCameraPerspective,
    TgdCamera,
} from "@tolokoban/tgd"

import { parse } from "./parser"

import VERT from "./test.vert"
import FRAG from "./test.frag"

export default class Painter implements TgdPainter {
    public texture: TdgTexture2D

    private readonly axisZ = new TgdVec3()
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly count: number
    private readonly cameraL: TgdCamera
    private readonly cameraR: TgdCamera
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
        const camera = context.camera
        camera.distance = 10
        camera.face("-Y+Z-X")
        if (camera instanceof TgdCameraPerspective) {
            this.cameraL = new TgdCameraPerspective()
            this.cameraR = new TgdCameraPerspective()
        } else {
            this.cameraL = new TgdCameraOrthographic()
            this.cameraR = new TgdCameraOrthographic()
        }
    }

    delete(): void {
        this.context.programs.delete(this.program)
    }

    paint(time: number, delay: number): void {
        const { gl } = this.context
        const { texture, vao, program, type, count, cameraL, cameraR, axisZ } =
            this
        cameraL.screenWidth = gl.drawingBufferWidth
        cameraL.screenHeight = gl.drawingBufferHeight
        cameraR.screenWidth = gl.drawingBufferWidth
        cameraR.screenHeight = gl.drawingBufferHeight
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
        const { context, cameraL, cameraR, axisZ } = this
        const { keyboard } = context.inputs
        const { camera } = context
        camera.toAxisZ(axisZ)
        const camSpeed = 1e-3
        if (keyboard.isDown("ArrowRight")) {
            camera.orbitAroundY(delay * camSpeed)
        } else if (keyboard.isDown("ArrowLeft")) {
            camera.orbitAroundY(-delay * camSpeed)
        }
        if (keyboard.isDown("ArrowUp")) {
            camera.orbitAroundX(delay * camSpeed)
        } else if (keyboard.isDown("ArrowDown")) {
            camera.orbitAroundX(-delay * camSpeed)
        }
        if (keyboard.isDown("0")) {
            camera.setOrientation(new TgdQuat())
        }
        if (keyboard.hasClicked("d")) {
            camera.debug()
        }
        const speedRadius = 1e-3
        if (keyboard.isDown("+")) {
            this.radius = Math.min(
                Math.PI * 0.5,
                this.radius + delay * speedRadius
            )
        }
        if (keyboard.isDown("-")) {
            this.radius = Math.max(0, this.radius - delay * speedRadius)
        }
        if (keyboard.isDown("Space")) this.radius = 0
        const { radius } = this
        cameraL.from(camera)
        cameraR.from(camera)
        cameraL.orbitAroundY(+radius)
        cameraR.orbitAroundY(-radius)
    }
}