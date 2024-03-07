import React from "react"
import { Theme } from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import Style from "./TreeView.module.css"
import Primitive from "./Primitive"
import MeshesBranch from "./MeshesBranch"
import ImagesBranch from "./ImagesBranch"

const $ = Theme.classNames

export interface MainSection {
    type: string
    id: number
}

export interface TreeViewProps {
    className?: string
    parser: TgdParserGLTransfertFormatBinary
    onClick(section: MainSection): void
}

export default function TreeView({
    className,
    parser,
    onClick,
}: TreeViewProps) {
    return (
        <div className={$.join(className, Style.TreeView)}>
            <MeshesBranch parser={parser} onClick={onClick} />
            <ImagesBranch parser={parser} onClick={onClick} />
        </div>
    )
}
