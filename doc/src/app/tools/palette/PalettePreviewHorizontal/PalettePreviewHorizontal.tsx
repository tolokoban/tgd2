import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { ArrayNumber3, TgdVec3, TgdVec4 } from "@tolokoban/tgd"

import Styles from "./PalettePreviewHorizontal.module.css"
import { PalettePreviewHorizontalPainter } from "./painter"

const $ = Theme.classNames

export type ViewPalettePreviewHorizontalProps = CommonProps & {
    a: ArrayNumber3
    b: ArrayNumber3
    c: ArrayNumber3
    d: ArrayNumber3
}

export function ViewPalettePreviewHorizontal(
    props: ViewPalettePreviewHorizontalProps
): JSX.Element {
    const painter = usePainter()
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const { a, b, d, c } = props
    React.useEffect(() => {
        painter.a = a
        painter.b = b
        painter.c = c
        painter.d = d
        painter.paint()
    }, [a, b, c, d])
    return (
        <canvas
            ref={painter.setCanvas}
            className={$.join(props.className, Styles.palettePreviewHorizontal)}
            style={style}
        ></canvas>
    )
}

function usePainter() {
    const ref = React.useRef<PalettePreviewHorizontalPainter | null>(null)
    if (!ref.current) ref.current = new PalettePreviewHorizontalPainter()
    return ref.current
}
