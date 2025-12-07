import * as React from "react"
import Editor from "react-simple-code-editor"
import Prism from "prismjs"

import { getGrammarForLanguage } from "./grammar"

import "./code-editor-view.css"

export interface CodeEditorViewProps {
    className?: string
    value: string
    onChange?(value: string): void
    language: string
    disabled?: boolean
}

const VOID_FUNC = () => {}

export default function CodeEditorView(props: CodeEditorViewProps) {
    return (
        <div className={getClassNames(props)}>
            <Editor
                disabled={props.disabled}
                value={props.value}
                onValueChange={props.onChange ?? VOID_FUNC}
                highlight={(code) =>
                    Prism.highlight(
                        code,
                        getGrammarForLanguage(props.language),
                        props.language
                    )
                }
            />
        </div>
    )
}

function getClassNames(props: CodeEditorViewProps): string {
    const classNames = ["custom", "view-CodeEditorView"]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }

    return classNames.join(" ")
}
