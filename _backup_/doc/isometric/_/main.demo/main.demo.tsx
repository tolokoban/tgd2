import VERT from "./main.demo.vert"
import {
    TgdAtlasGrid,
    TgdLoaderImage,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterIsometric,
    TgdPainterLogic,
    TgdContext,
} from "@tolokoban/tgd"
import AtlasUrl from "./isometric-atlas.png"

// #begin
async function createScene(canvas: HTMLCanvasElement): Promise<TgdContext> {
    const image = await TgdLoaderImage.image(AtlasUrl)
    if (!image) throw Error(`Unable to load image: "${AtlasUrl}"!`)

    const scene = new TgdContext(canvas)
    const clear = new TgdPainterClear(scene.gl, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    const background = new TgdPainterBackground(scene, {
        image,
    })
    const atlas = createAtlas()
    const isometic = new TgdPainterIsometric(scene, {
        image,
        atlas,
        cells: [
            ["grass", 1, 1],
            ["dirt", 0, 0],
        ],
    })
    const logic = new TgdPainterLogic((_time, delay) => {
        const speed = delay * 0.001
        if (scene.inputs.key("9")) isometic.centerX += speed
        if (scene.inputs.key("1")) isometic.centerX -= speed
        if (scene.inputs.key("7")) isometic.centerY += speed
        if (scene.inputs.key("3")) isometic.centerY -= speed
    })
    scene.addPainters(clear, background, isometic, logic)
    return scene
}

function createAtlas(): TgdAtlasGrid {
    const atlas = new TgdAtlasGrid({
        cols: 1, //8,
        rows: 1, //7,
        items: {
            grass: [0, 0],
            dirt: [3, 0],
            roc: [2, 0],
        },
    })
    return atlas
}
// #end

export default function Demo() {
    const handleMount = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return

        createScene(canvas).then(scene => {
            scene.canvas.addEventListener("dblclick", () =>
                scene.toggleFullscreen()
            )
            scene.animate = true
        })
    }
    return (
        <canvas
            ref={handleMount}
            style={{ width: "100%", height: "50vh" }}
            title="Double-clic pour plein écran"
        ></canvas>
    )
}
