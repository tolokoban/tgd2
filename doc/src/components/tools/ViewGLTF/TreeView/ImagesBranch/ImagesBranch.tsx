import React from "react"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import { MainSection } from "../TreeView"
import Link from "../Link"

export interface ImagesBranchProps {
    parser: TgdParserGLTransfertFormatBinary
    onClick(section: MainSection): void
}

export default function ImagesBranch({ parser, onClick }: ImagesBranchProps) {
    const { images } = parser.gltf
    if (!images) return null

    return (
        <details>
            <summary>Images</summary>
            {images.map((image, imageIndex) => (
                <Link id={imageIndex} type="IMG" onClick={onClick}>
                    {image.name}
                </Link>
            ))}
        </details>
    )
}
