import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { ArrayNumber3, ArrayNumber4, TgdFormatGltfNode } from "@tolokoban/tgd"

import CodeViewerView from "@/components/demo/CodeViewer"

import Styles from "./ActionNodeTransfo.module.css"
import { isType } from "@tolokoban/type-guards"

const $ = Theme.classNames

export type ViewActionNodeTransfoProps = CommonProps & {
    node: TgdFormatGltfNode
}

export function ViewActionNodeTransfo(props: ViewActionNodeTransfoProps) {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const code = [`const transfo = new TgdTransfo({`]
    if (isVec3(props.node.translation)) {
        code.push(`  position: [${props.node.translation.join(", ")}],`)
    }
    if (isVec4(props.node.rotation)) {
        code.push(`  orientation: [${props.node.rotation.join(", ")}],`)
    }
    if (isVec3(props.node.scale)) {
        code.push(`  position: [${props.node.scale.join(", ")}],`)
    }
    code.push(`})`)
    return (
        <div
            className={$.join(props.className, Styles.actionNodeTransfo)}
            style={style}
        >
            <CodeViewerView language="ts" value={code.join("\n")} />
        </div>
    )
}

function isVec3(data: unknown): data is ArrayNumber3 {
    return isType(data, ["array", "number", { min: 3, max: 3 }])
}

function isVec4(data: unknown): data is ArrayNumber4 {
    return isType(data, ["array", "number", { min: 4, max: 4 }])
}
