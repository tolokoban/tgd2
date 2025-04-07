/**
 * GLTF specs can be found here:
 * https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html
 */
import { TgdDataset, TgdDatasetTypeRecord } from "@tgd/dataset"
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
import {
    assertTgdTypeArrayForElements,
    TgdTypeArrayForElements,
} from "@tgd/types"
import { TgdGeometry } from "@tgd/geometry"
import { TgdTexture2D } from "@tgd/texture"

export class TgdDataGlb {
    public readonly gltf: Readonly<TgdFormatGltf>

    private readonly chunks: ArrayBuffer[]
    private readonly chunkDetails: Array<{
        size: number
        type: "JSON" | "BIN"
    }> = []
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

    /**
     * @param content The binary content of a GLB file.
     */
    constructor(content: ArrayBuffer) {
        try {
            const data = parseGLB(content)
            this.gltf = data.gltf
            this.chunks = data.chunks
            this.chunkDetails = data.chunkTypes
        } catch (error) {
            const message =
                error instanceof Error ? error.message : JSON.stringify(error)
            throw new Error(`[TgdParserGLTransfertFormatBinary] ${message}`)
        }
    }

    getChunkDetails() {
        return structuredClone(this.chunkDetails)
    }

    get fileSize() {
        return (
            12 + this.chunks.reduce((size, chunk) => size + chunk.byteLength, 0)
        )
    }

    getScenes(): TgdFormatGltfScene[] {
        return this.gltf.scenes ?? []
    }

    getScene(sceneIndex: number): TgdFormatGltfScene {
        const scene = this.gltf.scenes?.[sceneIndex]
        if (!scene) {
            throw new Error(`Asset has no scene with index #${sceneIndex}!`)
        }

        return scene
    }

    getNode(nodeIndex: number): TgdFormatGltfNode {
        const node = this.gltf.nodes?.[nodeIndex]
        if (!node) {
            throw new Error(`Asset has no node with index #${nodeIndex}!`)
        }

        return node
    }

    getNodeByName(nodeName: string): TgdFormatGltfNode | undefined {
        const nodes = this.gltf.nodes
        if (!nodes) return

        for (const node of nodes) {
            if (node.name === nodeName) return node
        }
    }

    getNodeByNameOrThrow(nodeName: string): TgdFormatGltfNode {
        const node = this.getNodeByName(nodeName)
        if (node) return node

        throw new Error(
            `Unknown node "${nodeName}"!\nAvailable names:${(
                this.gltf.nodes ?? []
            )
                .map(
                    (node, index) =>
                        `\n  - ${
                            typeof node.name === "string"
                                ? JSON.stringify(node.name)
                                : `#${index}`
                        }`
                )
                .join("")}`
        )
    }

    getAccessor(accessorIndex = 0): TgdFormatGltfAccessor {
        const accessor = this.gltf.accessors?.[accessorIndex]
        if (!accessor) {
            throw new Error(
                `Asset has no accessor with index #${accessorIndex}!`
            )
        }

        return accessor
    }

    getMaterial(materialIndex: number): TgdFormatGltfMaterial {
        const material = this.gltf.materials?.[materialIndex]
        if (!material) {
            throw new Error(
                `Asset has no material with index #${materialIndex}!`
            )
        }

        return material
    }

    getMesh(meshIndex = 0): TgdFormatGltfMesh {
        const mesh = this.gltf.meshes?.[meshIndex]
        if (!mesh) {
            throw new Error(`Asset has no mesh with index #${meshIndex}!`)
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
            throw new Error(
                `Asset has no primitive #${primitiveIndex} in mesh #${meshIndex}!`
            )
        }

        return primitive
    }

    getMeshPrimitiveIndices(
        meshIndex = 0,
        primitiveIndex = 0
    ): TgdTypeArrayForElements {
        const primitive = this.getMeshPrimitive(meshIndex, primitiveIndex)
        const accessor = this.getAccessor(primitive.indices ?? 0)
        const elements = this.getBufferViewData(
            accessor.bufferView ?? 0,
            accessor.componentType
        )
        assertTgdTypeArrayForElements(elements)
        return elements
    }

    getAccessorByAttributeName(
        primitive: TgdFormatGltfMeshPrimitive,
        attribName: string
    ): TgdFormatGltfAccessor {
        const { attributes } = primitive
        if (!attributes || Object.keys(attributes).length === 0)
            throw new Error("No attributes found!")
        const accessorIndex = attributes[attribName]
        if (typeof accessorIndex !== "number") {
            throw new TypeError(
                `No attribute with name "${attribName}"!\nAvailable names are: ${Object.keys(
                    attributes
                )
                    .map(name => JSON.stringify(name))
                    .join(", ")}.`
            )
        }
        try {
            return this.getAccessor(accessorIndex)
        } catch (error) {
            const message =
                error instanceof Error ? error.message : JSON.stringify(error)
            throw new Error(
                `Attribute "${attribName}" pointed to an inexisting accessor!\n${message}`
            )
        }
    }

    createTexture2D(
        context: { gl: WebGL2RenderingContext },
        textureIndex: number
    ): TgdTexture2D {
        const gltfTex = this.gltf.textures?.[textureIndex]
        if (!gltfTex) {
            throw new Error(`Asset has no texture with index #${textureIndex}!`)
        }

        const source =
            gltfTex.source ?? gltfTex.extensions?.EXT_texture_webp?.source ?? 0
        const url = this.getImageURL(source)
        const texture = new TgdTexture2D(context)
        if (url) {
            loadImage(url)
                .then(bmp => {
                    if (bmp) texture.loadBitmap(bmp)
                    else console.error("Unable to load this file:", url)
                })
                .catch(console.error)
        } else {
            console.error(`[GLTF] texture index #${textureIndex} is empty!`)
        }
        return texture
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
                img.addEventListener("load", () => {
                    resolve(img)
                })
                img.addEventListener("error", () => {
                    console.error(
                        `Unable to load image #${imageIndex}!`,
                        this.gltf.images?.[imageIndex]
                    )
                    reject()
                })
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
        type?:
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
        accessor: TgdFormatGltfAccessor | number,
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
        if (typeof accessor !== "number") {
            return this.getBufferViewData(
                accessor.bufferView ?? 0,
                accessor.componentType
            )
        }
        const bufferViewIndex = accessor
        const fromCache = this.cacheBufferViewDatas.get(bufferViewIndex)
        if (fromCache) return fromCache

        const { gltf } = this
        const bufferView = gltf.bufferViews?.[bufferViewIndex]
        if (!bufferView)
            throw new Error(`No bufferView with index #${bufferViewIndex}!`)

        const buffer = this.chunks[bufferView.buffer]
        const byteOffset = bufferView.byteOffset ?? 0
        const data = buffer.slice(
            byteOffset,
            byteOffset + bufferView.byteLength
        )
        const view = figureOutView(
            data,
            convertTypeToNumber(
                type ??
                    this.findAccessorForBufferView(bufferViewIndex)
                        ?.componentType ??
                    "Float32"
            )
        )
        this.cacheBufferViewDatas.set(bufferViewIndex, view)
        return view
    }

    findAccessorForBufferView(
        bufferViewIndex: number
    ): TgdFormatGltfAccessor | undefined {
        return (this.gltf.accessors ?? []).find(
            accessor => accessor.bufferView === bufferViewIndex
        )
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
            throw new Error(
                `No attribute "${
                    primitiveAttribName ?? attribName
                }" for primitive #${primitiveIndex} of mesh #${meshIndex}!`
            )
        }

        const bufferViewIndex = accessor.bufferView ?? 0
        const bufferView = gltf.bufferViews?.[bufferViewIndex]
        if (!bufferView) {
            throw new Error(`No bufferView with index #${bufferViewIndex}!`)
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

    makeGeometry({
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
    } = {}): TgdGeometry {
        const primitive = this.getMeshPrimitive(meshIndex, primitiveIndex)
        try {
            const { attributes } = primitive
            if (!attributes) throw new Error("No attributes found!")
            const elements = this.getMeshPrimitiveIndices(
                meshIndex,
                primitiveIndex
            )
            const definition: TgdDatasetTypeRecord = {
                [attPositionName]: "vec3",
            }
            if (typeof attributes[attNormalName] === "string") {
                definition[attNormalName] = "vec3"
            }
            if (typeof attributes[attTextureCoordsName] === "string") {
                definition[attTextureCoordsName] = "vec2"
            }
            const dataset = new TgdDataset(definition)
            dataset.set(
                attPositionName,
                returnFloat32Array(
                    this.getBufferViewData(
                        this.getAccessorByAttributeName(
                            primitive,
                            attPositionName
                        )
                    )
                )
            )
            if (typeof attributes[attNormalName] === "string") {
                dataset.set(
                    attNormalName,
                    returnFloat32Array(
                        this.getBufferViewData(
                            this.getAccessorByAttributeName(
                                primitive,
                                attNormalName
                            )
                        )
                    )
                )
            }
            if (typeof attributes[attTextureCoordsName] === "string") {
                dataset.set(
                    attTextureCoordsName,
                    returnFloat32Array(
                        this.getBufferViewData(
                            this.getAccessorByAttributeName(
                                primitive,
                                attTextureCoordsName
                            )
                        )
                    )
                )
            }
            return new TgdGeometry({
                computeNormalsIfMissing: computeNormals,
                dataset,
                elements,
                attPosition: attPositionName,
                attNormal: attNormalName,
                attUV: attTextureCoordsName,
            })
        } catch (error) {
            const message =
                error instanceof Error ? error.message : JSON.stringify(error)
            throw new Error(
                `Error in primitive #${primitiveIndex} of mesh #${meshIndex}:\n${message}`
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

function loadImage(url: string): Promise<HTMLImageElement | null> {
    return new Promise(resolve => {
        const img = new Image()
        img.src = url
        img.addEventListener("load", () => resolve(img))
        img.addEventListener("error", () => resolve(null))
    })
}
