export interface TgdAnimation {
    /**
     * This is only used for your convenience as a debug tool.
     */
    name?: string
    /**
     * @param alpha Value between 0 and 1
     */
    action(this: void, alpha: number): void
    /**
     * Duration of the animation in seconds.
     */
    duration: number
    /**
     * Number of seconds to wait before starting the animation.
     */
    delay?: number
    /**
     * Number of times the animation should repeat.
     * Can be `Infinity`.
     * Default to 1.
     */
    repeat?: number
    /**
     * Default to linear.
     */
    easingFunction?(this: void, x: number): number
    /**
     * Function to call when the animation is over.
     */
    onEnd?(this: void): void
}
