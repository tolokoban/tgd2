import React from "react"
import { Theme } from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import Style from "./Primitive.module.css"
import Link from "../Link"
import { MainSection } from "../TreeView"

const $ = Theme.classNames

export interface PrimitiveProps {
    className?: string
    parser: TgdParserGLTransfertFormatBinary
    attributes: { [key: string]: number }
    indices?: number
    onClick(section: MainSection): void
}

export default function Primitive({
    className,
    parser,
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
                    {name} <em>{getAccessorType(parser, attributes[name])}</em>
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

function getAccessorType(
    parser: TgdParserGLTransfertFormatBinary,
    accessorIndex: number
): React.ReactNode {
    const accessor = parser.gltf.accessors?.[accessorIndex]
    if (!accessor) return null

    return accessor.type
}
