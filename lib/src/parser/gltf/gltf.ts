import { TgdDataset } from "@tgd/dataset"
import { parseGLB } from "./parser"
import {
    TgdFormatGltf,
    TgdFormatGltfAccessor,
    TgdFormatGltfMaterial,
    TgdFormatGltfMesh,
    TgdFormatGltfMeshPrimitive,
    TgdFormatGltfNode,
    TgdFormatGltfScene,
} from "@tgd/types/gltf"
import { TgdMeshData, TgdTexture2DOptions } from "@tgd/types"
import { webglLookup, webglTypedArrayFromBufferSource } from "@tgd/utils"

export class TgdParserGLTransfertFormatBinary {
    public readonly gltf: Readonly<TgdFormatGltf>

    private readonly chunks: ArrayBuffer[]
    private readonly cacheImages = new Map<
        number,
        Promise<HTMLImageElement | undefined>
    >()
    private readonly cacheImageURLs = new Map<number, string>()
    private readonly cacheBufferViewDatas = new Map<
        number,
        | Int8Array
        | Uint8Array
        | Int16Array
        | Uint16Array
        | Uint32Array
        | Float32Array
    >()

    constructor(content: ArrayBuffer) {
        try {
            const data = parseGLB(content)
            this.gltf = data.gltf
            this.chunks = data.chunks
        } catch (ex) {
            const message =
                ex instanceof Error ? ex.message : JSON.stringify(ex)
            throw Error(`[TgdParserGLTransfertFormatBinary] ${message}`)
        }
    }

    getScenes(): TgdFormatGltfScene[] {
        return this.gltf.scenes ?? []
    }

    getScene(sceneIndex: number): TgdFormatGltfScene {
        const scene = this.gltf.scenes?.[sceneIndex]
        if (!scene) {
            throw Error(`Asset has no scene with index #${sceneIndex}!`)
        }

        return scene
    }

    getNode(nodeIndex: number): TgdFormatGltfNode {
        const node = this.gltf.nodes?.[nodeIndex]
        if (!node) {
            throw Error(`Asset has no node with index #${nodeIndex}!`)
        }

        return node
    }

    getAccessor(accessorIndex = 0): TgdFormatGltfAccessor {
        const accessor = this.gltf.accessors?.[accessorIndex]
        if (!accessor) {
            throw Error(`Asset has no accessor with index #${accessorIndex}!`)
        }

        return accessor
    }

    getMaterial(materialIndex: number): TgdFormatGltfMaterial {
        const material = this.gltf.materials?.[materialIndex]
        if (!material) {
            throw Error(`Asset has no material with index #${materialIndex}!`)
        }

        return material
    }

    getMesh(meshIndex = 0): TgdFormatGltfMesh {
        const mesh = this.gltf.meshes?.[meshIndex]
        if (!mesh) {
            throw Error(`Asset has no mesh with index #${meshIndex}!`)
        }

        return mesh
    }

    getMeshPrimitive(
        meshIndex = 0,
        primitiveIndex = 0
    ): {
        attributes: Record<string, number>
        indices?: number
        mode?: number
        material?: number
    } {
        const mesh = this.getMesh(meshIndex)
        const primitive = mesh.primitives[primitiveIndex]
        if (!primitive) {
            throw Error(
                `Asset has no primitive #${primitiveIndex} in mesh #${meshIndex}!`
            )
        }

        return primitive
    }

    getMeshPrimitiveIndices(
        meshIndex = 0,
        primitiveIndex = 0
    ): { type: number; buff: BufferSource; elemCount: number } {
        const primitive = this.getMeshPrimitive(meshIndex, primitiveIndex)
        const accessor = this.getAccessor(primitive.indices ?? 0)
        const buffer = this.getBufferViewData(
            accessor.bufferView ?? 0,
            accessor.componentType
        )
        return {
            type: accessor.componentType,
            buff: buffer,
            elemCount: accessor.count,
        }
    }

    getAccessorByAttributeName(
        primitive: TgdFormatGltfMeshPrimitive,
        attribName: string
    ): TgdFormatGltfAccessor {
        const { attributes } = primitive
        if (!attributes || Object.keys(attributes).length === 0)
            throw Error("No attributes found!")
        const accessorIndex = attributes[attribName]
        if (typeof accessorIndex !== "number") {
            throw Error(
                `No attribute with name "${attribName}"!\nAvailable names are: ${Object.keys(
                    attributes
                )
                    .map(name => JSON.stringify(name))
                    .join(", ")}.`
            )
        }
        try {
            return this.getAccessor(accessorIndex)
        } catch (ex) {
            const msg = ex instanceof Error ? ex.message : JSON.stringify(ex)
            throw Error(
                `Attribute "${attribName}" pointed to an inexisting accessor!\n${msg}`
            )
        }
    }

    getTexture2DOptions(textureIndex: number): TgdTexture2DOptions {
        const texture = this.gltf.textures?.[textureIndex]
        if (!texture) {
            throw Error(`Asset has no texture with index #${textureIndex}!`)
        }

        const source =
            texture.source ?? texture.extensions?.EXT_texture_webp?.source ?? 0
        const url = this.getImageURL(source)
        const options: TgdTexture2DOptions = {
            image: url,
        }
        return options
    }

    async loadImage(imageIndex: number): Promise<HTMLImageElement | undefined> {
        const fromCache = this.cacheImages.get(imageIndex)
        if (fromCache) return fromCache

        const url = this.getImageURL(imageIndex)
        if (!url) return

        const promise = new Promise<HTMLImageElement | undefined>(
            (resolve, reject) => {
                const img = new Image()
                img.src = url
                img.onload = () => {
                    resolve(img)
                }
                img.onerror = () => {
                    console.error(
                        `Unable to load image #${imageIndex}!`,
                        this.gltf.images?.[imageIndex]
                    )
                    reject()
                }
            }
        )
        this.cacheImages.set(imageIndex, promise)
        return promise
    }

    getImageURL(imageIndex: number): string | undefined {
        const fromCache = this.cacheImageURLs.get(imageIndex)
        if (fromCache) return fromCache

        const { gltf } = this
        const image = gltf.images?.[imageIndex]
        if (!image) return

        if (image.uri) return image.uri

        if (typeof image.bufferView !== "number") return
        const buffer = this.getBufferViewData(image.bufferView, "Uint8")
        if (!buffer) return

        const blob = new Blob([buffer], {
            type: image.mimeType,
        })
        const url = URL.createObjectURL(blob)
        this.cacheImageURLs.set(imageIndex, url)
        return url
    }

    getBufferViewData(
        accessor: TgdFormatGltfAccessor
    ):
        | Int8Array
        | Uint8Array
        | Int16Array
        | Uint16Array
        | Uint32Array
        | Float32Array
    getBufferViewData(
        bufferViewIndex: number,
        type:
            | number
            | "Int8"
            | "Uint8"
            | "Int16"
            | "Uint16"
            | "Uint32"
            | "Float32"
    ):
        | Int8Array
        | Uint8Array
        | Int16Array
        | Uint16Array
        | Uint32Array
        | Float32Array
    getBufferViewData(
        arg: TgdFormatGltfAccessor | number,
        type:
            | number
            | "Int8"
            | "Uint8"
            | "Int16"
            | "Uint16"
            | "Uint32"
            | "Float32" = "Float32"
    ):
        | Int8Array
        | Uint8Array
        | Int16Array
        | Uint16Array
        | Uint32Array
        | Float32Array {
        if (typeof arg !== "number") {
            return this.getBufferViewData(
                arg.bufferView ?? 0,
                arg.componentType
            )
        }
        const bufferViewIndex = arg
        const fromCache = this.cacheBufferViewDatas.get(bufferViewIndex)
        if (fromCache) return fromCache

        const { gltf } = this
        const bufferView = gltf.bufferViews?.[bufferViewIndex]
        if (!bufferView)
            throw Error(`No bufferView with index #${bufferViewIndex}!`)

        const buffer = this.chunks[bufferView.buffer]
        const byteOffset = bufferView.byteOffset ?? 0
        const data = buffer.slice(
            byteOffset,
            byteOffset + bufferView.byteLength
        )
        const view = figureOutView(data, convertTypeToNumber(type))
        this.cacheBufferViewDatas.set(bufferViewIndex, view)
        return view
    }

    setAttrib(
        dataset: TgdDataset,
        attribName: string,
        meshIndex = 0,
        primitiveIndex = 0,
        primitiveAttribName?: string
    ) {
        const { gltf } = this
        const accessorIndex =
            gltf.meshes?.[meshIndex].primitives[primitiveIndex].attributes[
                primitiveAttribName ?? attribName
            ] ?? -1
        const accessor = gltf.accessors?.[accessorIndex]
        if (!accessor) {
            throw Error(
                `No attribute "${
                    primitiveAttribName ?? attribName
                }" for primitive #${primitiveIndex} of mesh #${meshIndex}!`
            )
        }

        const bufferViewIndex = accessor.bufferView ?? 0
        const bufferView = gltf.bufferViews?.[bufferViewIndex]
        if (!bufferView) {
            throw Error(`No bufferView with index #${bufferViewIndex}!`)
        }
        const view = this.getBufferViewData(
            bufferViewIndex,
            accessor.componentType
        )
        dataset.set(attribName, view, {
            byteStride: bufferView.byteStride,
            byteOffset: accessor.byteOffset,
            count: accessor.count,
        })
    }

    parseAsMeshData(
        content: string,
        {
            computeNormals,
            meshIndex = 0,
            primitiveIndex = 0,
            attPositionName = "POSITION",
            attNormalName = "NORMAL",
            attTextureCoordsName = "TEXCOORD_0",
        }: {
            computeNormals?: boolean
            meshIndex?: number
            primitiveIndex?: number
            attPositionName?: string
            attNormalName?: string
            attTextureCoordsName?: string
        } = {}
    ): TgdMeshData {
        const mesh = this.getMesh(meshIndex)
        const primitive = this.getMeshPrimitive(meshIndex, primitiveIndex)
        try {
            const { attributes } = primitive
            if (!attributes) throw Error("No attributes found!")
            const indices = this.getMeshPrimitiveIndices(
                meshIndex,
                primitiveIndex
            )
            const elements = webglTypedArrayFromBufferSource(
                indices.buff,
                indices.type
            )
            if (
                !(
                    elements instanceof Uint8Array ||
                    elements instanceof Uint16Array ||
                    elements instanceof Uint32Array
                )
            ) {
                throw Error(
                    `Unable to deal with the type of the indices: ${webglLookup(
                        indices.type
                    )}`
                )
            }
            const data: TgdMeshData = {
                name: mesh.name,
                count: indices.elemCount,
                elements,
                attPosition: returnFloat32Array(
                    this.getBufferViewData(
                        this.getAccessorByAttributeName(
                            primitive,
                            attPositionName
                        )
                    )
                ),
            }
            if (typeof attributes[attNormalName] === "number") {
                data.attNormal = returnFloat32Array(
                    this.getBufferViewData(
                        this.getAccessorByAttributeName(
                            primitive,
                            attNormalName
                        )
                    )
                )
            }
            if (typeof attributes[attTextureCoordsName] === "number") {
                data.attNormal = returnFloat32Array(
                    this.getBufferViewData(
                        this.getAccessorByAttributeName(
                            primitive,
                            attTextureCoordsName
                        )
                    )
                )
            }
            // @TODO: compute normals if asked.
            return data
        } catch (ex) {
            const msg = ex instanceof Error ? ex.message : JSON.stringify(ex)
            throw Error(
                `Error in primitive #${primitiveIndex} of mesh #${meshIndex}:\n${msg}`
            )
        }
    }
}

function figureOutView(data: ArrayBuffer, componentType: number) {
    switch (componentType) {
        case 5120:
            return new Int8Array(data)
        case 5121:
            return new Uint8Array(data)
        case 5122:
            return new Int16Array(data)
        case 5123:
            return new Uint16Array(data)
        case 5125:
            return new Uint32Array(data)
        default:
            return new Float32Array(data)
    }
}

function convertTypeToNumber(type: string | number): number {
    if (typeof type === "number") return type

    switch (type) {
        case "Int8":
            return 5120
        case "Uint8":
            return 5121
        case "Int16":
            return 5122
        case "Uint16":
            return 5123
        case "Uint32":
            return 5125
        default:
            return WebGL2RenderingContext.FLOAT
    }
    throw new Error("Function not implemented.")
}

function returnFloat32Array(data: unknown): Float32Array {
    if (data instanceof Float32Array) return data

    throw new Error("We were expecting a Float32Array!")
}
