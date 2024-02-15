import { TgdCamera } from "@/camera"
import { TgdEvent } from "@/event"
import { TdgInputKeyboardImpl, TgdInputs } from "@/input"
import { TgdInputPointerImpl } from "@/input/pointer"
import { TgdContextInterface, TgdInputPointerEvent } from "@/types"

export class TgdControllerCameraOrbit {
    /**
     * The camera will only move if `enabled === true`.
     */
    public enabled = true
    public readonly eventZoomChange = new TgdEvent<TgdControllerCameraOrbit>()
    public readonly eventOrbitChange = new TgdEvent<TgdControllerCameraOrbit>()

    constructor(private readonly context: TgdContextInterface) {
        const { inputs } = context
        inputs.pointer.eventMove.addListener(this.handleMove)
        inputs.pointer.eventZoom.addListener(this.handleZoom)
    }

    detach() {
        const { inputs } = this.context
        inputs.pointer.eventMove.removeListener(this.handleMove)
        inputs.pointer.eventZoom.removeListener(this.handleZoom)
    }

    private readonly handleMove = (evt: {
        current: TgdInputPointerEvent
        previous: TgdInputPointerEvent
        start: TgdInputPointerEvent
    }) => {
        if (!this.enabled) return

        const { context } = this
        const dt = evt.current.t - evt.previous.t
        if (dt <= 0) return

        const { keyboard } = context.inputs
        if (keyboard.isDown("z")) {
            const x1 = evt.previous.x
            const y1 = evt.previous.y
            if (Math.abs(x1) + Math.abs(y1) === 0) return

            const x2 = evt.current.x
            const y2 = evt.current.y
            if (Math.abs(x2) + Math.abs(y2) === 0) return

            const x = x1 * x2 + y1 * y2
            const y = x1 * y2 - y1 * x2
            const ang = Math.atan2(y, x)
            context.camera.orbitAroundZ(-ang)
            this.fireOrbitChange()
            return
        }

        const speed = 2
        const dx = (evt.current.x - evt.previous.x) * speed
        const dy = (evt.current.y - evt.previous.y) * speed
        if (!keyboard.isDown("x")) context.camera.orbitAroundY(-dx)
        if (!keyboard.isDown("y")) context.camera.orbitAroundX(dy)
        this.fireOrbitChange()
    }

    private fireOrbitChange() {
        this.eventOrbitChange.dispatch(this)
        this.context.paint()
    }

    private readonly handleZoom = (evt: {
        current: TgdInputPointerEvent
        direction: number
        preventDefault: () => void
    }) => {
        if (!this.enabled) return

        const { camera } = this.context
        const dz = -evt.direction * 1e-3
        camera.zoom = Math.max(1e-5, camera.zoom + dz)
        evt.preventDefault()
        this.fireZoomChange()
    }

    private fireZoomChange() {
        this.eventZoomChange.dispatch(this)
        this.context.paint()
    }
}
