import { TgdContext } from "@tgd/context"
import { TgdPainterGroup } from "./group"
import { TgdPainter } from "./painter"
import { WebglBlendEquation, WebglBlendFunc } from "@tgd/types"

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

export interface TgdPainterStateOptions {
    children: TgdPainter[]
    blend: BlendOptions
}

export class TgdPainterState extends TgdPainterGroup {
    private blend: Blend = false

    constructor(
        context: TgdContext,
        options: Partial<TgdPainterStateOptions> = {}
    ) {
        const { children = [] } = options
        const { gl } = context
        const blend = toBlend(gl, options.blend)
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
