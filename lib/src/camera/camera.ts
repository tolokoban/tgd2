import { TgdQuat, TgdVec3, TgdMat4 } from "@/math"

export abstract class TgdCamera {
    /** Do we need recalculation? */
    private dirty = true
    private readonly axisX = new TgdVec3()
    private readonly axisY = new TgdVec3()
    private readonly axisZ = new TgdVec3()
    // transformation
    private readonly _matrixTransfo = new TgdMat4()
    private readonly _orientation = new TgdQuat(0, 0, 0, 1)
    private readonly _target = new TgdVec3(0, 0, 0)
    private _distance = 10
    private _zoom = 1

    constructor() {}

    get matrixTransfo(): TgdMat4 {
        this.updateIfDirty()
        return this._matrixTransfo
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

    private updateIfDirty() {
        if (!this.dirty) return

        const mat = this._matrixTransfo
        mat.fromQuat(this._orientation)
        mat.toAxis(this.axisX, this.axisY, this.axisZ)
        const d = this._distance
        const { x: tx, y: ty, z: tz } = this._target
        const { x: ax, y: ay, z: az } = this.axisZ
        mat.m30 = tx + d * ax
        mat.m31 = ty + d * ay
        mat.m32 = tz + d * az
        const zoom = 1 / this._zoom
        mat.m00 *= zoom
        mat.m11 *= zoom
        mat.m22 *= zoom
        this.dirty = false
    }
}
