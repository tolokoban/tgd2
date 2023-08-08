import { TgdScene } from "../scene";
import { TgdPainter } from "./painter";
export interface PainterClearOptions {
    color: [red: number, green: number, blue: number, alpha: number];
}
export declare class TgdPainterClear implements TgdPainter {
    private readonly scene;
    private clearMask;
    private readonly options;
    constructor(scene: TgdScene, options: Partial<PainterClearOptions>);
    setClearColor(red: number, green: number, blue: number, alpha: number): void;
    destroy(): void;
    paint(_time: number, _delay: number): void;
    update(_time: number, _delay: number): void;
}
