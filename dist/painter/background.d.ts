import Scene from "../scene";
import { TgdAssetImage } from "../types";
import { PainterInterface } from "./painter-interface";
export interface PainterBackgroundOptions {
    image: TgdAssetImage;
    placeholder: [red: number, green: number, blue: number, alpha: number];
}
export default class PainterBackground implements PainterInterface {
    private readonly options;
    private texture;
    constructor(options: Partial<PainterBackground> & {
        image: TgdAssetImage;
    });
    initialize(scene: Scene): Promise<boolean>;
    destroy(scene: Scene): void;
    draw(time: number, delay: number): void;
    play(time: number, delay: number): void;
}
