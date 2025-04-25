import {
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdPainterSegments,
    TgdPainterSegmentsData,
    TgdPainterState,
    TgdVec3,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
    // #begin
    new TgdControllerCameraOrbit(context, { inertiaOrbit: 1000 })
    context.camera.transfo.distance = 50
    const clear = new TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    })
    const data = new TgdPainterSegmentsData()
    const r = 5
    const p = new TgdVec3(0, 0, 0)
    let first = true
    for (let step = -50; step < 50; step++) {
        const ang = step * 0.5
        const x = r * Math.cos(ang)
        const y = step * 0.2
        const z = r * Math.sin(ang)
        const thickness = 1.0 - Math.abs(step) / 50
        if (first) first = false
        else
            data.add(
                [p.x, p.y, p.z, thickness],
                [x, y, z, thickness],
                [thickness, 0],
                [thickness, 0]
            )
        p.x = x
        p.y = y
        p.z = z
    }
    const segments = new TgdPainterSegments(context, {
        makeDataset: data.makeDataset,
        roundness: 6,
        minRadius: 4,
    })
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [segments],
    })
    context.add(clear, state)
    context.paint()
    // #end
}

export default function Demo() {
    return <View onReady={init} gizmo />
}
