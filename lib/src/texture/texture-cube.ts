import { TgdProgram } from "@tgd/program"
import { TgdTextureCubeOptions, WebglImage } from "@tgd/types"

export class TgdTextureCube {
    public readonly texture: WebGLTexture

    private _width = 0
    private _height = 0

    constructor(
        public readonly context: {
            gl: WebGL2RenderingContext
        },
        options: TgdTextureCubeOptions
    ) {
        const { gl } = context
        const texture = gl.createTexture()
        if (!texture) throw new Error("Unable to create a WebGLTexture!")

        this.texture = texture
        const flipY = gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL)
        this.loadImage(gl.TEXTURE_CUBE_MAP_POSITIVE_X, options.imagePosX)
        this.loadImage(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, options.imageNegX)
        this.loadImage(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, options.imagePosY)
        this.loadImage(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, options.imageNegY)
        this.loadImage(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, options.imagePosZ)
        this.loadImage(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, options.imageNegZ)
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY)
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
        gl.texParameteri(
            gl.TEXTURE_CUBE_MAP,
            gl.TEXTURE_MIN_FILTER,
            gl.LINEAR_MIPMAP_LINEAR
        )
    }

    delete() {
        this.context.gl.deleteTexture(this.texture)
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

    unbind() {
        const { gl } = this.context
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null)
    }

    activate(unit: number, program: TgdProgram, uniformName: string) {
        const { gl } = this.context
        gl.activeTexture(gl.TEXTURE0 + unit)
        this.bind()
        program.uniform1i(uniformName, unit)
    }

    private loadImage(
        target: number | keyof typeof TARGETS,
        image: WebglImage
    ) {
        if (typeof target === "string") {
            target = TARGETS[target]
        }
        const { width, height } = image
        if (width !== height) {
            throw new Error(
                `Images in a CubeMap must be squares, but we got ${width}×${height}!`
            )
        }
        if (this._width === 0) {
            this._width = width
            this._height = height
        } else if (this._width !== width || this._height !== height) {
            throw new Error(
                `Images in a CubeMap must all have the same size, but we got ${this._width}×${this._height} and ${width}×${height}!`
            )
        }
        const { context } = this
        const { gl } = context
        this.bind()
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, image instanceof Image)
        gl.texImage2D(target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
    }
}

const TARGETS = {
    posX: WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X,
    posY: WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Y,
    posZ: WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Z,
    negX: WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_X,
    negY: WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Y,
    negZ: WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Z,
}
