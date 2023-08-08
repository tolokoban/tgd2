export interface OptionsTexture2D {
    image: HTMLImageElement | HTMLCanvasElement;
    placeholder: [red: number, green: number, green: number, alpha: number];
}
export default class TextureHelper {
    private readonly gl;
    constructor(gl: WebGL2RenderingContext);
    bindTexture2D(gl: WebGL2RenderingContext, texture: WebGLTexture, { image, placeholder, }: Partial<OptionsTexture2D> & {
        image: HTMLImageElement | HTMLCanvasElement;
    }): void;
}
