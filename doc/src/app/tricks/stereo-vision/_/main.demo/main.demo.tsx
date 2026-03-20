import { TgdContext, TgdPainterClear, TgdPainterGroup, TgdPainterMeshGltf, TgdPainterState } from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import SuzanneURL from "@/assets/mesh/suzanne.glb"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const clearColor = new TgdPainterClear(context, {
        depth: 1,
        color: [0.3, 0.2, 0.1, 1],
    })
    const clearDepth = new TgdPainterClear(context, {
        depth: 1,
    })
    const mesh = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzanne,
    })
    const state = new TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [mesh],
    })
    const group = new TgdPainterGroup([/*clearDepth,*/ state])
    context.add(
        clearColor,
        clearDepth,
        (time: number, delta: number) => {
            // mesh.transfo.setEulerRotation(0, time * 60, 0)
            const { width, height } = context
            context.viewportExec(
                () => {
                    console.log("viewportExec")
                },
                { width: width / 2 },
            )
        },
        // (time: number, delta: number) => {
        //     const { width, height } = context
        //     context.viewportExec(
        //         () => {
        //             group.paint(time, delta)
        //         },
        //         { width: width / 2, height: height / 2 },
        //     )
        //     context.viewportExec(
        //         () => {
        //             group.paint(time, delta)
        //         },
        //         { width: width / 2, height: height / 2, y: height / 16 },
        //     )
        //     context.viewportExec(
        //         () => {
        //             group.paint(time, delta)
        //         },
        //         { x: width / 2, width: width / 2 },
        //     )
        // },
        group,
    )
    context.paint()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: {
                    suzanne: SuzanneURL,
                },
            }}></View>
    )
}
