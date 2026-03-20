import {
    type ArrayNumber2,
    type ArrayNumber4,
    tgdCalcDegToRad,
    tgdCalcRadToDeg,
    tgdCanvasCreatePalette,
    type TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialDiffuse,
    TgdMaterialFlatTexture,
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
    context.camera.transfo.distance = 75
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 10,
        minZoom: 0.01,
        speedZoom: 1,
    })
    const clear = new TgdPainterClear(context, {
        color: [0.1, 0.1, 0.1, 1],
        depth: 1,
    })
    const radius = 10
    const width = 50
    const data1 = new TgdPainterSegmentsData()
    const nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]
    for (let step = -width; step < width; step++) {
        const ang = step * 0.5
        const r = radius * Math.cos((step * Math.PI * 0.5) / width)
        const x = r * Math.cos(ang)
        const y = step * 0.2
        const z = r * Math.sin(ang)
        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)
        nodes1.push([x, y, z, thickness])
    }
    nodes1.push([0, 1000, 0, 0])
    for (let i = 1; i < nodes1.length; i++) {
        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]
        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]
        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1)
    }
    const palette = new TgdTexture2D(context).loadBitmap(
        tgdCanvasCreatePalette(["#f44", "#ff4", "#4f4", "#4ff", "#44f"]),
    )
    const segments = new TgdPainterSegments(context, {
        dataset: data1.makeDataset,
        roundness: 16,
        minRadius: 2,
        material: new TgdMaterialFlatTexture({
            texture: palette,
        }),
    })
    segments.debug()
    segments.transfo.orbitAroundZ(tgdCalcDegToRad(90))
    const state = new TgdPainterState(context, {
        depth: "less",
        children: [segments],
    })
    context.add(clear, state)
    context.paint()
    // #end
    context.inputs.pointer.eventHover.addListener((event) => {
        const { x, y } = event.current
        const [R, G, B] = context.readPixel(x, y)
        console.log(`%c(${R}, ${G}, ${B})]`, `color:#777;background:rgb(${R},${G},${B})`)
    })
    return ({ minRadius }: { minRadius: number }) => {
        segments.minRadius = minRadius
        context.paint()
    }
}

export default function Demo() {
    return (
        <View
            onReady={init}
            gizmo
            options={{
                preserveDrawingBuffer: true,
            }}
            settings={{
                minRadius: {
                    label: "minRadius",
                    value: 2,
                    min: 0,
                    max: 16,
                    step: 1,
                },
            }}
        />
    )
}
