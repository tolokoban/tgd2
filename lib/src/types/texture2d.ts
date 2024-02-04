import { TgdProgram } from "./program"
import { WebglImage, WebglMagFilter, WebglMinFilter, WebglWrap } from "./webgl"

export interface TdgTexture2DOptions {
    wrapS: WebglWrap
    wrapT: WebglWrap
    wrapR: WebglWrap
    minFilter: WebglMinFilter
    magFilter: WebglMagFilter
    image?: string | WebglImage
}

export interface TdgTexture2D {
    readonly width: number
    readonly height: number
    readonly image: null | WebglImage
    bind(): void
    activate(program: TgdProgram, uniformName: string, slot?: number): void
    loadImage(image: string | WebglImage): void
}
