import { TgdPainter } from "../painter";
import { TgdScene } from "../../scene";
export declare class TgdPainterSprites implements TgdPainter {
    private readonly gl;
    private readonly image;
    private readonly vao;
    private readonly prg;
    constructor(gl: WebGL2RenderingContext, image: HTMLImageElement | HTMLCanvasElement);
    initialize(scene: TgdScene): Promise<boolean>;
    destroy(): void;
    paint(time: number, delay: number): void;
    update(time: number, delay: number): void;
}
