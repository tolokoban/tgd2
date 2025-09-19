import { TgdDataset } from "@tgd/dataset"
import { TgdGeometry } from "./geometry"
import { ArrayNumber3 } from "@tgd/types"
import { TgdVec3 } from "@tgd/math"
import { webglElementTypeArrayFromNumberArray } from "@tgd/utils"

export interface TgdGeometryGridOptions {
    sizeX?: number
    sizeY?: number
    subdivisions?: number
    subdivisionsX?: number
    subdivisionsY?: number
    vecX?: ArrayNumber3
    vecY?: ArrayNumber3
}

export class TgdGeometryGrid extends TgdGeometry {
    constructor({
        sizeX = 1,
        sizeY = 1,
        subdivisions = 10,
        subdivisionsX,
        subdivisionsY,
        vecX = [1, 0, 0],
        vecY = [0, 1, 0],
    }: TgdGeometryGridOptions = {}) {
        const vec = (x: number, y: number): ArrayNumber3 => {
            const sx = x * sizeX
            const sy = y * sizeY
            return [
                sx * vecX[0] + sy * vecY[0],
                sx * vecX[1] + sy * vecY[1],
                sx * vecX[2] + sy * vecY[2],
            ]
        }
        const [nx, ny, nz] = new TgdVec3(vecX)
            .normalize()
            .cross(new TgdVec3(vecY).normalize())
        const dataset = new TgdDataset({
            POSITION: "vec3",
            NORMAL: "vec3",
            TEXCOORD_0: "vec2",
        })
        const cols = Math.max(1, Math.round(subdivisionsX ?? subdivisions)) + 1
        const rows = Math.max(1, Math.round(subdivisionsY ?? subdivisions)) + 1
        const x0 = -0.5 * sizeX
        const y0 = -0.5 * sizeY
        const positions: number[] = []
        const normals: number[] = []
        const texcoords: number[] = []
        const elements: number[] = []
        for (let row = 0; row < rows; row++) {
            const v = row / (rows - 1)
            const y = y0 + sizeY * v
            for (let col = 0; col < cols; col++) {
                const u = col / (cols - 1)
                const x = x0 + sizeX * u
                positions.push(...vec(x, y))
                normals.push(nx, ny, nz)
                texcoords.push(u, v)
                if (col > 0 && row > 0) {
                    const i0 = col - 1
                    const j0 = row - 1
                    const i1 = col
                    const j1 = row
                    const a = i1 + cols * j1
                    const b = i1 + cols * j0
                    const c = i0 + cols * j0
                    const d = i0 + cols * j1
                    // prettier-ignore
                    elements.push(
                        a, b, d,
                        c, b, d
                    )
                }
            }
        }
        dataset.set("POSITION", new Float32Array(positions))
        dataset.set("NORMAL", new Float32Array(normals))
        dataset.set("TEXCOORD_0", new Float32Array(texcoords))
        super({
            dataset,
            elements: webglElementTypeArrayFromNumberArray(elements),
            drawMode: "TRIANGLES",
        })
    }
}
