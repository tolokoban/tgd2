import React from "react"
import {
    tgdCalcModulo,
    TgdContext,
    tgdMakeMeshGlbPainter,
    TgdMaterialFlat,
    TgdPainterBackgroundWithDepth,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdTexture2D,
    webglPresetCull,
    webglPresetDepth,
} from "@tolokoban/tgd"

import View, { Assets } from "@/components/demo/Tgd"

import BackgroundURL from "./background.webp"
import BackgroundGLB from "./background.glb"
import SuzanneURL from "@/assets/mesh/suzanne.glb"

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera = assets.glb.scene.createCameraByName("Camera")
    console.log(context.camera.toCode())
    const { painter } = tgdMakeMeshGlbPainter({
        context,
        data: assets.glb.scene,
        node: "Building",
        overrideMaterial: () => () =>
            new TgdMaterialFlat({ color: [1, 0, 1, 1] }),
    })
    const background = new TgdPainterBackgroundWithDepth(context, {
        background: new TgdTexture2D(context)
            .loadBitmap(BackgroundURL)
            .setParams({
                wrapS: "MIRRORED_REPEAT",
            }),
        children: [painter],
    })
    const object = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzanne,
    })
    object.transfo.setPosition(11.02, 0, -8.75).setScale(1.5).setScale(8)

    const cube = new TgdPainterMesh(context)
    cube.transfo.setPosition(11.02, 10, -8.75).setScale(15)

    context.add(
        background,
        new TgdPainterState(context, {
            depth: webglPresetDepth.lessOrEqual,
            children: [
                new TgdPainterLogic(() => {
                    TgdPainterState.debug(context.gl)
                }),
                cube,
            ],
        }),
        // new TgdPainterState(context, {
        //     depth: webglPresetDepth.lessOrEqual,
        //     children: [object],
        // }),
        new TgdPainterLogic(time => {
            const mod = tgdCalcModulo(time * 0.1, 0, 2)
            let y = 0
            if (mod < 1) y = mod * 25
            else y = 25 * (2 - mod)
            const { x, z } = object.transfo.position
            object.transfo.setPosition(x, y, z)
            object.transfo.setEulerRotation(time, time * 47, -time * 120)
        })
    )
    window.setTimeout(() => context.paint(), 1000)
    // #end
}

export default function Demo() {
    const handleInit = (context: TgdContext, assets: Assets) => {
        init(context, assets)
    }
    const size = 500

    return (
        <View
            onReady={handleInit}
            width={`${size * 1.7777777777777}px`}
            height={`${size}px`}
            assets={{
                glb: {
                    suzanne: SuzanneURL,
                    scene: BackgroundGLB,
                },
            }}
        ></View>
    )
}
