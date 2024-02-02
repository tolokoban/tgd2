import { TgdCamera } from "@/camera"
import { TgdInputPointer, TgdInputPointerEvent } from "@/input/pointer"

export class TgdControllerCameraOrbit {
    private pointer: TgdInputPointer | null = null

    constructor(private readonly camera: TgdCamera) {}

    attach(canvas: HTMLCanvasElement) {
        if (this.pointer) this.pointer.detach()

        this.pointer = new TgdInputPointer({
            canvas,
            onMoveStart: this.handleMoveStart,
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

    private readonly handleMoveStart = ({ x, y, t }: TgdInputPointerEvent) => {}

    private readonly handleMove = (evt: {
        current: TgdInputPointerEvent
        previous: TgdInputPointerEvent
        start: TgdInputPointerEvent
    }) => {
        const { camera } = this
        const dt = evt.current.t - evt.previous.t
        if (dt <= 0) return

        const speed = 25 / dt
        const dx = (evt.current.x - evt.previous.x) * speed
        const dy = (evt.current.y - evt.previous.y) * speed
        camera.orbitAroundY(-dx).orbitAroundX(dy)
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
