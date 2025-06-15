import { TgdLogger } from "@tgd/log"

export type TgdDebugPainterHierarchy = Record<
    string,
    TgdDebugPainterHierarchy[] | null
>

export abstract class TgdPainter {
    static readonly log = new TgdLogger()

    private static counter = 0

    /**
     * This attribute has no other purpose than debugging.
     * Its value is not used by Tgd.
     */
    public name: string = `Painter/${TgdPainter.counter++}`

    public active: boolean = true

    abstract delete(): void

    abstract paint(time: number, delay: number): void

    get hierarchy(): TgdDebugPainterHierarchy {
        return {
            [this.active ? this.name : `${this.name} (Inactive)`]: null,
        }
    }
}
