import { TgdDataset, type TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdGeometry } from "@tgd/geometry"
import { TgdMaterial } from "@tgd/material"
import { tgdCalcRandom } from "@tgd/math"
import type { TgdDataGlb } from "@tgd/parser"
import type { ArrayNumber3, ArrayNumber4 } from "@tgd/types"
import { TgdPainterMesh } from "../mesh"
import { TgdContext } from "@tgd/context"
import { TgdMaterialGltf } from "@tgd/material/gltf"
import { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import { tgdCanvasCreateFill } from "@tgd/utils"
import { TgdColor } from "@tgd/color"

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
    skybox?: TgdTextureCube
}

export interface TgdPainterMeshGltfOptions {
    asset: TgdDataGlb
    meshIndexOrName?: number | string
    primitiveIndex?: number
    name?: string
    material?: TgdMaterial | ((this: void, options: TgdPainterMeshGltfMaterialDescription) => TgdMaterial)
    skybox?: TgdTextureCube
}

/**
 */
export class TgdPainterMeshGltf extends TgdPainterMesh {
    constructor(context: TgdContext, options: TgdPainterMeshGltfOptions) {
        const {
            asset,
            meshIndexOrName = 0,
            primitiveIndex = 0,
            skybox,
            material: materialFactory = makeMaterial,
        } = options
        const materialDescription = figureMaterialDescription({
            asset,
            meshIndexOrName,
            primitiveIndex,
            context,
            skybox,
        })
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

const DEFAULT_COLOR: ArrayNumber4 = [0.9, 0.5, 0.1, 1]

function figureMaterialDescription({
    asset,
    meshIndexOrName,
    primitiveIndex,
    context,
    skybox,
}: {
    asset: TgdDataGlb
    meshIndexOrName: number | string
    primitiveIndex: number
    context: TgdContext
    skybox?: TgdTextureCube
}): TgdPainterMeshGltfMaterialDescription {
    const description: TgdPainterMeshGltfMaterialDescription = {
        asset,
        context,
        name: "Material",
        skybox,
    }
    const primitive = asset.getMeshPrimitive(meshIndexOrName, primitiveIndex)
    const materialIndex = primitive.material ?? -1
    if (materialIndex === -1) {
        return {
            ...description,
            color: DEFAULT_COLOR,
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
    const roughnessIndex = material.pbrMetallicRoughness?.metallicRoughnessTexture?.index
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
    console.log("🐞 [gltf@166] material =", material) // @FIXME: Remove this line written on 2026-03-24 at 09:34
    console.log("🐞 [gltf@167] description =", description) // @FIXME: Remove this line written on 2026-03-24 at 09:34
    return description
}

function makeMaterial({
    asset,
    context,
    normal,
    abedo,
    emission,
    occlusion,
    metallicRoughness,
    color,
    skybox,
}: TgdPainterMeshGltfMaterialDescription) {
    const makeTexture = (index: number | undefined, name: string): TgdTexture2D | undefined => {
        if (typeof index === "number") {
            const texture = asset.createTexture2D(context, index)
            texture.name = name
            return texture
        }
    }
    const fill = ([R, G, B, A]: ArrayNumber4) => {
        const texture = new TgdTexture2D(context)
        texture.loadBitmap(tgdCanvasCreateFill(1, 1, new TgdColor(R, G, B, A).toString()))
        return texture
    }
    return new TgdMaterialGltf({
        textures: {
            normal: makeTexture(normal?.imageIndex, "Normal") ?? fill([0.5, 0.5, 1, 1]),
            albedo: makeTexture(abedo?.imageIndex, "Abedo") ?? fill(color ?? DEFAULT_COLOR),
            emission: makeTexture(emission?.imageIndex, "Emission") ?? fill([0, 0, 0, 1]),
            occlusion: makeTexture(occlusion?.imageIndex, "Occlusion"),
            metallicRoughness: makeTexture(metallicRoughness?.imageIndex, "Roughness") ?? fill([0, 0.5, 0.5, 1]),
            skybox: skybox ?? makeDefaultSkybox(context),
        },
    })
}

function makeDefaultSkybox(context: TgdContext): TgdTextureCube {
    const skybox = new TgdTextureCube(context, {
        imageNegX: randomCanvas(),
        imageNegY: randomCanvas(),
        imageNegZ: randomCanvas(),
        imagePosX: randomCanvas(),
        imagePosY: randomCanvas(),
        imagePosZ: randomCanvas(),
    })
    return skybox
}

function randomCanvas() {
    return tgdCanvasCreateFill(
        1,
        1,
        new TgdColor(tgdCalcRandom(0, 0.2), tgdCalcRandom(0.5, 0.7), tgdCalcRandom(0.7, 1), 1),
    )
}
