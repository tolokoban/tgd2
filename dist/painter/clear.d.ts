import { TgdScene } from "../scene";
import { TgdPainter } from "./painter";
export interface PainterClearOptions {
    color: [red: number, green: number, blue: number, alpha: number];
    depth: number;
}
export declare class TgdPainterClear implements TgdPainter {
    private readonly scene;
    private clearMask;
    red: number;
    green: number;
    blue: number;
    alpha: number;
    depth: number;
    constructor(scene: TgdScene, options: Partial<PainterClearOptions>);
    destroy(): void;
    paint(_time: number, _delay: number): void;
    update(_time: number, _delay: number): void;
}
