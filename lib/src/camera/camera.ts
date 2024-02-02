import { TgdQuat, TgdVec3, TgdMat4, TgdVec4 } from "@/math"
import { TgdMat3 } from "@/math/mat3"

export abstract class TgdCamera {
    /** Do we need recalculation? */
    private dirty = true
    private dirtyAxis = true
    private readonly axisX = new TgdVec3()
    private readonly axisY = new TgdVec3()
    private readonly axisZ = new TgdVec3()
    // transformation
    private readonly _matrixViewModel = new TgdMat4()
    private readonly orientation = new TgdQuat(0, 0, 0, 1)
    private readonly target = new TgdVec3(0, 0, 0)
    private _distance = 10
    private _zoom = 1
    // For fast calculations (we don't want to recreate them).
    private readonly tmpMat3 = new TgdMat3()
    private readonly tmpVec3 = new TgdVec3()

    constructor() {
        this.orientation.face("+X+Y+Z")
        this.orbitAroundY(Math.PI)
        this.updateAxisIfNeeded()
        console.log("****************************************")
        this.axisX.debug("X")
        this.axisY.debug("Y")
        this.axisZ.debug("Z")
        this.matrixViewModel.debug()
        this.orientation.debug("Quat")

        const eq = (a: number, b: number) => {
            return Math.abs(a - b) < 1e-5
        }
        const name = ({ x, y, z }: TgdVec3) => {
            if (eq(x, +1)) return "+X"
            if (eq(x, -1)) return "-X"
            if (eq(y, +1)) return "+Y"
            if (eq(y, -1)) return "-Y"
            if (eq(z, +1)) return "+Z"
            if (eq(z, -1)) return "-Z"
        }
        const A = Math.sqrt(2) / 2
        const q = ({ x, y, z, w }: TgdQuat) => {
            return [x, y, z, w]
                .map(v => {
                    if (eq(v, +0)) return "+0"
                    if (eq(v, +1)) return "+1"
                    if (eq(v, -1)) return "-1"
                    if (eq(v, +A)) return "+A"
                    if (eq(v, -A)) return "-A"
                    return v
                })
                .join(", ")
        }
        const lines: string[] = []
        for (let i = 0; i < 4; i++) {
            this.orientation.face("+X+Y+Z")
            this.orbitAroundY(i * (Math.PI / 2))
            this.updateAxisIfNeeded()
            this.updateIfNeeded()
            lines.push(
                `\n"${name(this.axisX)}${name(this.axisY)}${name(
                    this.axisZ
                )}": [${q(this.orientation)}],`
            )
        }
        console.log(lines.join(""))

        this.orientation.face()
    }

    from({ orientation, target, distance, zoom }: TgdCamera): this {
        this.orientation.from(orientation)
        this.target.from(target)
        this.distance = distance
        this.zoom = zoom
        this.dirty = true
        this.dirtyAxis = true
        return this
    }

    toAxisZ(axis: TgdVec3): this {
        this.orientation.toAxisZ(axis)
        return this
    }

    get matrixViewModel(): TgdMat4 {
        this.updateIfNeeded()
        return this._matrixViewModel
    }

    abstract get matrixProjection(): TgdMat4

    setOrientation(quat: TgdQuat) {
        const { orientation } = this
        if (quat.isEqual(orientation)) return

        const [x, y, z, w] = quat
        orientation.x = x
        orientation.y = y
        orientation.z = z
        orientation.w = w
        this.dirty = true
        this.dirtyAxis = true
    }

    setTarget(vec: TgdVec3) {
        const { target } = this
        if (vec.isEqual(target)) return

        const [x, y, z] = vec
        target.x = x
        target.y = y
        target.z = z
        this.dirty = true
    }

    get x() {
        return this.target.x
    }
    set x(v: number) {
        const { target } = this
        if (v === target.x) return

        this.x = v
        this.dirty = true
    }

    get y() {
        return this.target.y
    }
    set y(v: number) {
        const { target } = this
        if (v === target.y) return

        this.y = v
        this.dirty = true
    }

    get z() {
        return this.target.z
    }
    set z(v: number) {
        const { target } = this
        if (v === target.z) return

        this.z = v
        this.dirty = true
    }

    get distance() {
        return this._distance
    }
    set distance(v: number) {
        if (this._distance === v) return

        this._distance = v
        this.dirty = true
    }

    get zoom() {
        return this._zoom
    }
    set zoom(v: number) {
        if (this._zoom === v) return

        this._zoom = v
        this.dirty = true
    }

    /**
     * Add (x,y,z) to the target coords in Camera space.
     * That means we are moving along the camera axis.
     */
    moveTarget(x: number, y: number, z: number) {
        const { target } = this
        this.updateAxisIfNeeded()
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

    orbitAroundX(angleInRadians: number): this {
        this.updateAxisIfNeeded()
        const { axisX, axisY, axisZ, orientation } = this
        axisY.rotateAround(axisX, angleInRadians)
        axisZ.rotateAround(axisX, angleInRadians)
        orientation.fromAxis(axisX, axisY, axisZ)
        this.dirty = true
        return this
    }

    orbitAroundY(angleInRadians: number): this {
        this.updateAxisIfNeeded()
        const { axisX, axisY, axisZ, orientation } = this
        axisX.rotateAround(axisY, angleInRadians)
        axisZ.rotateAround(axisY, angleInRadians)
        orientation.fromAxis(axisX, axisY, axisZ)
        this.dirty = true
        return this
    }

    orbitAroundZ(angleInRadians: number): this {
        this.updateAxisIfNeeded()
        const { axisX, axisY, axisZ, orientation } = this
        axisX.rotateAround(axisZ, angleInRadians)
        axisY.rotateAround(axisZ, angleInRadians)
        orientation.fromAxis(axisX, axisY, axisZ)
        this.dirty = true
        return this
    }

    private updateAxisIfNeeded() {
        if (!this.dirtyAxis) return

        const { tmpMat3 } = this
        tmpMat3.fromQuat(this.orientation) //.transpose()
        tmpMat3.toAxis(this.axisX, this.axisY, this.axisZ)
        this.dirtyAxis = false
    }

    private updateIfNeeded(): void {
        if (!this.dirty) return

        const { tmpMat3, tmpVec3 } = this
        const mat = this._matrixViewModel
        this.dirtyAxis = true
        this.updateAxisIfNeeded()
        const d = this._distance
        const { x: tx, y: ty, z: tz } = this.target
        const { x: ax, y: ay, z: az } = this.axisZ
        tmpVec3.x = tx + d * ax
        tmpVec3.y = ty + d * ay
        tmpVec3.z = tz + d * az
        tmpVec3.applyMatrix(tmpMat3.transpose()).scale(-1)
        mat.m30 = tmpVec3.x
        mat.m31 = tmpVec3.y
        mat.m32 = tmpVec3.z
        const zoom = this._zoom
        if (zoom !== 1) tmpMat3.scale(zoom)
        mat.fromMat3(tmpMat3)
        this.dirty = false
    }
}
