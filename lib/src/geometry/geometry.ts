import { TgdDataset, TgdDatasetType, TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdTypeArrayForElements, WebglDrawMode } from "@tgd/types"
import { TgdVec3 } from "@tgd/math"
import { webglElementTypeFromTypedArray, webglLookup } from "@tgd/utils"

interface TgdGeometryOptionsCommon {
    name?: string
    /**
     * Default mode is TRIANGLES.
     */
    drawMode?: WebglDrawMode | number
    /**
     * If the count is not defined, we will figure it out from
     * the `elements` typed array or from the POSITION attribute.
     */
    count?: number
    elements?: TgdTypeArrayForElements
    /**
     * Compute normals with a smooth shading if
     * none has been provided.
     */
    computeNormalsIfMissing?: boolean
}

export interface TgdGeometryOptions1 extends TgdGeometryOptionsCommon {
    dataset: TgdDataset
    attPosition?: string
    attNormal?: string
    attUV?: string
}

export interface TgdGeometryOptions2 extends TgdGeometryOptionsCommon {
    attPosition: Float32Attribute
    attNormal?: Float32Attribute
    attUV?: Float32Attribute
}

interface Float32Attribute {
    name: string
    data: Float32Array
    type?: TgdDatasetType
}

/**
 * Geometry is used to define a mesh.
 * It must hold at least one vec3 attributes
 * for the vertices.
 */
export class TgdGeometry {
    public readonly name: string
    /** Name of the POSITION attribute in the shader. */
    public readonly attPosition: string
    /** Name of the NORMAL attribute in the shader. */
    public readonly attNormal: string
    /** Name of the UV attribute in the shader. */
    public readonly attUV: string
    public readonly count: number
    public readonly elements?: Readonly<TgdTypeArrayForElements>
    public readonly drawMode: number

    protected _dataset: TgdDataset
    protected _elementsType: number

    private static counter = 1

    public static make(options: TgdGeometryOptions2) {
        const definition: TgdDatasetTypeRecord = {}
        const { count, drawMode, elements, attPosition, attNormal, attUV } =
            options
        definition[attPosition.name] = attPosition.type ?? "vec3"
        if (attNormal) definition[attNormal.name] = attNormal.type ?? "vec3"
        if (attUV) definition[attUV.name] = attUV.type ?? "vec2"
        const dataset = new TgdDataset(definition)
        dataset.set(attPosition.name, attPosition.data)
        if (attNormal) dataset.set(attNormal.name, attNormal.data)
        if (attUV) dataset.set(attUV.name, attUV.data)
        return new TgdGeometry({
            dataset,
            count,
            drawMode,
            elements,
        })
    }

    constructor(options: TgdGeometryOptions1) {
        const {
            dataset,
            drawMode = "TRIANGLES",
            attPosition = "POSITION",
            attNormal = "NORMAL",
            attUV = "TEXCOORD_0",
            name = `TgdGeometry#${TgdGeometry.counter++}`,
        } = options
        this.name = name
        this._dataset = dataset
        this.drawMode =
            typeof drawMode === "number"
                ? drawMode
                : WebGL2RenderingContext[drawMode]
        const { elements } = options
        this.elements = elements
        this._elementsType = elements
            ? webglElementTypeFromTypedArray(elements)
            : 0
        this.attPosition = attPosition
        this.attNormal = attNormal
        this.attUV = attUV
        this.count = elements?.length ?? dataset.count
        if (options.computeNormalsIfMissing) this.computeNormals()
    }

    debug(caption?: string) {
        const label = `[${caption ?? this.name}]`
        this.dataset.debug(`${label} Dataset`)
        console.log(`${label} Count:`, this.count)
        console.log(`${label} DrawMode:`, webglLookup(this.drawMode))
    }

    get dataset(): Readonly<TgdDataset> {
        return this._dataset
    }

    get elementsType() {
        return this._elementsType
    }

    public getElement(index: number): number {
        return this.elements?.[index] ?? -1
    }

    public computeNormals() {
        let normals: TgdVec3[] = []
        if (this.drawMode === WebGL2RenderingContext.TRIANGLES) {
            normals = this.computeNormalsForTrianglesDrawMode()
        } else {
            console.error(
                "We don't know how to compute normals for this draw mode:",
                this.drawMode
            )
            return
        }
        const attNormalName = this.attNormal
        this.dataset.addAttributes({
            [attNormalName]: "vec3",
        })
        const values: number[] = []
        for (const [nx, ny, nz] of normals) {
            values.push(nx, ny, nz)
        }
        this.dataset.set(attNormalName, new Float32Array(values))
    }

    private computeNormalsForTrianglesDrawMode() {
        const ds = this.dataset
        const normalsAccumulator = new Map<number, TgdVec3>()
        const addNormal = (
            index: number,
            A: TgdVec3,
            B: TgdVec3,
            C: TgdVec3
        ) => {
            const norm = computeNormal(A, B, C)
            const item = normalsAccumulator.get(index)
            if (item) {
                item.add(norm)
            } else {
                normalsAccumulator.set(
                    index,
                    new TgdVec3(norm.x, norm.y, norm.z)
                )
            }
        }
        const { get } = ds.getAttribAccessor(this.attPosition)
        const indexes = new Set<number>()
        let indexMax = 0
        for (let element = 0; element < this.count; element += 3) {
            const index0 = this.getElement(element + 0)
            indexes.add(index0)
            indexMax = Math.max(indexMax, index0)
            const index1 = this.getElement(element + 1)
            indexes.add(index1)
            indexMax = Math.max(indexMax, index1)
            const index2 = this.getElement(element + 2)
            indexes.add(index2)
            indexMax = Math.max(indexMax, index2)
            const A = new TgdVec3(
                get(index0, 0),
                get(index0, 1),
                get(index0, 2)
            )
            const B = new TgdVec3(
                get(index1, 0),
                get(index1, 1),
                get(index1, 2)
            )
            const C = new TgdVec3(
                get(index2, 0),
                get(index2, 1),
                get(index2, 2)
            )
            addNormal(index0, A, B, C)
            addNormal(index1, B, C, A)
            addNormal(index2, C, A, B)
        }
        const normals: TgdVec3[] = []
        for (let index = 0; index <= indexMax; index++) {
            const item = normalsAccumulator.get(index)
            if (item) {
                item.normalize()
                normals.push(item)
            } else {
                normals.push(new TgdVec3())
            }
        }
        return normals
    }
}

function computeNormal(A: TgdVec3, B: TgdVec3, C: TgdVec3) {
    const AB = new TgdVec3(B).subtract(A)
    const AC = new TgdVec3(C).subtract(A)
    return AB.cross(AC).normalize()
}
