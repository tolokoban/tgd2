import { TgdProgram } from "./program"
import { WebglImage, WebglMagFilter, WebglMinFilter, WebglWrap } from "./webgl"

export interface TdgTextureCubeOptions {
    /**
     * (-Z, -Y)
     */
    imagePosX: string | WebglImage
    /**
     * (+Z, -Y)
     */
    imageNegX: string | WebglImage
    /**
     * (+X, +Z)
     */
    imagePosY: string | WebglImage
    /**
     * (+X, -Z)
     */
    imageNegY: string | WebglImage
    /**
     * (+X, -Y)
     */
    imagePosZ: string | WebglImage
    /**
     * (-X, -Y)
     */
    imageNegZ: string | WebglImage
}

export interface TdgTextureCube {
    /**
     * TextureCube is ready only when the 6 images hve been loaded.
     */
    readonly ready: boolean
    bind(): void
    activate(program: TgdProgram, uniformName: string, slot?: number): void
}
