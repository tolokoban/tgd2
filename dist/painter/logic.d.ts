import { TgdPainter } from "./painter";
export declare class TgdPainterLogic implements TgdPainter {
    private readonly logicFunction;
    constructor(logicFunction: (time: number, delay: number) => void);
    destroy(): void;
    paint(time: number, delay: number): void;
    update(time: number, delay: number): void;
}
