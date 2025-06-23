import { webglLookup } from "./webgl"

export function webglCreateFramebuffer(
    gl: WebGL2RenderingContext
): WebGLFramebuffer {
    const fb = gl.createFramebuffer()
    if (!fb) throw new Error("Unable to create a WebGLFramebuffer!")

    return fb
}

export function webglRenderbufferStorageMultisample(
    gl: WebGL2RenderingContext,
    samples: number,
    internalFormat: number,
    width: number,
    height: number
) {
    gl.renderbufferStorageMultisample(
        gl.RENDERBUFFER,
        samples,
        internalFormat,
        width,
        height
    )
    const error = gl.getError()
    if (error !== gl.NO_ERROR) {
        console.error(
            `WebGL Error in renderbufferStorageMultisample: ${webglLookup(
                error
            )} (${error})\n
samples:        ${samples}
internalFormat: gl.${webglLookup(internalFormat)}
width:          ${width}
height:         ${height}`,
            webglLookup(error)
        )
        const availableSamples = gl.getInternalformatParameter(
            gl.RENDERBUFFER,
            internalFormat,
            gl.SAMPLES
        )
        if (!availableSamples.includes(samples)) {
            console.error(
                `Available samples for format gl.${webglLookup(
                    internalFormat
                )} are ${JSON.stringify(
                    availableSamples
                )}, but you provided ${samples}!`
            )
        }
        return false
    }
    return true
}
