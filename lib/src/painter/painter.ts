export abstract class TgdPainter {
    private static counter = 0

    /**
     * This attribute has no other purpose than debugging.
     * Its value is not used by Tgd.
     */
    public name: string = `Painter/${TgdPainter.counter++}`

    public active: boolean = true

    abstract delete(): void

    abstract paint(time: number, delay: number): void
}
