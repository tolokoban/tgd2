import type { TgdCamera } from "@tgd/camera"
import type { TgdContext } from "@tgd/context"
import { TgdVec2 } from "@tgd/math"
import { TgdUniformBufferObject } from "@tgd/uniform"

/**
- `mat4 uniModelViewMatrix`: 
- `mat4 uniProjectionMatrix`: 
- `vec3 uniCameraPosition`: position of the camera.
- `vec2 uniPixel`: Size of a pixel in camera space units.
- `vec2 uniScreenSize`: width and height of the screen in pixels.
- `float uniScreenAspectRatio`: width / height
- `float uniScreenAspectRatioInverse`: height / width
 */
export class TgdUniformBufferObjectCamera extends TgdUniformBufferObject<
    "uniModelViewMatrix" | "uniProjectionMatrix" | "uniCameraPosition" | "uniPixel" | "uniScreenSize" | "uniScreenAspectRatio" | "uniScreenAspectRatioInverse"
> {
    public camera: TgdCamera

    private readonly uniPixel = new TgdVec2(1, 1)
    private readonly uniScreenSize = new TgdVec2(1, 1)

    constructor(context: TgdContext) {
        super(context, {
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniCameraPosition: "vec3",
                uniPixel: "vec2",
                uniScreenSize: "vec2",
                uniScreenAspectRatio: "float",
                uniScreenAspectRatioInverse: "float"
            },
        })
        this.camera = context.camera
    }

    updateData() {
        const { camera, values, uniPixel, uniScreenSize } = this
        values.uniModelViewMatrix = camera.matrixModelView
        values.uniProjectionMatrix = camera.matrixProjection
        values.uniCameraPosition = camera.transfo.actualPosition
        uniPixel.reset(1 / camera.screenWidth, 1 / camera.screenHeight)
        values.uniPixel = uniPixel
        uniScreenSize.reset(camera.screenWidth, camera.screenHeight)
        values.uniScreenSize = uniScreenSize
        values.uniScreenAspectRatio = camera.screenAspectRatio
        values.uniScreenAspectRatioInverse = 1 / camera.screenAspectRatio

        super.updateData()
    }
}
