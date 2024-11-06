import { range } from "./util"

export class RowGenerator {
    private current: number[] = []

    constructor(public readonly modulo = 256) {}

    next(): number[] {
        const { current } = this
        if (current.length === 0) {
            this.current = [1]
        } else {
            const newCurrent: number[] = range(this.current.length + 1).map(
                index =>
                    ((current[index - 1] ?? 0) + (current[index] ?? 0)) %
                    this.modulo
            )
            this.current = newCurrent
        }

        return this.current.slice()
    }
}
