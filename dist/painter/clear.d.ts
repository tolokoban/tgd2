import scene from "../scene/scene";
import { PainterInterface } from "./painter-interface";
export interface PainterClearOptions {
    color?: [red: number, green: number, blue: number, alpha: number];
}
export default class PainterClear implements PainterInterface {
    private readonly options;
    private gl;
    private clearMask;
    constructor(options: PainterClearOptions);
    setClearColor(red: number, green: number, blue: number, alpha: number): void;
    initialize(scene: scene): Promise<boolean>;
    destroy(): void;
    draw(_time: number, _delay: number): void;
    play(_time: number, _delay: number): void;
}
