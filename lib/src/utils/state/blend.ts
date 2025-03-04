import { debug, highlightEnum } from "@tgd/debug/debug"
import { WebglEnumBlendEquation, WebglEnumBlendFunc } from "@tgd/types"

export interface WebglBlendOptions {
    enabled: boolean
    equationColor: WebglEnumBlendEquation
    equationAlpha: WebglEnumBlendEquation
    functionColorSrc: WebglEnumBlendFunc
    functionColorDst: WebglEnumBlendFunc
    functionAlphaSrc: WebglEnumBlendFunc
    functionAlphaDst: WebglEnumBlendFunc
}

export const webglPresetBlend: Readonly<
    Record<"off" | "alpha", WebglBlendOptions>
> = {
    off: {
        enabled: false,
        equationColor: WebglEnumBlendEquation.FUNC_ADD,
        equationAlpha: WebglEnumBlendEquation.FUNC_ADD,
        functionColorSrc: WebglEnumBlendFunc.SRC_ALPHA,
        functionColorDst: WebglEnumBlendFunc.ONE_MINUS_SRC_ALPHA,
        functionAlphaSrc: WebglEnumBlendFunc.ONE,
        functionAlphaDst: WebglEnumBlendFunc.ZERO,
    },
    alpha: {
        enabled: true,
        equationColor: WebglEnumBlendEquation.FUNC_ADD,
        equationAlpha: WebglEnumBlendEquation.FUNC_ADD,
        functionColorSrc: WebglEnumBlendFunc.SRC_ALPHA,
        functionColorDst: WebglEnumBlendFunc.ONE_MINUS_SRC_ALPHA,
        functionAlphaSrc: WebglEnumBlendFunc.ONE,
        functionAlphaDst: WebglEnumBlendFunc.ZERO,
    },
}

export function webglBlendSet(
    gl: WebGL2RenderingContext,
    blend: WebglBlendOptions
) {
    console.log("🚀 [blend] blend = ", blend) // @FIXME: Remove this line written on 2025-02-24 at 19:18
    if (blend.enabled) gl.enable(gl.BLEND)
    else gl.disable(gl.BLEND)
    gl.blendEquationSeparate(blend.equationColor, blend.equationAlpha)
    gl.blendFuncSeparate(
        blend.functionColorSrc,
        blend.functionColorDst,
        blend.functionAlphaSrc,
        blend.functionAlphaDst
    )
}

export function webglBlendGet(gl: WebGL2RenderingContext): WebglBlendOptions {
    return {
        enabled: Boolean(gl.getParameter(gl.BLEND)),
        equationAlpha: gl.getParameter(gl.BLEND_EQUATION_ALPHA) as number,
        equationColor: gl.getParameter(gl.BLEND_EQUATION_RGB) as number,
        functionAlphaDst: gl.getParameter(gl.BLEND_DST_ALPHA) as number,
        functionAlphaSrc: gl.getParameter(gl.BLEND_SRC_ALPHA) as number,
        functionColorDst: gl.getParameter(gl.BLEND_DST_RGB) as number,
        functionColorSrc: gl.getParameter(gl.BLEND_SRC_ALPHA) as number,
    }
}

export function webglBlendExec(
    gl: WebGL2RenderingContext,
    blend: WebglBlendOptions,
    action: () => void
) {
    const currentState = webglBlendGet(gl)
    webglBlendSet(gl, blend)
    try {
        action()
    } finally {
        webglBlendSet(gl, currentState)
    }
}

export function webglDebugBlend(
    gl: WebGL2RenderingContext,
    caption = "Blend enabled:"
) {
    console.log(caption)
    const blend = webglBlendGet(gl)
    debug([
        [caption, blend.enabled, "\n"],
        [
            { cls: "code" },
            [
                "gl.",
                blend.enabled ? "enable" : "disable",
                "(",
                highlightEnum("BLEND"),
                ")\n",
            ],
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
