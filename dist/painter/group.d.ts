import { TgdPainter } from "./painter";
export declare class TgdPainterGroup implements TgdPainter {
    enabled: boolean;
    private readonly painters;
    constructor(painters?: TgdPainter[]);
    add(...painters: TgdPainter[]): void;
    destroy(): void;
    paint(time: number, delay: number): void;
    update(time: number, delay: number): void;
}
