import type { TgdCamera } from "@tgd/camera"
import type { TgdContext } from "@tgd/context"
import { TgdVec2 } from "@tgd/math"
import { TgdUniformBufferObject } from "@tgd/uniform"

export class TgdUniformBufferObjectCamera extends TgdUniformBufferObject<
    "uniModelViewMatrix" | "uniProjectionMatrix" | "uniCameraPosition" | "uniPixel"
> {
    public camera: TgdCamera

    private readonly uniPixel = new TgdVec2(1, 1)

    constructor(context: TgdContext) {
        super(context, {
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniCameraPosition: "vec3",
                uniPixel: "vec2",
            },
        })
        this.camera = context.camera
    }

    updateData() {
        const { camera, values, uniPixel } = this
        values.uniModelViewMatrix = camera.matrixModelView
        values.uniProjectionMatrix = camera.matrixProjection
        values.uniCameraPosition = camera.transfo.actualPosition
        uniPixel.reset(1 / camera.screenWidth, 1 / camera.screenHeight)
        values.uniPixel = uniPixel
        super.updateData()
    }
}
