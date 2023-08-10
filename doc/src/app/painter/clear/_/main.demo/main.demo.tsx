import { TgdPainterClear, TgdScene } from "@tolokoban/tgd"

// #begin
function createScene(canvas: HTMLCanvasElement): TgdScene {
    const scene = new TgdScene(canvas)
    const clear = new TgdPainterClear(scene, { color: [1, 0.7, 0, 1] })
    scene.addPainter(clear)
    canvas.addEventListener("click", () => {
        clear.red = Math.random()
        clear.green = Math.random()
        clear.blue = Math.random()
        scene.paint()
    })
    return scene
}
// #end

export default function Demo() {
    const handleMount = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return

        const scene = createScene(canvas)
        scene.canvas.addEventListener("dblclick", () =>
            scene.toggleFullscreen()
        )
    }
    return (
        <canvas
            ref={handleMount}
            style={{ width: "100%", height: "50vh" }}
            title="Double-clic pour plein écran"
        ></canvas>
    )
}
