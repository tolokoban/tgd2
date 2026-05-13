import * as React from "react"

import Styles from "./Option.module.css"
import { ViewLabel, ViewOptions } from "@tolokoban/ui"

export type OptionProps = {
    label: string
    value: number
    onChange(value: number): void
    step: string[]
}

export function Option({ label, value, onChange, step }: OptionProps) {
    return (
        <div className={Styles.option}>
            <ViewLabel>{label}</ViewLabel>
            <ViewOptions value={`${value}`} onChange={(v) => onChange(parseFloat(v))}>
                {step.map((caption, index) => (
                    <div key={index}>{caption}</div>
                ))}
            </ViewOptions>
        </div>
    )
}
