import {
    type TgdContext,
    TgdControllerCameraOrbit,
    TgdGeometrySphereIco,
    TgdMaterialDiffuse,
    TgdMaterialFaceOrientation,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext) {
    const clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })
    const material = new TgdMaterialFaceOrientation()
    const meshes = [0, 1, 2, 3].map(
        (subdivisions) =>
            new TgdPainterMesh(context, {
                geometry: new TgdGeometrySphereIco({
                    center: [(subdivisions % 2) - 0.5, Math.floor(subdivisions / 2) - 0.5, 0],
                    subdivisions,
                    radius: 0.5,
                }),
                material,
            }),
    )
    context.add(
        clear,
        new TgdPainterState(context, {
            children: meshes,
            depth: "less",
            cull: "back",
        }),
    )
    context.paint()
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        inertiaZoom: 1000,
    })
}
// #end

export default function Demo() {
    return <View onReady={init} gizmo />
}
