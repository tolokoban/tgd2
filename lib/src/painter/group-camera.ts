import { TgdCamera } from "@tgd/camera"
import { TgdPainterGroup } from "./group"
import { TgdContext } from "@tgd/context"
import { TgdPainter } from "./painter"
import { TgdPainterFunction } from "@tgd/types/painter"

export interface TgdPainterGroupCameraOptions {
    name?: string
    camera?: TgdCamera
    children?: (TgdPainter | TgdPainterFunction)[]
}

/**
 * This group uses a special camera, then rollback to the saved one.
 */
export class TgdPainterGroupCamera extends TgdPainterGroup {
    public camera: TgdCamera

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterGroupCameraOptions = {},
    ) {
        super(options.children)
        if (options.name) this.name = options.name
        else this.name = `GroupCamera/${this.name}`
        this.camera = options.camera ?? context.camera
    }

    paint(time: number, delta: number): void {
        const { context } = this
        const savedCamera = context.camera
        context.camera = this.camera
        super.paint(time, delta)
        context.camera = savedCamera
    }
}
