import { TgdDataset, type TgdDatasetTypeRecord } from "@tgd/dataset"
import type { ArrayNumber3 } from "@tgd/types"
import { webglElementTypeArrayFromNumberArray } from "@tgd/utils"
import { TgdGeometry } from "../geometry"

export interface TgdGeometrySubdivisionOptions {
    /**
     * * "catmull-clark": smooth subdivision, like the default mode of Blender's modifier.
     * * "simple": the faces are split, but the shape is kept.
     *
     * Defaults to **"catmull-clark"**.
     */
    mode: "catmull-clark" | "simple"
    /**
     * Number of subdivision iterations.
     * Each level multiplies the number of faces by 4.
     *
     * Defaults to **2**.
     */
    levels: number
    /**
     * Catmull-Clark works much better on quads than on triangles.
     * If `true`, pairs of coplanar triangles sharing their longest edge
     * are merged into quads before the subdivision (a triangulated box
     * gives back its 6 quads).
     *
     * Defaults to **true**.
     */
    rebuildQuads: boolean
}

/**
 * Perform the same subdivision as the modifier in Blender.
 *
 * The vertices are welded by position to get the topology,
 * so the faces of a box (that do not share vertices) are connected.
 *
 * * Positions are subdivided with the chosen `mode`.
 * * UVs are linearly interpolated inside each face.
 * * Normals are recomputed (smooth) in "catmull-clark" mode,
 *   and linearly interpolated inside each face in "simple" mode.
 * * Tangents, if the geometry has them (and UVs), are recomputed
 *   with {@link TgdGeometry.computeTangents}.
 *
 * Only POSITION, NORMAL, TANGENT and UV attributes are kept.
 * The geometry must use the TRIANGLES draw mode.
 *
 * @param geometry The geometry to subdivide. It is not modified.
 * @param options
 * @returns A new geometry.
 */
export function tgdGeometrySubdivision(
    geometry: TgdGeometry,
    options: Partial<TgdGeometrySubdivisionOptions> = {},
): TgdGeometry {
    const { mode = "catmull-clark", levels = 2, rebuildQuads = true } = options
    if (geometry.drawMode !== WebGL2RenderingContext.TRIANGLES) {
        throw new Error("[tgdGeometrySubdivision] Only TRIANGLES draw mode is supported!")
    }

    const { dataset, attPosition, attNormal, attTangent, attUV } = geometry
    const hasNormal = dataset.hasAttribute(attNormal)
    const hasUV = dataset.hasAttribute(attUV)
    const hasTangent = dataset.hasAttribute(attTangent)
    let mesh = readMesh(geometry, hasUV, hasNormal)
    if (rebuildQuads) mesh = mergeCoplanarTriangles(mesh)
    const smooth = mode === "catmull-clark"
    for (let level = 0; level < Math.round(levels); level++) {
        mesh = subdivide(mesh, smooth)
    }
    const result = writeGeometry(mesh, {
        attPosition,
        attNormal,
        attTangent,
        attUV,
        hasUV,
        recomputeNormals: smooth || !hasNormal,
    })
    // Interpolated tangents would not be orthogonal to the new normals.
    if (hasTangent && hasUV) result.computeTangents()
    return result
}

/**
 * Polygonal mesh with shared vertices.
 * Each face corner holds face-varying values (UV followed by normal).
 */
interface Mesh {
    positions: ArrayNumber3[]
    faces: Face[]
}

interface Face {
    vertices: number[]
    varyings: number[][]
}

function readMesh(geometry: TgdGeometry, hasUV: boolean, hasNormal: boolean): Mesh {
    const { dataset, attPosition, attNormal, attUV, count } = geometry
    const position = dataset.getAttribAccessor(attPosition)
    const normal = hasNormal ? dataset.getAttribAccessor(attNormal) : null
    const uv = hasUV ? dataset.getAttribAccessor(attUV) : null
    const positions: ArrayNumber3[] = []
    const welded = new Map<number, number>()
    const weldedByKey = new Map<string, number>()
    const getVertex = (index: number) => {
        const existing = welded.get(index)
        if (existing !== undefined) return existing

        const point: ArrayNumber3 = [position.get(index, 0), position.get(index, 1), position.get(index, 2)]
        const key = point.map((v) => Math.round(v * 1e5)).join("/")
        let vertex = weldedByKey.get(key)
        if (vertex === undefined) {
            vertex = positions.length
            positions.push(point)
            weldedByKey.set(key, vertex)
        }
        welded.set(index, vertex)
        return vertex
    }
    const getVarying = (index: number) => {
        const varying: number[] = []
        if (uv) varying.push(uv.get(index, 0), uv.get(index, 1))
        if (normal) varying.push(normal.get(index, 0), normal.get(index, 1), normal.get(index, 2))
        return varying
    }
    const faces: Face[] = []
    for (let element = 0; element + 2 < count; element += 3) {
        const indexes = [
            geometry.getElement(element),
            geometry.getElement(element + 1),
            geometry.getElement(element + 2),
        ]
        const vertices = indexes.map(getVertex)
        // Skip degenerated triangles.
        if (vertices[0] === vertices[1] || vertices[1] === vertices[2] || vertices[2] === vertices[0]) continue

        faces.push({ vertices, varyings: indexes.map(getVarying) })
    }
    return { positions, faces }
}

function mergeCoplanarTriangles({ positions, faces }: Mesh): Mesh {
    // For each triangle, the corner where its longest edge starts.
    const longest: number[] = []
    const candidates = new Map<string, number[]>()
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
        const { vertices } = faces[faceIndex]
        let best = 0
        let bestLength = -1
        for (let corner = 0; corner < 3; corner++) {
            const length = distance2(positions[vertices[corner]], positions[vertices[(corner + 1) % 3]])
            if (length > bestLength) {
                bestLength = length
                best = corner
            }
        }
        longest.push(best)
        const key = edgeKey(vertices[best], vertices[(best + 1) % 3])
        const list = candidates.get(key) ?? []
        list.push(faceIndex)
        candidates.set(key, list)
    }
    const merged = new Set<number>()
    const result: Face[] = []
    for (const list of candidates.values()) {
        if (list.length !== 2) continue

        const [indexA, indexB] = list
        const faceA = rotate(faces[indexA], longest[indexA])
        const faceB = rotate(faces[indexB], longest[indexB])
        // faceA = (p, q, r) and faceB must be (q, p, s) to have the same orientation.
        const [p, q, r] = faceA.vertices
        const [q2, p2, s] = faceB.vertices
        if (p !== p2 || q !== q2 || r === s) continue

        const normalA = faceNormal(positions, faceA.vertices)
        const normalB = faceNormal(positions, faceB.vertices)
        if (dot(normalA, normalB) < 0.9999) continue

        merged.add(indexA)
        merged.add(indexB)
        result.push({
            vertices: [p, s, q, r],
            varyings: [faceA.varyings[0], faceB.varyings[2], faceA.varyings[1], faceA.varyings[2]],
        })
    }
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
        if (!merged.has(faceIndex)) result.push(faces[faceIndex])
    }
    return { positions, faces: result }
}

/**
 * One iteration of Catmull-Clark (or simple) subdivision.
 * Every face of N corners becomes N quads.
 *
 * New vertices are stored in this order: original vertices, edge points, face points.
 */
function subdivide({ positions, faces }: Mesh, smooth: boolean): Mesh {
    const facePoints = faces.map(({ vertices }) => average(vertices.map((v) => positions[v])))
    // Edges with their adjacent faces.
    const edges = new Map<string, { a: number; b: number; faces: number[]; index: number }>()
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
        const { vertices } = faces[faceIndex]
        for (let corner = 0; corner < vertices.length; corner++) {
            const a = vertices[corner]
            const b = vertices[(corner + 1) % vertices.length]
            const key = edgeKey(a, b)
            const edge = edges.get(key)
            if (edge) edge.faces.push(faceIndex)
            else edges.set(key, { a, b, faces: [faceIndex], index: edges.size })
        }
    }
    const edgePoints: ArrayNumber3[] = []
    const isBoundaryEdge = (edge: { faces: number[] }) => edge.faces.length !== 2
    for (const edge of edges.values()) {
        const points = [positions[edge.a], positions[edge.b]]
        if (smooth && !isBoundaryEdge(edge)) points.push(...edge.faces.map((f) => facePoints[f]))
        edgePoints.push(average(points))
    }
    const vertexPoints: ArrayNumber3[] = [...positions]
    if (smooth) {
        const adjacentFaces: number[][] = positions.map(() => [])
        const adjacentEdges: Array<Array<{ a: number; b: number; faces: number[] }>> = positions.map(() => [])
        for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
            for (const v of faces[faceIndex].vertices) adjacentFaces[v].push(faceIndex)
        }
        for (const edge of edges.values()) {
            adjacentEdges[edge.a].push(edge)
            adjacentEdges[edge.b].push(edge)
        }
        for (let v = 0; v < positions.length; v++) {
            vertexPoints[v] = smoothVertex(v, positions, facePoints, adjacentFaces[v], adjacentEdges[v])
        }
    }
    const vertexCount = positions.length
    const edgeOffset = vertexCount
    const faceOffset = vertexCount + edgePoints.length
    const newPositions: ArrayNumber3[] = [...vertexPoints, ...edgePoints, ...facePoints]
    const newFaces: Face[] = []
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
        const { vertices, varyings } = faces[faceIndex]
        const n = vertices.length
        const faceVarying = averageVaryings(varyings)
        for (let corner = 0; corner < n; corner++) {
            const next = (corner + 1) % n
            const prev = (corner + n - 1) % n
            const edgeNext = edges.get(edgeKey(vertices[corner], vertices[next]))
            const edgePrev = edges.get(edgeKey(vertices[prev], vertices[corner]))
            if (!edgeNext || !edgePrev) throw new Error("[tgdGeometrySubdivision] Edge not found!")

            newFaces.push({
                vertices: [
                    vertices[corner],
                    edgeOffset + edgeNext.index,
                    faceOffset + faceIndex,
                    edgeOffset + edgePrev.index,
                ],
                varyings: [
                    varyings[corner],
                    averageVaryings([varyings[corner], varyings[next]]),
                    faceVarying,
                    averageVaryings([varyings[prev], varyings[corner]]),
                ],
            })
        }
    }
    return { positions: newPositions, faces: newFaces }
}

function smoothVertex(
    vertex: number,
    positions: ArrayNumber3[],
    facePoints: ArrayNumber3[],
    adjacentFaces: number[],
    adjacentEdges: Array<{ a: number; b: number; faces: number[] }>,
): ArrayNumber3 {
    const P = positions[vertex]
    const boundaryEdges = adjacentEdges.filter((edge) => edge.faces.length !== 2)
    if (boundaryEdges.length > 0) {
        // Boundary vertex: only the boundary edges are taken into account.
        if (boundaryEdges.length !== 2) return P

        const [A, B] = boundaryEdges.map((edge) => positions[edge.a === vertex ? edge.b : edge.a])
        return [0, 1, 2].map((k) => 0.75 * P[k] + 0.125 * (A[k] + B[k])) as ArrayNumber3
    }
    const n = adjacentFaces.length
    if (n < 3) return P

    const Q = average(adjacentFaces.map((f) => facePoints[f]))
    const R = average(adjacentEdges.map((edge) => average([positions[edge.a], positions[edge.b]])))
    return [0, 1, 2].map((k) => (Q[k] + 2 * R[k] + (n - 3) * P[k]) / n) as ArrayNumber3
}

function writeGeometry(
    { positions, faces }: Mesh,
    {
        attPosition,
        attNormal,
        attTangent,
        attUV,
        hasUV,
        recomputeNormals,
    }: {
        attPosition: string
        attNormal: string
        attTangent: string
        attUV: string
        hasUV: boolean
        recomputeNormals: boolean
    },
): TgdGeometry {
    const smoothNormals: ArrayNumber3[] = positions.map(() => [0, 0, 0])
    if (recomputeNormals) {
        for (const { vertices } of faces) {
            // Not normalized: bigger faces have more weight.
            const normal = newellNormal(positions, vertices)
            for (const v of vertices) {
                const acc = smoothNormals[v]
                acc[0] += normal[0]
                acc[1] += normal[1]
                acc[2] += normal[2]
            }
        }
        for (const normal of smoothNormals) normalize(normal)
    }
    const datPosition: number[] = []
    const datNormal: number[] = []
    const datUV: number[] = []
    const elements: number[] = []
    const indexes = new Map<string, number>()
    const getIndex = (vertex: number, varying: number[]) => {
        const uv = hasUV ? varying.slice(0, 2) : []
        const normal: ArrayNumber3 = recomputeNormals
            ? smoothNormals[vertex]
            : normalize(varying.slice(hasUV ? 2 : 0, hasUV ? 5 : 3) as ArrayNumber3)
        const key = [vertex, ...uv, ...normal].map((v) => Math.round(v * 1e5)).join("/")
        const existing = indexes.get(key)
        if (existing !== undefined) return existing

        const index = datPosition.length / 3
        datPosition.push(...positions[vertex])
        datNormal.push(...normal)
        datUV.push(...uv)
        indexes.set(key, index)
        return index
    }
    for (const { vertices, varyings } of faces) {
        const corners = vertices.map((vertex, corner) => getIndex(vertex, varyings[corner]))
        // Triangle fan.
        for (let corner = 1; corner + 1 < corners.length; corner++) {
            elements.push(corners[0], corners[corner], corners[corner + 1])
        }
    }
    const record: TgdDatasetTypeRecord = {
        [attPosition]: "vec3",
        [attNormal]: "vec3",
    }
    if (hasUV) record[attUV] = "vec2"
    const dataset = new TgdDataset(record)
    dataset.set(attPosition, new Float32Array(datPosition))
    dataset.set(attNormal, new Float32Array(datNormal))
    if (hasUV) dataset.set(attUV, new Float32Array(datUV))
    return new TgdGeometry({
        dataset,
        attPosition,
        attNormal,
        attTangent,
        attUV,
        drawMode: "TRIANGLES",
        elements: webglElementTypeArrayFromNumberArray(elements),
    })
}

function rotate({ vertices, varyings }: Face, shift: number): Face {
    const n = vertices.length
    return {
        vertices: vertices.map((_, k) => vertices[(k + shift) % n]),
        varyings: varyings.map((_, k) => varyings[(k + shift) % n]),
    }
}

function edgeKey(a: number, b: number) {
    return a < b ? `${a}/${b}` : `${b}/${a}`
}

function average(points: ArrayNumber3[]): ArrayNumber3 {
    const result: ArrayNumber3 = [0, 0, 0]
    for (const point of points) {
        result[0] += point[0]
        result[1] += point[1]
        result[2] += point[2]
    }
    const n = points.length
    result[0] /= n
    result[1] /= n
    result[2] /= n
    return result
}

function averageVaryings(varyings: number[][]): number[] {
    const [first] = varyings
    return first.map((_, k) => varyings.reduce((sum, varying) => sum + varying[k], 0) / varyings.length)
}

function distance2(a: ArrayNumber3, b: ArrayNumber3) {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2
}

function dot(a: ArrayNumber3, b: ArrayNumber3) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

function faceNormal(positions: ArrayNumber3[], vertices: number[]): ArrayNumber3 {
    return normalize(newellNormal(positions, vertices))
}

/**
 * Normal of a polygon (not normalized, its length is twice the area).
 */
function newellNormal(positions: ArrayNumber3[], vertices: number[]): ArrayNumber3 {
    const normal: ArrayNumber3 = [0, 0, 0]
    for (let k = 0; k < vertices.length; k++) {
        const [x0, y0, z0] = positions[vertices[k]]
        const [x1, y1, z1] = positions[vertices[(k + 1) % vertices.length]]
        normal[0] += (y0 - y1) * (z0 + z1)
        normal[1] += (z0 - z1) * (x0 + x1)
        normal[2] += (x0 - x1) * (y0 + y1)
    }
    return normal
}

function normalize(vec: ArrayNumber3): ArrayNumber3 {
    const len = Math.hypot(...vec)
    if (len < 1e-12) return vec
    vec[0] /= len
    vec[1] /= len
    vec[2] /= len
    return vec
}
