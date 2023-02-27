import Scene from "../scene";
import { PainterInterface } from "./painter-interface";
export default class PainterLogic implements PainterInterface {
    private readonly logicFunction;
    constructor(logicFunction: (time: number, delay: number) => void);
    initialize(scene: Scene): Promise<boolean>;
    destroy(): void;
    draw(time: number, delay: number): void;
    play(time: number, delay: number): void;
}
