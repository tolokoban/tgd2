import { TgdCamera } from "@tgd/camera"
import { TgdPainterGroup } from "./group"
import { TgdContext } from "@tgd/context"
import { TgdPainter } from "./painter"

export interface TgdPainterGroupCameraOptions {
    camera?: TgdCamera
    children?: TgdPainter[]
}

/**
 * This group uses a special camera, then rollback to the saved one.
 */
export class TgdPainterGroupCamera extends TgdPainterGroup {
    public camera: TgdCamera

    constructor(
        private readonly context: TgdContext,
        options: TgdPainterGroupCameraOptions = {}
    ) {
        super(options.children)
        this.camera = options.camera ?? context.camera
    }

    paint(time: number, delay: number): void {
        const { context } = this
        const savedCamera = context.camera
        context.camera = this.camera
        super.paint(time, delay)
        context.camera = savedCamera
    }
}
