import { TgdMat3 } from "./mat3"
import { TgdMat4 } from "./mat4"
import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"

export type TgdQuatFace = keyof typeof FACES

const tmpAxisX = new TgdVec3()
const tmpAxisY = new TgdVec3()
const tmpAxisZ = new TgdVec3()

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

    multiply(quat: TgdQuat): TgdQuat {
        const [qx, qy, qz, qw] = this
        const [rx, ry, rz, rw] = quat
        this[0] = rw * qx + rx * qw - ry * qz + rz * qy
        this[1] = rw * qy + rx * qz + ry * qw - rz * qx
        this[2] = rw * qz - rx * qy + ry * qx + rz * qw
        this[3] = rw * qw - rx * qx - ry * qy - rz * qz
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
        if (cosom < 0.0) {
            cosom = -cosom
            bx = -bx
            by = -by
            bz = -bz
            bw = -bw
        }
        // calculate coefficients
        if (1.0 - cosom > EPSILON) {
            // standard case (slerp)
            const omega = Math.acos(cosom)
            const sinom = Math.sin(omega)
            const inverseSinom = 1 / sinom
            scale0 = Math.sin((1.0 - t) * omega) * inverseSinom
            scale1 = Math.sin(t * omega) * inverseSinom
        } else {
            // "from" and "to" quaternions are very close
            //  ... so we can do a linear interpolation
            scale0 = 1.0 - t
            scale1 = t
        }
        // calculate final values
        this.x = scale0 * ax + scale1 * bx
        this.y = scale0 * ay + scale1 * by
        this.z = scale0 * az + scale1 * bz
        this.w = scale0 * aw + scale1 * bw
        return this
    }

    fromAxis(X: TgdVec3, Y: TgdVec3, Z: TgdVec3): this {
        // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
        // article "Quaternion Calculus and Fast Animation".
        const fTrace = X.x + Y.y + Z.z
        if (fTrace > 0.0) {
            // |w| > 1/2, may as well choose w > 1/2
            const fRoot = Math.sqrt(fTrace + 1.0) // 2w
            this.w = 0.5 * fRoot
            const halfRoot = 0.5 / fRoot // 1/(4w)
            this.x = (Y.z - Z.y) * halfRoot
            this.y = (Z.x - X.z) * halfRoot
            this.z = (X.y - Y.x) * halfRoot
        } else {
            // |w| <= 1/2
            const axis = [X, Y, Z]
            let i = 0
            if (Y.y > X.x) i = 1
            if (Z.z > axis[i][i]) i = 2
            const j = (i + 1) % 3
            const k = (i + 2) % 3

            let fRoot = Math.sqrt(axis[i][i] - axis[j][j] - axis[k][k] + 1.0)
            this[i] = 0.5 * fRoot
            fRoot = 0.5 / fRoot
            this[3] = (axis[j][k] - axis[k][j]) * fRoot
            this[j] = (axis[j][i] + axis[i][j]) * fRoot
            this[k] = (axis[k][i] + axis[i][k]) * fRoot
        }
        return this.normalize()
    }

    fromMatrix(mat: TgdMat3 | TgdMat4) {
        tmpAxisX.x = mat.m00
        tmpAxisX.y = mat.m01
        tmpAxisX.z = mat.m02
        tmpAxisY.x = mat.m10
        tmpAxisY.y = mat.m11
        tmpAxisY.z = mat.m12
        tmpAxisZ.x = mat.m20
        tmpAxisZ.y = mat.m21
        tmpAxisZ.z = mat.m22
        return this.fromAxis(tmpAxisX, tmpAxisY, tmpAxisZ)
    }

    rotateAround(axis: TgdVec3, angleInRadians: number): this {
        this.toAxisX(tmpAxisX)
        this.toAxisY(tmpAxisY)
        this.toAxisZ(tmpAxisZ)
        tmpAxisX.rotateAround(axis, angleInRadians)
        tmpAxisY.rotateAround(axis, angleInRadians)
        tmpAxisZ.rotateAround(axis, angleInRadians)
        return this.fromAxis(tmpAxisX, tmpAxisY, tmpAxisZ)
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
