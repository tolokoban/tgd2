import { TgdTransfo, TgdTransfoOptions } from "@tgd/math"
import { TgdAnimation } from "@tgd/types/animation"
import { tgdActionCreateTransfoInterpolation } from "../action"
import { tgdAnimChain } from "./chain"

interface TransfoInterpolationStep {
    transfo: Readonly<Partial<TgdTransfoOptions>> | Readonly<TgdTransfo>
    duration: number
    delay?: number
    repeat?: number
    easingFunction?(this: void, x: number): number
    onEnd?(): void
}

export function tgdAnimChainTransfoInterpolations(
    transfo: TgdTransfo,
    steps: TransfoInterpolationStep[],
    options: Partial<{
        delay: number
        repeat: number
        easingFunction(this: void, x: number): number
        onEnd(): void
    }> = {}
): TgdAnimation {
    const animations: TgdAnimation[] = []
    let previousTransfo: TgdTransfo = transfo
    let counter = 1
    for (const step of steps) {
        const nextTransfo = new TgdTransfo(previousTransfo).from(step.transfo)
        animations.push({
            name: `Step#${counter++}`,
            ...step,
            action: tgdActionCreateTransfoInterpolation(
                transfo,
                previousTransfo,
                nextTransfo
            ),
        })
        previousTransfo = nextTransfo
    }
    return tgdAnimChain(animations, options)
}
