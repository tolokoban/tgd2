import type * as React from "react"

import {
    Theme,
    type CommonProps,
    styleCommon,
    ViewPanel,
    ViewStrip,
    ViewTabs,
    ViewTab,
} from "@tolokoban/ui"
import type { TgdDataGlb } from "@tolokoban/tgd"

import { isTypeCamera } from "../../types"
import { ViewActionNodeTransfo } from "./ActionNodeTransfo"
import { ViewActionNodeCamera } from "./ActionNodeCamera"

import Styles from "./ActionNode.module.css"
import { ViewActionNodeRender } from "./ActionNodeRender"
import { isNumber } from "@tolokoban/type-guards"
import { ViewActionNodeMesh } from "./ActionNodeMesh"

const $ = Theme.classNames

export type ViewActionNodeProps = CommonProps & {
    data: TgdDataGlb
    index: number
}

export function ViewActionNode(props: ViewActionNodeProps) {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const node = props.data.getNode(props.index)
    if (!node) return null

    return (
        <ViewStrip
            orientation="column"
            template="-1"
            className={$.join(props.className, Styles.actionNode)}
            fullsize
        >
            <ViewPanel
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="M"
                color="primary-5"
                padding="S"
            >
                <div>
                    Node #{props.index}:{" "}
                    <b>{node.name ?? <em>anonymous</em>}</b>
                </div>
            </ViewPanel>
            <ViewPanel style={style}>
                <ViewTabs fullsize>
                    <ViewTab key="render" label="3D View">
                        {!isTypeCamera(node) && (
                            <ViewActionNodeRender
                                data={props.data}
                                node={node}
                            />
                        )}
                    </ViewTab>
                    <ViewTab key="camera" label="Camera">
                        {isTypeCamera(node) && (
                            <ViewActionNodeCamera
                                data={props.data}
                                node={node}
                            />
                        )}
                    </ViewTab>
                    <ViewTab key="transfo" label="Transformation">
                        <ViewActionNodeTransfo node={node} />
                    </ViewTab>
                    <ViewTab key="mesh" label="Mesh">
                        {isNumber(node.mesh) && (
                            <ViewActionNodeMesh
                                data={props.data}
                                meshIndex={node.mesh}
                            />
                        )}
                    </ViewTab>
                    <ViewTab key="verbatim" label="Verbatim">
                        <pre>{JSON.stringify(node, null, "  ")}</pre>
                    </ViewTab>
                </ViewTabs>
            </ViewPanel>
        </ViewStrip>
    )
}
