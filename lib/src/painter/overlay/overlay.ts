import type { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdEvent } from "@tgd/event"
import type { TgdInputPointerEventMove, TgdInputPointerEventTap } from "@tgd/index"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import type { TgdTexture2D } from "@tgd/texture"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainter } from "../painter"

export interface TgdPainterOverlayOptions {
    /**
     * * -1: left
     * *  0: center
     * * +1: right
     */
    alignX: number
    /**
     * * -1: bottom
     * *  0: center
     * * +1: top
     */
    alignY: number
    /**
     * Width in pixels
     */
    width: number
    /**
     * Height in pixels
     */
    height: number
    /**
     * Margin in pixels.
     */
    margin: number | [vertical: number, horizontal: number] | [top: number, right: number, bottom: number, left: number]
    /**
     * Texture to display in the overlay
     */
    texture: TgdTexture2D
    scaleX: number
    scaleY: number
    /**
     * Z position.
     */
    z: number
}

export class TgdPainterOverlay extends TgdPainter {
    public readonly eventResize = new TgdEvent<{ width: number; height: number }>()
    public readonly eventPointerTap = new TgdEvent<TgdInputPointerEventTap>()
    public readonly eventPointerHover = new TgdEvent<TgdInputPointerEventMove>()
    public alignX: number
    public alignY: number
    public scaleX: number
    public scaleY: number
    public width?: number
    public height?: number
    public marginTop: number
    public marginRight: number
    public marginBottom: number
    public marginLeft: number
    public z: number
    public texture: TgdTexture2D | undefined

    private lastWidth = 0
    private lastHeight = 0
    private prg: TgdProgram
    private vao: TgdVertexArray

    constructor(
        public readonly context: TgdContext,
        {
            alignX = +1,
            alignY = +1,
            scaleX = 1,
            scaleY = 1,
            width,
            height,
            margin = 0,
            z = 0,
            texture,
        }: Partial<TgdPainterOverlayOptions> = {},
    ) {
        super()
        this.name = `Overlay/${this.name}`
        this.alignX = alignX
        this.alignY = alignY
        this.scaleX = scaleX
        this.scaleY = scaleY
        this.width = width
        this.height = height
        if (typeof margin === "number") {
            this.marginTop = margin
            this.marginRight = margin
            this.marginBottom = margin
            this.marginLeft = margin
        } else if (margin.length === 2) {
            const [vertical, horizontal] = margin
            this.marginTop = vertical
            this.marginRight = horizontal
            this.marginBottom = vertical
            this.marginLeft = horizontal
        } else {
            const [top, right, bottom, left] = margin
            this.marginTop = top
            this.marginRight = right
            this.marginBottom = bottom
            this.marginLeft = left
        }
        this.z = z
        this.texture = texture
        const dataset = new TgdDataset({
            attPos: "vec2",
            attUV: "vec2",
        })
        dataset.set("attPos", new Float32Array([+1, -1, +1, +1, -1, -1, -1, +1]))
        dataset.set("attUV", new Float32Array([1, 1, 1, 0, 0, 1, 0, 0]))
        const prg = new TgdProgram(context.gl, {
            vert: new TgdShaderVertex({
                uniforms: {
                    uniCenter: "vec2",
                    uniScale: "vec2",
                    uniScaleUV: "vec2",
                    uniZ: "float",
                },
                varying: {
                    varUV: "vec2",
                },
                attributes: {
                    attPos: "vec2",
                    attUV: "vec2",
                },
                mainCode: [
                    "varUV = (attUV - vec2(.5)) * uniScaleUV + vec2(.5);",
                    "gl_Position = vec4(attPos * uniScale + uniCenter, uniZ, 1);",
                ],
            }).code,
            frag: new TgdShaderFragment({
                uniforms: {
                    uniTexture: "sampler2D",
                },
                varying: {
                    varUV: "vec2",
                },
                mainCode: ["FragColor = texture(uniTexture, varUV);"],
            }).code,
        })
        const vao = new TgdVertexArray(context.gl, prg, [dataset])
        this.prg = prg
        this.vao = vao
        const { pointer } = context.inputs
        pointer.eventTap.addListener(this.handleTap)
        pointer.eventHover.addListener(this.handleHover)
    }

    private handleTap = (evtScreen: TgdInputPointerEventTap) => {
        const x = this.xScreenToLayout(evtScreen.x)
        const y = this.yScreenToLayout(evtScreen.y)
        if (Math.abs(x) > 1 || Math.abs(y) > 1) return

        const evtOverlay = structuredClone(evtScreen)
        evtOverlay.x = x
        evtOverlay.y = y
        this.eventPointerTap.dispatch(evtOverlay)
    }

    private handleHover = (evtScreen: TgdInputPointerEventMove) => {
        const x = this.xScreenToLayout(evtScreen.current.x)
        const y = this.yScreenToLayout(evtScreen.current.y)
        if (Math.abs(x) > 1 || Math.abs(y) > 1) return

        const evtOverlay = structuredClone(evtScreen)
        evtOverlay.current.x = x
        evtOverlay.current.y = y
        this.eventPointerHover.dispatch(evtOverlay)
    }

    delete(): void {
        const { context } = this
        if (context) {
            this.eventPointerTap.removeListener(this.handleTap)
        }
        this.prg.delete()
        this.vao.delete()
    }

    paint(time: number, delta: number): void {
        this.checkForResizeEvent()
        const { context, prg, vao, z, scaleX, scaleY, xLayoutToScreen, yLayoutToScreen, texture } = this
        const { gl } = context
        prg.use()
        prg.uniform1f("uniZ", z)
        const x0 = xLayoutToScreen(0)
        const y0 = yLayoutToScreen(0)
        prg.uniform2f("uniCenter", x0, y0)
        const x1 = xLayoutToScreen(1)
        const y1 = yLayoutToScreen(1)
        prg.uniform2f("uniScale", x1 - x0, y1 - y0)
        prg.uniform2f("uniScaleUV", scaleX, scaleY)
        if (!texture) {
            throw new Error("[TgdPainterOverlay] texture has not been set!")
        }
        texture.activate(0, prg, "uniTexture")
        vao.bind()
        const cull = context.webglParams.cullFace
        context.webglParams.cullFace = false
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        context.webglParams.cullFace = cull
        vao.unbind()
    }

    private checkForResizeEvent() {
        const { context, lastWidth, lastHeight, marginLeft, marginRight, marginTop, marginBottom } = this
        const width = Math.max(0, this.width ?? context.width - marginLeft - marginRight)
        const height = Math.max(0, this.height ?? context.height - marginTop - marginBottom)
        if (width !== lastWidth || height !== lastHeight) {
            this.lastWidth = width
            this.lastHeight = height
            this.eventResize.dispatch({ width, height })
        }
    }

    private xScreenToLayout = (xScreen: number) => {
        const { context, alignX, marginLeft, marginRight } = this
        const marginPx = marginLeft + marginRight
        const widthPx = this.width ?? context.width - marginPx
        const frameWidthPx = context.width - widthPx - marginPx
        const screenPerPixel = 2 / context.width
        const center = marginLeft + (widthPx + (1 + alignX) * frameWidthPx - context.width) / 2
        const factor = context.width / widthPx
        return (xScreen - center * screenPerPixel) * factor
    }
    private readonly xLayoutToScreen = (xLayout: number) => {
        const { context, alignX, marginLeft, marginRight } = this
        const marginPx = marginLeft + marginRight
        const widthPx = this.width ?? context.width - marginPx
        const frameWidthPx = context.width - widthPx - marginPx
        const screenPerPixel = 2 / context.width
        const center = marginLeft + (widthPx + (1 + alignX) * frameWidthPx - context.width) / 2
        const factor = widthPx / context.width
        return xLayout * factor + center * screenPerPixel
    }
    private yScreenToLayout = (yScreen: number) => {
        const { context, alignY, marginTop, marginBottom } = this
        const marginPx = marginTop + marginBottom
        const heightPx = this.height ?? context.height - marginPx
        const frameHeightPx = context.height - heightPx - marginPx
        const screenPerPixel = 2 / context.height
        const center = marginBottom + (heightPx + (1 + alignY) * frameHeightPx - context.height) / 2
        const factor = context.height / heightPx
        return (yScreen - center * screenPerPixel) * factor
    }
    private readonly yLayoutToScreen = (yLayout: number) => {
        const { context, alignY, marginTop, marginBottom } = this
        const marginPx = marginTop + marginBottom
        const heightPx = this.height ?? context.height - marginPx
        const frameHeightPx = context.height - heightPx - marginPx
        const screenPerPixel = 2 / context.height
        const center = marginBottom + (heightPx + (1 + alignY) * frameHeightPx - context.height) / 2
        const factor = heightPx / context.height
        return yLayout * factor + center * screenPerPixel
    }
}
