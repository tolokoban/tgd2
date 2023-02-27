import RefMap from "../../ref-map"
import { TgdTexture, TgdAssetImage } from "./../../types"

export interface TextureOptions {
    /**
     * Initial color to display until the asset has been loaded.
     */
    placeholder: [red: number, green: number, green: number, alpha: number]
}

export default class TextureManager {
    private readonly textures = new RefMap<string, TgdTexture>()

    constructor(private readonly gl: WebGL2RenderingContext) {}

    createFromAsset(
        asset: TgdAssetImage,
        { placeholder = [0, 0, 0, 0] }: Partial<TextureOptions> = {}
    ) {
        const { gl } = this
        const key = asset.key
        return this.textures.add(key, () => {
            const texture = gl.createTexture()
            gl.bindTexture(gl.TEXTURE_2D, texture)
            const level = 0
            const internalFormat = gl.RGBA
            const width = 1
            const height = 1
            const border = 0
            const srcFormat = gl.RGBA
            const srcType = gl.UNSIGNED_BYTE
            const pixel = new Uint8Array(placeholder)
            gl.texImage2D(
                gl.TEXTURE_2D,
                level,
                internalFormat,
                width,
                height,
                border,
                srcFormat,
                srcType,
                pixel
            )
            asset.isSuccessfullyLoaded.then(success => {
                if (!success) return

                gl.bindTexture(gl.TEXTURE_2D, texture)
                gl.texImage2D(
                    gl.TEXTURE_2D,
                    level,
                    internalFormat,
                    srcFormat,
                    srcType,
                    asset.image
                )
            })
            return {
                type: "TgdTexture",
                key,
                texture,
            }
        })
    }

    destroy({ key }: TgdTexture) {
        const texture = this.textures.delete(key)
        if (!texture) return

        this.gl.deleteTexture(texture.texture)
    }
}
