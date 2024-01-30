import { forEachLine } from "../for-each-line"

export interface TgdParserMeshWavefrontOptions {
    onVertex(x: number, y: number, z: number): void
    onNormal(x: number, y: number, z: number): void
    onUV(u: number, v: number): void
    onFace(faces: Array<{
        vertex: number,
        normal?: number
        uv?: number
    }>): void
    onObject(name: string): void
    onGroup(name: string): void
}

/**
 * This simple Wavefront parser only find the vertices positions
 * and the faces (provided they are triangles).
 * Textures and normals are discarded since we don't need them.
 */
export class TgdParserMeshWavefront {
    parse(content: string,options:Partial<TgdParserMeshWavefrontOptions>
        ): {
    vertices: [x: number, y: number, z: number][]
    triangles: [v0: number, v1: number, v2: number][]
} {
    for (const fullLine of forEachLine(content)) {
        const line = fullLine.trimStart()
        if (line.startsWith("v ")) {
            const vertex = line
                .substring("v ".length)
                .split(" ")
                .map(v => Number(v))
            if (isVector3(vertex)) vertices.push(vertex)
        }
        if (line.startsWith("f ")) {
            const triangle = line
                .substring("f ".length)
                .split(" ")
                // Warning! We need to remove 1 to the index.
                .map(v => Number(v) - 1)
            if (isVector3(triangle)) triangles.push(triangle)
            else
                throw Error(
                    `This simple Wavefront parser accepts only triangles!\n${line}`
                )
        }
    }
    return { vertices, triangles }
}

function isVector3(data: number[]): data is [number, number, number] {
    return data.length === 3
}
