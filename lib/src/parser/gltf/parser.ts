import { TgdFormatGltf, assertTgdFormatGltf } from "../../types/gltf"

/**
 * @see https://www.khronos.org/files/gltf20-reference-guide.pdf
 */
 
export function parseGLB(data: ArrayBuffer): {
    gltf: TgdFormatGltf
    chunks: ArrayBuffer[]
    chunkTypes: Array<{ size: number; type: "JSON" | "BIN" }>
} {
    const view = new DataView(data)
    const magicNumber = view.getUint32(0, true)
    if (magicNumber !== 0x46546c67) {
        throw new Error("Invalid magic number for GLB file!")
    }
    const version = view.getUint32(4, true)
    if (version !== 2) {
        throw new Error(
            `We support only version 2, but this file is in version ${version}!`
        )
    }
    const length = view.getUint32(8, true)
    let gltf = {} as TgdFormatGltf
    const chunks: ArrayBuffer[] = []
    const chunkTypes: Array<{ size: number; type: "JSON" | "BIN" }> = []
    let offset = 12
    while (offset < length) {
        const chunkLength = view.getUint32(offset, true)
        offset += 4
        const chunkType = view.getUint32(offset, true)
        offset += 4
        const chunkData = data.slice(offset, offset + chunkLength)
        offset += chunkLength
        if (chunkType === 0x4e4f534a) {
            // This is the JSON part.
            const json = new TextDecoder().decode(chunkData)
            try {
                const object: unknown = JSON.parse(json)
                assertTgdFormatGltf(object)
                gltf = object
                chunkTypes.push({ type: "JSON", size: chunkData.byteLength })
            } catch (error) {
                console.error("Unable to parse this JSON file:", json)
                console.error(error)
                throw new Error("Invalid JSON data in the chunk!")
            }
        } else if (chunkType === 0x004e4942) {
            chunks.push(chunkData)
            chunkTypes.push({ type: "BIN", size: chunkData.byteLength })
        } else {
            throw new Error(
                `We got an invalid chunk type: 0x${chunkType
                    .toString(16)
                    .padStart(8, "0")}!`
            )
        }
    }
    return { gltf, chunks, chunkTypes }
}
