import { WebglDepthFunc } from "@tgd/types"

export type TgdPainterStateDepthPreset = "default"

export type DepthOptions =
    | false
    | TgdPainterStateDepthPreset
    | {
          func: WebglDepthFunc
          mask: boolean
          range: [min: number, max: number]
      }

export type Depth =
    | false
    | {
          func: number
          mask: boolean
          rangeMin: number
          rangeMax: number
      }

export const PRESET_DEPTH: Record<TgdPainterStateDepthPreset, Depth> = {
    default: {
        func: WebGL2RenderingContext.LESS,
        mask: true,
        rangeMin: 0,
        rangeMax: 1,
    },
}

export function toDepth(
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

export function setDepth(gl: WebGL2RenderingContext, depth: Depth) {
    if (depth === false) {
        gl.disable(gl.DEPTH_TEST)
    } else {
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(depth.func)
        gl.depthMask(depth.mask)
        gl.depthRange(depth.rangeMin, depth.rangeMax)
    }
}

export function getDepth(gl: WebGL2RenderingContext): Depth {
    if (!gl.getParameter(gl.DEPTH_TEST)) return false

    const [rangeMin, rangeMax] = gl.getParameter(gl.DEPTH_RANGE) as Float32Array
    return {
        func: Number(gl.getParameter(gl.DEPTH_FUNC)),
        mask: Boolean(gl.getParameter(gl.DEPTH_WRITEMASK)),
        rangeMin,
        rangeMax,
    }
}
