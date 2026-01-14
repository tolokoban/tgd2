import { TgdDataset } from "@tgd/dataset"
import type { TgdVec3, TgdVec4 } from "@tgd/math"
import type { ArrayNumber3, ArrayNumber4 } from "@tgd/types"
import { webglElementTypeArrayFromNumberArray } from "@tgd/utils"
import { TgdGeometry } from "./geometry"

export interface TgdGeometrySphereIcoOptions {
    center?: ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4
    radius?: number
    /**
     * A value of 0 will get you a regular icosahedron.
     * Then, each subdivision will cut every triangle in 3 new triangles.
     *
     * - Minimum: 0
     * - Default: 2
     */
    subdivisions?: number
}

export class TgdGeometrySphereIco extends TgdGeometry {
    constructor({
        center = [0, 0, 0],
        radius = 1,
        subdivisions = 2,
    }: TgdGeometrySphereIcoOptions = {}) {
        const dataset = new TgdDataset({
            POSITION: "vec3",
            NORMAL: "vec3",
        })
        const positions: number[] = []
        const normals: number[] = []
        const elements: number[] = []
        createIcosahedron(positions, normals, elements, center, radius)
        for (let loop = 0; loop < subdivisions; loop++) {
            subdivide(positions, normals, elements, center, radius)
        }
        dataset.set("POSITION", new Float32Array(positions))
        dataset.set("NORMAL", new Float32Array(normals))
        super({
            dataset,
            elements: webglElementTypeArrayFromNumberArray(elements),
            drawMode: "TRIANGLES",
        })
    }
}

function createIcosahedron(
    positions: number[],
    normals: number[],
    elements: number[],
    center: ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4,
    radius: number
) {
    const [cx, cy, cz] = center
    normals.push(
        -0,
        -1,
        -0,
        0.7236,
        -0.4472,
        0.5257,
        -0.2764,
        -0.4472,
        0.8507,
        -0.8944,
        -0.4472,
        -0,
        -0.2764,
        -0.4472,
        -0.8507,
        0.7236,
        -0.4472,
        -0.5257,
        0.2764,
        0.4472,
        0.8507,
        -0.7236,
        0.4472,
        0.5257,
        -0.7236,
        0.4472,
        -0.5257,
        0.2764,
        0.4472,
        -0.8507,
        0.8944,
        0.4472,
        -0,
        -0,
        1,
        -0
    )
    for (let i = 0; i < normals.length; i += 3) {
        positions.push(
            normals[i + 0] * radius + cx,
            normals[i + 1] * radius + cy,
            normals[i + 2] * radius + cz
        )
    }
    // prettier-ignore
    elements.push(
        0, 1, 2,
        1, 0, 5,
        0, 2, 3,
        0, 3, 4,
        0, 4, 5,
        1, 5, 10,
        2, 1, 6,
        3, 2, 7,
        4, 3, 8,
        5, 4, 9,
        1, 10, 6,
        2, 6, 7,
        3, 7, 8,
        4, 8, 9,
        5, 9, 10,
        6, 10, 11,
        7, 6, 11,
        8, 7, 11,
        9, 8, 11,
        10, 9, 11
    )
}

/**
 * Each triangle will be divided in 4 sub triangles.
 */
function subdivide(
    positions: number[],
    normals: number[],
    elements: number[],
    center: ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4,
    radius: number
) {
    const [cx, cy, cz] = center
    const newElements: number[] = []
    let pointsCount = Math.floor(positions.length / 3)
    const indexesOfMidPoints = new Map<string, number>()
    const indexOfMidPoint = (indexA: number, indexB: number) => {
        const idxA = Math.min(indexA, indexB)
        const idxB = Math.max(indexA, indexB)
        const key = `${idxA}/${idxB}`
        const indexFromCache = indexesOfMidPoints.get(key)
        if (typeof indexFromCache === "number") return indexFromCache

        const [nx, ny, nz] = averageNormal(normals, idxA, idxB)
        normals.push(nx, ny, nz)
        positions.push(nx * radius + cx, ny * radius + cy, nz * radius + cz)
        const newIndex = pointsCount++
        indexesOfMidPoints.set(key, newIndex)
        return newIndex
    }
    for (let e = 0; e < elements.length; e += 3) {
        const i0 = elements[e + 0]
        const i1 = elements[e + 1]
        const i2 = elements[e + 2]
        const i01 = indexOfMidPoint(i0, i1)
        const i12 = indexOfMidPoint(i1, i2)
        const i02 = indexOfMidPoint(i0, i2)
        // prettier-ignore
        newElements.push(
            i0, i01, i02,
            i01, i1, i12,
            i01, i12, i02,
            i02, i12, i2
        )
    }
    elements.splice(0)
    elements.push(...newElements)
}

function averageNormal(
    normals: number[],
    i0: number,
    i1: number
): ArrayNumber3 {
    const x = normals[i0 * 3 + 0] + normals[i1 * 3 + 0]
    const y = normals[i0 * 3 + 1] + normals[i1 * 3 + 1]
    const z = normals[i0 * 3 + 2] + normals[i1 * 3 + 2]
    // eslint-disable-next-line unicorn/prefer-modern-math-apis
    const inv3 = 1 / Math.sqrt(x * x + y * y + z * z)
    return [x * inv3, y * inv3, z * inv3]
}
