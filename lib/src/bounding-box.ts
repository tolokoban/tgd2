import { TgdVec3 } from "@tolokoban/tgd"
import { TgdMat4, TgdVec3, TgdVec4 } from "."
import type { ArrayNumber3, ArrayNumber4 } from "./types"

export class TgdBoundingBox {
	private xMin = Number.POSITIVE_INFINITY
	private yMin = Number.POSITIVE_INFINITY
	private zMin = Number.POSITIVE_INFINITY
	private xMax = Number.NEGATIVE_INFINITY
	private yMax = Number.NEGATIVE_INFINITY
	private zMax = Number.NEGATIVE_INFINITY

	constructor(...points: ArrayNumber3[]) {
		for (const point of points) {
			this.addPoint(...point)
		}
	}

	get min(): ArrayNumber3 {
		return [this.xMin, this.yMin, this.zMin]
	}

	get max(): ArrayNumber3 {
		return [this.xMax, this.yMax, this.zMax]
	}

	get center(): ArrayNumber3 {
		const { xMin, yMin, zMin } = this
		const { xMax, yMax, zMax } = this
		return [(xMin + xMax) * 0.5, (yMin + yMax) * 0.5, (zMin + zMax) * 0.5]
	}

	get size(): ArrayNumber3 {
		const { xMin, yMin, zMin } = this
		const { xMax, yMax, zMax } = this
		return [xMax - xMin, yMax - yMin, zMax - zMin]
	}

	copyFrom(bbox: { min: ArrayNumber3; max: ArrayNumber3 }): this {
		const [x0, y0, z0] = bbox.min
		const [x1, y1, z1] = bbox.max
		this.xMin = x0
		this.yMin = y0
		this.zMin = z0
		this.xMax = x1
		this.yMax = y1
		this.zMax = z1
		return this
	}

	clone(transfoMatrix?: TgdMat4): TgdBoundingBox {
		if (!transfoMatrix) {
			return new TgdBoundingBox(this.min, this.max)
		}

		const [x0, y0, z0] = this.min
		const [x1, y1, z1] = this.max
		const points: TgdVec4[] = [
			new TgdVec4(x0, y0, z0, 1),
			new TgdVec4(x0, y0, z1, 1),
			new TgdVec4(x0, y1, z0, 1),
			new TgdVec4(x0, y1, z1, 1),
			new TgdVec4(x1, y0, z0, 1),
			new TgdVec4(x1, y0, z1, 1),
			new TgdVec4(x1, y1, z0, 1),
			new TgdVec4(x1, y1, z1, 1),
		].map((vec) => vec.applyMatrix(transfoMatrix))
		const transformedBBox = new TgdBoundingBox()
		for (const [x, y, z] of points) {
			transformedBBox.addPoint(x, y, z)
		}
		return transformedBBox
	}

	containsPoint([x, y, z]: ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4) {
		const [x0, y0, z0] = this.min
		const [x1, y1, z1] = this.max
		if (x < x0 || x > x1) return false
		if (y < y0 || y > y1) return false
		if (z < z0 || z > z1) return false
		return true
	}

	containsBBox({
		min,
		max,
	}: {
		min: ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4
		max: ArrayNumber3 | ArrayNumber4 | TgdVec3 | TgdVec4
	}) {
		return this.containsPoint(min) && this.containsPoint(max)
	}

	addBBox(bbox: { min: ArrayNumber3; max: ArrayNumber3 }): this {
		const [x0, y0, z0] = bbox.min
		const [x1, y1, z1] = bbox.max
		this.addPoint(x0, y0, z0)
		this.addPoint(x0, y0, z1)
		this.addPoint(x0, y1, z0)
		this.addPoint(x0, y1, z1)
		this.addPoint(x1, y0, z0)
		this.addPoint(x1, y0, z1)
		this.addPoint(x1, y1, z0)
		this.addPoint(x1, y1, z1)
		return this
	}

	addPoint(x: number, y: number, z: number): this {
		this.xMin = Math.min(this.xMin, x)
		this.yMin = Math.min(this.yMin, y)
		this.zMin = Math.min(this.zMin, z)
		this.xMax = Math.max(this.xMax, x)
		this.yMax = Math.max(this.yMax, y)
		this.zMax = Math.max(this.zMax, z)
		return this
	}

	addSphere(x: number, y: number, z: number, r: number): this {
		this.addPoint(x + r, y + r, z + r)
		this.addPoint(x - r, y - r, z - r)
		return this
	}

	makeContainingCube(): TgdBoundingBox {
		const [sx, sy, sz] = this.size
		const radius = 0.5 * Math.max(sx, sy, sz)
		const bbox = new TgdBoundingBox()
		bbox.addSphere(...this.center, radius)
		return bbox
	}

	debug(caption?: string) {
		console.debug(caption ?? "TgdBoundingBox")
		console.debug(`{
    "min": ${JSON.stringify(this.min)},
    "max": ${JSON.stringify(this.max)},
    "center": ${JSON.stringify(this.center)}
}`)
	}
}
