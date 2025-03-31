import * as React from "react"

import { Theme, CommonProps, styleCommon, ViewButton } from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import { Expander } from "./Expander"
import { Action } from "../types"

import Styles from "./GltfTree.module.css"
import { ViewNodes } from "./Nodes"

const $ = Theme.classNames

export type ViewGltfTreeProps = CommonProps & {
    data: TgdParserGLTransfertFormatBinary
    onAction(action: Action): void
}

export function ViewGltfTree(props: ViewGltfTreeProps): JSX.Element {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const go = (action: Action) => () => props.onAction(action)

    return (
        <div className={$.join(props.className, Styles.gltfTree)} style={style}>
            <Expander title="GLTF" name="root">
                <ViewButton
                    variant="text"
                    color="secondary-5"
                    fullwidth
                    onClick={go({ type: "verbatim" })}
                >
                    Show verbatim content
                </ViewButton>
                <ViewNodes data={props.data} onAction={props.onAction} />
            </Expander>
            <Expander title="Chunks" name="root"></Expander>
        </div>
    )
}
