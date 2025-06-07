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
    tgdSdfSphere,
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
        voxelSize: 1 / 8,
        sdfPoint(x, y, z) {
            const p: ArrayNumber3 = [x, y, z]
            const o: ArrayNumber3 = [0, 0.5, 0]
            return Math.min(
                tgdSdfCapsule(p, o, [0, -1, -0.4], 0.5, 0.2),
                tgdSdfCapsule(p, o, [1.2, -1.6, 1.6], 0.5, 0.3),
                tgdSdfCapsule(p, o, [-1.5, -1, -1.2], 0.5, 0.1),
                tgdSdfCapsule(p, o, [-1.2, -1.5, 1.2], 0.5, 0.2),
                tgdSdfCapsule(p, o, [-0.2, 1.5, 0.2], 0.5, 0.4),
                tgdSdfSphere(p, [0, 0, 0], 0.8)
            )
        },
        smoothingLevel: 2,
    }
    const geometry = tgdMakeGeometryFromVolume(options)
    const mesh = new TgdPainterMesh(ctx, {
        geometry,
        material: new TgdMaterialFaceOrientation(),
    })
    const dataPoint = tgdMakePointsCloudFromVolume(options, 1)
    // const cloud = new TgdPainterPointsCloud(ctx, {
    //     dataPoint,
    // })
    const state = new TgdPainterState(ctx, {
        depth: webglPresetDepth.less,
        children: [mesh],
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
