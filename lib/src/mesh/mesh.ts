import {
    Vector2,
    Vector3,
    addVectors,
    crossProduct,
    normalize,
    subtractVectors,
} from "../calc"
import { TgdTypeMeshData, TgdTypeMeshFace } from "./type"

export class TgdMesh {
    private data: TgdTypeMeshData | null = null

    constructor(private readonly faces: TgdTypeMeshFace[] = []) {}

    addFace(...faces: TgdTypeMeshFace[]) {
        this.faces.push(...faces)
        this.data = null
    }

    get facesCount() {
        return this.faces.length
    }

    getData(): TgdTypeMeshData {
        if (this.data) {
            const points: Vector3[] = []
            const normals: (Vector3 | null)[] = []
            const uvs: Vector2[] = []
            const elements: number[] = []
            const vertices = new Map<string, number>()
            for (const face of this.faces) {
                for (const facePoint of face) {
                    const key = JSON.stringify(facePoint)
                    const k = vertices.get(key)
                    if (typeof k === "number") {
                        elements.push(k)
                    } else {
                        points.push([facePoint.x, facePoint.y, facePoint.z])
                        if (typeof facePoint.nx === "number") {
                            normals.push([
                                facePoint.nx,
                                facePoint.ny,
                                facePoint.nz,
                            ])
                        } else normals.push(null)
                        if (typeof facePoint.u === "number") {
                            uvs.push([facePoint.u, facePoint.v])
                        } else uvs.push([0, 0])
                        elements.push(points.length - 1)
                    }
                }
            }
            this.data = {
                attributes: {
                    point: createFloat32ArrayFromVector3Array(points),
                    normal: createFloat32ArrayFromVector3Array(normals),
                    uv: createFloat32ArrayFromVector2Array(uvs),
                },
                elements: createBestElementArray(elements),
            }
        }

        return this.data
    }
}

function createBestElementArray(
    elements: number[]
): Uint8Array | Uint16Array | Uint32Array {
    const max = elements.reduce((prv, cur) => Math.max(prv, cur), 0)
    if (max < 256) return new Uint8Array(elements)
    if (max < 256 * 256) return new Uint16Array(elements)
    return new Uint32Array(elements)
}

function createFloat32ArrayFromVector3Array(points: Vector3[]): Float32Array {
    const arr = new Float32Array(points.length * 3)
    let cursor = 0
    for (const [x, y, z] of points) {
        arr[cursor++] = x
        arr[cursor++] = y
        arr[cursor++] = z
    }
    return arr
}

function createFloat32ArrayFromVector2Array(points: Vector2[]): Float32Array {
    const arr = new Float32Array(points.length * 2)
    let cursor = 0
    for (const [x, y] of points) {
        arr[cursor++] = x
        arr[cursor++] = y
    }
    return arr
}

function computeNormals(elements: number[], points: Vector3[]) {
    const normals: Vector3[] = [].fill(0, 0, points.length).map(() => [0, 0, 0])
    for (let k = 0; k < elements.length; k += 3) {
        const idxA = elements[k + 0]
        const idxB = elements[k + 1]
        const idxC = elements[k + 2]
        const a: Vector3 = points[idxA]
        const b: Vector3 = points[idxB]
        const c: Vector3 = points[idxC]
        const ab = normalize(subtractVectors(b, a))
        const ac = normalize(subtractVectors(c, a))
        const normal = normalize(crossProduct(ab, ac))
        normals[idxA] = addVectors(normals[idxA], normal)
        normals[idxB] = addVectors(normals[idxB], normal)
        normals[idxC] = addVectors(normals[idxC], normal)
    }
    const result = normals.map(normalize)
    return result
}
