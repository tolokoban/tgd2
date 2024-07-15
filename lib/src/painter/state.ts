import { TgdContext } from "@tgd/context"
import { TgdPainterGroup } from "./group"
import { TgdPainter } from "./painter"
import { WebglBlendEquation, WebglBlendFunc, WebglDepthFunc } from "@tgd/types"

export type TgdPainterStateBlendPreset = "sprite"

type BlendOptions =
    | false
    | TgdPainterStateBlendPreset
    | {
          equationColor: WebglBlendEquation
          equationAlpha: WebglBlendEquation
          functionColorSrc: WebglBlendFunc
          functionColorDst: WebglBlendFunc
          functionAlphaSrc: WebglBlendFunc
          functionAlphaDst: WebglBlendFunc
      }

type Blend =
    | false
    | {
          equationColor: number
          equationAlpha: number
          functionColorSrc: number
          functionColorDst: number
          functionAlphaSrc: number
          functionAlphaDst: number
      }

export type TgdPainterStateDepthPreset = "default"

type DepthOptions =
    | false
    | {
          func: WebglDepthFunc
          mask: boolean
          range: [min: number, max: number]
      }

type Depth =
    | false
    | {
          func: number
          mask: boolean
          rangeMin: number
          rangeMax: number
      }

export interface TgdPainterStateOptions {
    children: TgdPainter[]
    blend: BlendOptions
    depth: DepthOptions
}

export class TgdPainterState extends TgdPainterGroup {
    private blend: Blend = false
    private depth: Depth = false

    constructor(
        context: TgdContext,
        options: Partial<TgdPainterStateOptions> = {}
    ) {
        const { children = [] } = options
        const { gl } = context
        const blend = toBlend(gl, options.blend)
        const depth = toDepth(gl, options.depth)
        const onEnter: Array<() => void> = []
        const onExit: Array<() => void> = []
        if (typeof blend !== "undefined") {
            onEnter.push(() => {
                this.blend = getBlend(gl)
                setBlend(gl, blend)
            })
            onExit.push(() => {
                setBlend(gl, this.blend)
            })
        }
        if (typeof depth !== "undefined") {
            onEnter.push(() => {
                this.depth = getDepth(gl)
                setDepth(gl, depth)
            })
            onExit.push(() => {
                setDepth(gl, this.depth)
            })
        }
        super(children, {
            onEnter(_time, _delay) {
                onEnter.forEach(f => f())
            },
            onExit(_time, _delay) {
                onExit.forEach(f => f())
            },
        })
    }
}

const PRESET_BLEND: Record<TgdPainterStateBlendPreset, Blend> = {
    sprite: {
        equationColor: WebGL2RenderingContext.FUNC_ADD,
        equationAlpha: WebGL2RenderingContext.FUNC_ADD,
        functionColorSrc: WebGL2RenderingContext.SRC_ALPHA,
        functionColorDst: WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
        functionAlphaSrc: WebGL2RenderingContext.ONE,
        functionAlphaDst: WebGL2RenderingContext.ZERO,
    },
}

function toBlend(
    gl: WebGL2RenderingContext,
    blend?: BlendOptions
): Blend | undefined {
    if (typeof blend === "string") return PRESET_BLEND[blend]

    if (!blend) return blend

    return {
        equationAlpha: gl[blend.equationAlpha],
        equationColor: gl[blend.equationColor],
        functionAlphaDst: gl[blend.functionAlphaDst],
        functionAlphaSrc: gl[blend.functionAlphaSrc],
        functionColorDst: gl[blend.functionColorDst],
        functionColorSrc: gl[blend.functionColorSrc],
    }
}

function setBlend(gl: WebGL2RenderingContext, blend: Blend) {
    if (blend === false) {
        gl.disable(gl.BLEND)
    } else {
        gl.enable(gl.BLEND)
        gl.blendEquationSeparate(blend.equationColor, blend.equationAlpha)
        gl.blendFuncSeparate(
            blend.functionColorSrc,
            blend.functionColorDst,
            blend.functionAlphaSrc,
            blend.functionAlphaDst
        )
    }
}

function getBlend(gl: WebGL2RenderingContext): Blend {
    if (!gl.getParameter(gl.BLEND)) return false

    return {
        equationAlpha: gl.getParameter(gl.BLEND_EQUATION_ALPHA) as number,
        equationColor: gl.getParameter(gl.BLEND_EQUATION_RGB) as number,
        functionAlphaDst: gl.getParameter(gl.BLEND_DST_ALPHA) as number,
        functionAlphaSrc: gl.getParameter(gl.BLEND_SRC_ALPHA) as number,
        functionColorDst: gl.getParameter(gl.BLEND_DST_RGB) as number,
        functionColorSrc: gl.getParameter(gl.BLEND_SRC_ALPHA) as number,
    }
}

const PRESET_DEPTH: Record<TgdPainterStateDepthPreset, Depth> = {
    default: {
        func: WebGL2RenderingContext.LESS,
        mask: true,
        rangeMin: 0,
        rangeMax: 1,
    },
}

function toDepth(
    gl: WebGL2RenderingContext,
    depth?: DepthOptions
): Depth | undefined {
    if (typeof depth === "string") return PRESET_DEPTH[depth]

    if (!depth) return depth

    const [rangeMin, rangeMax] = depth.range
    return {
        func: gl[depth.func],
        mask: depth.mask,
        rangeMin,
        rangeMax,
    }
}

function setDepth(gl: WebGL2RenderingContext, depth: Depth) {
    if (depth === false) {
        gl.disable(gl.DEPTH_TEST)
    } else {
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(depth.func)
        gl.depthMask(depth.mask)
        gl.depthRange(depth.rangeMin, depth.rangeMax)
    }
}

function getDepth(gl: WebGL2RenderingContext): Depth {
    if (!gl.getParameter(gl.DEPTH_TEST)) return false

    const [rangeMin, rangeMax] = gl.getParameter(gl.DEPTH_RANGE) as Float32Array
    return {
        func: Number(gl.getParameter(gl.DEPTH_FUNC)),
        mask: Boolean(gl.getParameter(gl.DEPTH_WRITEMASK)),
        rangeMin,
        rangeMax,
    }
}
