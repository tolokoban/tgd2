import { TgdScene } from "../scene"

export abstract class TgdPainter {
    abstract destroy(): void
    abstract paint(time: number, delay: number): void
    abstract update(time: number, delay: number): void
}
