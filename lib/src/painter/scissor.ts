import { TgdPainterGroup, TgdPainterGroupOptions } from "./group"

export interface TgdPainterScissorOptions extends TgdPainterGroupOptions {
    /**
     * X relative to current viewport from 0 (left) to 1 (right).
     */
    x: number
    /**
     * Y relative to current viewport from 0 (top) to 1 (bottom).
     */
    y: number
    /**
     * Width relative to current viewport from 0 (0%) to 1 (100%).
     */
    width: number
    /**
     * Height relative to current viewport from 0 (0%) to 1 (100%).
     */
    height: number
}

/**
 * Paint the children in a subset of the current viewport.
 */
export class TgdPainterScissor extends TgdPainterGroup {
    /**
     * X relative to current viewport from 0 (left) to 1 (right).
     */
    public x: number = 0
    /**
     * Width relative to current viewport from 0 (0%) to 1 (100%).
     */
    public y: number = 0
    /**
     * Width relative to current viewport from 0 (0%) to 1 (100%).
     */
    public width: number = 0
    /**
     * Height relative to current viewport from 0 (0%) to 1 (100%).
     */
    public height: number = 0

    constructor(
        private readonly context: { gl: WebGL2RenderingContext },
        options: TgdPainterScissorOptions
    ) {
        super(options)
        this.x = options.x
        this.y = options.y
        this.width = options.width
        this.height = options.height
    }

    paint(time: number, delay: number): void {
        const { gl } = this.context
        const enabled = gl.getParameter(gl.SCISSOR_TEST)
        const [curX, curY, curW, curH] = gl.getParameter(gl.SCISSOR_BOX)
        const x = Math.round(this.x * gl.drawingBufferWidth)
        const y = Math.round(this.y * gl.drawingBufferHeight)
        const w = Math.round(this.width * gl.drawingBufferWidth)
        const h = Math.round(this.height * gl.drawingBufferHeight)
        gl.enable(gl.SCISSOR_TEST)
        gl.scissor(x, y, w, h)
        super.paint(time, delay)
        if (enabled) {
            gl.enable(gl.SCISSOR_TEST)
        } else {
            gl.disable(gl.SCISSOR_TEST)
        }
        gl.scissor(curX, curY, curW, curH)
    }
}
