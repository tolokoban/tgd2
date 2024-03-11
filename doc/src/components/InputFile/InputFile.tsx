import React from "react"
import { IconImport, Theme, ViewButton } from "@tolokoban/ui"
import Style from "./InputFile.module.css"

const $ = Theme.classNames

export interface InputFileProps {
    className?: string
    children: React.ReactNode
    accept: string
    onLoad(file: {
        name: string
        size: number
        type: string
        data: ArrayBuffer | string
    }): void
}

export default function InputFile({
    className,
    accept,
    children,
    onLoad,
}: InputFileProps) {
    const ref = React.useRef<HTMLInputElement | null>(null)
    const handleClick = () => {
        const input = ref.current
        if (!input) return

        input.click()
    }
    const handleChange = () => {
        const input = ref.current
        if (!input || !input.files) return

        const [file] = input.files
        if (!file) return

        const reader = new FileReader()
        reader.onload = evt => {
            onLoad({
                name: file.name,
                size: file.size,
                type: file.type,
                data: evt.target?.result ?? "",
            })
        }
        reader.readAsArrayBuffer(file)
    }
    return (
        <div className={$.join(className, Style.InputFile)}>
            <input
                ref={ref}
                type="file"
                accept={accept}
                onChange={handleChange}
            />
            <ViewButton icon={IconImport} onClick={handleClick}>
                {children}
            </ViewButton>
        </div>
    )
}
