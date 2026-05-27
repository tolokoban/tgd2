import { TgdLogger } from "@tgd/log"
import { nextId } from "@tgd/utils/id"

export type TgdDebugPainterHierarchy = Record<string, TgdDebugPainterHierarchy[] | null>

export abstract class TgdPainter {
    static readonly log = new TgdLogger()

    public readonly id = nextId()

    /**
     * This attribute has no other purpose than debugging.
     * Its value is not used by Tgd.
     */
    public name = `${this.id} Painter`

    public active = true

    constructor(name?: string) {
        if (name) this.name = `${this.id} ${name}`
    }

    get nameUniq() {
        const { name, id } = this
        if (name.startsWith(id)) return name
        return `${id} ${name}`
    }

    abstract delete(): void

    abstract paint(time: number, delta: number): void

    get hierarchy(): TgdDebugPainterHierarchy {
        return {
            [this.active ? this.name : `${this.name} (Inactive)`]: null,
        }
    }

    debug(caption?: string) {
        console.debug(caption ?? `${this.name}  (id: ${this.id}, active: ${this.active})`)
    }
}
