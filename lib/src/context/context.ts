import { TgdCamera, TgdCameraPerspective } from "@tgd/camera"
import { TgdInputs } from "@tgd/input"
import { TgdPainterGroup } from "../painter/group"
import { tgdCanvasCreate, webglLookup } from "../utils"
import { TgdManagerAnimation } from "./animation/animation-manager"
import { TgdAnimation } from "../types/animation"
import { TgdEvent } from "../event"

/**
 * You can pass all the attributes of the [WebGL2ContextAttributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext)
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
    /**
     * Size of a pixel. If under 1, you will start to have  pixelated render.
     * Defaut to 1.
     */
    resolution?: number
}

/**
 * This class gives you a [WebGL2RenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext) for a given canvas,
 * through its public readonly attribute `gl`.
 *
 * It also takes care of the canvas resizing and the animation frames.
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
export class TgdContext extends TgdPainterGroup {
    private static incrementalId = 1

    public readonly name: string
    public readonly gl: WebGL2RenderingContext
    public readonly inputs: TgdInputs
    public readonly implementationColorReadFormat: number
    public readonly implementationColorReadType: number
    public readonly eventPaint = new TgdEvent<TgdContext>()
    public resolution = 1

    /**
     * If this function is set, it will be called once at the end of the next repaint.
     * This is useful for snapshots.
     */
    private doSnapshot: null | (() => void) = null
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
    private paintingIsOngoing = false
    // We need to start another paiting after the current one is finished
    private paintingIsQueued = false
    private isPlaying = false
    private requestAnimationFrame = -1
    // Last time the context has been painted.
    private lastTimeInSec = -1
    // Difference between `Data.now()` and the time in `requestAnimationFrame()`.
    private timeShift = 0
    // Last time `pause()` was called.
    private pauseTime = 0
    // Number of seconds while we have been in pause.
    private pauseAccumulation = 0
    private readonly animationManager = new TgdManagerAnimation()

    /**
     * @param canvas The canvas to which attach a WebGL2 context.
     * @see {@link TgdContextOptions}
     */
    constructor(
        public readonly canvas: HTMLCanvasElement,
        private readonly options: TgdContextOptions = {}
    ) {
        super()
        const gl = canvas.getContext("webgl2", options)
        if (!gl) throw new Error("Unable to create a WebGL2 context!")

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
        this.resolution = options.resolution ?? 1
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
            const width = canvas.clientWidth * this.resolution
            const height = canvas.clientHeight * this.resolution
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
        this.name = options.name ?? `Context#${TgdContext.incrementalId++}`
        // Prevent system gestures.
        canvas.style.touchAction = "none"
        this.stateReset()
    }

    get fps() {
        return this._fps
    }

    get time() {
        return this.lastTimeInSec
    }

    get camera() {
        return this._camera
    }

    set camera(camera: TgdCamera) {
        if (camera === this._camera) return

        this._camera = camera
        this.paint()
    }

    /**
     * Check if the last WebGL command has returned an error.
     * If an error has been found, output `caption` to the console
     * and execute `action()`.
     * Do not use this function in a loop because it is slow.
     * @returns `true` is an error has been detected.
     */
    checkError(caption: string, action?: () => void) {
        const { gl } = this
        const error = gl.getError()
        if (error !== gl.NO_ERROR) {
            console.error(`WebGL Error in ${caption}:`, webglLookup(error))
            action?.()
            return true
        }
        return false
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
        if (this.pauseTime > 0) {
            this.pauseAccumulation += this.time - this.pauseTime
        }
    }

    /**
     * Pause the animation.
     * You can achieve the same result with `context.playing = false`.
     *
     * @see playing
     */
    pause() {
        this.playing = false
        this.pauseTime = this.time
    }

    takeSnapshot(): Promise<HTMLImageElement> {
        const { canvas } = this
        return new Promise(resolve => {
            this.doSnapshot = () => {
                canvas.toBlob(blob => {
                    const img = new Image()
                    if (!blob) {
                        resolve(img)
                        return
                    }
                    const url = URL.createObjectURL(blob)
                    img.src = url
                    // eslint-disable-next-line unicorn/prefer-add-event-listener
                    img.onload = () => resolve(img)
                })
            }
        })
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

    private now() {
        return Date.now() * 1e-3
    }

    private readonly actualPaint = (time: number) => {
        let timeInSec = time * 1e-3
        if (this.lastTimeInSec < 0) {
            this.lastTimeInSec = timeInSec
            this.paintingIsOngoing = false
            this.paintingIsQueued = false
            // First frame, let's skip it to get better timing.
            this.paint()
            return
        }
        try {
            this.timeShift = timeInSec - this.now()
            if (this.playing) {
                // the pause is like a frozen time.
                timeInSec -= this.pauseAccumulation
            }
            const { gl } = this
            const delayInSec = timeInSec - this.lastTimeInSec
            this._fps = Math.round(1 / delayInSec)
            this.lastTimeInSec = timeInSec
            this._camera.screenWidth = gl.drawingBufferWidth
            this._camera.screenHeight = gl.drawingBufferHeight
            this._aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight
            this._aspectRatioInverse = 1 / this._aspectRatio

            super.paint(timeInSec, delayInSec)
            if (
                this.paintingIsQueued ||
                this.animationManager.paint(timeInSec) ||
                this.isPlaying
            ) {
                this.paintingIsOngoing = false
                this.paint()
            }
            this.eventPaint.dispatch(this)
        } catch (error) {
            console.error(error)
        } finally {
            this.paintingIsOngoing = false
            this.doSnapshot?.()
        }
    }

    delete() {
        this.pause()
        this.observer.unobserve(this.canvas)
        super.delete()
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
