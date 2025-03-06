import { padColOfNumbers } from "@tgd/debug"
import { TgdMat3 } from "./mat3"
import { TgdQuat } from "./quat"
import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"
import { ArrayNumber16, ArrayNumber3, ArrayNumber4 } from ".."
import { mat4 } from "gl-matrix"
/**
 * Column-first 4x4 matrix.
 *
 * - `m12` means row 2 and column 3 (__A__).
 * - `m20` means row 3 and column 1 (__B__).
 *
 * ```
 * +-+-+-+-+
 * | | | | |
 * +-+-+-+-+
 * | | |A| |
 * +-+-+-+-+
 * |B| | | |
 * +-+-+-+-+
 * | | | | |
 * +-+-+-+-+
 * ```
 *
 * This is how mathematicians use matrices.
 *
 * But, internally, for WebGL compliance, we store the data like this:
 *
 * ```
 * +--+--+--+--+
 * | 0| 4| 8|12|
 * +--+--+--+--+
 * | 1| 5| 9|13|
 * +--+--+--+--+
 * | 2| 6|10|14|
 * +--+--+--+--+
 * | 3| 7|11|15|
 * +--+--+--+--+
 * ```
 *
 * That's why is better to access members through the accessor `m00`, `m01`, etc.
 */
export class TgdMat4 extends Float32Array {
    constructor()
    constructor(mat: TgdMat4)
    constructor(
        m00: number,
        m10: number,
        m20: number,
        m30: number,
        m01: number,
        m11: number,
        m21: number,
        m31: number,
        m02: number,
        m12: number,
        m22: number,
        m32: number,
        m03: number,
        m13: number,
        m23: number,
        m33: number
    )
    constructor(
        m00: number | TgdMat4 = 1,
        m10: number = 0,
        m20: number = 0,
        m30: number = 0,
        m01: number = 0,
        m11: number = 1,
        m21: number = 0,
        m31: number = 0,
        m02: number = 0,
        m12: number = 0,
        m22: number = 1,
        m32: number = 0,
        m03: number = 0,
        m13: number = 0,
        m23: number = 0,
        m33: number = 1
    ) {
        if (typeof m00 === "number") {
            super([
                m00,
                m10,
                m20,
                m30,
                m01,
                m11,
                m21,
                m31,
                m02,
                m12,
                m22,
                m32,
                m03,
                m13,
                m23,
                m33,
            ])
        } else {
            super(m00)
        }
    }

    reset(
        row0: ArrayNumber4 | TgdVec4 = TgdVec4.X,
        row1: ArrayNumber4 | TgdVec4 = TgdVec4.Y,
        row2: ArrayNumber4 | TgdVec4 = TgdVec4.Z,
        row3: ArrayNumber4 | TgdVec4 = TgdVec4.W
    ): this {
        const [m00, m01, m02, m03] = row0
        const [m10, m11, m12, m13] = row1
        const [m20, m21, m22, m23] = row2
        const [m30, m31, m32, m33] = row3
        this.m00 = m00
        this.m01 = m01
        this.m02 = m02
        this.m03 = m03
        this.m10 = m10
        this.m11 = m11
        this.m12 = m12
        this.m13 = m13
        this.m20 = m20
        this.m21 = m21
        this.m22 = m22
        this.m23 = m23
        this.m30 = m30
        this.m31 = m31
        this.m32 = m32
        this.m33 = m33
        return this
    }

    multiply(mat: TgdMat4): this {
        mat4.multiply(this, this, mat)
        return this
    }

    /**
     * @param from This matrix will become the inversion of `from`.
     * If not defined, the matrix will invert itself.
     */

    invert(from?: TgdMat4): this {
        mat4.invert(this, from ?? this)
        return this
    }

    get translation(): TgdVec3 {
        const { m03, m13, m23 } = this
        return new TgdVec3(m03, m13, m23)
    }
    set translation(vec: TgdVec3 | TgdVec4 | ArrayNumber3 | ArrayNumber4) {
        const [x, y, z] = vec
        this.m03 = x
        this.m13 = y
        this.m23 = z
    }

    toTanslation(target: TgdVec3 | TgdVec4): this {
        target.x = this.m03
        target.y = this.m13
        target.z = this.m23
        return this
    }

    /**
     * Add `delta` to the current translation.
     */
    translate(delta: TgdVec3 | TgdVec4 | ArrayNumber3 | ArrayNumber4): this {
        const [x, y, z] = delta
        this.m03 += x
        this.m13 += y
        this.m23 += z
        return this
    }

    from(mat: TgdMat4 | ArrayNumber16): this {
        for (let index = 0; index < this.length; index++) {
            this[index] = mat[index] ?? 0
        }
        return this
    }

    fromMat3(mat: TgdMat3 | TgdMat4): this {
        this.m00 = mat.m00
        this.m01 = mat.m01
        this.m02 = mat.m02
        this.m10 = mat.m10
        this.m11 = mat.m11
        this.m12 = mat.m12
        this.m20 = mat.m20
        this.m21 = mat.m21
        this.m22 = mat.m22
        return this
    }

    toAxes(axisX: TgdVec3, axisY: TgdVec3, axisZ: TgdVec3): this {
        this.toAxisX(axisX)
        this.toAxisY(axisY)
        return this.toAxisZ(axisZ)
    }

    toAxisX(axisX: TgdVec3): this {
        axisX.x = this.m00
        axisX.y = this.m01
        axisX.z = this.m02
        return this
    }

    toAxisY(axisY: TgdVec3): this {
        axisY.x = this.m10
        axisY.y = this.m11
        axisY.z = this.m12
        return this
    }

    toAxisZ(axisZ: TgdVec3): this {
        axisZ.x = this.m20
        axisZ.y = this.m21
        axisZ.z = this.m22
        return this
    }

    fromQuat({ x, y, z, w }: Readonly<TgdQuat>): this {
        mat4.fromQuat(this, [x, y, z, w])
        return this
    }

    get m00() {
        return this[IDX_m00]
    }
    set m00(v: number) {
        this[IDX_m00] = v
    }
    get m10() {
        return this[IDX_m10]
    }
    set m10(v: number) {
        this[IDX_m10] = v
    }
    get m20() {
        return this[IDX_m20]
    }
    set m20(v: number) {
        this[IDX_m20] = v
    }
    get m30() {
        return this[IDX_m30]
    }
    set m30(v: number) {
        this[IDX_m30] = v
    }
    get m01() {
        return this[IDX_m01]
    }
    set m01(v: number) {
        this[IDX_m01] = v
    }
    get m11() {
        return this[IDX_m11]
    }
    set m11(v: number) {
        this[IDX_m11] = v
    }
    get m21() {
        return this[IDX_m21]
    }
    set m21(v: number) {
        this[IDX_m21] = v
    }
    get m31() {
        return this[IDX_m31]
    }
    set m31(v: number) {
        this[IDX_m31] = v
    }
    get m02() {
        return this[IDX_m02]
    }
    set m02(v: number) {
        this[IDX_m02] = v
    }
    get m12() {
        return this[IDX_m12]
    }
    set m12(v: number) {
        this[IDX_m12] = v
    }
    get m22() {
        return this[IDX_m22]
    }
    set m22(v: number) {
        this[IDX_m22] = v
    }
    get m32() {
        return this[IDX_m32]
    }
    set m32(v: number) {
        this[IDX_m32] = v
    }
    get m03() {
        return this[IDX_m03]
    }
    set m03(v: number) {
        this[IDX_m03] = v
    }
    get m13() {
        return this[IDX_m13]
    }
    set m13(v: number) {
        this[IDX_m13] = v
    }
    get m23() {
        return this[IDX_m23]
    }
    set m23(v: number) {
        this[IDX_m23] = v
    }
    get m33() {
        return this[IDX_m33]
    }
    set m33(v: number) {
        this[IDX_m33] = v
    }

    debug(caption = "Mat4") {
        const c0 = padColOfNumbers([this.m00, this.m01, this.m02, this.m03])
        const c1 = padColOfNumbers([this.m10, this.m11, this.m12, this.m13])
        const c2 = padColOfNumbers([this.m20, this.m21, this.m22, this.m23])
        const c3 = padColOfNumbers([this.m30, this.m31, this.m32, this.m33])

        console.log(caption)
        console.log("   ", [c0[0], c1[0], c2[0], c3[0]].join(" | "))
        console.log("   ", [c0[1], c1[1], c2[1], c3[1]].join(" | "))
        console.log("   ", [c0[2], c1[2], c2[2], c3[2]].join(" | "))
        console.log("   ", [c0[3], c1[3], c2[3], c3[3]].join(" | "))
    }
}

const IDX_m00 = 0
const IDX_m10 = 1
const IDX_m20 = 2
const IDX_m30 = 3
const IDX_m01 = 4
const IDX_m11 = 5
const IDX_m21 = 6
const IDX_m31 = 7
const IDX_m02 = 8
const IDX_m12 = 9
const IDX_m22 = 10
const IDX_m32 = 11
const IDX_m03 = 12
const IDX_m13 = 13
const IDX_m23 = 14
const IDX_m33 = 15
