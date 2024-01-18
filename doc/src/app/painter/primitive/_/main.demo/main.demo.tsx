import VERT from "./main.demo.vert"
import {
    intervals,
    TgdAttributes,
    TgdPainterClear,
    TgdPainterPrimitive,
    TgdScene,
} from "@tolokoban/tgd"

// #begin
function createScene(canvas: HTMLCanvasElement): TgdScene {
    const TAU = 2 * Math.PI
    const data: number[] = [0, 0]
    console.log(intervals(0, 1, 100))
    intervals(0.1 * TAU, 0.9 * TAU, 64).forEach(angle => {
        data.push(1, angle)
    })
    const attributes = new TgdAttributes({
        attPos: 2,
    })
    attributes.set("attPos", new Float32Array(data))
    const scene = new TgdScene(canvas)
    const clear = new TgdPainterClear(scene, {
        color: [0, 0.5, 0.8, 1],
    })
    const primitive = new TgdPainterPrimitive(scene, {
        compute: VERT,
        attributes,
        mode: "TRIANGLE_FAN",
        red: 1,
        green: 0.7,
        blue: 0,
    })
    primitive.updateAttributes(data.length / 2)
    scene.addPainter(clear, primitive)
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
