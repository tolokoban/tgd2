import {
    ArrayNumber4,
    TgdCameraPerspective,
    type TgdContext,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    TgdTime,
    TgdUniformBufferObjectCamera,
    tgdCalcModulo,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext) {
    const { camera } = context
    if (camera instanceof TgdCameraPerspective) {
        camera.near = 0.1
        camera.far = 10
    }
    camera.fitSpaceAtTarget(3, 3)
    const uniformCamera = new TgdUniformBufferObjectCamera(context)
    const clear = new TgdPainterClear(context, { color: [0.2, 0.1, 0, 1], depth: 1 })
    const colors: ArrayNumber4[] = [
        [1, 0.5, 0.5, 1],
        [0.5, 1, 0.5, 1],
        [0.5, 0.5, 1, 1],
        [1, 1, 0, 1],
    ]
    const S = 0.7
    const meshes: TgdPainterMesh[] = []
    for (const y of [+S, -S]) {
        for (const x of [-S, +S]) {
            const color = colors.shift()
            const material = new TgdMaterialDiffuse({
                color,
            })
            meshes.push(
                new TgdPainterMesh(context, {
                    material,
                    uniformCamera,
                    transfo: { position: [x, y, 0] },
                }),
            )
        }
    }
    const times: TgdTime[] = [0, 1, -1, 3].map((speed) => new TgdTime({ speed, context }))
    context.add(
        (time) => {
            uniformCamera.updateData()
            const cases: Array<[mesh: TgdPainterMesh, time: TgdTime]> = [0, 1, 2, 3].map((index) => [
                meshes[index],
                times[index],
            ])
            const virtualTime = times[1]
            if (virtualTime.seconds > 3) {
                virtualTime.seconds -= 3
                console.log("JUMP!")
            }
            console.log(virtualTime.seconds)
            for (const [mesh, virtualTime] of cases) {
                const t = virtualTime.speed !== 0 ? virtualTime.seconds : time
                const angY = t * 30
                mesh.transfo.setEulerRotation(0, angY, 0)
            }
        },
        clear,
        new TgdPainterState(context, {
            depth: "less",
            cull: "back",
            children: meshes,
        }),
    )
    context.play()
    context.inputs.pointer.eventTap.addListener(() => {
        if (context.playing) context.pause()
        else context.play()
    })
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            disableDefaultDoubleTap
            options={{
                preserveDrawingBuffer: true,
                alpha: false,
                antialias: true,
                premultipliedAlpha: false,
            }}
        />
    )
}
