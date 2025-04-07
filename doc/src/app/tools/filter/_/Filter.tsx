import * as React from "react"

import {
    Theme,
    useLocalStorageState,
    ViewStrip,
    ViewTab,
    ViewTabs,
} from "@tolokoban/ui"
import {
    tgdCodeConstants,
    tgdCodeFunction_luminance,
    tgdCodeFunction_polar2uv,
    tgdCodeFunction_polar2xy,
    tgdCodeFunction_random,
    tgdCodeFunction_shiftHue,
    tgdCodeFunction_uv2polar,
    tgdCodeFunction_uv2xy,
    tgdCodeFunction_xy2polar,
    tgdCodeFunction_xy2uv,
    tgdCodeStringify,
} from "@tolokoban/tgd"

import { ViewVertexShaderCodeEditor } from "./VertexShaderCodeEditor"
import { ViewFilterResult } from "./FilterResult"
import Doc from "./doc.mdx"

import Styles from "./Filter.module.css"

const $ = Theme.classNames

export function ViewFilter(): JSX.Element {
    const [fragShaderCode, setFragShaderCode] = useLocalStorageState(
        DEFAULT_FRAGMENT_SHADER,
        "Filter/FragementShader"
    )
    const [functions, setFunctions] = useLocalStorageState(
        DEFAULT_FUNCTIONS,
        "Filter/Functions"
    )
    return (
        <ViewStrip className={Styles.filter} template="12" orientation="row">
            <ViewTabs>
                <ViewTab label="Fragment Shader" key="shader">
                    <ViewVertexShaderCodeEditor
                        code={fragShaderCode}
                        onChange={setFragShaderCode}
                    />
                </ViewTab>
                <ViewTab label="Extra functions" key="functions">
                    <ViewVertexShaderCodeEditor
                        code={functions}
                        onChange={setFunctions}
                    />
                </ViewTab>
                <ViewTab label="Documentation" key="doc">
                    <Doc />
                </ViewTab>
            </ViewTabs>
            <ViewFilterResult
                fragmentShader={fragShaderCode}
                functions={functions}
            />
        </ViewStrip>
    )
}

const DEFAULT_FRAGMENT_SHADER = tgdCodeStringify([
    `vec2 polar = uv2polar(varUV);`,
    `polar.y += polar.x * cos(uniTime);`,
    `vec2 uv = polar2uv(polar);`,
    `vec4 color = texture(uniTexture, uv);`,
    `FragColor = vec4(`,
    [`shiftHue(color.rgb, polar.y + uniTime),`, `1.0`],
    `);`,
])

const DEFAULT_FUNCTIONS = tgdCodeStringify([
    tgdCodeConstants("PI", "TAU", "E"),
    tgdCodeFunction_random(),
    tgdCodeFunction_shiftHue(),
    tgdCodeFunction_polar2uv(),
    tgdCodeFunction_polar2xy(),
    tgdCodeFunction_uv2polar(),
    tgdCodeFunction_xy2polar(),
    tgdCodeFunction_uv2xy(),
    tgdCodeFunction_xy2uv(),
    tgdCodeFunction_luminance(),
    `
float dot2( in vec2 v ) { return dot(v,v); }
`,
])
