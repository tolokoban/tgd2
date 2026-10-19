import type { TgdContext } from "@tgd/context"
import { TgdTexture2D } from "@tgd/texture"
import { webglCreateFramebuffer, webglLookup } from "@tgd/utils"

/**
 * Ping-pong between two textures for the intermediate passes of a {@link TgdPainterFilter}.
 *
 * The input texture is only read: the passes are painted into two textures owned by this object,
 * so a static input (an image, for instance) is never overwritten.
 * These textures are created at the first intermediate pass, so a single filter costs nothing.
 */
export class Framebuffers {
    /** Texture to read in the current pass. */
    private source: TgdTexture2D
    private targets: { texture: TgdTexture2D; framebuffer: WebGLFramebuffer }[] = []
    /** Index in `targets` of the next texture to paint into. */
    private targetIndex = 0

    constructor(
        public readonly context: TgdContext,
        private readonly textureInput: TgdTexture2D,
    ) {
        if (textureInput.width < 1 || textureInput.height < 1) {
            textureInput.resize(1, 1)
        }
        this.source = textureInput
    }

    /** Texture to read in the current pass. */
    get texture() {
        return this.source
    }

    /**
     * Must be called before the first pass of each paint.
     */
    reset() {
        this.source = this.textureInput
    }

    /**
     * Paint a pass in one of the owned textures, which becomes the source of the next pass.
     */
    paint(action: () => void): TgdTexture2D {
        const { context, textureInput } = this
        const { width, height } = textureInput
        const target = this.getTarget()
        target.texture.resize(width, height)
        const { gl } = context
        const currentFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING)
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.framebuffer)
        const viewport = context.webglParams.viewport
        gl.viewport(0, 0, width, height)
        action()
        context.webglParams.viewport = viewport
        gl.bindFramebuffer(gl.FRAMEBUFFER, currentFramebuffer)
        this.source = target.texture
        this.targetIndex = 1 - this.targetIndex
        return target.texture
    }

    delete() {
        const { gl } = this.context
        for (const { texture, framebuffer } of this.targets) {
            gl.deleteFramebuffer(framebuffer)
            texture.delete()
        }
        this.targets = []
        this.source = this.textureInput
    }

    private getTarget() {
        if (this.targets.length === 0) {
            this.targets = [this.createTarget("A"), this.createTarget("B")]
        }
        return this.targets[this.targetIndex]
    }

    private createTarget(suffix: string) {
        const { context, textureInput } = this
        const texture = new TgdTexture2D(context, {
            name: `${textureInput.name}/filter${suffix}`,
            storage: { format: textureInput.format },
            params: {
                magFilter: "LINEAR",
                minFilter: "LINEAR",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        texture.resize(Math.max(1, textureInput.width), Math.max(1, textureInput.height))
        return { texture, framebuffer: createFB(context, texture) }
    }
}

function createFB({ gl, console }: TgdContext, texture: TgdTexture2D): WebGLFramebuffer {
    const currentFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING)
    const fb = webglCreateFramebuffer(gl)
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture.glTexture, 0)
    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
    if (status !== gl.FRAMEBUFFER_COMPLETE) {
        console.error(`[TgdPainterFilter] Your Framebuffer is incomplete: ${webglLookup(status)}!`)
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, currentFramebuffer)
    return fb
}
