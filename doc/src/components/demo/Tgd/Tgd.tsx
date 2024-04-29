import React from "react"
import { TgdContext } from "@tolokoban/tgd"
import { Theme, ViewButton, ViewPanel } from "@tolokoban/ui"

import Style from "./tgd.module.css"

interface TgdProps {
    className?: string
    options?: WebGLContextAttributes
    onReady?(scene: TgdContext): void
    width?: string
    height?: string
    noBorder?: boolean
}
export default function Tgd({
    className,
    options,
    onReady,
    width = "640px",
    height = "480px",
    noBorder = false,
}: TgdProps) {
    const [fullscreenAvailable, setFullscreenAvailable] = React.useState(false)
    const refContext = React.useRef<TgdContext | null>(null)
    const refCanvas = React.useRef<HTMLCanvasElement | null>(null)
    const mountCanvas = (canvas: HTMLCanvasElement) => {
        if (!canvas) return

        refCanvas.current = canvas
        const context = new TgdContext(canvas, options)
        refContext.current = context
        if (onReady) onReady(context)
        context.paint()
    }
    const handleFullscreen = () => {
        const canvas = refCanvas.current
        if (!canvas) return

        canvas.requestFullscreen()
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
    if (noBorder)
        return (
            <canvas
                className={className}
                style={{ width, height }}
                ref={mountCanvas}
            ></canvas>
        )

    return (
        <div className={Theme.classNames.join(className, Style.Tgd)}>
            <ViewPanel display="flex" justifyContent="flex-end">
                {fullscreenAvailable && (
                    <ViewButton variant="text" onClick={handleFullscreen}>
                        Afficher en plein écran
                    </ViewButton>
                )}
            </ViewPanel>
            <canvas style={{ width, height }} ref={mountCanvas}></canvas>
        </div>
    )
}
