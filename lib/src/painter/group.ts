import { TgdPainterFunction } from "@tgd/types/painter"
import {
    TgdDebugPainterHierarchy as TgdDebugPainterHierarchy,
    TgdPainter,
} from "./painter"
import { TgdConsole } from "@tgd/debug"

export type TgdPainterGroupOptions = {
    onEnter?(time: number, delay: number): void
    onExit?(time: number, delay: number): void
    name?: string
    children?: TgdPainter[]
}

/**
 * Group several painters together.
 */
export class TgdPainterGroup extends TgdPainter {
    public active = true
    public onEnter: TgdPainterFunction | undefined
    public onExit: TgdPainterFunction | undefined
    protected readonly painters: TgdPainter[]

    private readonly logics: Array<(time: number, delay: number) => void> = []

    constructor()
    constructor(painters?: TgdPainter[], options?: TgdPainterGroupOptions)
    constructor(options?: TgdPainterGroupOptions)
    constructor(
        arg1?: TgdPainter[] | TgdPainterGroupOptions,
        arg2?: TgdPainterGroupOptions
    ) {
        super()
        this.painters = []
        if (Array.isArray(arg1)) {
            for (const painter of arg1) this.painters.push(painter)
        } else if (arg1) {
            this.onEnter = arg1.onEnter
            this.onExit = arg1.onExit
            this.name = arg1.name ?? `Group/${this.name}`
            if (arg1.children) {
                for (const painter of arg1.children) this.painters.push(painter)
            }
        }
        if (arg2) {
            this.onEnter = arg2.onEnter
            this.onExit = arg2.onExit
            this.name = arg2.name ?? `Group/${this.name}`
            if (arg2.children) {
                for (const painter of arg2.children) {
                    if (!this.painters.includes(painter)) {
                        this.painters.push(painter)
                    }
                }
            }
        }
    }

    forEachChild(callback: (child: TgdPainter, index: number) => void) {
        for (const [index, child] of this.painters.entries())
            callback(child, index)
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

    removeAll() {
        for (const painter of this.painters) {
            painter.delete()
        }
        this.painters.splice(0)
    }

    delete(): void {
        for (const painter of this.painters) {
            painter.delete()
        }
        this.painters.splice(0)
        this.logicClear()
    }

    logicAdd(logic?: (time: number, delay: number) => void) {
        if (logic) {
            this.logicRemove(logic)
            this.logics.push(logic)
        }
    }

    logicRemove(logic?: (time: number, delay: number) => void) {
        if (!logic) return

        const { logics } = this
        const index = logics.indexOf(logic)
        if (index === -1) return

        logics.splice(index, 1)
    }

    logicClear() {
        this.logics.splice(0)
    }

    paint(time: number, delay: number): void {
        if (!this.active) return

        this.onEnter?.(time, delay)
        for (const painter of this.painters) {
            if (painter.active) {
                painter.paint(time, delay)
            }
        }
        for (const logic of this.logics) {
            logic(time, delay)
        }
        this.onExit?.(time, delay)
    }

    get hierarchy(): TgdDebugPainterHierarchy {
        return {
            [this.active ? this.name : `${this.name} (Inactive)`]:
                this.painters.map((painter) => painter.hierarchy),
        }
    }

    debugHierarchy(caption?: string) {
        const cons = new TgdConsole({
            text: caption ?? this.name,
            style: { bold: true },
        }).add()
        this.recursiveDebug(cons, this.hierarchy)
        cons.debug()
    }

    private recursiveDebug(
        cons: TgdConsole,
        h: TgdDebugPainterHierarchy,
        indent = 0
    ) {
        for (const key of Object.keys(h)) {
            cons.add("| ".repeat(indent), { color: "#777" }).add(key).add()
            const value = h[key]
            if (value) {
                for (const child of value)
                    this.recursiveDebug(cons, child, indent + 1)
            }
        }
    }
}
