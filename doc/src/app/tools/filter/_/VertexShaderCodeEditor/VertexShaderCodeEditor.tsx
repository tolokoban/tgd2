import * as React from "react"
import { Theme, CommonProps, ViewTabs, ViewTab } from "@tolokoban/ui"

import CodeEditor from "@/components/code-editor"

import Styles from "./VertexShaderCodeEditor.module.css"

const $ = Theme.classNames

export type ViewVertexShaderCodeEditorProps = CommonProps & {
    code: string
    onChange(code: string): void
}

export function ViewVertexShaderCodeEditor(
    props: ViewVertexShaderCodeEditorProps
): JSX.Element {
    return (
        <ViewTabs
            className={$.join(props.className, Styles.vertexshadercodeeditor)}
            {...props}
        >
            <ViewTab label="Fragment Shader" key="shader">
                <CodeEditor
                    language="glsl"
                    value={props.code}
                    onChange={props.onChange}
                />
            </ViewTab>
        </ViewTabs>
    )
}
