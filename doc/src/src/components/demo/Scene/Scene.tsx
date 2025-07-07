import React from "react"
import { TgdContext } from "@tolokoban/tgd"
import { Theme, ViewButton, ViewPanel } from "@tolokoban/ui"
import Style from "./Scene.module.css"

interface SceneViewProps {
    className?: string
    options?: WebGLContextAttributes
    onReady?(ctx: TgdContext): void
    width?: string
    height?: string
    noBorder?: boolean
}
export default function SceneView({
    className,
    options,
    onReady,
    width = "640px",
    height = "480px",
    noBorder = false,
}: SceneViewProps) {
    const refContext = React.useRef<TgdContext | null>(null)
    const refCanvas = React.useRef<HTMLCanvasElement | null>(null)
    const mountCanvas = (canvas: HTMLCanvasElement) => {
        if (!canvas) return

        refCanvas.current = canvas
        const scene = new TgdContext(canvas, options)
        refContext.current = scene
        scene.paint()
        if (onReady) onReady(scene)
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
        <div className={Theme.classNames.join(className, Style.Scene)}>
            <ViewPanel display="flex" justifyContent="flex-end">
                <ViewButton variant="text" onClick={handleFullscreen}>
                    Show fullscreen
                </ViewButton>
            </ViewPanel>
            <canvas style={{ width, height }} ref={mountCanvas}></canvas>
        </div>
    )
}
