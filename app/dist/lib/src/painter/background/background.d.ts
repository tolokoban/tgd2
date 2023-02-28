import Scene from "../../scene";
import { PainterInterface } from "../painter-interface";
export interface PainterBackgroundOptions {
    image: HTMLImageElement | HTMLCanvasElement;
    placeholder: [red: number, green: number, blue: number, alpha: number];
}
export default class PainterBackground implements PainterInterface {
    private readonly scene;
    private readonly options;
    private readonly texture;
    private readonly program;
    private readonly buffer;
    private readonly res;
    private readonly vao;
    private readonly uniTexture;
    private readonly uniScale;
    constructor(scene: Scene, options: Partial<PainterBackgroundOptions> & {
        image: HTMLImageElement | HTMLCanvasElement;
    });
    destroy(): void;
    paint(time: number, delay: number): void;
    update(time: number, delay: number): void;
}
//# sourceMappingURL=background.d.ts.map