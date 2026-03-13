import {
    ArrayNumber4,
    type TgdContext,
    TgdFilterBlur,
    TgdFilterChromaticAberration,
    TgdFilterMultiply,
    TgdFilterVerbatim,
    TgdFilterZoom,
    TgdLight,
    tgdLoadImage,
    TgdMaterialDiffuse,
    TgdMaterialFlat,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterLogic,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdTexture2D,
} from "@tolokoban/tgd"
import React from "react"
import View, { type Assets } from "@/components/demo/Tgd"

import SuzaneURL from "@/assets/mesh/suzanne.glb"
import ImageURL from "@/assets/image/uv-grid.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const { camera } = context
    camera.fitSpaceAtTarget(3, 3)
    const mesh = createMesh(context, assets, false)
    const framebuffer = new TgdPainterFramebuffer(context, {
        children: [mesh],
        textureColor0: new TgdTexture2D(context, {
            params: {
                minFilter: "LINEAR",
                magFilter: "LINEAR",
                wrapR: "CLAMP_TO_EDGE",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
            },
        }),
    })
    const filterMultiply = new TgdFilterMultiply({
        color: [1, 1, 1, 1],
    })
    const filterZoom = new TgdFilterZoom()
    const filterAberration = new TgdFilterChromaticAberration({
        strength: 10,
    })
    const [hBlur, vBlur] = TgdFilterBlur.createPair({ size: 8 })
    context.add(
        framebuffer,
        new TgdPainterFilter(context, {
            texture: framebuffer.textureColor0,
            filters: [filterMultiply, filterZoom, hBlur, vBlur, filterAberration],
            flipY: true,
        }),
        (time) => {
            filterMultiply.color.reset(
                0.5 + Math.abs(Math.cos(time * 0.458)),
                0.5 + Math.abs(Math.cos(time * 0.725)),
                0.5 + Math.abs(Math.cos(time * 0.881)),
                1,
            )
            filterZoom.zoom = 1 + Math.sin(time * 1.6) * 0.1
            const blur = Math.max(0, Math.sin(time * 0.755))
            hBlur.strength = blur
            vBlur.strength = blur
        },
    )
    context.play()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: {
                    suzane: SuzaneURL,
                },
                image: {
                    image: ImageURL,
                },
            }}
        />
    )
}

function createMesh(context: TgdContext, assets: Assets, flat: boolean) {
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    const color: ArrayNumber4 = [0.9, 0.3, 0.7, 1]
    const mesh = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: flat
            ? new TgdMaterialFlat({ color })
            : new TgdMaterialDiffuse({
                  color,
                  ambient: new TgdLight({
                      color: [0.8, 0.8, 0.8, 0],
                  }),
                  lockLightsToCamera: true,
              }),
    })
    const background = new TgdPainterBackground(context, {
        texture: new TgdTexture2D(context).loadBitmap(assets.image.image),
    })
    return new TgdPainterState(context, {
        depth: "less",
        blend: "off",
        cull: "back",
        children: [
            clear,
            background,
            mesh,
            (time) => {
                mesh.transfo.setEulerRotation(time * 50, time * 71.24, time * -34.85)
            },
        ],
    })
}
