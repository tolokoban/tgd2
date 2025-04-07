import * as React from "react"

import { TgdDataGlb, TgdFormatGltfNode } from "@tolokoban/tgd"
import {
    CommonProps,
    Icon,
    IconBrandBlender,
    IconCamera,
    IconLightOff,
    IconMesh,
    IconTree,
    styleCommon,
    Theme,
} from "@tolokoban/ui"
import { Action, isTypeCamera, isTypeLight, isTypeMesh } from "../../../types"
import Styles from "./Node.module.css"
import { Expander } from "../../Expander"
import { isNumber, isType } from "@tolokoban/type-guards"

const $ = Theme.classNames

export type ViewNodeProps = CommonProps & {
    name?: string
    data: TgdDataGlb
    index: number
    onAction?(action: Action): void
}

export function ViewNode(props: ViewNodeProps) {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const node = props.data.gltf.nodes?.[props.index]
    if (!node) return null

    const name = node.name ?? `#${props.index}`
    const icon = figureIcon(node)
    const handleClick = () => {
        ;() => console.log(name, node)
        props.onAction?.({
            type: "node",
            index: props.index,
        })
    }
    return (
        <Expander
            className={$.join(props.className, Styles.node)}
            name={props.name}
            style={style}
            title={name}
            onClick={handleClick}
            icon={icon}
        >
            {Array.isArray(node.children) &&
                node.children.map(nodeIndex => (
                    <ViewNode
                        key={`#${nodeIndex}`}
                        data={props.data}
                        index={nodeIndex}
                        onAction={props.onAction}
                    />
                ))}
        </Expander>
    )
}

function figureIcon(node: TgdFormatGltfNode): Icon {
    if (isTypeCamera(node)) return IconCamera
    if (isTypeMesh(node)) return IconMesh
    if (isTypeLight(node)) return IconLightOff
    if (Array.isArray(node.children)) return IconTree
    return IconBrandBlender
}
