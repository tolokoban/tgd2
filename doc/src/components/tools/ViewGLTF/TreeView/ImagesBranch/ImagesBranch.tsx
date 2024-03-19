import React from "react"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import { MainSection } from "../types"
import Link from "../Link"
import Branch from "../Branch"

export interface ImagesBranchProps {
    parser: TgdParserGLTransfertFormatBinary
    onClick(section: MainSection): void
}

export default function ImagesBranch({ parser, onClick }: ImagesBranchProps) {
    const { images } = parser.gltf
    if (!images) return null

    return (
        <Branch label={<b>Images</b>}>
            {images.map((image, imageIndex) => (
                <Link
                    key={`IMG#${imageIndex}`}
                    section={{ type: "img", id: imageIndex }}
                    onClick={onClick}
                >
                    {image.name || `Image_${imageIndex}`}
                    <em>{image.mimeType}</em>
                </Link>
            ))}
        </Branch>
    )
}
