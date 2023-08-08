import React from "react"
import Style from "./Column.module.css"

export interface ColumnProps {
    align:
        | "marginLeft"
        | "halfLeft"
        | "center"
        | "halfRigh"
        | "marginRight"
        | "full"
    children: React.ReactNode
}

export default function Column({ align, children }: ColumnProps) {
    return <div className={Style[align]}>{children}</div>
}
