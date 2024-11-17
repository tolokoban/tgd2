import * as React from "react"

import {
    Theme,
    useLocalStorageState,
    ViewStrip,
    ViewTab,
    ViewTabs,
} from "@tolokoban/ui"
import { tgdCodeStringify } from "@tolokoban/tgd"

import Styles from "./Filter.module.css"
import { ViewVertexShaderCodeEditor } from "./VertexShaderCodeEditor"
import { ViewFilterResult } from "./FilterResult"

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
            </ViewTabs>
            <ViewFilterResult
                fragmentShader={fragShaderCode}
                functions={functions}
            />
        </ViewStrip>
    )
}

const DEFAULT_FRAGMENT_SHADER = tgdCodeStringify([
    "vec4 color = texture(uniTexture, varUV);",
    "FragColor = color;",
])

const DEFAULT_FUNCTIONS = tgdCodeStringify([
    "vec2 uv2xy(vec3 uv) {",
    ["return 2.0 * (uv - vec2(0.5));"],
    "}",
    "",
    "vec2 xy2uv(vec2 xy) {",
    ["return (xy + vec(1.0)) * 0.5;"],
    "}",
    "",
    "vec2 random( vec2 p ) {",
    [
        "return fract(sin(vec2(",
        ["dot(p,vec2(127.1,311.7)),", "dot(p,vec2(269.5,183.3))"],
        "))*43758.5453);",
    ],
    "}",
])
