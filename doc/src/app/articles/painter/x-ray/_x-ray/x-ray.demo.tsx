import {
    TgdContext,
    TgdControllerCameraOrbit,
    TgdGeometryGltf,
    TgdPainterXRay,
    TgdPainterClear,
    TgdPainterState,
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
    return (uniforms: Record<string, number>) => {
        const exponent1 = uniforms.exponent1 ?? 1.2
        const intensity1 = uniforms.intensity1 ?? 4
        brain.exponent = exponent1
        brain.intensity = intensity1
        const exponent2 = uniforms.exponent2 ?? 5
        const intensity2 = uniforms.intensity2 ?? 20
        suzanne.exponent = exponent2
        suzanne.intensity = intensity2
        context.paint()
    }
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
            settings={{
                exponent1: {
                    label: "exponent (brain)",
                    value: 1.2,
                    min: -20,
                    max: 20,
                },
                intensity1: {
                    label: "intentity (brain)",
                    value: 4,
                    min: 0,
                    max: 20,
                },
                exponent2: {
                    label: "exponent (monkey)",
                    value: 5,
                    min: -20,
                    max: 20,
                },
                intensity2: {
                    label: "intentity (monkey)",
                    value: 20,
                    min: 0,
                    max: 20,
                },
            }}
        />
    )
}
