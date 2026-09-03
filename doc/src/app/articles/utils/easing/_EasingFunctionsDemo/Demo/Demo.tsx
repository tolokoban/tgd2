import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { tgdCalcModulo, TgdEasingFunction } from "@tolokoban/tgd"

import Styles from "./Demo.module.css"

const $ = Theme.classNames

export type ViewDemoProps = CommonProps & {
    easing: TgdEasingFunction
}

export function ViewDemo(props: ViewDemoProps) {
    const refY = React.useRef<HTMLDivElement | null>(null)
    const refPin = React.useRef<HTMLDivElement | null>(null)
    const { easing } = props
    const raf = React.useCallback(
        (time: number) => {
            const pin = refPin.current
            const Y = refY.current
            if (!pin || !Y) return

            const x = tgdCalcModulo(time, 0, 2000) * 0.5e-3
            Y.style.left = `${100 * x}%`
            const y = easing(x)
            pin.style.left = `${100 * y}%`
        },
        [easing],
    )
    useRequestAnimationFrame(raf)
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    return (
        <div className={$.join(props.className, Styles.demo)} style={style}>
            <div className={Styles.bar} />
            <div className={Styles.y} ref={refY} />
            <div className={Styles.pin} ref={refPin} />
        </div>
    )
}

function useRequestAnimationFrame(callback: (time: number) => void) {
    React.useEffect(() => {
        let playing = true
        const anim = (time: number) => {
            if (!playing) return

            globalThis.requestAnimationFrame(anim)
            callback(time)
        }
        globalThis.requestAnimationFrame(anim)
        return () => {
            playing = false
        }
    }, [callback])
}
