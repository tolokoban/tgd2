/// <reference types="react" />
export type ColorNames = "neutral" | "primary" | "secondary" | "tertiary" | "input" | "error" | "valid";
export interface ColorStyleProps {
    color: ColorNames;
    tone?: number;
    opacity?: number;
}
export declare function styleColor({ color, tone, opacity, }: ColorStyleProps): React.CSSProperties;
//# sourceMappingURL=color.d.ts.map