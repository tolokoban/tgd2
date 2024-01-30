import { forEachLine } from "../for-each-line"

export interface TgdParserMeshWavefrontOptions {
    onVertex(x: number, y: number, z: number): void
    onNormal(x: number, y: number, z: number): void
    onTexture(u: number, v?: number, w?: number): void
    onFace(
        faces: Array<{
            vertex: number
            normal?: number
            uv?: number
        }>
    ): void
    onObject(name: string): void
    onGroup(name: string): void
}

/**
 * This simple Wavefront parser only find the vertices positions
 * and the faces (provided they are triangles).
 * Textures and normals are discarded since we don't need them.
 */
export class TgdParserMeshWavefront {
    constructor(
        private readonly options: Partial<TgdParserMeshWavefrontOptions>
    ) {}

    parse(
        content: string,
        options: Partial<TgdParserMeshWavefrontOptions> = {}
    ): void {
        const { onVertex, onNormal, onTexture, onFace } = {
            ...this.options,
            ...options,
        }
        for (const fullLine of forEachLine(content)) {
            const line = fullLine.trimStart()
            if (onVertex && line.startsWith("v ")) {
                const vertex = line
                    .substring("v ".length)
                    .split(" ")
                    .map(v => Number(v))
                if (isVector3(vertex)) onVertex(...vertex)
            } else if (onFace && line.startsWith("f ")) {
                onFace(
                    line
                        .substring("f ".length)
                        .split(" ")
                        // Warning! We need to remove 1 to the index.
                        .map(face => {
                            const [v, n, t] = face.split("/")
                            return {
                                vertex: Number(v) - 1,
                                normal: n ? Number(n) - 1 : undefined,
                                uv: t ? Number(t) - 1 : undefined,
                            }
                        })
                )
            } else if (onNormal && line.startsWith("vn ")) {
                const normal = line
                    .substring("vn ".length)
                    .split(" ")
                    .map(n => Number(n))
                if (isVector3(normal)) onNormal(...normal)
            } else if (onTexture && line.startsWith("vt ")) {
                const [u, v, w] = line
                    .substring("vt ".length)
                    .split(" ")
                    .map(n => Number(n))
                onTexture(u, v, w)
            }
        }
    }
}

function isVector3(data: number[]): data is [number, number, number] {
    return data.length === 3
}
