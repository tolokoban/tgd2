import { TgdCamera, TgdCameraPerspective } from "@tgd/camera"
import { TgdInputs } from "@tgd/input"
import { TgdPainterFunction as TgdPainterFunctionType } from "@tgd/types/painter"
import { TgdPainterGroup } from "../painter/group"
import { TgdPainter } from "../painter/painter"
import { tgdCanvasCreate } from "../utils"
import { TgdManagerAnimation } from "./animation/animation-manager"
import { TgdAnimation } from "../types/animation"
import { TgdEvent } from "../event"

/**
 * You can pass all the attributes of the [WebGLContextAttributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGLContextAttributes)
 * object.
 * @see {@link TgdContext}
 */
export type TgdContextOptions = WebGLContextAttributes & {
    /**
     * You can override the behaviour for when a resize event occurs,
     * by providing a callback `onResize(...)`.
     *
     * By default, this is what will happen:
     * ```
     * gl.canvas.width = width
     * gl.canvas.height = height
     * gl.viewport(0, 0, width, height)
     * ```
     */
    onResize?(
        this: void,
        context: TgdContext,
        width: number,
        height: number
    ): void
    name?: string
    camera?: TgdCamera
    enableTextureFloatStorage?: boolean
}

/**
 * This class gives you a [WebGL2RenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext) for a given canvas,
 * through its public readonly attribute `gl`.
 *
 * It also acts as a resource manager for most of the WebGL2 reources you need.
 *
 * @example
 * ```
 * import { TgdContext, TgdPainterClear } from "@tgd"
 *
 * export function paint(canvas: HTMLCanvasElement) {
 *     const ctx = new TgdContext(canvas)
 *     const clear = new TgdPainterClear(ctx, { color: [1, 0.667, 0, 1] })
 *     ctx.add(clear)
 *     ctx.paint()
 * }
 * ```
 */
export class TgdContext {
    private static incrementalId = 1

    public readonly name: string
    public readonly gl: WebGL2RenderingContext
    public readonly inputs: TgdInputs
    public readonly implementationColorReadFormat: number
    public readonly implementationColorReadType: number
    public readonly eventPaint = new TgdEvent<TgdContext>()

    private _camera: TgdCamera = new TgdCameraPerspective({
        transfo: { distance: 15 },
        far: 100,
        near: 0.1,
        fovy: Math.PI / 8,
        zoom: 1,
    })
    private _fps = 0
    private _aspectRatio = 1
    private _aspectRatioInverse = 1
    private readonly observer: ResizeObserver
    private readonly painters: TgdPainterGroup
    private paintingIsOngoing = false
    // We need to start another paiting after the current one is finished
    private paintingIsQueued = false
    private isPlaying = false
    private requestAnimationFrame = -1
    // Last time the context has been painted.
    private lastTime = -1
    // Difference between `Data.now()` and the time in `requestAnimationFrame()`.
    private timeShift = 0
    private readonly animationManager = new TgdManagerAnimation()

    /**
     * @param canvas The canvas to which attach a WebGL2 context.
     * @see {@link TgdContextOptions}
     */
    constructor(
        public readonly canvas: HTMLCanvasElement,
        private readonly options: TgdContextOptions = {}
    ) {
        const gl = canvas.getContext("webgl2", options)
        if (!gl) throw new Error("Unable to create a WebGL2 context!")

        if (options.enableTextureFloatStorage) {
            gl.getExtension("EXT_color_buffer_float")
        }
        this.implementationColorReadFormat = gl.getParameter(
            gl.IMPLEMENTATION_COLOR_READ_FORMAT
        ) as number
        this.implementationColorReadType = gl.getParameter(
            gl.IMPLEMENTATION_COLOR_READ_TYPE
        ) as number
        this.gl = gl
        this.observer = new ResizeObserver(() => {
            const width = canvas.clientWidth
            const height = canvas.clientHeight
            const { onResize } = options
            if (onResize) {
                onResize(this, canvas.clientWidth, canvas.clientHeight)
            } else {
                canvas.width = width
                canvas.height = height
            }
            gl.viewport(0, 0, canvas.width, canvas.height)
            this.paint()
        })
        this.observer.observe(canvas)
        this.inputs = new TgdInputs(canvas)
        if (options.camera) this._camera = options.camera
        this.painters = new TgdPainterGroup()
        this.name = options.name ?? `Context#${TgdContext.incrementalId++}`
        this.painters.name = this.name
        // Prevent system gestures.
        canvas.style.touchAction = "none"
        this.stateReset()
    }

    get fps() {
        return this._fps
    }

    get time() {
        return Date.now() + this.timeShift
    }

    debugHierarchy() {
        return this.painters.debugHierarchy()
    }

    get camera() {
        return this._camera
    }

    set camera(camera: TgdCamera) {
        if (camera === this._camera) return

        this._camera = camera
        this.paint()
    }

    animSchedule(...animations: TgdAnimation[]): TgdAnimation[] {
        const result: TgdAnimation[] = []
        let delay = 0
        for (const animation of animations) {
            const duration = animation.duration + (animation.delay ?? 0)
            animation.delay = delay + (animation.delay ?? 0)
            delay += duration
            result.push(this.animationManager.schedule(animation))
        }
        this.paint()
        return result
    }

    animCancel(animation: TgdAnimation) {
        this.animationManager.cancel(animation)
    }

    get onEnter(): TgdPainterFunctionType | undefined {
        return this.painters.onEnter
    }
    set onEnter(v: TgdPainterFunctionType | undefined) {
        this.painters.onEnter = v
    }

    get onExit(): TgdPainterFunctionType | undefined {
        return this.painters.onExit
    }
    set onExit(v: TgdPainterFunctionType | undefined) {
        this.painters.onExit = v
    }

    get width() {
        return this.gl.drawingBufferWidth
    }

    get height() {
        return this.gl.drawingBufferHeight
    }

    get aspectRatio() {
        return this._aspectRatio
    }

    get aspectRatioInverse() {
        return this._aspectRatioInverse
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
        else {
            this.paintingIsOngoing = false
            this.paintingIsQueued = false
            globalThis.cancelAnimationFrame(this.requestAnimationFrame)
        }
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
     * Check if `painter` already exist in the current list of painters.
     */
    has(painter: TgdPainter): boolean {
        return this.painters.has(painter)
    }

    /**
     * Add one or more painters.
     */
    add(...painters: TgdPainter[]) {
        this.painters.add(...painters)
    }

    /**
     * Add one or more painters at the beginning of the list.
     */
    addFirst(...painters: TgdPainter[]) {
        this.painters.addFirst(...painters)
    }

    /**
     * Remove one or more painters.
     * */
    remove(...painters: TgdPainter[]) {
        this.painters.remove(...painters)
    }

    removeAll() {
        this.painters.removeAll()
    }

    takeSnapshot(target: HTMLCanvasElement) {
        const context_ = target.getContext("2d")
        if (!context_)
            throw new Error(
                "[TgdContext.takeSnapshot] We cannot get a 2D context for the target canvas! Maybe it already has another type of context."
            )

        const { width, height } = target
        const canvas = tgdCanvasCreate(width, height)
        const context = new TgdContext(canvas, this.options)
        this.painters.forEachChild(painter => context.add(painter))
        context.actualPaint(this.lastTime)
        context.gl.finish()
        context_.drawImage(canvas, 0, 0)
    }

    lookupWebglConstant(value: number): string {
        const { gl } = this
        for (const key in gl) {
            if (gl[key as keyof WebGL2RenderingContext] === value) return key
        }
        return `Unknown gl[${value}]`
    }

    /**
     * Trigger the painters to render the scene.
     */
    readonly paint = () => {
        if (this.paintingIsOngoing) {
            this.paintingIsQueued = true
        } else {
            this.paintingIsQueued = false
            this.paintingIsOngoing = true
            globalThis.cancelAnimationFrame(this.requestAnimationFrame)
            this.requestAnimationFrame = globalThis.requestAnimationFrame(
                this.actualPaint
            )
        }
    }

    private readonly actualPaint = (time: number) => {
        try {
            this.timeShift = time - Date.now()
            const { lastTime, gl } = this
            if (lastTime < 0) {
                this.lastTime = time
                // First frame, let's skip it to get better timing.
                this.paint()
                return
            }

            const delay = time - this.lastTime
            this._fps = Math.round(1 / delay)
            this.lastTime = time
            this._camera.screenWidth = gl.drawingBufferWidth
            this._camera.screenHeight = gl.drawingBufferHeight
            this._aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight
            this._aspectRatioInverse = 1 / this._aspectRatio

            const timeInSec = time * 1e-3
            const delayInSec = delay * 1e-3
            this.painters.paint(timeInSec, delayInSec)
            this.eventPaint.dispatch(this)
            if (
                this.paintingIsQueued ||
                this.animationManager.paint(timeInSec) ||
                this.isPlaying
            ) {
                this.paintingIsOngoing = false
                this.paint()
            }
        } catch (error) {
            console.error(error)
        } finally {
            this.paintingIsOngoing = false
        }
    }

    destroy() {
        this.pause()
        this.painters.delete()
        this.observer.unobserve(this.canvas)
    }

    stateReset() {
        const { gl } = this
        const numberAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS) as number
        const temporary = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, temporary)
        for (let ii = 0; ii < numberAttribs; ++ii) {
            gl.disableVertexAttribArray(ii)
            gl.vertexAttribPointer(ii, 4, gl.FLOAT, false, 0, 0)
            gl.vertexAttrib1f(ii, 0)
        }
        gl.deleteBuffer(temporary)

        const numberTextureUnits: number = gl.getParameter(
            gl.MAX_TEXTURE_IMAGE_UNITS
        ) as number
        for (let ii = 0; ii < numberTextureUnits; ++ii) {
            gl.activeTexture(gl.TEXTURE0 + ii)
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, null)
            gl.bindTexture(gl.TEXTURE_2D, null)
        }

        gl.activeTexture(gl.TEXTURE0)
        gl.useProgram(null)
        gl.bindBuffer(gl.ARRAY_BUFFER, null)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        gl.bindRenderbuffer(gl.RENDERBUFFER, null)
        gl.disable(gl.BLEND)
        gl.disable(gl.CULL_FACE)
        gl.disable(gl.DEPTH_TEST)
        gl.disable(gl.DITHER)
        gl.disable(gl.SCISSOR_TEST)
        gl.blendColor(0, 0, 0, 0)
        gl.blendEquation(gl.FUNC_ADD)
        gl.blendFunc(gl.ONE, gl.ZERO)
        gl.clearColor(0, 0, 0, 0)
        gl.clearDepth(1)
        gl.clearStencil(-1)
        gl.colorMask(true, true, true, true)
        gl.cullFace(gl.BACK)
        gl.depthFunc(gl.LESS)
        gl.depthMask(true)
        gl.depthRange(0, 1)
        gl.frontFace(gl.CCW)
        gl.hint(gl.GENERATE_MIPMAP_HINT, gl.DONT_CARE)
        gl.lineWidth(1)
        gl.pixelStorei(gl.PACK_ALIGNMENT, 4)
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4)
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false)
        gl.polygonOffset(0, 0)
        gl.sampleCoverage(1, false)
        gl.scissor(0, 0, gl.canvas.width, gl.canvas.height)
        gl.stencilFunc(gl.ALWAYS, 0, 0xffffffff)
        gl.stencilMask(0xffffffff)
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP)
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
        gl.clear(
            gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT
        )

        return gl
    }
}
