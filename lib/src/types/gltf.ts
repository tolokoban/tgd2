// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.pdf

import { assertType } from "@tgd/types/guards"

export interface TgdFormatGltfAccessor {
    bufferView?: number
    byteOffset?: number
    componentType: number
    normalized?: boolean
    count: number
    type: string
    name?: string
}

export interface TgdFormatGltfMesh {
    name: string
    primitives: Array<{
        attributes: Record<string, number>
        indices?: number
        mode?: number
    }>
}

export interface TgdFormatGltf {
    accessors?: TgdFormatGltfAccessor[]
    meshes?: TgdFormatGltfMesh[]
    images?: Array<{
        bufferView: number
        mimeType: string
        name: string
    }>
    bufferViews?: Array<{
        buffer: number
        byteLength: number
        byteOffset: number
        byteStride?: number
        target?: number
    }>
}

export function assertTgdFormatGltf(
    data: unknown
): asserts data is TgdFormatGltf {
    assertType(data, [
        "partial",
        {
            accessors: [
                "array",
                {
                    bufferView: ["?", "number"],
                    byteOffset: ["?", "number"],
                    componentType: "number",
                    normalized: ["?", "boolean"],
                    count: "number",
                    type: "string",
                    name: ["?", "string"],
                },
            ],
            meshes: [
                "array",
                {
                    name: "string",
                    primitives: [
                        "array",
                        {
                            attributes: ["map", "number"],
                            indices: ["?", "number"],
                            mode: ["?", "number"],
                        },
                    ],
                },
            ],
            images: [
                "array",
                {
                    bufferView: "number",
                    mimeType: "string",
                    name: "string",
                },
            ],
            bufferViews: [
                "array",
                {
                    buffer: "number",
                    byteLength: "number",
                    byteOffset: "number",
                    byteStride: ["?", "number"],
                    target: ["?", "number"],
                },
            ],
        },
    ])
}
