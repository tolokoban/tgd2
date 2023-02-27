import { Circumference, convertCircumferenceIntoString } from "./crcumference"

export interface SpaceStyleProps {
    cssBorderRadius?: Circumference
    cssMargin?: Circumference
    cssPadding?: Circumference
}

export function styleSpace({
    cssBorderRadius: borderRadius,
    cssMargin: margin,
    cssPadding: padding,
}: SpaceStyleProps) {
    const style: React.CSSProperties = {}
    if (borderRadius)
        style.borderRadius = convertCircumferenceIntoString(borderRadius)
    if (margin) style.margin = convertCircumferenceIntoString(margin)
    if (padding) style.padding = convertCircumferenceIntoString(padding)
    return style
}
