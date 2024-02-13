import { TgdCamera } from "@/camera"
import { TgdEvent } from "@/event"
import { TdgInputKeyboard } from "@/input"
import { TgdInputPointer, TgdInputPointerEvent } from "@/input/pointer"

export interface TgdControllerCameraOrbitOptions {
    /** Drag inertia in milliseconds. */
    inertia: number
}

export class TgdControllerCameraOrbit {
    /**
     * The camera will only move if `enabled === true`.
     */
    public enabled = true
    public readonly eventZoomChange = new TgdEvent<TgdControllerCameraOrbit>()
    public readonly eventOrbitChange = new TgdEvent<TgdControllerCameraOrbit>()

    private pointer: TgdInputPointer | null = null
    private keyboard = new TdgInputKeyboard()
    private readonly options: TgdControllerCameraOrbitOptions

    constructor(
        public readonly camera: TgdCamera,
        options: Partial<TgdControllerCameraOrbitOptions> = {}
    ) {
        this.options = {
            inertia: 500,
            ...options,
        }
    }

    attach(canvas: HTMLCanvasElement) {
        this.detach()

        this.pointer = new TgdInputPointer({
            canvas,
            onMove: this.handleMove,
            onZoom: this.handleZoom,
            inertia: this.options.inertia,
        })
    }

    detach() {
        if (this.pointer) {
            this.pointer.detach()
            this.pointer = null
        }
    }

    private readonly handleMove = (evt: {
        current: TgdInputPointerEvent
        previous: TgdInputPointerEvent
        start: TgdInputPointerEvent
    }) => {
        if (!this.enabled) return

        const { camera, keyboard } = this
        const dt = evt.current.t - evt.previous.t
        if (dt <= 0) return

        if (keyboard.isPressed("z")) {
            const x1 = evt.previous.x
            const y1 = evt.previous.y
            if (Math.abs(x1) + Math.abs(y1) === 0) return

            const x2 = evt.current.x
            const y2 = evt.current.y
            if (Math.abs(x2) + Math.abs(y2) === 0) return

            const x = x1 * x2 + y1 * y2
            const y = x1 * y2 - y1 * x2
            const ang = Math.atan2(y, x)
            camera.orbitAroundZ(-ang)
            this.eventOrbitChange.dispatch(this)
            return
        }

        const speed = 2
        const dx = (evt.current.x - evt.previous.x) * speed
        const dy = (evt.current.y - evt.previous.y) * speed
        if (!keyboard.isPressed("x")) camera.orbitAroundY(-dx)
        if (!keyboard.isPressed("y")) camera.orbitAroundX(dy)
        this.eventOrbitChange.dispatch(this)
    }

    private readonly handleZoom = (
        direction: number,
        preventDefault: () => void
    ) => {
        if (!this.enabled) return

        const { camera } = this
        const dz = -direction * 1e-3
        camera.zoom = Math.max(1, camera.zoom + dz)
        preventDefault()
        this.eventZoomChange.dispatch(this)
    }
}
