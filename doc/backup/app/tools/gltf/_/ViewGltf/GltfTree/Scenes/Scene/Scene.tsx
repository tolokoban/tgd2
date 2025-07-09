import * as React from "react"
import { IconMap, Theme } from "@tolokoban/ui"
import { TgdDataGlb, TgdFormatGltfScene } from "@tolokoban/tgd"

import { Action } from "../../../types"
import { Expander } from "../../Expander"
import { ViewNode } from "../../Node"

import Styles from "./Scene.module.css"

const $ = Theme.classNames

export type ViewSceneProps = {
    data: TgdDataGlb
    scene: TgdFormatGltfScene
    title: string
    index: number
    onAction?(action: Action): void
}

export function ViewScene({
    data,
    scene,
    title,
    index,
    onAction,
}: ViewSceneProps): JSX.Element {
    return (
        <Expander
            title={title}
            icon={IconMap}
            onClick={() => {
                onAction?.({
                    index,
                    type: "scene",
                })
            }}
        >
            {(scene.nodes ?? []).map((node, index) => (
                <ViewNode
                    key={`node#${index}`}
                    data={data}
                    index={index}
                    onAction={onAction}
                />
            ))}
        </Expander>
    )
}
