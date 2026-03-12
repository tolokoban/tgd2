import { TgdLogic } from "@tgd/context"
import { TgdConsole } from "@tgd/debug"
import type { TgdPainterFunction } from "@tgd/types/painter"
import { type TgdDebugPainterHierarchy, TgdPainter } from "./painter"
import { TgdPainterLogic } from "./logic"

export type TgdPainterGroupOptions = {
    onEnter?(time: number, delta: number): void
    onExit?(time: number, delta: number): void
    name?: string
    children?: (TgdPainter | TgdPainterFunction)[]
}

/**
 * Group several painters together.
 */
export class TgdPainterGroup extends TgdPainter {
    /**
     * the logic will be executed at the beginning of `paint()`.
     */
    public readonly logic = new TgdLogic()
    public active = true
    public onEnter: TgdPainterFunction | undefined
    public onExit: TgdPainterFunction | undefined
    protected readonly painters: TgdPainter[]

    private readonly logics: Array<(time: number, delta: number) => void> = []

    constructor()
    constructor(painters?: (TgdPainter | TgdPainterFunction)[], options?: TgdPainterGroupOptions)
    constructor(options?: TgdPainterGroupOptions)
    constructor(arg1?: (TgdPainter | TgdPainterFunction)[] | TgdPainterGroupOptions, arg2?: TgdPainterGroupOptions) {
        super()
        this.painters = []
        if (Array.isArray(arg1)) {
            for (const painter of arg1) this.add(painter)
        } else if (arg1) {
            this.onEnter = arg1.onEnter
            this.onExit = arg1.onExit
            this.name = arg1.name ?? `Group/${this.name}`
            if (arg1.children) {
                for (const painter of arg1.children) this.add(painter)
            }
        }
        if (arg2) {
            this.onEnter = arg2.onEnter
            this.onExit = arg2.onExit
            this.name = arg2.name ?? `Group/${this.name}`
            if (arg2.children) {
                for (const painter of arg2.children) {
                    if (painter instanceof TgdPainter && this.painters.includes(painter)) continue

                    this.add(painter)
                }
            }
        }
    }

    forEachChild(callback: (child: TgdPainter, index: number) => void) {
        for (const [index, child] of this.painters.entries()) callback(child, index)
    }

    has(painter: TgdPainter): boolean {
        return this.painters.includes(painter)
    }

    add(...painters: (TgdPainter | TgdPainterFunction)[]) {
        for (const painter of painters) {
            if (painter instanceof TgdPainter) {
                this.painters.push(painter)
            } else {
                this.painters.push(new TgdPainterLogic(painter))
            }
        }
    }

    addFirst(...painters: TgdPainter[]) {
        for (let index = painters.length - 1; index >= 0; index--) {
            const painter = painters[index]
            this.painters.unshift(painter)
        }
    }

    remove(...painters: TgdPainter[]) {
        for (const painter of painters) {
            const index = this.painters.indexOf(painter)
            if (index === -1) continue

            this.painters.splice(index, 1)
            painter.delete()
        }
    }

    removeWithoutDeleting(...painters: TgdPainter[]) {
        for (const painter of painters) {
            const index = this.painters.indexOf(painter)
            if (index === -1) continue

            this.painters.splice(index, 1)
        }
    }

    /**
     * Remove all the painters from this group.
     *
     * @param deleteRemovedPainters By default, when a painter is removed,
     * its `delete()` function is called. You can prevent this by setting
     * `deleteRemovedPainters === false`.
     */
    removeAll(deleteRemovedPainters = true) {
        if (deleteRemovedPainters) {
            for (const painter of this.painters) {
                painter.delete()
            }
        }
        this.painters.splice(0)
    }

    delete(): void {
        this.removeAll()
        this.logic.clear()
    }

    paint(time: number, delta: number): void {
        if (!this.active) return

        this.logic.exec(time, delta)
        this.onEnter?.(time, delta)
        for (const painter of this.painters) {
            if (painter.active) {
                painter.paint(time, delta)
            }
        }
        for (const logic of this.logics) {
            logic(time, delta)
        }
        this.onExit?.(time, delta)
    }

    get hierarchy(): TgdDebugPainterHierarchy {
        return {
            [this.active ? this.name : `${this.name} (Inactive)`]: this.painters.map((painter) => painter.hierarchy),
        }
    }

    debugHierarchy(caption?: string) {
        const cons = new TgdConsole({
            text: caption ?? this.name,
            bold: true,
        }).add()
        this.recursiveDebug(cons, this.hierarchy)
        cons.debug()
    }

    private recursiveDebug(cons: TgdConsole, h: TgdDebugPainterHierarchy, indent = 0) {
        for (const key of Object.keys(h)) {
            cons.add("| ".repeat(indent), { color: "#777" }).add(key).add()
            const value = h[key]
            if (value) {
                for (const child of value) this.recursiveDebug(cons, child, indent + 1)
            }
        }
    }
}
