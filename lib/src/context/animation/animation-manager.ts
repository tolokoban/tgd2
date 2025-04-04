import { TgdAnimation } from "@tgd/types/animation"

interface Animation {
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

    private readonly animations = new Map<TgdAnimation, Animation>()

    schedule(animation: TgdAnimation): TgdAnimation {
        if (!animation.name)
            animation.name = `TgdAnimation#${TgdManagerAnimation.counter++}`
        const { action, duration, easingFunction, repeat } = animation
        this.animations.set(animation, {
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

        for (const anim of this.animations.values()) {
            if (anim.start < 0) {
                // Initialize animation.
                anim.start = time + anim.delay
            }
            const relativeTime = time - anim.start
            if (relativeTime < 0) continue

            const t = Math.min(1, anim.inverseDuration * relativeTime)
            anim.action(t)
            while (time > anim.start + anim.duration) {
                try {
                    anim.onEnd?.()
                } catch (error) {
                    console.error("Animation.onEnd() failed for", anim)
                    console.error(error)
                }
                anim.loop++
                anim.start += anim.duration
            }
            if (anim.loop > anim.repeat) {
                anim.cancel()
            }
        }
        return true
    }
}
