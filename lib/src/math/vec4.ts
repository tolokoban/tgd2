import { ArrayNumber3, ArrayNumber4 } from "../types"
import { TgdMat4 } from "./mat4"
import { TgdVec3 } from "./vec3"

export class TgdVec4 extends Float32Array {
    static X: Readonly<TgdVec4> = new TgdVec4(1, 0, 0, 0)
    static Y: Readonly<TgdVec4> = new TgdVec4(0, 1, 0, 0)
    static Z: Readonly<TgdVec4> = new TgdVec4(0, 0, 1, 0)
    static W: Readonly<TgdVec4> = new TgdVec4(0, 0, 0, 1)

    static newFromMix(
        [x1, y1, z1, w1 = 0]: TgdVec3 | TgdVec4 | ArrayNumber3 | ArrayNumber4,
        [x2, y2, z2, w2 = 0]: TgdVec3 | TgdVec4 | ArrayNumber3 | ArrayNumber4,
        a = 0.5
    ): TgdVec4 {
        const b = 1 - a
        const x = b * x1 + a * x2
        const y = b * y1 + a * y2
        const z = b * z1 + a * z2
        const w = b * w1 + a * w2
        return new TgdVec4(x, y, z, w)
    }

    constructor()
    constructor(vec4: TgdVec4 | ArrayNumber4)
    constructor(vec3: TgdVec3 | ArrayNumber3, w: number)
    constructor(x: number)
    constructor(x: number, y: number)
    constructor(x: number, y: number, z: number)
    constructor(x: number, y: number, z: number, w: number)

    constructor(
        x: number | TgdVec4 | TgdVec3 | ArrayNumber4 | ArrayNumber3 = 0,
        y: number = 0,
        z: number = 0,
        w: number = 1
    ) {
        super(4)
        if (x instanceof TgdVec4) {
            this.x = x.x
            this.y = x.y
            this.z = x.z
            this.w = x.w
            return
        }
        if (x instanceof TgdVec3) {
            this.x = x.x
            this.y = x.y
            this.z = x.z
            this.w = w
            return
        }
        if (Array.isArray(x)) {
            if (typeof y === "number") {
                const [xx, yy, zz] = x
                this.x = xx ?? 0
                this.y = yy ?? 0
                this.z = zz ?? 0
                this.w = y
                return
            } else {
                const [xx, yy, zz, ww] = x
                this.x = xx ?? 0
                this.y = yy ?? 0
                this.z = zz ?? 0
                this.w = ww ?? 1
                return
            }
        }
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }

    reset(x = 0, y = 0, z = 0, w = 1): this {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
        return this
    }

    from(vec: Readonly<TgdVec4 | ArrayNumber4>): this {
        const [x, y, z, w] = vec
        this.x = x
        this.y = y
        this.z = z
        this.w = w
        return this
    }

    clone() {
        return new TgdVec4(this)
    }

    mix(vec: Readonly<TgdVec4>, alpha = 0.5): this {
        this.x = (1 - alpha) * this.x + alpha * vec.x
        this.y = (1 - alpha) * this.y + alpha * vec.y
        this.z = (1 - alpha) * this.z + alpha * vec.z
        this.w = (1 - alpha) * this.w + alpha * vec.w
        return this
    }

    isEqual(vec: Readonly<TgdVec4 | ArrayNumber4>) {
        const [x, y, z, w] = vec
        if (x !== this.x) return false
        if (y !== this.y) return false
        if (z !== this.z) return false
        if (w !== this.w) return false
        return true
    }

    isClose({ x, y, z, w }: TgdVec4, epsilon = 1e-6) {
        if (Math.abs(x - this.x) > epsilon) return false
        if (Math.abs(y - this.y) > epsilon) return false
        if (Math.abs(z - this.z) > epsilon) return false
        if (Math.abs(w - this.w) > epsilon) return false
        return true
    }

    /**
     * V := M×V
     */
    applyMatrix(mat: TgdMat4): this {
        const { x, y, z, w } = this
        this.x = x * mat.m00 + y * mat.m01 + z * mat.m02 + w * mat.m03
        this.y = x * mat.m10 + y * mat.m11 + z * mat.m12 + w * mat.m13
        this.z = x * mat.m20 + y * mat.m21 + z * mat.m22 + w * mat.m23
        this.w = x * mat.m30 + y * mat.m31 + z * mat.m32 + w * mat.m33
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

    get w() {
        return this[3]
    }
    set w(value: number) {
        this[3] = value
    }

    add(
        ...vectors: (TgdVec4 | TgdVec3 | ArrayNumber4 | ArrayNumber3)[]
    ): TgdVec4 {
        for (const vec of vectors) {
            this[0] += vec[0]
            this[1] += vec[1]
            this[2] += vec[2]
            if (vec.length > 3) this[3] += (vec as ArrayNumber4)[3]
        }
        return this
    }

    subtract(vec: TgdVec4 | TgdVec3 | ArrayNumber4 | ArrayNumber3): TgdVec4 {
        this[0] -= vec[0]
        this[1] -= vec[1]
        this[2] -= vec[2]
        if (vec.length > 3) this[3] -= (vec as ArrayNumber4)[3]
        return this
    }

    scale(factor: number): this {
        this[0] *= factor
        this[1] *= factor
        this[2] *= factor
        this[3] *= factor
        return this
    }

    dot(vec: TgdVec4 | ArrayNumber4): number {
        return (
            this[0] * vec[0] +
            this[1] * vec[1] +
            this[2] * vec[2] +
            this[3] * vec[3]
        )
    }

    get size() {
        return Math.hypot(this[0], this[1], this[2], this[3])
    }

    normalize(): this {
        const squareLength =
            this[0] * this[0] +
            this[1] * this[1] +
            this[2] * this[2] +
            this[3] * this[3]
        if (squareLength === 0) return this

        return this.scale(1 / Math.sqrt(squareLength))
    }

    debug(caption = "vec4") {
        const { x, y, z, w } = this
        const out: string[] = [x, y, z, w].map(n => n.toFixed(6))
        console.log(
            `${caption}:   `,
            out.join(" | "),
            `  (length = ${this.size})`
        )
    }
}
