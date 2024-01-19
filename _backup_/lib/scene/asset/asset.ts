import { TgdTypeAssetImage } from "@/types"
import RefMap from "@/ref-map"

export default class Asset {
    private readonly images = new RefMap<string, TgdTypeAssetImage>()

    createImage(src: string): TgdTypeAssetImage {
        const key = src
        return this.images.add(key, () => {
            const image = new Image()
            image.loading = "eager"
            return {
                type: "TgdAssetImage",
                key,
                image,
                isSuccessfullyLoaded: new Promise(resolve => {
                    image.src = src
                    image.onload = () => resolve(true)
                    image.onerror = () => resolve(false)
                }),
            }
        })
    }

    destroyImage(asset: TgdTypeAssetImage) {
        this.images.delete(asset.key)
    }
}
