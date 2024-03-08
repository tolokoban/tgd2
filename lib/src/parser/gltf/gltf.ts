import { parseGLB } from "./parser"
import { TgdFormatGltf } from "../../types/gltf"

export class TgdParserGLTransfertFormatBinary {
    public readonly gltf: Readonly<TgdFormatGltf>

    private readonly chunks: ArrayBuffer[]
    private readonly cacheImages = new Map<
        number,
        Promise<HTMLImageElement | undefined>
    >()
    private readonly cacheImageURLs = new Map<number, string>()
    private readonly cacheBufferViewDatas = new Map<number, ArrayBuffer>()

    constructor(content: ArrayBuffer) {
        try {
            const data = parseGLB(content)
            console.log("🚀 [gltf] data.gltf = ", data.gltf) // @FIXME: Remove this line written on 2024-03-01 at 14:21
            for (const chunk of data.chunks) {
                console.log("ArrayBuffer:", chunk.byteLength)
            }
            this.gltf = data.gltf
            this.chunks = data.chunks
        } catch (ex) {
            const message =
                ex instanceof Error ? ex.message : JSON.stringify(ex)
            throw Error(`[TgdParserGLTransfertFormatBinary] ${message}`)
        }
    }

    getDataset(
        meshIndex: number,
        primitiveIndex = 0,
        attribNamesToPick?: string[]
    ) {
        const { gltf } = this
        const mesh = gltf.meshes?.[meshIndex]
        if (!mesh) return

        const primitive = mesh.primitives[primitiveIndex]
        if (!primitive) return

        const { attributes } = primitive
        const attributeNames = attribNamesToPick ?? Object.keys(attributes)
    }

    async loadImage(imageIndex: number): Promise<HTMLImageElement | undefined> {
        const fromCache = this.cacheImages.get(imageIndex)
        if (fromCache) return fromCache

        const url = this.getImageURL(imageIndex)
        if (!url) return

        const promise = new Promise<HTMLImageElement | undefined>(resolve => {
            const img = new Image()
            img.src = url
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                resolve(undefined)
            }
        })
        this.cacheImages.set(imageIndex, promise)
        return promise
    }

    getImageURL(imageIndex: number): string | undefined {
        const fromCache = this.cacheImageURLs.get(imageIndex)
        if (fromCache) return fromCache

        const { gltf } = this
        const image = gltf.images?.[imageIndex]
        if (!image) return

        const buffer = this.getBufferViewData(image.bufferView)
        if (!buffer) return

        const blob = new Blob([buffer], {
            type: image.mimeType,
        })
        const url = URL.createObjectURL(blob)
        this.cacheImageURLs.set(imageIndex, url)
        return url
    }

    getBufferViewData(bufferViewIndex: number): ArrayBuffer | undefined {
        const fromCache = this.cacheBufferViewDatas.get(bufferViewIndex)
        if (fromCache) return fromCache

        const { gltf } = this
        const bufferView = gltf.bufferViews?.[bufferViewIndex]
        if (!bufferView) return

        const buffer = this.chunks[bufferView.buffer]
        const data = buffer.slice(
            bufferView.byteOffset,
            bufferView.byteOffset + bufferView.byteLength
        )
        this.cacheBufferViewDatas.set(bufferViewIndex, data)
        return data
    }
}
