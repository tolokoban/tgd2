import * as React from "react"

import { Theme, ViewButton, ViewPanel } from "@tolokoban/ui"
import { TgdDataGlb } from "@tolokoban/tgd"

import Styles from "./Verbatim.module.css"

const $ = Theme.classNames

export type ViewVerbatimProps = {
    className?: string
    data: TgdDataGlb
}

export function ViewActionVerbatim(props: ViewVerbatimProps): JSX.Element {
    return (
        <ViewPanel
            className={$.join(props.className, Styles.verbatin)}
            overflow="auto"
            fullsize
            color="neutral-1"
            padding="S"
        >
            <ViewButton onClick={() => console.log(props.data.gltf)}>
                Write to console
            </ViewButton>
            <pre>{JSON.stringify(props.data.gltf, null, "  ")}</pre>
        </ViewPanel>
    )
}
