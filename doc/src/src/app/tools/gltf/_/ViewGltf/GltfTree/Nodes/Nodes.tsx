/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { IconTree } from "@tolokoban/ui"
import type{ TgdDataGlb } from "@tolokoban/tgd"
import type{ Action } from "../../types"

import { ViewNode } from "../Node"
import { Expander } from "../Expander"

export type ViewNodesProps = {
    data: TgdDataGlb
    onAction?(action: Action): void
}

export function ViewNodes(props: ViewNodesProps): JSX.Element {
    const nodes = props.data.getNodes()
    if (nodes.length===0) return <p>No nodes.</p>

    return (
        <Expander title="Nodes" icon={IconTree}>
            {nodes.map((_node, index) => (
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
