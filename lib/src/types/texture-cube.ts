import type { WebglImage } from "./webgl"

export interface TgdTextureCubeOptions {
    /**
     * When you look at this image the
     *
     * - Right points toward `-Z`
     * - Top points toward `-Y`
     */
    imagePosX: WebglImage
    /**
     * When you look at this image the
     *
     * - Right points toward `+Z`
     * - Top points toward `-Y`
     */
    imageNegX: WebglImage
    /**
     * When you look at this image the
     *
     * - Right points toward `+X`
     * - Top points toward `+Z`
     */
    imagePosY: WebglImage
    /**
     * When you look at this image the
     *
     * - Right points toward `+X`
     * - Top points toward `-Z`
     */
    imageNegY: WebglImage
    /**
     * When you look at this image the
     *
     * - Right points toward `+X`
     * - Top points toward `-Y`
     */
    imagePosZ: WebglImage
    /**
     * When you look at this image the
     *
     * - Right points toward `-X`
     * - Top points toward `-Y`
     */
    imageNegZ: WebglImage
}
