import React from "react"
import { Theme } from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import Style from "./ImageDetail.module.css"
import Spinner from "@/components/Spinner"

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
    const [img, setImg] = React.useState<HTMLImageElement | undefined>(
        undefined
    )
    React.useEffect(() => {
        setImg(undefined)
        parser.loadImage(id).then(setImg).catch(console.error)
    }, [id, parser])
    if (!img) return <Spinner />

    return (
        <div className={$.join(className, Style.ImageDetail)}>
            <p>
                <b>{parser.gltf.images?.[id].name}</b>: {img.width}×{img.height}
            </p>
            <img src={img.src} />
        </div>
    )
}
