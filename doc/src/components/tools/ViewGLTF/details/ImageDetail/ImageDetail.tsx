import React from "react"
import { Theme } from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import Style from "./ImageDetail.module.css"

const $ = Theme.classNames

export interface ImageDetailProps {
    className?: string
    parser: TgdParserGLTransfertFormatBinary
    id: number
}

export default function ImageDetail({
    className,
    parser,
    id,
}: ImageDetailProps) {
    const [url, setUrl] = React.useState("")
    React.useEffect(() => {
        setUrl("")
        const image = parser.gltf.images?.[id]
        if (!image) return

        const bufferView = parser.gltf.bufferViews?.[image.bufferView]
        if (!bufferView) return

        const blob = new Blob([parser.buffers[bufferView.buffer]], {
            type: image.mimeType,
        })
        setUrl(URL.createObjectURL(blob))
    }, [id, parser])
    return (
        <div className={$.join(className, Style.ImageDetail)}>
            <h1>Image...</h1>
            <img src={url} />
        </div>
    )
}
