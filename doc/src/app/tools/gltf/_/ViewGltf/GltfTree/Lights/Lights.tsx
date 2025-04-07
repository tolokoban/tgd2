import * as React from "react"

import { IconImage, IconLightOff, Theme } from "@tolokoban/ui"
import { TgdDataGlb } from "@tolokoban/tgd"

import { Expander } from "../Expander"
import { Action } from "../../types"

import Styles from "./Lights.module.css"

const $ = Theme.classNames

export type ViewLightsProps = {
    className?: string
    data: TgdDataGlb
    onAction?(action: Action): void
}

export function ViewLights({
    className,
    data,
    onAction,
}: ViewLightsProps): JSX.Element {
    const lights = figureLights(data)
    return (
        <Expander className={$.join(className, Styles.images)} title="Lights" icon={IconLightOff}>
        </Expander>
    )
}

function figureLights(data: TgdDataGlb) {}

