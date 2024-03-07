import React from "react"
import { Theme } from "@tolokoban/ui"
import Style from "./Link.module.css"
import { MainSection } from "../TreeView"

const $ = Theme.classNames

export interface LinkProps {
    className?: string
    type: string
    id: number
    onClick(section: MainSection): void
    children: React.ReactNode
}

export default function Link({
    className,
    type,
    id,
    onClick,
    children,
}: LinkProps) {
    return (
        <button
            className={$.join(className, Style.Link, Style[type])}
            key={`${type}#${id}`}
            onClick={() => onClick({ type, id })}
        >
            <div>{children}</div>
        </button>
    )
}
