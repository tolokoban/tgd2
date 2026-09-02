import { TgdContext } from "@tgd/context"
import { TgdPainterGroup } from "../group"

export type TgdPainterObjectPickerEventListener = (index: number, x: number, y: number) => void

export interface TgdPainterObjectPickerOptions {
    resolution: number
}

/**
 * This Group will display painters in a lower resolution on an offscreen canvas.
 * 
 * Make sure that the painters you add are using the `contextOffscreen` context.
 * 
 * @example
 * ```ts
 * const picker = new TgdPainterObjectPicker(context)
 * const mesh = new TgdPainterMesh(picker.contextOffscreen)
 * picker.add(mesh)
 * ```
 */
export class TgdPainterObjectPicker extends TgdPainterGroup {
    public readonly contextOffscreen: TgdContext

    private readonly canvasOffscreen: OffscreenCanvas
    private _resolution = 1
    private _onTap: TgdPainterObjectPickerEventListener | null = null

    constructor(
        protected readonly contextOnscreen: TgdContext,
        { resolution = 0.25 }: Partial<TgdPainterObjectPickerOptions> = {},
    ) {
        super()
        this.canvasOffscreen = new OffscreenCanvas(16, 16)
        this.contextOffscreen = new TgdContext(this.canvasOffscreen, {
            preserveDrawingBuffer: true,
            antialias: false,
            alpha: false,
        })
        this._resolution = resolution
        contextOnscreen.eventResize.addListener(this.handleResize)
    }

    get resolution(): number {
        return this._resolution
    }
    set resolution(resolution: number) {
        if (this._resolution === resolution) return

        this._resolution = resolution
        this.handleResize()
    }

    get onTap(): TgdPainterObjectPickerEventListener | null {
        return this._onTap
    }
    set onTap(onTap: TgdPainterObjectPickerEventListener | null) {
        if (this._onTap === onTap) return

        const { pointer } = this.contextOnscreen.inputs
        pointer.eventTap.removeListener(this.handleTap)
        this._onTap = onTap
        if (onTap) pointer.eventTap.addListener(this.handleTap)
    }

    indexAt(x: number, y: number): number {
        const [R, G, B] = this.contextOffscreen.readPixel(x, y)
        console.log('🐞 [object-picker@68] R, G, B =', R, G, B) // @FIXME: Remove this line written on 2026-09-02 at 16:51
        const value = R + (G << 8) + (B << 16)
        return value
    }

    private readonly handleTap = (event: { x: number; y: number }) => {
        this.contextOffscreen.execAfterNextPaint(() => {
            const { onTap } = this
            if (!onTap) return

            const { x, y } = event
            onTap(this.indexAt(x, y), x, y)
        })
        this.contextOffscreen.paint()
    }

    private readonly handleResize = () => {
        const { width, height } = this.contextOnscreen.canvas
        const resolution = this.contextOffscreen.resolution * this.resolution
        this.canvasOffscreen.width = width * resolution
        this.canvasOffscreen.height = height * resolution
    }

    delete(): void {
        this.contextOnscreen.eventResize.removeListener(this.handleResize)
        super.delete()
    }

    paint(time: number, delta: number): void {
        this.contextOffscreen.camera = this.contextOnscreen.camera
        super.paint(time, delta)
    }
}
