import * as React from "react"

import { Theme, useLocalStorageState, ViewStrip } from "@tolokoban/ui"

import Styles from "./Filter.module.css"
import { ViewVertexShaderCodeEditor } from "./VertexShaderCodeEditor"
import { ViewFilterResult } from "./FilterResult"

const $ = Theme.classNames

export function ViewFilter(): JSX.Element {
    const [fragShaderCode, setFragShaderCode] = useLocalStorageState(
        DEFAULT_FRAGMENT_SHADER,
        "Filter/FragementShader"
    )
    return (
        <ViewStrip className={Styles.filter} template="12" orientation="row">
            <ViewVertexShaderCodeEditor
                code={fragShaderCode}
                onChange={setFragShaderCode}
            />
            <ViewFilterResult fragmentShader={fragShaderCode} />
        </ViewStrip>
    )
}

const DEFAULT_FRAGMENT_SHADER = [
    "vec4 pixel = vec4(0, 0, 0, 1);",
    "vec2 dir = 2.0 * (vec2(0.5) - varUV);",
    "float len = dot(dir, dir);",
    "float ripple = sin(uniTime * 0.01) * .2;",
    "dir *= 0.1 * smoothstep(0.5 + ripple, 1.4 ,len);",
    "float radius = 0.0;",
    "for (int i=0; i<16; i++) {",
    [
        "vec4 color = texture(uniTexture, varUV + dir * radius);",
        "radius += 0.05;",
        "pixel += color;",
    ],
    "}",
    "pixel /= 16.0;",
    "FragColor = pixel;",
].join("\n")
