export abstract class TgdPainter {
    abstract delete(): void
    abstract paint(time: number, delay: number): void

    /**
     * This method will be called after all the `paint()`
     * in the current group of painters.
     *
     * Most of the time, it is beter to put your logic in
     * the `paint()` method because you will have CPU and GPU
     * working in parallel.
     * But if you need to wait for all the paintings to be done,
     * this is the method to use.
     *
     * @param time Timestamp of the current frame (in ms).
     * @param delay Time elapsed since the previous frame (in ms).
     */
    update(time: number, delay: number): void {
        console.log("Fuck!")
    }
}
