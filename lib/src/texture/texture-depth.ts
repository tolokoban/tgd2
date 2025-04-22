import { TgdEvent } from "@tgd/event"
import { TgdProgram } from "@tgd/program"

interface TgdTextureDepthStorage {
    width: number
    height: number
    type: "DEPTH_COMPONENT24" | "DEPTH_COMPONENT16" | "DEPTH_COMPONENT32F"
}

export class TgdTextureDepth {
    public readonly name: string
    public readonly gl: WebGL2RenderingContext
    public readonly eventChange = new TgdEvent<TgdTextureDepth>()

    private readonly _texture: WebGLTexture | null = null
    private _width = 0
    private _height = 0

    private static counter = 0

    constructor(
        context: { gl: WebGL2RenderingContext },
        options: Partial<TgdTextureDepthStorage> & {
            width: number
            height: number
        }
    ) {
        const { gl } = context
        this.gl = gl
        this.name = `TextureDepth/${TgdTextureDepth.counter++}`
        const texture = gl.createTexture()
        if (!texture) throw new Error("Unable to create a WebGLTexture!")

        this._texture = texture
        console.log("🚀 [texture-depth] options =", options) // @FIXME: Remove this line written on 2025-04-18 at 14:30
        // this.setParams({
        //     magFilter: "NEAREST",
        //     minFilter: "NEAREST",
        //     wrapS: "REPEAT",
        //     wrapT: "REPEAT",
        //     wrapR: "REPEAT",
        // })
        // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.storage.flipY)
        // gl.pixelStorei(
        //     gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        //     this.storage.premultipliedAlpha
        // )
    }

    delete() {
        this.gl.deleteTexture(this.glTexture)
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    get glTexture(): WebGLTexture {
        if (this._texture) return this._texture

        throw new Error(`Texture "${this.name}" has been deleted!`)
    }

    bind() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.glTexture)
    }

    /**
     *
     * @param unit Unit to link the texture to
     * @param program The program that owns the uniform to update
     * @param uniformName The uniform that hold the texture
     */
    activate(unit: number, program?: TgdProgram, uniformName?: string) {
        const { gl } = this
        gl.activeTexture(gl.TEXTURE0 + unit)
        this.bind()
        if (program && uniformName) {
            program.uniform1i(uniformName, unit)
        }
        return this
    }
}
