import { forEachLine } from "../for-each-line"
import { TgdVec3 } from "@tgd/math"
import { TgdGeometry, TgdGeometryOptions2 } from "@tgd/geometry"

export interface TgdParserMeshWavefrontAttributes {
    vertex: number
    normal?: number
    uv?: number
}

/**
 * This [Wavefront](https://en.wikipedia.org/wiki/Wavefront_.obj_file)
 * parser only finds the object name,
 * the vertices coords, the normals and the UVs.
 *
 * - There can be only one object per file.
 * - Normals and UVs are optional.
 * - All faces **must** be triangles.
 *
 * To export an obj file from blender, please use the following options:
 *
 * - Forward axis: **Y**
 * - Up axis: **Z**
 * - Object / Apply Modifiers: **True**
 * - Geometry / UV Coordinates: **True**
 * - Geometry / Normals: **True**
 * - Geometry / Triangulated Mesh: **True**
 */
export class TgdParserMeshWavefront {
    private name = "Mesh"
    private attPosition: number[] = []
    private attNormal: number[] = []
    private attUV: number[] = []
    /**
     * Three consecutive elements define a triangle.
     * An element is a index on the attributes array.
     */
    private elements: number[] = []

    private elementIndex = 0
    /**
     * The key is `${pointIndex}/${normalIndex}/${uvIndex}`.
     * The value is the index of the vertex (used in `elements`).
     */
    private readonly mapVertices = new Map<string, number>()
    /**
     * A point ins not a vertex, but just a position in space
     * that can be used by several different vertices.
     * That's the case for faces sharing a vertex but having different
     * normals. A vertex is made of a position, a normal and an uv.
     */
    private points: [number, number, number][] = []
    /**
     * A item of this array can be shared by different vertices.
     */
    private normals: [number, number, number][] = []
    /**
     * List of vertices per face.
     * The vertices are represented by the index of the attribute.
     */
    private verticesPerTriangle: number[][] = []
    /**
     * Here "normal" is an index on `this.normals` array.
     */
    private normalPerTriangle: TgdVec3[] = []
    /**
     * The vertices are indexed per attribute.
     * The triangles are represented by indexes from `this.normalPerTriangle`.
     */
    private trianglesPerVertex: number[][] = []
    /**
     * A item of this array can be shared by different vertices.
     */
    private uvs: number[][] = []

    constructor(content: string) {
        this.reset()
        const { onVertex, onNormal, onTexture, onFace, onObject } = this
        parse(content, { onVertex, onNormal, onTexture, onFace, onObject })
    }

    makeGeometry({
        computeNormals,
    }: { computeNormals?: boolean } = {}): TgdGeometry {
        const options: TgdGeometryOptions2 = {
            attPosition: {
                name: "POSITION",
                data: new Float32Array(this.attPosition),
            },
            computeNormalsIfMissing: computeNormals,
        }
        if (this.attNormal.length > 0) {
            options.attNormal = {
                name: "NORMAL",
                data: new Float32Array(this.attNormal),
            }
        }
        if (this.attUV.length > 0) {
            options.attUV = {
                name: "TEXTCOORDS_0",
                data: new Float32Array(this.attUV),
            }
        }
        const { elements, elementIndex } = this
        if (elementIndex <= 256) {
            options.elements = new Uint8Array(elements)
        } else if (elementIndex <= 0x10000) {
            options.elements = new Uint16Array(elements)
        } else {
            options.elements = new Uint32Array(elements)
        }

        return TgdGeometry.make(options)
    }

    private computeNormals() {
        const A = new TgdVec3()
        const B = new TgdVec3()
        const C = new TgdVec3()
        for (const [
            triangleIndex,
            normal,
        ] of this.normalPerTriangle.entries()) {
            const [v0, v1, v2] = this.verticesPerTriangle[triangleIndex]
            this.readVertexInto(v0, A)
            this.readVertexInto(v1, B).subtract(A)
            this.readVertexInto(v2, C).subtract(A)
            normal.from(B.cross(C).normalize())
        }
        this.attNormal = []
        for (
            let elementIndex = 0;
            elementIndex < this.elementIndex;
            elementIndex++
        ) {
            const normal = new TgdVec3(0, 0, 0)
            for (const triIndex of this.trianglesPerVertex[elementIndex])
                normal.add(this.normalPerTriangle[triIndex])

            const [nx, ny, nz] = normal.normalize()
            this.attNormal.push(nx, ny, nz)
        }
    }

    private reset() {
        this.name = "Mesh"
        this.attPosition = []
        this.attNormal = []
        this.attUV = []
        this.elements = []
        this.elementIndex = 0
        this.points = []
        this.normals = []
        this.verticesPerTriangle = []
        this.trianglesPerVertex = []
        this.normalPerTriangle = []
        this.uvs = []
        this.mapVertices.clear()
        this.mapVertices.clear()
    }

    private readonly onObject = (name: string) => {
        this.name = name
    }

    private readonly onVertex = (x: number, y: number, z: number) => {
        this.points.push([x, y, z])
    }

    private readonly onNormal = (x: number, y: number, z: number) => {
        this.normals.push([x, y, z])
    }

    private readonly onTexture = (u: number, v: number) => {
        this.uvs.push([u, v])
    }

    private readonly onFace = (
        vertices: TgdParserMeshWavefrontAttributes[]
    ) => {
        if (vertices.length !== 3)
            throw new Error("We can only deal with triangles!")

        const triangle = vertices.map(vertex => this.getElem(vertex))
        this.elements.push(...triangle)
        this.normalPerTriangle.push(new TgdVec3(0, 0, 0))
        this.verticesPerTriangle.push(triangle)
        const triangleIndex = this.normalPerTriangle.length - 1
        for (const vertexIndex of triangle) {
            this.trianglesPerVertex[vertexIndex] ??= []
            this.trianglesPerVertex[vertexIndex].push(triangleIndex)
        }
    }

    /**
     * Return the index of the vertex for the triplet
     * point/normal/uv.
     */
    private readonly getElem = (
        triangleSummit: TgdParserMeshWavefrontAttributes
    ) => {
        const k = this.key(triangleSummit)
        const index = this.mapVertices.get(k) ?? -1
        if (index > -1) return index

        const [vx, vy, vz] = this.points[triangleSummit.vertex]
        this.attPosition.push(vx, vy, vz)
        if (typeof triangleSummit.normal === "number") {
            const [nx, ny, nz] = this.normals[triangleSummit.normal]
            this.attNormal.push(nx, ny, nz)
        }
        if (typeof triangleSummit.uv === "number") {
            const [tx, ty] = this.uvs[triangleSummit.uv]
            this.attUV.push(tx, ty)
        }
        this.mapVertices.set(k, this.elementIndex)
        return this.elementIndex++
    }

    private key(v: TgdParserMeshWavefrontAttributes) {
        return `${v.vertex}/${v.normal}`
    }

    private readVertexInto(index: number, target: TgdVec3): TgdVec3 {
        const P = this.attPosition
        const k = index * 3
        target.reset(P[k + 0], P[k + 1], P[k + 2])
        return target
    }
}

interface TgdParserMeshWavefrontOptions {
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

function parse(
    content: string,
    options: Partial<TgdParserMeshWavefrontOptions> = {}
): void {
    const { onVertex, onNormal, onTexture, onFace, onObject } = options
    for (const fullLine of forEachLine(content)) {
        const line = fullLine.trimStart()
        if (onVertex && line.startsWith("v ")) {
            const vertex = line.slice("v ".length).split(" ").map(Number)
            if (isVector3(vertex)) onVertex(...vertex)
        } else if (onFace && line.startsWith("f ")) {
            onFace(
                line
                    .slice("f ".length)
                    .split(" ")
                    // Warning! We need to remove 1 to the index.
                    .map(face => {
                        const [v, t, n] = face.split("/")
                        return {
                            vertex: Number(v) - 1,
                            normal: n ? Number(n) - 1 : undefined,
                            uv: t ? Number(t) - 1 : undefined,
                        }
                    })
            )
        } else if (onNormal && line.startsWith("vn ")) {
            const normal = line.slice("vn ".length).split(" ").map(Number)
            if (isVector3(normal)) onNormal(...normal)
        } else if (onTexture && line.startsWith("vt ")) {
            const [u, v, w] = line.slice("vt ".length).split(" ").map(Number)
            onTexture(u, v, w)
        } else if (onObject && line.startsWith("o ")) {
            const name = line.slice("o ".length)
            onObject(name)
        }
    }
}

function isVector3(data: number[]): data is [number, number, number] {
    return data.length === 3
}
