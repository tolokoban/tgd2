import { mat4 } from "gl-matrix"

export class TgdCamera {
    private dirty = true
    private matrixView = mat4.create()
    private matrixProjection = mat4.create()
    private _x = 0
    private _y = 0
    private _z = 10
    private _width = 1
    private _height = 1

    get x() {
        return this._x
    }
    set x(value: number) {
        this._x = value
        this.dirty = true
    }

    get y() {
        return this._y
    }
    set y(value: number) {
        this._y = value
        this.dirty = true
    }

    get z() {
        return this._z
    }
    set z(value: number) {
        this._z = value
        this.dirty = true
    }

    get width() {
        return this._width
    }
    set width(value: number) {
        if (value !== this._width) {
            this._width = value
            this.dirty = true
        }
    }

    get height() {
        return this._height
    }
    set height(value: number) {
        if (value !== this._height) {
            this._height = value
            this.dirty = true
        }
    }

    setUniforms(
        gl: WebGL2RenderingContext,
        locationView: WebGLUniformLocation,
        locationProjection: WebGLUniformLocation
    ) {
        const { matrixView, matrixProjection } = this
        if (this.dirty) {
            this.dirty = false
            mat4.lookAt(
                this.matrixView,
                [this._x, this._y, this._z],
                [0, 0, 0],
                [0, 1, 0]
            )
            mat4.perspective(
                this.matrixProjection,
                Math.PI / 4,
                this._width / this._height,
                1e-3,
                1e3
            )
        }
        gl.uniformMatrix4fv(locationView, false, matrixView)
        gl.uniformMatrix4fv(locationProjection, false, matrixProjection)
    }
}
