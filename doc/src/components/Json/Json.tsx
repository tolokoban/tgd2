import * as React from "react"

import { Theme, type CommonProps, styleCommon, ViewButton } from "@tolokoban/ui"

import Styles from "./Json.module.css"

const $ = Theme.classNames

export type ViewJsonProps = CommonProps & {
    value: unknown
}

export function ViewJson(props: ViewJsonProps) {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const { value } = props

    return (
        <div className={$.join(props.className, Styles.json)} style={style}>
            <pre>{JSON.stringify(value, replacer, 2)}</pre>
            <ViewButton variant="outlined" onClick={() => console.log(value)}>
                Write to console
            </ViewButton>
        </div>
    )
}

function replacer(this: any, _key: string, value: any) {
    if (value instanceof Uint8Array)
        return `<<< Uint8Array( ${value.length} ) >>>`
    if (value instanceof Int8Array)
        return `<<< Int8Array( ${value.length} ) >>>`
    if (value instanceof Uint8ClampedArray)
        return `<<< Uint8ClampedArray( ${value.length} ) >>>`
    if (value instanceof Uint16Array)
        return `<<< Uint16Array( ${value.length} ) >>>`
    if (value instanceof Int16Array)
        return `<<< Int16Array( ${value.length} ) >>>`
    if (value instanceof Uint32Array)
        return `<<< Uint32Array( ${value.length} ) >>>`
    if (value instanceof Int32Array)
        return `<<< Int32Array( ${value.length} ) >>>`
    if (value instanceof Float16Array)
        return `<<< Float16Array( ${value.length} ) >>>`
    if (value instanceof Float32Array)
        return `<<< Float32Array( ${value.length} ) >>>`
    return value
}
