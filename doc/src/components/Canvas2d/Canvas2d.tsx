import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"

import Styles from "./Canvas2d.module.css"

const $ = Theme.classNames

export type ViewCanvas2dProps = CommonProps & {
    factory(): HTMLCanvasElement
}

export function ViewCanvas2d(props: ViewCanvas2dProps) {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const handleMount = (img: HTMLImageElement | null) => {
        if (!img) return

        const canvas = props.factory()
        img.width = canvas.width
        img.height = canvas.height
        img.src = canvas.toDataURL()
    }
    return (
        <div className={$.join(props.className, Styles.canvas2d)} style={style}>
            <img ref={handleMount} />
        </div>
    )
}
