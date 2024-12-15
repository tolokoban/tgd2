import { debug, highlightEnum } from "@tgd/debug/debug"
import { WebglEnumCullFace } from "@tgd/types"

export interface WebglCullOptions {
    enabled: boolean
    cullFace: WebglEnumCullFace
}

export const webglPresetCull: Record<
    "off" | "back" | "front",
    WebglCullOptions
> = {
    off: {
        enabled: false,
        cullFace: WebglEnumCullFace.BACK,
    },
    back: {
        enabled: true,
        cullFace: WebglEnumCullFace.BACK,
    },
    front: {
        enabled: true,
        cullFace: WebglEnumCullFace.FRONT,
    },
}

export function webglCullSet(
    gl: WebGL2RenderingContext,
    cull: WebglCullOptions
) {
    if (cull.enabled) gl.enable(gl.CULL_FACE)
    else gl.disable(gl.CULL_FACE)
    gl.cullFace(cull.cullFace)
}

export function webglCullGet(gl: WebGL2RenderingContext): WebglCullOptions {
    return {
        enabled: Boolean(gl.getParameter(gl.CULL_FACE)),
        cullFace: gl.getParameter(gl.CULL_FACE_MODE) as number,
    }
}

export function webglCullExec(
    gl: WebGL2RenderingContext,
    cull: WebglCullOptions,
    action: () => void
) {
    const currentState = webglCullGet(gl)
    webglCullSet(gl, cull)
    try {
        action()
    } finally {
        webglCullSet(gl, currentState)
    }
}

export function webglDebugCull(
    gl: WebGL2RenderingContext,
    caption = "Cull test:"
) {
    console.log(caption)
    const cull = webglCullGet(gl)
    debug([
        [caption, cull.enabled, "\n"],
        [
            { cls: "code" },
            [
                "gl.",
                cull.enabled ? "enable" : "disable",
                "(",
                highlightEnum("CULL_FACE"),
                ")\n",
            ],
            ["gl.cullFace(", highlightEnum(cull.cullFace), ")\n"],
        ],
    ])
}
