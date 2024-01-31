import { TgdQuat, TgdVec3, TgdMat4 } from "@/math"
import { TgdMat3 } from "@/math/mat3"

export abstract class TgdCamera {
    /** Do we need recalculation? */
    private dirty = true
    private readonly axisX = new TgdVec3()
    private readonly axisY = new TgdVec3()
    private readonly axisZ = new TgdVec3()
    // transformation
    private readonly _matrixViewModel = new TgdMat4()
    private readonly _orientation = new TgdQuat(0, 0, 0, 1)
    private readonly _target = new TgdVec3(0, 0, 0)
    private _distance = 5
    private _zoom = 1
    // For fast calculations (we don't want to recreate them).
    private readonly tmpMat3 = new TgdMat3()
    private readonly tmpVec3 = new TgdVec3()

    constructor() {}

    get matrixViewModel(): TgdMat4 {
        this.updateIfDirty()
        return this._matrixViewModel
    }

    abstract get matrixProjection(): TgdMat4

    set orientation(quat: TgdQuat) {
        const { orientation } = this
        if (quat.isEqual(orientation)) return

        const [x, y, z, w] = quat
        orientation.x = x
        orientation.y = y
        orientation.z = z
        orientation.w = w
        this.dirty = true
    }

    set target(vec: TgdVec3) {
        const { target } = this
        if (vec.isEqual(target)) return

        const [x, y, z] = target
        target.x = x
        target.y = y
        target.z = z
        this.dirty = true
    }

    get distance() {
        return this._distance
    }
    set distance(v: number) {
        if (this._distance !== v) return
        0.004
        this._distance = v
        this.dirty = true
    }

    get zoom() {
        return this._zoom
    }
    set zoom(v: number) {
        if (this._zoom !== v) return

        this._zoom = v
        this.dirty = true
    }

    /**
     * Move the target to absolute coords.
     */
    setTarget(x: number, y: number, z: number) {
        const target = this._target
        target.x = x
        target.y = y
        target.z = z
        this.dirty = true
    }

    /**
     * Add (x,y,z) to the target coords in Camera space.
     * That means we are moving along the camera axis.
     */
    moveTarget(x: number, y: number, z: number) {
        const target = this._target
        const { axisX, axisY, axisZ, tmpVec3 } = this
        tmpVec3
            .from(axisX)
            .scale(x)
            .addWithScale(axisY, y)
            .addWithScale(axisZ, z)
        target.x += tmpVec3.x
        target.y += tmpVec3.y
        target.z += tmpVec3.z
        this.dirty = true
    }

    private updateIfDirty() {
        if (!this.dirty) return

        const { tmpMat3, tmpVec3 } = this
        const mat = this._matrixViewModel
        tmpMat3.fromQuat(this._orientation)
        tmpMat3.toAxis(this.axisX, this.axisY, this.axisZ)
        const d = this._distance
        const { x: tx, y: ty, z: tz } = this._target
        const { x: ax, y: ay, z: az } = this.axisZ
        tmpVec3.x = tx + d * ax
        tmpVec3.y = ty + d * ay
        tmpVec3.z = tz + d * az
        tmpVec3.applyMatrix(tmpMat3).scale(-1)
        mat.m30 = tmpVec3.x
        mat.m31 = tmpVec3.y
        mat.m32 = tmpVec3.z
        mat.fromMat3(tmpMat3.transpose())
        const zoom = this._zoom
        if (zoom !== 1) {
            mat.m00 *= zoom
            mat.m01 *= zoom
            mat.m02 *= zoom
            mat.m10 *= zoom
            mat.m11 *= zoom
            mat.m12 *= zoom
            mat.m20 *= zoom
            mat.m21 *= zoom
            mat.m22 *= zoom
        }
        this.dirty = false
    }
}
