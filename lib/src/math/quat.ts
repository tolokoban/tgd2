import { quat } from "gl-matrix"
import { TgdMat3 } from "./mat3"
import { TgdMat4 } from "./mat4"
import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"

export type TgdQuatFace = keyof typeof FACES

const temporaryAxisX = new TgdVec3()
const temporaryAxisY = new TgdVec3()
const temporaryAxisZ = new TgdVec3()
const temporaryMat3 = new TgdMat3()

export class TgdQuat extends TgdVec4 {
    static fromMatrix(mat: TgdMat3): TgdQuat {
        const quat = new TgdQuat()
        quat.fromMatrix(mat)
        return quat
    }

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

    multiply(q: TgdQuat): TgdQuat {
        quat.multiply(this, this, q)
        return this
    }

    fromSlerp(a: TgdQuat, b: TgdQuat, t: number): this {
        const EPSILON = 1e-6
        const [ax, ay, az, aw] = a
        let [bx, by, bz, bw] = b

        let scale0, scale1

        // calc cosine
        let cosom = ax * bx + ay * by + az * bz + aw * bw
        // adjust signs (if necessary)
        if (cosom < 0) {
            cosom = -cosom
            bx = -bx
            by = -by
            bz = -bz
            bw = -bw
        }
        // calculate coefficients
        if (1 - cosom > EPSILON) {
            // standard case (slerp)
            const omega = Math.acos(cosom)
            const sinom = Math.sin(omega)
            const inverseSinom = 1 / sinom
            scale0 = Math.sin((1 - t) * omega) * inverseSinom
            scale1 = Math.sin(t * omega) * inverseSinom
        } else {
            // "from" and "to" quaternions are very close
            //  ... so we can do a linear interpolation
            scale0 = 1 - t
            scale1 = t
        }
        // calculate final values
        this.x = scale0 * ax + scale1 * bx
        this.y = scale0 * ay + scale1 * by
        this.z = scale0 * az + scale1 * bz
        this.w = scale0 * aw + scale1 * bw
        return this
    }

    fromAxes(
        X: Readonly<TgdVec3>,
        Y: Readonly<TgdVec3>,
        Z: Readonly<TgdVec3>
    ): this {
        quat.setAxes(this, X, Y, Z)
        return this
        // // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
        // // article "Quaternion Calculus and Fast Animation".
        // const fTrace = X.x + Y.y + Z.z
        // if (fTrace > 0) {
        //     // |w| > 1/2, may as well choose w > 1/2
        //     const fRoot = Math.sqrt(fTrace + 1) // 2w
        //     this.w = 0.5 * fRoot
        //     const halfRoot = 0.5 / fRoot // 1/(4w)
        //     this.x = (Z.y - Y.z) * halfRoot
        //     this.y = (X.z - Z.x) * halfRoot
        //     this.z = (Y.x - X.y) * halfRoot
        // } else {
        //     // |w| <= 1/2
        //     const axis = [X, Y, Z]
        //     let index = 0
        //     if (Y.y > X.x) index = 1
        //     if (Z.z > axis[index][index]) index = 2
        //     const index_ = (index + 1) % 3
        //     const k = (index + 2) % 3

        //     let fRoot = Math.sqrt(
        //         axis[index][index] - axis[index_][index_] - axis[k][k] + 1
        //     )
        //     this[index] = 0.5 * fRoot
        //     fRoot = 0.5 / fRoot
        //     this[3] = (axis[index_][k] - axis[k][index_]) * fRoot
        //     this[index_] = (axis[index_][index] + axis[index][index_]) * fRoot
        //     this[k] = (axis[k][index] + axis[index][k]) * fRoot
        // }
        // return this.normalize()
    }

    fromMatrix(mat: TgdMat3 | TgdMat4) {
        mat.toAxes(temporaryAxisX, temporaryAxisY, temporaryAxisZ)
        return this.fromAxes(temporaryAxisX, temporaryAxisY, temporaryAxisZ)
    }

    rotateAround(axis: TgdVec3, angleInRadians: number): this {
        temporaryMat3
            .fromQuat(this)
            .toAxes(temporaryAxisX, temporaryAxisY, temporaryAxisZ)
        temporaryAxisX.rotateAround(axis, angleInRadians)
        temporaryAxisY.rotateAround(axis, angleInRadians)
        temporaryAxisZ.rotateAround(axis, angleInRadians)
        return this.fromAxes(temporaryAxisX, temporaryAxisY, temporaryAxisZ)
    }

    static rotateAroundX(angleInRadians: number): TgdQuat {
        return new TgdQuat().rotateAroundX(angleInRadians)
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

    static rotateAroundY(angleInRadians: number): TgdQuat {
        return new TgdQuat().rotateAroundY(angleInRadians)
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

    static rotateAroundZ(angleInRadians: number): TgdQuat {
        return new TgdQuat().rotateAroundZ(angleInRadians)
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

    toAxisX(vec: TgdVec3 | TgdVec4): typeof vec {
        const [x, y, z, w] = this
        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const yx = y * x2
        const yy = y * y2
        const zx = z * x2
        const zz = z * z2
        const wy = w * y2
        const wz = w * z2

        vec.x = 1 - yy - zz
        vec.y = yx - wz
        vec.z = zx + wy
        return vec
    }

    toAxisY(vec: TgdVec3 | TgdVec4): typeof vec {
        const [x, y, z, w] = this
        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const xx = x * x2
        const yx = y * x2
        const zy = z * y2
        const zz = z * z2
        const wx = w * x2
        const wz = w * z2

        vec.x = yx + wz
        vec.y = 1 - xx - zz
        vec.z = zy - wx
        return vec
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

        vec.x = zx - wy
        vec.y = zy + wx
        vec.z = 1 - xx - yy
        return vec
    }

    toMatrix(mat: TgdMat3 | TgdMat4): typeof mat {
        const axisX = new TgdVec3()
        const axisY = new TgdVec3()
        const axisZ = new TgdVec3()
        this.toAxisX(axisX)
        this.toAxisY(axisY)
        this.toAxisZ(axisZ)
        mat.m00 = axisX.x
        mat.m10 = axisX.y
        mat.m20 = axisX.z
        mat.m01 = axisY.x
        mat.m11 = axisY.y
        mat.m21 = axisY.z
        mat.m02 = axisZ.x
        mat.m12 = axisZ.y
        mat.m22 = axisZ.z
        return mat
    }

    face(face: TgdQuatFace = "+X+Y+Z"): this {
        const [x, y, z, w] = FACES[face]
        this.x = x
        this.y = y
        this.z = z
        this.w = w
        return this
    }
}

const A = Math.sqrt(2) / 2
const H = 0.5

const FACES = {
    "+X+Y+Z": [+0, +0, +0, +1],
    "-Z+Y+X": [+0, +A, +0, +A],
    "-X+Y-Z": [+0, +1, +0, +0],
    "+Z+Y-X": [+0, -A, +0, +A],
    "+X+Z-Y": [+A, +0, +0, +A],
    "+Y+Z+X": [+H, +H, +H, +H],
    "-X+Z+Y": [+0, +A, +A, +0],
    "-Y+Z-X": [+H, -H, -H, +H],
    "+X-Y-Z": [+1, +0, +0, +0],
    "+X-Z+Y": [-A, +0, +0, +A],
    "-X-Y+Z": [+0, +0, +1, +0],
    "-X-Z-Y": [+0, +A, -A, +0],
    "+Y+X-Z": [+A, +A, +0, +0],
    "+Y-X+Z": [+0, +0, +A, +A],
    "+Y-Z-X": [+H, +H, -H, -H],
    "-Y+X+Z": [+0, +0, -A, +A],
    "-Y-X-Z": [+A, -A, +0, +0],
    "-Y-Z+X": [+H, -H, +H, -H],
    "+Z+X+Y": [+H, +H, +H, -H],
    "+Z-X-Y": [+H, -H, +H, +H],
    "+Z-Y+X": [+A, +0, +A, +0],
    "-Z+X-Y": [+H, +H, -H, +H],
    "-Z-X+Y": [+H, -H, -H, -H],
    "-Z-Y-X": [+A, +0, -A, +0],
}
