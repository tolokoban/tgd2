import {
    TgdCameraPerspective,
    type TgdContext,
    TgdPainterClear,
    TgdPainterGizmo,
    TgdPainterMesh,
    TgdPainterState,
    TgdUniformBufferObjectCamera,
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
    const uniformCamera = new TgdUniformBufferObjectCamera(context)
    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })
    const mesh = new TgdPainterMesh(context, { uniformCamera })
    mesh.debug()
    context.add(
        clear,
        () => {
            uniformCamera.updateData()
        },
        new TgdPainterState(context, {
            depth: "less",
            cull: "back",
            children: [mesh],
        }),
        new TgdPainterState(context, {
            depth: "off",
            blend: "alpha",
            children: [new TgdPainterGizmo(context, { size: 256 })],
        }),
    )
    context.paint()
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            disableDefaultDoubleTap
            controller={{
                inertiaOrbit: 1000,
            }}
            options={{
                preserveDrawingBuffer: true,
                alpha: false,
                antialias: true,
                premultipliedAlpha: false,
            }}
        />
    )
}
