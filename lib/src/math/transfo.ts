import { mat4, quat } from "gl-matrix"
import { ArrayNumber16, ArrayNumber3, ArrayNumber4 } from "../types"
import { TgdMat4 } from "./mat4"
import { TgdQuat } from "./quat"
import { TgdVec3 } from "./vec3"
import { TgdVec4 } from "./vec4"

export interface TgdTransfoOptions {
    distance: number
    position: TgdVec3 | ArrayNumber3
    scale: TgdVec3 | ArrayNumber3
    orientation: TgdQuat | ArrayNumber4
}

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

    private readonly tmpVec3 = new TgdVec3()
    private readonly _axisX = new TgdVec3()
    private readonly _axisY = new TgdVec3()
    private readonly _axisZ = new TgdVec3()

    private dirty = false

    constructor(source?: TgdTransfo | Partial<TgdTransfoOptions>) {
        if (!source) return
        if (source instanceof TgdTransfo) this.from(source)
        else {
            this.distance = source.distance ?? this.distance
            this.position = source.position ?? this.position
            this.orientation = source.orientation ?? this.orientation
            this.scale = source.scale ?? this.scale
        }
        this.updateMatrix()
    }

    clone(): TgdTransfo {
        return new TgdTransfo(this)
    }

    from(
        transfo: Readonly<TgdTransfo> | Readonly<Partial<TgdTransfoOptions>>
    ): this {
        this.position = transfo.position ?? this.position
        this.orientation = transfo.orientation ?? this.orientation
        this.scale = transfo.scale ?? this.scale
        this.distance = transfo.distance ?? this.distance
        this.updateMatrix()
        return this
    }

    fromMatrix(mat: TgdMat4 | ArrayNumber16): this {
        this.matrix.from(mat)
        this.dirty = false
        return this
    }

    get matrix(): TgdMat4 {
        this.updateIfNeeded()
        return this._matrix
    }
    set matrix(value: Readonly<TgdMat4> | ArrayNumber16) {
        this._matrix.from(value)
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

    // fromZupToYup(): this {
    //     this.dirty = true
    //     this._orientation.multiply(TgdQuat.fromFace("+X+Z-Y"))
    //     return this
    // }

    private updateIfNeeded() {
        if (!this.dirty) return

        const m = this._matrix
        mat4.fromRotationTranslationScale(
            m,
            this._orientation,
            this._position,
            this._scale
        )
        const X = this._axisX
        const Y = this._axisY
        const Z = this._axisZ
        X.x = m.m00
        X.y = m.m10
        X.z = m.m20
        Y.x = m.m01
        Y.y = m.m11
        Y.z = m.m21
        Z.x = m.m02
        Z.y = m.m12
        Z.z = m.m22
        const d = this._distance
        if (d !== 0) {
            this.tmpVec3.reset(0, 0, d).applyQuaternion(this._orientation)
            m.m03 += this.tmpVec3.x
            m.m13 += this.tmpVec3.y
            m.m23 += this.tmpVec3.z
        }
        this.dirty = false
    }

    reset(): this {
        this.orientation.reset()
        this.position.reset()
        this.scale.reset()
        this.dirty = true
        return this
    }

    get distance() {
        return this._distance
    }
    set distance(value: number) {
        this._distance = value
        this.updateMatrix()
    }
    setDistance(value: number): this {
        this.distance = value
        return this
    }

    get position(): Readonly<TgdVec3> {
        this.updateMatrix()
        return this._position
    }
    set position(value: Readonly<TgdVec3 | TgdVec4 | ArrayNumber3>) {
        this.updateMatrix()
        this._position.from(value)
    }
    setPosition(
        x: number | TgdVec3 | TgdVec4 | ArrayNumber3 | ArrayNumber4,
        y: number,
        z: number
    ): this {
        this.updateMatrix()
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
        this.updateMatrix()
        this._scale.from(value)
    }
    setScale(
        x: number | TgdVec3 | TgdVec4 | ArrayNumber3 | ArrayNumber4,
        y?: number,
        z?: number
    ): this {
        this.updateMatrix()
        if (typeof x === "number") {
            this._scale.reset(x, y ?? x, z ?? y ?? x)
        } else {
            this._scale.reset(x[0], x[1], x[2])
        }
        return this
    }

    get orientation(): Readonly<TgdQuat> {
        this.updateMatrix()
        return this._orientation
    }
    set orientation(quat: Readonly<TgdQuat | ArrayNumber4>) {
        this._orientation.from(quat)
        this.updateMatrix()
    }
    setOrientation(source: TgdVec4 | ArrayNumber4 | TgdQuat): this
    setOrientation(x: number, y: number, z: number, w: number): this
    setOrientation(
        x: number | TgdVec4 | ArrayNumber4 | TgdQuat,
        y?: number,
        z?: number,
        w?: number
    ): this {
        if (typeof x === "number") {
            this._orientation.reset(x, y, z, w)
        } else {
            this._orientation.reset(x[0], x[1], x[2], x[3])
        }
        this.updateMatrix()
        return this
    }

    /**
     * Reset the orientation by applying an Euler rotation
     * based on angles expressed in __degrees__.
     */
    setEulerRotation(
        degreesAroundX: number,
        degreesAroundY: number,
        degreesAroundZ: number
    ): this {
        quat.fromEuler(
            this._orientation,
            degreesAroundX,
            degreesAroundY,
            degreesAroundZ
        )
        this.updateMatrix()
        return this
    }

    orbitAroundX(angleInRadians: number): this {
        this._orientation.rotateAround(TgdVec3.X, angleInRadians)
        this.updateMatrix()
        return this
    }

    orbitAroundY(angleInRadians: number): this {
        this._orientation.rotateAround(TgdVec3.Y, angleInRadians)
        this.updateMatrix()
        return this
    }

    orbitAroundZ(angleInRadians: number): this {
        this._orientation.rotateAround(TgdVec3.Z, angleInRadians)
        this.updateMatrix()
        return this
    }

    moveAlongAxes(dx: number, dy: number, dz: number): this {
        this.position
            .addWithScale(this.axisX, dx)
            .addWithScale(this.axisY, dy)
            .addWithScale(this.axisZ, dz)
        this.updateMatrix()
        return this
    }

    debug(caption = "Transfo") {
        console.log(caption)
        console.log("Distance:", this.distance)
        this.orientation.debug("Orientation")
        this.scale.debug("Scale")
        this.position.debug("Position")
        this.matrix.debug("Matrix")
    }

    updateMatrix() {
        this.dirty = true
    }
}
