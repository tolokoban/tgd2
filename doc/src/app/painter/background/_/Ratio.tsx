import React from "react"

import SceneView from "@/components/Scene"
import { TgdLoadImage, TgdPainterBackground, TgdScene } from "@tolokoban/tgd"
import BackgroundUrl from "./background.webp"
import Style from "./Ratio.module.css"

export default function Ratio() {
    return (
        <div className={Style.Ratio}>
            <div className={Style.Cell}>
                <Cell cols={3} rows={2} />
                <Cell cols={3} rows={1} />
            </div>
            <div className={Style.Cell}>
                <Cell cols={2} rows={3} />
                <Cell cols={1} rows={3} />
            </div>
            <div className={Style.Cell}>
                <Cell cols={3} rows={3} />
            </div>
        </div>
    )
}

function Cell({ cols, rows }: { cols: 1 | 2 | 3; rows: 1 | 2 | 3 }) {
    const handleSceneReady = async (scene: TgdScene) => {
        const image = await TgdLoadImage.load(BackgroundUrl)
        if (!image) return

        const painter = new TgdPainterBackground(scene, {
            image,
        })
        scene.addPainter(painter)
        scene.paint()
    }
    const side = 128
    const width = side * cols
    const height = side * rows
    return (
        <div
            style={{
                gridColumn: `span ${cols}`,
                gridRow: `span ${rows}`,
            }}
        >
            <SceneView
                noBorder
                width={`${width}px`}
                height={`${height}px`}
                onReady={handleSceneReady}
            />
        </div>
    )
}
