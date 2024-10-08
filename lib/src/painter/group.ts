import { TgdPainterFunction } from "@tgd/types/painter"
import { TgdDebugPainterhierarchy, TgdPainter } from "./painter"

export type TgdPainterGroupOptions = {
    onEnter?(time: number, delay: number): void
    onExit?(time: number, delay: number): void
    name?: string
}

/**
 * Group several painters together.
 */
export class TgdPainterGroup extends TgdPainter {
    public active = true
    public onEnter: TgdPainterFunction | undefined
    public onExit: TgdPainterFunction | undefined
    private readonly painters: TgdPainter[]

    constructor(
        painters: TgdPainter[] = [],
        { onEnter, onExit, name }: TgdPainterGroupOptions = {}
    ) {
        super()
        this.onEnter = onEnter
        this.onExit = onExit
        this.painters = [...painters]
        this.name = name ?? `Group/${this.name}`
    }

    forEachChild(callback: (child: TgdPainter, index: number) => void) {
        this.painters.forEach((child, index) => callback(child, index))
    }

    has(painter: TgdPainter): boolean {
        return this.painters.includes(painter)
    }

    add(...painters: TgdPainter[]) {
        for (const painter of painters) {
            this.painters.push(painter)
        }
    }

    addFirst(...painters: TgdPainter[]) {
        for (let i = painters.length - 1; i >= 0; i--) {
            const painter = painters[i]
            this.painters.unshift(painter)
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

    removeAll() {
        for (const painter of this.painters) {
            painter.delete()
        }
        this.painters.splice(0, this.painters.length)
    }

    delete(): void {
        for (const painter of this.painters) {
            painter.delete()
        }
        this.painters.splice(0, this.painters.length)
    }

    paint(time: number, delay: number): void {
        if (!this.active) return

        this.onEnter?.(time, delay)
        for (const painter of this.painters) {
            if (painter.active) {
                painter.paint(time, delay)
            }
        }
        this.onExit?.(time, delay)
    }

    debugHierarchy(): TgdDebugPainterhierarchy {
        return {
            [this.active ? this.name : `${this.name} (Inactive)`]:
                this.painters.map(painter => painter.debugHierarchy()),
        }
    }
}
