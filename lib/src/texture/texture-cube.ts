import { TgdColor } from "@tgd/color"
import type { TgdContext } from "@tgd/context"
import { tgdLoadImage } from "@tgd/loader"
import type { TgdVec4 } from "@tgd/math"
import type { TgdProgram } from "@tgd/program"
import type { ArrayNumber4, TgdTextureCubeOptions, WebglImage } from "@tgd/types"
import { tgdCanvasCreateFill } from "@tgd/utils"

export class TgdTextureCube {
    public static lazyLoad(
        context: TgdContext,
        {
            size,
            initialColor,
            name,
            posX,
            posY,
            posZ,
            negX,
            negY,
            negZ,
        }: {
            size: number
            initialColor?: ArrayNumber4 | TgdVec4 | TgdColor | string
            name?: string
            posX: string
            posY: string
            posZ: string
            negX: string
            negY: string
            negZ: string
        },
    ): TgdTextureCube {
        const color = new TgdColor(initialColor ?? "#888").toString()
        const canvas = tgdCanvasCreateFill(size, size, color)
        const texture = new TgdTextureCube(context, {
            name,
            imagePosX: canvas,
            imagePosY: canvas,
            imagePosZ: canvas,
            imageNegX: canvas,
            imageNegY: canvas,
            imageNegZ: canvas,
        })
        for (const [target, url] of [
            ["posX", posX],
            ["posY", posY],
            ["posZ", posZ],
            ["negX", negX],
            ["negY", negY],
            ["negZ", negZ],
        ]) {
            tgdLoadImage(url).then((image) => {
                if (!image) {
                    context.console.error(
                        `Unable to lazy load image for target "${target}" in texture "${texture.name}": ${url}`,
                    )
                    return
                }
                if (image.width !== image.height || image.width !== size) {
                    context.console.error(
                        `Unable to lazy load image for target "${target}" in texture "${texture.name}": we were expecting a size of ${size}×${size}, but we got ${image.width}×${image.height}!`,
                    )
                    return
                }
                texture.loadImage(TARGETS[target], image)
                context.paint()
            })
        }
        return texture
    }

    private static ID = 1

    public name: string
    public readonly texture: WebGLTexture

    private _width = 0
    private _height = 0

    constructor(
        public readonly context: TgdContext,
        options: TgdTextureCubeOptions,
    ) {
        const { gl } = context
        const texture = gl.createTexture()
        if (!texture) throw new Error("Unable to create a WebGLTexture!")

        this.name = options.name ?? `TgdTextureCube/${TgdTextureCube.ID++}`
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
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
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

    private loadImage(target: number | keyof typeof TARGETS, image: WebglImage) {
        if (typeof target === "string") {
            target = TARGETS[target]
        }
        const { width, height } = image
        if (width !== height) {
            throw new Error(`Images in a CubeMap must be squares, but we got ${width}×${height}!`)
        }
        if (this._width === 0) {
            this._width = width
            this._height = height
        } else if (this._width !== width || this._height !== height) {
            throw new Error(
                `Images in a CubeMap must all have the same size, but we got ${this._width}×${this._height} and ${width}×${height}!`,
            )
        }
        const { context } = this
        const { gl } = context
        this.bind()
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, image instanceof Image)
        try {
            gl.texImage2D(target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
            context.checkError(`[TgdTextureCube.loadImage] ${this.name}`, () => {
                context.console.log("image =", image)
            })
            gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
            context.paint()
        } catch (error) {
            context.console.error(error)
            context.console.log("image =", image)
            context.console.log("target =", context.lookupWebglConstant(target))
        }
    }
}

const TARGETS: Record<string, number> = {
    posX: WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X,
    posY: WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Y,
    posZ: WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Z,
    negX: WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_X,
    negY: WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Y,
    negZ: WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Z,
}
