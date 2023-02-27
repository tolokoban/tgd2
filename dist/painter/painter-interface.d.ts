import Scene from "../scene/scene";
export interface PainterInterface {
    initialize(scene: Scene): Promise<boolean>;
    destroy(scene: Scene): void;
    draw(time: number, delay: number, scene: Scene): void;
    play(time: number, delay: number, scene: Scene): void;
}
