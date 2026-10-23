import { TgdDataset } from "@tgd/dataset"
import type { TgdVec3, TgdVec4 } from "@tgd/math"
import type { ArrayNumber3 } from "@tgd/types"
import { webglElementTypeArrayFromNumberArray } from "@tgd/utils"
import { TgdGeometry } from "./geometry"

export interface TgdGeometryBoxOptions {
    sizeX?: number
    sizeY?: number
    sizeZ?: number
    uvs?: "3x2" | "sameOnEachFace"
    center?: ArrayNumber3 | TgdVec3 | TgdVec4
    /**
     * If defined, the edges and corners of the box are rounded.
     * The normals are smooth on the bevel, but the 6 faces stay flat.
     */
    bevel?: TgdGeometryBoxBevel
}

export interface TgdGeometryBoxBevel {
    /**
     * Bevel amount.
     * It cannot be greater than half the smallest size of the box.
     */
    width: number
    /** Segments for curve edge (integer > 0) */
    segments: number
    /**
     * Superellipse factor, between **0.0** and **1.0**.
     *
     * * **0.0**: concave.
     * * **0.25**: straight (chamfer).
     * * **0.5**: circular arc.
     * * **1.0**: square (no bevel at all).
     *
     * Defaults to **0.5**.
     */
    profileShape?: number
    /**
     * * "bevel": only the geometry of the bevel is kept.
     * * "face": only the geometry of the faces is kept (they will be smaller and not connected).
     *
     * Default to **"both"**.
     */
    keep?: "both" | "bevel" | "face"
}

export class TgdGeometryBox extends TgdGeometry {
    static fromBoundingBox(min: ArrayNumber3, max: ArrayNumber3): TgdGeometryBox {
        const [minX, minY, minZ] = min
        const [maxX, maxY, maxZ] = max
        const sizeX = maxX - minX
        const sizeY = maxY - minY
        const sizeZ = maxZ - minZ
        const geometry = new TgdGeometryBox({
            sizeX,
            sizeY,
            sizeZ,
            center: [(maxX + minX) / 2, (maxY + minY) / 2, (maxZ + minZ) / 2],
        })
        return geometry
    }

    constructor({
        sizeX = 1,
        sizeY = 1,
        sizeZ = 1,
        uvs = "sameOnEachFace",
        center = [0, 0, 0],
        bevel,
    }: TgdGeometryBoxOptions = {}) {
        if (bevel && bevel.width > 0) {
            super(createBeveledBox(sizeX, sizeY, sizeZ, uvs, center, bevel))
            return
        }

        const x = sizeX * 0.5
        const y = sizeY * 0.5
        const z = sizeZ * 0.5
        const dataset = new TgdDataset({
            POSITION: "vec3",
            NORMAL: "vec3",
            TEXCOORD_0: "vec2",
        })
        // prettier-ignore
        dataset.set(
            "POSITION",
            new Float32Array([
                ...coords("+x+y+z", center, x, y, z),
                ...coords("+y+z+x", center, x, y, z),
                ...coords("+z+x+y", center, x, y, z),
                ...coords("-x+z+y", center, x, y, z),
                ...coords("-y+x+z", center, x, y, z),
                ...coords("-z+y+x", center, x, y, z),
            ]),
        )
        dataset.set("TEXCOORD_0", new Float32Array(getUVs(uvs)))
        // prettier-ignore
        dataset.set(
            "NORMAL",
            new Float32Array([...XP6, ...YP6, ...ZP6, ...XN6, ...YN6, ...ZN6]),
        )
        super({
            dataset,
            drawMode: "TRIANGLES",
        })
    }
}

/**
 * Each face is defined by its axis `C` (with a sign),
 * and two tangent axes `I` and `J`, like in {@link coords}.
 * The `3x2` UV layout uses the same order.
 */
const FACE_DEFS: ReadonlyArray<[sgnC: number, indexC: number, indexI: number, indexJ: number]> = [
    [+1, 0, 1, 2],
    [+1, 1, 2, 0],
    [+1, 2, 0, 1],
    [-1, 0, 2, 1],
    [-1, 1, 0, 2],
    [-1, 2, 1, 0],
]

/**
 * The beveled box is made of 6 grids, one per face.
 * Each grid holds the flat face, half of the 4 bevel strips around it
 * and a quarter of the 4 bevel corners.
 * The strips are split at 45° to give each face its own UV area.
 *
 * The profile is a superellipse `u^r + v^r = 1` and the corners
 * are octants of the superellipsoid `u^r + v^r + w^r = 1`.
 * Points of the unit sphere `s` are mapped to it with `p = s^(2/r)`
 * and the normal is the gradient: `n = s^(2 - 2/r)`.
 */
function createBeveledBox(
    sizeX: number,
    sizeY: number,
    sizeZ: number,
    uvs: TgdGeometryBoxOptions["uvs"],
    center: ArrayNumber3 | TgdVec3 | TgdVec4,
    { width, segments, profileShape = 0.5, keep = "both" }: TgdGeometryBoxBevel,
) {
    const half: ArrayNumber3 = [sizeX * 0.5, sizeY * 0.5, sizeZ * 0.5]
    const w = Math.min(width, ...half)
    const inner: ArrayNumber3 = [half[0] - w, half[1] - w, half[2] - w]
    // Blender's mapping between profile shape and superellipse exponent.
    const profile = Math.max(0.01, Math.min(0.99, profileShape))
    const r = (-2 * Math.LN2) / Math.log(profile)
    const exponentPosition = 2 / r
    const exponentNormal = 2 - 2 / r
    // Angles of the half profile, from 0 to 45°.
    const n = Math.max(1, Math.round(segments))
    const angles: number[] = []
    for (let k = 0; k * 2 < n; k++) angles.push((k * Math.PI) / (2 * n))
    angles.push(Math.PI / 4)
    // With an odd number of segments, the 45° node is not on the curve,
    // but in the middle of the segment that crosses the diagonal.
    const tanBeforeMiddle = n % 2 === 1 ? Math.tan(angles[angles.length - 2]) : -1
    // Nodes along a tangent axis, from negative to positive: [sign, tangent of the angle].
    // A tangent of -1 means the middle of the segment crossing the diagonal.
    const tangents = angles.map((a, index) => (index === angles.length - 1 && tanBeforeMiddle >= 0 ? -1 : Math.tan(a)))
    const nodes: Array<[sign: number, tan: number]> = [
        ...[...tangents].reverse().map((t): [number, number] => [-1, t]),
        ...tangents.map((t): [number, number] => [+1, t]),
    ]
    const faceCell = angles.length - 1
    const keepFace = keep !== "bevel"
    const keepBevel = keep !== "face"
    const positions: number[] = []
    const normals: number[] = []
    const texcoords: number[] = []
    const elements: number[] = []
    const position: ArrayNumber3 = [0, 0, 0]
    const normal: ArrayNumber3 = [0, 0, 0]
    const addVertex = (u: number, v: number, faceIndex: number) => {
        positions.push(...position)
        normals.push(...normal)
        if (uvs === "sameOnEachFace") {
            texcoords.push(u, v)
        } else {
            const col = faceIndex % 3
            const row = Math.floor(faceIndex / 3)
            texcoords.push(W3x2 * (col + u), H3x2 * (row + v))
        }
        return positions.length / 3 - 1
    }
    const addVertexUV = (indexI: number, indexJ: number, faceIndex: number) =>
        addVertex(
            ((position[indexI] - center[indexI]) / half[indexI] + 1) * 0.5,
            (1 - (position[indexJ] - center[indexJ]) / half[indexJ]) * 0.5,
            faceIndex,
        )
    const duplicateVertex = (index: number) => {
        positions.push(positions[index * 3], positions[index * 3 + 1], positions[index * 3 + 2])
        normals.push(...normal)
        texcoords.push(texcoords[index * 2], texcoords[index * 2 + 1])
        return positions.length / 3 - 1
    }
    for (let faceIndex = 0; faceIndex < FACE_DEFS.length; faceIndex++) {
        const [sgnC, indexC, indexI, indexJ] = FACE_DEFS[faceIndex]
        const size = nodes.length
        const grid: number[] = []
        for (const [sgnJ, tanJ] of nodes) {
            for (const [sgnI, tanI] of nodes) {
                const local = superellipsoid(tanI, tanJ, tanBeforeMiddle, exponentPosition, exponentNormal)
                const sign: ArrayNumber3 = [0, 0, 0]
                sign[indexC] = sgnC
                sign[indexI] = sgnI
                sign[indexJ] = sgnJ
                const index: ArrayNumber3 = [indexC, indexI, indexJ]
                for (let k = 0; k < 3; k++) {
                    const axis = index[k]
                    position[axis] = center[axis] + sign[axis] * (inner[axis] + w * local.position[k])
                    normal[axis] = sign[axis] * local.normal[k]
                }
                normalize(normal)
                grid.push(addVertexUV(indexI, indexJ, faceIndex))
            }
        }
        for (let j = 0; j < size - 1; j++) {
            for (let i = 0; i < size - 1; i++) {
                const isFace = i === faceCell && j === faceCell
                if (isFace ? !keepFace : !keepBevel) continue

                let a = grid[i + 1 + size * j]
                let b = grid[i + 1 + size * (j + 1)]
                let c = grid[i + size * j]
                let d = grid[i + size * (j + 1)]
                if (isFace) {
                    // The face has its own vertices to get sharp normals.
                    normal.fill(0)
                    normal[indexC] = sgnC
                    a = duplicateVertex(a)
                    b = duplicateVertex(b)
                    c = duplicateVertex(c)
                    d = duplicateVertex(d)
                }
                // prettier-ignore
                elements.push(
                    a, b, c,
                    d, c, b,
                )
            }
        }
    }

    const dataset = new TgdDataset({
        POSITION: "vec3",
        NORMAL: "vec3",
        TEXCOORD_0: "vec2",
    })
    dataset.set("POSITION", new Float32Array(positions))
    dataset.set("NORMAL", new Float32Array(normals))
    dataset.set("TEXCOORD_0", new Float32Array(texcoords))
    return {
        dataset,
        elements: webglElementTypeArrayFromNumberArray(elements),
        drawMode: "TRIANGLES" as const,
    }
}

/**
 * Point of the octant of the unit superellipsoid, in the local frame (C, I, J) of a face.
 * The direction is `(1, tanI, tanJ)`.
 *
 * A tangent of -1 is the middle of the segment that crosses the diagonal:
 * it is the average of the node before the diagonal and its mirror on the other face.
 * The mirror is computed in a way that gives the same point for every face sharing the node.
 */
function superellipsoid(
    tanI: number,
    tanJ: number,
    tanBeforeMiddle: number,
    exponentPosition: number,
    exponentNormal: number,
): { position: ArrayNumber3; normal: ArrayNumber3 } {
    const t = tanBeforeMiddle
    const directions: ArrayNumber3[] = []
    if (tanI < 0 && tanJ < 0) {
        directions.push([1, t, t], [t, 1, t], [t, t, 1])
    } else if (tanI < 0) {
        directions.push([1, t, tanJ], [t, 1, tanJ])
    } else if (tanJ < 0) {
        directions.push([1, tanI, t], [t, tanI, 1])
    } else {
        directions.push([1, tanI, tanJ])
    }
    const position: ArrayNumber3 = [0, 0, 0]
    const normal: ArrayNumber3 = [0, 0, 0]
    for (const direction of directions) {
        normalize(direction)
        for (let k = 0; k < 3; k++) {
            const s = direction[k]
            position[k] += s ** exponentPosition / directions.length
            normal[k] += powNormal(s, exponentNormal) / directions.length
        }
    }
    return { position, normal }
}

/**
 * `s` is in [0, 1]. When the exponent is negative (concave profile),
 * `0^exponent` is infinite, so we clamp `s`.
 */
function powNormal(s: number, exponent: number) {
    if (exponent < 0) return Math.max(s, 1e-3) ** exponent
    return s ** exponent
}

function normalize(vec: ArrayNumber3) {
    const len = Math.hypot(...vec)
    if (len < 1e-12) return
    vec[0] /= len
    vec[1] /= len
    vec[2] /= len
}

// prettier-ignore
const FACE_IJ = [
    [-1, +1],
    [+1, +1],
    [-1, -1],
    [+1, -1],
    [-1, -1],
    [+1, +1],
]

function coords(
    definition: string,
    center: ArrayNumber3 | TgdVec3 | TgdVec4,
    ...sizes: [number, number, number]
): number[] {
    function index(k: number) {
        const txt = definition.charAt(k)
        switch (txt) {
            case "x":
                return 0
            case "y":
                return 1
            case "z":
                return 2
            default:
                throw new Error(`Invalid coordinate name at pos ${k}: "${txt}"!`)
        }
    }

    function sgn(k: number) {
        const txt = definition.charAt(k)
        switch (txt) {
            case "+":
                return +1
            case "-":
                return -1
            default:
                throw new Error(`Invalid coordinate sign at pos ${k}: "${txt}"!`)
        }
    }

    const out: number[] = []
    const sgnC = sgn(0)
    const indexC = index(1)
    const sgnI = sgn(2)
    const indexI = index(3)
    const sgnJ = sgn(4)
    const indexJ = index(5)
    for (const [index, index_] of FACE_IJ) {
        const row: number[] = []
        row[indexC] = sizes[indexC] * sgnC + center[indexC]
        row[indexI] = sizes[indexI] * sgnI * index_ + center[indexI]
        row[indexJ] = sizes[indexJ] * sgnJ * index + center[indexJ]
        out.push(...row)
    }
    return out
}

// prettier-ignore
const FACE_UV = [
    1, 1,
    1, 0,
    0, 1,
    0, 0,
    0, 1,
    1, 0,
]

const W3x2 = 1 / 3
const H3x2 = 1 / 2

function face3x2(col: 0 | 1 | 2, row: 0 | 1) {
    const x = W3x2 * col
    const y = H3x2 * row
    return FACE_UV.map((v, index) => (index % 2 === 0 ? x + W3x2 * v : y + H3x2 * v))
}

function getUVs(uvs: TgdGeometryBoxOptions["uvs"]): number[] {
    switch (uvs) {
        case "sameOnEachFace":
            return [...FACE_UV, ...FACE_UV, ...FACE_UV, ...FACE_UV, ...FACE_UV, ...FACE_UV]
        default:
            // prettier-ignore
            return [
                ...face3x2(0, 0),
                ...face3x2(1, 0),
                ...face3x2(2, 0),
                ...face3x2(0, 1),
                ...face3x2(1, 1),
                ...face3x2(2, 1),
            ]
    }
}

const XP = [1, 0, 0]
const XP6 = [...XP, ...XP, ...XP, ...XP, ...XP, ...XP]
const XN = [-1, 0, 0]
const XN6 = [...XN, ...XN, ...XN, ...XN, ...XN, ...XN]
const YP = [0, 1, 0]
const YP6 = [...YP, ...YP, ...YP, ...YP, ...YP, ...YP]
const YN = [0, -1, 0]
const YN6 = [...YN, ...YN, ...YN, ...YN, ...YN, ...YN]
const ZP = [0, 0, 1]
const ZP6 = [...ZP, ...ZP, ...ZP, ...ZP, ...ZP, ...ZP]
const ZN = [0, 0, -1]
const ZN6 = [...ZN, ...ZN, ...ZN, ...ZN, ...ZN, ...ZN]
