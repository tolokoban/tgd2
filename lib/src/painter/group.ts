import { TgdPainter } from "./painter"

/**
 * Group several painters together.
 */
export class TgdPainterGroup implements TgdPainter {
    public enabled = true
    private readonly painters: TgdPainter[]

    constructor(painters: TgdPainter[] = []) {
        this.painters = [...painters]
    }

    add(...painters: TgdPainter[]) {
        for (const painter of painters) {
            this.painters.push(painter)
        }
    }

    remove(...painters: TgdPainter[]) {
        for (const painter of painters) {
            const index = this.painters.indexOf(painter)
            if (index < 0) continue

            this.painters.splice(index, 1)
            painter.delete()
        }
    }

    delete(): void {
        for (const painter of this.painters) {
            painter.delete()
        }
        this.painters.splice(0, this.painters.length)
    }

    paint(time: number, delay: number): void {
        if (!this.enabled) return

        for (const painter of this.painters) {
            painter.paint(time, delay)
        }
    }

    update(time: number, delay: number): void {
        if (!this.enabled) return

        for (const painter of this.painters) {
            painter.update(time, delay)
        }
    }
}
