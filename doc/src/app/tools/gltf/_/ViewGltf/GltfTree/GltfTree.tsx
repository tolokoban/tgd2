import * as React from "react"

import {
    Theme,
    CommonProps,
    styleCommon,
    ViewButton,
    ViewPanel,
} from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import { Expander } from "./Expander"
import { Action } from "../types"

import Styles from "./GltfTree.module.css"
import { ViewNodes } from "./Nodes"
import { ViewImages } from "./Images"

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
                <ViewImages data={props.data} onAction={props.onAction} />
            </Expander>
            <Expander title="Chunks" name="root">
                <ViewPanel
                    display="grid"
                    gridTemplateColumns="1fr 1fr 1fr"
                    fullwidth
                    gap="S"
                >
                    <b>Index</b>
                    <b>Type</b>
                    <b>Size (bytes)</b>
                    {props.data
                        .getChunkDetails()
                        .map(({ type, size }, index) => (
                            <>
                                <div>#{index}</div>
                                <div>{type}</div>
                                <div>{formatNumber(size)}</div>
                            </>
                        ))}
                </ViewPanel>
            </Expander>
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