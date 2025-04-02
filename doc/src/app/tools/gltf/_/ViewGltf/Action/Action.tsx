import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"
import { Action } from "../types"

import Styles from "./Action.module.css"
import { ViewVerbatim } from "@/app/tools/gltf/_/ViewGltf/Action/Verbatim"
import { ViewActionNode } from "./ActionNode"
import { ViewActionImage } from "./ActionImage"

const $ = Theme.classNames

export type ViewActionProps = CommonProps & {
    data: TgdParserGLTransfertFormatBinary
    action: Action
}

export function ViewAction(props: ViewActionProps): JSX.Element {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }

    switch (props.action.type) {
        case "verbatim":
            return <ViewVerbatim data={props.data} />
        case "node":
            return (
                <ViewActionNode data={props.data} index={props.action.index} />
            )
        case "image":
            return (
                <ViewActionImage data={props.data} index={props.action.index} />
            )
        default:
            return (
                <div
                    className={$.join(props.className, Styles.action)}
                    style={style}
                >
                    Don't know what to do with this action:{" "}
                    <pre>{JSON.stringify(props.action, null, "  ")}</pre>.
                </div>
            )
    }
}
