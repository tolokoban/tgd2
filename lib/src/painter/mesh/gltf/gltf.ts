import { TgdDataset, type TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdGeometry } from "@tgd/geometry"
import { TgdLight } from "@tgd/light"
import { TgdMaterial } from "@tgd/material"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import type { TgdDataGlb } from "@tgd/parser"
import type { ArrayNumber3, ArrayNumber4 } from "@tgd/types"
import { TgdPainterMesh } from "../mesh"
import { TgdContext } from "@tgd/context"
import { TgdMaterialGltf } from "@tgd/material/gltf"
import { TgdTexture2D } from "@tgd/texture"
import { ensureArrayNumber4, tgdCanvasCreateFill } from "@tgd/utils"

export interface TgdPainterMeshGltfMaterialDescription {
    name: string
    asset: TgdDataGlb
    context: TgdContext
    color?: ArrayNumber4
    abedo?: {
        imageIndex: number
    }
    metallicRoughness?: {
        imageIndex: number
    }
    normal?: {
        imageIndex: number
    }
    occlusion?: {
        imageIndex: number
    }
    emission?: {
        imageIndex: number
        strength: ArrayNumber3
    }
}

export interface TgdPainterMeshGltfOptions {
    asset: TgdDataGlb
    meshIndexOrName?: number | string
    primitiveIndex?: number
    name?: string
    material?: TgdMaterial | ((this: void, options: TgdPainterMeshGltfMaterialDescription) => TgdMaterial)
}

/**
 */
export class TgdPainterMeshGltf extends TgdPainterMesh {
    constructor(context: TgdContext, options: TgdPainterMeshGltfOptions) {
        const { asset, meshIndexOrName = 0, primitiveIndex = 0, material: materialFactory = makeMaterial } = options
        const materialDescription = figureMaterialDescription(asset, meshIndexOrName, primitiveIndex, context)
        const material = materialFactory instanceof TgdMaterial ? materialFactory : materialFactory(materialDescription)
        let computeNormals = false
        const attributes: TgdDatasetTypeRecord = {
            POSITION: "vec3",
            NORMAL: "vec3",
        }
        const primitive = asset.getMeshPrimitive()
        if (primitive.attributes.TEXCOORD_0) {
            attributes.TEXCOORD_0 = "vec2"
        }
        const dataset = new TgdDataset(attributes)
        asset.setAttrib(dataset, "POSITION", meshIndexOrName, primitiveIndex)
        if (primitive.attributes.NORMAL) {
            asset.setAttrib(dataset, "NORMAL", meshIndexOrName, primitiveIndex)
        } else {
            // It seems to be impossible to retrieve normals.
            // We will compute them with a smooth shading.
            console.warn("No normals found! We will apply smooth shading.")
            computeNormals = true
        }
        if (primitive.attributes.TEXCOORD_0) {
            asset.setAttrib(dataset, "TEXCOORD_0", meshIndexOrName, primitiveIndex)
        }
        super(context, {
            geometry: new TgdGeometry({
                dataset,
                elements: asset.getMeshPrimitiveIndices(meshIndexOrName, primitiveIndex),
                drawMode: "TRIANGLES",
                computeNormalsIfMissing: computeNormals,
            }),
            material,
        })
        this.name = options.name ?? `Gltf/${this.name}`
    }
}

const DEFAULT_COLOR = new TgdVec4(0.9, 0.5, 0.1, 1)

function figureMaterialDescription(
    asset: TgdDataGlb,
    meshIndexOrName: number | string,
    primitiveIndex: number,
    context: TgdContext,
): TgdPainterMeshGltfMaterialDescription {
    const description: TgdPainterMeshGltfMaterialDescription = {
        asset,
        context,
        name: "Material",
    }
    const primitive = asset.getMeshPrimitive(meshIndexOrName, primitiveIndex)
    const materialIndex = primitive.material ?? -1
    if (materialIndex === -1) {
        return {
            ...description,
            color: DEFAULT_COLOR.toArrayNumber4(),
        }
    }

    const material = asset.getMaterial(materialIndex)
    description.name = material.name ?? description.name
    description.color = material.pbrMetallicRoughness?.baseColorFactor
    const abedoIndex = material.pbrMetallicRoughness?.baseColorTexture?.index
    if (typeof abedoIndex === "number") {
        description.abedo = {
            imageIndex: abedoIndex,
        }
    }
    const roughnessIndex = material.pbrMetallicRoughness?.metalicRoughnessTexture?.index
    if (typeof roughnessIndex === "number") {
        description.metallicRoughness = {
            imageIndex: roughnessIndex,
        }
    }
    const normalIndex = material.normalTexture?.index
    if (typeof normalIndex === "number") {
        description.normal = {
            imageIndex: normalIndex,
        }
    }
    const occlusionIndex = material.occlusionTexture?.index
    if (typeof occlusionIndex === "number") {
        description.occlusion = {
            imageIndex: occlusionIndex,
        }
    }
    const emissionIndex = material.emissiveTexture?.index
    if (typeof emissionIndex === "number") {
        description.emission = {
            imageIndex: emissionIndex,
            strength: material.emissiveFactor ?? [1, 1, 1],
        }
    }
    return description
}

function makeMaterial({ asset, context, abedo, emission, occlusion, color }: TgdPainterMeshGltfMaterialDescription) {
    const makeTexture = (index: number | undefined, name: string, color: ArrayNumber4) => {
        if (typeof index === "number") {
            const texture = asset.createTexture2D(context, index, color)
            texture.name = name
            return texture
        }

        return undefined
    }
    return new TgdMaterialGltf({
        textures: {
            abedo:
                makeTexture(abedo?.imageIndex, "Abedo", ensureArrayNumber4(DEFAULT_COLOR)) ??
                new TgdTexture2D(context, {
                    color: color ?? DEFAULT_COLOR,
                }),
            emission: makeTexture(emission?.imageIndex, "Emission", [0, 0, 0, 1]),
            occlusion: makeTexture(occlusion?.imageIndex, "Occlusion", [1, 1, 1, 1]),
        },
        specularIntensity: 0.3,
        specularExponent: 80,
        light: new TgdLight({
            color: new TgdVec4(1, 1, 1, 1),
            direction: new TgdVec3(1, 0.2, 0),
        }),
        ambient: new TgdLight({
            color: new TgdVec4(0.2, 0.1, 0, 1),
        }),
    })
}
