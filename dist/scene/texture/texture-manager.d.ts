import { TgdTexture, TgdAssetImage } from "./../../types";
export interface TextureOptions {
    placeholder: [red: number, green: number, green: number, alpha: number];
}
export default class TextureManager {
    private readonly gl;
    private readonly textures;
    constructor(gl: WebGL2RenderingContext);
    createFromAsset(asset: TgdAssetImage, { placeholder }?: Partial<TextureOptions>): TgdTexture;
    destroy({ key }: TgdTexture): void;
}
