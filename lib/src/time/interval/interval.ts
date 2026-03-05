export interface TgdTimeIntervalOptions {
    intervalInSeconds: number
    action?: (time: number, delta: number) => void
}

export class TgdTimeInterval {
    public intervalInSeconds = 0
    public action?: (time: number, delta: number) => void = undefined

    private previousTime = 0

    constructor(options: TgdTimeIntervalOptions) {
        this.intervalInSeconds = options.intervalInSeconds
        this.action = options.action
    }

    /**
     * If more than `intervalInSeconds` have passed since
     * then last call of `update()`, then we call `action()`.
     */
    update(time: number, delta: number) {
        const deltaFromPrevious = time - this.previousTime
        if (deltaFromPrevious < this.intervalInSeconds) return

        this.intervalInSeconds = Math.max(this.intervalInSeconds, 1 / 60)
        this.previousTime += Math.floor(deltaFromPrevious / this.intervalInSeconds) * this.intervalInSeconds
        this.action?.(time, delta)
    }
}
