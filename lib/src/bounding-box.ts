import { ArrayNumber3 } from "./types"

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
