import { TgdScene } from "../scene"
import { TgdPainter } from "./painter"

export interface PainterClearOptions {
    color: [red: number, green: number, blue: number, alpha: number]
    depth: number
}

export class TgdPainterClear implements TgdPainter {
    private clearMask = 0

    public red = 1
    public green = 0.7
    public blue = 0
    public alpha = 1
    public depth = 1

    constructor(
        private readonly scene: TgdScene,
        options: Partial<PainterClearOptions>
    ) {
        const color = options.color ?? [0, 0, 0, 1]
        const depth = options.depth ?? 1
        this.clearMask = 0
        if (options.color) this.clearMask |= scene.gl.COLOR_BUFFER_BIT
        if (options.depth) this.clearMask |= scene.gl.DEPTH_BUFFER_BIT
        ;[this.red, this.green, this.blue, this.alpha] = color
        this.depth = depth
    }

    /** Nothing to destroy. */
    destroy(): void {}

    paint(_time: number, _delay: number): void {
        const { clearMask, scene, red, green, blue, alpha, depth } = this
        const { gl } = scene
        gl.clearColor(red, green, blue, alpha)
        gl.clearDepth(depth)
        gl.clear(clearMask)
    }

    update(_time: number, _delay: number): void {}
}
