import { TgdPainter } from "./painter"

/**
 * This painter paints nothing but execute some logic at every frame.
 */
export class TgdPainterLogic extends TgdPainter {
    constructor(
        private readonly logicFunction: (time: number, delay: number) => void,
        options: Partial<{ name: string }> = {}
    ) {
        super()
        this.name = options.name ?? `Logic/${this.name}`
    }

    delete(): void {}

    paintAllLayers(time: number, delay: number): void {
        this.logicFunction(time, delay)
    }
}
