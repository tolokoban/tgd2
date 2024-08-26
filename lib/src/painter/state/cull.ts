export type CullOptions = false | "FRONT_AND_BACK" | "FRONT" | "BACK"

export type Cull = false | number

export function toCull(
    gl: WebGL2RenderingContext,
    cull?: CullOptions
): Cull | undefined {
    if (typeof cull === "undefined" || cull === false) return cull

    return gl[cull] as number
}

export function setCull(gl: WebGL2RenderingContext, cull: Cull) {
    if (cull === false) {
        gl.disable(gl.CULL_FACE)
    } else {
        gl.enable(gl.CULL_FACE)
        gl.cullFace(cull)
    }
}

export function getCull(gl: WebGL2RenderingContext): Cull {
    if (!gl.getParameter(gl.CULL_FACE)) return false

    return gl.getParameter(gl.CULL_FACE_MODE) as number
}
