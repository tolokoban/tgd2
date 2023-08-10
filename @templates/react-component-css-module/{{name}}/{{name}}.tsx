import React from "react"
import { Theme } from "@tolokoban/ui"
import Style from "./{{name}}.module.css"

const $ = Theme.classNames

export interface {{name}}Props {
    className?: string
}

export default function {{name}}({ className }: {{name}}Props) {
    return <div className={$.join(className, Style.{{name}})}></div>
}