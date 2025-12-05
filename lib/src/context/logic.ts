export type TgdLogicFunction = (time: number, delay: number) => void

/**
 * List of logic functions to be called (generaly) on every frame.
 */
export class TgdLogic {
    private logics: TgdLogicFunction[] = []

    clear() {
        this.logics.splice(0)
        return this
    }

    add(logic: TgdLogicFunction) {
        this.remove(logic)
        this.logics.push(logic)
        return this
    }

    remove(logic: TgdLogicFunction) {
        const idx = this.logics.indexOf(logic)
        if (idx === -1) return false

        this.logics.splice(idx, 1)
        return true
    }

    exec(time: number, delay: number) {
        for (const logic of this.logics) logic(time, delay)
    }
}
