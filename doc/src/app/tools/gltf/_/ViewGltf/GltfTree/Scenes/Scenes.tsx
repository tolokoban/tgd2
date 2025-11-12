import * as React from "react"

import { IconMap, Theme } from "@tolokoban/ui"
import { TgdDataGlb } from "@tolokoban/tgd"
import { Action } from "../../types"

import Styles from "./Scenes.module.css"
import { Expander } from "../Expander"
import { ViewNode } from "../Node"
import { ViewScene } from "./Scene"

const $ = Theme.classNames

export type ViewScenesProps = {
    data: TgdDataGlb
    onAction?(action: Action): void
}

export function ViewScenes(props: ViewScenesProps) {
    const { scenes } = props.data.json
    if (!scenes) return <p>No scenes.</p>

    return (
        <Expander title="Scenes" icon={IconMap}>
            {scenes.map((scene, index) => (
                <ViewScene
                    key={`Scene#${index}`}
                    data={props.data}
                    scene={scene}
                    title={scene.name ?? `Scene #${index}`}
                    index={index}
                    onAction={props.onAction}
                />
            ))}
        </Expander>
    )
}
