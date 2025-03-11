import {
    TgdQuat,
    TgdVec3,
    TgdMat4,
    TgdTransfo,
    TgdTransfoOptions,
} from "@tgd/math"
import { TgdInterfaceTransformable } from "../interface"

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
    target: TgdVec3
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
    protected _far = Infinity

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
            target: this.transfo.position.clone(),
            zoom: this.zoom,
        }
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

    /**
     * @param screenX -1 is the left edge, 0 id the center and +1 is the right edge.
     * @param screenY -1 is the bottom edge, 0 id the center and +1 is the top edge.
     * @returns The normalized ray vector that goes from the camera position
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

    debug(caption?: string) {
        const name = caption ?? this.name
        console.log("Distance:", this.transfo.distance)
        console.log("Zoom:", this.zoom)
        this.transfo.orientation.debug(`${name} orientation`)
        this.transfo.position.debug(`${name} target`)
        this.transfo.actualPosition.debug(`${name} actual position`)
        this.matrixModelView.debug(`${name} matrixModelView`)
        this.matrixProjection.debug(`${name} matrixProjection`)
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
