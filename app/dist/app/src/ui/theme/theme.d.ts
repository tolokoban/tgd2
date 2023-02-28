export type ThemeColor = string[] | {
    hue: number | [number, number];
    chroma?: number | [number, number];
    lightness?: number | [number, number];
};
interface ThemeSettingsColors {
    textLight: string;
    textDark: string;
    primary: ThemeColor;
    secondary: ThemeColor;
    tertiary: ThemeColor;
    neutral: ThemeColor;
    input: string;
    error: string;
    valid: string;
}
export interface ThemeSettings {
    colors?: Partial<ThemeSettingsColors>;
}
export default class Theme {
    private readonly vars;
    constructor({ colors }?: ThemeSettings);
    private add;
    private addColor;
    private addColorVars;
    apply(element?: HTMLElement | SVGElement): void;
}
export {};
//# sourceMappingURL=theme.d.ts.map