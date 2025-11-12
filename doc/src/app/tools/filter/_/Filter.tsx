import * as React from "react"

import {
    Theme,
    useLocalStorageState,
    ViewPanel,
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
    TgdCodeFunctions,
    tgdCodeStringify,
} from "@tolokoban/tgd"

import { ViewVertexShaderCodeEditor } from "./VertexShaderCodeEditor"
import { ViewFilterResult } from "./FilterResult"
import Doc from "./doc.mdx"

import Styles from "./Filter.module.css"
import { useGlslFunctions } from "./functions"

const $ = Theme.classNames

export function ViewFilter() {
    const library = useGlslFunctions()
    const functions = React.useMemo(() => {
        let code: TgdCodeFunctions = {}
        for (const key of Object.keys(library)) {
            code = {
                ...code,
                ...library[key](),
            }
        }
        return Object.values(code).join("\n")
    }, [library])
    const [fragShaderCode, setFragShaderCode] = useLocalStorageState(
        DEFAULT_FRAGMENT_SHADER,
        "Filter/FragmentShader"
    )
    console.log("🚀 [Filter] library =", library) // @FIXME: Remove this line written on 2025-07-15 at 15:45
    console.log(functions)

    return (
        <ViewStrip className={Styles.filter} template="11" orientation="row">
            <ViewTabs>
                <ViewTab label="Fragment Shader" key="shader">
                    <ViewPanel fullsize overflow="auto">
                        <ViewVertexShaderCodeEditor
                            code={fragShaderCode}
                            onChange={setFragShaderCode}
                        />
                    </ViewPanel>
                </ViewTab>
                <ViewTab label="Extra functions" key="functions">
                    <ViewPanel fullsize overflow="auto">
                        <ViewVertexShaderCodeEditor
                            code={functions}
                            disabled={true}
                        />
                    </ViewPanel>
                </ViewTab>
                <ViewTab label="Documentation" key="doc">
                    <ViewPanel fullsize overflow="auto">
                        <Doc />
                    </ViewPanel>
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
