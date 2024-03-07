import React from "react"
import { Theme } from "@tolokoban/ui"

import Style from "./Primitive.module.css"
import Link from "../Link"
import { MainSection } from "../TreeView"

const $ = Theme.classNames

export interface PrimitiveProps {
    className?: string
    attributes: { [key: string]: number }
    indices?: number
    onClick(section: MainSection): void
}

export default function Primitive({
    className,
    attributes,
    indices,
    onClick,
}: PrimitiveProps) {
    const names: string[] = Object.keys(attributes)
    return (
        <div className={$.join(className, Style.Primitive)}>
            {names.map(name => (
                <Link
                    key={name}
                    type="ATT"
                    id={attributes[name]}
                    onClick={onClick}
                >
                    {name}
                </Link>
            ))}
            {typeof indices === "number" && (
                <Link type="IDX" id={indices} onClick={onClick}>
                    Elements
                </Link>
            )}
        </div>
    )
}
