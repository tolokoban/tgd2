import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"

export class TgdQuat extends TgdVec4 {
    constructor()
    constructor(source: TgdQuat)
    constructor(source: TgdVec4)
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
        if (typeof x === "number") super(x, y, z, w)
        else super(x)
    }

    clone(): TgdQuat {
        return new TgdQuat(this)
    }

    multiply(quat: TgdQuat): TgdQuat {
        const [qx, qy, qz, qw] = this
        const [rx, ry, rz, rw] = quat
        this[0] = rw * qx + rx * qw - ry * qz + rz * qy
        this[1] = rw * qy + rx * qz + ry * qw - rz * qx
        this[2] = rw * qz - rx * qy + ry * qx + rz * qw
        this[3] = rw * qw - rx * qx - ry * qy - rz * qz
        return this
    }

    fromAxis(axisX: TgdVec3, axisY: TgdVec3, axisZ: TgdVec3) {
        // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
        // article "Quaternion Calculus and Fast Animation".
        const fTrace = axisX.x + axisY.y + axisZ.z

        if (fTrace > 0.0) {
            // |w| > 1/2, may as well choose w > 1/2
            const fRoot = Math.sqrt(fTrace + 1.0) // 2w
            this.w = 0.5 * fRoot
            const halfRoot = 0.5 / fRoot // 1/(4w)
            this.x = (axisY.z - axisZ.y) * halfRoot
            this.y = (axisZ.x - axisX.z) * halfRoot
            this.z = (axisX.y - axisY.x) * halfRoot
        } else {
            // |w| <= 1/2
            let i = 0
            if (m[4] > m[0]) i = 1
            if (m[8] > m[i * 3 + i]) i = 2
            let j = (i + 1) % 3
            let k = (i + 2) % 3

            fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0)
            out[i] = 0.5 * fRoot
            fRoot = 0.5 / fRoot
            out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot
            out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot
            out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot
        }
    }

    rotateAroundX(angleInRadians: number): this {
        const rad = angleInRadians * 0.5

        const ax = this[0]
        const ay = this[1]
        const az = this[2]
        const aw = this[3]
        const bx = Math.sin(rad)
        const bw = Math.cos(rad)

        this[0] = ax * bw + aw * bx
        this[1] = ay * bw + az * bx
        this[2] = az * bw - ay * bx
        this[3] = aw * bw - ax * bx
        return this
    }

    rotateAroundY(angleInRadians: number): this {
        const rad = angleInRadians * 0.5

        const ax = this[0]
        const ay = this[1]
        const az = this[2]
        const aw = this[3]
        const by = Math.sin(rad)
        const bw = Math.cos(rad)

        this[0] = ax * bw - az * by
        this[1] = ay * bw + aw * by
        this[2] = az * bw + ax * by
        this[3] = aw * bw - ay * by
        return this
    }

    rotateAroundZ(angleInRadians: number): this {
        const rad = angleInRadians * 0.5

        const ax = this[0]
        const ay = this[1]
        const az = this[2]
        const aw = this[3]
        const bz = Math.sin(rad)
        const bw = Math.cos(rad)

        this[0] = ax * bw + ay * bz
        this[1] = ay * bw - ax * bz
        this[2] = az * bw + aw * bz
        this[3] = aw * bw - az * bz
        return this
    }

    toAxisZ(vec: TgdVec3 | TgdVec4): typeof vec {
        const { x, y, z, w } = this
        const x2 = x + x
        const y2 = y + y
        const xx = x * x2
        const yy = y * y2
        const zx = z * x2
        const zy = z * y2
        const wx = w * x2
        const wy = w * y2

        vec.x = zx + wy
        vec.y = zy - wx
        vec.z = 1 - xx - yy

        return vec
    }
}
