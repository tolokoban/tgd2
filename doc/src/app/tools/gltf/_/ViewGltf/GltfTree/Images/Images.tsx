import * as React from "react"

import { IconImage, Theme } from "@tolokoban/ui"
import { TgdDataGlb } from "@tolokoban/tgd"

import { Expander } from "../Expander"
import { Action } from "../../types"

import Styles from "./Images.module.css"

const $ = Theme.classNames

export type ViewImagesProps = {
    className?: string
    data: TgdDataGlb
    onAction?(action: Action): void
}

export function ViewImages({
    className,
    data,
    onAction,
}: ViewImagesProps): JSX.Element {
    return (
        <Expander
            className={$.join(className, Styles.images)}
            icon={IconImage}
            title="Images"
        >
            {(data.gltf.images ?? []).map((image, index) => (
                <Expander
                    key={index}
                    title={image.name ?? `#${index}`}
                    onClick={() =>
                        onAction?.({
                            type: "image",
                            index,
                        })
                    }
                >
                    <ul>
                        {image.name && (
                            <li>
                                Name: <b>{image.name}</b>
                            </li>
                        )}
                        {image.mimeType && (
                            <li>
                                Mime type: <b>{image.mimeType}</b>
                            </li>
                        )}
                        {image.bufferView && (
                            <li>
                                Buffer view: <b>{image.bufferView}</b>
                            </li>
                        )}
                        {image.uri && (
                            <li>
                                URI: <b>{image.uri}</b>
                            </li>
                        )}
                    </ul>
                </Expander>
            ))}
        </Expander>
    )
}
