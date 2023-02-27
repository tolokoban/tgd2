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
        scene
            .initialize()
            .then(() => {
                scene.draw()
                if (onReady) onReady(scene)
            })
            .catch(console.error)
    }
    return <canvas ref={mountCanvas} className={className}></canvas>
}
