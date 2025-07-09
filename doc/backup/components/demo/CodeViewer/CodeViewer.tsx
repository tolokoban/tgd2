import * as React from "react"
import Prism from "prismjs"
import { getGrammarForLanguage } from "./grammar"
// import "prismjs/themes/prism-coy.css"
import Style from "./CodeViewer.module.css"

export interface CodeViewerViewProps {
    className?: string
    value: string | Record<string, string>
    language: string
}

export default function CodeViewerView(props: CodeViewerViewProps) {
    const { value } = props
    if (typeof value === "string") {
        const singleProps: SingleCodeViewerViewProps = {
            ...props,
            value,
        }
        return <SingleCodeViewerView {...singleProps} />
    }
    const multiProps: MultiCodeViewerViewProps = {
        ...props,
        value,
    }
    return <MultiCodeViewerView {...multiProps} />
}

export interface SingleCodeViewerViewProps extends CodeViewerViewProps {
    value: string
}

function SingleCodeViewerView(props: SingleCodeViewerViewProps) {
    const refTimeout = React.useRef(0)
    const [popup, setPopup] = React.useState(false)
    const refCode = React.useRef<null | HTMLElement>(null)
    React.useEffect(() => {
        window.setTimeout(() => {
            const code = refCode.current
            if (!code) return

            const html = Prism.highlight(
                props.value,
                getGrammarForLanguage(props.language),
                props.language
            )
            code.innerHTML = html
        }, 100)
    }, [props.value, props.language])
    const handleDoubleClick = () => {
        navigator.clipboard.writeText(props.value).then(() => {
            setPopup(true)
            window.clearTimeout(refTimeout.current)
            refTimeout.current = window.setTimeout(() => setPopup(false), 7000)
        })
    }
    const handlePopupClick = () => {
        setPopup(false)
        window.clearTimeout(refTimeout.current)
        refTimeout.current = 0
    }
    return (
        <div className={getClassNames(props)} onDoubleClick={handleDoubleClick}>
            <pre>
                <code
                    ref={refCode}
                    className={`language-${props.language}`}
                ></code>
            </pre>
            {popup && (
                <div className={Style.popup} onClick={handlePopupClick}>
                    <div>This code has been copied to the clipboard!</div>
                </div>
            )}
        </div>
    )
}

function getClassNames(props: CodeViewerViewProps): string {
    const classNames = [Style.CodeViewer]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }

    return classNames.join(" ")
}

export interface MultiCodeViewerViewProps extends CodeViewerViewProps {
    value: Record<string, string>
}

function MultiCodeViewerView(props: MultiCodeViewerViewProps) {
    const captions = Object.keys(props.value)
    return (
        <>
            {captions.map((caption, index) => (
                <details key={caption} open={index === 0}>
                    <summary>{caption}</summary>
                    <SingleCodeViewerView
                        value={props.value[caption]}
                        language={props.language}
                    />
                </details>
            ))}
        </>
    )
}
