import { TgdMat3 } from "./mat3"
import { TgdMat4 } from "./mat4"
import { TgdVec4 } from "./vec4"

export class TgdVec3 extends Float32Array {
    constructor()
    constructor(x: TgdVec3)
    constructor(x: number)
    constructor(x: number, y: number)
    constructor(x: number, y: number, z: number)
    constructor(x: number | TgdVec3 = 0, y: number = 0, z: number = 0) {
        super(3)
        if (typeof x !== "number") {
            this.x = x.x
            this.y = x.y
            this.z = x.z
            return
        }
        this.x = x
        this.y = y
        this.z = z
    }

    clone() {
        return new TgdVec3(this)
    }

    isEqual({ x, y, z }: TgdVec3) {
        if (x !== this.x) return false
        if (y !== this.y) return false
        if (z !== this.z) return false
        return true
    }

    isClose({ x, y, z }: TgdVec3, epsilon = 1e-6) {
        if (Math.abs(x - this.x) > epsilon) return false
        if (Math.abs(y - this.y) > epsilon) return false
        if (Math.abs(z - this.z) > epsilon) return false
        return true
    }

    /**
     * V := M×V
     */
    applyMatrix(mat: TgdMat3 | TgdMat4): TgdVec3 {
        const { x, y, z } = this
        this.x = x * mat.m00 + y * mat.m10 + z * mat.m20
        this.y = x * mat.m01 + y * mat.m11 + z * mat.m21
        this.z = x * mat.m02 + y * mat.m12 + z * mat.m22
        return this
    }

    from({ x, y, z }: TgdVec3): this {
        this.x = x
        this.y = y
        this.z = z
        return this
    }

    get x() {
        return this[0]
    }
    set x(value: number) {
        this[0] = value
    }

    get y() {
        return this[1]
    }
    set y(value: number) {
        this[1] = value
    }

    get z() {
        return this[2]
    }
    set z(value: number) {
        this[2] = value
    }

    add(...vectors: TgdVec3[]): this {
        for (const vec of vectors) {
            this[0] += vec[0]
            this[1] += vec[1]
            this[2] += vec[2]
        }
        return this
    }

    addWithScale({ x, y, z }: TgdVec3 | TgdVec4, scale = 1): this {
        this[0] += x * scale
        this[1] += y * scale
        this[2] += z * scale
        return this
    }

    subtract(vec: TgdVec3): TgdVec3 {
        this[0] -= vec[0]
        this[1] -= vec[1]
        this[2] -= vec[2]
        return this
    }

    scale(factor: number): TgdVec3 {
        this[0] *= factor
        this[1] *= factor
        this[2] *= factor
        return this
    }

    dot(vec: TgdVec3): number {
        return this[0] * vec[0] + this[1] * vec[1] + this[2] * vec[2]
    }

    get size() {
        return Math.sqrt(
            this[0] * this[0] + this[1] * this[1] + this[2] * this[2]
        )
    }

    normalize(): TgdVec3 {
        const squareLength =
            this[0] * this[0] + this[1] * this[1] + this[2] * this[2]
        if (squareLength === 0) return this

        return this.scale(1 / Math.sqrt(squareLength))
    }
}
