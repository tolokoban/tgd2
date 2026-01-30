export class TgdInputGamepad {
    private gamepad: Gamepad | null = null

    constructor() {
        globalThis.addEventListener("gamepadconnected", (evt) => {
            console.log("🐞 [gamepad@6] evt =", evt) // @FIXME: Remove this line written on 2026-01-29 at 16:48
            this.gamepad = evt.gamepad
        })
        globalThis.addEventListener("gamepaddisconnected", (evt) => {
            console.log("Gamepad disconnected:", evt.gamepad.id)
            this.gamepad = null
        })
    }

    get stickH1() {
        return this.gamepad?.axes[1] ?? 0
    }

    get stickV1() {
        return this.gamepad?.axes[0] ?? 0
    }

    get stickH2() {
        return this.gamepad?.axes[3] ?? 0
    }

    get stickV2() {
        return this.gamepad?.axes[2] ?? 0
    }

    get buttonA() {
        return this.gamepad?.buttons[0].pressed ?? false
    }

    get buttonB() {
        return this.gamepad?.buttons[1].pressed ?? false
    }

    get buttonAorB() {
        return this.buttonA || this.buttonB
    }

    get buttonY() {
        return this.gamepad?.buttons[2].pressed ?? false
    }

    get buttonX() {
        return this.gamepad?.buttons[3].pressed ?? false
    }

    get buttonXorY() {
        return this.buttonX || this.buttonY
    }
}
