import { TgdEvent } from "@tgd/event"
import {
    TgdInputPointer,
    TgdInputPointerEventMove,
    TgdInputPointerEventFinger,
    TgdInputPointerEventTap,
    TgdInputPointerEventZoom,
} from "@tgd/types"

const MOUSE_BUTTON_RIGHT = 2

export class TgdInputPointerImpl implements TgdInputPointer {
    readonly eventTap = new TgdEvent<Readonly<TgdInputPointerEventTap>>()
    readonly eventMoveStart = new TgdEvent<Readonly<TgdInputPointerEventMove>>()
    readonly eventMove = new TgdEvent<Readonly<TgdInputPointerEventMove>>()
    readonly eventMoveEnd = new TgdEvent<Readonly<TgdInputPointerEventMove>>()
    readonly eventZoom = new TgdEvent<Readonly<TgdInputPointerEventZoom>>()
    /**
     * This is a tap only of the pointer touched for less that
     * `tapDelay` milliseconds.
     */
    public tapDelay = 300

    private controlKeys = {
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
    }
    private start: TgdInputPointerEventFinger = {
        x: 0,
        y: 0,
        t: 0,
        fingersCount: 1,
    }
    private current: TgdInputPointerEventFinger = {
        x: 0,
        y: 0,
        t: 0,
        fingersCount: 1,
    }
    private previous: TgdInputPointerEventFinger = {
        x: 0,
        y: 0,
        t: 0,
        fingersCount: 1,
    }
    /**
     * If not null, the pointer is touching.
     */
    private pointerEvent: PointerEvent | null = null

    constructor(private readonly canvas: HTMLCanvasElement) {
        canvas.addEventListener("pointerdown", this.handlePointerDown, true)
        canvas.addEventListener("wheel", this.handleCanvasWheel)
        canvas.addEventListener("contextmenu", this.handleContextMenu)
        canvas.addEventListener("pointermove", this.handlePointerMove)
        canvas.addEventListener("pointerup", this.handlePointerUp)
    }

    detach() {
        const { canvas } = this
        if (!canvas) return

        canvas.removeEventListener("pointerdown", this.handlePointerDown)
        canvas.removeEventListener("wheel", this.handleCanvasWheel)
        canvas.removeEventListener("contextmenu", this.handleContextMenu)
        canvas.removeEventListener("pointermove", this.handlePointerMove)
        canvas.removeEventListener("pointerup", this.handlePointerUp)
    }

    private readonly handleContextMenu = (event: {
        preventDefault: () => void
    }) => {
        event.preventDefault()
    }

    private readonly handleCanvasWheel = (event: WheelEvent) => {
        let delta = event.deltaX + event.deltaY + event.deltaZ
        delta = delta > 0 ? 1 : -1;
        this.eventZoom.dispatch({
            current: this.getPoint(event),
            direction: delta,
            preventDefault: () => event.preventDefault(),
            ...this.controlKeys,
        })
    }

    private readonly handlePointerDown = (event: PointerEvent) => {
        if (!event.isPrimary) return

        this.canvas.setPointerCapture(event.pointerId)
        event.preventDefault()
        event.stopPropagation()
        this.pointerEvent = event
        const point = this.getPoint(event)
        this.start = this.current = this.previous = point
        this.eventMoveStart.dispatch({
            start: point,
            current: point,
            previous: point,
            ...this.controlKeys,
        })
    }

    private readonly handlePointerMove = (event: PointerEvent) => {
        if (!event.isPrimary || !this.pointerEvent || !this.canvas) return

        this.previous = this.current
        this.current = this.getPoint(event)
        this.eventMove.dispatch({
            start: this.start,
            current: this.current,
            previous: this.previous,
            ...this.controlKeys,
        })
    }

    private readonly handlePointerUp = (event: PointerEvent) => {
        if (!event.isPrimary || !this.pointerEvent) return

        event.preventDefault()
        this.current = this.getPoint(event)
        this.eventMoveEnd.dispatch({
            start: this.start,
            current: this.current,
            previous: this.previous,
            ...this.controlKeys,
        })
        this.pointerEvent = null
        // Tap event.
        if (event.timeStamp - this.start.t < this.tapDelay) {
            this.eventTap.dispatch({
                ...this.start,
                ...this.controlKeys,
            })
        }
    }

    private getPoint(
        event: PointerEvent | WheelEvent
    ): TgdInputPointerEventFinger {
        this.controlKeys = {
            altKey: event.altKey || event.buttons === MOUSE_BUTTON_RIGHT,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
        }
        const { left, top, width, height } = this.canvas.getBoundingClientRect()
        const x = 2 * ((event.clientX - left) / width - 0.5)
        const y = -2 * ((event.clientY - top) / height - 0.5)
        return { x, y, t: event.timeStamp, fingersCount: 1 }
    }
}
