/** biome-ignore-all lint/suspicious/noAssignInExpressions: <explanation> */
import type { TgdContext } from "@tgd/context"
import { TgdEvent } from "@tgd/event"
import {
    type ArrayNumber4,
    ensureTgdVec4,
    type TgdColor,
    type TgdInputPointerEventTap,
    TgdPainterFramebuffer,
    TgdPainterState,
    TgdVec4,
    type WebglBlendOptions,
    type WebglDepthOptions,
    type webglPresetBlend,
    type webglPresetDepth,
} from "@tgd/index"
import type { TgdTexture2D } from "@tgd/texture"
import { TgdPainterOverlay, type TgdPainterOverlayOptions } from "../../overlay"
import { TgdPainter } from "../../painter"
import type { TgdPainterSpritesAtlas } from "../../sprites"
import { PainterSprite } from "./sprite"

type Keys<T2, T1> =
    | {
          [K in keyof T1]: T1[K] extends T2 ? K : never
      }[keyof T1]
    | T2

export interface TgdPainterIconOptions extends Omit<TgdPainterOverlayOptions, "texture" | "scaleX" | "scaleY"> {
    name?: string
    texture: TgdTexture2D
    atlas?: TgdPainterSpritesAtlas
    index?: number
    blend?: Keys<WebglBlendOptions, typeof webglPresetBlend>
    depth?: Keys<WebglDepthOptions, typeof webglPresetDepth>
    color?: ArrayNumber4 | TgdVec4 | TgdColor
}

export class TgdPainterIcon extends TgdPainter {
    public readonly eventPointerTap = new TgdEvent<TgdInputPointerEventTap>()

    private readonly framebuffer: TgdPainterFramebuffer
    private readonly sprite: PainterSprite
    private readonly overlay: TgdPainterOverlay
    private readonly state: TgdPainterState
    private _color: TgdVec4
    private _index: number
    private dirty = true

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterIconOptions,
    ) {
        super()
        this.name = options.name ?? "TgdPainterIcon"
        const sprite = (this.sprite = new PainterSprite(context, options))
        const framebuffer = (this.framebuffer = new TgdPainterFramebuffer(context, {
            children: [sprite],
        }))
        const overlay = (this.overlay = new TgdPainterOverlay(context, {
            ...options,
            texture: framebuffer.textureColor0,
        }))
        overlay.eventPointerTap.addListener((evt) => this.eventPointerTap.dispatch(evt))
        overlay.eventResize.addListener(this.refreshTexture)
        this.state = new TgdPainterState(context, {
            cull: "off",
            blend: options.blend ?? "alpha",
            depth: options.depth ?? "off",
            children: [overlay],
        })
        this._color = ensureTgdVec4(options.color, new TgdVec4(1, 1, 1, 1))
        this._index = options.index ?? 0
    }

    get index(): number {
        return this._index
    }
    set index(index: number) {
        if (this._index === index) return

        this._index = index
        this.refreshTexture()
    }

    get color(): TgdVec4 {
        return this._color
    }
    set color(value: TgdVec4 | ArrayNumber4) {
        const color = ensureTgdVec4(value)
        if (this._color === color) return

        this._color = color
        this.refreshTexture()
    }

    get alignX() {
        return this.overlay.alignX
    }
    set alignX(alignX: number) {
        this.overlay.alignX = alignX
    }

    get alignY() {
        return this.overlay.alignY
    }
    set alignY(alignY: number) {
        this.overlay.alignY = alignY
    }

    get width() {
        return this.overlay.width
    }
    set width(width: number | undefined) {
        this.overlay.width = width
    }

    get height() {
        return this.overlay.height
    }
    set height(height: number | undefined) {
        this.overlay.height = height
    }

    get marginTop() {
        return this.overlay.marginTop
    }
    set marginTop(marginTop: number) {
        this.overlay.marginTop = marginTop
    }

    get marginRight() {
        return this.overlay.marginRight
    }
    set marginRight(marginRight: number) {
        this.overlay.marginRight = marginRight
    }

    get marginBottom() {
        return this.overlay.marginBottom
    }
    set marginBottom(marginBottom: number) {
        this.overlay.marginBottom = marginBottom
    }

    get marginLeft() {
        return this.overlay.marginLeft
    }
    set marginLeft(marginLeft: number) {
        this.overlay.marginLeft = marginLeft
    }

    get z() {
        return this.overlay.z
    }
    set z(z: number) {
        this.overlay.z = z
    }

    delete(): void {
        this.sprite.delete()
        this.framebuffer.delete()
        this.overlay.delete()
        this.state.delete()
    }

    paint(time: number, delta: number): void {
        if (this.dirty) {
            this.framebuffer.paint(time, delta)
            this.dirty = false
        }
        this.state.paint(time, delta)
    }

    private readonly refreshTexture = () => {
        this.dirty = true
        this.context.paint()
    }
}
