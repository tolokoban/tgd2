import Scene from "../scene";
import { PainterInterface } from "./painter-interface";
export default class PainterArray implements PainterInterface {
    enabled: boolean;
    private readonly containers;
    private scene;
    add(...painters: PainterInterface[]): void;
    initialize(scene: Scene): Promise<boolean>;
    destroy(scene: Scene): void;
    draw(time: number, delay: number, scene: Scene): void;
    play(time: number, delay: number, scene: Scene): void;
}
