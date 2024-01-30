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
}
