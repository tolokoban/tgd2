/* eslint-disable unicorn/prefer-single-call */
import { TgdMat4, TgdVec3 } from "@tgd/math"
import { TgdCamera, TgdCameraOptions } from "./camera"
import { mat4 } from "gl-matrix"

export interface TgdCameraPerspectiveOptions extends TgdCameraOptions {
    /**
     * Vertical field of view in radians.
     *
     * The revealed space at a distance of 1 from the camera
     * will have a height of `2 * tan(fovy / 2)`.
     */
    fovy?: number
}

export class TgdCameraPerspective extends TgdCamera {
    private readonly _matrixProjection = new TgdMat4()
    private _fovy = Math.PI / 4
    private readonly _ray = {
        origin: new TgdVec3(),
        direction: new TgdVec3(),
    }

    constructor(options: TgdCameraPerspectiveOptions = {}) {
        super(options)
        this._fovy = options.fovy ?? Math.PI / 4
    }

    copyProjectionFrom(camera: TgdCameraPerspective): this {
        this.fovy = camera.fovy
        this.near = camera.near
        this.far = camera.far
        return this
    }

    castRay(
        screenX: number,
        screenY: number
    ): Readonly<{ origin: TgdVec3; direction: TgdVec3 }> {
        const { transfo } = this
        const { origin, direction } = this._ray
        origin.from(transfo.actualPosition)
        const h = Math.atan(this.fovy * 0.5)
        const w = h * this.screenAspectRatio
        direction
            .fromOpposite(transfo.axisZ)
            .addWithScale(transfo.axisX, w * screenX)
            .addWithScale(transfo.axisY, h * screenY)
            .normalize()
        return this._ray
    }

    /**
     * Vertical field of view in radians.
     *
     * The revealed space at a distance of 1 from the camera
     * will have a height of `2 * tan(fovy / 2)`.
     */
    get fovy() {
        return this._fovy
    }
    set fovy(v: number) {
        if (v === this._fovy) return

        this._fovy = v
        this.dirtyProjection = true
    }
    get matrixProjection(): TgdMat4 {
        this.updateProjectionIfNeeded()
        return this._matrixProjection
    }

    protected getSpaceHeightAtTarget() {
        return 2 * Math.tan(this.fovy * 0.5) * this.transfo.distance
    }

    protected setSpaceHeightAtTarget(v: number) {
        this.transfo.setDistance(v / (2 * Math.tan(this.fovy * 0.5)))
    }

    private updateProjectionIfNeeded(): void {
        if (!this.dirtyProjection) return

        const fovy = this._fovy
        const aspect = this.screenAspectRatio
        const near = this._near
        const far = this._far
        const out = this._matrixProjection
        mat4.perspective(out, fovy, aspect, near, far)
        out[0] *= this.zoom
        out[5] *= this.zoom
        this.dirtyProjection = true
    }

    toCode(caption?: string): string {
        const code: string[] = []
        if (caption) code.push(`// ${caption}`)
        code.push(`const camera = new TgdCameraPerspective({`)
        if (this.name) code.push(`  name: ${JSON.stringify(this.name)},`)
        code.push(
            `  fovy: ${this._fovy},`,
            `  near: ${this._near},`,
            `  far: ${this._far},`,
            `  zoom: ${this.zoom},`,
            `  transfo: {`,
            `  distance: ${this.transfo.distance},`
        )
        code.push(
            `    position: ${JSON.stringify([...this.transfo.position])},`
        )
        code.push(
            `    orientation: ${JSON.stringify([...this.transfo.orientation])},`
        )
        code.push(
            `    scale: ${JSON.stringify([...this.transfo.scale])},`,
            `  }`,
            "}"
        )
        return code.join("\n")
    }
}
