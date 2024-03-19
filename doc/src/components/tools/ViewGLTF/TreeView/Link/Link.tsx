import { Theme } from "@tolokoban/ui"
import React from "react"

import { MainSection } from "../types"

import Style from "./Link.module.css"

const $ = Theme.classNames

export interface LinkProps {
    className?: string
    section: MainSection
    onClick(section: MainSection): void
    children: React.ReactNode
}

export default function Link({
    className,
    section,
    onClick,
    children,
}: LinkProps) {
    return (
        <button
            className={$.join(className, Style.Link, Style[section.type])}
            key={JSON.stringify(section)}
            onClick={() => onClick(section)}
        >
            <div>{children}</div>
        </button>
    )
}
