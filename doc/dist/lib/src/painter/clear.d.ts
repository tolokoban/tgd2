import Scene from "../scene/scene";
import { PainterInterface } from "./painter-interface";
export interface PainterClearOptions {
    color: [red: number, green: number, blue: number, alpha: number];
}
export default class PainterClear implements PainterInterface {
    private readonly scene;
    private clearMask;
    private readonly options;
    constructor(scene: Scene, options: Partial<PainterClearOptions>);
    setClearColor(red: number, green: number, blue: number, alpha: number): void;
    destroy(): void;
    paint(_time: number, _delay: number): void;
    update(_time: number, _delay: number): void;
}
//# sourceMappingURL=clear.d.ts.map