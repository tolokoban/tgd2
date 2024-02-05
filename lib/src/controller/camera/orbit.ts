import { TgdCamera } from "@/camera"
import { TdgInputKeyboard } from "@/input"
import { TgdInputPointer, TgdInputPointerEvent } from "@/input/pointer"

export class TgdControllerCameraOrbit {
    private pointer: TgdInputPointer | null = null
    private keyboard = new TdgInputKeyboard()

    constructor(private readonly camera: TgdCamera) {}

    attach(canvas: HTMLCanvasElement) {
        if (this.pointer) this.pointer.detach()

        this.pointer = new TgdInputPointer({
            canvas,
            onMove: this.handleMove,
            onZoom: this.handleZoom,
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
            return
        }

        const speed = 2
        const dx = (evt.current.x - evt.previous.x) * speed
        const dy = (evt.current.y - evt.previous.y) * speed
        if (!keyboard.isPressed("x")) camera.orbitAroundY(-dx)
        if (!keyboard.isPressed("y")) camera.orbitAroundX(dy)
    }

    private readonly handleZoom = (
        direction: number,
        preventDefault: () => void
    ) => {
        const { camera } = this
        const dz = -direction * 1e-3
        camera.zoom = Math.max(1, camera.zoom + dz)
        preventDefault()
    }
}
