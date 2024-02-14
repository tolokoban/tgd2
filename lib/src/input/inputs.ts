import { TdgInputKeyboardImpl, TgdInputPointerImpl } from "@/input"
import { TgdInputKeyboard } from "@/types/input-keyboard"
import { TgdInputPointer } from ".."

export class TgdInputs {
    private _keyboard: TgdInputKeyboard | null = null
    private _pointer: TgdInputPointer | null = null

    constructor(private readonly canvas: HTMLCanvasElement) {}

    get keyboard(): TgdInputKeyboard {
        if (!this._keyboard) {
            this._keyboard = new TdgInputKeyboardImpl()
        }
        return this._keyboard
    }

    get pointer(): TgdInputPointer {
        if (!this._pointer) {
            this._pointer = new TgdInputPointerImpl(this.canvas)
        }
        return this._pointer
    }
}
