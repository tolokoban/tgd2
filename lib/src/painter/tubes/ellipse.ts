import { SectionPoint } from "./types"
import { TgdVec3 } from "@tgd/index"
import { Vertices } from "./vertices"

const EPSILON = 1e-12

/**
 * This class deals with the joint between two segments,
 * and provide the points of the previous and next ellipses.
 *
 * ```
 * -----+
 *      |   +
 *      |  / \
 *      | /   \
 *      |/
 * -----+
 *       \
 *        \
 * ```
 */
export class Ellipse {
    public readonly prvPointsIndexes: number[] = []
    public readonly nxtPointsIndexes: number[] = []

    private vecY = new TgdVec3()
    private vecPrvX = new TgdVec3()
    private vecPrvZ = new TgdVec3()
    private vecNxtX = new TgdVec3()
    private vecNxtZ = new TgdVec3()
    private scaleX = 1
    private shiftZ = 0
    private vecPrv = new TgdVec3()

    constructor(
        prv: SectionPoint | undefined,
        cur: SectionPoint,
        nxt: SectionPoint | undefined,
        roundness: number,
        vertices: Vertices,
        elements: number[],
    ) {}

    private computeAxis(prv: SectionPoint | undefined, cur: SectionPoint, nxt: SectionPoint | undefined) {
        if (!prv && !nxt) throw new Error("Cannot compute axis without at least a previous or next point.")

        // const { vecZ, vecPrv, vecX, vecY } = this
        // vecZ.reset(...nxt.pos)
        //     .subtract(cur.pos)
        //     .normalize()
        // vecPrv
        //     .reset(...prv.pos)
        //     .subtract(cur.pos)
        //     .normalize()
        // vecY.fromCross(vecZ, vecPrv)
        // const lenY = vecY.length
        // vecX.fromCross(vecY, vecZ)
        // const lenX = vecX.length
        // if (lenY > EPSILON && lenX > EPSILON) {
        //     vecX.scale(1 / lenX)
        //     vecY.scale(1 / lenY)
        //     this.scaleX = 1 / Math.sin(Math.acos(vecX.dot(vecY)))
        //     return this
        // }
        // // Segments are perfectly aligned.
        // vecX.fromCross([0, 1, 0], vecZ)
        // if (vecX.length < EPSILON) {
        //     vecX.fromCross([0.24253562503633294, 0.9701425001453318, 0], vecZ)
        // }
        // vecY.fromCross(vecZ, vecX)
        // this.scaleX = 1
        // return this
    }
}
