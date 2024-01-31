import { PainterClearOptions } from "./../painter/clear"
import { TgdMat3 } from "./mat3"
import { TgdQuat } from "./quat"
import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"
/**
 * Column-first 4x4 matrix.
 *
 * `m23` means column 2 and row 3.
 *
 * This is not the same as what mathematicians are used to,
 * but its how WebGL will store matrices in memory.
 */
export class TgdMat4 extends Float32Array {
    constructor()
    constructor(mat: TgdMat4)
    constructor(
        m00: number,
        m01: number,
        m02: number,
        m03: number,
        m10: number,
        m11: number,
        m12: number,
        m13: number,
        m20: number,
        m21: number,
        m22: number,
        m23: number,
        m30: number,
        m31: number,
        m32: number,
        m33: number
    )
    constructor(
        m00: number | TgdMat4 = 1,
        m01: number = 0,
        m02: number = 0,
        m03: number = 0,
        m10: number = 0,
        m11: number = 1,
        m12: number = 0,
        m13: number = 0,
        m20: number = 0,
        m21: number = 0,
        m22: number = 1,
        m23: number = 0,
        m30: number = 0,
        m31: number = 0,
        m32: number = 0,
        m33: number = 1
    ) {
        if (typeof m00 === "number") {
            super([
                m00,
                m01,
                m02,
                m03,
                m10,
                m11,
                m12,
                m13,
                m20,
                m21,
                m22,
                m23,
                m30,
                m31,
                m32,
                m33,
            ])
        } else {
            super(m00)
        }
    }

    get translation(): TgdVec3 {
        const { m30, m31, m32 } = this
        return new TgdVec3(m30, m31, m32)
    }
    set translation(vec: TgdVec3 | TgdVec4) {
        this.m30 = vec.x
        this.m31 = vec.y
        this.m32 = vec.z
    }

    fromMat3(mat: TgdMat3): this {
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

    toAxis(axisX: TgdVec3, axisY: TgdVec3, axisZ: TgdVec3): this {
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

    fromQuat({ x, y, z, w }: TgdQuat): TgdMat4 {
        const x2 = x + x
        const y2 = y + y
        const z2 = z + z
        const xx = x * x2
        const yx = y * x2
        const yy = y * y2
        const zx = z * x2
        const zy = z * y2
        const zz = z * z2
        const wx = w * x2
        const wy = w * y2
        const wz = w * z2

        this[0] = 1 - yy - zz
        this[1] = yx + wz
        this[2] = zx - wy

        this[4] = yx - wz
        this[5] = 1 - xx - zz
        this[6] = zy + wx

        this[8] = zx + wy
        this[9] = zy - wx
        this[10] = 1 - xx - yy

        return this
    }

    get m00() {
        return this[0]
    }
    set m00(v: number) {
        this[0] = v
    }

    get m01() {
        return this[1]
    }
    set m01(v: number) {
        this[1] = v
    }

    get m02() {
        return this[2]
    }
    set m02(v: number) {
        this[2] = v
    }

    get m03() {
        return this[3]
    }
    set m03(v: number) {
        this[3] = v
    }

    get m10() {
        return this[4]
    }
    set m10(v: number) {
        this[4] = v
    }

    get m11() {
        return this[5]
    }
    set m11(v: number) {
        this[5] = v
    }

    get m12() {
        return this[6]
    }
    set m12(v: number) {
        this[6] = v
    }

    get m13() {
        return this[7]
    }
    set m13(v: number) {
        this[7] = v
    }

    get m20() {
        return this[8]
    }
    set m20(v: number) {
        this[8] = v
    }

    get m21() {
        return this[9]
    }
    set m21(v: number) {
        this[9] = v
    }

    get m22() {
        return this[10]
    }
    set m22(v: number) {
        this[10] = v
    }

    get m23() {
        return this[11]
    }
    set m23(v: number) {
        this[11] = v
    }

    get m30() {
        return this[12]
    }
    set m30(v: number) {
        this[12] = v
    }

    get m31() {
        return this[13]
    }
    set m31(v: number) {
        this[13] = v
    }

    get m32() {
        return this[14]
    }
    set m32(v: number) {
        this[14] = v
    }

    get m33() {
        return this[15]
    }
    set m33(v: number) {
        this[15] = v
    }
}
