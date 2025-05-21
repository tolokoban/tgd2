import { padColOfNumbers } from "@tgd/debug"
import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"
import { TgdMat4 } from "./mat4"
import { mat2 } from "gl-matrix"
import { TgdVec2 } from "./vec2"
import { TgdMat3 } from "./mat3"

/**
 * Column-first 2x2 matrix.
 *
 * - `m10` means row 2 and column 1 (__A__).
 *
 * That's why is better to access members through the accessor `m00`, `m01`, etc.
 */
export class TgdMat2 extends Float32Array {
    constructor()
    constructor(mat: TgdMat2)
    constructor(
        column1: TgdVec2 | TgdVec3 | TgdVec4,
        column2: TgdVec2 | TgdVec3 | TgdVec4
    )
    constructor(m00: number, m10: number, m01: number, m11: number)
    constructor(
        m00:
            | number
            | TgdVec2
            | TgdVec3
            | TgdVec4
            | TgdMat2
            | TgdMat3
            | TgdMat4 = 1,
        m10: number | TgdVec2 | TgdVec3 | TgdVec4 = 0,
        m01: number = 0,
        m11: number = 1
    ) {
        if (typeof m00 === "number" && typeof m10 === "number") {
            super([m00, m10, m01, m11])
        } else if (
            (m00 instanceof TgdVec3 || m00 instanceof TgdVec4) &&
            (m10 instanceof TgdVec3 || m10 instanceof TgdVec4)
        ) {
            const col1 = m00
            const col2 = m10
            // prettier-ignore
            super([
                col1.x, col1.y,
                col2.x, col2.y,
            ])
        } else if (
            m00 instanceof TgdMat2 ||
            m00 instanceof TgdMat3 ||
            m00 instanceof TgdMat4
        ) {
            const mat = m00
            super([mat.m00, mat.m10, mat.m01, mat.m11])
        } else {
            // eslint-disable-next-line prefer-rest-params
            console.error("[TgdMat3]", arguments)
            throw new Error(`Invalid TgdMat3 initialization!`)
        }
    }

    multiply(mat: TgdMat2): this {
        mat2.multiply(this, this, mat)
        return this
    }

    transpose(): TgdMat2 {
        const temporary = this.m10
        this.m10 = this.m01
        this.m01 = temporary
        return this
    }

    scale(factor: number): this {
        this[0] *= factor
        this[1] *= factor
        this[2] *= factor
        this[3] *= factor
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

    debug(caption = "Mat3") {
        const row0 = padColOfNumbers([this.m00, this.m01])
        const row1 = padColOfNumbers([this.m10, this.m11])

        console.log(caption, this.slice())
        console.log("   ", row0.join(" | "))
        console.log("   ", row1.join(" | "))
    }
}

const IDX_m00 = 0
const IDX_m10 = 1
const IDX_m01 = 2
const IDX_m11 = 3
