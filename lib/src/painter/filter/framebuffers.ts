import { TgdContext, TgdTexture2D, webglCreateFramebuffer, webglLookup } from "@tolokoban/tgd"

export class Framebuffers {
    private readonly textures: [TgdTexture2D, TgdTexture2D]
    private readonly framebuffers: [WebGLFramebuffer, WebGLFramebuffer]
    private readonly textureToDelete: TgdTexture2D

    constructor(
        public readonly context: TgdContext,
        private readonly textureInput: TgdTexture2D,
    ) {
        if (textureInput.width < 1 || textureInput.height < 1) {
            textureInput.resize(1, 1)
        }
        const textureOutput = textureInput.clone("Back Texture")
        this.textureToDelete = textureOutput
        this.textures = [textureInput, textureOutput]
        this.framebuffers = [createFB(context, textureInput), createFB(context, textureOutput)]
    }

    get texture() {
        return this.textures[0]
    }

    clear() {
        const { gl } = this.context
        const fb = this.framebuffers[1]
        const currentFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING)
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb)
        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.bindFramebuffer(gl.FRAMEBUFFER, currentFramebuffer)
    }

    paint(action: () => void): TgdTexture2D {
        const { context, textureInput, textureToDelete } = this
        const { width, height } = textureInput
        textureToDelete.resize(width, height)
        const { gl } = context
        const fb = this.framebuffers[1]
        const currentFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING)
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb)
        const viewport = context.webglParams.viewport
        gl.viewport(0, 0, width, height)
        action()
        context.webglParams.viewport = viewport
        gl.bindFramebuffer(gl.FRAMEBUFFER, currentFramebuffer)
        this.swap()
        return this.textures[0]
    }

    swap() {
        swap(this.framebuffers)
        swap(this.textures)
    }

    delete() {
        this.textureToDelete.delete()
        for (const fb of this.framebuffers) {
            this.context.gl.deleteFramebuffer(fb)
        }
    }
}

function createFB({ gl }: TgdContext, texture: TgdTexture2D): WebGLFramebuffer {
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

function swap<T>(arr: [T, T]): [T, T] {
    const [temp] = arr
    arr[0] = arr[1]
    arr[1] = temp
    return arr
}
