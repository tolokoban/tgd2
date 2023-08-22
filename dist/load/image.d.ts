export declare class TgdLoadImage {
    static load(url: string): Promise<HTMLImageElement | null>;
    static loadInCanvas(url: string): Promise<HTMLCanvasElement | null>;
}
