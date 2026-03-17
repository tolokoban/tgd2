import {
    TgdCameraPerspective,
    type TgdContext,
    TgdMaterialDiffuse,
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
    const material = new TgdMaterialDiffuse({ lockLightsToCamera: true })
    const meshes: TgdPainterMesh[] = []
    const S = 0.6
    for (const x of [-S, +S]) {
        for (const y of [-S, +S]) {
            meshes.push(
                new TgdPainterMesh(context, {
                    uniformCamera,
                    material,
                    transfo: {
                        position: [x, y, 0],
                    },
                }),
            )
        }
    }
    context.add(
        clear,
        () => {
            uniformCamera.updateData()
        },
        new TgdPainterState(context, {
            depth: "less",
            cull: "back",
            children: meshes,
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
