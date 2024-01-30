export class TgdVec4 extends Float32Array {
    constructor()
    constructor(x: TgdVec4)
    constructor(x: number)
    constructor(x: number, y: number)
    constructor(x: number, y: number, z: number)
    constructor(x: number, y: number, z: number, w: number)
    constructor(
        x: number | TgdVec4 = 0,
        y: number = 0,
        z: number = 0,
        w: number = 1
    ) {
        super(4)
        if (typeof x !== "number") {
            this.x = x.x
            this.y = x.y
            this.z = x.z
            this.w = x.w
            return
        }
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }

    clone() {
        return new TgdVec4(this)
    }

    isEqual({ x, y, z, w }: TgdVec4) {
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

    add(...vectors: TgdVec4[]): TgdVec4 {
        for (const vec of vectors) {
            this[0] += vec[0]
            this[1] += vec[1]
            this[2] += vec[2]
            this[3] += vec[3]
        }
        return this
    }

    subtract(vec: TgdVec4): TgdVec4 {
        this[0] -= vec[0]
        this[1] -= vec[1]
        this[2] -= vec[2]
        this[3] -= vec[3]
        return this
    }

    scale(factor: number): TgdVec4 {
        this[0] *= factor
        this[1] *= factor
        this[2] *= factor
        this[3] *= factor
        return this
    }

    dot(vec: TgdVec4): number {
        return (
            this[0] * vec[0] +
            this[1] * vec[1] +
            this[2] * vec[2] +
            this[3] * vec[3]
        )
    }

    get size() {
        return Math.sqrt(
            this[0] * this[0] +
                this[1] * this[1] +
                this[2] * this[2] +
                this[3] * this[3]
        )
    }

    normalize(): TgdVec4 {
        const squareLength =
            this[0] * this[0] +
            this[1] * this[1] +
            this[2] * this[2] +
            this[3] * this[3]
        if (squareLength === 0) return this

        return this.scale(1 / Math.sqrt(squareLength))
    }
}
