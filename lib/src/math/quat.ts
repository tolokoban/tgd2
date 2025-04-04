import { quat } from "gl-matrix"
import { TgdMat3 } from "./mat3"
import { TgdMat4 } from "./mat4"
import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"
import { ArrayNumber3, ArrayNumber4 } from "@tgd/types"

/**
 * A string with three axes:
 * * the right axis
 * * the up axis
 * * the axis toward the camera.
 */
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

    static fromFace(face: TgdQuatFace): TgdQuat {
        return new TgdQuat().face(face)
    }

    static fromSlerp(
        valueAtT0: TgdQuat,
        valueAtT1: TgdQuat,
        t: number
    ): TgdQuat {
        return new TgdQuat().fromSlerp(valueAtT0, valueAtT1, t)
    }

    constructor()
    constructor(source: TgdQuat)
    constructor(source: TgdVec4)
    constructor(source: ArrayNumber4)
    constructor(x: number)
    constructor(x: number, y: number)
    constructor(x: number, y: number, z: number)
    constructor(x: number, y: number, z: number, w: number)
    constructor(
        x: number | TgdVec4 | ArrayNumber4 = 0,
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

    fromSlerp(valueAtT0: TgdQuat, valueAtT1: TgdQuat, t: number): this {
        const EPSILON = 1e-6
        const [ax, ay, az, aw] = valueAtT0
        let [bx, by, bz, bw] = valueAtT1

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

    fromAxesTransposed(
        [m00, m01, m02]: Readonly<TgdVec3 | ArrayNumber3>,
        [m10, m11, m12]: Readonly<TgdVec3 | ArrayNumber3>,
        [m20, m21, m22]: Readonly<TgdVec3 | ArrayNumber3>
    ): this {
        return this.fromAxes([m00, m10, m20], [m01, m11, m21], [m02, m12, m22])
    }

    fromAxes(
        X: Readonly<TgdVec3 | ArrayNumber3>,
        Y: Readonly<TgdVec3 | ArrayNumber3>,
        Z: Readonly<TgdVec3 | ArrayNumber3>
    ): this {
        const [x, y, z] = Z
        quat.setAxes(this, [-x, -y, -z], X, Y)
        return this
    }

    fromMatrix(mat: TgdMat3 | TgdMat4): this {
        quat.fromMat3(this, mat)
        return this
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
        return this.rotateAround(TgdVec3.X, angleInRadians)
    }

    static rotateAroundY(angleInRadians: number): TgdQuat {
        return new TgdQuat().rotateAroundY(angleInRadians)
    }

    rotateAroundY(angleInRadians: number): this {
        return this.rotateAround(TgdVec3.Y, angleInRadians)
    }

    static rotateAroundZ(angleInRadians: number): TgdQuat {
        return new TgdQuat().rotateAroundZ(angleInRadians)
    }

    rotateAroundZ(angleInRadians: number): this {
        return this.rotateAround(TgdVec3.Z, angleInRadians)
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
        mat.m01 = axisX.y
        mat.m02 = axisX.z
        mat.m10 = axisY.x
        mat.m11 = axisY.y
        mat.m12 = axisY.z
        mat.m20 = axisZ.x
        mat.m21 = axisZ.y
        mat.m22 = axisZ.z
        return mat
    }

    invert(): this {
        quat.invert(this, this)
        return this
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
    "-X-Y+Z": [+0, +0, +1, +0],
    "-X-Z-Y": [+0, -A, +A, +0],
    "-X+Y-Z": [+0, +1, +0, +0],
    "-X+Z+Y": [+0, +A, +A, +0],
    "-Y-X-Z": [+A, -A, +0, +0],
    "-Y-Z+X": [+H, -H, +H, -H],
    "-Y+X+Z": [+0, +0, -A, +A],
    "-Y+Z-X": [+H, -H, -H, +H],
    "-Z-X+Y": [+H, -H, -H, -H],
    "-Z-Y-X": [-A, +0, +A, +0],
    "-Z+X-Y": [+H, +H, -H, +H],
    "-Z+Y+X": [+0, +A, +0, +A],
    "+X-Y-Z": [+1, +0, +0, +0],
    "+X-Z+Y": [-A, +0, +0, +A],
    "+X+Y+Z": [+0, +0, +0, +1],
    "+X+Z-Y": [+A, +0, +0, +A],
    "+Y-X+Z": [+0, +0, +A, +A],
    "+Y-Z-X": [-H, -H, +H, +H],
    "+Y+X-Z": [+A, +A, +0, +0],
    "+Y+Z+X": [+H, +H, +H, +H],
    "+Z-X-Y": [+H, -H, +H, +H],
    "+Z-Y+X": [+A, +0, +A, +0],
    "+Z+X+Y": [+H, +H, +H, -H],
    "+Z+Y-X": [+0, -A, +0, +A],
}
