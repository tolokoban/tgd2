import { WebglParams } from "@tgd/context/webgl-params"
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
        "off" | "always" | "writeOnly" | "less" | "lessOrEqual" | "lessReadOnly" | "lessOrEqualReadOnly",
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

export function webglDepthSet(context: { webglParams: WebglParams }, depth: WebglDepthOptions) {
    const p = context.webglParams
    p.depthTest = depth.enabled
    p.depthFunc = depth.func
    p.depthWriteMask = depth.mask
    p.depthRange = [depth.rangeMin, depth.rangeMax]
}

export function webglDepthGet(context: { webglParams: WebglParams }): WebglDepthOptions {
    const p = context.webglParams
    const [rangeMin, rangeMax] = p.depthRange
    return {
        enabled: p.depthTest,
        func: p.depthFunc,
        mask: p.depthWriteMask,
        rangeMin,
        rangeMax,
    }
}

export function webglDepthExec(context: { webglParams: WebglParams }, depth: WebglDepthOptions, action: () => void) {
    const currentState = webglDepthGet(context)
    webglDepthSet(context, depth)
    try {
        action()
    } finally {
        webglDepthSet(context, currentState)
    }
}

export function webglDebugDepth(context: { webglParams: WebglParams }, caption = "Depth enabled:") {
    console.debug(caption)
    const depth = webglDepthGet(context)
    debug([
        [caption, depth.enabled, "\n"],
        [
            { cls: "code" },
            ["gl.", depth.enabled ? "enable" : "disable", "(", highlightEnum("DEPTH_FUNC"), ")\n"],
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
