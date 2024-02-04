import { TgdProgram } from "./program"
import { WebglImage, WebglMagFilter, WebglMinFilter, WebglWrap } from "./webgl"

export interface TdgTextureCubeOptions {
    imagePosX: string | WebglImage
    imageNegX: string | WebglImage
    imagePosY: string | WebglImage
    imageNegY: string | WebglImage
    imagePosZ: string | WebglImage
    imageNegZ: string | WebglImage
}

export interface TdgTextureCube {
    readonly ready: boolean
    bind(): void
    activate(program: TgdProgram, uniformName: string, slot?: number): void
}
