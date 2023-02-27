import { clamp } from "../util/calc"

export type ColorNames =
    | "neutral"
    | "primary"
    | "secondary"
    | "tertiary"
    | "input"
    | "error"
    | "valid"

export interface ColorStyleProps {
    color: ColorNames
    /**
     * Integer value from 1 (dark) to 9 (light).
     */
    tone?: number
    /**
     * Float value between 0.0 and 1.0.
     */
    opacity?: number
}

export function styleColor({
    color,
    tone = 5,
    opacity = 1,
}: ColorStyleProps): React.CSSProperties {
    const clampedTone = clamp(Math.round(tone), 1, 9)
    const toneSuffix = typeof tone === "number" ? `-${clampedTone}` : ""
    const opacitySuffix =
        opacity < 1 ? `-opacity-${clamp(Math.round(10 * opacity), 1, 9)}` : ""
    return {
        backgroundColor: `var(--theme-color-${color}${toneSuffix}${opacitySuffix})`,
        color: `var(--theme-color-on-${color}${toneSuffix})`,
    }
}
