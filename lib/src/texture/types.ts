import { WebglImage, isWebglImage } from "@tgd/types"
import { isString, isType } from "@tgd/types/guards"

export interface LoadBmpOptions {
    bmp: string | WebglImage | Promise<WebglImage | null>
    level?: number
    generateMipmap?: boolean
    onLoad?: () => void
}

export function isLoadBmpOptions(data: unknown): data is LoadBmpOptions {
    if (
        !isType(data, {
            bmp: "unknown",
            level: ["?", "number"],
            generateMipmap: ["?", "boolean"],
        })
    ) {
        return false
    }

    const { bmp } = data
    if (isString(bmp)) return true
    if (isWebglImage(bmp)) return true
    if (bmp instanceof Promise) return true
    return false
}
