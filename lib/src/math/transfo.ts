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

    private readonly tmpMat3 = new TgdMat3()
    private readonly tmpVec3 = new TgdVec3()

    private dirty = false
    private _updateCount = 0

    get updateCount() {
        return this._updateCount
    }

    get matrix(): Readonly<TgdMat4> {
        if (this.dirty) {
            const m = this._matrix
            mat4.fromRotationTranslationScale(
                m,
                this._orientation,
                this._position,
                this._scale
            )
            this.dirty = false
        }
        return this._matrix
    }
    set matrix(value: Readonly<TgdMat4> | ArrayNumber16) {
        this._matrix.from(value)
        this._updateCount++
        this.dirty = false
    }

    reset(): this {
        this._matrix.reset()
        this.dirty = false
        return this
    }

    get position(): Readonly<TgdVec3> {
        return this._position
    }
    set position(value: Readonly<TgdVec3 | TgdVec4 | ArrayNumber3>) {
        this.setDirty()
        this._position.from(value)
    }
    setPosition(x: number, y: number, z: number): this {
        this.setDirty()
        this._position.reset(x, y, z)
        return this
    }

    get scale(): Readonly<TgdVec3> {
        return this._scale
    }
    set scale(value: Readonly<TgdVec3 | ArrayNumber3>) {
        this.setDirty()
        this._scale.from(value)
    }
    setScale(x: number, y: number, z: number): this {
        this.setDirty()
        this._scale.reset(x, y, z)
        return this
    }

    get orientation(): Readonly<TgdQuat> {
        return this._orientation
    }
    set orientation(quat: Readonly<TgdQuat | ArrayNumber4>) {
        this.setDirty()
        this._orientation.from(quat)
    }
    setOrientation(x: number, y: number, z: number, w: number): this {
        this.setDirty()
        this._orientation.reset(x, y, z, w)
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
        this._orientation.rotateAround(this.tmpVec3, angleInRadians)
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

    private setDirty() {
        this._updateCount++
        this.dirty = true
    }
}
