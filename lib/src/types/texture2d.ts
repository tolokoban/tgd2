import { TgdProgram } from "./program"
import { WebglMagFilter, WebglMinFilter, WebglWrap } from "./webgl"

export interface TdgTexture2DOptions {
    wrapS: WebglWrap
    wrapT: WebglWrap
    wrapR: WebglWrap
    minFilter: WebglMinFilter
    magFilter: WebglMagFilter
    image?:
        | string
        | ImageData
        | HTMLImageElement
        | HTMLCanvasElement
        | HTMLVideoElement
        | ImageBitmap
}

export interface TdgTexture2D {
    readonly width: number
    readonly height: number
    readonly image:
        | null
        | ImageData
        | HTMLImageElement
        | HTMLCanvasElement
        | HTMLVideoElement
        | ImageBitmap
    bind(): void
    activate(program: TgdProgram, uniformName: string, slot?: number): void
    loadImage(
        image:
            | string
            | ImageData
            | HTMLImageElement
            | HTMLCanvasElement
            | HTMLVideoElement
            | ImageBitmap
    ): void
}
