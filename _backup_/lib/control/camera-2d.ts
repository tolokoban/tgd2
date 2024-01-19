import TgdInputKeyboard from "../input/keyboard"
import { TgdTypeKey } from "../input/types"
import { TgdCamera2D } from "./../camera/2d"

export interface TgdControlCamera2DOptions {
    speed: number
    zoomSpeed: number
    zoomInKeys: TgdTypeKey[]
    zoomInSpeed: number
    zoomOutKeys: TgdTypeKey[]
    zoomOutSpeed: number
    leftKeys: TgdTypeKey[]
    leftSpeed: number
    rightKeys: TgdTypeKey[]
    rightSpeed: number
    upKeys: TgdTypeKey[]
    upSpeed: number
    downKeys: TgdTypeKey[]
    downSpeed: number
}

export class TgdControlCamera2D {
    private readonly zoomInKeys: TgdTypeKey[]
    private readonly zoomInSpeed: number
    private readonly zoomOutKeys: TgdTypeKey[]
    private readonly zoomOutSpeed: number
    private readonly leftKeys: TgdTypeKey[]
    private readonly leftSpeed: number
    private readonly rightKeys: TgdTypeKey[]
    private readonly rightSpeed: number
    private readonly upKeys: TgdTypeKey[]
    private readonly upSpeed: number
    private readonly downKeys: TgdTypeKey[]
    private readonly downSpeed: number
    private readonly inputKeyboard: TgdInputKeyboard

    constructor(
        private readonly camera: TgdCamera2D,
        options: Partial<TgdControlCamera2DOptions>
    ) {
        const SEC_TO_MS = 1e-3
        this.zoomInKeys = options.zoomInKeys ?? ["+"]
        this.zoomOutKeys = options.zoomOutKeys ?? ["-"]
        this.leftKeys = options.leftKeys ?? ["ArrowLeft", "a", "4"]
        this.rightKeys = options.rightKeys ?? ["ArrowRight", "d", "6"]
        this.upKeys = options.upKeys ?? ["ArrowUp", "w", "8"]
        this.downKeys = options.downKeys ?? ["ArrowDown", "s", "2"]
        this.zoomInSpeed =
            SEC_TO_MS * (options.zoomInSpeed ?? options.zoomSpeed ?? 2)
        this.zoomOutSpeed =
            SEC_TO_MS *
            (options.zoomOutSpeed ??
                (options.zoomSpeed ? 1 / options.zoomSpeed : 0.5))
        this.leftSpeed =
            SEC_TO_MS *
            (options.leftSpeed ?? options.leftSpeed ?? options.speed ?? 10)
        this.rightSpeed =
            SEC_TO_MS *
            (options.rightSpeed ?? options.rightSpeed ?? options.speed ?? 10)
        this.upSpeed =
            SEC_TO_MS *
            (options.upSpeed ?? options.upSpeed ?? options.speed ?? 10)
        this.downSpeed =
            SEC_TO_MS *
            (options.downSpeed ?? options.downSpeed ?? options.speed ?? 10)
        const keys: TgdTypeKey[] = []
        keys.push(
            ...this.leftKeys,
            ...this.rightKeys,
            ...this.upKeys,
            ...this.downKeys
        )
        this.inputKeyboard = new TgdInputKeyboard(keys)
    }

    update(time: number, delay: number) {
        if (this.key(this.leftKeys)) this.camera.x += delay * this.leftSpeed
        if (this.key(this.rightKeys)) this.camera.x += delay * this.rightSpeed
        if (this.key(this.upKeys)) this.camera.y += delay * this.upSpeed
        if (this.key(this.downKeys)) this.camera.y += delay * this.downSpeed
    }

    private key(keys: TgdTypeKey[]): boolean {
        for (const key of keys) {
            if (this.inputKeyboard.key(key)) return true
        }
        return false
    }
}
