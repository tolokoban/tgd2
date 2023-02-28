import { PainterInterface } from "./../painter/painter-interface";
import Asset from "./asset";
import TextureHelper from "./helpers/texture-helper";
import Resources from "./resources";
export default class Scene {
    readonly canvas: HTMLCanvasElement;
    readonly gl: WebGL2RenderingContext;
    readonly asset: Asset;
    readonly texture: TextureHelper;
    private readonly painters;
    private isAnimated;
    private lastCanvasWidth;
    private lastCanvasHeight;
    private lastTime;
    private _screenRatio;
    constructor(canvas: HTMLCanvasElement, options?: WebGLContextAttributes);
    getResources(id: string): Resources;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
    get screenRatio(): number;
    private set screenRatio(value);
    get width(): number;
    get height(): number;
    get animate(): boolean;
    set animate(value: boolean);
    addPainter(...painters: PainterInterface[]): Promise<void>;
    paint(): void;
    private readonly actualPaint;
    destroy(): void;
}
//# sourceMappingURL=scene.d.ts.map