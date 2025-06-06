import {
    ArrayNumber3,
    MakeGeometryFromVolumeOptions,
    TgdContext,
    TgdControllerCameraOrbit,
    tgdMakeGeometryFromVolume,
    tgdMakePointsCloudFromVolume,
    TgdMaterialFaceOrientation,
    TgdPainterAxes,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterPointsCloud,
    TgdPainterState,
    tgdSdfCapsule,
    webglPresetDepth,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

function init(ctx: TgdContext) {
    ctx.camera.transfo.distance = 9
    new TgdControllerCameraOrbit(ctx, {
        inertiaOrbit: 1000,
    })
    // #begin Initializing WebGL
    const options: MakeGeometryFromVolumeOptions = {
        bboxCorner: [-2, -2, -2],
        bboxSize: [4, 4, 4],
        voxelSize: 1 / 16,
        sdfPoint(x, y, z) {
            const p: ArrayNumber3 = [x, y, z]
            const a: ArrayNumber3 = [-1, 0, 0]
            const b: ArrayNumber3 = [+1, 0, 0]
            const c: ArrayNumber3 = [-1, +1, 0]
            return tgdSdfCapsule(p, a, b, 0.5, 0)
            // return Math.min(
            //     tgdSdfCapsule(p, a, b, 0.5, 0),
            //     tgdSdfCapsule(p, a, c, 0.25, 0.1)
            // )
        },
    }
    const geometry = tgdMakeGeometryFromVolume(options)
    const mesh = new TgdPainterMesh(ctx, {
        geometry,
        material: new TgdMaterialFaceOrientation(),
    })
    const dataPoint = tgdMakePointsCloudFromVolume(options, 1)
    console.log("🚀 [marching-cubes.demo] dataPoint =", dataPoint) // @FIXME: Remove this line written on 2025-06-06 at 15:42
    const cloud = new TgdPainterPointsCloud(ctx, {
        dataPoint,
    })
    const state = new TgdPainterState(ctx, {
        depth: webglPresetDepth.less,
        children: [cloud, mesh],
    })
    ctx.add(
        new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),
        state
    )
    ctx.paint()
    // #end
    state.add(new TgdPainterAxes(ctx, { scale: 2 }))
}

export default function Demo() {
    return <View onReady={init} />
}
