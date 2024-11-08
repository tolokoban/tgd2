import React from "react"
import { Theme, ViewPanel } from "@tolokoban/ui"

import Style from "./Article.module.css"

const $ = Theme.classNames

export interface ArticleProps {
    className?: string
    children: React.ReactNode
}

export default function Article({ className, children }: ArticleProps) {
    return (
        <ViewPanel
            className={$.join(className, Style.article)}
            display="grid"
            gridTemplateColumns="1fr min(48vw, 400px) min(48vw, 400px) 1fr"
            gap="0"
        >
            {children}
        </ViewPanel>
    )
}
