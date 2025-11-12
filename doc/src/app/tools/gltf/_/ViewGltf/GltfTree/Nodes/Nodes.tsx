import * as React from "react"

import { Theme, CommonProps, styleCommon, IconTree } from "@tolokoban/ui"
import { TgdDataGlb } from "@tolokoban/tgd"
import { Action } from "../../types"

import Styles from "./Nodes.module.css"
import { ViewNode } from "../Node"
import { Expander } from "../Expander"

const $ = Theme.classNames

export type ViewNodesProps = {
    data: TgdDataGlb
    onAction?(action: Action): void
}

export function ViewNodes(props: ViewNodesProps) {
    const { nodes } = props.data.json
    if (!nodes) return <p>No nodes.</p>

    return (
        <Expander title="Nodes" icon={IconTree}>
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
