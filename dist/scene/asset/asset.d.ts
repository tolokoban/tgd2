import { TgdAssetImage } from "../../types";
export default class Asset {
    private readonly images;
    createImage(src: string): TgdAssetImage;
    destroyImage(asset: TgdAssetImage): void;
}
