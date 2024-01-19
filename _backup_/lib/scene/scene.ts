import { TgdPainter } from "../../src/painter/painter"
import { TgdPainterGroup } from "../painter"
import Asset from "./asset"
import TextureHelper from "./helpers/texture-helper"
import TgdInputs from "./inputs/inputs"
import Resources from "./resources"

export class TgdScene {
    public readonly inputs: TgdInputs
    public readonly gl: WebGL2RenderingContext
    public readonly asset: Asset
    public readonly texture: TextureHelper
    private readonly painters = new TgdPainterGroup()
    private isAnimated = false
    private lastCanvasWidth = 0
    private lastCanvasHeight = 0
    private lastTime = -1
    private _screenRatio = 1
    private requestAnimationFrame = 0

    constructor(
        public readonly canvas: HTMLCanvasElement,
        options?: WebGLContextAttributes
    ) {
        const gl = canvas.getContext("webgl2", options)
        if (!gl) throw Error("Unable to create a WebGL2 context!")

        this.inputs = new TgdInputs(canvas)
        this.gl = gl
        this.asset = new Asset()
        this.texture = new TextureHelper(gl)
        // Repaint if the size has changed.
        const observer = new ResizeObserver(this.paint)
        observer.observe(canvas)
    }

    readonly requestFullscreen = (options?: FullscreenOptions) => {
        return this.canvas.requestFullscreen({
            navigationUI: "hide",
            ...options,
        })
    }

    readonly toggleFullscreen = (options?: FullscreenOptions) => {
        if (document.fullscreenElement) {
            return document.exitFullscreen()
        }
        return this.requestFullscreen(options)
    }

    getResources(id: string) {
        return Resources.make(this.gl, id)
    }

    getUniformLocation(
        program: WebGLProgram,
        name: string
    ): WebGLUniformLocation {
        const uni = this.gl.getUniformLocation(program, name)
        if (!uni) throw Error(`Unable to get uniform location of "${name}"!`)

        return uni
    }

    get screenRatio() {
        return this._screenRatio
    }
    private set screenRatio(value: number) {
        this._screenRatio = value
    }

    get width() {
        return this.lastCanvasWidth
    }
    get height() {
        return this.lastCanvasHeight
    }

    get animate() {
        return this.isAnimated
    }
    set animate(value: boolean) {
        if (this.isAnimated === value) return
        this.isAnimated = value
        if (value) this.paint()
    }

    async addPainter(...painters: TgdPainter[]): Promise<void> {
        for (const painter of painters) {
            this.painters.add(painter)
        }
    }

    readonly paint = () => {
        window.cancelAnimationFrame(this.requestAnimationFrame)
        this.requestAnimationFrame = window.requestAnimationFrame(
            this.actualPaint
        )
    }

    private readonly actualPaint = (time: number) => {
        const { gl, lastCanvasWidth, lastCanvasHeight, lastTime } = this
        if (lastTime < 0) {
            this.lastTime = time
            // First frame, let's skip it to get better timing.
            this.paint()
            return
        }

        const canvas = gl.canvas as HTMLCanvasElement
        const dpr = window.devicePixelRatio
        const expectedWidth = Math.max(1, Math.round(canvas.clientWidth * dpr))
        const expectedheight = Math.max(
            1,
            Math.round(canvas.clientHeight * dpr)
        )
        if (
            lastCanvasWidth !== expectedWidth ||
            lastCanvasHeight !== expectedheight
        ) {
            canvas.width = expectedWidth
            canvas.height = expectedheight
            this.lastCanvasWidth = expectedWidth
            this.lastCanvasHeight = expectedheight
            gl.viewport(0, 0, expectedWidth, expectedheight)
            this.screenRatio = expectedWidth / expectedheight
        }

        const delay = time - this.lastTime
        this.lastTime = time
        this.painters.paint(time, delay)
        this.painters.update(time, delay)
        if (this.isAnimated) this.paint()
    }

    destroy() {
        this.painters.destroy()
    }
}
