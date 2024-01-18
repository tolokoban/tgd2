import { TgdPainterClear, TgdScene } from "@tolokoban/tgd"

// #begin
function init(canvas: HTMLCanvasElement | null) {
    if (!canvas) return

    const scene = new TgdScene(canvas)
    scene.addPainter(new TgdPainterClear(scene, { color: [1, 0.7, 0, 1] }))
    canvas.addEventListener("dblclick", () => scene.toggleFullscreen())
}
// #end

export default function Demo() {
    return (
        <canvas
            ref={init}
            style={{ width: "100%", height: "50vh" }}
            title="Double-clic pour plein écran"
        ></canvas>
    )
}
