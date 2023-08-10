export interface TgdTypeAssetImage {
    readonly type: "TgdAssetImage";
    readonly key: string;
    readonly image: HTMLImageElement;
    readonly isSuccessfullyLoaded: Promise<boolean>;
}
export interface TgdTypeTexture {
    readonly type: "TgdTexture";
    readonly key: string;
    readonly texture: WebGLTexture;
}
export interface TgdTypeProgram {
    readonly type: "TgdProgram";
    readonly key: string;
    readonly program: WebGLProgram;
    use(): void;
}
export type TgdTypeWebGlDrawMode = "POINTS" | "LINE_STRIP" | "LINE_LOOP" | "LINES" | "TRIANGLE_STRIP" | "TRIANGLE_FAN" | "TRIANGLES";
