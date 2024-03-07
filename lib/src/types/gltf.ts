// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.pdf

import { assertType } from "@tgd/types/guards"

export interface TgdFormatGltf {
    meshes?: Array<{
        name: string
        primitives: Array<{
            attributes: Record<string, number>
            indices?: number
        }>
    }>
    images?: Array<{
        bufferView: number
        mimeType: string
        name: string
    }>
    bufferViews?: Array<{
        buffer: number
        byteLength: number
        byteOffset: number
        target?: number
    }>
}

export function assertTgdFormatGltf(
    data: unknown
): asserts data is TgdFormatGltf {
    assertType(data, [
        "partial",
        {
            meshes: [
                "array",
                {
                    name: "string",
                    primitives: [
                        "array",
                        {
                            attributes: ["map", "number"],
                            indices: ["?", "number"],
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
                    target: ["?", "number"],
                },
            ],
        },
    ])
}
