import React from "react"

import SceneView from "@/components/Scene"
import { TgdLoadImage, TgdPainterBackground, TgdScene } from "@tolokoban/tgd"
import { ViewPanel, ViewSlider } from "@tolokoban/ui"
import BackgroundUrl from "./background.webp"
import Style from "./Zoom.module.css"

export default function Zoom() {
    const refScene = React.useRef<null | TgdScene>(null)
    const refPainter = React.useRef<null | TgdPainterBackground>(null)
    const [zoom, setZoom] = React.useState(1)
    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)
    React.useEffect(() => {
        const scene = refScene.current
        const painter = refPainter.current
        if (!scene || !painter) return

        painter.zoom = zoom
        painter.x = x
        painter.y = y
        scene.paint()
    }, [zoom, x, y])
    const handleSceneReady = async (scene: TgdScene) => {
        const image = await TgdLoadImage.load(BackgroundUrl)
        if (!image) return

        refScene.current = scene
        const painter =
            refPainter.current ??
            new TgdPainterBackground(scene, {
                image,
            })
        refPainter.current = painter
        scene.addPainter(painter)
        scene.paint()
    }
    return (
        <div>
            <ViewPanel
                className={Style.placeItemsNormal}
                display="grid"
                gridTemplateColumns="auto 1fr"
                gap={[".5em", "1em"]}
            >
                <div>zoom :</div>
                <ViewSlider
                    value={zoom}
                    onChange={setZoom}
                    min={1}
                    max={10}
                    step={0.1}
                    wide={true}
                    text={`${zoom * 100}%`}
                />
                <div>x :</div>
                <ViewSlider
                    value={x}
                    onChange={setX}
                    min={-1}
                    max={+1}
                    step={0.01}
                    wide={true}
                    text={`${x}`}
                />
                <div>y :</div>
                <ViewSlider
                    value={y}
                    onChange={setY}
                    min={-1}
                    max={+1}
                    step={0.01}
                    wide={true}
                    text={`${y}`}
                />
            </ViewPanel>
            <ViewPanel display="grid">
                <SceneView
                    width="100%"
                    height="50vh"
                    onReady={handleSceneReady}
                />
            </ViewPanel>
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
    const side = 110
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
