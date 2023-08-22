export interface OptionsTexture2D {
    image: HTMLImageElement | HTMLCanvasElement | string;
    placeholder: [red: number, green: number, green: number, alpha: number];
    unit: number;
    minFilter: "LINEAR" | "NEAREST";
    magFilter: "LINEAR" | "NEAREST";
    wrapS: "REPEAT" | "CLAMP_TO_EDGE" | "MIRRORED_REPEAT";
    wrapT: "REPEAT" | "CLAMP_TO_EDGE" | "MIRRORED_REPEAT";
}
export default class TextureHelper {
    private readonly gl;
    constructor(gl: WebGL2RenderingContext);
    bindTexture2D(texture: WebGLTexture, { image, placeholder, unit, minFilter, magFilter, wrapS, wrapT, }: Partial<OptionsTexture2D> & {
        image: HTMLImageElement | HTMLCanvasElement | string;
    }): void;
}
