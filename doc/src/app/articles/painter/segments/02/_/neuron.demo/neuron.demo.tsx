import {
    tgdCalcDegToRad,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterSegments,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd";
import View, { Assets } from "@/components/demo/Tgd";

import NeuronURL from "./AA0622.swc";
import { makeSegmentsData } from "./swc";

function init(context: TgdContext, assets: Assets) {
    try {
        // #begin
        const { data, center, bbox } = makeSegmentsData(assets.text.swc);
        context.camera.transfo.position = center;
        context.camera.transfo.distance = Math.max(bbox.x, bbox.y, bbox.z);
        context.camera.far = 10 * context.camera.transfo.distance;
        context.camera.near = 1e-3;
        new TgdControllerCameraOrbit(context, {
            inertiaOrbit: 1000,
            speedZoom: context.camera.transfo.distance * 1e-3,
            geo: {
                minLat: tgdCalcDegToRad(-60),
                maxLat: tgdCalcDegToRad(60),
            },
        });
        const clear = new TgdPainterClear(context, {
            color: [0.3, 0.35, 0.4, 1],
            depth: 1,
        });
        const segments = new TgdPainterSegments(context, {
            dataset: data.makeDataset,
            roundness: 6,
            minRadius: .2,
            material: new TgdMaterialDiffuse(),
        });
        const state = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [clear, segments],
        });
        context.add(clear, state);
        context.paint();
        // #end
    } catch (ex) {
        console.error("Error in neuron demo!", ex);
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
    );
}
