import * as React from "react"

import { Theme, ViewButton, ViewPanel } from "@tolokoban/ui"
import { TgdDataGlb } from "@tolokoban/tgd"

import Styles from "./Verbatim.module.css"
import { ViewJson } from "@/components/Json"

const $ = Theme.classNames

export type ViewVerbatimProps = {
    className?: string
    data: TgdDataGlb
}

export function ViewActionVerbatim(props: ViewVerbatimProps) {
    return (
        <ViewPanel
            className={$.join(props.className, Styles.verbatin)}
            overflow="auto"
            fullsize
            color="neutral-1"
            padding="S"
        >
            <ViewJson value={props.data} />
        </ViewPanel>
    )
}
