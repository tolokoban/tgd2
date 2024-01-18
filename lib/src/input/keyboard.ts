import { TgdTypeKey } from "./types"

export default class TgdInputKeyboard {
    /** The keys that are currently pressed. */
    private keys = new Set<string>()
    private readonly preventDefaults: Set<string>

    constructor(defautBehaviourPrevented: TgdTypeKey[] = []) {
        this.preventDefaults = new Set(defautBehaviourPrevented)
        window.addEventListener("keydown", this.handleKeyDown, true)
        window.addEventListener("keyup", this.handleKeyUp, true)
    }

    /**
     * Check if the key `name` is pressed.
     * @param name See the [list of possible values](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
     */
    key(name: TgdTypeKey) {
        return this.keys.has(name)
    }

    private readonly handleKeyDown = (evt: KeyboardEvent) => {
        const { key } = evt
        if (this.preventDefaults.has(key)) evt.preventDefault()
        this.keys.add(key)
    }

    private readonly handleKeyUp = (evt: KeyboardEvent) => {
        const { key } = evt
        if (this.preventDefaults.has(key)) evt.preventDefault()
        this.keys.delete(key)
    }
}
