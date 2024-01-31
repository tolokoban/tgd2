import { TgdDataset, TgdParserMeshWavefront } from "@tolokoban/tgd"

export function parse(meshContent: string) {
    const mesh = new Mesh()
    const parser = new TgdParserMeshWavefront(mesh)
    parser.parse(meshContent)
    const dataset = new TgdDataset({
        attPosition: "vec3",
        attNormal: "vec3",
    })
    dataset.set("attNormal", new Float32Array(mesh.attNormal))
    dataset.set("attPosition", new Float32Array(mesh.attPosition))
    console.log("🚀 [parser] mesh.attNormal = ", mesh.attNormal)
    console.log("🚀 [parser] mesh.attPosition = ", mesh.attPosition) // @FIXME: Remove this line written on 2024-01-31 at 16:46
    return { dataset, elements: new Uint32Array(mesh.elements) }
}

interface V {
    vertex: number
    normal?: number
    uv?: number
}

class Mesh {
    public readonly attPosition: number[] = []
    public readonly attNormal: number[] = []
    public readonly elements: number[] = []

    private elementIndex = 0
    private readonly vertices: number[][] = []
    private readonly normals: number[][] = []
    private readonly map = new Map<string, number>()

    public readonly onVertex = (x: number, y: number, z: number) => {
        this.vertices.push([x, y, z])
    }

    public readonly onNormal = (x: number, y: number, z: number) => {
        this.normals.push([x, y, z])
    }

    public readonly onFace = (vertices: V[]) => {
        if (vertices.length !== 3)
            throw Error("We can only deal with triangles!")

        vertices.forEach(v => this.elements.push(this.getElem(v)))
    }

    private getElem(v: V) {
        const k = this.key(v)
        const index = this.map.get(k) ?? -1
        if (index > -1) return index

        const [vx, vy, vz] = this.vertices[v.vertex]
        this.attPosition.push(vx, vy, vz)
        const [nx, ny, nz] = this.normals[v.normal ?? -1]
        this.attNormal.push(nx, ny, nz)
        this.map.set(k, this.elementIndex)
        return this.elementIndex++
    }

    private key(v: V) {
        return `${v.vertex}/${v.normal}`
    }
}
