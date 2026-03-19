import {
    ArrayNumber4,
    tgdCalcMapRange,
    TgdCameraPerspective,
    type TgdContext,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    TgdTime,
    TgdUniformBufferObjectCamera,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"
import { PainterPlayPause } from "@/painter/play-pause"

function init(context: TgdContext) {
    const { camera } = context
    if (camera instanceof TgdCameraPerspective) {
        camera.near = 0.1
        camera.far = 10
    }
    camera.fitSpaceAtTarget(3, 3)
    // #begin
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
    const virtualTimeGreen = times[1]
    const virtualTimeYellow = times[3]
    context.add(
        (time) => {
            uniformCamera.updateData()
            const cases: Array<[mesh: TgdPainterMesh, time: TgdTime]> = [0, 1, 2, 3].map((index) => [
                meshes[index],
                times[index],
            ])
            if (virtualTimeGreen.seconds > 3) {
                virtualTimeGreen.seconds -= 3
            }
            for (const index of [0, 1, 2, 3]) {
                const [mesh, virtualTime] = cases[index]
                const t = index > 0 ? virtualTime.seconds : time
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
        new PainterPlayPause(context, { size: 128 }),
    )
    context.play()
    // #end
    context.inputs.pointer.eventMove.addListener((evt) => {
        if (!evt.shiftKey) return

        virtualTimeGreen.seconds = tgdCalcMapRange(evt.current.x, -1, +1, 0, 3)
        context.paint()
    })
    return ({ speed }: { speed: number }) => {
        virtualTimeYellow.speed = speed
    }
}

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
            settings={{
                speed: {
                    label: "speed",
                    value: 3,
                    min: 0,
                    max: 5,
                    step: 0.5,
                },
            }}
        />
    )
}
