import { TgdDataset, TgdDatasetType, TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdVec3 } from "@tgd/math"
import {
	isTgdTypeArrayForElements,
	TgdTypeArrayForElements,
	WebglDrawMode,
} from "@tgd/types"
import { webglElementTypeFromTypedArray, webglLookup } from "@tgd/utils"
import { TgdBoundingBox, tgdGeometryJoin } from ".."

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
	/**
	 * Name of the vec4 tangent attribute.
	 * `xyz` is the tangent, and `w` is the handedness of the TBN basis
	 * (`+1` or `-1`), as in glTF: `bitangent = cross(normal, tangent.xyz) * tangent.w`.
	 * Default to `CUSTOM_ATTRIBUTE_3`, like {@link TgdMaterial.attTangent}.
	 */
	attTangent?: string
	attUV?: string
}

export interface TgdGeometryOptions2 extends TgdGeometryOptionsCommon {
	attPosition: Float32Attribute
	attNormal?: Float32Attribute
	/**
	 * Tangents as vec4: `w` holds the handedness of the TBN basis (`+1` or `-1`).
	 */
	attTangent?: Float32Attribute
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
	/**
	 * Name of the vec4 TANGENT attribute in the shader.
	 * `w` holds the handedness of the TBN basis (`+1` or `-1`):
	 * `bitangent = cross(normal, tangent.xyz) * tangent.w`.
	 */
	public readonly attTangent: string
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
		const {
			count,
			drawMode,
			elements,
			attPosition,
			attNormal,
			attTangent,
			attUV,
			computeNormalsIfMissing,
		} = options
		definition[attPosition.name] = attPosition.type ?? "vec3"
		if (attNormal) definition[attNormal.name] = attNormal.type ?? "vec3"
		if (attTangent) definition[attTangent.name] = attTangent.type ?? "vec4"
		if (attUV) definition[attUV.name] = attUV.type ?? "vec2"
		const dataset = new TgdDataset(definition)
		dataset.set(attPosition.name, attPosition.data)
		if (attNormal) dataset.set(attNormal.name, attNormal.data)
		if (attTangent) dataset.set(attTangent.name, attTangent.data)
		if (attUV) dataset.set(attUV.name, attUV.data)
		return new TgdGeometry({
			dataset,
			count,
			drawMode,
			elements,
			attPosition: attPosition.name,
			attNormal: attNormal?.name,
			attTangent: attTangent?.name,
			attUV: attUV?.name,
			computeNormalsIfMissing,
		})
	}

	public static fitElementsInTypeArray(
		elements: TgdTypeArrayForElements | number[],
	): TgdTypeArrayForElements {
		if (isTgdTypeArrayForElements(elements)) return elements

		const max = elements.reduce((prv, cur) => Math.max(prv, cur), 0)
		if (max <= 0xff) return new Uint8Array(elements)
		if (max <= 0xffff) return new Uint16Array(elements)
		return new Uint32Array(elements)
	}

	public static join(geometries: TgdGeometry[]): TgdGeometry {
		return tgdGeometryJoin(geometries)
	}

	constructor(options: TgdGeometryOptions1) {
		const {
			dataset,
			drawMode = "TRIANGLES",
			attPosition = "POSITION",
			attNormal = "NORMAL",
			attTangent = "CUSTOM_ATTRIBUTE_3",
			attUV = "TEXCOORD_0",
			name = `TgdGeometry#${TgdGeometry.counter++}`,
		} = options
		this.name = name
		this._dataset = dataset
		this.drawMode =
			typeof drawMode === "number" ? drawMode : WebGL2RenderingContext[drawMode]
		const { elements } = options
		this.elements = elements
		this._elementsType = elements ? webglElementTypeFromTypedArray(elements) : 0
		this.attPosition = attPosition
		this.attNormal = attNormal
		this.attTangent = attTangent
		this.attUV = attUV
		this.count = elements?.length ?? dataset.count
		if (options.computeNormalsIfMissing) this.computeNormals()
	}

	debug(caption?: string) {
		const label = `[${caption ?? this.name}]`
		this.dataset.debug(`${label} Dataset`)
		console.debug(`${label} Count:`, this.count)
		console.debug(`${label} DrawMode:`, webglLookup(this.drawMode))
		console.debug(this.computeBoundingBox())
	}

	get dataset(): Readonly<TgdDataset> {
		return this._dataset
	}

	get elementsType() {
		return this._elementsType
	}

	/**
	 * Return the index of a vertex.
	 * If no elements array has been defined, we return `index` verbatim.
	 * Otherwise, we use this elements array.
	 */
	public getElement(index: number): number {
		return this.elements?.[index] ?? index
	}

	public computeNormals(): this {
		let normals: TgdVec3[] = []
		if (this.drawMode === WebGL2RenderingContext.TRIANGLES) {
			normals = this.computeNormalsForTrianglesDrawMode()
		} else {
			console.error(
				"We don't know how to compute normals for this draw mode:",
				this.drawMode,
			)
			return this
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
		return this
	}

	/**
	 * Compute the vec4 tangents from the positions, normals and UVs,
	 * and store them in the {@link attTangent} attribute (created if missing).
	 *
	 * `xyz` is the tangent, orthogonal to the normal, and `w` is the handedness
	 * of the TBN basis (`+1` or `-1`), as in glTF:
	 * `bitangent = cross(normal, tangent.xyz) * tangent.w`.
	 *
	 * The tangent of each triangle points towards increasing U.
	 * It is accumulated on its vertices (weighted by the area), then
	 * orthogonalized against the normal of each vertex (Gram-Schmidt).
	 *
	 * Normals are computed first if they are missing.
	 * The geometry must use the TRIANGLES draw mode and have UVs.
	 */
	public computeTangents(): this {
		if (this.drawMode !== WebGL2RenderingContext.TRIANGLES) {
			console.error(
				"We don't know how to compute tangents for this draw mode:",
				this.drawMode,
			)
			return this
		}
		if (!this.dataset.hasAttribute(this.attUV)) {
			console.error(
				`Unable to compute tangents without UVs (attribute "${this.attUV}")!`,
			)
			return this
		}
		if (!this.dataset.hasAttribute(this.attNormal)) this.computeNormals()

		const { count } = this.dataset
		const tangents = new Float32Array(count * 3)
		const bitangents = new Float32Array(count * 3)
		// Sum of the lengths of the contributions, to detect when they cancel each other.
		const weights = new Float32Array(count)
		const position = this.dataset.getAttribAccessor(this.attPosition)
		const uv = this.dataset.getAttribAccessor(this.attUV)
		for (let element = 0; element + 2 < this.count; element += 3) {
			const i0 = this.getElement(element)
			const i1 = this.getElement(element + 1)
			const i2 = this.getElement(element + 2)
			const x1 = position.get(i1, 0) - position.get(i0, 0)
			const y1 = position.get(i1, 1) - position.get(i0, 1)
			const z1 = position.get(i1, 2) - position.get(i0, 2)
			const x2 = position.get(i2, 0) - position.get(i0, 0)
			const y2 = position.get(i2, 1) - position.get(i0, 1)
			const z2 = position.get(i2, 2) - position.get(i0, 2)
			const s1 = uv.get(i1, 0) - uv.get(i0, 0)
			const t1 = uv.get(i1, 1) - uv.get(i0, 1)
			const s2 = uv.get(i2, 0) - uv.get(i0, 0)
			const t2 = uv.get(i2, 1) - uv.get(i0, 1)
			const det = s1 * t2 - s2 * t1
			// Degenerated UVs: this triangle gives no direction.
			if (Math.abs(det) < 1e-12) continue

			const r = 1 / det
			const tx = (t2 * x1 - t1 * x2) * r
			const ty = (t2 * y1 - t1 * y2) * r
			const tz = (t2 * z1 - t1 * z2) * r
			const bx = (s1 * x2 - s2 * x1) * r
			const by = (s1 * y2 - s2 * y1) * r
			const bz = (s1 * z2 - s2 * z1) * r
			const weight = Math.hypot(tx, ty, tz)
			for (const index of [i0, i1, i2]) {
				weights[index] += weight
				tangents[index * 3] += tx
				tangents[index * 3 + 1] += ty
				tangents[index * 3 + 2] += tz
				bitangents[index * 3] += bx
				bitangents[index * 3 + 1] += by
				bitangents[index * 3 + 2] += bz
			}
		}
		const normal = this.dataset.getAttribAccessor(this.attNormal)
		const values = new Float32Array(count * 4)
		const N = new TgdVec3()
		const T = new TgdVec3()
		const B = new TgdVec3()
		for (let index = 0; index < count; index++) {
			N.reset(normal.get(index, 0), normal.get(index, 1), normal.get(index, 2))
			N.normalize()
			T.reset(tangents[index * 3], tangents[index * 3 + 1], tangents[index * 3 + 2])
			B.reset(
				bitangents[index * 3],
				bitangents[index * 3 + 1],
				bitangents[index * 3 + 2],
			)
			// Gram-Schmidt: remove the component along the normal.
			T.subtract(new TgdVec3(N).scale(N.dot(T)))
			// The UV gradients of the triangles around this vertex cancel each other
			// (for instance at the corner of a box where 3 faces share the same UV).
			if (T.size <= 1e-4 * weights[index]) anyOrthogonal(N, T)
			T.normalize()
			const w = new TgdVec3(N).cross(T).dot(B) < 0 ? -1 : +1
			values.set([T.x, T.y, T.z, w], index * 4)
		}
		this.dataset.addAttributes({
			[this.attTangent]: "vec4",
		})
		this.dataset.set(this.attTangent, values)
		return this
	}

	public computeBoundingBox(): TgdBoundingBox {
		const bbox = new TgdBoundingBox()
		const { get } = this.dataset.getAttribAccessor(this.attPosition)
		for (let index = 0; index < this.count; index++) {
			const x = get(index, 0)
			const y = get(index, 1)
			const z = get(index, 2)
			bbox.addPoint(x, y, z)
		}
		return bbox
	}

	private computeNormalsForTrianglesDrawMode() {
		const ds = this.dataset
		const normalsAccumulator = new Map<number, TgdVec3>()
		const addNormal = (index: number, A: TgdVec3, B: TgdVec3, C: TgdVec3) => {
			const norm = computeNormal(A, B, C)
			const item = normalsAccumulator.get(index)
			if (item) {
				item.add(norm)
			} else {
				normalsAccumulator.set(index, new TgdVec3(norm.x, norm.y, norm.z))
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
			const A = new TgdVec3(get(index0, 0), get(index0, 1), get(index0, 2))
			const B = new TgdVec3(get(index1, 0), get(index1, 1), get(index1, 2))
			const C = new TgdVec3(get(index2, 0), get(index2, 1), get(index2, 2))
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

/**
 * Store in `out` a unit vector orthogonal to `normal`.
 * Used when a vertex has no usable tangent (no UV gradient).
 */
function anyOrthogonal(normal: TgdVec3, out: TgdVec3) {
	if (Math.abs(normal.x) < 0.9) out.reset(1, 0, 0)
	else out.reset(0, 1, 0)
	out.subtract(new TgdVec3(normal).scale(normal.dot(out))).normalize()
}
