export function webglCreateFramebuffer(
    gl: WebGL2RenderingContext
): WebGLFramebuffer {
    const fb = gl.createFramebuffer()
    if (!fb) throw new Error("Unable to create a WebGLFramebuffer!")

    return fb
}
