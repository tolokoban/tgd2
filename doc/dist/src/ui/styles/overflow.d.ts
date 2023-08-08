import * as React from "react";
export type OverflowValues = "visible" | "hidden" | "clip" | "scroll" | "auto";
export interface OverflowStyleProps {
    cssOverflow?: OverflowValues | [overflowX: OverflowValues, overflowY: OverflowValues];
    cssOverflowX?: OverflowValues;
    cssOverflowY?: OverflowValues;
}
export declare function styleOverflow({ cssOverflow: overflow, cssOverflowX: overflowX, cssOverflowY: overflowY, }: OverflowStyleProps): React.CSSProperties;
//# sourceMappingURL=overflow.d.ts.map