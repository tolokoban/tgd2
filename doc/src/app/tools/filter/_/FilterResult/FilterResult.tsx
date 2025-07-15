import * as React from "react"

import {
    Theme,
    CommonProps,
    ViewPanel,
    ViewSlider,
    IconFullscreen,
} from "@tolokoban/ui"
import { tgdFullscreenToggle } from "@tolokoban/tgd"

import { FilterManager } from "./manager"

import Styles from "./FilterResult.module.css"

const $ = Theme.classNames

export type ViewFilterResultProps = CommonProps & {
    className?: string
    fragmentShader: string
    functions: string
}

export function ViewFilterResult(props: ViewFilterResultProps): JSX.Element {
    const ref = React.useRef<HTMLDivElement | null>(null)
    const [error, setError] = React.useState<string | null>(null)
    const refManager = React.useRef<FilterManager | null>(null)
    const [uniEffectStrength, setUniEffectStrength] = React.useState(0.5)
    const handleMount = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return

        if (!refManager.current) {
            refManager.current = new FilterManager(canvas, setError)
        }
        refManager.current.setCode(props.fragmentShader, props.functions)
    }
    const handleToggleFullscreen = () => {
        const div = ref.current
        if (!div) return

        tgdFullscreenToggle(div)
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
        <div
            ref={ref}
            className={$.join(props.className, Styles.filterresult)}
            {...props}
        >
            <ViewPanel
                color="primary-5"
                height="2em"
                display="flex"
                justifyContent="start"
                alignItems="center"
                padding="M"
                fullwidth
            >
                <div>Filter output</div>
                <IconFullscreen onClick={handleToggleFullscreen} />
            </ViewPanel>
            <canvas ref={handleMount}></canvas>
            {error && (
                <pre>
                    {error.split("\n").map((line, index) => {
                        if (line.startsWith("#####"))
                            return (
                                <div className={Styles.error} key={index}>
                                    {line}
                                    {"\n"}
                                </div>
                            )
                        return <div key={index}>{line}</div>
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
        </div>
    )
}
