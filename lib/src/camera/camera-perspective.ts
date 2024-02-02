import { TgdMat4 } from "@/math"
import { TgdCamera } from "./camera"

export class TgdCameraPerspective extends TgdCamera {
    private dirtyProjection = true
    private readonly _matrixProjection = new TgdMat4()
    private _width = 1920
    private _height = 1080
    private _fovy = Math.PI / 4
    private _near = 1e-3
    private _far = Infinity

    constructor() {
        super()
    }

    get width() {
        return this._width
    }
    set width(v: number) {
        if (v === this._width) return

        this._width = v
        this.dirtyProjection = true
    }

    get height() {
        return this._height
    }
    set height(v: number) {
        if (v === this._height) return

        this._height = v
        this.dirtyProjection = true
    }
    get fovy() {
        return this._fovy
    }
    set fovy(v: number) {
        if (v === this._fovy) return

        this._fovy = v
        this.dirtyProjection = true
    }
    get near() {
        return this._near
    }
    set near(v: number) {
        if (v === this._near) return

        this._near = v
        this.dirtyProjection = true
    }
    get far() {
        return this._far
    }
    set far(v: number) {
        if (v === this._far) return

        this._far = v
        this.dirtyProjection = true
    }
    get matrixProjection(): TgdMat4 {
        this.updateProjectionIfNeeded()
        return this._matrixProjection
    }

    private updateProjectionIfNeeded(): void {
        if (!this.dirtyProjection) return

        const fovy = this._fovy
        const aspect = this._width / this._height
        const near = this._near
        const far = this._far
        const out = this._matrixProjection
        const f = 1.0 / Math.tan(fovy / 2)
        out[0] = f / aspect
        out[1] = 0
        out[2] = 0
        out[3] = 0
        out[4] = 0
        out[5] = f
        out[6] = 0
        out[7] = 0
        out[8] = 0
        out[9] = 0
        out[11] = -1
        out[12] = 0
        out[13] = 0
        out[15] = 0
        if (far !== Infinity) {
            const nf = 1 / (near - far)
            out[10] = (far + near) * nf
            out[14] = 2 * far * near * nf
        } else {
            out[10] = -1
            out[14] = -2 * near
        }
        this.dirtyProjection = true
    }
}
