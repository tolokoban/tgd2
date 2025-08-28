import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { ArrayNumber3 } from "@tolokoban/tgd"

import Styles from "./PalettePreviewDisk.module.css"
import { PalettePreviewDiskPainter } from "./painter"

const $ = Theme.classNames

export type ViewPalettePreviewDiskProps = CommonProps & {
    a: ArrayNumber3
    b: ArrayNumber3
    c: ArrayNumber3
    d: ArrayNumber3
}

export function ViewPalettePreviewDisk(
    props: ViewPalettePreviewDiskProps
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
            className={$.join(props.className, Styles.palettePreviewDisk)}
            style={style}
        ></canvas>
    )
}

function usePainter() {
    const ref = React.useRef<PalettePreviewDiskPainter | null>(null)
    if (!ref.current) ref.current = new PalettePreviewDiskPainter()
    return ref.current
}
