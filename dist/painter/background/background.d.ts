import { TgdPainter } from "../painter";
import { TgdScene } from "../../scene";
export interface TgdPainterBackgroundOptions {
    image: HTMLImageElement | HTMLCanvasElement;
    placeholder: [red: number, green: number, blue: number, alpha: number];
}
export declare class TgdPainterBackground implements TgdPainter {
    private readonly scene;
    private readonly options;
    private readonly texture;
    private readonly program;
    private readonly buffer;
    private readonly res;
    private readonly vao;
    private readonly uniTexture;
    private readonly uniScale;
    private readonly uniScroll;
    private readonly uniZ;
    private readonly imageWidth;
    private readonly imageHeight;
    zoom: number;
    x: number;
    y: number;
    z: number;
    constructor(scene: TgdScene, options: Partial<TgdPainterBackgroundOptions> & {
        image: HTMLImageElement | HTMLCanvasElement;
    });
    destroy(): void;
    paint(time: number, delay: number): void;
    update(time: number, delay: number): void;
}
