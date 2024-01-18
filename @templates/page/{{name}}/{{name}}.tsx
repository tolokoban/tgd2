import React from "react"
import Theme from "@/ui/theme"
import Style from "./{{name}}.module.css"

const $ = Theme.classNames

export type /*{{name}}*/ Props = {
    className?: string
}

export default function (/*{{name}}*/ { className }: /*{{name}}*/ Props) {
    return <div className={$.join(className, Style["{{name}}"])}></div>
}
