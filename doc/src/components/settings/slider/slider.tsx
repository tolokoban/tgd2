import React from "react"
import { Theme } from "@tolokoban/ui"

import styles from "./slider.module.css"

export interface SliderProps {
    className?: string
    label: string
    min: number
    max: number
    value: number
    onChange(value: number): void
}

export default function Slider({
    className,
    label,
    min,
    max,
    value,
    onChange,
}: SliderProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = parseFloat(event.target.value)
        onChange(newValue)
    }

    return (
        <div className={Theme.classNames.join(className, styles.slider)}>
            <div>
                <div>{label}</div>
                <div>
                    <strong>{value.toFixed(2)}</strong>
                </div>
            </div>
            <input
                type="range"
                step={(max - min) / 100}
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
