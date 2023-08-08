export default class Color {
    readonly cssValue: string;
    private color;
    static isLight(color: string | Color): boolean;
    static fromRGB(red: number, green: number, blue: number, alpha?: number): Color;
    static fromLCH(lightness: number, chroma: number, hue: number, alpha?: number): Color;
    static makeGradient(size: number, ...from: Array<string | Color>): Color[];
    static mix(value: number, ...from: Array<string | Color>): Color;
    constructor(cssValue: string);
    isLight(): boolean;
    get lch(): [lightness: number, chroma: number, hue: number];
    get lcha(): [
        lightness: number,
        chroma: number,
        hue: number,
        alpha: number
    ];
    get hue(): number;
    get alpha(): number;
}
//# sourceMappingURL=color.d.ts.map