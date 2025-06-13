import { TgdGeometry } from "@tgd/geometry"
import { TgdDataset, TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdDataGlb } from "@tgd/parser"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdMaterial, TgdMaterialDiffuse } from "@tgd/material"
import { TgdLight } from "@tgd/light"

import { TgdPainterMesh } from "../mesh"
import { TgdTexture2D } from "@tgd/texture"
import { TgdCamera } from "@tgd/camera"
import { TgdFormatGltfMaterial } from "@tgd/types"

export interface TgdPainterMeshGltfOptions {
    asset: TgdDataGlb
    meshIndex?: number
    primitiveIndex?: number
    name?: string
    material?:
        | TgdMaterial
        | ((
              this: void,
              options: { color?: TgdVec4 | TgdTexture2D }
          ) => TgdMaterial)
}

/**
 */
export class TgdPainterMeshGltf extends TgdPainterMesh {
    constructor(
        context: {
            gl: WebGL2RenderingContext
            camera: TgdCamera
            paint?: () => void
        },
        options: TgdPainterMeshGltfOptions
    ) {
        const {
            asset,
            meshIndex = 0,
            primitiveIndex = 0,
            material: materialFactory = makeMaterial,
        } = options
        const color = figureColor(asset, meshIndex, primitiveIndex, context)
        const material =
            materialFactory instanceof TgdMaterial
                ? materialFactory
                : materialFactory({ color })
        let computeNormals = false
        const attributes: TgdDatasetTypeRecord = {
            POSITION: "vec3",
            NORMAL: "vec3",
        }
        if (asset.getMeshPrimitive().attributes.TEXCOORD_0) {
            attributes.TEXCOORD_0 = "vec2"
        }
        const dataset = new TgdDataset(attributes)
        asset.setAttrib(dataset, "POSITION", meshIndex, primitiveIndex)
        if (asset.getMeshPrimitive().attributes.NORMAL) {
            asset.setAttrib(dataset, "NORMAL", meshIndex, primitiveIndex)
        } else {
            // It seems to be impossible to retrieve normals.
            // We will compute them with a smooth shading.
            console.warn("No normals found! We will apply smooth shading.")
            computeNormals = true
        }
        if (asset.getMeshPrimitive().attributes.TEXCOORD_0) {
            asset.setAttrib(dataset, "TEXCOORD_0", meshIndex, primitiveIndex)
        }
        super(context, {
            geometry: new TgdGeometry({
                dataset,
                elements: asset.getMeshPrimitiveIndices(
                    meshIndex,
                    primitiveIndex
                ),
                drawMode: "TRIANGLES",
                computeNormalsIfMissing: computeNormals,
            }),
            material,
        })
        this.name = options.name ?? `Gltf/${this.name}`
    }
}

const DEFAULT_COLOR = new TgdVec4(0.9, 0.5, 0.1, 1)

function figureColor(
    asset: TgdDataGlb,
    meshIndex: number,
    primitiveIndex: number,
    context: { gl: WebGL2RenderingContext; paint?: () => void }
): TgdVec4 | TgdTexture2D {
    const primitive = asset.getMeshPrimitive(meshIndex, primitiveIndex)
    const materialIndex = primitive.material ?? -1
    if (materialIndex === -1) return DEFAULT_COLOR

    const material = asset.getMaterial(materialIndex)
    const textureEmissive = getTextureEmissive(context, asset, material)
    const pbr = material.pbrMetallicRoughness
    if (!pbr) return textureEmissive ?? DEFAULT_COLOR
    if (textureEmissive) return textureEmissive

    if (pbr.baseColorTexture) {
        const textureIndex = pbr.baseColorTexture?.index
        const color = asset.createTexture2D(context, textureIndex ?? 0)
        if (context.paint) color.eventChange.addListener(context.paint)
        return color
    }
    if (pbr.baseColorFactor) {
        return new TgdVec4(...pbr.baseColorFactor)
    }
    return DEFAULT_COLOR
}

function makeMaterial({ color }: { color?: TgdVec4 | TgdTexture2D }) {
    const material = new TgdMaterialDiffuse({
        color,
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
    return material
}

function getTextureEmissive(
    context: { gl: WebGL2RenderingContext; paint?: () => void },
    asset: TgdDataGlb,
    material: TgdFormatGltfMaterial
): TgdTexture2D | null {
    const emissive = material.emissiveTexture
    if (!emissive) return null

    const color = asset.createTexture2D(context, emissive.index ?? 0)
    if (context.paint) color.eventChange.addListener(context.paint)
    return color
}
