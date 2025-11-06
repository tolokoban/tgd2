import { TgdConsole } from "@tgd/debug"
import { TgdAnimation } from "@tgd/types/animation"

interface Animation {
    name: string
    start: number
    delay: number
    duration: number
    inverseDuration: number
    action(this: void, t: number): void
    loop: number
    repeat: number
    cancel(this: void): void
    onEnd?(this: void): void
}

export class TgdManagerAnimation {
    private static counter = 1

    private time = 0

    private readonly animations = new Map<TgdAnimation, Animation>()

    schedule(animation: TgdAnimation): TgdAnimation {
        if (!animation.name)
            animation.name = `TgdAnimation#${TgdManagerAnimation.counter++}`
        const { action, duration, easingFunction, repeat } = animation
        this.animations.set(animation, {
            name: animation.name,
            start: -1,
            delay: animation.delay ?? 0,
            duration: duration,
            inverseDuration: 1 / duration,
            action: easingFunction
                ? (alpha: number) => action(easingFunction(alpha))
                : action,
            loop: 1,
            repeat: repeat ?? 1,
            cancel: () => this.cancel(animation),
            onEnd: animation.onEnd,
        })
        return animation
    }

    cancel(animation: TgdAnimation) {
        this.animations.delete(animation)
    }

    paint(time: number): boolean {
        if (this.animations.size === 0) return false

        this.time = time
        for (const anim of this.animations.values()) {
            if (anim.start < 0) {
                // Initialize animation.
                anim.start = time + anim.delay
            }
            const relativeTime = time - anim.start
            if (relativeTime < 0) continue

            const t = Math.min(1, anim.inverseDuration * relativeTime)
            anim.action(t)
            let loops = 0
            while (time > anim.start + anim.duration) {
                if (loops++ > 10) {
                    console.log("Too many loops for", anim)
                    console.log(
                        "🚀 [animation-manager] time, anim.start + anim.duration =",
                        time,
                        anim.start + anim.duration
                    ) // @FIXME: Remove this line written on 2025-11-06 at 10:52
                    break
                }
                try {
                    anim.onEnd?.()
                } catch (error) {
                    console.error("Animation.onEnd() failed for", anim)
                    console.error(error)
                }
                anim.loop++
                if (anim.loop > anim.repeat) break
                anim.start += anim.duration
            }
            if (anim.loop > anim.repeat) {
                anim.cancel()
            }
        }
        return true
    }

    debug(caption = "Animations") {
        const output = new TgdConsole({
            text: `${caption} (count: ${this.animations.size})\n`,
            style: { bold: true, color: "#fa0" },
        })
        for (const anim of this.animations.values()) {
            output.add(anim.name).add(" ")
            if (anim.start < 0) {
                output.add("Scheduled", { color: "#05b" })
            } else {
                const { time } = this
                const relativeTime = time - anim.start
                if (relativeTime < 0) {
                    output.add(`Wait ${Math.abs(relativeTime)} sec`, {
                        color: "#d00",
                    })
                } else {
                    const t =
                        Math.min(1, anim.inverseDuration * relativeTime) * 100
                    output.add(`Run ${t.toFixed(0)}%`, { color: "#0d0" })
                }
            }
            output.add()
        }
        output.debug()
    }
}
