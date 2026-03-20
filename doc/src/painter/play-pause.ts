import {
    tgdCanvasCreatePalette,
    TgdContext,
    TgdPainterIcon,
    TgdPainterIconOptions,
    TgdTexture2D,
    tgdLoadCanvasFromSvg,
} from "@tolokoban/tgd"

export interface PainterPlayPauseOptions extends Omit<TgdPainterIconOptions, "width" | "height" | "texture" | "atlas"> {
    size: number
}

export class PainterPlayPause extends TgdPainterIcon {
    private readonly textureIcons: TgdTexture2D

    constructor(
        public readonly context: TgdContext,
        options: Partial<PainterPlayPauseOptions> = {},
    ) {
        const texture = new TgdTexture2D(context, {
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
            },
        })
        texture.loadBitmap(tgdCanvasCreatePalette(["#f00", "#0f0"]))
        tgdLoadCanvasFromSvg(SVG).then((bmp) => {
            texture.loadBitmap(bmp)
            this.refresh()
        })
        const size = options.size ?? 64
        super(context, {
            alignX: 0,
            alignY: 0,
            margin: 0,
            ...options,
            texture,
            atlas: [
                { x: 0, y: 0, width: 0.5, height: 1 },
                { x: 0.5, y: 0, width: 0.5, height: 1 },
            ],
            width: size,
            height: size,
        })
        this.textureIcons = texture
        this.handlePlayingChange()
        this.eventPointerTap.addListener(this.handleTap)
        context.eventPlayingChange.addListener(this.handlePlayingChange)
    }

    delete() {
        this.textureIcons.delete()
        this.eventPointerTap.removeListener(this.handleTap)
        this.context.eventPlayingChange.removeListener(this.handlePlayingChange)
        super.delete()
    }

    private readonly handleTap = () => {
        const { context } = this
        if (context.playing) {
            context.pause()
        } else {
            context.play()
        }
    }

    private readonly handlePlayingChange = () => {
        this.index = this.context.playing ? 1 : 0
    }
}

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" width="512" height="256">
 <g fill="#FFF">
  <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />
  <path transform="translate(24,0)" d="M13,16V8H15V16H13M9,16V8H11V16H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
 </g>
</svg>`
