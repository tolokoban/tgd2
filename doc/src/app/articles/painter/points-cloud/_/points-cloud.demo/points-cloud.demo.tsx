import {
    tgdCanvasCreatePalette,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdDataset,
    TgdGeometryBox,
    TgdMaterialFaceOrientation,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterPointsCloud,
    TgdPainterState,
    TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd";
import View, { Assets } from "@/components/demo/Tgd";

import MonkeyURL from "@/assets/mesh/high-res-monkey.glb";

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera.fitSpaceAtTarget(5, 5);
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 5,
        minZoom: 0.5,
        speedZoom: 1,
    });
    const clear = new TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    });
    const dataset = new TgdDataset({
        POSITION: "vec4",
    });
    const coords: number[] = [];
    const values = [-1, +1];
    for (let x of values) {
        for (let y of values) {
            for (let z of values) {
                coords.push(x, y, z, 1);
            }
        }
    }
    dataset.set("POSITION", new Float32Array(coords));
    const texture = new TgdTexture2D(context).loadBitmap(
        tgdCanvasCreatePalette(["#f74"]),
    );
    const cloud = new TgdPainterPointsCloud(context, {
        dataPoint: new Float32Array(dataset.data),
        texture,
    });
    const cube = new TgdPainterMesh(context, {
        geometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),
        material: new TgdMaterialFaceOrientation(),
    });
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [cube, cloud],
    });
    context.add(clear, state);
    context.paint();
    // #end
    return (settings: Record<string, number>) => {
        cloud.shadowIntensity = settings.shadowIntensity;
        cloud.shadowThickness = settings.shadowThickness;
        cloud.specularExponent = settings.specularExponent;
        cloud.specularIntensity = settings.specularIntensity;
        cloud.light = settings.light;
        context.paint();
    };
}

export default function Demo() {
    return (
        <View
            onReady={init}
            gizmo
            options={{
                preserveDrawingBuffer: true,
            }}
            settings={{
                shadowIntensity: {
                    label: "shadowIntensity",
                    value: 0.5,
                },
                shadowThickness: {
                    label: "shadowThickness",
                    value: 1,
                    min: 0,
                    max: 2,
                },
                specularExponent: {
                    label: "specularExponent",
                    value: 10,
                    min: -20,
                    max: 20,
                },
                specularIntensity: {
                    label: "specularIntensity",
                    value: 0.33,
                },
                light: {
                    label: "light",
                    value: 1,
                },
            }}
        />
    );
}
