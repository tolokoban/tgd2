import { padColOfNumbers } from "@tgd/debug"
import { TgdQuat } from "./quat"
import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"
import { TgdMat4 } from "./mat4"
import { mat3 } from "gl-matrix"

/**
 * Column-first 3x3 matrix.
 *
 * - `m12` means row 2 and column 3 (__A__).
 * - `m20` means row 3 and column 1 (__B__).
 *
 * ```
 * +-+-+-+
 * | | | |
 * +-+-+-+
 * | | |A|
 * +-+-+-+
 * |B| | |
 * +-+-+-+
 * ```
 *
 * This is how mathematicians use matrices.
 *
 * But, internally, for WebGL compliance, we store the data like this:
 *
 * ```
 * +-+-+-+
 * |0|3|6|
 * +-+-+-+
 * |1|4|7|
 * +-+-+-+
 * |2|5|8|
 * +-+-+-+
 * ```
 *
 * That's why is better to access members through the accessor `m00`, `m01`, etc.
 */
export class TgdMat3 extends Float32Array {
    constructor()
    constructor(mat: TgdMat3)
    constructor(
        column1: TgdVec3 | TgdVec4,
        column2: TgdVec3 | TgdVec4,
        column3: TgdVec3 | TgdVec4
    )
    constructor(
        m00: number,
        m10: number,
        m20: number,
        m01: number,
        m11: number,
        m21: number,
        m02: number,
        m12: number,
        m22: number
    )
    constructor(
        m00: number | TgdVec3 | TgdVec4 | TgdMat3 | TgdMat4 = 1,
        m10: number | TgdVec3 | TgdVec4 = 0,
        m20: number | TgdVec3 | TgdVec4 = 0,
        m01: number = 0,
        m11: number = 1,
        m21: number = 0,
        m02: number = 0,
        m12: number = 0,
        m22: number = 1
    ) {
        if (
            typeof m00 === "number" &&
            typeof m10 === "number" &&
            typeof m20 === "number"
        ) {
            super([m00, m10, m20, m01, m11, m21, m02, m12, m22])
        } else if (
            (m00 instanceof TgdVec3 || m00 instanceof TgdVec4) &&
            (m10 instanceof TgdVec3 || m10 instanceof TgdVec4) &&
            (m20 instanceof TgdVec3 || m20 instanceof TgdVec4)
        ) {
            const col1 = m00
            const col2 = m10
            const col3 = m20
            // prettier-ignore
            super([
                col1.x, col1.y, col1.z,
                col2.x, col2.y, col2.z,
                col3.x, col3.y, col3.z
            ])
        } else if (m00 instanceof TgdMat3) {
            const mat3 = m00
            super([
                mat3.m00,
                mat3.m10,
                mat3.m20,
                mat3.m01,
                mat3.m11,
                mat3.m21,
                mat3.m02,
                mat3.m12,
                mat3.m22,
            ])
        } else if (m00 instanceof TgdMat4) {
            const mat4 = m00
            super([
                mat4.m00,
                mat4.m10,
                mat4.m20,
                mat4.m01,
                mat4.m11,
                mat4.m21,
                mat4.m02,
                mat4.m12,
                mat4.m22,
            ])
        } else {
            // eslint-disable-next-line prefer-rest-params
            console.error("[TgdMat3]", arguments)
            throw new Error(`Invalid TgdMat3 initialization!`)
        }
    }

    multiply(mat: TgdMat3): this {
        mat3.multiply(this, this, mat)
        return this
    }

    transpose(): TgdMat3 {
        let temporary = this.m10
        this.m10 = this.m01
        this.m01 = temporary
        temporary = this.m20
        this.m20 = this.m02
        this.m02 = temporary
        temporary = this.m21
        this.m21 = this.m12
        this.m12 = temporary
        return this
    }

    fromQuat({ x, y, z, w }: Readonly<TgdQuat>): TgdMat3 {
        mat3.fromQuat(this, [x, y, z, w])
        return this
    }

    toAxes(axisX: TgdVec3, axisY: TgdVec3, axisZ: TgdVec3) {
        this.toAxisX(axisX)
        this.toAxisY(axisY)
        return this.toAxisZ(axisZ)
    }

    toAxisX(axisX: TgdVec3) {
        axisX.x = this.m00
        axisX.y = this.m01
        axisX.z = this.m02
        return this
    }

    toAxisY(axisY: TgdVec3) {
        axisY.x = this.m10
        axisY.y = this.m11
        axisY.z = this.m12
        return this
    }

    toAxisZ(axisZ: TgdVec3) {
        axisZ.x = this.m20
        axisZ.y = this.m21
        axisZ.z = this.m22
        return this
    }

    scale(factor: number): this {
        this[0] *= factor
        this[1] *= factor
        this[2] *= factor
        this[3] *= factor
        this[4] *= factor
        this[5] *= factor
        this[6] *= factor
        this[7] *= factor
        this[8] *= factor
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

    debug(caption = "Mat3") {
        const c0 = padColOfNumbers([this.m00, this.m01, this.m02])
        const c1 = padColOfNumbers([this.m10, this.m11, this.m12])
        const c2 = padColOfNumbers([this.m20, this.m21, this.m22])

        console.log(caption)
        console.log("   ", [c0[0], c1[0], c2[0]].join(" | "))
        console.log("   ", [c0[1], c1[1], c2[1]].join(" | "))
        console.log("   ", [c0[2], c1[2], c2[2]].join(" | "))
    }
}

const IDX_m00 = 0
const IDX_m10 = 1
const IDX_m20 = 2
const IDX_m01 = 3
const IDX_m11 = 4
const IDX_m21 = 5
const IDX_m02 = 6
const IDX_m12 = 7
const IDX_m22 = 8
