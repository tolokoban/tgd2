export interface TgdInputPointerEvent {
    x: number
    y: number
    t: number
}

export class TgdInputPointer {
    public start: TgdInputPointerEvent = { x: 0, y: 0, t: 0 }
    public current: TgdInputPointerEvent = { x: 0, y: 0, t: 0 }
    public previous: TgdInputPointerEvent = { x: 0, y: 0, t: 0 }

    private canvas: HTMLCanvasElement | null = null
    private active = false
    private canvasX = 0
    private canvasY = 0
    private screenX = 0
    private screenY = 0

    constructor(
        private readonly options: Partial<{
            canvas: HTMLCanvasElement | null
            onMoveStart: (args: TgdInputPointerEvent) => void
            onMove: (args: {
                current: TgdInputPointerEvent
                previous: TgdInputPointerEvent
                start: TgdInputPointerEvent
            }) => void
            onMoveEnd: (args: TgdInputPointerEvent) => void
            onZoom: (direction: number, preventDefault: () => void) => void
        }>
    ) {
        if (options.canvas) this.attach(options.canvas)
    }

    get element() {
        return this.canvas
    }

    attach(canvas: HTMLCanvasElement) {
        this.detach()
        this.canvas = canvas
        canvas.addEventListener(
            "pointerdown",
            this.handleCanvasPointerDown,
            true
        )
        canvas.addEventListener("wheel", this.handleCanvasWheel)
        document.addEventListener("pointerdown", this.handlePointerDown)
        document.addEventListener("pointermove", this.handlePointerMove)
        document.addEventListener("pointerup", this.handlePointerUp)
    }

    detach() {
        const { canvas } = this
        if (!canvas) return

        canvas.removeEventListener("pointerdown", this.handleCanvasPointerDown)
        canvas.removeEventListener("wheel", this.handleCanvasWheel)
        document.removeEventListener("pointerdown", this.handlePointerDown)
        document.removeEventListener("pointermove", this.handlePointerMove)
        document.removeEventListener("pointerup", this.handlePointerUp)
        this.canvas = null
    }

    private readonly handleCanvasWheel = (evt: WheelEvent) => {
        const { onZoom } = this.options
        if (!onZoom) return

        onZoom(evt.deltaY, () => evt.preventDefault())
    }

    private readonly handleCanvasPointerDown = (evt: PointerEvent) => {
        this.canvasX = evt.clientX
        this.canvasY = evt.clientY
        this.active = true
    }

    private readonly handlePointerDown = (evt: PointerEvent) => {
        if (!this.active) return

        this.screenX = evt.clientX
        this.screenY = evt.clientY
        const point = this.getPoint(evt)
        this.start = this.current = point
        this.options.onMoveStart?.(point)
    }

    private readonly handlePointerMove = (evt: PointerEvent) => {
        if (!this.active || !this.canvas) return

        this.previous = this.current
        this.current = this.getPoint(evt)
        this.options.onMove?.(this)
    }

    private readonly handlePointerUp = (evt: PointerEvent) => {
        if (!this.active) return

        this.options.onMoveEnd?.(this.getPoint(evt))
        this.active = false
    }

    private getPoint(evt: PointerEvent): TgdInputPointerEvent {
        if (!this.canvas) throw Error("No canvas has been defined!")

        const { left, top, width, height } = this.canvas.getBoundingClientRect()
        const x =
            2 *
            ((this.canvasX + evt.clientX - this.screenX - left) / width - 0.5)
        const y =
            -2 *
            ((this.canvasY + evt.clientY - this.screenY - top) / height - 0.5)
        return { x, y, t: evt.timeStamp }
    }
}
