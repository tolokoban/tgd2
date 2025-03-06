import { TgdAnimation } from "@tgd/types/animation"
import {
    tgdActionCreateCameraInterpolation,
    tgdEasingFunctionOutQuad,
} from "@tgd/utils"
import { tgdCalcClamp } from "@tgd/utils/math"
import {
    TgdInputPointerEventMove,
    TgdInputPointerModifierKeys,
    TgdInputPointerEventZoom,
} from "@tgd/types"
import { TgdEvent } from "@tgd/event"
import { TgdCamera, TgdCameraState } from "@tgd/camera"
import { TgdMat3, TgdQuat, TgdVec3 } from "@tgd/math"
import { TgdContext } from "@tgd/context"

export interface TgdControllerCameraOrbitZoomRequest
    extends TgdInputPointerModifierKeys {
    x: number
    y: number
}

export interface TgdControllerCameraOrbitOptions {
    minZoom: number
    maxZoom: number
    speedOrbit: number
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
    onZoomRequest(this: void, event: TgdControllerCameraOrbitZoomRequest): boolean
    /**
     * If this attribute is defined, the orbit will follow latitude/longitude.
     * You can also add limits.
     */
    geo: Partial<{
        lat: number
        lng: number
        minLat: number
        maxLat: number
        maxLng: number
        minLng: number
    }>
}

export class TgdControllerCameraOrbit {
    private static counter = 0

    public readonly id = `Orbit-${TgdControllerCameraOrbit.counter++}`
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

    constructor(
        private readonly context: TgdContext,
        {
            geo,
            minZoom = 1e-3,
            maxZoom = Infinity,
            speedZoom = 1,
            speedOrbit = 1,
            speedPanning = 1,
            inertiaZoom = 0,
            inertiaOrbit = 0,
            inertiaPanning = 0,
            fixedTarget = false,
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
    }

    get enabled() {
        return this.context.time > this.disabledUntil && this._enabled
    }
    set enabled(value: boolean) {
        this._enabled = value
    }

    reset(animDuration: number, easingFunction?: (x: number) => number) {
        const { context } = this
        this.disableForSomeTime(animDuration)
        context.animSchedule({
            action: tgdActionCreateCameraInterpolation(
                context.camera,
                this.cameraInitialState
            ),
            duration: animDuration,
            easingFunction,
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
        inputs.pointer.eventMove.removeListener(this.handleMove)
        inputs.pointer.eventZoom.removeListener(this.handleZoom)
    }

    private readonly handleMove = (event: TgdInputPointerEventMove) => {
        if (!this.enabled) return

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
        if (!keyboard.isDown("x")) camera.orbitAroundY(-dx)
        if (!keyboard.isDown("y")) camera.orbitAroundX(dy)
        this.fireOrbitChange()
    }

    /**
     * Set the camera orientation from latitude/longitude
     * @param lat Expressed in radians
     * @param lng Expressed in radians
     */
    public orbitGeo(lat: number, lng: number) {
        const { geo: latlng } = this
        if (!latlng) return

        lat = tgdCalcClamp(lat, latlng.minLat, latlng.maxLat)
        latlng.lat = lat
        lng = tgdCalcClamp(lng, latlng.minLng, latlng.maxLng)
        latlng.lng = lng
        const { orientation } = this.cameraInitialState
        const vecZ = makeGeoVec3(lat, lng)
        const vecY = makeGeoVec3(lat + Math.PI / 2, lng)
        const vecX = new TgdVec3(vecY).cross(vecZ)
        const mat = new TgdMat3()
        orientation.toMatrix(mat)
        const final = new TgdMat3(vecX, vecY, vecZ)
        final.multiply(mat)
        this.context.camera.orientation = TgdQuat.fromMatrix(final)
    }

    private readonly handleMoveStart = () => {
        if (!this.enabled) return

        const { animOrbit, context } = this
        if (animOrbit) context.animCancel(animOrbit)
    }

    private readonly handleMoveEnd = (event: TgdInputPointerEventMove) => {
        if (!this.enabled) return

        const { context, inertiaOrbit } = this
        if (inertiaOrbit > 0) {
            const inverseDeltaTime =
                inertiaOrbit / (event.current.t - event.previous.t)
            const slowDown = event.shiftKey
            const dx = inverseDeltaTime * (event.current.x - event.previous.x)
            const dy = inverseDeltaTime * (event.current.y - event.previous.y)
            let previousAlpha = 0
            this.animOrbit = {
                duration: inertiaOrbit,
                action: alpha => {
                    const t = alpha - previousAlpha
                    previousAlpha = alpha
                    if (this.geo) {
                        // this.orbitLatLng(lat, lng)
                    } else {
                        this.orbit(dx * t, dy * t, slowDown)
                    }
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
            camera.moveShift(-dx, -dy, 0)
        } else {
            camera.moveTarget(-dx, -dy, 0)
        }
        this.fireOrbitChange()
        return
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
        camera.orbitAroundZ(-ang)
        this.fireOrbitChange()
        return
    }

    private fireOrbitChange() {
        this.context.paint()
        this.eventChange.dispatch(this.context.camera)
    }

    private readonly handleZoom = (event: TgdInputPointerEventZoom) => {
        if (
            !this.enabled ||
            this.speedZoom === 0 ||
            !this.onZoomRequest({
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                metaKey: event.metaKey,
                shiftKey: event.shiftKey,
                x: event.current.x,
                y: event.current.y,
            })
        )
            return

        const { context } = this
        const { camera } = context
        let speed = 0.1 * this.speedZoom
        if (this.context.inputs.keyboard.isDown("Shift")) speed *= 0.1
        const dz = -event.direction * speed
        camera.zoom = tgdCalcClamp(
            camera.zoom * (1 + dz),
            this.minZoom,
            this.maxZoom
        )
        event.preventDefault()
        this.fireZoomChange()
    }

    private fireZoomChange() {
        this.context.paint()
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
