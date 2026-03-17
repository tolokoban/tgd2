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
    public speed = 1

    private playing = false
    private timeStart = 0
    private timeStop = 0
    private firstUpdate = true
    private context:
        | {
              eventPaintEnter: TgdEvent<{ playing: boolean }>
          }
        | undefined = undefined

    constructor({ speed = 1, context }: Partial<TgdTimeOptions> = {}) {
        this.speed = speed
        this.context = context
        this.bind(context)
    }

    get seconds(): number {
        const { speed, timeStart } = this
        if (this.playing) {
            return (this.time - timeStart) * speed
        }
        return (this.timeStop - timeStart) * speed
    }

    get milliseconds() {
        return this.seconds * 1e3
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

    update(context: { time: number; playing: boolean }) {
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
                this.timeStart = time + this.timeStart - this.timeStop
            } else {
                // Pause
                this.timeStop = time
            }
            this.playing = playing
            // console.log(playing ? "Play:" : "Pause:", this.seconds)
        }
    }
}
