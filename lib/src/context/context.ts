import { TgdResource } from "@/resource/resource"
import { TgdPainterGroup } from "../painter/group"
import { TgdPainter } from "../painter/painter"
import { TgdProgram, TgdProgramOptions } from "@/program/program"
import { TgdFactoryProgram } from "@/factory/program"
import { TgdBuffer, TgdBufferOptions } from "@/buffer"
import { TgdDataset } from "@/dataset"
import { TgdVAO } from "@/vao"

export interface TgdContextOptions extends WebGLContextAttributes {
    onResize?(gl: WebGL2RenderingContext, width: number, height: number): void
}

export class TgdContext {
    public readonly gl: WebGL2RenderingContext
    public readonly programs: TgdResource<TgdProgramOptions, TgdProgram>

    private readonly observer: ResizeObserver
    private readonly painters = new TgdPainterGroup()
    private isPlaying = false
    private requestAnimationFrame = -1
    private lastTime = -1

    constructor(
        public readonly canvas: HTMLCanvasElement,
        options: TgdContextOptions = {}
    ) {
        const gl = canvas.getContext("webgl2", options)
        if (!gl) throw Error("Unable to create a WebGL2 context!")

        this.gl = gl
        this.programs = new TgdResource(new TgdFactoryProgram(gl))
        const onResize = options.onResize ?? handleResize
        this.observer = new ResizeObserver(() => {
            onResize(gl, canvas.clientWidth, canvas.clientHeight)
        })
        this.observer.observe(canvas)
    }

    get width() {
        return this.gl.drawingBufferWidth
    }

    get height() {
        return this.gl.drawingBufferHeight
    }

    /**
     * Is the animation playing?
     */
    get playing() {
        return this.isPlaying
    }
    /**
     * If `playing` is true, the method `paint()` will be called
     * for every animation frame.
     * @see paint()
     */
    set playing(value: boolean) {
        if (value === this.isPlaying) return

        if (value) this.paint()
        this.isPlaying = value
    }

    /**
     * Start the animation.
     * You can achieve the same result with `context.playing = true`.
     *
     * @see playing
     */
    play() {
        this.playing = true
    }

    /**
     * Pause the animation.
     * You can achieve the same result with `context.playing = false`.
     *
     * @see playing
     */
    pause() {
        this.playing = false
    }

    /**
     * Add one or more painters.
     */
    add(...painters: TgdPainter[]) {
        this.painters.add(...painters)
    }

    /**
     * Remove one or more painters.
     * */
    remove(...painters: TgdPainter[]) {
        this.painters.remove(...painters)
    }

    createBuffer(
        data?: BufferSource,
        options?: Partial<TgdBufferOptions>
    ): TgdBuffer {
        return new TgdBuffer(this.gl, data, options)
    }

    createVAO(
        program?: TgdProgram,
        datasets?: TgdDataset<any>[],
        elements?: Uint8Array | Uint16Array | Uint32Array
    ): TgdVAO {
        return new TgdVAO(this.gl, program, datasets, elements)
    }

    /**
     * Trigger the painters to render the scene.
     */
    readonly paint = () => {
        window.cancelAnimationFrame(this.requestAnimationFrame)
        this.requestAnimationFrame = window.requestAnimationFrame(
            this.actualPaint
        )
    }

    private readonly actualPaint = (time: number) => {
        const { lastTime } = this
        if (lastTime < 0) {
            this.lastTime = time
            // First frame, let's skip it to get better timing.
            this.paint()
            return
        }

        const delay = time - this.lastTime
        this.lastTime = time
        this.painters.paint(time, delay)
        this.painters.update(time, delay)
        if (this.isPlaying) this.paint()
    }

    destroy() {
        window.cancelAnimationFrame(this.requestAnimationFrame)
        this.playing = false
        this.painters.delete()
        this.observer.unobserve(this.canvas)
    }
}

function handleResize(
    gl: WebGL2RenderingContext,
    width: number,
    height: number
) {
    const canvas = gl.canvas as HTMLCanvasElement
    canvas.width = width
    canvas.height = height
    gl.viewport(0, 0, width, height)
}
