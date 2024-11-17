import * as React from "react"

import { Theme, CommonProps, ViewStrip, ViewPanel } from "@tolokoban/ui"

import { FilterManager } from "./manager"

import Styles from "./FilterResult.module.css"

const $ = Theme.classNames

export type ViewFilterResultProps = CommonProps & {
    className?: string
    fragmentShader: string
    functions: string
}

export function ViewFilterResult(props: ViewFilterResultProps): JSX.Element {
    const [error, setError] = React.useState<string | null>(null)
    const refManager = React.useRef<FilterManager | null>(null)
    const handleMount = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return

        if (!refManager.current) {
            refManager.current = new FilterManager(canvas, setError)
        }
        refManager.current.setCode(props.fragmentShader, props.functions)
    }
    React.useEffect(() => {
        const manager = refManager.current
        if (!manager) return

        manager.setCode(props.fragmentShader, props.functions)
    }, [props.fragmentShader, props.functions])
    React.useEffect(() => {
        return () => {
            refManager.current?.destroy()
        }
    }, [])

    return (
        <ViewStrip
            className={$.join(props.className, Styles.filterresult)}
            template="*1"
            orientation="column"
            {...props}
        >
            <ViewPanel
                color="primary-5"
                height="2em"
                display="flex"
                justifyContent="start"
                alignItems="center"
                padding="M"
            >
                Filter output
            </ViewPanel>
            {!error && <canvas ref={handleMount}></canvas>}
        </ViewStrip>
    )
}
