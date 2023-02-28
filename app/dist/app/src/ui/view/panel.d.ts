import React from "react";
import { Circumference } from "../styles/crcumference";
import { ColorStyleProps } from "../styles/color";
import { OverflowStyleProps } from "../styles/overflow";
import { SpaceStyleProps } from "../styles/space";
export type PanelProps = {
    className?: string;
    children: React.ReactNode;
    borderRadius?: Circumference;
} & ColorStyleProps & SpaceStyleProps & OverflowStyleProps;
declare function Panel(props: PanelProps): JSX.Element;
export declare function makeCustomPanel(defaultProps: Partial<PanelProps>): (props: PanelProps) => JSX.Element;
export default Panel;
//# sourceMappingURL=panel.d.ts.map