import { TgdInputGamepad } from "./gamepad"
import { TgdInputKeyboard } from "./keyboard"
import { TgdInputPointer } from "./pointer"

export class TgdInputs {
    public readonly gamepad = new TgdInputGamepad()

    private _keyboard: TgdInputKeyboard | null = null
    private _pointer: TgdInputPointer | null = null

    constructor(private readonly canvas?: HTMLCanvasElement | undefined) {}

    get keyboard(): TgdInputKeyboard {
        if (!this._keyboard) {
            this._keyboard = new TgdInputKeyboard()
        }
        return this._keyboard
    }

    get pointer(): TgdInputPointer {
        if (!this._pointer) {
            this._pointer = new TgdInputPointer(this.canvas)
        }
        return this._pointer
    }
}
