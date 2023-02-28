import React from "react"
import { Scene } from "tgd2"

interface SceneViewProps {
    className?: string
    options?: WebGLContextAttributes
    onReady?(scene: Scene): void
}
export default function SceneView({
    className,
    options,
    onReady,
}: SceneViewProps) {
    const mountCanvas = (canvas: HTMLCanvasElement) => {
        if (!canvas) return

        const scene = new Scene(canvas, options)
        scene.paint()
        if (onReady) onReady(scene)
    }
    return (
        <canvas
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
            }}
            ref={mountCanvas}
            className={className}
            width={480}
            height={640}
        ></canvas>
    )
}
