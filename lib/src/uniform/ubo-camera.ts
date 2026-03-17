import type { TgdCamera } from "@tgd/camera"
import type { TgdContext } from "@tgd/context"
import { TgdUniformBufferObject } from "@tgd/uniform"

export class TgdUniformBufferObjectCamera extends TgdUniformBufferObject {
    public camera: TgdCamera

    constructor(context: TgdContext) {
        super(context, {
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
            },
        })
        this.camera = context.camera
    }

    updateData() {
        const { camera, values } = this
        values.uniModelViewMatrix = camera.matrixModelView
        values.uniProjectionMatrix = camera.matrixProjection
        super.updateData()
    }
}
