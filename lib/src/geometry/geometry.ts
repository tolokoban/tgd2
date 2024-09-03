import { TgdDataset, TgdDatasetType, TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdTypeArrayForElements, WebglDrawMode } from "@tgd/types"
import { TgdVec3 } from "@tgd/math"
import { webglElementTypeFromTypedArray } from "@tgd/utils"

interface TgdGeometryOptionsCommon {
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
    /** Name of the POSITION attribute in the shader. */
    public readonly attPosition: string
    /** Name of the NORMAL attribute in the shader. */
    public readonly attNormal: string
    /** Name of the UV attribute in the shader. */
    public readonly attUV: string
    public readonly count: number
    public readonly elements?: Readonly<TgdTypeArrayForElements>
    public readonly drawMode: WebglDrawMode | number

    protected _dataset: TgdDataset
    protected _elementsType: number

    public static make(options: TgdGeometryOptions2) {
        const def: TgdDatasetTypeRecord = {}
        const { count, drawMode, elements, attPosition, attNormal, attUV } =
            options
        def[attPosition.name] = attPosition.type ?? "vec3"
        if (attNormal) def[attNormal.name] = attNormal.type ?? "vec3"
        if (attUV) def[attUV.name] = attUV.type ?? "vec2"
        const dataset = new TgdDataset(def)
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
        } = options
        this._dataset = dataset
        this.drawMode = drawMode
        const { elements } = options
        this.elements = elements
        this._elementsType = elements
            ? webglElementTypeFromTypedArray(elements)
            : 0
        this.attPosition = attPosition
        this.attNormal = attNormal
        this.attUV = attUV
        this.count = elements?.length ?? dataset.count
        if (!dataset.attributesNames.includes(attPosition)) {
            throw Error(
                `Dataset is missing attribute "${attPosition}" for Position!`
            )
        }
        if (attNormal && !dataset.attributesNames.includes(attNormal)) {
            throw Error(
                `Dataset is missing attribute "${attNormal}" for Normal!`
            )
        }
        if (attUV && !dataset.attributesNames.includes(attUV)) {
            throw Error(`Dataset is missing attribute "${attUV}" for UV!`)
        }
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
        console.log("computeNormals()")
        let normals: TgdVec3[] = []
        if (
            this.drawMode === WebGL2RenderingContext.TRIANGLES ||
            this.drawMode === "TRIANGLES"
        ) {
            normals = this.computeNormalsForTrianglesDrawMode()
        } else {
            console.error(
                "We don't know how to compute normals for this draw mode:",
                this.drawMode
            )
            return
        }
        this.dataset.addAttributes({
            NORMAL: "vec3",
        })
        const values: number[] = []
        for (let idx = 0; idx < normals.length; idx++) {
            const [nx, ny, nz] = normals[idx]
            values.push(nx, ny, nz)
        }
        this.dataset.set("NORMAL", new Float32Array(values))
    }

    // eslint-disable-next-line max-statements
    private computeNormalsForTrianglesDrawMode() {
        const ds = this.dataset
        const normalsAccumulator = new Map<number, TgdVec3>()
        const addNormal = (idx: number, A: TgdVec3, B: TgdVec3, C: TgdVec3) => {
            const norm = computeNormal(A, B, C)
            const item = normalsAccumulator.get(idx)
            if (item) {
                item.add(norm)
            } else {
                normalsAccumulator.set(idx, new TgdVec3(norm.x, norm.y, norm.z))
            }
        }
        const { get } = ds.getAttribAccessor(this.attPosition)
        const indexes = new Set<number>()
        let idxMax = 0
        for (let elem = 0; elem < this.count; elem += 3) {
            const idx0 = this.getElement(elem + 0)
            indexes.add(idx0)
            idxMax = Math.max(idxMax, idx0)
            const idx1 = this.getElement(elem + 1)
            indexes.add(idx1)
            idxMax = Math.max(idxMax, idx1)
            const idx2 = this.getElement(elem + 2)
            indexes.add(idx2)
            idxMax = Math.max(idxMax, idx2)
            const A = new TgdVec3(get(idx0, 0), get(idx0, 1), get(idx0, 2))
            const B = new TgdVec3(get(idx1, 0), get(idx1, 1), get(idx1, 2))
            const C = new TgdVec3(get(idx2, 0), get(idx2, 1), get(idx2, 2))
            addNormal(idx0, A, B, C)
            addNormal(idx1, B, C, A)
            addNormal(idx2, C, A, B)
        }
        console.log(
            "indexes:",
            Array.from(indexes).sort((a, b) => a - b)
        )
        const normals: TgdVec3[] = []
        for (let idx = 0; idx <= idxMax; idx++) {
            const item = normalsAccumulator.get(idx)
            if (!item) {
                normals.push(new TgdVec3())
            } else {
                item.normalize()
                normals.push(item)
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
