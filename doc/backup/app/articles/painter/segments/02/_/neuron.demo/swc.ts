import {
    ArrayNumber2,
    ArrayNumber4,
    TgdPainterSegmentsData,
    TgdVec3,
    TgdVec4,
} from "@tolokoban/tgd"

export function makeSegmentsData(swc: string): {
    data: TgdPainterSegmentsData
    center: TgdVec3
    bbox: TgdVec3
} {
    const bbox = new TgdVec3()
    const somaPoints: Point[] = []
    const data = new TgdPainterSegmentsData()
    const points = new Map<number, Point>()
    let maxDistance = 0
    for (const rawLine of forEachLine(swc)) {
        const line = stripComment(rawLine)
        const items = line.split(/\s+/)
        if (items.length < 7) continue

        const [index, type, x, y, z, radius, parent] = items.map(s => Number(s))
        const B: Point = {
            xyzr: [x, y, z, radius],
            uv: [normalizeType(type), 0],
            influence: index === 0 ? 0 : 1,
            parent,
        }
        points.set(index, B)
        const A = points.get(parent)
        if (A) {
            const [xx, yy, zz] = A.xyzr
            // Computing distance.
            const distance = Math.sqrt(
                (x - xx) * (x - xx) + (y - yy) * (y - yy) + (z - zz) * (z - zz)
            )
            B.uv[1] = A.uv[1] + distance
            maxDistance = Math.max(maxDistance, B.uv[1])
        } else {
            // B is part of the soma
            somaPoints.push(B)
        }
    }
    const center = new TgdVec3()
    if (somaPoints.length > 0) {
        for (const p of somaPoints) {
            center.add(p.xyzr)
        }
        center.scale(1 / somaPoints.length)
    }
    const inverseMaxDistance = 1 / maxDistance
    for (const B of points.values()) {
        B.uv[1] *= inverseMaxDistance
        const A = points.get(B.parent)
        if (A) {
            data.add(A.xyzr, B.xyzr, A.uv, B.uv, A.influence, B.influence)
            const [x, y, z] = B.xyzr
            bbox.x = Math.max(bbox.x, Math.abs(center.x - x))
            bbox.y = Math.max(bbox.y, Math.abs(center.y - y))
            bbox.z = Math.max(bbox.z, Math.abs(center.z - z))
        } else {
            // This point is part of the soma.
        }
    }
    return { data, center, bbox }
}

interface Point {
    xyzr: ArrayNumber4
    uv: ArrayNumber2
    influence: number
    parent: number
}

/**
 * Generator to iterate on each lines of a big string content.
 */
const forEachLine = function* (content: string) {
    const len = content.length
    let index = 0
    let cursor = 0
    while (index > -1 && index < len) {
        index = content.indexOf("\n", cursor)
        if (index < 0) break

        yield content.substring(cursor, index).trim()
        cursor = index + 1
    }
    return content.substring(cursor).trim()
}

function stripComment(line: string): string {
    const pos = line.indexOf("#")
    if (pos < 0) return line

    return line.substring(0, pos).trim()
}

/**
 * There are 4 real types (soma, axon, apical dendrite and basal dendrite).
 * We use a fifth one for unknown types.
 */
function normalizeType(type: number): number {
    const factor = 1 / 5
    switch (type) {
        case 1:
            return 0.5 * factor
        case 2:
            return 1.5 * factor
        case 3:
            return 2.5 * factor
        case 4:
            return 3.5 * factor
        default:
            return 4.5 * factor
    }
}
