import PainterArray from "../painter/array"
import { PainterInterface } from "./../painter/painter-interface"
import Asset from "./asset"
import TextureManager from "./texture/texture-manager"
import ProgramManager from "./program/program-manager"
import Resources from "./resources"

export default class Scene {
    public readonly gl: WebGL2RenderingContext
    public readonly asset: Asset
    public readonly program: ProgramManager
    public readonly texture: TextureManager

    private readonly painters = new PainterArray()
    private isAnimated = false
    private lastCanvasWidth = 0
    private lastCanvasHeight = 0
    private lastTime = -1
    private _screenRatio = 1

    constructor(
        public readonly canvas: HTMLCanvasElement,
        options?: WebGLContextAttributes
    ) {
        const gl = canvas.getContext("webgl2", options)
        if (!gl) throw Error("Unable to create a WebGL2 context!")

        this.gl = gl
        this.asset = new Asset()
        this.program = new ProgramManager(gl)
        this.texture = new TextureManager(gl)
    }

    getResources(id: string) {
        return Resources.make(this.gl, id)
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
        if (value) this.draw()
    }

    async addPainter(...painters: PainterInterface[]): Promise<void> {
        for (const painter of painters) {
            this.painters.add(painter)
        }
    }

    draw() {
        window.requestAnimationFrame(this.paint)
    }

    private readonly paint = (time: number) => {
        const { gl, lastCanvasWidth, lastCanvasHeight, lastTime } = this
        if (lastTime < 0) {
            this.lastTime = time
            // First frame, let's skip it to get better timing.
            this.draw()
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
        this.painters.paint(time, delay, this)
        this.painters.update(time, delay, this)
        if (this.isAnimated) this.draw()
    }

    initialize(): Promise<boolean> {
        return this.painters.initialize(this)
    }

    destroy() {
        this.painters.destroy(this)
    }
}
