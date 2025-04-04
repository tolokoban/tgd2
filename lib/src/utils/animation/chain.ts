import { TgdAnimation } from "@tgd/types/animation"
import { tgdEasingFunctionLinear } from "../easing-function"

/**
 * Create an animation which is the chain of `animations`.
 */
export function tgdAnimChain(
    animations: TgdAnimation[],
    options: Partial<{
        delay: number
        repeat: number
        easingFunction(this: void, x: number): number
        onEnd(): void
    }> = {}
): TgdAnimation {
    if (animations.length === 0) {
        return {
            action() {},
            duration: 0,
        }
    }

    const { intervals, duration } = computeIntervals(animations)
    let previousAnimation: TgdAnimation | null = null
    let previousName = "???"
    return {
        ...options,
        duration,
        onEnd() {
            previousAnimation?.onEnd?.()
            options.onEnd?.()
        },
        action(alpha: number) {
            const t = alpha * duration
            for (const { animation, begin, end } of intervals) {
                if (t >= begin && t <= end) {
                    if (previousAnimation && previousAnimation !== animation) {
                        previousAnimation.onEnd?.()
                    }
                    previousAnimation = animation
                    const intervalAlpha = computeIntervalAlpha(
                        t,
                        begin,
                        end,
                        animation.delay
                    )
                    if (intervalAlpha < 0 || intervalAlpha > 1) return

                    if (previousName !== animation.name) {
                        previousName = animation.name ?? ""
                    }
                    const easingFunction =
                        animation.easingFunction ?? tgdEasingFunctionLinear
                    animation.action(easingFunction(intervalAlpha))
                    return
                }
            }
        },
    }
}

interface Interval {
    begin: number
    end: number
    animation: TgdAnimation
}

function computeIntervals(animations: TgdAnimation[]) {
    const intervals: Interval[] = []
    let begin = 0
    let end = 0
    for (const animation of animations) {
        const duration = animation.duration + (animation.delay ?? 0)
        end = begin + duration
        intervals.push({ animation, begin, end })
        begin += duration
    }
    return { intervals, duration: end }
}

function computeIntervalAlpha(
    t: number,
    begin: number,
    end: number,
    delay = 0
) {
    const actualBegin = begin + delay
    const duration = end - actualBegin
    return (t - actualBegin) / duration
}
