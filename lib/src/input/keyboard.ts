import { TgdInputKeyboard } from "@tgd/types/input-keyboard"
import { TgdEvent } from "../event"

export class TgdInputKeyboardImpl implements TgdInputKeyboard {
    public readonly eventKeyPress = new TgdEvent<KeyboardEvent>()

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

    isUp(...keys: string[]): boolean {
        return !this.isDown(...keys)
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

    private readonly handleKeyDown = (event: KeyboardEvent) => {
        this.keysDown.add(event.key)
        this.keysUp.delete(event.key)
    }

    private readonly handleKeyUp = (event: KeyboardEvent) => {
        this.keysDown.delete(event.key)
        this.keysUp.add(event.key)
        this.eventKeyPress.dispatch(event)
    }
}
