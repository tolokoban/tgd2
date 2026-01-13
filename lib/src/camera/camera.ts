import {
    TgdMat4,
    type TgdQuat,
    TgdTransfo,
    type TgdTransfoOptions,
    type TgdVec3,
    TgdVec4,
} from "@tgd/math"
import type { ArrayNumber3, ArrayNumber4 } from "@tgd/types"
import type { TgdInterfaceTransformable } from "../interface"

export interface TgdCameraOptions {
    near?: number
    /** Can be Infinity for perspective camera (`Number.POSITIVE_INFINITY`) */
    far?: number
    name?: string
    zoom?: number
    transfo?: Partial<TgdTransfoOptions> | TgdTransfo
}

export interface TgdCameraState {
    spaceHeightAtTarget: number
    distance: number
    zoom: number
    orientation: TgdQuat
    position: TgdVec3
}

export enum TgdCameraVisibility {
    /** Whole object outsie of view */
    NONE = 0,
    /** A part of the object in the view` */
    PARTIAL = 1,
    /** The object is entirely in the view */
    FULL = 2,
}

export abstract class TgdCamera implements TgdInterfaceTransformable {
    private static incrementalId = 1

    public readonly name: string
    public readonly transfo: TgdTransfo

    private _screenWidth = 1920
    private _screenHeight = 1080
    private _screenAspectRatio = 1920 / 1080

    /** Do we need recalculation? */
    private _dirtyModelView = true
    private dirtyModelViewInverse = true
    private _dirtyAxis = true
    protected _dirtyProjection = true
    protected dirtyProjectionInverse = true

    protected _near = 1e-3
    protected _far = Number.POSITIVE_INFINITY

    // transformation
    private readonly _matrixModelView = new TgdMat4()
    private readonly _matrixProjectionInverse = new TgdMat4()
    private _zoom = 1

    constructor(options: TgdCameraOptions = {}) {
        this.name = options.name ?? `TgdCamera#${TgdCamera.incrementalId++}`
        this._near = options.near ?? 1e-3
        this._far = options.far ?? 1e6
        this.transfo = new TgdTransfo(options.transfo)
        this.zoom = options.zoom ?? 1
    }

    getCurrentState(): Readonly<TgdCameraState> {
        return {
            distance: this.transfo.distance,
            orientation: this.transfo.orientation.clone(),
            spaceHeightAtTarget: this.spaceHeightAtTarget,
            position: this.transfo.position.clone(),
            zoom: this.zoom,
        }
    }

    setCurrentState(state: Readonly<TgdCameraState>) {
        this.transfo.distance = state.distance
        this.transfo.orientation = state.orientation.clone()
        this.spaceHeightAtTarget = state.spaceHeightAtTarget
        this.transfo.position = state.position.clone()
        this.zoom = state.zoom
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

    get screenAspectRatio() {
        return this._screenAspectRatio
    }

    get screenWidth() {
        return this._screenWidth
    }
    set screenWidth(v: number) {
        if (v === this._screenWidth) return

        this._screenWidth = v
        this.dirtyProjection = true
        this._screenAspectRatio = this._screenWidth / this._screenHeight
    }

    get screenHeight() {
        return this._screenHeight
    }
    set screenHeight(v: number) {
        if (v === this._screenHeight) return

        this._screenHeight = v
        this.dirtyProjection = true
        this._screenAspectRatio = this._screenWidth / this._screenHeight
    }

    get spaceHeightAtTarget(): number {
        return this.getSpaceHeightAtTarget()
    }
    set spaceHeightAtTarget(v: number) {
        this.setSpaceHeightAtTarget(v)
    }

    get spaceWidthAtTarget(): number {
        return (this.screenWidth * this.spaceHeightAtTarget) / this.screenHeight
    }
    set spaceWidthAtTarget(v: number) {
        this.setSpaceHeightAtTarget((v * this.screenHeight) / this.screenWidth)
    }

    /**
     * Adapt the camera position so that a rectangle of `width` and `height`,
     * centered at the camera target, can be the biggest without being cut.
     * @param width width in space units.
     * @param height height in space units.
     */
    fitSpaceAtTarget(width: number, height: number, cover = false) {
        const ratio = width / height
        if (cover) {
            if (this._screenAspectRatio < ratio) {
                this.spaceHeightAtTarget = height
            } else {
                this.spaceWidthAtTarget = width
            }
        } else {
            if (this._screenAspectRatio > ratio) {
                this.spaceHeightAtTarget = height
            } else {
                this.spaceWidthAtTarget = width
            }
        }
    }

    from(camera: TgdCamera): this {
        const { zoom, screenWidth, screenHeight } = camera
        this.transfo.from(camera.transfo)
        this.zoom = zoom
        this.screenWidth = screenWidth
        this.screenHeight = screenHeight
        this.dirtyModelView = true
        this.copyProjectionFrom(camera)
        return this
    }

    fromTransfo(transfo: Readonly<TgdTransfo>): this {
        this.transfo.from(transfo)
        this.dirtyModelView = true
        return this
    }

    apply(point: ArrayNumber3 | TgdVec3 | ArrayNumber4 | TgdVec4): TgdVec4 {
        return new TgdVec4(point)
            .applyMatrix(this.matrixModelView)
            .applyMatrix(this.matrixProjection)
    }

    /**
     * Useful for LOD. If an object takes a small space on the screen,
     * we can display its low res version.
     * @returns The surface of the bounding square in screen space of a space bbox.
     */
    computeBoundingBoxVisibleSurface(
        bbox: Readonly<{
            min: Readonly<ArrayNumber3 | TgdVec3>
            max: Readonly<ArrayNumber3 | TgdVec3>
        }>
    ): number {
        const [x0, y0, z0] = bbox.min
        const [x1, y1, z1] = bbox.max
        const points: ArrayNumber3[] = [
            [x0, y0, z0],
            [x0, y0, z1],
            [x0, y1, z0],
            [x0, y1, z1],
            [x1, y0, z0],
            [x1, y0, z1],
            [x1, y1, z0],
            [x1, y1, z1],
        ]
        let left = 0
        let right = 0
        let top = 0
        let bottom = 0
        let minX = +Number.MAX_VALUE
        let maxX = -Number.MAX_VALUE
        let minY = +Number.MAX_VALUE
        let maxY = -Number.MAX_VALUE
        for (const point of points) {
            const [xx, yy, , ww] = this.apply(point)
            const x = xx / ww
            const y = yy / ww
            maxX = Math.max(maxX, x)
            minX = Math.min(minX, x)
            maxY = Math.max(maxY, y)
            minY = Math.min(minY, y)
            if (x < -1) left++
            else if (x > +1) right++
            if (y < -1) top++
            else if (y > +1) bottom++
        }
        if (left === 8 || right === 8 || top === 8 || bottom === 8) {
            return 0
        }
        console.log(
            "🐞 [camera@242] minX, maxX, minY, maxY =",
            minX,
            maxX,
            minY,
            maxY
        ) // @FIXME: Remove this line written on 2026-01-13 at 18:06
        return (maxX - minX) * (maxY - minY)
    }

    /**
     * @param screenX -1 is the left edge, 0 id the center and +1 is the right edge.
     * @param screenY -1 is the bottom edge, 0 id the center and +1 is the top edge.
     * @returns The __normalized__ ray vector that goes from the camera position
     * to the point designed on the screen.
     */
    abstract castRay(
        screenX: number,
        screenY: number
    ): Readonly<{
        origin: TgdVec3
        direction: TgdVec3
    }>

    abstract copyProjectionFrom(camera: TgdCamera): this

    /**
     * This matrix will transform a world coordinate into a camera coordinate.
     */
    get matrixModelView(): Readonly<TgdMat4> {
        return this._matrixModelView.invert(this.transfo.matrix)
    }

    abstract get matrixProjection(): Readonly<TgdMat4>

    get matrixProjectionInverse(): Readonly<TgdMat4> {
        if (this.dirtyProjectionInverse) {
            this._matrixProjectionInverse.invert(this.matrixProjection)
            this.dirtyProjectionInverse = false
        }
        return this._matrixProjectionInverse
    }

    get zoom() {
        return this._zoom
    }
    set zoom(v: number) {
        if (this._zoom === v) return

        this._zoom = v
        this.transfo.setScale(v, v, v)
        this.dirtyModelView = true
    }

    toCode(caption?: string): string {
        return `// ${caption ?? "TgdCamera"}\n// Not implemented yet`
    }

    debug(caption?: string) {
        const name = `${this.name}: ${caption ?? ""}`
        console.log("TgdCamera", name)
        console.log("    Distance:", this.transfo.distance)
        console.log("    Zoom:", this.zoom)
        this.transfo.orientation.debug("   Orientation")
        this.transfo.position.debug("    Target")
        this.transfo.actualPosition.debug("    Actual position")
        this.matrixModelView.debug("    MatrixModelView")
        this.matrixProjection.debug("    MatrixProjection")
    }

    protected abstract getSpaceHeightAtTarget(): number

    protected abstract setSpaceHeightAtTarget(v: number): void

    private get dirtyModelView(): boolean {
        return this._dirtyModelView
    }
    private set dirtyModelView(v: boolean) {
        this._dirtyModelView = v
        if (v) {
            this.dirtyModelViewInverse = true
        }
    }

    protected get dirtyProjection(): boolean {
        return this._dirtyProjection
    }
    protected set dirtyProjection(v: boolean) {
        this._dirtyProjection = v
        if (v) this.dirtyProjectionInverse = true
    }
}
