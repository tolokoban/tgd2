import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"

import { PALETTES } from "./consts"
import { ViewPaletteButton } from "./PaletteButton"

import Styles from "./Palette.module.css"

const $ = Theme.classNames

export type ViewPaletteProps = CommonProps & {}

export function ViewPalette(props: ViewPaletteProps) {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    return (
        <div className={$.join(props.className, Styles.palette)} style={style}>
            <h1>Palette function: f(t) = a + b ⋅ cos( 2π(c⋅t+d) )</h1>
            <div className={Styles.palettes}>
                {PALETTES.map(({ name, a, b, c, d }) => (
                    <ViewPaletteButton
                        key={name}
                        name={name}
                        a={a}
                        b={b}
                        c={c}
                        d={d}
                    />
                ))}
            </div>
            <p>Click a palette to edit</p>
        </div>
    )
}
