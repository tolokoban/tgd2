import { TgdGeometry } from "@tgd/geometry"
import { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdParserGLTransfertFormatBinary } from "@tgd/parser"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdMaterialDiffuse } from "@tgd/material"
import { TgdLight } from "@tgd/light"

import { TgdPainterMesh } from "../mesh"

export interface TgdPainterMeshGltfOptions {
    asset: TgdParserGLTransfertFormatBinary
    meshIndex?: number
    primitiveIndex?: number
    name?: string
}

/**
 */
export class TgdPainterMeshGltf extends TgdPainterMesh {
    constructor(context: TgdContext, options: TgdPainterMeshGltfOptions) {
        const { asset, meshIndex = 0, primitiveIndex = 0 } = options
        const color = figureColor(asset, meshIndex, primitiveIndex, context)
        const material = new TgdMaterialDiffuse({
            color,
            light: new TgdLight({
                color: new TgdVec4(2, 2, 2, 1),
                direction: new TgdVec3(1, 0, 0),
            }),
            ambient: new TgdLight({
                color: new TgdVec4(0.75, 0.75, 0.75, 1),
            }),
        })
        if (color instanceof TgdVec4) {
            const dataset = new TgdDataset({
                POSITION: "vec3",
                NORMAL: "vec3",
            })
            asset.setAttrib(dataset, "POSITION", meshIndex, primitiveIndex)
            try {
                asset.setAttrib(dataset, "NORMAL", meshIndex, primitiveIndex)
            } catch (ex) {
                // It seems to be impossible to retrieve normals.
                // We will compute them with a smooth shading.
                console.warn("No normals found! We will apply smooth shading.")
            }
            super(context, {
                geometry: new TgdGeometry({
                    dataset,
                    elements: asset.getMeshPrimitiveIndices(
                        meshIndex,
                        primitiveIndex
                    ),
                    drawMode: "TRIANGLES",
                    computeNormalsIfMissing: true,
                }),
                material,
            })
            console.log(
                "🚀 [gltf] dataset.attributeNames = ",
                dataset.attributesNames
            ) // @FIXME: Remove this line written on 2024-09-03 at 18:01
        } else {
            const dataset = new TgdDataset({
                POSITION: "vec3",
                NORMAL: "vec3",
                TEXCOORD_0: "vec2",
            })
            asset.setAttrib(dataset, "POSITION", meshIndex, primitiveIndex)
            try {
                asset.setAttrib(dataset, "NORMAL", meshIndex, primitiveIndex)
            } catch (ex) {
                // It seems to be impossible to retrieve normals.
                // We will compute them with a smooth shading.
                console.warn("No normals found! We will apply smooth shading.")
            }
            asset.setAttrib(dataset, "TEXCOORD_0", meshIndex, primitiveIndex)
            super(context, {
                geometry: new TgdGeometry({
                    dataset,
                    elements: asset.getMeshPrimitiveIndices(
                        meshIndex,
                        primitiveIndex
                    ),
                    drawMode: "TRIANGLES",
                    computeNormalsIfMissing: true,
                }),
                material,
            })
            console.log(
                "🚀 [gltf] dataset.attributeNames = ",
                dataset.attributesNames
            ) // @FIXME: Remove this line written on 2024-09-03 at 18:01
        }
        this.name = options.name ?? `Gltf/${this.name}`
    }
}

const DEFAULT_COLOR = new TgdVec4(0.9, 0.7, 0.3, 1)

function figureColor(
    asset: TgdParserGLTransfertFormatBinary,
    meshIndex: number,
    primitiveIndex: number,
    context: TgdContext
) {
    const primitive = asset.getMeshPrimitive(meshIndex, primitiveIndex)
    const materialIndex = primitive.material ?? -1
    if (materialIndex === -1) return DEFAULT_COLOR

    const material = asset.getMaterial(materialIndex)
    const pbr = material.pbrMetallicRoughness
    if (!pbr) return DEFAULT_COLOR

    if (pbr.baseColorTexture) {
        const textureIndex = pbr.baseColorTexture?.index
        const textureOptions = asset.getTexture2DOptions(textureIndex ?? 0)
        const color = context.textures2D.create(textureOptions)
        return color
    }
    if (pbr.baseColorFactor) {
        return new TgdVec4(...pbr.baseColorFactor)
    }
    return DEFAULT_COLOR
}
