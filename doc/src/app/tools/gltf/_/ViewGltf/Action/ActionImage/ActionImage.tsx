import * as React from "react"

import { Theme, ViewOptions } from "@tolokoban/ui"
import {
    type TgdContext,
    TgdPainterBackground,
    TgdPainterClear,
    type TgdDataGlb,
    TgdTexture2D,
    type TgdFormatGltfImage,
    tgdCodeStringify,
} from "@tolokoban/tgd"
import Tgd, { type Assets } from "@/components/demo/Tgd"
import ViewError from "@/components/Error"
import { ViewFileSize } from "@/components/FileSize"

import LightURL from "./checkboard-light.jpg"
import DarkURL from "./checkboard-dark.jpg"

import Styles from "./ActionImage.module.css"
import CodeEditorView from "@/components/code-editor"
import { PainterImage } from "./painter-image"

const $ = Theme.classNames

export type ViewActionImageProps = {
    data: TgdDataGlb
    index: number
}

export function ViewActionImage({ data, index }: ViewActionImageProps) {
    const refUpdateRGBA = React.useRef<(rgba: string) => void>(() => {})
    const [rgba, setRgba] = React.useState("RGBA")
    React.useEffect(() => {
        refUpdateRGBA.current(rgba)
    }, [rgba])
    const [mode, setMode] = React.useState<"light" | "dark">("light")
    const [image, setImage] = React.useState<HTMLImageElement | null>(null)
    const [dimensions, setDimensions] = React.useState<[width: number, height: number] | null>(null)
    const [imageDef, setImageDef] = React.useState<TgdFormatGltfImage | undefined>(undefined)
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
            const background = new PainterImage(context, {
                texture,
            })
            context.add(background)
            background.mode = rgba
            context.paint()
            refUpdateRGBA.current = (value: string) => {
                background.mode = value
                context.paint()
            }
        },
        [data, index],
    )

    return (
        <div
            className={$.join(Styles.actionImage)}
            style={{
                backgroundImage: `url(${mode === "dark" ? DarkURL : LightURL})`,
            }}>
            {error ? (
                <ViewError>{error}</ViewError>
            ) : (
                <Tgd
                    key={JSON.stringify(data.getImage(index))}
                    options={{ alpha: true }}
                    onReady={onReady}
                    noBorder
                    width="100%"
                    height="100%"></Tgd>
            )}
            <header>
                <div className={Styles.dimensions}>{dimensions?.join(" × ")}</div>
                <ViewOptions value={rgba} onChange={setRgba}>
                    {["RGBA", "R", "G", "B", "A"].map((key) => (
                        <div key={key}>{key}</div>
                    ))}
                </ViewOptions>
                <ViewOptions value={mode} onChange={setMode}>
                    <div key="light">Light</div>
                    <div key="dark">Dark</div>
                </ViewOptions>
                {imageSize > 0 && <ViewFileSize value={imageSize} />}
                {imageDef && <div className={Styles.mimeType}>{imageDef.mimeType}</div>}
                <div className={Styles.link}>
                    {image && (
                        <a href={image.src} target="_blank">
                            Open in new tab
                        </a>
                    )}
                </div>
            </header>
            <details>
                <summary>Code</summary>
                <div>
                    <CodeEditorView
                        language="ts"
                        disabled
                        value={tgdCodeStringify([
                            `function getTexture(asset: TgdDataGlb, context: TgdContext) {`,
                            [
                                `return new TgdTexture2D(context)`,
                                [
                                    `.loadBitmap(asset.getImageAsHTMLElement(${JSON.stringify(imageDef?.name ?? index)}))`,
                                ],
                            ],
                            "}",
                        ])}
                    />
                </div>
            </details>
        </div>
    )
}

function useImageSize(data: TgdDataGlb, imageDef: TgdFormatGltfImage | undefined) {
    return React.useMemo(() => {
        if (!imageDef) return 0

        const bufferView = data.getBufferView(imageDef.bufferView ?? -1)
        if (!bufferView) return 0

        return bufferView.byteLength
    }, [data, imageDef])
}
