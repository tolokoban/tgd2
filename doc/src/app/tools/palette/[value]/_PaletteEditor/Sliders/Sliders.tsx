import * as React from "react"
import { ArrayNumber3 } from "@tolokoban/tgd"
import {
    Theme,
    CommonProps,
    styleCommon,
    ViewSlider,
    IconLockOpen,
    IconLockClose,
} from "@tolokoban/ui"

import Styles from "./Sliders.module.css"

const $ = Theme.classNames

export type ViewSlidersProps = CommonProps & {
    label: string
    value: ArrayNumber3
    onChange(value: ArrayNumber3): void
}

export function ViewSliders(props: ViewSlidersProps): JSX.Element {
    const [lock, setLock] = React.useState(false)
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const [red, green, blue] = props.value
    const setRed = (v: number) => props.onChange([v, green, blue])
    const setGreen = (v: number) => props.onChange([red, v, blue])
    const setBlue = (v: number) => props.onChange([red, green, v])

    return (
        <div className={$.join(props.className, Styles.sliders)} style={style}>
            <header>
                <div>{props.label}</div>
                {lock ? (
                    <IconLockClose onClick={() => setLock(false)} />
                ) : (
                    <IconLockOpen onClick={() => setLock(true)} />
                )}
            </header>
            {lock && (
                <Slider
                    label="*"
                    value={(red + green + blue) / 3}
                    onChange={(v) => props.onChange([v, v, v])}
                />
            )}
            {!lock && (
                <>
                    <Slider label="R" value={red} onChange={setRed} />
                    <Slider label="G" value={green} onChange={setGreen} />
                    <Slider label="B" value={blue} onChange={setBlue} />
                </>
            )}
        </div>
    )
}

function Slider({
    label,
    value,
    onChange,
}: {
    label: string
    value: number
    onChange(value: number): void
}) {
    return (
        <div className={Styles.slider}>
            <label>{label}</label>
            <ViewSlider
                min={0}
                max={1}
                step={0.01}
                text={value.toFixed(2)}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
