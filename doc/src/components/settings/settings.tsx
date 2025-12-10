import React from "react"
import { IconGear, Theme } from "@tolokoban/ui"

import Slider from "./slider"

import styles from "./settings.module.css"

export type SettingsDefinitions = Record<
    string,
    {
        value: number
        label: string
        min?: number
        max?: number
    }
>

export interface SettingsProps<T extends SettingsDefinitions> {
    className?: string
    values: T
    onChange(values: T): void
}

export function Settings<T extends SettingsDefinitions>({
    className,
    values,
    onChange,
}: SettingsProps<T>) {
    const [show, setShow] = React.useState(false)
    const update = (key: string, value: number) => {
        const newValues = {
            ...values,
            [key]: {
                ...values[key],
                value,
            },
        }
        onChange(newValues)
    }

    return (
        <div
            className={Theme.classNames.join(
                className,
                styles.settings,
                show ? styles.show : styles.hide
            )}
        >
            <button type="button" onClick={() => setShow(!show)}>
                <IconGear />
            </button>
            <div>
                {Object.keys(values).map((key) => {
                    const item = values[key]
                    if (!item) return null

                    const min = item.min ?? 0
                    const max = item.max ?? 1
                    return (
                        <Slider
                            key={key}
                            label={item.label}
                            min={min}
                            max={max}
                            value={item.value}
                            onChange={(value) => update(key, value)}
                        />
                    )
                })}
            </div>
        </div>
    )
}
