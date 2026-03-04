import type { WebglParams } from "@tgd/context/webgl-params"
import { debug, highlightEnum } from "@tgd/debug/debug"
import { WebglEnumBlendEquation, WebglEnumBlendFunction } from "@tgd/types"

export interface WebglBlendOptions {
    enabled: boolean
    equationColor: WebglEnumBlendEquation
    equationAlpha: WebglEnumBlendEquation
    functionColorSrc: WebglEnumBlendFunction
    functionColorDst: WebglEnumBlendFunction
    functionAlphaSrc: WebglEnumBlendFunction
    functionAlphaDst: WebglEnumBlendFunction
}

export const webglPresetBlend: Readonly<Record<"off" | "alpha" | "add" | "premultipliedAlpha", WebglBlendOptions>> = {
    off: {
        enabled: false,
        equationColor: WebglEnumBlendEquation.FUNC_ADD,
        functionColorSrc: WebglEnumBlendFunction.SRC_ALPHA,
        functionColorDst: WebglEnumBlendFunction.ONE_MINUS_SRC_ALPHA,
        equationAlpha: WebglEnumBlendEquation.FUNC_ADD,
        functionAlphaSrc: WebglEnumBlendFunction.ONE,
        functionAlphaDst: WebglEnumBlendFunction.ZERO,
    },
    alpha: {
        enabled: true,
        equationColor: WebglEnumBlendEquation.FUNC_ADD,
        functionColorSrc: WebglEnumBlendFunction.SRC_ALPHA,
        functionColorDst: WebglEnumBlendFunction.ONE_MINUS_SRC_ALPHA,
        equationAlpha: WebglEnumBlendEquation.FUNC_ADD,
        functionAlphaSrc: WebglEnumBlendFunction.ONE,
        functionAlphaDst: WebglEnumBlendFunction.ZERO,
    },
    add: {
        enabled: true,
        equationColor: WebglEnumBlendEquation.FUNC_ADD,
        functionColorSrc: WebglEnumBlendFunction.ONE,
        functionColorDst: WebglEnumBlendFunction.ONE,
        equationAlpha: WebglEnumBlendEquation.FUNC_ADD,
        functionAlphaSrc: WebglEnumBlendFunction.ONE,
        functionAlphaDst: WebglEnumBlendFunction.ZERO,
    },
    premultipliedAlpha: {
        enabled: true,
        equationColor: WebglEnumBlendEquation.FUNC_ADD,
        functionColorSrc: WebglEnumBlendFunction.ONE,
        functionColorDst: WebglEnumBlendFunction.ONE_MINUS_SRC_ALPHA,
        equationAlpha: WebglEnumBlendEquation.FUNC_ADD,
        functionAlphaSrc: WebglEnumBlendFunction.ONE,
        functionAlphaDst: WebglEnumBlendFunction.ZERO,
    },
}

export function webglBlendSet(context: { webglParams: WebglParams }, blend: WebglBlendOptions) {
    const p = context.webglParams
    p.blend = blend.enabled
    p.setBlendEquationSeparate(blend.equationColor, blend.equationAlpha)
    p.setBlendFuncSeparate(
        blend.functionColorSrc,
        blend.functionColorDst,
        blend.functionAlphaSrc,
        blend.functionAlphaDst,
    )
}

export function webglBlendGet(context: { webglParams: WebglParams }): WebglBlendOptions {
    const p = context.webglParams
    return {
        enabled: p.blend,
        equationAlpha: p.blendEquationAlpha,
        equationColor: p.blendEquationRGB,
        functionAlphaDst: p.blendDstAlpha,
        functionAlphaSrc: p.blendSrcAlpha,
        functionColorDst: p.blendDstRGB,
        functionColorSrc: p.blendSrcRGB,
    }
}

export function webglBlendExec(context: { webglParams: WebglParams }, blend: WebglBlendOptions, action: () => void) {
    const currentState = webglBlendGet(context)
    webglBlendSet(context, blend)
    try {
        action()
    } finally {
        webglBlendSet(context, currentState)
    }
}

export function webglDebugBlend(context: { webglParams: WebglParams }, caption = "Blend enabled:") {
    console.log(caption)
    const blend = webglBlendGet(context)
    debug([
        [caption, blend.enabled, "\n"],
        [
            { cls: "code" },
            ["gl.", blend.enabled ? "enable" : "disable", "(", highlightEnum("BLEND"), ")\n"],
            [
                "gl.blendEquationSeparate(",
                highlightEnum(blend.equationColor),
                ", ",
                highlightEnum(blend.equationAlpha),
                ")\n",
            ],
            [
                "gl.blendFuncSeparate(\n",
                ["    ", highlightEnum(blend.functionColorSrc), ",\n"],
                ["    ", highlightEnum(blend.functionColorDst), ",\n"],
                ["    ", highlightEnum(blend.functionAlphaSrc), ",\n"],
                ["    ", highlightEnum(blend.functionAlphaDst), "\n"],
                ")\n",
            ],
        ],
    ])
}
