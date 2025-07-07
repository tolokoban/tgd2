import * as React from "react"

import { Theme, ViewOptions } from "@tolokoban/ui"
import {
    TgdContext,
    TgdPainterBackground,
    TgdPainterClear,
    TgdDataGlb,
    TgdTexture2D,
} from "@tolokoban/tgd"
import Tgd, { Assets } from "@/components/demo/Tgd"
import Error from "@/components/Error"

import LightURL from "./checkboard-light.jpg"
import DarkURL from "./checkboard-dark.jpg"

import Styles from "./ActionImage.module.css"

const $ = Theme.classNames

export type ViewActionImageProps = {
    data: TgdDataGlb
    index: number
}

export function ViewActionImage({
    data,
    index,
}: ViewActionImageProps): JSX.Element {
    const [mode, setMode] = React.useState<"light" | "dark">("light")
    const [image, setImage] = React.useState<HTMLImageElement | null>(null)
    const [dimensions, setDimensions] = React.useState<
        [width: number, height: number] | null
    >(null)
    const [error, setError] = React.useState<string | null>(null)
    const onReady = React.useCallback(
        (context: TgdContext, assets: Assets): void => {
            setError(null)
            const clear = new TgdPainterClear(context, { color: [0, 0, 0, 0] })
            context.add(clear)
            context.paint()
            data.loadImage(index)
                .then(img => {
                    if (!img) {
                        setError("Unable to load the image!")
                        return
                    }
                    setImage(img)
                    setDimensions([img.width, img.height])
                    const texture = new TgdTexture2D(context).loadBitmap(img)
                    const background = new TgdPainterBackground(context, {
                        mode: "contain",
                        texture,
                    })
                    context.add(background)
                    context.paint()
                })
                .catch(() => setError("Unable to load the image!"))
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
                <Error>{error}</Error>
            ) : (
                <Tgd
                    key={JSON.stringify(data.json.images?.[index])}
                    options={{ alpha: true }}
                    onReady={onReady}
                    noBorder
                    width="100%"
                    height="100%"
                ></Tgd>
            )}
            <header>
                <div className={Styles.dimensions}>
                    {dimensions && dimensions.join(" × ")}
                </div>
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
