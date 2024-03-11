import React from "react"
import { Theme } from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import Spinner from "@/components/Spinner"
import Error from "@/components/Error"

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
    const [error, setError] = React.useState(false)
    const [img, setImg] = React.useState<HTMLImageElement | undefined>(
        undefined
    )
    React.useEffect(() => {
        setError(false)
        setImg(undefined)
        parser
            .loadImage(id)
            .then(setImg)
            .catch(() => {
                setError(true)
            })
    }, [id, parser])
    if (!img) return <Spinner />

    return (
        <div className={$.join(className, Style.ImageDetail)}>
            <p>
                <b>{parser.gltf.images?.[id].name}</b>: {img.width}×{img.height}
            </p>
            {error ? (
                <Error>Unable to load this image!</Error>
            ) : (
                <img src={img.src} />
            )}
        </div>
    )
}
