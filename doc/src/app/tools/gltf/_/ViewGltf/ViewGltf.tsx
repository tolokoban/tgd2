import * as React from "react"

import {
    IconImport,
    Theme,
    ViewInputFile,
    ViewPanel,
    ViewStrip,
} from "@tolokoban/ui"
import { TgdDataGlb } from "@tolokoban/tgd"

import { ViewGltfTree } from "./GltfTree"
import { useData } from "./hooks"
import { Action } from "./types"
import { ViewAction } from "./Action"

import Styles from "./ViewGltf.module.css"

const $ = Theme.classNames

export type ViewViewGltfProps = {
    className?: string
}

export function ViewGLTF(props: ViewViewGltfProps): JSX.Element {
    const [action, setAction] = React.useState<Action>({ type: "verbatim" })
    const [data, load] = useData()
    React.useState<TgdDataGlb | null>(null)
    function handleLoad(files: File[]): void {
        const [file] = files
        if (!file) return

        load(file)
    }

    return (
        <ViewStrip
            className={$.join(props.className, Styles.viewgltf)}
            template="*1"
            orientation="row"
            fullsize
            gap="8px"
        >
            <ViewStrip template="*1" orientation="column">
                <ViewPanel
                    color="primary-5"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    padding={["S", "M"]}
                    minWidth="300px"
                    gap="M"
                >
                    <div>GLB Viewer</div>
                    {data && <em>{Math.floor(data.fileSize / 1024)} Kb</em>}
                    <ViewInputFile accept="glb" onLoad={handleLoad}>
                        <IconImport />
                    </ViewInputFile>
                </ViewPanel>
                <ViewPanel
                    overflow="auto"
                    minHeight="auto"
                    color="neutral-5"
                    padding="S"
                >
                    {!data && <div>Loading...</div>}
                    {data && <ViewGltfTree data={data} onAction={setAction} />}
                </ViewPanel>
            </ViewStrip>
            {data && (
                <ViewPanel position="relative" overflow="auto" fullsize>
                    <ViewAction action={action} data={data} />
                </ViewPanel>
            )}
        </ViewStrip>
    )
}
