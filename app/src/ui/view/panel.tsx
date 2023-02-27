import React from "react"
import { Circumference } from "../styles/crcumference"
import { ColorStyleProps, styleColor } from "../styles/color"
import { OverflowStyleProps, styleOverflow } from "../styles/overflow"
import { SpaceStyleProps, styleSpace } from "../styles/space"

export type PanelProps = {
    className?: string
    children: React.ReactNode
    borderRadius?: Circumference
} & ColorStyleProps &
    SpaceStyleProps &
    OverflowStyleProps

function Panel(props: PanelProps) {
    const style: React.CSSProperties = {
        ...styleColor(props),
        ...styleSpace(props),
        ...styleOverflow(props),
    }
    return (
        <div className={props.className} style={style}>
            {props.children}
        </div>
    )
}

export function makeCustomPanel(
    defaultProps: Partial<PanelProps>
): (props: PanelProps) => JSX.Element {
    return (props: PanelProps) =>
        Panel({
            ...defaultProps,
            ...props,
        })
}

export default Panel
