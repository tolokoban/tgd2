import type { TgdEvent } from "@tgd/event"

export interface TgdTimeOptions {
    speed: number
    context: {
        eventPaintEnter: TgdEvent<{ playing: boolean }>
    }
}

/**
 * Use this class to abstract the time given by a `TgdContext`.
 */
export class TgdTime {
    /**
     * Multiply the real time by this factor.
     */
    private _speed = 1
    private playing = false
    private timeStart = 0
    private timeStop = 0
    private secondsAtSpeedZero = 0
    private speedAtPause = 0
    private firstUpdate = true
    private context:
        | {
              eventPaintEnter: TgdEvent<{ playing: boolean }>
          }
        | undefined = undefined

    constructor({ speed = 1, context }: Partial<TgdTimeOptions> = {}) {
        this._speed = speed
        this.speedAtPause = speed
        this.context = context
        this.bind(context)
    }

    get speed(): number {
        return this._speed
    }
    set speed(speed: number) {
        if (this._speed === speed) return

        if (this.playing) {
            // Changing speed during playing should not make the time jump.
            // These calculations make sure of that.
            const { seconds } = this
            if (speed === 0) this.secondsAtSpeedZero = seconds
            else if (this._speed === 0) {
                this.timeStart = this.time - this.secondsAtSpeedZero / speed
            } else {
                this.timeStart = this.time - seconds / speed
            }
        }
        this._speed = speed
    }

    get seconds(): number {
        const { speed, timeStart, timeStop } = this
        if (speed === 0) return this.secondsAtSpeedZero
        if (this.playing) {
            return (this.time - timeStart) * speed
        }
        return (timeStop - timeStart) * speed
    }
    set seconds(seconds: number) {
        if (this.speed === 0) return

        const delta = this.seconds - seconds
        this.timeStart += delta / this.speed
    }

    get milliseconds() {
        return this.seconds * 1e3
    }
    set milliseconds(milliseconds: number) {
        this.seconds = milliseconds * 1e-3
    }

    /**
     * If you bind to a context, you don't need to call `update()` yourself,
     * because it will be called automatically at every repaint.
     */
    bind(
        context:
            | {
                  eventPaintEnter: TgdEvent<{ playing: boolean }>
              }
            | undefined,
    ) {
        this.unbind()
        if (context) {
            this.context = context
            context.eventPaintEnter.addListener(this.actualUpdate)
        }
    }

    unbind() {
        const { context } = this
        if (!context) return

        context.eventPaintEnter.removeListener(this.actualUpdate)
        this.context = undefined
    }

    reset() {
        this.firstUpdate = true
    }

    update(context: { playing: boolean }) {
        // Manual updates are ignored when already bound to a context.
        if (this.context) return

        this.actualUpdate(context)
    }

    private get time() {
        return Date.now() * 1e-3
    }

    private readonly actualUpdate = (context: { playing: boolean }) => {
        const { time } = this
        const { playing } = context
        if (this.firstUpdate) {
            this.firstUpdate = false
            this.timeStart = time
            this.timeStop = time
            this.playing = playing
            return
        }
        if (playing !== this.playing) {
            if (playing) {
                // Play
                const { speed, speedAtPause, timeStart, timeStop } = this
                if (speedAtPause === 0) {
                    if (speed !== 0) {
                        this.timeStart = time - this.secondsAtSpeedZero / speed
                    }
                } else if (speed === 0) {
                    this.secondsAtSpeedZero = (timeStop - timeStart) * speedAtPause
                } else {
                    this.timeStart = time + ((timeStart - timeStop) * speedAtPause) / speed
                }
            } else {
                // Pause
                this.speedAtPause = this.speed
                this.timeStop = time
            }
            this.playing = playing
        }
    }
}
