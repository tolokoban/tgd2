import { TgdDataset } from "@tgd/dataset"
import { TgdGeometry } from "./geometry"
import { ArrayNumber3 } from "@tgd/types"

export interface TgdGeometryBoxOptions {
    sizeX?: number
    sizeY?: number
    sizeZ?: number
    uvs?: "3x2" | "sameOnEachFace"
}

export class TgdGeometryBox extends TgdGeometry {
    static fromBoundingBox(
        min: ArrayNumber3,
        max: ArrayNumber3
    ): TgdGeometryBox {
        const [minX, minY, minZ] = min
        const [maxX, maxY, maxZ] = max
        const sizeX = maxX - minX
        const sizeY = maxY - minY
        const sizeZ = maxZ - minZ
        const geometry = new TgdGeometryBox({ sizeX, sizeY, sizeZ })
        return geometry
    }

    constructor({
        sizeX = 1,
        sizeY = 1,
        sizeZ = 1,
        uvs = "sameOnEachFace",
    }: TgdGeometryBoxOptions = {}) {
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
                ...coords("+x+y+z", x, y, z),
                ...coords("+y+z+x", x, y, z),
                ...coords("+z+x+y", x, y, z),
                ...coords("-x+z+y", x, y, z),
                ...coords("-y+x+z", x, y, z),
                ...coords("-z+y+x", x, y, z),
            ])
        )
        dataset.set("TEXCOORD_0", new Float32Array(getUVs(uvs)))
        // prettier-ignore
        dataset.set(
            "NORMAL",
            new Float32Array([...XP6, ...YP6, ...ZP6, ...XN6, ...YN6, ...ZN6])
        )
        super({
            dataset,
            drawMode: "TRIANGLES",
        })
    }
}

// prettier-ignore
const FACE_IJ = [
    [-1, +1], [+1, +1], [-1, -1],
    [+1, -1], [-1, -1], [+1, +1],
]

function coords(def: string, ...sizes: [number, number, number]): number[] {
    function idx(k: number) {
        const txt = def.charAt(k)
        switch (txt) {
            case "x":
                return 0
            case "y":
                return 1
            case "z":
                return 2
            default:
                throw Error(`Invalid coordinate name at pos ${k}: "${txt}"!`)
        }
    }

    function sgn(k: number) {
        const txt = def.charAt(k)
        switch (txt) {
            case "+":
                return +1
            case "-":
                return -1
            default:
                throw Error(`Invalid coordinate sign at pos ${k}: "${txt}"!`)
        }
    }

    const out: number[] = []
    const sgnC = sgn(0)
    const idxC = idx(1)
    const sgnI = sgn(2)
    const idxI = idx(3)
    const sgnJ = sgn(4)
    const idxJ = idx(5)
    for (const [i, j] of FACE_IJ) {
        const row: number[] = []
        row[idxC] = sizes[idxC] * sgnC
        row[idxI] = sizes[idxI] * sgnI * i
        row[idxJ] = sizes[idxJ] * sgnJ * j
        out.push(...row)
    }
    return out
}

// prettier-ignore
const FACE_UV = [
    0, 0, 1, 0, 0, 1,
    1, 1, 0, 1, 1, 0
]

const W3x2 = 1 / 3
const H3x2 = 1 / 2

function face3x2(col: 0 | 1 | 2, row: 0 | 1) {
    const x = W3x2 * col
    const y = H3x2 * row
    return FACE_UV.map((v, i) => (i % 2 == 0 ? x + W3x2 * v : y + H3x2 * v))
}

function getUVs(uvs: TgdGeometryBoxOptions["uvs"]): number[] {
    switch (uvs) {
        case "sameOnEachFace":
            return [
                ...FACE_UV,
                ...FACE_UV,
                ...FACE_UV,
                ...FACE_UV,
                ...FACE_UV,
                ...FACE_UV,
            ]
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