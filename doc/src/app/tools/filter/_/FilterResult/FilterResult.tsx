import * as React from "react"

import {
    Theme,
    CommonProps,
    ViewStrip,
    ViewPanel,
    ViewSlider,
} from "@tolokoban/ui"

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
    const [uniEffectStrength, setUniEffectStrength] = React.useState(0)
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
        const manager = refManager.current
        if (!manager) return

        manager.uniEffectStrength = uniEffectStrength
    }, [uniEffectStrength])
    React.useEffect(() => {
        return () => {
            refManager.current?.destroy()
        }
    }, [])

    return (
        <ViewStrip
            className={$.join(props.className, Styles.filterresult)}
            template="*1*"
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
            <canvas ref={handleMount}></canvas>
            {error && (
                <pre>
                    {error.split("\n").map(line => {
                        if (line.startsWith("#####"))
                            return (
                                <span className={Styles.error}>
                                    {line}
                                    {"\n"}
                                </span>
                            )
                        return `${line}\n`
                    })}
                </pre>
            )}
            <ViewSlider
                min={0}
                max={1}
                step={0.01}
                value={uniEffectStrength}
                onChange={setUniEffectStrength}
            />
        </ViewStrip>
    )
}
