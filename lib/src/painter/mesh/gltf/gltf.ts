import { TgdColor } from "@tgd/color"
import { TgdContext } from "@tgd/context"
import { TgdDataset, type TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdGeometry } from "@tgd/geometry"
import { TgdMaterial } from "@tgd/material"
import { TgdMaterialGlass } from "@tgd/material/glass"
import { TgdMaterialGltf } from "@tgd/material/gltf"
import { tgdCalcRandom } from "@tgd/math"
import type { TgdDataGlb } from "@tgd/parser"
import { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import type { ArrayNumber3, ArrayNumber4 } from "@tgd/types"
import { tgdCanvasCreateFill } from "@tgd/utils"
import { TgdPainterMesh } from "../mesh"

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
    /**
     * Defined when the glTF material uses the `KHR_materials_transmission` extension
     * with a `transmissionFactor` greater than 0, i.e. for glass-like materials.
     * The default material is then a `TgdMaterialGlass`.
     */
    transmission?: {
        /** From 0 (opaque) to 1 (fully transparent). */
        factor: number
        /** Index of refraction, from `KHR_materials_ior`. Default to 1.5. */
        ior: number
        /** `pbrMetallicRoughness.roughnessFactor`. Default to 1. */
        roughness: number
    }
    skybox?: TgdTextureCube
}

export interface TgdPainterMeshGltfOptions {
    asset: TgdDataGlb
    meshIndexOrName?: number | string
    primitiveIndex?: number
    name?: string
    /**
     * The material, or a function that creates it from the description of the glTF material.
     *
     * By default, it is a `TgdMaterialGlass` if the glTF material uses the
     * `KHR_materials_transmission` extension, and a `TgdMaterialGltf` otherwise.
     */
    material?: TgdMaterial | ((this: void, options: TgdPainterMeshGltfMaterialDescription) => TgdMaterial)
    skybox?: TgdTextureCube
}

/**
 */
export class TgdPainterMeshGltf extends TgdPainterMesh {
    /**
     * GPU resources created by the default glass material,
     * which doesn't delete the textures it receives.
     */
    private readonly resources: Array<{ delete(): void }>

    constructor(context: TgdContext, options: TgdPainterMeshGltfOptions) {
        const { asset, meshIndexOrName = 0, primitiveIndex = 0, skybox, material: materialFactory } = options
        const materialDescription = figureMaterialDescription({
            asset,
            meshIndexOrName,
            primitiveIndex,
            context,
            skybox,
        })
        const resources: Array<{ delete(): void }> = []
        const material =
            materialFactory instanceof TgdMaterial
                ? materialFactory
                : materialFactory
                  ? materialFactory(materialDescription)
                  : makeMaterial(materialDescription, resources)
        let computeNormals = false
        const attributes: TgdDatasetTypeRecord = {
            POSITION: "vec3",
            NORMAL: "vec3",
        }
        const primitive = asset.getMeshPrimitive(meshIndexOrName, primitiveIndex)
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
            context.console.warn("No normals found! We will apply smooth shading.")
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
        this.resources = resources
    }

    delete(): void {
        super.delete()
        for (const resource of this.resources) resource.delete()
        this.resources.splice(0)
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
    const transmissionFactor = material.extensions?.KHR_materials_transmission?.transmissionFactor ?? 0
    if (transmissionFactor > 0) {
        description.transmission = {
            factor: transmissionFactor,
            ior: material.extensions?.KHR_materials_ior?.ior ?? 1.5,
            roughness: material.pbrMetallicRoughness?.roughnessFactor ?? 1,
        }
    }
    return description
}

function makeMaterial(
    {
        asset,
        context,
        normal,
        abedo,
        emission,
        occlusion,
        metallicRoughness,
        color,
        transmission,
        skybox,
    }: TgdPainterMeshGltfMaterialDescription,
    resources: Array<{ delete(): void }>,
) {
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
    if (transmission) {
        const albedo = makeTexture(abedo?.imageIndex, "Abedo")
        const normalMap = makeTexture(normal?.imageIndex, "Normal")
        const defaultSkybox = skybox ? undefined : makeDefaultSkybox(context)
        const material = makeMaterialGlass({
            transmission,
            color: color ?? [1, 1, 1, 1],
            albedo,
            normalMap,
            skybox: skybox ?? defaultSkybox,
        })
        for (const resource of [material, albedo, normalMap, defaultSkybox]) {
            if (resource) resources.push(resource)
        }
        return material
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

function makeMaterialGlass({
    transmission,
    color: [R, G, B, A],
    albedo,
    normalMap,
    skybox,
}: {
    transmission: NonNullable<TgdPainterMeshGltfMaterialDescription["transmission"]>
    color: ArrayNumber4
    albedo?: TgdTexture2D
    normalMap?: TgdTexture2D
    skybox?: TgdTextureCube
}): TgdMaterialGlass {
    // Minimal opacity of the tint: 0.1 (the glass default) for a full transmission,
    // and 1 for no transmission at all.
    const alpha = A * (1 - 0.9 * transmission.factor)
    const material = new TgdMaterialGlass({
        color: albedo ?? [R, G, B, alpha],
        ambientColor: skybox,
        normalMap,
        ior: transmission.ior,
        roughness: transmission.roughness,
    })
    // With a texture, `color` multiplies it.
    if (albedo) material.color.reset(R, G, B, alpha)
    return material
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
