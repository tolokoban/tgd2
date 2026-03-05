import {
    TgdContext,
    TgdPainterClear,
    TgdPainterState,
    TgdPainterGizmo,
    TgdPainterMesh,
    TgdCameraPerspective,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext) {
    const { camera } = context
    if (camera instanceof TgdCameraPerspective) {
        camera.near = 0.1
        camera.far = 10
    }
    camera.fitSpaceAtTarget(2.2, 2.2)
    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })
    context.add(
        clear,
        new TgdPainterState(context, {
            depth: "less",
            cull: "back",
            children: [new TgdPainterMesh(context)],
        }),
        new TgdPainterGizmo(context),
    )
    context.paint()
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            controller={{
                inertiaOrbit: 1000,
            }}
            options={{
                preserveDrawingBuffer: true,
            }}
        />
    )
}
