import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { TgdEasingFunction } from "@tolokoban/tgd"

import Styles from "./Plot.module.css"

const $ = Theme.classNames

export type ViewPlotProps = CommonProps & {
    name?: string
    easing: TgdEasingFunction
    onClick?(name: string): void
}

export function ViewPlot(props: ViewPlotProps) {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const { name, easing, onClick } = props
    const path = React.useMemo(() => {
        const coords: string[] = []
        const steps = 50
        for (let step = 0; step <= steps; step++) {
            const x = step / steps
            const y = easing(x)
            coords.push(`${x * 100},${100 - y * 100}`)
        }
        return `M${coords.join("L")}`
    }, [easing])

    return (
        <button
            className={$.join(props.className, Styles.plot, onClick && Styles.clickable)}
            style={style}
            onClick={() => onClick?.(name ?? "")}>
            {name && <strong>{name}</strong>}
            <svg viewBox="-50 -50 200 200">
                <rect x="0" y="0" width="100" height="100" fill="#111" stroke="none" />
                <path stroke="#666" strokeWidth=".5" d="M-100,0H300M-100,100H200M0,-100V300M100,-100V300" />
                <path d={path} className={Styles.line} />
                <g fill="#fff" stroke="none">
                    <text x="0" y="100" textAnchor="end" dominantBaseline="hanging">
                        0
                    </text>
                    <text x="100" y="0">
                        1
                    </text>
                </g>
            </svg>
        </button>
    )
}
