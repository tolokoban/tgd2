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
    TgdControllerCameraOrbitOptions,
    TgdControllerCameraOrbit,
} from "@tolokoban/tgd"
import {
    IconFullscreen,
    IconOrientation,
    IconPin,
    IconSnapshot,
    Theme,
} from "@tolokoban/ui"

import Spinner from "../../Spinner"

import styles from "./tgd.module.css"
import { Settings, SettingsDefinitions } from "@/components/settings"

export interface Assets {
    image: Record<string, HTMLImageElement>
    glb: Record<string, TgdDataGlb>
    data: Record<string, ArrayBuffer>
    text: Record<string, string>
}

type AssetsToLoad = {
    [key in keyof Assets]: Record<string, string>
}

interface TgdProps<T extends SettingsDefinitions> {
    className?: string
    options?: WebGLContextAttributes
    onReady(
        scene: TgdContext,
        assets: Assets
    ): void | undefined | ((settings: Record<keyof T, number>) => void)
    width?: string
    height?: string
    noBorder?: boolean
    gizmo?: boolean
    assets?: Partial<AssetsToLoad>
    controller?: Partial<TgdControllerCameraOrbitOptions>
    children?: React.ReactNode
    settings?: T
}
export default function Tgd<T extends SettingsDefinitions>({
    className,
    options,
    onReady,
    gizmo = false,
    width = "640px",
    height = "480px",
    noBorder = false,
    assets,
    controller,
    settings,
    children,
}: TgdProps<T>) {
    const refUpdateSettings = React.useRef<
        void | null | ((settings: Record<keyof T, number>) => void)
    >(null)
    const [settingValues, setSettingValues] = React.useState(settings)
    const reduceSettings = (): Record<keyof T, number> => {
        if (!settingValues) return {} as Record<keyof T, number>
        const values: Record<string, number> = {}
        for (const key of Object.keys(settingValues)) {
            values[key] = settingValues[key].value
        }
        return values as Record<keyof T, number>
    }
    React.useEffect(() => {
        if (settingValues) {
            const values: Record<string, number> = {}
            for (const key of Object.keys(settingValues)) {
                values[key] = settingValues[key].value
            }
            refUpdateSettings.current?.(reduceSettings())
        }
    }, [settingValues])
    const [error, setError] = React.useState<string | null>(null)
    const [landscape, setLandscape] = React.useState(true)
    const [fullscreenAvailable, setFullscreenAvailable] = React.useState(false)
    const refContext = React.useRef<TgdContext | null>(null)
    const refCanvas = React.useRef<HTMLCanvasElement | null>(null)
    const refGizmo = React.useRef<TgdCanvasGizmo | null>(null)
    const refScreen = React.useRef<HTMLDivElement | null>(null)
    const refOrbiter = React.useRef<TgdControllerCameraOrbit | null>(null)
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
        const depthBits = context.gl.getParameter(context.gl.DEPTH_BITS)
        console.log("Depht buffer bits:", depthBits)
        refContext.current = context
        setLoading(true)
        loadAssets(assets)
            .then((loadedAssets: Assets) => {
                try {
                    if (controller) {
                        const orbiter = new TgdControllerCameraOrbit(context, {
                            debug: true,
                            inertiaOrbit: 1000,
                            inertiaZoom: 500,
                            inertiaPanning: 500,
                            ...controller,
                        })
                        refOrbiter.current = orbiter
                        context.inputs.pointer.eventTapMultiple.addListener(
                            (evt) => {
                                console.log(
                                    "🚀 [tgd] evt.tapsCount =",
                                    evt.tapsCount
                                ) // @FIXME: Remove this line written on 2025-11-10 at 13:36
                                evt.preventTap()
                                if (evt.tapsCount === 2) {
                                    orbiter.reset(
                                        (controller.inertiaOrbit ?? 500) * 1e-3
                                    )
                                }
                            }
                        )
                    }
                    refUpdateSettings.current = onReady(context, loadedAssets)
                    refUpdateSettings.current?.(reduceSettings())
                    context.paint()
                } catch (ex) {
                    setError(
                        ex instanceof Error ? ex.message : JSON.stringify(ex)
                    )
                }
                setLoading(false)
            })
            .catch((ex) => {
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

        context.takeSnapshot().then((img) => {
            const a = document.createElement("a")
            document.body.appendChild(a)
            a.style.display = "none"
            a.href = img.src
            a.download = `snapshot.png`
            a.click()
            window.setTimeout(() => document.body.removeChild(a), 30000)
        })
    }
    const handleSetCameraRestPosition = () => {
        const orbiter = refOrbiter.current
        const context = refContext.current
        if (!context || !orbiter) return

        orbiter.cameraInitialState = context.camera.getCurrentState()
        orbiter.resetZoom()
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
                {settingValues && (
                    <Settings<T>
                        values={settingValues}
                        onChange={setSettingValues}
                    />
                )}
                {error && <div className={styles.error}>{error}</div>}
            </div>
        )
    }

    return (
        <div className={Theme.classNames.join(className, styles.Tgd)}>
            <div
                className={Theme.classNames.join(
                    styles.actions,
                    !loading && styles.enabled
                )}
            >
                <div>
                    <IconOrientation onClick={() => setLandscape(!landscape)} />
                </div>
                <div>
                    <IconSnapshot onClick={handleScreenshot} />
                </div>
                {fullscreenAvailable && (
                    <div>
                        <IconFullscreen onClick={handleFullscreen} />
                    </div>
                )}
                {controller && (
                    <div>
                        <IconPin onClick={handleSetCameraRestPosition} />
                    </div>
                )}
            </div>
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
                    {settingValues && (
                        <Settings<T>
                            values={settingValues}
                            onChange={setSettingValues}
                        />
                    )}
                    {error && <div className={styles.error}>{error}</div>}
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

async function loadAssets({
    glb,
    data,
    text,
    image,
}: Partial<AssetsToLoad> = {}): Promise<Assets> {
    const assets: Assets = {
        glb: {},
        data: {},
        text: {},
        image: {},
    }
    const loaders: Array<() => Promise<void>> = []
    if (image) {
        Object.keys(image).forEach((key) => {
            loaders.push(async () => {
                const url = image[key]
                console.log("Loading image:", url)
                const asset = await tgdLoadImage(url)
                if (asset) assets.image[key] = asset
            })
        })
    }
    if (glb) {
        Object.keys(glb).forEach((key) => {
            loaders.push(async () => {
                const url = glb[key]
                console.log("Loading GLB:", url)
                const asset = await tgdLoadGlb(url)
                if (asset) assets.glb[key] = asset
            })
        })
    }
    if (data) {
        Object.keys(data).forEach((key) => {
            loaders.push(async () => {
                const url = data[key]
                const asset = await tgdLoadArrayBuffer(url)
                if (asset) assets.data[key] = asset
            })
        })
    }
    if (text) {
        Object.keys(text).forEach((key) => {
            loaders.push(async () => {
                const url = text[key]
                const asset = await tgdLoadText(url)
                if (asset) assets.text[key] = asset
            })
        })
    }
    await Promise.all(loaders.map((loader) => loader()))
    return assets
}
