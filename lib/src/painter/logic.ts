import { TgdScene } from "../scene"
import { TgdPainter } from "./painter"

/**
 * This painter paints nothing but execute some logic at every frame.
 */
export class TgdPainterLogic implements TgdPainter {
    constructor(
        private readonly logicFunction: (time: number, delay: number) => void
    ) {}

    destroy(): void {}

    paint(time: number, delay: number): void {}

    update(time: number, delay: number): void {
        this.logicFunction(time, delay)
    }
}
