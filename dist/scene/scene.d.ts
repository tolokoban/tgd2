import { PainterInterface } from "./../painter/painter-interface";
import Asset from "./asset";
import TextureManager from "./texture/texture-manager";
import ProgramManager from "./program/program-manager";
export default class Scene {
    readonly canvas: HTMLCanvasElement;
    readonly gl: WebGL2RenderingContext;
    readonly asset: Asset;
    readonly program: ProgramManager;
    readonly texture: TextureManager;
    private readonly painters;
    private isAnimated;
    private lastCanvasWidth;
    private lastCanvasHeight;
    private lastTime;
    private _screenRatio;
    constructor(canvas: HTMLCanvasElement, options?: WebGLContextAttributes);
    get screenRatio(): number;
    private set screenRatio(value);
    get width(): number;
    get height(): number;
    get animate(): boolean;
    set animate(value: boolean);
    addPainter(...painters: PainterInterface[]): Promise<void>;
    draw(): void;
    private readonly paint;
    initialize(): Promise<boolean>;
    destroy(): void;
}
