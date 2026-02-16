import { ArrayNumber2 } from "@tgd/types"

export class WebglParams {
    private _blend: boolean
    private _blendEquationAlpha: number
    private _blendEquationRGB: number
    private _blendSrcRGB: number
    private _blendDstRGB: number
    private _blendSrcAlpha: number
    private _blendDstAlpha: number

    private _depthTest: boolean
    private _depthFunc: number
    private _depthWriteMask: boolean
    private _depthRange: ArrayNumber2

    constructor(public readonly gl: WebGL2RenderingContext) {
        this._blend = Boolean(gl.getParameter(gl.BLEND))
        this._blendEquationAlpha = Number(
            gl.getParameter(gl.BLEND_EQUATION_ALPHA)
        )
        this._blendEquationRGB = Number(gl.getParameter(gl.BLEND_EQUATION_RGB))
        this._blendSrcRGB = Number(gl.getParameter(gl.BLEND_SRC_RGB))
        this._blendDstRGB = Number(gl.getParameter(gl.BLEND_DST_RGB))
        this._blendSrcAlpha = Number(gl.getParameter(gl.BLEND_SRC_ALPHA))
        this._blendDstAlpha = Number(gl.getParameter(gl.BLEND_DST_ALPHA))

        this._depthTest = Boolean(this.gl.getParameter(gl.DEPTH_TEST))
        this._depthFunc = Number(this.gl.getParameter(gl.DEPTH_FUNC))
        this._depthWriteMask = Boolean(this.gl.getParameter(gl.DEPTH_WRITEMASK))
        const [depthRangeMin, depthRangeMax] = this.gl.getParameter(
            gl.DEPTH_RANGE
        ) as Float32Array
        this._depthRange = [depthRangeMin, depthRangeMax]
    }

    get blend() {
        return this._blend
    }
    set blend(value: boolean) {
        this._blend = value
        const { gl } = this
        if (value) gl.enable(gl.BLEND)
        else gl.disable(gl.BLEND)
    }

    get blendEquationAlpha() {
        return this._blendEquationAlpha
    }
    set blendEquationAlpha(value: number) {
        this._blendEquationAlpha = value
        this.gl.blendEquationSeparate(this._blendEquationRGB, value)
    }

    get blendEquationRGB() {
        return this._blendEquationRGB
    }
    set blendEquationRGB(value: number) {
        this._blendEquationRGB = value
        this.gl.blendEquationSeparate(value, this._blendEquationAlpha)
    }

    setBlendEquationSeparate(rgb: number, alpha: number) {
        this._blendEquationAlpha = rgb
        this._blendEquationRGB = alpha
        this.gl.blendEquationSeparate(rgb, alpha)
    }

    get blendSrcRGB() {
        return this._blendSrcRGB
    }
    set blendSrcRGB(value: number) {
        this._blendSrcRGB = value
        this.gl.blendFuncSeparate(
            this._blendSrcRGB,
            this._blendDstRGB,
            this._blendSrcAlpha,
            this._blendDstAlpha
        )
    }

    get blendDstRGB() {
        return this._blendDstRGB
    }
    set blendDstRGB(value: number) {
        this._blendDstRGB = value
        this.gl.blendFuncSeparate(
            this._blendSrcRGB,
            this._blendDstRGB,
            this._blendSrcAlpha,
            this._blendDstAlpha
        )
    }

    get blendSrcAlpha() {
        return this._blendSrcAlpha
    }
    set blendSrcAlpha(value: number) {
        this._blendSrcAlpha = value
        this.gl.blendFuncSeparate(
            this._blendSrcRGB,
            this._blendDstRGB,
            this._blendSrcAlpha,
            this._blendDstAlpha
        )
    }

    get blendDstAlpha() {
        return this._blendDstAlpha
    }
    set blendDstAlpha(value: number) {
        this._blendDstAlpha = value
        this.gl.blendFuncSeparate(
            this._blendSrcRGB,
            this._blendDstRGB,
            this._blendSrcAlpha,
            this._blendDstAlpha
        )
    }

    setBlendFuncSeparate(
        srcRGB: number,
        dstRGB: number,
        srcAlpha: number,
        dstAlpha: number
    ) {
        this._blendSrcRGB = srcRGB
        this._blendDstRGB = dstRGB
        this._blendSrcAlpha = srcAlpha
        this._blendDstAlpha = dstAlpha
        this.gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha)
    }

    get depthTest() {
        return this._depthTest
    }
    set depthTest(value: boolean) {
        this._depthTest = value
        const { gl } = this
        if (value) gl.enable(gl.DEPTH_TEST)
        else gl.disable(gl.DEPTH_TEST)
    }

    get depthFunc() {
        return this._depthFunc
    }
    set depthFunc(value: number) {
        this._depthFunc = value
        this.gl.depthFunc(value)
    }

    get depthWriteMask() {
        return this._depthWriteMask
    }
    set depthWriteMask(value: boolean) {
        this._depthWriteMask = value
        this.gl.depthMask(value)
    }

    get depthRange(): Readonly<ArrayNumber2> {
        return this._depthRange
    }
    set depthRange([min, max]: Readonly<ArrayNumber2>) {
        this._depthRange[0] = min
        this._depthRange[1] = max
        this.gl.depthRange(min, max)
    }
}
