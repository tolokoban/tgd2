import { mat4 } from "gl-matrix"
import { ArrayNumber16, ArrayNumber3, ArrayNumber4 } from "../types"
import { TgdMat3 } from "./mat3"
import { TgdMat4 } from "./mat4"
import { TgdQuat } from "./quat"
import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"

export class TgdTransfo {
    // prettier-ignore
    private readonly _matrix = new TgdMat4(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
    )
    private readonly _position = new TgdVec3(0, 0, 0)
    private readonly _orientation = new TgdQuat(0, 0, 0, 1)
    private readonly _scale = new TgdVec3(1, 1, 1)
    private _distance = 0

    private readonly tmpMat3 = new TgdMat3()
    private readonly tmpVec3 = new TgdVec3()
    private readonly _axisX = new TgdVec3()
    private readonly _axisY = new TgdVec3()
    private readonly _axisZ = new TgdVec3()

    private dirty = false
    private _updateCount = 0

    from(transfo: Readonly<TgdTransfo>): this {
        this.position = transfo.position
        this.orientation = transfo.orientation
        this.scale = transfo.scale
        this.distance = transfo.distance
        this.setDirty()
        return this
    }

    get updateCount() {
        return this._updateCount
    }

    get matrix(): Readonly<TgdMat4> {
        this.updateIfNeeded()
        return this._matrix
    }
    set matrix(value: Readonly<TgdMat4> | ArrayNumber16) {
        this._matrix.from(value)
        this._updateCount++
        this.dirty = false
    }

    get axisX(): Readonly<TgdVec3> {
        this.updateIfNeeded()
        return this._axisX
    }
    get axisY(): Readonly<TgdVec3> {
        this.updateIfNeeded()
        return this._axisY
    }
    get axisZ(): Readonly<TgdVec3> {
        this.updateIfNeeded()
        return this._axisZ
    }

    private updateIfNeeded() {
        if (!this.dirty) return

        const m = this._matrix
        mat4.fromRotationTranslationScale(
            m,
            this._orientation,
            this._position,
            this._scale
        )
        m.toAxisX(this._axisX)
        m.toAxisY(this._axisY)
        m.toAxisZ(this._axisZ)
        const d = this._distance
        if (d !== 0) {
            this.tmpVec3.reset(0, 0, d)
            this.tmpVec3.scale(d).applyQuaternion(this._orientation)
            m.m03 += this.tmpVec3.x
            m.m13 += this.tmpVec3.y
            m.m23 += this.tmpVec3.z
            console.log()
            m.debug("Matrix")
        }
        this.dirty = false
    }

    reset(): this {
        this._matrix.reset()
        this.dirty = false
        return this
    }

    get distance() {
        return this._distance
    }
    set distance(value: number) {
        this._distance = value
        this.setDirty()
    }
    setDistance(value: number): this {
        this.distance = value
        return this
    }

    get position(): Readonly<TgdVec3> {
        return this._position
    }
    set position(value: Readonly<TgdVec3 | TgdVec4 | ArrayNumber3>) {
        this.setDirty()
        this._position.from(value)
    }
    setPosition(
        x: number | TgdVec3 | TgdVec4 | ArrayNumber3 | ArrayNumber4,
        y: number,
        z: number
    ): this {
        this.setDirty()
        if (typeof x === "number") {
            this._position.reset(x, y, z)
        } else {
            this._position.reset(x[0], x[1], x[2])
        }
        return this
    }

    /**
     * When `this.distance` is not null, we are orbitiong around the `position`.
     * Then, the `actualPosition` is different.
     */
    get actualPosition(): Readonly<TgdVec3> {
        const d = this.distance
        if (d === 0) return this.position

        return this.tmpVec3.from(this.position).addWithScale(this.axisZ, d)
    }

    get scale(): Readonly<TgdVec3> {
        return this._scale
    }
    set scale(value: Readonly<TgdVec3 | ArrayNumber3>) {
        this.setDirty()
        this._scale.from(value)
    }
    setScale(
        x: number | TgdVec3 | TgdVec4 | ArrayNumber3 | ArrayNumber4,
        y: number,
        z: number
    ): this {
        this.setDirty()
        if (typeof x === "number") {
            this._scale.reset(x, y, z)
        } else {
            this._scale.reset(x[0], x[1], x[2])
        }
        return this
    }

    get orientation(): Readonly<TgdQuat> {
        return this._orientation
    }
    set orientation(quat: Readonly<TgdQuat | ArrayNumber4>) {
        this.setDirty()
        this._orientation.from(quat)
    }
    setOrientation(
        x: number | TgdVec4 | ArrayNumber4,
        y: number,
        z: number,
        w: number
    ): this {
        this.setDirty()
        if (typeof x === "number") {
            this._orientation.reset(x, y, z, w)
        } else {
            this._orientation.reset(x[0], x[1], x[2], x[4])
        }
        return this
    }

    orbitAroundX(angleInRadians: number): this {
        this.tmpMat3.fromQuat(this._orientation)
        this.tmpMat3.toAxisX(this.tmpVec3)
        this._orientation.rotateAround(this.tmpVec3, angleInRadians)
        this.setDirty()
        return this
    }

    orbitAroundY(angleInRadians: number): this {
        this.tmpMat3.fromQuat(this._orientation)
        this.tmpMat3.toAxisY(this.tmpVec3)
        this._orientation.rotateAround(this.tmpVec3.scale(-1), angleInRadians)
        this.setDirty()
        return this
    }

    orbitAroundZ(angleInRadians: number): this {
        this.tmpMat3.fromQuat(this._orientation)
        this.tmpMat3.toAxisZ(this.tmpVec3)
        this._orientation.rotateAround(this.tmpVec3, angleInRadians)
        this.setDirty()
        return this
    }

    moveAlongAxes(dx: number, dy: number, dz: number): this {
        this.position
            .addWithScale(this.axisX, dx)
            .addWithScale(this.axisY, dy)
            .addWithScale(this.axisZ, dz)
        this.setDirty()
        return this
    }

    private setDirty() {
        this._updateCount++
        this.dirty = true
    }
}
