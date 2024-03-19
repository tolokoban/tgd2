import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"
import { Theme } from "@tolokoban/ui"
import React from "react"

import Link from "../Link"
import { MainSection } from "../types"

import Style from "./Primitive.module.css"

const $ = Theme.classNames

export interface PrimitiveProps {
    className?: string
    parser: TgdParserGLTransfertFormatBinary
    meshIndex: number
    attributes: { [key: string]: number }
    indices?: number
    onClick(section: MainSection): void
}

export default function Primitive({
    className,
    parser,
    meshIndex,
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
                    section={{
                        type: "att",
                        id: attributes[name],
                    }}
                    onClick={onClick}
                >
                    {name} <em>{getAccessorType(parser, attributes[name])}</em>
                </Link>
            ))}
            {typeof indices === "number" && (
                <Link
                    section={{
                        type: "att",
                        id: indices,
                    }}
                    onClick={onClick}
                >
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
