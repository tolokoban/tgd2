import * as React from "react"

import { Theme } from "@tolokoban/ui"

import Styles from "./ViewGltf.module.css"
import { ViewPanel } from "@tolokoban/ui"

const $ = Theme.classNames

export type ViewViewGltfProps = {
    className?: string
}

export function ViewViewGltf(props: ViewViewGltfProps): JSX.Element {
    return (
        <ViewPanel
            className={$.join(props.className, Styles.viewgltf)}
            display="grid"
            gridTemplateColumns="auto 1fr"
            placeItems="stretch"
        >
            <ViewPanel></ViewPanel>
        </ViewPanel>
    )
}
