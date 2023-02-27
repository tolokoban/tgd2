import scene from "../scene/scene"
import { PainterInterface } from "./painter-interface"

export interface PainterClearOptions {
    color?: [red: number, green: number, blue: number, alpha: number]
}

export default class PainterClear implements PainterInterface {
    private gl: WebGL2RenderingContext | null = null
    private clearMask = 0

    constructor(private readonly options: PainterClearOptions) {}

    setClearColor(red: number, green: number, blue: number, alpha: number) {
        const { gl } = this
        if (!gl) return

        gl.clearColor(red, green, blue, alpha)
    }

    initialize(scene: scene): Promise<boolean> {
        this.gl = scene.gl
        const { gl, options } = this
        if (options.color) {
            this.clearMask |= gl.COLOR_BUFFER_BIT
            gl.clearColor(...options.color)
        }
        return new Promise(resolve => resolve(true))
    }

    /** Nothing to destroy. */
    destroy(): void {}

    paint(_time: number, _delay: number): void {
        const { clearMask, gl } = this
        if (!gl) return

        if (clearMask > 0) gl.clear(clearMask)
    }

    update(_time: number, _delay: number): void {}
}
