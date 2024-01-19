import { TgdPainterClear, TgdPainterLogic, TgdContext } from "@tolokoban/tgd"

// #begin
function createScene(canvas: HTMLCanvasElement): TgdContext {
    const scene = new TgdContext(canvas)
    const clear = new TgdPainterClear(scene.gl, { color: [0.5, 0.5, 0.5, 1] })
    const logic = new TgdPainterLogic((_time, delay) => {
        const speed = delay * 0.001
        if (scene.inputs.key("r")) {
            clear.red = Math.max(0, clear.red - speed)
        }
        if (scene.inputs.key("g")) {
            clear.red = Math.max(0, clear.green - speed)
        }
        if (scene.inputs.key("b")) {
            clear.red = Math.max(0, clear.blue - speed)
        }
        if (scene.inputs.key("R")) {
            clear.red = Math.max(0, clear.red + speed)
        }
        if (scene.inputs.key("G")) {
            clear.red = Math.max(0, clear.green + speed)
        }
        if (scene.inputs.key("B")) {
            clear.red = Math.max(0, clear.blue + speed)
        }
    })
    scene.addPainters(clear, logic)
    scene.animate = true
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
