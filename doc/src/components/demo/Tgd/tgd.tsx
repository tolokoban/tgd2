import React from "react"
import {
    tgdActionCreateCameraInterpolation,
    TgdCanvasGizmo,
    TgdContext,
    tgdEasingFunctionInOutCubic,
    tgdLoadArrayBuffer,
    tgdLoadGlb,
    tgdLoadImage,
    tgdLoadText,
    TgdDataGlb,
} from "@tolokoban/tgd"
import { Theme, ViewButton, ViewPanel } from "@tolokoban/ui"

import Spinner from "../../Spinner"

import styles from "./tgd.module.css"

export interface Assets {
    image: Record<string, HTMLImageElement>
    glb: Record<string, TgdDataGlb>
    data: Record<string, ArrayBuffer>
    text: Record<string, string>
}

type AssetsToLoad = {
    [key in keyof Assets]: Record<string, string>
}

interface TgdProps {
    className?: string
    options?: WebGLContextAttributes
    onReady(scene: TgdContext, assets: Assets): void
    width?: string
    height?: string
    noBorder?: boolean
    gizmo?: boolean
    assets?: Partial<AssetsToLoad>
    children?: React.ReactNode
}
export default function Tgd({
    className,
    options,
    onReady,
    gizmo = false,
    width = "640px",
    height = "480px",
    noBorder = false,
    assets,
    children,
}: TgdProps) {
    const [landscape, setLandscape] = React.useState(true)
    const [fullscreenAvailable, setFullscreenAvailable] = React.useState(false)
    const refContext = React.useRef<TgdContext | null>(null)
    const refCanvas = React.useRef<HTMLCanvasElement | null>(null)
    const refGizmo = React.useRef<TgdCanvasGizmo | null>(null)
    const refScreen = React.useRef<HTMLDivElement | null>(null)
    const [loading, setLoading] = React.useState(true)
    let aspectRatio = "auto"
    if (width.endsWith("px") && height.endsWith("px")) {
        aspectRatio = `${width.substring(
            width.length - 2
        )} / ${height.substring(height.length - 2)}`
    }
    const mountCanvas = (canvas: HTMLCanvasElement) => {
        if (!canvas) return

        if (refCanvas.current) return

        refCanvas.current = canvas
        const context = new TgdContext(canvas, options)
        refContext.current = context
        setLoading(true)
        loadAssets(assets)
            .then((loadedAssets: Assets) => {
                console.log("Ready!")
                onReady(context, loadedAssets)
                context.paint()
                setLoading(false)
            })
            .catch(ex => {
                console.error("Unable to initialize the scene!", ex)
                setLoading(false)
            })
        const gizmo = refGizmo.current
        if (gizmo) gizmo.attachContext(context)
    }
    const mountGizmo = (canvas: HTMLCanvasElement) => {
        const gizmo = new TgdCanvasGizmo({
            canvas,
        })
        refGizmo.current = gizmo
        gizmo.eventTipClick.addListener(({ to }) => {
            const context = refContext.current
            if (!context) return

            context.animSchedule({
                duration: 0.2,
                easingFunction: tgdEasingFunctionInOutCubic,
                action: tgdActionCreateCameraInterpolation(context.camera, {
                    orientation: to,
                }),
            })
        })
        const context = refContext.current
        if (context) gizmo.attachContext(context)
    }
    const handleFullscreen = () => {
        const div = refScreen.current
        if (!div) return

        div.requestFullscreen()
    }
    const handleScreenshot = () => {
        const context = refContext.current
        if (!context) return

        context.takeSnapshot().then(img => {
            const a = document.createElement("a")
            document.body.appendChild(a)
            a.style.display = "none"
            a.href = img.src
            a.download = `snapshot.png`
            a.click()
            window.setTimeout(() => document.body.removeChild(a), 30000)
        })
    }
    React.useEffect(() => {
        const canvas = refCanvas.current
        const scene = refContext.current
        if (!canvas || !scene) return

        const observer = new ResizeObserver(() => scene.paint())
        observer.observe(canvas)
        if (!canvas.requestFullscreen) {
            canvas.requestFullscreen = (
                canvas as unknown as Record<string, unknown>
            )["webkitRequestFullscreen"] as (
                options?: FullscreenOptions
            ) => Promise<void>
        }
        setFullscreenAvailable(Boolean(canvas.requestFullscreen))
        return () => observer.unobserve(canvas)
    }, [refContext.current, refCanvas.current])

    if (noBorder) {
        return (
            <div
                ref={refScreen}
                className={styles.screen}
                style={{
                    width: landscape ? width : height,
                    height: landscape ? height : width,
                }}
            >
                <canvas className={styles.canvas} ref={mountCanvas}></canvas>
                {gizmo && (
                    <canvas className={styles.gizmo} ref={mountGizmo}></canvas>
                )}
            </div>
        )
    }

    return (
        <div className={Theme.classNames.join(className, styles.Tgd)}>
            <ViewPanel display="flex" justifyContent="space-between">
                <ViewButton
                    variant="elevated"
                    onClick={() => setLandscape(!landscape)}
                    enabled={!loading}
                >
                    {landscape ? "Switch to Portrait" : "Switch to Landscape"}
                </ViewButton>
                <ViewButton
                    variant="elevated"
                    onClick={handleScreenshot}
                    enabled={!loading}
                >
                    Screenshot
                </ViewButton>
                {fullscreenAvailable && (
                    <ViewButton
                        variant="elevated"
                        onClick={handleFullscreen}
                        enabled={!loading}
                    >
                        Fullscreen
                    </ViewButton>
                )}
            </ViewPanel>
            <div className={styles.relative}>
                <div
                    ref={refScreen}
                    className={styles.screen}
                    style={{
                        width: landscape ? width : height,
                        height: landscape ? height : width,
                    }}
                >
                    <canvas
                        className={styles.canvas}
                        ref={mountCanvas}
                    ></canvas>
                    {gizmo && (
                        <canvas
                            className={styles.gizmo}
                            ref={mountGizmo}
                        ></canvas>
                    )}
                </div>
                <div
                    className={Theme.classNames.join(
                        styles.overlay,
                        loading && styles.loading
                    )}
                >
                    <Spinner />
                </div>
                {children}
            </div>
        </div>
    )
}

function CanvasScreen() {
    return (
        <div>
            <canvas></canvas>
        </div>
    )
}

async function loadAssets({
    glb,
    data,
    text,
    image,
}: Partial<AssetsToLoad> = {}): Promise<Assets> {
    console.log("🚀 [Tgd] glb, data, text, image = ", glb, data, text, image) // @FIXME: Remove this line written on 2024-11-08 at 14:33
    const assets: Assets = {
        glb: {},
        data: {},
        text: {},
        image: {},
    }
    const loaders: Array<() => Promise<void>> = []
    if (image) {
        Object.keys(image).forEach(key => {
            loaders.push(async () => {
                const url = image[key]
                console.log("Loading image:", url)
                const asset = await tgdLoadImage(url)
                if (asset) assets.image[key] = asset
            })
        })
    }
    if (glb) {
        Object.keys(glb).forEach(key => {
            loaders.push(async () => {
                const url = glb[key]
                console.log("Loading GLB:", url)
                const asset = await tgdLoadGlb(url)
                if (asset) assets.glb[key] = asset
            })
        })
    }
    if (data) {
        Object.keys(data).forEach(key => {
            loaders.push(async () => {
                const url = data[key]
                const asset = await tgdLoadArrayBuffer(url)
                if (asset) assets.data[key] = asset
            })
        })
    }
    if (text) {
        Object.keys(text).forEach(key => {
            loaders.push(async () => {
                const url = text[key]
                const asset = await tgdLoadText(url)
                if (asset) assets.text[key] = asset
            })
        })
    }
    await Promise.all(loaders.map(loader => loader()))
    return assets
}
