import { TgdInputKeyboard } from "@/types/input-keyboard"

export class TdgInputKeyboardImpl implements TgdInputKeyboard {
    private readonly keysDown = new Set<string>()
    private readonly keysUp = new Set<string>()
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

    isDown(...keys: string[]): boolean {
        for (const key of keys) {
            if (!this.keysDown.has(key)) return false
        }
        return true
    }

    hasClicked(key: string): boolean {
        if (this.keysUp.has(key)) {
            this.keysUp.delete(key)
            return true
        }
        return false
    }

    private readonly handleKeyDown = (evt: KeyboardEvent) => {
        this.keysDown.add(evt.key)
        this.keysUp.delete(evt.key)
    }

    private readonly handleKeyUp = (evt: KeyboardEvent) => {
        this.keysDown.delete(evt.key)
        this.keysUp.add(evt.key)
    }
}