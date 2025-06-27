import {
    TgdContext,
    TgdFilterChromaticAberration,
    TgdFilterHueRotation,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import TextureURL from "@/assets/image/whale-1024.webp"

function init(context: TgdContext, assets: Assets) {
    context.camera.transfo.distance = 6
    // #begin
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    // #end
    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)
    const mesh = new TgdPainterMesh(context, {
        material: new TgdMaterialDiffuse({
            color: texture,
        }),
    })
    mesh.transfo.setPosition(-0.5, 0, 0)
    const mesh2 = new TgdPainterMesh(context, {
        material: new TgdMaterialDiffuse({
            color: texture,
        }),
    })
    mesh2.transfo.setPosition(0.5, 0, 0)
    const meshPainter = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [clear, mesh, mesh2],
    })
    const fb = new TgdPainterFramebuffer(context, {
        children: [meshPainter],
        depthBuffer: false,
        textureColor0: new TgdTexture2D(context),
    })
    const chromaticAberrationFilter = new TgdFilterChromaticAberration({
        strength: 10,
    })
    const hueRotationFilter = new TgdFilterHueRotation()
    const filters = new TgdPainterFilter(context, {
        filters: [hueRotationFilter, chromaticAberrationFilter],
        texture: fb.textureColor0,
    })
    context.add(
        fb,
        filters,
        new TgdPainterLogic((time, delay) => {
            mesh.transfo.orbitAroundX(delay * Math.sin(time * 0.5))
            mesh.transfo.orbitAroundZ(delay * 0.341)
            mesh2.transfo.orbitAroundX(delay * Math.sin(time * 0.714))
            mesh2.transfo.orbitAroundZ(-delay * 0.471)
            chromaticAberrationFilter.strength = Math.sin(time) * 10
            hueRotationFilter.hueShiftInRadians += delay
        })
    )
    context.play()
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                image: {
                    texture: TextureURL,
                },
            }}
        />
    )
}
