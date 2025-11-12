import * as React from "react"

import { Theme, ViewOptions } from "@tolokoban/ui"
import {
    type TgdContext,
    TgdPainterBackground,
    TgdPainterClear,
    type TgdDataGlb,
    TgdTexture2D,
    type TgdFormatGltfImage,
} from "@tolokoban/tgd"
import Tgd, { type Assets } from "@/components/demo/Tgd"
import ViewError from "@/components/Error"
import { ViewFileSize } from "@/components/FileSize"

import LightURL from "./checkboard-light.jpg"
import DarkURL from "./checkboard-dark.jpg"

import Styles from "./ActionImage.module.css"

const $ = Theme.classNames

export type ViewActionImageProps = {
    data: TgdDataGlb
    index: number
}

export function ViewActionImage({ data, index }: ViewActionImageProps) {
    const [mode, setMode] = React.useState<"light" | "dark">("light")
    const [image, setImage] = React.useState<HTMLImageElement | null>(null)
    const [dimensions, setDimensions] = React.useState<
        [width: number, height: number] | null
    >(null)
    const [imageDef, setImageDef] = React.useState<
        TgdFormatGltfImage | undefined
    >(undefined)
    const imageSize = useImageSize(data, imageDef)
    const [error, setError] = React.useState<string | null>(null)
    const onReady = React.useCallback(
        (context: TgdContext, _assets: Assets): void => {
            setError(null)
            const clear = new TgdPainterClear(context, { color: [0, 0, 0, 0] })
            context.add(clear)
            context.paint()
            setImageDef(data.getImage(index))
            const img = data.getImageAsHTMLElement(index)
            if (!img) return

            setImage(img)
            setDimensions([img.width, img.height])
            const texture = new TgdTexture2D(context).loadBitmap(img)
            const background = new TgdPainterBackground(context, {
                mode: "contain",
                texture,
            })
            context.add(background)
            context.paint()
        },
        [data, index]
    )

    return (
        <div
            className={$.join(Styles.actionImage)}
            style={{
                backgroundImage: `url(${mode === "dark" ? DarkURL : LightURL})`,
            }}
        >
            {error ? (
                <ViewError>{error}</ViewError>
            ) : (
                <Tgd
                    key={JSON.stringify(data.getImage(index))}
                    options={{ alpha: true }}
                    onReady={onReady}
                    noBorder
                    width="100%"
                    height="100%"
                ></Tgd>
            )}
            <header>
                <div className={Styles.dimensions}>
                    {dimensions?.join(" × ")}
                </div>
                {imageSize > 0 && <ViewFileSize value={imageSize} />}
                {imageDef && (
                    <div className={Styles.mimeType}>{imageDef.mimeType}</div>
                )}
                <ViewOptions value={mode} onChange={setMode}>
                    <div key="light">Light</div>
                    <div key="dark">Dark</div>
                </ViewOptions>
                <div className={Styles.link}>
                    {image && (
                        <a href={image.src} target="_blank">
                            Open in new tab
                        </a>
                    )}
                </div>
            </header>
        </div>
    )
}

function useImageSize(
    data: TgdDataGlb,
    imageDef: TgdFormatGltfImage | undefined
) {
    return React.useMemo(() => {
        if (!imageDef) return 0

        const bufferView = data.getBufferView(imageDef.bufferView ?? -1)
        if (!bufferView) return 0

        return bufferView.byteLength
    }, [data, imageDef])
}
