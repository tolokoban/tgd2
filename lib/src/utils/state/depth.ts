import { debug, highlightEnum } from "@tgd/debug/debug"
import { WebglEnumDepthFunction } from "@tgd/types/webgl"

export interface WebglDepthOptions {
    enabled: boolean
    func: WebglEnumDepthFunction
    mask: boolean
    rangeMin: number
    rangeMax: number
}

export const webglPresetDepth: Readonly<
    Record<
        | "off"
        | "always"
        | "writeOnly"
        | "less"
        | "lessOrEqual"
        | "lessReadOnly"
        | "lessOrEqualReadOnly",
        WebglDepthOptions
    >
> = {
    off: {
        enabled: false,
        func: WebglEnumDepthFunction.ALWAYS,
        mask: false,
        rangeMin: 0,
        rangeMax: 1,
    },
    always: {
        enabled: true,
        func: WebglEnumDepthFunction.ALWAYS,
        mask: true,
        rangeMin: 0,
        rangeMax: 1,
    },
    writeOnly: {
        enabled: false,
        func: WebglEnumDepthFunction.ALWAYS,
        mask: true,
        rangeMin: 0,
        rangeMax: 1,
    },
    less: {
        enabled: true,
        func: WebglEnumDepthFunction.LESS,
        mask: true,
        rangeMin: 0,
        rangeMax: 1,
    },
    lessOrEqual: {
        enabled: true,
        func: WebglEnumDepthFunction.LEQUAL,
        mask: true,
        rangeMin: 0,
        rangeMax: 1,
    },
    lessReadOnly: {
        enabled: true,
        func: WebglEnumDepthFunction.LESS,
        mask: false,
        rangeMin: 0,
        rangeMax: 1,
    },
    lessOrEqualReadOnly: {
        enabled: true,
        func: WebglEnumDepthFunction.LEQUAL,
        mask: false,
        rangeMin: 0,
        rangeMax: 1,
    },
}

export function webglDepthSet(
    gl: WebGL2RenderingContext,
    depth: WebglDepthOptions
) {
    if (depth.enabled) gl.enable(gl.DEPTH_TEST)
    else gl.disable(gl.DEPTH_TEST)
    gl.depthFunc(depth.func)
    gl.depthMask(depth.mask)
    gl.depthRange(depth.rangeMin, depth.rangeMax)
}

export function webglDepthGet(gl: WebGL2RenderingContext): WebglDepthOptions {
    const [rangeMin, rangeMax] = gl.getParameter(gl.DEPTH_RANGE) as Float32Array
    return {
        enabled: Boolean(gl.getParameter(gl.DEPTH_TEST)),
        func: Number(gl.getParameter(gl.DEPTH_FUNC)),
        mask: Boolean(gl.getParameter(gl.DEPTH_WRITEMASK)),
        rangeMin,
        rangeMax,
    }
}

export function webglDepthExec(
    gl: WebGL2RenderingContext,
    depth: WebglDepthOptions,
    action: () => void
) {
    const currentState = webglDepthGet(gl)
    webglDepthSet(gl, depth)
    try {
        action()
    } finally {
        webglDepthSet(gl, currentState)
    }
}

export function webglDebugDepth(
    gl: WebGL2RenderingContext,
    caption = "Depth enabled:"
) {
    console.log(caption)
    const depth = webglDepthGet(gl)
    debug([
        [caption, depth.enabled, "\n"],
        [
            { cls: "code" },
            [
                "gl.",
                depth.enabled ? "enable" : "disable",
                "(",
                highlightEnum("DEPTH_FUNC"),
                ")\n",
            ],
            [
                "gl.depthFunc(",
                highlightEnum(depth.func),
                ")\n",
                "gl.depthMask(",
                depth.mask,
                ")\n",
                `gl.depthRange(${depth.rangeMin}, ${depth.rangeMax})\n`,
            ],
        ],
    ])
}
