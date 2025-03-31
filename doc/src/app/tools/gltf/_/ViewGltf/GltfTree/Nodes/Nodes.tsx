import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"
import { Action } from "../../types"

import Styles from "./Nodes.module.css"
import { ViewNode } from "./Node/Node"
import { Expander } from "../Expander"

const $ = Theme.classNames

export type ViewNodesProps = {
    data: TgdParserGLTransfertFormatBinary
    onAction?(action: Action): void
}

export function ViewNodes(props: ViewNodesProps): JSX.Element {
    const { nodes } = props.data.gltf
    if (!nodes) return <p>No nodes.</p>

    return (
        <Expander title="Nodes">
            {nodes.map((node, index) => (
                <ViewNode
                    key={`#${index}`}
                    data={props.data}
                    index={index}
                    onAction={props.onAction}
                />
            ))}
        </Expander>
    )
}
