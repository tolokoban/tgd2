import * as React from "react"
import { Theme, CommonProps } from "@tolokoban/ui"

import CodeEditor from "@/components/code-editor"

import Styles from "./VertexShaderCodeEditor.module.css"

const $ = Theme.classNames

export type ViewVertexShaderCodeEditorProps = CommonProps & {
    code: string
    onChange?(code: string): void
    disabled?: boolean
}

export function ViewVertexShaderCodeEditor(
    props: ViewVertexShaderCodeEditorProps
) {
    return (
        <CodeEditor
            className={$.join(props.className, Styles.vertexshadercodeeditor)}
            language="glsl"
            value={props.code}
            onChange={(code) => props.onChange?.(code)}
            disabled={props.disabled}
        />
    )
}
