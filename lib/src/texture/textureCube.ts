import { TgdProgram } from "@tgd/program"
import { TgdTextureCubeOptions, WebglImage } from "@tgd/types"

export class TgdTextureCubeImpl {
    public readonly texture: WebGLTexture

    private _width = 0
    private _height = 0
    private numberOfImagesToLoad = 6

    constructor(
        public readonly context: {
            gl: WebGL2RenderingContext
            paint: () => void
        },
        options: TgdTextureCubeOptions
    ) {
        const { gl } = context
        const texture = gl.createTexture()
        if (!texture) throw Error("Unable to create a WebGLTexture!")

        this.texture = texture
        this.loadImage(gl.TEXTURE_CUBE_MAP_POSITIVE_X, options.imagePosX)
        this.loadImage(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, options.imageNegX)
        this.loadImage(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, options.imagePosY)
        this.loadImage(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, options.imageNegY)
        this.loadImage(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, options.imagePosZ)
        this.loadImage(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, options.imageNegZ)
    }

    delete() {
        this.context.gl.deleteTexture(this.texture)
    }

    get ready() {
        return this.numberOfImagesToLoad === 0
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    bind() {
        const { gl } = this.context
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture)
    }

    activate(unit: number, program: TgdProgram, uniformName: string) {
        if (!this.ready) return

        const { context, texture } = this
        const { gl } = context
        gl.activeTexture(gl.TEXTURE0 + unit)
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture)
        program.uniform1i(uniformName, unit)
    }

    private loadImage(target: number, image: WebglImage) {
        const { width, height } = image
        if (width !== height) {
            throw Error(
                `Images in a CubeMap must be squares, but we got ${width}×${height}!`
            )
        }
        if (this._width === 0) {
            this._width = width
            this._height = height
        } else if (this._width !== width || this._height !== height) {
            throw Error(
                `Images in a CubeMap must all have the same size, but we got ${this._width}×${this._height} and ${width}×${height}!`
            )
        }
        const { context, texture } = this
        const { gl } = context
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture)
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, image instanceof Image)
        gl.texImage2D(target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
        this.numberOfImagesToLoad--
        if (this.numberOfImagesToLoad === 0) {
            gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
            gl.texParameteri(
                gl.TEXTURE_CUBE_MAP,
                gl.TEXTURE_MIN_FILTER,
                gl.LINEAR_MIPMAP_LINEAR
            )
            context.paint()
        }
    }
}
