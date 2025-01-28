import { WebglDepthFunc } from ".."
import { TgdPainter } from "./painter"

export type TgdPainterDepthOptions = {
    enabled: boolean
    func: WebglDepthFunc
    mask: boolean
    rangeMin: number
    rangeMax: number
}

export class TgdPainterDepth extends TgdPainter {
    public enabled: boolean
    public func: WebglDepthFunc
    public mask: boolean
    public rangeMin: number
    public rangeMax: number

    private readonly gl: WebGL2RenderingContext

    constructor(
        { gl }: { gl: WebGL2RenderingContext },
        {
            enabled = true,
            func = "LESS",
            mask = true,
            rangeMin = 0,
            rangeMax = 1,
        }: Partial<TgdPainterDepthOptions> = {}
    ) {
        super()
        this.gl = gl
        this.enabled = enabled
        this.func = func
        this.mask = mask
        this.rangeMin = rangeMin
        this.rangeMax = rangeMax
    }

    delete(): void {}

    paint(): void {
        const { gl } = this
        const { enabled } = this
        if (!enabled) {
            gl.disable(gl.DEPTH_TEST)
            return
        }

        const { func, mask, rangeMin, rangeMax } = this
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl[func])
        gl.depthMask(mask)
        gl.depthRange(rangeMin, rangeMax)
    }

    update(): void {}
}
