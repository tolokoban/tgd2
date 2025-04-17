import React from "react"
import { ViewPanel, ViewSwitch } from "@tolokoban/ui"
import {
    tgdCalcModulo,
    TgdContext,
    TgdControllerCameraOrbit,
    tgdMakeMeshGlbPainter,
    TgdMaterialFlat,
    TgdPainterAxes,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdTexture2D,
    webglPresetBlend,
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
    // new TgdControllerCameraOrbit(context)
    const clear = new TgdPainterClear(context, {
        depth: 1,
    })
    const cube = new TgdPainterMesh(context)
    cube.transfo.setPosition(11.02, 0, -8.75).setScale(3)
    const background = new TgdPainterBackground(
        context,
        new TgdTexture2D(context).loadBitmap(BackgroundURL)
    )
    const { painter } = tgdMakeMeshGlbPainter({
        context,
        data: assets.glb.scene,
        node: "Building",
        overrideMaterial: () => () =>
            new TgdMaterialFlat({ color: [1, 0, 1, 1] }),
    })
    const mask = new TgdPainterState(context, {
        color: false,
        cull: webglPresetCull.back,
        children: [painter],
    })
    context.add(
        clear,
        background,
        new TgdPainterState(context, {
            depth: webglPresetDepth.lessOrEqual,
            children: [mask, cube],
        }),
        new TgdPainterLogic(time => {
            const mod = tgdCalcModulo(time * 0.1, 0, 2)
            let y = 0
            if (mod < 1) y = mod * 25
            else y = 25 * (2 - mod)
            const { x, z } = cube.transfo.position
            cube.transfo.setPosition(x, y, z)
        })
    )
    context.play()
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
