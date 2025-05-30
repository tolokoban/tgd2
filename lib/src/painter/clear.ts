import { TgdVec4 } from "@tgd/math"
import { TgdPainter } from "./painter"

export interface TgdPainterClearOptions {
    color: [red: number, green: number, blue: number, alpha: number] | TgdVec4
    depth: number
    stencil: number
    name: string
}

/**
 * @see {@link TgdPainterClearOptions}
 */
export class TgdPainterClear extends TgdPainter {
    private readonly clearMask
    private readonly gl: WebGL2RenderingContext

    public red = 1
    public green = 0.7
    public blue = 0
    public alpha = 1
    public depth = 1
    public stencil = 0

    constructor(
        { gl }: { gl: WebGL2RenderingContext },
        private readonly options: Partial<TgdPainterClearOptions> = {}
    ) {
        super()
        this.name = options.name ?? `Clear/${this.name}`
        this.gl = gl
        const color = options.color ?? [0, 0, 0, 1]
        const depth = options.depth ?? 1
        const stencil = options.stencil ?? 0
        this.clearMask = 0
        let hasAnyOption = false
        if (options.color !== undefined) {
            this.clearMask |= gl.COLOR_BUFFER_BIT
            hasAnyOption = true
        }
        if (typeof options.depth === "number") {
            this.clearMask |= gl.DEPTH_BUFFER_BIT
            hasAnyOption = true
        }
        if (typeof options.stencil === "number") {
            this.clearMask |= gl.STENCIL_BUFFER_BIT
            hasAnyOption = true
        }
        if (!hasAnyOption) {
            throw new Error(
                "[TgdPainterClear] You must give at least a color or a depth in the constructor!"
            )
        }

        ;[this.red, this.green, this.blue, this.alpha] = color
        this.depth = depth
        this.stencil = stencil
    }

    /** Nothing to destroy. */
    delete(): void {}

    paint(): void {
        const {
            clearMask,
            gl,
            red,
            green,
            blue,
            alpha,
            depth,
            stencil,
            options,
        } = this
        if (options.color) gl.clearColor(red, green, blue, alpha)
        if (typeof options.depth === "number") {
            gl.clearDepth(depth)
        }
        if (typeof options.stencil === "number") {
            gl.stencilMask(0xff)
            gl.clearStencil(stencil)
        }
        gl.clear(clearMask)
    }
}
