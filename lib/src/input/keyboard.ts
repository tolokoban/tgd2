export class TdgInputKeyboard {
    private readonly keys = new Set<string>()
    private attached = false

    constructor() {
        document.addEventListener("keydown", this.handleKeyDown)
        document.addEventListener("keyup", this.handleKeyUp)
        this.attached = true
    }

    detach() {
        if (!this.attached) return

        document.removeEventListener("keydown", this.handleKeyDown)
        document.removeEventListener("keyup", this.handleKeyUp)
        this.attached = false
    }

    isPressed(...keys: string[]): boolean {
        for (const key of keys) {
            if (!this.keys.has(key)) return false
        }
        return true
    }

    private readonly handleKeyDown = (evt: KeyboardEvent) => {
        this.keys.add(evt.key)
    }

    private readonly handleKeyUp = (evt: KeyboardEvent) => {
        this.keys.delete(evt.key)
    }
}
