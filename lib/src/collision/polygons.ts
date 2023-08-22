import { Vector2, subtractVectors } from "../calc"
import { Polygon, Segment } from "./types"

export class TgdCollisionPolygons {
    private readonly polygons: Polygon[] = []
    private readonly segments: Segment[] = []
    public readonly boundsMinX: number
    public readonly boundsMaxX: number
    public readonly boundsMinY: number
    public readonly boundsMaxY: number

    public hit = false
    public hitX = 0
    public hitY = 0

    constructor(polygons: Vector2[][]) {
        let minX = Number.MAX_VALUE
        let maxX = -Number.MAX_VALUE
        let minY = Number.MAX_VALUE
        let maxY = -Number.MAX_VALUE
        for (const points of polygons) {
            for (const [x, y] of points) {
                minX = Math.min(minX, x)
                minY = Math.min(minY, y)
                maxX = Math.max(maxX, x)
                maxY = Math.max(maxY, y)
            }
            this.addPoly(points)
        }
        this.boundsMinX = minX
        this.boundsMaxX = maxX
        this.boundsMinY = minY
        this.boundsMaxY = maxY
    }

    private addPoly(points: Vector2[]) {
        for (let i = 0; i < points.length; i++) {
            const a = points[i]
            const b = points[(i + 1) % points.length]
            this.segments.push({
                point: a,
                vector: subtractVectors(b, a),
            })
        }
        this.polygons.push(points)
    }

    hitTest(from: Vector2, to: Vector2) {
        const segmentA: Segment = {
            point: from,
            vector: subtractVectors(to, from),
        }
        for (const segmentB of this.segments) {
            this.intersectionTest(segmentA, segmentB)
            if (this.hit) return true
        }
        return false
    }

    private intersectionTest(segmentA: Segment, segmentB: Segment) {
        this.hit = false
        const {
            point: [ax, ay],
            vector: [AX, AY],
        } = segmentA
        const {
            point: [bx, by],
            vector: [BX, BY],
        } = segmentB
        const denom = AY * BX - AX * BY
        if (denom < 1e-9) return

        const u = by * BX - bx * BY + ax * BY - ay * BX
        if (denom > 0 && (u < 0 || u > denom)) return
        if (denom < 0 && (u > 0 || u < denom)) return

        const v = ax * AY - ay * AX + AX * by - AY * bx
        if (denom > 0 && (v < 0 || v > denom)) return
        if (denom < 0 && (v > 0 || v < denom)) return

        const factor = u / denom
        this.hit = true
        this.hitX = ax + factor * AX
        this.hitY = ay + factor * AY
    }
}
