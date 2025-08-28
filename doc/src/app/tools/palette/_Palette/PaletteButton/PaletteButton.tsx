import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { ArrayNumber3 } from "@tolokoban/tgd"

import { ViewPalettePreviewHorizontal } from "../../PalettePreviewHorizontal"

import Styles from "./PaletteButton.module.css"

const $ = Theme.classNames

export type ViewPaletteButtonProps = CommonProps & {
    name: string
    a: ArrayNumber3
    b: ArrayNumber3
    c: ArrayNumber3
    d: ArrayNumber3
}

export function ViewPaletteButton(props: ViewPaletteButtonProps): JSX.Element {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const handleClick = () => editPalette(props)

    return (
        <button
            className={$.join(props.className, Styles.paletteButton)}
            type="button"
            style={style}
            onClick={handleClick}
        >
            <h2>{props.name}</h2>
            <ViewPalettePreviewHorizontal
                className={Styles.preview}
                a={props.a}
                b={props.b}
                c={props.c}
                d={props.d}
            />
        </button>
    )
}

function editPalette({
    a,
    b,
    c,
    d,
}: {
    a: ArrayNumber3
    b: ArrayNumber3
    c: ArrayNumber3
    d: ArrayNumber3
}) {
    location.hash = `#/tools/palette/${hex(a)}${hex(b)}${hex(c)}${hex(d)}`
}

function hex(arr: number[]) {
    return arr
        .map((v) =>
            Math.round(0xff * v)
                .toString(16)
                .toUpperCase()
                .padStart(2, "0")
        )
        .join("")
}
