export abstract class TgdPainter {
    abstract delete(): void
    abstract paint(time: number, delay: number): void
    abstract update(time: number, delay: number): void
}
