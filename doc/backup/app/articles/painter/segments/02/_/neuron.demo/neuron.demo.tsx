import {
    tgdCalcDegToRad,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdPainterSegments,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import NeuronURL from "./AA0622.swc"
import { makeSegmentsData } from "./swc"

function init(context: TgdContext, assets: Assets) {
    try {
        // #begin
        const { data, center, bbox } = makeSegmentsData(assets.text.swc)
        console.log("🚀 [neuron.demo] bbox, center =", bbox, center) // @FIXME: Remove this line written on 2025-04-01 at 15:53
        context.camera.transfo.position = center
        context.camera.transfo.distance = Math.max(bbox.x, bbox.y, bbox.z)
        context.camera.far = 10 * context.camera.transfo.distance
        context.camera.near = 1e-3
        console.log("🚀 [neuron.demo] context.camera.far =", context.camera.far) // @FIXME: Remove this line written on 2025-04-01 at 15:53
        new TgdControllerCameraOrbit(context, {
            inertiaOrbit: 1000,
            speedZoom: context.camera.transfo.distance * 0.1,
            geo: {
                minLat: tgdCalcDegToRad(-60),
                maxLat: tgdCalcDegToRad(60),
            },
        })
        const clear = new TgdPainterClear(context, {
            color: [0.3, 0.35, 0.4, 1],
            depth: 1,
        })
        const segments = new TgdPainterSegments(context, {
            makeDataset: data.makeDataset,
            roundness: 6,
            minRadius: 1,
        })
        const state = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [clear, segments],
        })
        context.add(clear, state)
        context.paint()
        // #end
    } catch (ex) {
        console.error("Error in neuron demo!", ex)
    }
}

export default function Demo() {
    return (
        <View
            gizmo
            onReady={init}
            assets={{
                text: {
                    swc: NeuronURL,
                },
            }}
        />
    )
}
