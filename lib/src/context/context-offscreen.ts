import { TgdContext } from "./context"

export interface TgdContextOffscreenOptions {
    /**
     * To get the size of the offscreen context,
     * we multiply the size of the parent context by `resolution`.
     * 
     * Defaults to `0.25`.
     */
    resolution: number
    /**
     * Defaults to `true`.
     */
    preserveDrawingBuffer: boolean
    /**
     * Defaults to `true`.
     */
    antialias: false
    /**
     * Defaults to `true`.
     */
    alpha: false
}

/**
 * Create an offscreen context, keeping its size synchronized with the parent context.
 * 
 * This is useful when used for postprocessing effects or object picking.
 */
export class TgdContextOffscreen extends TgdContext {
    constructor(public readonly contextParent: TgdContext, { resolution = .25, preserveDrawingBuffer = true,
        antialias = false,
        alpha = false,
    }: Partial<TgdContextOffscreenOptions> = {}) {
        const canvas = new OffscreenCanvas(
            Math.ceil(resolution * contextParent.width),
            Math.ceil(resolution * contextParent.height),
        )
        super(canvas, {
            ...contextParent.options,
            resolution,
            preserveDrawingBuffer,
            antialias,
            alpha,
        })
        this.camera = contextParent.camera.clone()
        this.resolution = resolution
        this.eventPaintEnter.addListener(this.handlePaintEnter)
        console.log('🐞 [context-offscreen@50] canvas =', canvas) // @FIXME: Remove this line written on 2026-09-03 at 12:04
    }

    delete({
        preserveContextLostEvents = false,
    }: {
        preserveContextLostEvents?: boolean
    } = {}) {
        this.eventPaintEnter.removeListener(this.handlePaintEnter)
        super.delete({ preserveContextLostEvents })
    }

    protected readonly handlePaintEnter = () => {
        const { canvas, contextParent, resolution } = this
        canvas.width = Math.ceil(resolution * contextParent.width)
        canvas.height = Math.ceil(resolution * contextParent.height)
        this.camera.transfo.fromMatrix(this.contextParent.camera.transfo.matrix)
        console.log(canvas.width, "×", canvas.height)
    }
}