import { debug, highlightEnum } from "@tgd/debug"
import { WebglEnumStencilFunction, WebglEnumStencilOperation } from "@tgd/types"

export interface WebglStencilOptions {
    enabled: boolean
    functionBack: WebglEnumStencilFunction
    functionBackMask: number
    functionBackRef: number
    functionFront: WebglEnumStencilFunction
    functionFrontMask: number
    functionFrontRef: number
    operationBack1FailStencil: WebglEnumStencilOperation
    operationBack2FailDepth: WebglEnumStencilOperation
    operationBack3Pass: WebglEnumStencilOperation
    operationFront1FailStencil: WebglEnumStencilOperation
    operationFront2FailDepth: WebglEnumStencilOperation
    operationFront3Pass: WebglEnumStencilOperation
}

export const webglPresetStencil: Readonly<
    Record<"off" | "write1" | "paintIf0" | "paintIf1", WebglStencilOptions>
> = {
    off: {
        enabled: false,
        functionBack: WebglEnumStencilFunction.ALWAYS,
        functionBackMask: 0,
        functionBackRef: 0,
        functionFront: WebglEnumStencilFunction.ALWAYS,
        functionFrontMask: 0,
        functionFrontRef: 0,
        operationBack1FailStencil: WebglEnumStencilOperation.KEEP,
        operationBack2FailDepth: WebglEnumStencilOperation.KEEP,
        operationBack3Pass: WebglEnumStencilOperation.KEEP,
        operationFront1FailStencil: WebglEnumStencilOperation.KEEP,
        operationFront2FailDepth: WebglEnumStencilOperation.KEEP,
        operationFront3Pass: WebglEnumStencilOperation.KEEP,
    },
    /** Set the stencil to 1 behinf each fragment. */
    write1: {
        enabled: true,
        functionBack: WebglEnumStencilFunction.ALWAYS,
        functionBackMask: 0xff,
        functionBackRef: 1,
        functionFront: WebglEnumStencilFunction.ALWAYS,
        functionFrontMask: 0xff,
        functionFrontRef: 1,
        operationBack1FailStencil: WebglEnumStencilOperation.KEEP,
        operationBack2FailDepth: WebglEnumStencilOperation.KEEP,
        operationBack3Pass: WebglEnumStencilOperation.KEEP,
        operationFront1FailStencil: WebglEnumStencilOperation.KEEP,
        operationFront2FailDepth: WebglEnumStencilOperation.KEEP,
        operationFront3Pass: WebglEnumStencilOperation.REPLACE,
    },
    /** Paint only if the stencil is equal to 1 */
    paintIf1: {
        enabled: true,
        functionBack: WebglEnumStencilFunction.ALWAYS,
        functionBackMask: 0,
        functionBackRef: 0,
        functionFront: WebglEnumStencilFunction.EQUAL,
        functionFrontMask: 0x01,
        functionFrontRef: 1,
        operationBack1FailStencil: WebglEnumStencilOperation.KEEP,
        operationBack2FailDepth: WebglEnumStencilOperation.KEEP,
        operationBack3Pass: WebglEnumStencilOperation.KEEP,
        operationFront1FailStencil: WebglEnumStencilOperation.KEEP,
        operationFront2FailDepth: WebglEnumStencilOperation.KEEP,
        operationFront3Pass: WebglEnumStencilOperation.KEEP,
    },
    /** Paint only if the stencil is equal to 0 */
    paintIf0: {
        enabled: true,
        functionBack: WebglEnumStencilFunction.ALWAYS,
        functionBackMask: 0,
        functionBackRef: 0,
        functionFront: WebglEnumStencilFunction.EQUAL,
        functionFrontMask: 0x01,
        functionFrontRef: 0,
        operationBack1FailStencil: WebglEnumStencilOperation.KEEP,
        operationBack2FailDepth: WebglEnumStencilOperation.KEEP,
        operationBack3Pass: WebglEnumStencilOperation.KEEP,
        operationFront1FailStencil: WebglEnumStencilOperation.KEEP,
        operationFront2FailDepth: WebglEnumStencilOperation.KEEP,
        operationFront3Pass: WebglEnumStencilOperation.KEEP,
    },
}

export function webglStencilSet(
    gl: WebGL2RenderingContext,
    stencil: WebglStencilOptions
) {
    if (!stencil.enabled) {
        gl.disable(gl.STENCIL_TEST)
    } else {
        gl.enable(gl.STENCIL_TEST)
        gl.stencilFuncSeparate(
            gl.FRONT,
            stencil.functionFront,
            stencil.functionFrontRef,
            stencil.functionFrontMask
        )
        gl.stencilFuncSeparate(
            gl.BACK,
            stencil.functionBack,
            stencil.functionBackRef,
            stencil.functionBackMask
        )
        gl.stencilOpSeparate(
            gl.FRONT,
            stencil.operationFront1FailStencil,
            stencil.operationFront2FailDepth,
            stencil.operationFront3Pass
        )
        gl.stencilOpSeparate(
            gl.BACK,
            stencil.operationBack1FailStencil,
            stencil.operationBack2FailDepth,
            stencil.operationBack3Pass
        )
    }
}

export function webglStencilGet(
    gl: WebGL2RenderingContext
): WebglStencilOptions {
    const enabled = Boolean(gl.getParameter(gl.STENCIL_TEST))
    if (!enabled) return { ...webglPresetStencil.off }

    return {
        enabled,
        functionFront: gl.getParameter(
            gl.STENCIL_FUNC
        ) as WebglEnumStencilFunction,
        functionFrontMask: gl.getParameter(gl.STENCIL_VALUE_MASK) as number,
        functionFrontRef: gl.getParameter(gl.STENCIL_REF) as number,
        functionBack: gl.getParameter(
            gl.STENCIL_BACK_FUNC
        ) as WebglEnumStencilFunction,
        functionBackMask: gl.getParameter(gl.STENCIL_BACK_VALUE_MASK) as number,
        functionBackRef: gl.getParameter(gl.STENCIL_BACK_REF) as number,
        operationFront1FailStencil: gl.getParameter(
            gl.STENCIL_FAIL
        ) as WebglEnumStencilOperation,
        operationFront2FailDepth: gl.getParameter(
            gl.STENCIL_PASS_DEPTH_FAIL
        ) as WebglEnumStencilOperation,
        operationFront3Pass: gl.getParameter(
            gl.STENCIL_PASS_DEPTH_PASS
        ) as WebglEnumStencilOperation,
        operationBack1FailStencil: gl.getParameter(
            gl.STENCIL_BACK_FAIL
        ) as WebglEnumStencilOperation,
        operationBack2FailDepth: gl.getParameter(
            gl.STENCIL_BACK_PASS_DEPTH_FAIL
        ) as WebglEnumStencilOperation,
        operationBack3Pass: gl.getParameter(
            gl.STENCIL_BACK_PASS_DEPTH_PASS
        ) as WebglEnumStencilOperation,
    }
}

export function webglStencilExec(
    gl: WebGL2RenderingContext,
    stencil: WebglStencilOptions,
    action: () => void
) {
    const currentState = webglStencilGet(gl)
    webglStencilSet(gl, stencil)
    try {
        action()
    } finally {
        webglStencilSet(gl, currentState)
    }
}

export function webglDebugStencil(
    gl: WebGL2RenderingContext,
    caption = "Stencil test:"
) {
    console.log(caption)
    const stencil = webglStencilGet(gl)
    debug([caption, stencil.enabled])
    if (!stencil.enabled) {
        debug([{ cls: "code" }, [`gl.disable(`, highlightEnum("STENCIL_TEST")]])
    } else {
        debug([
            { cls: "code" },
            [`gl.enable(`, highlightEnum("STENCIL_TEST")],
            [
                "gl.stencilFuncSeparate(",
                highlightEnum("FRONT"),
                ", ",
                highlightEnum(stencil.functionFront),
                `, ${stencil.functionFrontRef}, ${stencil.functionFrontMask})`,
            ],
            [
                "gl.stencilFuncSeparate(",
                highlightEnum("BACK"),
                ", ",
                highlightEnum(stencil.functionBack),
                `, ${stencil.functionBackRef}, ${stencil.functionBackMask})`,
            ],
            [
                "gl.stencilOpSeparate(",
                highlightEnum("FRONT"),
                ", ",
                highlightEnum(stencil.operationFront1FailStencil),
                ", ",
                highlightEnum(stencil.operationFront2FailDepth),
                ", ",
                highlightEnum(stencil.operationFront3Pass),
                ")",
            ],
            [
                "gl.stencilOpSeparate(",
                highlightEnum("BACK"),
                ", ",
                highlightEnum(stencil.operationBack1FailStencil),
                ", ",
                highlightEnum(stencil.operationBack2FailDepth),
                ", ",
                highlightEnum(stencil.operationBack3Pass),
                ")",
            ],
        ])
    }
}
