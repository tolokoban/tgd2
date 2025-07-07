import {
    TgdContext,
    TgdControllerCameraOrbit,
    TgdGeometryGltf,
    TgdPainterXRay,
    TgdPainterClear,
    TgdPainterState,
    webglPresetCull,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import BrainURL from "@/assets/mesh/brain.glb"
import SuzanneURL from "@/assets/mesh/suzanne.glb"

function init(context: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    const brain = new TgdPainterXRay(context, {
        color: [0.1, 0.2, 1, 1],
        exponent: 1.2,
        intensity: 4,
        geometry: new TgdGeometryGltf({ data: assets.glb.brain }),
    })
    const suzanne = new TgdPainterXRay(context, {
        color: [1, 0.333, 0.1, 1],
        exponent: 5,
        intensity: 20,
        geometry: new TgdGeometryGltf({
            data: assets.glb.suzanne,
        }),
    })
    const state = new TgdPainterState(context, {
        children: [brain, suzanne],
        depth: webglPresetDepth.less,
    })
    context.add(clear, state)
    context.paint()
    context.camera.transfo.distance = 5
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 2000,
    })
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: {
                    brain: BrainURL,
                    suzanne: SuzanneURL,
                },
            }}
        />
    )
}
