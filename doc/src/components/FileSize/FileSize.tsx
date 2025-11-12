import type * as React from "react"

import { Theme, type CommonProps, styleCommon } from "@tolokoban/ui"

import Styles from "./FileSize.module.css"

const $ = Theme.classNames

export type ViewFileSizeProps = CommonProps & {
    value: number
}

export function ViewFileSize(props: ViewFileSizeProps) {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const [size, unit] = resolveUnit(props.value)

    return (
        <div
            className={$.join(props.className, Styles.fileSize, Styles[unit])}
            style={style}
        >
            {Math.round(size)} {unit}
        </div>
    )
}

function resolveUnit(value: number): [size: number, unit: string] {
    if (value < 1024) return [value, "bytes"]
    if (value < 1024 * 1024) return [value / 1024, "Kb"]
    return [value / (1024 * 1024), "Mb"]
}
