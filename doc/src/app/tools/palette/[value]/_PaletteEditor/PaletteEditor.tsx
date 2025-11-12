import * as React from "react"
import {
    Theme,
    CommonProps,
    styleCommon,
    ViewTabs,
    ViewTab,
    IconFix,
    IconShare,
} from "@tolokoban/ui"

import CodeViewerView from "@/components/demo/CodeViewer"
import { ViewSliders } from "./Sliders"
import { PaletteDefinition } from "../../types"
import { ViewPalettePreviewDisk } from "../../PalettePreviewDisk"

import Styles from "./PaletteEditor.module.css"
import { ViewPalettePreviewHorizontal } from "../../PalettePreviewHorizontal"

const $ = Theme.classNames

export type ViewPaletteEditorProps = CommonProps & PaletteDefinition

export function ViewPaletteEditor(props: ViewPaletteEditorProps) {
    const [value, setValue] = React.useState<PaletteDefinition>(props)
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const { a, b, c, d } = value
    const update = (v: Partial<PaletteDefinition>) => {
        setValue({
            ...value,
            ...v,
        })
    }

    return (
        <div
            className={$.join(props.className, Styles.paletteEditor)}
            style={style}
        >
            <aside>
                <ViewPalettePreviewDisk
                    className={Styles.disk}
                    a={a}
                    b={b}
                    c={c}
                    d={d}
                />
                <ViewPalettePreviewHorizontal
                    className={Styles.horizontal}
                    a={a}
                    b={b}
                    c={c}
                    d={d}
                />
                <ViewPalettePreviewHorizontal
                    className={Styles.horizontalA}
                    a={a}
                    b={b}
                    c={c}
                    d={d}
                />
                <ViewPalettePreviewHorizontal
                    className={Styles.horizontalB}
                    a={a}
                    b={b}
                    c={c}
                    d={d}
                />
            </aside>
            <ViewTabs maxHeight="100%">
                <ViewTab
                    key="config"
                    label={
                        <>
                            <IconFix />
                            <div>Config</div>
                        </>
                    }
                    className={Styles.scroll}
                >
                    <ViewSliders
                        label="Luminance"
                        value={a}
                        onChange={(v) => update({ a: v })}
                    />
                    <ViewSliders
                        label="Saturation"
                        value={b}
                        onChange={(v) => update({ b: v })}
                    />
                    <ViewSliders
                        label="Spread"
                        value={c}
                        onChange={(v) => update({ c: v })}
                    />
                    <ViewSliders
                        label="Shift"
                        value={d}
                        onChange={(v) => update({ d: v })}
                    />
                </ViewTab>
                <ViewTab
                    key="share"
                    label={
                        <>
                            <IconShare />
                            <div>Share</div>
                        </>
                    }
                >
                    <CodeViewerView
                        language="glsl"
                        value={`vec3 palette(float t) {
    return vec3(${arr(a)})
        + vec3(${arr(b)}) * cos(
            ${2 * Math.PI} * (
                t * vec3(${arr(c)})
                + vec3(${arr(d)})
            )
        )
}`}
                    />
                    <CodeViewerView
                        language="ts"
                        value={`{
    name: "",
    a: [${arr(a)}],
    b: [${arr(b)}],
    c: [${arr(c)}],
    d: [${arr(d)}],
}`}
                    />
                </ViewTab>
            </ViewTabs>
        </div>
    )
}

function arr(a: number[]) {
    return `${a.map((v) => v.toFixed(3)).join(", ")}`
}
