import { TgdDataset, TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdGeometry } from "./geometry"
import { TgdFormatGltfMesh } from "@tgd/types"
import { TgdDataGlb } from "@tgd/parser"

export interface TgdGeometryGltfOptions {
    data: TgdDataGlb
    mesh?: number | string | TgdFormatGltfMesh
    primitive?: number
}

export class TgdGeometryGltf extends TgdGeometry {
    constructor({ data, mesh = 0, primitive = 0 }: TgdGeometryGltfOptions) {
        const primitiveObject = data.getMeshPrimitive(mesh, primitive)
        let computeNormals = false
        const attributes: TgdDatasetTypeRecord = {
            POSITION: "vec3",
            NORMAL: "vec3",
        }
        if (primitiveObject.attributes.TEXCOORD_0) {
            attributes.TEXCOORD_0 = "vec2"
        }
        const dataset = new TgdDataset(attributes)
        data.setAttrib(dataset, "POSITION", mesh, primitive)
        if (primitiveObject.attributes.NORMAL) {
            data.setAttrib(dataset, "NORMAL", mesh, primitive)
        } else {
            // It seems to be impossible to retrieve normals.
            // We will compute them with a smooth shading.
            console.warn("No normals found! We will apply smooth shading.")
            computeNormals = true
        }
        if (primitiveObject.attributes.TEXCOORD_0) {
            data.setAttrib(dataset, "TEXCOORD_0", mesh, primitive)
        }
        super({
            dataset,
            elements: data.getMeshPrimitiveIndices(mesh, primitive),
            drawMode: "TRIANGLES",
            computeNormalsIfMissing: computeNormals,
        })
    }
}
