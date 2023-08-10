import { TgdTypeAssetImage } from "../../types";
export default class Asset {
    private readonly images;
    createImage(src: string): TgdTypeAssetImage;
    destroyImage(asset: TgdTypeAssetImage): void;
}
