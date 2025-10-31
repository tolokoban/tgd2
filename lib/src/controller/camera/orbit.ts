import { TgdAnimation } from "@tgd/types/animation"
import {
    tgdActionCreateCameraInterpolation,
    tgdEasingFunctionOutQuad,
} from "@tgd/utils"
import { tgdCalcClamp } from "@tgd/math/math"
import {
    TgdInputPointerEventMove,
    TgdInputPointerModifierKeys,
    TgdInputPointerEventZoom,
} from "@tgd/types"
import { TgdEvent } from "@tgd/event"
import { TgdCamera, TgdCameraState } from "@tgd/camera"
import { TgdMat3, TgdQuat, TgdVec3 } from "@tgd/math"
import { TgdInputs } from "@tgd/input"

export interface TgdControllerCameraOrbitZoomRequest
    extends TgdInputPointerModifierKeys {
    x: number
    y: number
    /**
     * The computed zoom, if accepted.
     */
    zoom: number
}

export interface TgdControllerCameraOrbitOptions {
    zoom: number
    minZoom: number
    maxZoom: number
    speedOrbit: number
    /**
     * Number of seconds for the zoom to go
     * from 1 to 2, or from 1 to 0.5.
     */
    speedZoom: number
    speedPanning: number
    /**
     * Time in msec during which the orbiting continues
     * after the pointer stop touching.
     */
    inertiaOrbit: number
    /**
     * Time in msec during which the zooming continues
     * after the pointer stop touching.
     *
     * Default to 0.
     */
    inertiaZoom: number
    /**
     * Time in msec during which the panning continues
     * after the pointer stop touching.
     *
     * Default to 0.
     */
    inertiaPanning: number
    /**
     * If `true`, pannig will only act on `camera.shift`,
     * not on `camera.target`.
     *
     * Default to 0.
     */
    fixedTarget: boolean
    /**
     * Zooming can be done by the mouse wheel.
     * In this case, we may want to prevent it when the
     * canvas is not in fullscreen, to let the rest of
     * the page to scroll.
     *
     * This function, if defined, will be called just
     * before the zoom event. If it returns `false`,
     * the event is not dispatched.
     */
    onZoomRequest(
        this: void,
        event: TgdControllerCameraOrbitZoomRequest
    ): boolean
    /**
     * If this attribute is defined, the orbit will follow latitude/longitude.
     * You can also add limits.
     */
    geo: Partial<{
        /** Expressed in radians */
        lat: number
        /** Expressed in radians */
        lng: number
        /** Expressed in radians */
        minLat: number
        /** Expressed in radians */
        maxLat: number
        /** Expressed in radians */
        maxLng: number
        /** Expressed in radians */
        minLng: number
    }>
    /**
     * If `debug` is set, the special hotkey `?` will drop the
     * current camera status to the console.
     */
    debug?: boolean
}

export class TgdControllerCameraOrbit {
    private static counter = 0

    public readonly id = `TgdControllerCameraOrbit-${TgdControllerCameraOrbit.counter++}`

    public readonly eventChange = new TgdEvent<TgdCamera>()

    public minZoom = 1e-3

    public maxZoom = Infinity

    public speedZoom = 1

    public speedOrbit = 1

    public speedPanning = 1

    public inertiaZoom = 0

    public inertiaOrbit = 0

    public inertiaPanning = 0

    /**
     * If `true`, pannig will only act on `camera.shift`,
     * not on `camera.target`.
     */
    public fixedTarget = false

    /**
     * Zooming can be done by the mouse wheel.
     * In this case, we may want to prevent it when the
     * canvas is not in fullscreen, to let the rest of
     * the page to scroll.
     *
     * This function, if defined, will be called just
     * before the zoom event. If it returns `false`,
     * the event is not dispatched.
     */
    public onZoomRequest: (
        this: void,
        event: TgdControllerCameraOrbitZoomRequest
    ) => boolean

    /**
     * The camera will only move if `enabled === true`.
     */
    public _enabled = true

    private animOrbit: TgdAnimation | null = null

    /**
     * This is the space height at target for zoom == 1.0
     *
     * @see resetZoom()
     */
    private spaceHeightAtTargetForZoom1 = 1

    private _zoom = 1

    /**
     * It can be usefull to disable to orbit controller for some time
     * because an animation is going on on the camera, for instance.
     */
    private disabledUntil = 0

    private readonly cameraInitialState: TgdCameraState

    private readonly geo?: {
        lat: number
        lng: number
        minLat: number
        maxLat: number
        maxLng: number
        minLng: number
    }

    private readonly tmpQuat = new TgdQuat()

    private lastPointerEventTimestamp = 0

    constructor(
        private readonly context: {
            camera: TgdCamera
            inputs: TgdInputs
            time: number
            animSchedule(...animations: TgdAnimation[]): TgdAnimation[]
            animCancel(animation: TgdAnimation): void
            paint(): void
        },
        {
            geo,
            zoom = 1,
            minZoom = 1e-3,
            maxZoom = Infinity,
            speedZoom = 1,
            speedOrbit = 1,
            speedPanning = 1,
            inertiaZoom = 0,
            inertiaOrbit = 0,
            inertiaPanning = 0,
            fixedTarget = false,
            debug = false,
            onZoomRequest = alwaysTrue,
        }: Partial<TgdControllerCameraOrbitOptions> = {}
    ) {
        this.geo = undefined
        if (geo) {
            this.geo = {
                lat: 0,
                lng: 0,
                minLat: -Math.PI / 2,
                maxLat: +Math.PI / 2,
                minLng: -Number.MAX_VALUE,
                maxLng: +Number.MAX_VALUE,
                ...geo,
            }
        }
        this.cameraInitialState = context.camera.getCurrentState()
        const { inputs } = context
        inputs.pointer.eventMoveStart.addListener(this.handleMoveStart)
        inputs.pointer.eventMoveEnd.addListener(this.handleMoveEnd)
        inputs.pointer.eventMove.addListener(this.handleMove)
        inputs.pointer.eventZoom.addListener(this.handleZoom)
        this.speedOrbit = speedOrbit
        this.speedZoom = speedZoom
        this.speedPanning = speedPanning
        this.inertiaOrbit = inertiaOrbit
        this.inertiaZoom = inertiaZoom
        this.inertiaPanning = inertiaPanning
        this.fixedTarget = fixedTarget
        this.minZoom = minZoom
        this.maxZoom = maxZoom
        this.onZoomRequest = onZoomRequest
        if (this.geo) this.orbitGeo(this.geo.lat, this.geo.lng)
        globalThis.setTimeout(() => context.paint())
        if (debug) {
            context.inputs.keyboard.eventKeyPress.addListener(this.handleDebug)
        }
        this.resetZoom(zoom)
    }

    get zoom() {
        return this._zoom
    }
    set zoom(value: number) {
        const newZoom = tgdCalcClamp(value, this.minZoom, this.maxZoom)
        if (newZoom === this._zoom) return

        this._zoom = newZoom
        this.context.camera.spaceHeightAtTarget =
            this.spaceHeightAtTargetForZoom1 / newZoom
    }

    get enabled() {
        return this.context.time > this.disabledUntil && this._enabled
    }
    set enabled(value: boolean) {
        this._enabled = value
    }

    resetZoom(zoomForCurrentCameraState = 1) {
        if (zoomForCurrentCameraState <= 0) return

        this.spaceHeightAtTargetForZoom1 =
            this.context.camera.spaceHeightAtTarget / zoomForCurrentCameraState
        this._zoom = zoomForCurrentCameraState
    }

    reset(
        animDuration: number,
        {
            easingFunction,
            onEnd,
            onAction,
            delay = 0,
        }: {
            easingFunction?: (x: number) => number
            onAction?: (t: number) => void
            onEnd?: () => void
            delay?: number
        } = {}
    ) {
        const { context } = this
        this.disableForSomeTime(animDuration)
        const action = tgdActionCreateCameraInterpolation(
            context.camera,
            this.cameraInitialState
        )
        context.animSchedule({
            action: (t: number) => {
                action(t)
                onAction?.(t)
            },
            duration: animDuration,
            easingFunction,
            onEnd,
            delay,
        })
    }

    disableForSomeTime(delayInMsec: number) {
        this.disabledUntil = Math.max(
            this.disabledUntil,
            this.context.time + delayInMsec
        )
    }

    detach() {
        const { inputs } = this.context
        inputs.keyboard.eventKeyPress.removeListener(this.handleDebug)
        inputs.pointer.eventMoveStart.removeListener(this.handleMoveStart)
        inputs.pointer.eventMoveEnd.removeListener(this.handleMoveEnd)
        inputs.pointer.eventMove.removeListener(this.handleMove)
        inputs.pointer.eventZoom.removeListener(this.handleZoom)
        this.eventChange.removeAllListeners()
    }

    private readonly handleMove = (event: TgdInputPointerEventMove) => {
        this.lastPointerEventTimestamp = event.current.t
        if (!this.enabled || this.animOrbit) return

        this.actualMove(event)
    }

    private readonly actualMove = (event: TgdInputPointerEventMove) => {
        const dt = event.current.t - event.previous.t
        if (dt <= 0) return

        const { context } = this
        const { keyboard } = context.inputs
        if (event.altKey || event.current.fingersCount === 2)
            return this.handlePan(event)

        if (this.geo) {
            const speed = keyboard.isDown("Shift") ? 0.2 : 2
            const lngDelta = keyboard.isDown("x")
                ? 0
                : speed * (event.previous.x - event.current.x)
            const latDelta = keyboard.isDown("y")
                ? 0
                : speed * (event.previous.y - event.current.y)
            const lng = this.geo.lng + lngDelta
            const lat = this.geo.lat + latDelta
            this.orbitGeo(lat, lng)
            return
        }

        if (keyboard.isDown("z")) return this.handleRotateAroundZ(event)

        this.orbit(
            event.current.x - event.previous.x,
            event.current.y - event.previous.y,
            event.shiftKey
        )
    }

    private orbit(deltaX: number, deltaY: number, slowDown: boolean) {
        const { context } = this
        const { camera } = context
        const { keyboard } = context.inputs
        const speed = 3 * (slowDown ? 0.1 : 1) * this.speedOrbit
        const dx = deltaX * speed
        const dy = deltaY * speed
        if (!keyboard.isDown("x")) camera.transfo.orbitAroundY(dx)
        if (!keyboard.isDown("y")) camera.transfo.orbitAroundX(-dy)
        this.fireOrbitChange()
    }

    /**
     * Set the camera orientation from latitude/longitude
     * @param lat Expressed in radians
     * @param lng Expressed in radians
     */
    public orbitGeo(lat: number, lng: number) {
        const { geo } = this
        if (!geo) return

        lat = tgdCalcClamp(lat, geo.minLat, geo.maxLat)
        geo.lat = lat
        lng = tgdCalcClamp(lng, geo.minLng, geo.maxLng)
        geo.lng = lng
        const { orientation } = this.cameraInitialState
        const vecZ = makeGeoVec3(lat, lng)
        const vecY = makeGeoVec3(lat + Math.PI / 2, lng)
        const vecX = new TgdVec3(vecY).cross(vecZ)
        const mat = new TgdMat3()
        orientation.toMatrix(mat)
        const final = new TgdMat3(vecX, vecY, vecZ)
        final.multiply(mat)
        this.tmpQuat.fromMatrix(final)
        this.context.camera.transfo.orientation = this.tmpQuat
        this.fireOrbitChange()
    }

    private readonly handleMoveStart = () => {
        if (!this.enabled) return

        const { animOrbit, context } = this
        if (animOrbit) {
            context.animCancel(animOrbit)
            this.animOrbit = null
        }
    }

    private readonly handleMoveEnd = (event: TgdInputPointerEventMove) => {
        if (!this.enabled) return

        const { context, inertiaOrbit } = this
        if (inertiaOrbit > 0) {
            const inverseDeltaTime = 1 / (event.current.t - event.previous.t)
            const speedX =
                inverseDeltaTime * (event.current.x - event.previous.x)
            const speedY =
                inverseDeltaTime * (event.current.y - event.previous.y)
            const currentEvent = structuredClone(event)
            currentEvent.current.t = Date.now()
            this.animOrbit = {
                duration: inertiaOrbit * 1e-3,
                action: (alpha) => {
                    currentEvent.previous.t = currentEvent.current.t
                    currentEvent.previous.x = currentEvent.current.x
                    currentEvent.previous.y = currentEvent.current.y
                    currentEvent.previous.fingersCount =
                        currentEvent.current.fingersCount
                    currentEvent.current.t = Date.now()
                    const deltaTime =
                        currentEvent.current.t - currentEvent.previous.t
                    const strength = 1 - alpha
                    const factor = strength * deltaTime
                    currentEvent.current.x += factor * speedX
                    currentEvent.current.y += factor * speedY
                    this.actualMove(currentEvent)
                },
                easingFunction: tgdEasingFunctionOutQuad,
            }
            context.animSchedule(this.animOrbit)
        }
    }

    private handlePan(event: TgdInputPointerEventMove) {
        const { fixedTarget, speedPanning, context } = this
        const { camera } = context
        const inverseZoom = 1 / camera.zoom
        const panSpeed = 0.5 * speedPanning * inverseZoom
        const dx =
            (event.current.x - event.previous.x) *
            panSpeed *
            camera.spaceWidthAtTarget
        const dy =
            (event.current.y - event.previous.y) *
            panSpeed *
            camera.spaceHeightAtTarget
        if (fixedTarget) {
            // camera.moveShift(-dx, -dy, 0)
        } else {
            camera.transfo.moveAlongAxes(-dx, -dy, 0)
        }
        this.fireOrbitChange()
    }

    private handleRotateAroundZ(event: TgdInputPointerEventMove) {
        const { camera } = this.context
        const x1 = event.previous.x
        const y1 = event.previous.y
        if (Math.abs(x1) + Math.abs(y1) === 0) return

        const x2 = event.current.x
        const y2 = event.current.y
        if (Math.abs(x2) + Math.abs(y2) === 0) return

        const x = x1 * x2 + y1 * y2
        const y = x1 * y2 - y1 * x2
        const ang = Math.atan2(y, x) * this.speedOrbit
        camera.transfo.orbitAroundZ(ang)
        this.fireOrbitChange()
    }

    private fireOrbitChange() {
        this.context.paint()
        this.eventChange.dispatch(this.context.camera)
    }

    private readonly handleZoom = (event: TgdInputPointerEventZoom) => {
        if (
            this.lastPointerEventTimestamp > 0 &&
            this.enabled &&
            this.speedZoom > 0
        ) {
            // Msec since last mouse event
            const time = 16e-3 // We assume 60 FPS
            let speed = this.speedZoom * time
            if (this.context.inputs.keyboard.isDown("Shift")) speed *= 0.1
            else if (this.context.inputs.keyboard.isDown("Control")) speed *= 10
            const factor = 1 + speed
            const zoom = tgdCalcClamp(
                this.zoom * (event.direction < 0 ? factor : 1 / factor),
                this.minZoom,
                this.maxZoom
            )
            if (
                zoom !== this.zoom &&
                this.onZoomRequest({
                    altKey: event.altKey,
                    ctrlKey: event.ctrlKey,
                    metaKey: event.metaKey,
                    shiftKey: event.shiftKey,
                    x: event.current.x,
                    y: event.current.y,
                    zoom,
                })
            ) {
                this.zoom = zoom
                this.fireZoomChange()
            }
            event.preventDefault()
        }
        this.lastPointerEventTimestamp = event.current.t
    }

    private fireZoomChange() {
        this.context.paint()
        this.eventChange.dispatch(this.context.camera)
    }

    private readonly handleDebug = (event: { key: string }) => {
        if (event.key === "?") {
            console.log(this.context.camera.toCode())
        }
    }
}

/**
 * Default function for `onZoomRequest`.
 */
const alwaysTrue = () => true

function makeGeoVec3(lat: number, lng: number): TgdVec3 {
    const radius = Math.cos(lat)
    const y = Math.sin(lat)
    const z = radius * Math.cos(lng)
    const x = radius * Math.sin(lng)
    return new TgdVec3(x, y, z)
}
