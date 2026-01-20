import type { TgdTexture2D } from "@tgd/texture"
import { TgdPainter } from "../painter"

export interface TgdPainterSpritesOptions {
    texture: TgdTexture2D
    atlas: Array<{
        x: number
        y: number
        z?: number
        width: number
        height: number
        /**
         * Point which is considered the center
         * Usually between 0 (left) and 1 (right).
         *
         * Default: 0.5
         */
        originX?: number
        /**
         * Point which is considered the center
         * Usually between 0 (bottom) and 1 (top).
         *
         * Default: 0.5
         */
        originY?: number
    }>
}

export class TgdPainterSprites extends TgdPainter {
    delete(): void {
        throw new Error("Method not implemented.")
    }

    paint(time: number, delay: number): void {
        throw new Error("Method not implemented.")
    }
}
