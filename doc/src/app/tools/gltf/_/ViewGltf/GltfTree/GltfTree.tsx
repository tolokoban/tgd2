import * as React from "react"

import {
    Theme,
    CommonProps,
    styleCommon,
    ViewButton,
    ViewPanel,
} from "@tolokoban/ui"
import { TgdDataGlb } from "@tolokoban/tgd"

import { Expander } from "./Expander"
import { Action } from "../types"

import Styles from "./GltfTree.module.css"
import { ViewNodes } from "./Nodes"
import { ViewImages } from "./Images"
import { ViewLights } from "./Lights"
import { ViewScenes } from "./Scenes"

const $ = Theme.classNames

export type ViewGltfTreeProps = CommonProps & {
    data: TgdDataGlb
    onAction(action: Action): void
}

export function ViewGltfTree(props: ViewGltfTreeProps): JSX.Element {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const go = (action: Action) => () => props.onAction(action)

    return (
        <div className={$.join(props.className, Styles.gltfTree)} style={style}>
                <ViewButton
                    variant="text"
                    color="secondary-5"
                    fullwidth
                    onClick={go({ type: "verbatim" })}
                >
                    Show verbatim content
                </ViewButton>
                <ViewScenes data={props.data} onAction={props.onAction} />
                <ViewNodes data={props.data} onAction={props.onAction} />
                <ViewImages data={props.data} onAction={props.onAction} />
                <ViewLights data={props.data} onAction={props.onAction} />
            <hr />
            <a href="https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html">
                GLTF 2.0 Specification
            </a>
        </div>
    )
}

function formatNumber(value: number) {
    const fmt = new Intl.NumberFormat()
    return fmt.format(value)
}
