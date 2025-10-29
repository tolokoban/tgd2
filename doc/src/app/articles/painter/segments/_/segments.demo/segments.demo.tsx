import {
    ArrayNumber2,
    ArrayNumber4,
    tgdCanvasCreatePalette,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialDiffuse,
    TgdMaterialGhost,
    TgdPainterClear,
    TgdPainterSegments,
    TgdPainterSegmentsData,
    TgdPainterState,
    TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
    // #begin
    context.camera.transfo.distance = 50
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxDistance: 50,
        minDistance: 5,
        speedZoom: 50,
    })
    const clear = new TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    })
    const data = new TgdPainterSegmentsData()
    const radius = 10
    const nodes: ArrayNumber4[] = []
    const width = 50
    for (let step = -width; step < width; step++) {
        const ang = step * 0.5
        const r = radius * Math.cos((step * Math.PI * 0.5) / width)
        const x = r * Math.cos(ang)
        const y = step * 0.2
        const z = r * Math.sin(ang)
        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)
        nodes.push([x, y, z, thickness])
    }
    for (let i = 1; i < nodes.length; i++) {
        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes.length + 1), 0]
        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes.length + 1), 0]
        data.add(nodes[i - 1], nodes[i], uv0, uv1)
    }
    const palette = new TgdTexture2D(context).loadBitmap(
        tgdCanvasCreatePalette(["#f44", "#ff4", "#4f4", "#4ff", "#44f"])
    )
    const segments = new TgdPainterSegments(context, {
        makeDataset: data.makeDataset,
        roundness: 6,
        minRadius: 4,
        // material: new TgdMaterialDiffuse({
        //     color: palette,
        // }),
        material: new TgdMaterialGhost(),
    })
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [segments],
    })
    context.add(clear, state)
    context.paint()
    // #end
    context.inputs.pointer.eventHover.addListener((event) => {
        const { x, y } = event.current
        const [R, G, B] = context.readPixel(x, y)
        console.log(
            `%c(${R}, ${G}, ${B})]`,
            `color:#777;background:rgb(${R},${G},${B})`
        )
    })
}

export default function Demo() {
    return (
        <View
            onReady={init}
            gizmo
            options={{
                preserveDrawingBuffer: true,
            }}
        />
    )
}
