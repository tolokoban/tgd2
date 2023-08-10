import { TgdTypeKey } from "./types"

export default class TgdInputs {
    private _x = 0
    private _y = 0
    private _pressed = false
    /** The keys that are currently pressed. */
    private keys = new Set<string>()

    constructor(private readonly canvas: HTMLCanvasElement) {
        document.addEventListener("keydown", this.handleKeyDown, true)
        document.addEventListener("keyup", this.handleKeyUp, true)
    }

    get x() {
        return this._x
    }
    get y() {
        return this._y
    }
    get pressed() {
        return this._pressed
    }

    /**
     * Check if the key `name` is pressed.
     * @param name See the [list of possible values](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
     */
    key(name: TgdTypeKey) {
        return this.keys.has(name)
    }

    private readonly handleKeyDown = (evt: KeyboardEvent) => {
        this.keys.add(evt.key)
    }

    private readonly handleKeyUp = (evt: KeyboardEvent) => {
        this.keys.delete(evt.key)
    }
}
